import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    _id:String,
    name:String,
    score:Number
});

const TeamScores = mongoose.model("TeamScores",scoreSchema);

export default TeamScores;