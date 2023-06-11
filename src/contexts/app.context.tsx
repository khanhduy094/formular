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
  setResult: React.Dispatch<React.SetStateAction<DataResult[]>>
  filter: FilterType
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

const initialState: AppContextInterface = {
  result: [],
  setResult: () => null,
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
      console.log('RES', res.data[0].data)
      setResult(res.data[0].data)
    }
  })

  return <AppContext.Provider value={{ result, setResult, filter, setFilter }}>{children}</AppContext.Provider>
}
