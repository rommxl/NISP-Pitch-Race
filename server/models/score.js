import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    name:String,
    score:Number
});

const TeamScores = mongoose.model("Score_Board",scoreSchema,"Score_Board");

export default TeamScores;