import { getLeaderElectorByBroadcastChannel } from 'rxdb/plugins/leader-election'
import { createRxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'

import type { Collection as TestCollection } from './collection'

export type Collections = {
  tests: TestCollection
}

export const database = await createRxDatabase<Collections>({
  name: 'testdb',
  storage: getRxStorageDexie()
})

export type Database = typeof database

const { broadcastChannel } = database.leaderElector()
const leaderElector = getLeaderElectorByBroadcastChannel(broadcastChannel)

export {
  leaderElector,
  broadcastChannel
}
