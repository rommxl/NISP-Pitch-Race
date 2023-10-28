import mongoose, { mongo } from "mongoose";

const stories = new mongoose.Schema({

    story:Number,
    activities:[String],
    name:String
});

const storylines = mongoose.model("storylines",stories,"storylines");

export default storylines;