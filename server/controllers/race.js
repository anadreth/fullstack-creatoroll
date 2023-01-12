import Race from "../models/Race.js"

/* SAVE RACE INTO DB */
export const saveRace= async (req, res) => {
    try {
        const {
            title,
            shortDescription,
            description,
            iconPath,
            picturePath,
            attributes,
        } = req.body;

        const newRace = new Race({
            raceName: title,
            shortDescription: shortDescription,
            description: description,
            iconPath: iconPath,
            picturePath: picturePath,
            attributes: attributes,
        })

        const savedRace = await newRace.save();
        res.status(201).json(savedRace);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

//GET RACE FROM DB
export const getRaces = async (req, res) => {
    try {
        const races = await Race.find();
        res.status(200).send(races);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}