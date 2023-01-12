import Traits from "../models/Traits.js"

/* SAVE TRAIT INTO DB */
export const saveTrait= async (req, res) => {
    try {
        const {
            title,
            shortDescription,
            description,
            iconPath,
            picturePath,
            attributes,
        } = req.body;

        const newTrait = new Traits({
            title: title,
            shortDescription: shortDescription,
            description: description,
            iconPath: iconPath,
            picturePath: picturePath,
            attributes: attributes,
        })

        const savedTrait = await newTrait.save();
        res.status(201).json(savedTrait);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

//GET TRAITS FROM DB
export const getTraits = async (req, res) => {
    try {
        const traits = await Traits.find();
        res.status(200).send(traits);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}