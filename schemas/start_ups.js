export default {
    name: 'start_ups',
    title: 'Start-ups',
    type: 'document',
    fields: [

      {
        name: 'logo',
        title: 'Logo',
        type: 'url',
      },
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'address',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'url'
  
      },
      {
        name: 'funding',
        title: 'Funding',
        type: 'string'
      },
      {
        name: 'Investorer',
        title: 'Location',
        type: 'number'
      },
      {
        name: 'video',
        title: 'Video',
        type: 'url',
      },
      
      {
        name: 'slogan',
        type: 'string',
        title: 'Slogan'
      },  
      {
        name: "description",
        type: 'string',
        title: 'levering'
      },
      {
        name: 'hours',
        title: 'åpningtider',
        type: 'string',
       
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },     
      {
        name: 'location',
        title: 'Location',
        type: 'string'
      },
      {
        name: 'contactInformation',
        type: 'object',
        fields: [
          {
            name: 'email',
            type: 'string',
          },
          {
            name: 'phone',
            type: 'string',
          },
          {
            name: 'website',
            type: 'string',
          },
        ],
      }
      ,
        {
          name: 'socialMedia',
          title: 'Social Media Accounts',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'start_ups',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'start_ups' }] }]
        },
        {
          name: 'counties',
          type: 'array',
          of: [{ type: 'counties' }]
        },
      {
        name: 'warehouse',
        type: 'reference',
        to: [{ type: 'warehouse' }]
      },
      {
        name: 'supplier',
        type: 'reference',
        to: [{ type: 'supplier' }]
      },
      {
        name: 'availablePositions',
        type: 'reference',
        to: [{ type: 'availablePositions' }]
      },
      {
        name: 'businessGroup',
        type: 'reference',
        to: [{ type: 'businessGroup' }]
      },
      {
        name: 'daughterCompanies',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'daughterCompany' }] }]
      }
      
    ]
  }
  