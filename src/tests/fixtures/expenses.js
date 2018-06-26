import moment from 'moment';

export default [{
  id: '1',
  description: 'Rent',
  amount: 25000,
  note: 'Rent for the previous month.',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '2',
  description: 'Gum',
  amount: 195,
  note: '',
  createdAt: 0
}, {
  id: '3',
  description: 'Credit Card',
  amount: 45000,
  note: '',
  createdAt: moment(0).add(4, 'days').valueOf()

}];