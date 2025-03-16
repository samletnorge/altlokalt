export default {
    name: 'branches',
    title: 'Branches',
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
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string'
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: {
          type: 'company'
        }
      },
    ]
  }
  