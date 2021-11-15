var express = require('express');
var app = express();
app.use(express.json());
var jwt = require('jsonwebtoken');
const abc=require('./MongooseSchema/Users')

const port = 3001;
const a =[
  {
    id:1,
    name1:"Dudyala BO a/w Atmakur SO",
    name2:"Jagadurthi BO a/w Dhone SO",
    name3:"Nidjur BO a/w NR Peta SO",
    name4:"Kandadu BO a/w Yerpedu BO",
    name5:"dadu BO a/w Yerpedu BO",
    name6:"Kan BO a/w Yerpedu BO"
  },
  {
    id:2,
    name1:"Dudyala BO a/w Atmakur SO",
    name2:"Jagadurthi BO a/w Dhone SO",
    name3:"Nidjur BO a/w NR Peta SO",
    name4:"Kandadu BO a/w Yerpedu BO",
    name5:"dadu BO a/w Yerpedu BO",
    name6:"Kan BO a/w Yerpedu BO"
  },
  {
    id:3,
    name1:"Dudyala BO a/w Atmakur SO",
    name2:"Jagadurthi BO a/w Dhone SO",
    name3:"Nidjur BO a/w NR Peta SO",
    name4:"Kandadu BO a/w Yerpedu BO",
    name5:"dadu BO a/w Yerpedu BO",
    name6:"Kan BO a/w Yerpedu BO"
  },
  {
    id:4,
    name1:"Dudyala BO a/w Atmakur SO",
    name2:"Jagadurthi BO a/w Dhone SO",
    name3:"Nidjur BO a/w NR Peta SO",
    name4:"Kandadu BO a/w Yerpedu BO",
    name5:"dadu BO a/w Yerpedu BO",
    name6:"Kan BO a/w Yerpedu BO"
  }
];

const b=[
  {
    name:"Dudyala BO a/w Atmakur SO",
    value:125
  },
  {
    name:"Jagadurthi BO a/w Dhone SO",
    value:254
  },
  {
    name:"Nidjur BO a/w NR Peta SO",
    value:100
  },
  {
    name:"Kandadu BO a/w Yerpedu BO",
    value:241
  },
  {
    name:"dadu BO a/w Yerpedu BO",
    value:741
  },
  {
    name:"Kan BO 1 a/w Yerpedu BO",
    value:954
  },
  {
    name:"Kan BO 2 a/w Yerpedu BO",
    value:475
  },
  {
    name:"Kan BO 3 a/w Yerpedu BO",
    value:652
  },
  {
    name:"Kan BO 4 a/w Yerpedu BO",
    value:124
  },
  {
    name:"Kan BO 5 a/w Yerpedu BO",
    value:798
  }
];

const login=[
  {
    username:'ishan',
    password:'dev'
  },
  {
    username:'ishan2021',
    password:'12345'
  },
  {
    username:'admin',
    password:'admin'
  },
  {
    username:'myadmin',
    password:'myadmin'
  }
];



var cors = require('cors');



app.use(cors({
origin: '*'
}));

app.get('/', function (req, res) {
  res.send("main page");
})
app.get('/dashboard', function (req, res) {
  res.send(a)
})
app.get('/leaderboard', function (req, res) {
  res.send(b)
})


app.post('/login', function (req, res) {

  console.log(req.body);
  let status=204;
  const data={
    token:"",
    err:"Not found"
  };
  login.map((value)=>{
    if((req.body.username===value.username) && (req.body.password===value.password)){
      data.token=jwt.sign(req.body.password,'12345678');
      data.err="";
      status=200;
    }
  })
  res.status(status).json(data);
  
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })