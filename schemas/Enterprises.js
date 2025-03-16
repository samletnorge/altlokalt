export default {
    name: 'enterprises',
    title: 'Enterprises',
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
        name: 'daughterCompanies',
        title: 'Daughter Companies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'daughterCompany'}}]
      },
      {
        name: 'businessGroup',
        title: 'Business Group',
        type: 'reference',
        to: {type: 'businessGroup'}
      },
      {
        name: 'newEnterprises',
        title: 'New Enterprises',
        type: 'array',
        of: [{type: 'reference', to: {type: 'newEnterprises'}}]
      },
    ]
  }
  