import express from 'express';
import "reflect-metadata";
import "./database"

const app = express();

app.get("/users", (req, res) => {
  return res.json({ message :"online e meteno"});
})

app.listen(3333);