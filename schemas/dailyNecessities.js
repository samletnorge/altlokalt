export default {
    name: 'dailyNecessities',
    title: 'Daily Necessities',
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
        title: 'Items Sold',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'products'}]
          }
        ]
      }
    ]
  }
  