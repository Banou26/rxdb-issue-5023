import type { Collection as TestCollection } from './collection'

import { css } from '@emotion/react'
import { useRxCollection, useRxQuery } from 'rxdb-hooks'


export const TestList = ({ ...rest }) => {
  const collection = useRxCollection<TestCollection>('tests')
  const downloadingTestQuery = collection?.find({})
  const { result } = useRxQuery(downloadingTestQuery)
  console.log('result', result)

  return (
    <div>
    </div>
  )
}

export default TestList
