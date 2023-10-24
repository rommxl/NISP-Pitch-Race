import mongoose from "mongoose";

const teamschema = new mongoose.Schema({
    _id:String,
    Tname:String,
    Mname:String
});

const Teams = mongoose.model("Teams",teamschema)