export default {
    name: 'onlineCV',
    title: 'Online CV',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'contactInformation',
        title: 'Contact Information',
        type: 'object',
        fields: [
          {
            name: 'email',
            title: 'Email',
            type: 'email'
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string'
          },
          {
            name: 'address',
            title: 'Address',
            type: 'string'
          },
        ]
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'experience',
        title: 'Experience',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'relatedCompany',
        title: 'Related Company',
        type: 'reference',
        to: {type: 'company'}
      },
      {
        name: 'relatedEnterprise',
        title: 'Related Enterprise',
        type: 'reference',
        to: {type: 'enterprises'}
      },
    ]
  }
  