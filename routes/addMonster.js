import mongoose from 'mongoose';
import Monster from '../models/monster';

const monsterTypes = require("../data/monsters.json");

export default async (req, res) => {
    const monsterProps = req.body;
    console.log(monsterProps);
    const statsAdder = Math.floor((Math.random() * (15 - 5 + 1)) + 5) / 100;

    // const multiplier = (Math.floor(Math.random() * 15) + 1) / 100;

    if (!monsterProps.level || monsterProps.level < 0) {
        return res.status(500).send("Level must be positive number")
    }

    if (typeof monsterProps.level !== "number") {
        return res.status(500).send("Wrong payload")
    }

    if (!Object.keys(monsterTypes).includes(monsterProps.name)) {
        return res.status(404).send("Monster does not exist")
    }

    const monsterFormula = monsterTypes[monsterProps.name]

    const getValue = formulaName => {
        const testItem = monsterFormula[formulaName]
        if (typeof testItem === "number") {
            return monsterFormula[formulaName]
        }

        let L = monsterProps.level;
        console.log(testItem);
        return eval(testItem)
    }

    try {
        const monster = new Monster({
            _id: new mongoose.Types.ObjectId(),
            hp: (getValue("hp") + statsAdder * getValue("hp")).toFixed(2),
            patk: (getValue("patk") + statsAdder * getValue("patk")).toFixed(2),
            matk: (getValue("matk") + statsAdder * getValue("matk")).toFixed(2),
            pdef: (getValue("pdef") + statsAdder * getValue("pdef")).toFixed(2),
            mdef: (getValue("mdef") + statsAdder * getValue("mdef")).toFixed(2),
            gold: (getValue("gold") + statsAdder * getValue("gold")).toFixed(2),
            level: monsterProps.level,
            name: monsterProps.name
        })
        const doc = await monster.save()
        return res.status(200).send(doc)

    } catch (e) {
        console.log(e)
        return res.status(500).send("Error happened")
    }
}