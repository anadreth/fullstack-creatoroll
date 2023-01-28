import User from '../models/User.js';
/* SAVE CHARACTER INTO USER ARRAY IN DB */
export const saveCharacter = async (req, res) => {
    try {
        
        const { id, charId, charName, race, charClass, strength, dexterity, intelligence, background, traits, equipment} = req.body;
        const newCharacter = {
            charId: charId,
            charName: charName.slice(0, 1).toUpperCase() + charName.slice(1, charName.length).toLowerCase(),
            race: race,
            charClass: charClass,
            strength: strength,
            dexterity: dexterity,
            intelligence: intelligence,
            background: background,
            traits: traits,
            equipment: equipment,
        };
        const user = await User.findById(id);
        const updatedUser =  await User.updateOne({_id: id}, {characters: [...user.characters, newCharacter]});
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


//GET CHARACTER FROM DB
export const getCharacters = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findById(id);
        res.status(200).send(user.characters);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}