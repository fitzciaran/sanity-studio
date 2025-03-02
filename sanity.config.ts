import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
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
    //googleMapsInput(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
        {id: 'de', title: 'German'},
        {id: 'es', title: 'Spanish'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['product', 'software', 'accessory', 'string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
