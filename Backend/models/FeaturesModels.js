import mongoose from "mongoose"

let FeaturesSchema = new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:Number
})

export let FeaturesModel = mongoose.model("features", FeaturesSchema)