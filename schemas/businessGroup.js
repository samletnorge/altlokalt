export default {
    name: 'businessGroup',
    title: 'Business Group',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string'
      },
      {
        name: 'contactInformation',
        title: 'Contact Information',
        type: 'string'
      },
      {
        name: 'enterprises',
        title: 'Enterprises',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'enterprises' } }]
      }
    ]
  }
  