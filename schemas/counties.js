export default {
    name: 'counties',
    title: 'Counties',
    type: 'document',
    fields: [
        {
            name: 'logo',
            title: 'Logo',
            type: 'url',
          },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'population',
            title: 'Population',
            type: 'number'
        },
        {
          name: 'companies',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'company'}]}]
        }
    ]
}
