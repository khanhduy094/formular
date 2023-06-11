import { createContext, useState } from 'react'
import { DataResult, RaceResult } from 'src/types/race-result.type'
import { useQuery } from 'react-query'
import raceResultApi from 'src/apis/race-result.api'

export type FilterType = {
  year: string
  location: string
}
interface AppContextInterface {
  result: DataResult[]
  filter: FilterType
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

const initialState: AppContextInterface = {
  result: [],
  filter: {
    year: '2023',
    location: 'bahrain'
  },
  setFilter: () => null
}

export const AppContext = createContext<AppContextInterface>(initialState)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [result, setResult] = useState<DataResult[]>(initialState.result)
  const [filter, setFilter] = useState<FilterType>(initialState.filter)
  const { data: raceResult } = useQuery({
    queryKey: ['raceResult', filter],
    queryFn: () => {
      return raceResultApi.getResults(filter)
    },
    onSuccess: (res) => {
      console.log(res.data[0].data)
      setResult(res.data[0].data)
    }
  })

  return <AppContext.Provider value={{ result, filter, setFilter }}>{children}</AppContext.Provider>
}
