export default {
    name: 'consultant',
    title: 'Consultant ',
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
            type: 'string'
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string'
          }
        ]
      },
      {
        name: 'specializations',
        title: 'Specializations',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: [{type: 'company'}]
      },
      {
        name: 'enterprise',
        title: 'Enterprise',
        type: 'reference',
        to: [{type: 'enterprises'}]
      }
    ]
  }
  