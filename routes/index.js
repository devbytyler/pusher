var express = require('express');
var router = express.Router();

var queue = [{
    user: 'Tyler',
    token: 'askfjhaksldjhfalksjdhfadf',
    time: '',
    message: ''
  },
];

var user = null;

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
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

router.get('/user', function(req, res) {
  res.send(user);
});

router.post('/user', function(req,res){
  console.log("A new user");
  user = req.body
})

module.exports = router;
