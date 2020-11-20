import Monster from '../models/monster';


export default async (req, res) => {
    try {
        const doc = await Monster.find();
        if (!doc.length) {
            return res.status(404).send("No monsters")
        }

        return res.status(200).send(doc)

    } catch (e) {
        console.log(e)
        return res.status(500).send("Error happened")
    }

}