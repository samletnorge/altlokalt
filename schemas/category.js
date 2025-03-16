export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Featured Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
      {
        name: 'companies',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'company'}]}]
      }
  ],
}
