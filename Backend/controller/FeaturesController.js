
import { FeaturesModel } from './../models/FeaturesModels.js';

export const FeaturesController = {
    getAll: async (req,res)=>{
        let features = await FeaturesModel.find()
        res.send(features)
    },
    getById: async (req,res)=>{
        let id = req.params.id
        let myfeatures = await FeaturesModel.findById(id)
        res.send({
            message:"Successfully finded",
            data:myfeatures
        })
    },
    deleteFeatures: async (req,res)=>{
        let id = req.params.id
        await FeaturesModel.findByIdAndDelete(id)
        res.send({
            message:"Deleted Successfully"
        })
    },
    postFeatures: async (req,res)=>{
        let newFeatures = FeaturesModel(req.body)
        console.log(req.body)
        await newFeatures.save()
        res.send({
            message:"Success Post",
            data:newFeatures
        })
    },
    updateFeatures: async (req, res)=>{
        let id = req.params.id
        let updateFeatures = req.body
        let updatedFeatures = await ProductModel.findByIdAndUpdate({_id:id}, updateFeatures, {new:true})
        res.send(updatedFeatures)
    },
}