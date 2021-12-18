const fs = require("fs");

var fetchData = () => {
    return JSON.parse(fs.readFileSync("notes.txt"));
};

var addingNote = (title, body) => {
    var notes = fetchData();
    var note = { title, body };
    var double = notes.filter((el) => el.title === title);
    if (double.length === 0) {
        notes.push(note);
        console.log(note);
        fs.writeFileSync("notes.txt", JSON.stringify(notes));
    } else {
        console.log("Title Exist");
    }

    return "";
};

var removeNote = (title) => {
    var notes = fetchData();
    var newNote = notes.filter((el) => el.title !== title);
    fs.writeFileSync("notes.txt", JSON.stringify(newNote));
};

var readNote = (title) => {
    var notes = fetchData();
    var note = notes.find((el) => el.title === title);
    console.log(note);
};

module.exports = {
    fetchData,
    addingNote,
    removeNote,
    readNote,
};
