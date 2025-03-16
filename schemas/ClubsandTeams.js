export default {
    name: 'ClubsandTeams',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'location',
        type: 'string',
      },
      {
        name: 'contactInformation',
        type: 'string',
      },
      {
        name: 'company',
        type: 'reference',
        to: { type: 'company' },
      },
    ]
  }
  