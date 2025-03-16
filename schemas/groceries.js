export default {
    name: 'groceries',
    title: 'Groceries',
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
        name: 'hours',
        title: 'Hours of operation',
        type: 'object',
        fields: [
          {
            name: 'monday',
            title: 'Monday',
            type: 'string',
          },
          {
            name: 'tuesday',
            title: 'Tuesday',
            type: 'string',
          },
          {
            name: 'wednesday',
            title: 'Wednesday',
            type: 'string',
          },
          {
            name: 'thursday',
            title: 'Thursday',
            type: 'string',
          },
          {
            name: 'friday',
            title: 'Friday',
            type: 'string',
          },
          {
            name: 'saturday',
            title: 'Saturday',
            type: 'string',
          },
          {
            name: 'sunday',
            title: 'Sunday',
            type: 'string',
          },
        ]
      }
    ]
  }
  