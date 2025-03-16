export default {
    name: 'coupons',
    title: 'Coupons',
    type: 'document',
    fields: [
      {
        name: 'discountAmount',
        title: 'Discount Amount',
        type: 'number',
      },
      {
        name: 'expirationDate',
        title: 'Expiration Date',
        type: 'date',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'reference',
        to: [{type: 'company'}, {type: 'enterprises'}]
      },
    ],
  }
  