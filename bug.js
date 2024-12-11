const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is missing here, causing Express to crash silently
    console.error('Error:', error); //This will log the error, but the request won't be handled properly. 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation(){
  return new Promise((resolve,reject)=>{
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  })
}