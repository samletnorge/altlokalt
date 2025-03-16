export default {
    name: 'sales',
    title: 'Sales',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product or Service',
        type: 'string'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: [{ type: 'company' }]
      }
    ]
  }
  