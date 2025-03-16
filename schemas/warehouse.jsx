export default {
    name: 'warehouse',
    title: 'Warehouse',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'location',
        title: 'Location',
        type: 'geopoint'
      },
      {
        name: 'capacity',
        title: 'Capacity',
        type: 'number'
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: [{type: 'company'}]
      }
    ]
  }
  