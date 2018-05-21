import moment from 'moment';

export default [{
  id: '1',
  desc: 'rent',
  note: '',
  amount: 200000,
  createdAt: 0
},{
  id: '2',
  desc: 'Gum',
  note: '',
  amount: 195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  desc: 'credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
