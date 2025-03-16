export default {
    name: 'hobbies',
    title: 'Hobbies',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [{type: 'reference', to: {type: 'products'}}]
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image'
      }
    ]
  }
  