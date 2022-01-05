let appendbutton=document.getElementsByClassName("sc-iumJeC iSotjQ");
let mybuttons=`<button id="turnonscriptishan" >Turn ON</button>
<button id="turnoffscriptishan" >Turn OFF</button>`
var node = document.createElement("div");
node.innerHTML=mybuttons;
appendbutton[0].appendChild(node);





const scripton=document.getElementById("turnonscriptishan")
scripton.addEventListener('click',()=>{
  setInterval(dataproc,10000);
})
const scriptoff=document.getElementById("turnoffscriptishan")
scriptoff.addEventListener('click',()=>{
  clearInterval();
})
  




let a=false;
let b=false;
let buy="buy";
let sell="sell";

async function taketrade(side,scrip,floatprice){
  try{
  
    let qty=parseInt(10000/floatprice);
    console.log("quantity to be purchased="+qty)
  const res= await fetch('http://localhost:3001',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      'symbol':scrip,
      'side':side ,
      'price':floatprice,
      'quantity':qty,
      
    })
  
  });
  const resJson= await res.json();

  console.log(res);
  console.log(resJson);
  }catch(err){
    console.log(err);
  }
return true;
    
    

}


function showNotification(side,scrip,floatprice)
{
const notification=new Notification(buy,{
  body: "Taken "+side+ " trade on " +scrip+ " at price "+ floatprice,
  icon: "https://img.favpng.com/12/19/20/050-trading-text-png-favpng-4i3VARbE16qDXhYdFszLmbgbs.jpg"
});
notification.onclick=(e)=>{
window.location.href="https://wazirx.com"
};
}

function checkNotification(side,scrip,floatprice){
if(Notification.permission!=="granted"){
  showNotification(side,scrip,floatprice);
} else if(Notification.permission!=="denied"){
  Notification.requestPermission().then(permission=>{
    if(permission==="granted")
    {
      showNotification(side,scrip,floatprice);
    }
  })
}
}



function dataproc(){
  console.log("working on...");
  let macd=0.0;
  let signal=0.0;
  let scrip=document.getElementsByClassName("sc-gsTEea gYrKRI")[0].innerText;
  let scripmod=scrip.replace('/','')
  scripmod=scripmod.toLowerCase();
  console.log(scripmod);
  const data= document.querySelector("iframe").contentDocument.querySelectorAll(".valueValue-2KhwsEwE");
    let price= document.getElementsByClassName("sc-gsTEea dvKsmJ");
    

    // console.log(price[0].innerText);

    let floatprice=price[0].innerText.replace('₹','');
    floatprice=parseFloat(floatprice.replace(/,/g,''));
    // console.log(floatprice);


//Conversion of string to number for comparision
if(data[9].innerText.indexOf("−")>-1)
  {
        macd= parseFloat(data[9].innerText.replace('−',''));
        macd=-macd;
  }else{
        macd= parseFloat(data[9].innerText);
  }
  if(data[10].innerText.indexOf("−")>-1)
  {
        signal= parseFloat(data[10].innerText.replace('−',''));
        signal=-signal;
  }else{
        signal= parseFloat(data[10].innerText);
  }
  
  // console.log(macd);
  // console.log(signal);





//Comparision for taking trades.
if((macd>=signal)&&(macd<0)&&(signal<0)){
      // console.log("inside buy trade");
      if(a===false){
        b=taketrade(buy,scripmod,floatprice)
      	
      }
        if(b){
            checkNotification(buy,scrip,floatprice);
          b=false;
          a=true;
        }

    }else if((macd<signal)&&(macd>0))
    {
      // console.log("inside sell trade");
      if(a===true){
        b=taketrade(sell,scripmod,floatprice)
      }
        if(b){
          checkNotification(sell,scrip,floatprice);
          b=false;
          a=false;
        }
    }

    }


    











// // const amount = document.getElementsByClassName('sc-tYqdw hZsSJP');
// // console.log(amount);










