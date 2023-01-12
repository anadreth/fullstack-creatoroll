

/*READ*/

export const getUser = async (req,res) => {
    try {
        res.status(200).send('sup');
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

