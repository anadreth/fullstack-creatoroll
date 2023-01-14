import mongoose from "mongoose";

const EquipmentSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        shortDescription: {
            type: String,
            max: 50,
        },
        description: {
            type: String,
        },
        iconPath: {
            type: String,
            default: "",
        },
        picturePath: {
            type: String,
            default: "", 
        },
        attributes: {
            type: Array,
            default: [],
        },
    },
    {timestaps: true}
)

const Equipment = mongoose.model("Equipment", EquipmentSchema);
export default Equipment;