// const moment = require('moment');
import moment from 'moment';

const hoy = moment();

console.log('fecha de hoy: ', hoy.format('DD/MM/YYYY'));

export default hoy;
// module.exports = hoy;