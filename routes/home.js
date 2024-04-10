import express from 'express';

const home = express.Router();

home.get('/home', (req, res) => {
    res.send("Hi this is home")
})

export default home;