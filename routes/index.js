var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var count=20;
var change=-1;
function doReduce(){
  count+=change;
  change-=1;
  document.getElementById("reduce").innerHTML="Count" +count+" with change "+ change; 
}
