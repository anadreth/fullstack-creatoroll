import mongoose from "mongoose";

const CharClassSchema = new mongoose.Schema(
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
        attributes: {
            type: Array,
            default: [],
        },
        iconPath: {
            type: String,
            default: "", 
        },
        picturePath: {
            type: String,
            default: "",
        }
    },
    {timestamps: true}
)

const CharClass = mongoose.model("CharClass", CharClassSchema);
export default CharClass;