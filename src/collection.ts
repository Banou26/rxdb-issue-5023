import type { ExtractDocumentTypeFromTypedRxJsonSchema, RxCollection, RxDocument, RxJsonSchema } from 'rxdb'

import { toTypedRxJsonSchema } from 'rxdb'

import { database } from './database'

const testSchemaLiteral = {
  title: 'Test schema',
  description: 'Describes a test',
  version: 0,
  primaryKey: 'foo',
  type: 'object',
  properties: {
    foo: {
      type: 'string',
      maxLength: 255
    },
    bar: { type: 'string' }
  },
  required: ['foo']
} as const

const schemaTyped = toTypedRxJsonSchema(testSchemaLiteral)

export type TestDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>

export type TestMethods = {
  _: undefined
}

export type TestCollectionMethods = {
  __: undefined
}

export type TestDocument = RxDocument<TestDocType, TestMethods>

export const testSchema: RxJsonSchema<TestDocType> = testSchemaLiteral

export type Collection = RxCollection<TestDocument>

const foo: Collection = undefined as any

const typeTest = foo.find({}).exec()

database.addCollections({
  tests: {
    schema: testSchema
  }
})
