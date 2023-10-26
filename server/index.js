import express from "express";
import cors from 'cors';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import TeamScores from "./models/score.js";

const app = express();
const port = 4000;
const __dirname =  dirname(fileURLToPath(import.meta.url))
const cli = "";
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/nisp_pitch_race", {useNewUrlParser : true})
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
    });


app.listen(port,() => {
    console.log(`The server is listening to port ${port}.`);
})

app.get("/leaderboard", async(req,res) => {
    const top10 = await TeamScores.find().sort({score:'desc'}).exec();
    res.send(top10);
});
