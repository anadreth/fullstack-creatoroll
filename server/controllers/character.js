import User from '../models/User.js';
/* SAVE CHARACTER INTO USER ARRAY */
export const saveCharacter = async (req, res) => {
    try {
        
        const { id } = req.body;
        const newCharacter = "finally";
        const user = await User.findById(id);
        const updatedUser =  await User.updateOne({_id: id}, {characters: [...user.characters, newCharacter]});
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getCharacters = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findById(id);
        res.status(200).send(user.characters);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}