// async function apicalls(){
//   try{
//     const time=Date.now();
//   const res= await fetch('https://api.wazirx.com/sapi/v1/order/test',{
//     method:'POST',
//     headers:{
//       'X-API-KEY':'4TFCEVs6vzlhQZk8DRmCv9RyJT69EVh5xaeq7a86vYL8UtnXhNHDojAfK2zYZBxR',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body:JSON.stringify({
//       'symbol':'wrxinr',
//       'side':'buy' ,
//       'type':'limit',
//       'price':500,
//       'quantity':1,
//       // 'recvWindow':10000,
//       'timestamp':time,
//       'signature':'11***6f'  
//     })
  
//   });
//   const resJson= await res.json();

//   console.log(res);
//   console.log(resJson);
//   }catch(err){
//     console.log(err);
//   }
// }




// function apicalls(){
//   const time=Date.now();
  
//     var myHeaders = new Headers();
//     myHeaders.append("X-Api-Key", "Lf2WC839jmy7UljMHC03d0pZHwqsodpHUXDa3QAeaZ4baq5R7OWvRe9bXvOIc1We");
//     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//     myHeaders.append("Cookie", "__cf_bm=IAcWRRYvBJtyTVXLrlWtexbewI15iEnNkckhwM751uE-1641211045-0-Af+EiVfpI1Qk9xbZOlrLB4ckL9BJ5DHwdYT+Dy+FAuz3q7UbjJONMiNI906lK9QiubKjEqH6mWFms9KzEsikFvM=");

//     var urlencoded = new URLSearchParams();
//     urlencoded.append("symbol", "btcinr");
//     urlencoded.append("side", "buy");
//     urlencoded.append("type", "limit");
//     urlencoded.append("price", "50");
//     urlencoded.append("stop_price", "510");
//     urlencoded.append("quantity", "1");
//     urlencoded.append("recvWindow", "10000");
//     urlencoded.append("timestamp", time);
//     urlencoded.append("signature", "3c4d9b2884599dc1b04384a282f7df8c028737737ddf4bf8c3611714f32d06a9");

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: urlencoded,
//       redirect: 'follow'
//     };

//     fetch("https://api.wazirx.com/sapi/v1/order/test", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//   }

//   apicalls();






// var axios = require('axios');
// var qs = require('qs');
// var crypto = require('crypto-js');

// const secretKey = "HTb2fTioZ6NxLmgKnxH8hMdcC9NouKeLJO7n3bVo";
// var time = new Date().getTime()
// let Payload = "symbol=btcinr&side=buy&type=limit&price=100&quantity=10&recvWindow=20000&timestamp="+time;
// console.log(Payload);

// // const secret = 'btcinr&side=buy&type=limit&price=100&quantity=10&recvWindow=20000&timestamp=1641302117490';
// const signature = crypto.HmacSHA256(Payload,secretKey)+''

// console.log('Hash successfully generated: ', signature);


// var data = qs.stringify({
//   'symbol': 'btcinr',
//   'side': 'buy',
//   'type': 'limit',
//   'price': '100',
//   'quantity': '10',
//   'recvWindow': '20000',
//   'timestamp': time,
//   'signature': signature 
// });
// var config = {
//   method: 'post',
//   url: 'https://api.wazirx.com/sapi/v1/order/test',
//   headers: { 
//     'X-Api-Key': 'Lf2WC839jmy7UljMHC03d0pZHwqsodpHUXDa3QAeaZ4baq5R7OWvRe9bXvOIc1We', 
//     'Content-Type': 'application/x-www-form-urlencoded', 
//     'Cookie': '__cf_bm=F6wkxC1TE0G2rMpQkdhB6fLfyflc0c3E7zfCtLbceWw-1641300598-0-AeKNsMpsWfKyI3zr14JOGdwAFKx39vu+TBggf5k2JsIvwy4rifjvMdVfbgHNr8Tlk9wCdJ4VwPVotr6vQ49tWmw='
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
