import {defineField, defineType} from 'sanity'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Platform for social media",
      type: "string",
    },
    {
      name:"url",
      title: "url",
      type: "url",
    },
  ],
    
}