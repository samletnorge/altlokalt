export default {
    name: 'freelancers',
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
          name: 'skills',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'experience',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'relatedCompanyOrEnterprise',
          type: 'reference',
          to: [{type: 'company'}, {type: 'enterprises'}]
        },
      
    ]
  }
  