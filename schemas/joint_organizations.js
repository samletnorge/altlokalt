export default {
    name: 'joint_organizations',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'description',
        type: 'text'
      },
      {
        name: 'member_organizations',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'branches'}
            ]
          }
        ]
      }
    ]
  }
  