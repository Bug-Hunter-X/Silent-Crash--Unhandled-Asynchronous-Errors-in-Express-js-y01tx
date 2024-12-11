const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    someAsyncOperation().then(() => {
      res.send('Hello World!');
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
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