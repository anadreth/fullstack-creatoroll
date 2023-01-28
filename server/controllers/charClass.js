import CharClass from "./../models/CharClass.js"

/* SAVE RACE INTO DB */
export const saveClass= async (req, res) => {
    try {
        const {
            title,
            shortDescription,
            description,
            iconPath,
            picturePath,
            attributes,
        } = req.body;

        const newClass = new CharClass({
            title: title.slice(0, 1).toUpperCase() + title.slice(1, title.length).toLowerCase(),
            shortDescription: shortDescription,
            description: description,
            iconPath: iconPath,
            picturePath: picturePath,
            attributes: attributes,
        })

        const savedClass = await newClass.save();
        res.status(201).json(savedClass);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

//GET RACE FROM DB
export const getClasses = async (req, res) => {
    try {
        const classes = await CharClass.find();
        res.status(200).send(classes);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}