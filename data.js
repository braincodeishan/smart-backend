// var express = require('express');
// var app = express();
// app.use(express.json());

// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://braincodeishan:Mongodb_88822@cluster0.gicls.mongodb.net/smart?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const csvtojson = require("csvtojson");

const abc = csvtojson()
    .fromFile("data.csv")
    .then(csvData => {
        console.log(csvData)
        
        client.connect(err => {
            const collection = client.db("smart").collection("officedataset");
            // perform actions on the collection object
            console.log("collection reached");
            collection.insertMany(csvData, (err, res) => {
                if (err){
                    console.log("error in insert")
                    throw err;
                }
                console.log(`Inserted: ${res.insertedCount} rows`);
            })
            // client.close();
        })
    })