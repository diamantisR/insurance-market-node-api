import Monster from '../models/monster';


export default async (req, res) => {
    const monsterName = req.params.name;

    if (!monsterName) {
        return res.status(404).send("No name provided")
    }

    try {
        const doc = await Monster.find({ name: req.params.name });
        if (!doc.length) {
            return res.status(404).send("Monster not found")
        }

        return res.status(200).send(doc)

    } catch (e) {
        console.log(e)
        return res.status(500).send("Error happened")
    }

}