import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },     
        race: {
            type: Array,
            default: [],
        },
        charClass: {
            type: Array,
            default: [], 
        },
        attributes: {
            type: Array,
            default: [],
        },
        traits: {
            type: Array,
            default: [],
        },
        equipment: {
            type: Array,
            default: [],
        }
    },
    {timestaps: true}
)

const Character = mongoose.model("Character", CharacterSchema);
export default Character;