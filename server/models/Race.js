import mongoose from "mongoose";

const RaceSchema = new mongoose.Schema(
    {
        raceName: {
            type: String,
            required: true,
            unique: true,
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
    {timestamps: true}
)

const Race = mongoose.model("Race", RaceSchema);
export default Race;