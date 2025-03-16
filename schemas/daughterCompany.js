export default {
    name: 'daughterCompany',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'address',
        type: 'string'
      },
      {
        name: 'contactInformation',
        type: 'string'
      },
      {
        name: 'parentCompany',
        type: 'reference',
        to: {type: 'company'}
      }
    ]
  }
  