import { ListCollectionsCursor } from "mongodb";
import mongoose from "mongoose";

const timeKeeping = new mongoose.Schema({
    name:String,
    start:Date,
    end:Date,
    tot:Number,
    over:Boolean
});

const Time = mongoose.model("Teams",timeKeeping);

export default Time;