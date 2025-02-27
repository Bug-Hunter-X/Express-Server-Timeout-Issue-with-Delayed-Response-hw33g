const express = require('express');
const app = express();
app.use((req, res, next) => {
  req.setTimeout(10000); // Set a timeout for 10 seconds
  next();
});
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});