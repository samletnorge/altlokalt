export default {
  name: 'offer',
  title: 'Offers',
  type: 'document',
  fields: [
  {
  name: 'name',
  type: 'string',
  title: 'Offer Name',
  },
  {
  name: 'description',
  type: 'text',
  title: 'Offer Description',
  },
  {
  name: 'expirationDate',
  type: 'date',
  title: 'Offer Expiration Date',
  },
  {
  name: 'image',
  type: 'image',
  title: 'Offer Image',
  },
  ],
  }