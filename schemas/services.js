export default {
    name: 'services',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'contact',
        type: 'object',
        fields: [
          {
            name: 'email',
            type: 'email',
          },
          {
            name: 'phone',
            type: 'string',
          },
        ],
      },
      {
        name: 'relatedCompany',
        type: 'reference',
        to: [{ type: 'company' }],
      },
      {
        name: 'relatedEnterprise',
        type: 'reference',
        to: [{ type: 'enterprises' }],
      },
    ],
  }
  