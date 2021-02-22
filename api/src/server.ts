import express from 'express';

const app = express();

app.get("/users", (req, res) => {
  return res.json({ message :"online"});
})

app.listen(3333);