import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 20,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        picturePath: {
            type: String,
            default: "", 
        },
        characters: {
            type: Array,
            default: [],
        },
        adventures: {
            type: Array,
            default: [],
        }
    },
    {timestamps: true}
)

const User = mongoose.model("User", UserSchema);
export default User;