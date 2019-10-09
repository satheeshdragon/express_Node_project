var express = require('express');
var router = express.Router();


var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'medical_probook'
})

connection.connect()

console.log('data');

var data = [];

connection.query('SELECT Batch_no FROM mpro_batch_card as batch ', function (err, rows, fields) {
  if (err) throw err

  data = rows[0].Batch_no;
  all_data = rows;

//   if (err) 
//     console.log(err)
// else
//     res.render('Batch', { Batch_data: all_data });

})

connection.query('SELECT sales.*,detail.* FROM mpro_sales as sales JOIN mpro_sales_details as detail ON detail.Sales_id = sales.Sales_id ', function (err, rows, fields) {
  if (err) throw err

  // data = rows[0].Batch_no;
  sales_all_data = rows;

//   if (err) 
//     console.log(err)
// else
//     res.render('Data', { Batch_data: sales_all_data });

})

// connection.end()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express','data': all_data,'sales': sales_all_data});
});

module.exports = router;
