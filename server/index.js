import express from "express";
import cors from 'cors';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import TeamScores from "./models/score.js";
import storylines from "./models/stories.js";

const app = express();
const port = 4000;

// -------------------------------Midlleware----------------------------

app.use(cors());
app.use(express.json())

// -----------------------------------------------------------

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

// --------------------------routes------------------------------

app.get("/leaderboard", async(req,res) => {
    const top10 = await TeamScores.find().sort({score:'desc'}).exec();
    res.send(top10);
});

app.post("/teams", async(req,res) => {
    const team_name = req.body.name
    
    const team = await TeamScores.findOne({name:team_name}).exec();
    var story_id = 1
    if(team === null){
        story_id = 1;
    }
    else{
        story_id = team.story;
    }
    
    const story_data = await storylines.findOne({story:story_id}).exec();
    res.send(story_data.activities);
});