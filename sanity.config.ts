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
        {id: 'en', title: 'English'},
        {id: 'EN-GB', title: 'English (UK)'},
        {id: 'EN-INTL', title: 'International English'},
        {id: 'AR-XM', title: 'Arabic'},
        {id: 'CS-CZ', title: 'Czech'},
        {id: 'DA-DK', title: 'Danish'},
        {id: 'DE-DE', title: 'German'},
        {id: 'ET-EE', title: 'Estonian'},
        {id: 'ES-ES', title: 'Spanish'},
        {id: 'FI-FI', title: 'Finnish'},
        {id: 'FR-FR', title: 'French'},
        {id: 'HU-HU', title: 'Hungarian'},
        {id: 'ID-ID', title: 'Indonesian'},
        {id: 'IT-IT', title: 'Italian'},
        {id: 'JA-JP', title: 'Japanese'},
        {id: 'KK-KZ', title: 'Kazakh'},
        {id: 'LT-LT', title: 'Lithuanian'},
        {id: 'LV-LV', title: 'Latvian'},
        {id: 'MS-MY', title: 'Malay'},
        {id: 'NB-NO', title: 'Norwegian'},
        {id: 'NL-NL', title: 'Dutch'},
        {id: 'PL-PL', title: 'Polish'},
        {id: 'PT-PT', title: 'Portuguese'},
        {id: 'RO-RO', title: 'Romanian'},
        {id: 'RU-RU', title: 'Russian'},
        {id: 'SV-SE', title: 'Swedish'},
        {id: 'TH-TH', title: 'Thai'},
        {id: 'TR-TR', title: 'Turkish'},
        {id: 'UK-UA', title: 'Ukrainian'},
        {id: 'VI-VN', title: 'Vietnamese'},
        {id: 'ZH-CN', title: 'Chinese (Simplified)'},
        {id: 'ZH-HK', title: 'Chinese (Traditional, Hong Kong)'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['product', 'software', 'accessory', 'string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
