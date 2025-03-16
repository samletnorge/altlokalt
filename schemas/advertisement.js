export default {
    name: 'advertisement',
    title: 'Advertisement',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date'
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date'
        }
    ]
}
