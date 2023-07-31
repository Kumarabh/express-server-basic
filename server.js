import express from "express";
const app = express();

app.get('', (req, res) => {
  res.status(200).json({
    message: 'Welcome to node app.'
  })
})
app.get('/user', (req, res) => {

  res.status(200).json({
    id: 1,
    name: 'John Doe',
    gender: 'male',
    email: '#',
    contact: '#'
  })
})

app.listen(3000, () => console.log('server is running on port 3000'))