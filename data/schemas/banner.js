import { SquareIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'banner',
  title: 'Banner',
  description: 'Image that will be shown in front page, it is good to have as small as possible image size with understandable quality',
  icon: SquareIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Cover Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
  },
})
