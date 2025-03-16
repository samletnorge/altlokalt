export default {
    name: 'availablePositions',
    title: 'Available Positions',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'Requirements',
            title: 'Requirements',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'company',
            title: 'Company',
            type: 'reference',
            to: {type: 'company'}
        }
    ]
}
