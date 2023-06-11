const cheerio = require('cheerio')
const request = require('request-promise')
const fs = require('fs')

let team = [
  {
    id: 1,
    name: 'Alfa Romeo'
  },
  {
    id: 2,
    name: 'AlphaTauri'
  },
  {
    id: 3,
    name: 'Alpine'
  },
  {
    id: 4,
    name: 'Aston Martin'
  },
  {
    id: 5,
    name: 'Ferrari'
  },
  {
    id: 6,
    name: 'Haas'
  },
  {
    id: 7,
    name: 'McLaren'
  },
  {
    id: 8,
    name: 'Mercedes'
  },
  {
    id: 9,
    name: 'Red bull'
  },
  {
    id: 10,
    name: 'Williams'
  }
]
const years = [
  {
    id: 2021,
    name: '2021',
    driverIds: []
  },
  {
    id: 2022,
    name: '2022',
    driverIds: []
  },
  {
    id: 2023,
    name: '2023',
    driverIds: []
  }
]
const locations = [
  {
    id: 1,
    location: 'bahrain',
    driverIds: []
  },
  {
    id: 2,
    location: 'saudi-arabia',
    driverIds: []
  },
  {
    id: 3,
    location: 'brazil',
    driverIds: []
  }
]
const drivers = []
const data = {
  data: [],
  team,
  drivers,
  years,
  locations
}

//hàm lưu driverIds vào danh sách location
const addDriverIdsToLocation = (location, id) => {
  const findedIndex = locations.findIndex((item) => item.location === location)
  console.log(findedIndex)
  if (locations[findedIndex].driverIds.length) {
    const findedId = locations[findedIndex].driverIds.find((driverId) => driverId === id)
    if (!findedId) {
      locations[findedIndex].driverIds.push(id)
    }
  } else {
    locations[findedIndex].driverIds.push(id)
  }
}

//hàm lưu driverIds vào danh sách năm
const addDriverIdsToYear = (year, id) => {
  const findedIndex = years.findIndex((item) => item.id === year)
  console.log(findedIndex, 'finde')
  if (years[findedIndex].driverIds.length) {
    const findedId = years[findedIndex].driverIds.find((driverId) => driverId === id)
    if (!findedId) {
      years[findedIndex].driverIds.push(id)
    }
  } else {
    years[findedIndex].driverIds.push(id)
  }
}

const addDriver = (driver, driverId) => {
  if (drivers.length) {
    const findedDriver = drivers.find((driver) => driver.id === driverId)
    if (!findedDriver) {
      drivers.push({
        id: driverId,
        name: driver
      })
    }
  } else {
    drivers.push({
      id: driverId,
      name: driver
    })
  }
}

// Lấy ra tên driver và add driver vào danh sách driver
const getDriverName = (nameList = [], driverId, $) => {
  let driverNameSlice = []

  for (let i = 0; i < nameList.length - 1; i++) {
    const name = $(nameList[i])
    driverNameSlice[i] = name.text().trim()
  }
  const driverName = driverNameSlice.join(' ')
  addDriver(driverName, driverId)
  return driverName
}

const getTeamId = (car) => {
  const carName = car.split(' ')
  const teamObj = team.find((team) => team.name.includes(carName[0]))
  return teamObj.id
}

const crawlData = (info) => {
  request(
    `https://www.formula1.com/en/results.html/${info.year}/races/${info.num}/${info.location}/race-result.html`,
    (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html) // load HTML

        const raceResult = []
        if ($('.resultsarchive-table')) {
          $('.resultsarchive-table tbody tr').each((index, el) => {
            // lặp từng phần tử của tr: resultsarchive-table tbody tr
            const rank = $(el).find('td:nth-child(2)').text().trim()
            const driverId = $(el).find('td:nth-child(3)').text().trim()
            const driverNameList = $(el).find('td:nth-child(4) span')
            const car = $(el).find('td:nth-child(5)').text().trim()
            const lap = $(el).find('td:nth-child(6)').text().trim()
            const time = $(el).find('td:nth-child(7)').text().trim()
            const pts = $(el).find('td:nth-child(8)').text().trim()
            console.log(driverId)
            // lưu driverId vào danh sách location
            addDriverIdsToLocation(info.location, driverId)
            // lưu driverId vào danh sách năm
            addDriverIdsToYear(info.year, driverId)
            raceResult.push({
              id_top: rank,
              driverId,
              driverName: getDriverName(driverNameList, driverId, $),
              teamId: getTeamId(car),
              car,
              lap,
              time,
              pts
            })
          })
        } else {
          raceResult.push({
            data: 'No results are currently available'
          })
        }

        data.data.push({
          year: info.year,
          location: info.location,
          data: raceResult
        })
        // console.log(raceResult);
        console.log(data)
        console.log(data.data.length)
        console.log(locations)
        console.log(years)
        fs.writeFileSync('data.json', JSON.stringify(data))
      } else {
        console.log(error)
      }
    }
  )
}

crawlData({ year: 2023, num: 1141, location: 'bahrain' })
crawlData({ year: 2022, num: 1124, location: 'bahrain' })
crawlData({ year: 2021, num: 1064, location: 'bahrain' })
crawlData({ year: 2023, num: 1142, location: 'saudi-arabia' })
crawlData({ year: 2022, num: 1125, location: 'saudi-arabia' })
crawlData({ year: 2021, num: 1106, location: 'saudi-arabia' })
crawlData({ year: 2023, num: 1224, location: 'brazil' })
crawlData({ year: 2022, num: 1137, location: 'brazil' })
crawlData({ year: 2021, num: 1104, location: 'brazil' })
