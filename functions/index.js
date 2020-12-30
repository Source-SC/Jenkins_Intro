// import 'aframe';
const functions = require('firebase-functions');
const express = require('express');

var template = require('./template.js');

const app = express();

app.get('/timestamp',(request, response) => {
    response.send(`${Date.now()}`)
});
app.get('/galery',(request, response) => {
    var html = template.HTML("title","version1","data","data");
    response.end(html);
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }