export default {
  name: 'price_cuts',
  type: 'document',
  title: 'Price Cuts',
  fields: [
    {
      name: 'original_price',
      type: 'number',
      title: 'Original Price'
    },
    {
      name: 'sale_price',
      type: 'number',
      title: 'Sale Price'
    },
    {
      name: 'expiration_date',
      type: 'date',
      title: 'Expiration Date'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ],
}