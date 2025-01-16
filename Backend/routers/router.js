import express from "express";
import {FeaturesController} from "../controller/FeaturesController.js"



export const route = express.Router()


route.get("/", FeaturesController.getAll)
route.get("/:id", FeaturesController.getById)
route.delete("/:id", FeaturesController.deleteFeatures)
route.post("/", FeaturesController.postFeatures)
route.put("/:id", FeaturesController.updateFeatures)