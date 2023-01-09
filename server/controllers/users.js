import User from '../models/User.js';
import Character from '../models/Character.js'

/*READ*/
/*
const {girls, guys, women, men} = state;

// Is the same as

const girls = state.girls;
const guys = state.guys;
const women = state.women;
const men = state.men;
*/

export const getUser = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

///BIG Q?????
export const getUserCharacters = async (req, res) => {
    try {
    const { id } = req.params;
    const character = await Character.findById(id);

//multiple calls 
    const ownedCharacters = await Promise.all(
        character.characters.map((id) => Character.findById(id))  
    );
    const formattedOwnedCharacters = ownedCharacters.map(
        ({ _id, name, race, charClass, attributes, traits, equipment }) => {
            return { _id, name, race, charClass, attributes, traits, equipment }
        }
    );
    res.status(200).json(formattedOwnedCharacters);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
    
}


/* ADD REMOVE */

export const addRemoveCharacter = async(req, res) => {
    try {
        const { id, characterId} = req.params;
        const user = await User.findById(id);
        const character = await Character.findById(characterId); 

        if (user.characters.includes(characterId)) {
            user.characters = user.characters.filter((id) => id !== characterId); 
           //should remove from DB
            await character.remove();
            
        } else {
            user.characters.push(characterId);
        }

        await user.save();
        getUserCharacters()
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}