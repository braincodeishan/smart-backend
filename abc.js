// let a=false;
// let b=false;
// let buy="BUY";
// let sell="SELL";

// // function taketrade(){
// //     //take trade logic

    
// //     return true;

// // }
// // function selltrade(){
// //     // sell trade logic
// //     return true;

// //    }

// function showNotification(buy,scrip,floatprice)
// {
// const notification=new Notification(buy,{
//   body: "Take "+buy+ " trade on " +scrip+ " at price "+ floatprice,
//   icon: "https://img.favpng.com/12/19/20/050-trading-text-png-favpng-4i3VARbE16qDXhYdFszLmbgbs.jpg"
// });
// notification.onclick=(e)=>{
// window.location.href="https://wazirx.com"
// };
// }

// function checkNotification(buy,scrip,floatprice){
// if(Notification.permission!=="granted"){
//   showNotification(buy,scrip,floatprice);
// } else if(Notification.permission!=="denied"){
//   Notification.requestPermission().then(permission=>{
//     if(permission==="granted")
//     {
//       showNotification(buy,scrip,floatprice);
//     }
//   })
// }
// }



// function dataproc(){
//   console.log("working on...");
//   let macd=0.0;
//   let signal=0.0;
//   let scrip=document.getElementsByClassName("sc-gsTEea gYrKRI")[0].innerText;
    
//   const data= document.querySelector("iframe").contentDocument.querySelectorAll(".valueValue-2KhwsEwE");
//     let price= document.getElementsByClassName("sc-gsTEea dvKsmJ");
    

//     console.log(price[0].innerText);

//     let floatprice=price[0].innerText.replace('₹','');
//     floatprice=parseFloat(floatprice.replace(',',''));
//     console.log(floatprice);


// //Conversion of string to number for comparision
// if(data[9].innerText.indexOf("−")>-1)
//   {
//         macd= parseFloat(data[9].innerText.replace('−',''));
//         macd=-macd;
//   }else{
//         macd= parseFloat(data[9].innerText);
//   }
//   if(data[10].innerText.indexOf("−")>-1)
//   {
//         signal= parseFloat(data[10].innerText.replace('−',''));
//         signal=-signal;
//   }else{
//         signal= parseFloat(data[10].innerText);
//   }
  
//   // console.log(macd);
//   // console.log(signal);





// //Comparision for taking trades.
// if((macd>=signal)&&(macd<0)&&(signal<0)){
//       // console.log("inside buy trade");
//       if(a===false){
//       	checkNotification(buy,scrip,floatprice);
//       }
//         // if(b){
//         //     console.log("Buy trade executed");
//         //   b=false;
//           a=true;
//         // }

//     }else if((macd<signal)&&(macd>0))
//     {
//       // console.log("inside sell trade");
//       if(a===true){
//         checkNotification(sell,scrip,floatprice);
//       }
//         // if(b){
//         //     console.log("Sell trade executed");
//         //     b=false;
//           a=false;
//         // }
//     }

//     }

// setInterval(dataproc,10000)
    











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


// Request Payload = 
// symbol=btcinr&side=buy&type=limit&price=100&quantity=10&recvWindow=20000&timestamp=1641300597614
 
// Signature = 1d1b18a7ff63d4c8c6fa7cefb99ae59929f97f100824192a035b7568c282cdfb
 
// POST https://api.wazirx.com/sapi/v1/order/test
// 201
// 1039 ms
 
// Request Payload = 
// symbol=btcinr&side=buy&type=limit&price=100&quantity=10&recvWindow=20000&timestamp=1641302117490
 
// Signature = f7d568d9234c97f630cbba43e4d937c2077638ab8ad9abfecc43a018970ceda4
 
// POST https://api.wazirx.com/sapi/v1/order/test




var axios = require('axios');
var qs = require('qs');
// var time=Date.now()




// var navigator = {}; //fake a navigator object for the lib
// var window = {}; //fake a window object for the lib
// const privateKey = pm.environment.get("rsa_private_key");

const secretKey = "HTb2fTioZ6NxLmgKnxH8hMdcC9NouKeLJO7n3bVo";

// Set Current Time
var time = new Date().getTime()
// postman.setEnvironmentVariable("current_time", time)

// query_a = pm.request.body.urlencoded.toObject(true)

// Generate Request Payload
// let query_string_array = []
// Object.keys(query_a).forEach(function(key) {
//     if (key == 'signature') { return }
//     if (key == 'timestamp') {
//         query_string_array.push(key + "=" + time)
//     }
//     else if (typeof query_a[key] == "string") {
//         query_string_array.push(key + "=" + query_a[key])
//     } else {
//         query_a[key].forEach(function(value){
//             query_string_array.push(key + "=" + value)
//         })
//     }
// })

// const payload = query_string_array.join("&")
// console.log("Request Payload = ", payload)

// if(secretKey) {
    const signature = CryptoJS.HmacSHA256(payload, secretKey) + ''
    // pm.environment.set("signature", signature)
    console.log("Signature = "+signature);
// } else {
    // Download RSA Library
    // pm.sendRequest(pm.environment.get("rsa_library_js"), function (err, res) {

    //     if (err){
    //         console.log("Error: " + err);
    //     }
    //     else {
    //         // Compile & Run RSA Library
    //         eval(res.text())();

    //         // Sign Payload
    //         var signatureLib = new KJUR.crypto.Signature({"alg": "SHA256withRSA"});
    //         signatureLib.init(privateKey);
    //         signatureLib.updateString(payload);
    //         var signatureHash = hex2b64(signatureLib.sign());
    //         console.log("Signature = ", signatureHash)

    //         // Assign Values
    //         pm.environment.set("signature", signatureHash)
    //     }
    // })
// }



// var data = qs.stringify({
//   'symbol': 'btcinr',
//   'side': 'buy',
//   'type': 'limit',
//   'price': '100',
//   'quantity': '10',
//   'recvWindow': '20000',
//   'timestamp': time,
//   'signature': '1d1b18a7ff63d4c8c6fa7cefb99ae59929f97f100824192a035b7568c282cdfb' 
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
