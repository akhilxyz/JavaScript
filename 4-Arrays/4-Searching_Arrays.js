

const notes = [
    {
    title: 'My next trip',
    body: 'i would like to go to spain'},

    {
        title: 'Habbit to work on',
        body: 'Exercise , eating a bit better.'},

        {
            title: 'office modification',
            body: 'get a new seat' }]


const findNote = function(notes , noteTitle){
    const index = notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()

    })
    return notes[index]
}




const note = findNote(notes, 'office modification')
console.log(note)

// console.log(note)

// const index = Notes.findIndex(function (note, index){
//     return note.title ==='Habbit to work on'
// })
// console.log(index)