import mongoose from "mongoose";

const hurdlesSchema = new mongoose.Schema({
    _id:String,
    name:String,
    challenge:String,
    score:Number
});

const ChallengeScores = mongoose.model("ChallengeScores",hurdlesSchema);

export default ChallengeScores;