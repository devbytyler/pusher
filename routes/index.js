var express = require('express');
var router = express.Router();
// import Expo from 'expo-server-sdk';

// let expo = new Expo();

var machines = [{
    user: 'Tyler',
    token: 'askfjhaksldjhfalksjdhfadf',
    time: '',
    message: ''
  },
];

var user = {
  token: '123456',
  name: 'Tyler',
  id: '654321'
};

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/machines', function(req, res) {
  res.send(messages);
});

router.post('/machines', function(req, res) {
  machine = {}
  console.log(req.body)
  // machine.name = req.body.name
  // machine.timeleft = req.body.timeleft
  machines.push(machine);
  // sendMessage(user.pushToken, req.body.body)
  res.end('{"success" : "Sent Successfully", "status" : 200}');
});

router.get('/user', function(req, res) {
  res.send(user);
});

router.post('/user', function(req,res){
  user.token = req.body.token.value;
  user.name = req.body.user.name;
  user.id = req.body.user.userId;
  console.log(user)
  res.end('{"success" : "Updated Successfully", "status" : 200}');
})


// function sendMessage(pushToken, body){
//   if (!Expo.isExpoPushToken(pushToken)) {
//     console.error(`Push token ${pushToken} is not a valid Expo push token`);
//     return;
//   }

//   var message = [{
//     to: pushToken,
//     sound: 'default',
//     body: body,
//     data: { withSome: 'data' },
//   }]

//   let chunks = expo.chunkPushNotifications(message);
//   (async () => {
//     for (let chunk of chunks) {
//       try {
//         await expo.sendPushNotificationsAsync(chunk);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   })();
// }

module.exports = router;
