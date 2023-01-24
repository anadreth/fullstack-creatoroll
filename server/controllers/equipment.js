import Equipment from "../models/Equipment.js"

/* SAVE RACE INTO DB */
export const saveEqp= async (req, res) => {
    try {
        const {
            title,
            shortDescription,
            description,
            iconPath,
            picturePath,
            attributes,
        } = req.body;

        const newEquipment = new Equipment({
            title: title,
            shortDescription: shortDescription,
            description: description,
            iconPath: iconPath,
            picturePath: picturePath,
            attributes: attributes,
        })

        const savedEqp = await newEquipment.save();
        res.status(201).json(savedEqp);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

//GET RACE FROM DB
export const getEqp = async (req, res) => {
    try {
        const eqp = await Equipment.find();
        res.status(200).send(eqp);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}