var express = require('express');
var app = express();
app.use(express.json());
var cors = require('cors');
var axios = require('axios');
var qs = require('qs');
var crypto = require('crypto-js');
var bodyParser = require('body-parser')
const mongoose=require('mongoose');
// const trade=require('./models/trade');
const trade = require('./models/trade');
const port = 3001;

app.use(cors({
origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const url = "mongodb+srv://braincodeishan:Mongodb_88822@cluster0.gicls.mongodb.net/robo?retryWrites=true&w=majority"
mongoose.connect(url)
.then((res)=>{
  console.log("connection successful to db");
})
.catch((err)=>{
  console.log(err);
})



app.post('/', function (req, res) {




console.log(req.body);
const secretKey = "HTb2fTioZ6NxLmgKnxH8hMdcC9NouKeLJO7n3bVo";
var time = new Date().getTime()
let Payload = "symbol="+req.body.symbol+"&side="+req.body.side+"&type=limit&price="+req.body.price+"&quantity="+req.body.quantity+"&recvWindow=20000&timestamp="+time;
console.log(Payload);


let mytrade=new trade({
  Scrip:req.body.symbol,
  Side:req.body.side,
  Price:req.body.price,
  Quantity:req.body.quantity,
  Timestamp:time

})
// const secret = 'btcinr&side=buy&type=limit&price=100&quantity=10&recvWindow=20000&timestamp=1641302117490';
const signature = crypto.HmacSHA256(Payload,secretKey)+''

console.log('Hash successfully generated: ', signature);


var data = qs.stringify({
  'symbol': req.body.symbol,
  'side': req.body.side,
  'type': 'limit',
  'price': req.body.price,
  'quantity': req.body.quantity,
  'recvWindow': '20000',
  'timestamp': time,
  'signature': signature 
});
var config = {
  method: 'post',
  url: 'https://api.wazirx.com/sapi/v1/order/test',
  headers: { 
    'X-Api-Key': 'Lf2WC839jmy7UljMHC03d0pZHwqsodpHUXDa3QAeaZ4baq5R7OWvRe9bXvOIc1We', 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': '__cf_bm=F6wkxC1TE0G2rMpQkdhB6fLfyflc0c3E7zfCtLbceWw-1641300598-0-AeKNsMpsWfKyI3zr14JOGdwAFKx39vu+TBggf5k2JsIvwy4rifjvMdVfbgHNr8Tlk9wCdJ4VwPVotr6vQ49tWmw='
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  const resdata= JSON.stringify(response.data)
  res.send(resdata);
  mytrade.save()
  .then((res)=>{
    console.log("trade data logged to Database");
  })
  .catch((err)=>{
    console.log("Somewhere failed in inserting data to database");
  })
})
.catch(function (error) {
  console.log(error);
  res.send(error);
});


  })


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })






