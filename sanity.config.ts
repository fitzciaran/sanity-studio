import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'prom-test',

  projectId: 'h80aa7ve',
  dataset: 'test2',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'AR-XM', title: 'Spanish'},
        {id: 'en', title: 'English'},
        {id: 'DE-DE', title: 'German'},
        {id: 'ES-ES', title: 'Spanish'},
        {id: 'FR-FR', title: 'French'},
        {id: 'ZH-HK', title: 'Spanish'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['product', 'software', 'accessory', 'string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
