import mongoose from "mongoose";

const TraitsSchema = new mongoose.Schema(
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
        attributes: {
            type: Array,
            default: [],
        },
    },
    {timestamps: true}
)

const Traits = mongoose.model("Traits", TraitsSchema);
export default Traits;