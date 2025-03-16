export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'relatedCompany',
        title: 'Related Company',
        type: 'reference',
        to: [{ type: 'company' }],
      },
      {
        name: 'relatedEnterprise',
        title: 'Related Enterprise',
        type: 'reference',
        to: [{ type: 'enterprises' }],
      },
    ],
  }
  