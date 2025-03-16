export default {
    name: 'onlineShop',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'url',
        type: 'url'
      },
      {
        name: 'productCategories',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'category' } }]
      }
    ]
  }
  