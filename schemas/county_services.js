export default {
  name: 'county_services',
  title: 'County Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'services_offered',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}