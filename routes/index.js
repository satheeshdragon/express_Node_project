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

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('home', { title: 'Express Suit' });
  res.render('home', { title: 'Express','data': all_data,'sales': sales_all_data});
  
  // res.render('home', {layout: 'default', template: 'home-template'});
});





module.exports = router;
