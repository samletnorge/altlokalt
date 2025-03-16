export default {
  name: 'voluntary_work',
  type: 'document',
  title: 'Voluntary Work',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'qualifications',
      type: 'text',
      title: 'Qualifications'
    },
    {
      name: 'expiration_date',
      type: 'date',
      title: 'Expiration Date'
    },
  ],
}