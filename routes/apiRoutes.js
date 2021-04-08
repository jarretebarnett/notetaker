const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();
const db = require("../db/db.json");

router.get("/notes", (req, res) => {
    // console.log("hello");
    fs.readFileSync("./db/db.json", db);
    // console.log(db);
    res.json(db);
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    // console.log(notes);
    res.json(notes);
})

router.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const eraseNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(eraseNote));
    
    res.json(eraseNote);
})

module.exports = router;