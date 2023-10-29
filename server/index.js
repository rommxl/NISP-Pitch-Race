import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import TeamScores from "./models/score.js";
import storylines from "./models/stories.js";
import ChallengeScores from "./models/hurdlewise.js";
import Time from "./models/teams.js";

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

// --------------------------gets------------------------------

app.get("/leaderboard", async(req,res) => {
    const top10 = await TeamScores.find().sort({score:'desc'}).exec();
    res.send(top10);
});

// ---------------------------------posts-----------------------------------

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

app.post("/updatescores", async(req,res) => {
    await ChallengeScores.create({
        name:req.body.team_name,
        challenge:req.body.challenge_name,
        score:req.body.challenge_score
    });

    const curr_score = await TeamScores.findOne({name:req.body.team_name}).exec();

    await TeamScores.updateOne(
        {name:req.body.team_name},
        {score:curr_score.score+req.body.challenge_score}
        );
})

app.post("/registerteam", async(req,res) => {
    const name = req.body.name;
    const story = req.body.story;
    await TeamScores.create({
        name:name,
        story:story,
        score:0
    });
    await Time.create({
        name:name,
        start:0,
        end:0,
        tot:0,
        over:false
    });
});

app.post("/starttime", async(req,res) => {
    const name = req.body.name;
    const d = new Date();
    const curr_time = d.getTime();
    const exist = await Time.findOne({name:name}).exec();
    exist.start = curr_time;
    exist.save();
});

app.post("/endtime", async(req,res) => {
    const name = req.body.name;
    const d = new Date();
    const curr_time = d.getTime();
    const exist = await Time.findOne({name:name}).exec();
    if(exist.over === false)
    {
        exist.end = curr_time;
        exist.tot = (exist.end - exist.start);
        exist.over = true;
        exist.save();
    }
    console.log(exist)
    res.send({time:exist.tot});
});