//convert time to second
export function toSeconds(timeStr: string, timeMin: string, maxLap: string | number) {
  const [hours, minutes, seconds] = timeMin.split(':').map(Number)
  const timeMinSecond = Math.floor(hours * 3600 + minutes * 60 + seconds)
  let lapTime = Math.floor(timeMinSecond / Number(maxLap))

  if (timeStr === 'DNF') {
    timeStr = '0'
    return timeStr
  } else if (timeStr === timeMin) {
    return timeMinSecond.toString()
  } else if (timeStr[0] === '+' && timeStr[timeStr.length - 1] === 's') {
    let newTimeStr: string | number = timeStr
    if (!newTimeStr.includes('lap')) {
      newTimeStr = timeStr.replace('+', '').replace('s', '')
      newTimeStr = Math.floor(Number(newTimeStr))
      return (timeMinSecond + newTimeStr).toString()
    }
    newTimeStr = timeStr.replace('+', '').replace(' ', '').replace('laps', '')
    return (Number(newTimeStr) * lapTime + timeMinSecond).toString()
  } else {
    let newTimeStr = timeStr
    newTimeStr = timeStr.replace('+', '').replace(' ', '').replace('lap', '')
    if (!timeStr.includes('s')) {
      return (Number(newTimeStr) * lapTime + timeMinSecond).toString()
    }
    newTimeStr = newTimeStr.replace('s', '')
    return (Number(newTimeStr) * lapTime + timeMinSecond).toString()
  }
}

export const countDuplicateValue = (arr: Array<string>) => {
  const counts: any = {}

  arr.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1
  })
  return counts
}

// remove duplicate value
export const removeDuplicateValue = (arr: Array<string>) => {
  const uniq = [...new Set(arr)]
  return uniq
}
