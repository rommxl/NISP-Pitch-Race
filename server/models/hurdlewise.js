import mongoose from "mongoose";

const hurdlesSchema = new mongoose.Schema({
    name:String,
    challenge:String,
    score:Number
});

const ChallengeScores = mongoose.model("ChallengeScores",hurdlesSchema);

export default ChallengeScores;