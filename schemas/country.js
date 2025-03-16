export default {
    name: 'country',
    title: 'Country',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'population',
            title: 'Population',
            type: 'number'
        },
        {
            name: 'gdp',
            title: 'Gross Domestic Product',
            type: 'number'
        },
        {
            name: 'companies',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'company' }] }]
        }
    ]
}
