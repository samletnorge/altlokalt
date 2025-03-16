export default {
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string'
        },
        {
          name: 'website',
          title: 'Website',
          type: 'url'
        }
      ]
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'products' }
          ]
        }
      ]
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [
        { type: 'company' }
      ]
    }

  ],
}
