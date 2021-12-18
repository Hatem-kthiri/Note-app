const notes = require("./note");
const yargs = require("yargs");
const { fetchData, addingNote, removeNote, readNote } = notes;

const command = yargs.argv._[0];
const title = yargs.argv.title;
const body = yargs.argv.body;

if (command === "add") {
    addingNote(title, body);
} else if (command === "remove") {
    removeNote(title);
} else if (command === "read") {
    readNote(title);
} else {
    console.log("Unkonwn Command ");
}
