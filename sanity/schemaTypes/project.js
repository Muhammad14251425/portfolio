import {defineField, defineType} from 'sanity'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      name:"image",
      title: "image",
      type: "image",
      options: {
        hotspot:true,
      }
    },
    {
      name: "summary",
      title: "summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "technologies",
      type: "array",
      of: [{type: "reference", to: { type: "skill"}}]
      
    },
    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
  ],
    
}