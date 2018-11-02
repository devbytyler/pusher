var express = require('express');
var router = express.Router();

var queue = [{
    user: 'Tyler',
    token: 'askfjhaksldjhfalksjdhfadf',
    time: '',
    message: ''
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/queue', function(req, res) {
  res.send(queue);
});

router.post('/queue', function(req, res) {
  console.log("In Push Post");
  console.log(req.body);
  queue.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
