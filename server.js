const dbJSON = require("./db/db.json");
const express = require("express");
// const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app.get("/api/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "/db/db.json"));
// })

// app.post("/api/notes", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("/db/db.json"));
//     const addNote = req.body;
//     addNote.id = uuid.v4();
//     notes.push(addNote);
//     fs.writeFileSync("/db/db.json", JSON.stringify(notes));
//     res.json(notes);
// })

// app.delete("/api/notes/:id", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("/db/db.json"));
//     const eraseNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
//     fs.writeFileSync("/db/db.json", JSON.stringify(eraseNote));
//     res.json(eraseNote);
// })

app.listen(PORT, function() {
    console.log("Server is listening on https://localhost/" + PORT);
})