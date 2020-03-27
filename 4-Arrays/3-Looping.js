
// forEach loop

const Notes = ['Note 1','Note 2','Note 3' , 'Note 4']

Notes.forEach(function (item , index) {
    const num = index+1
    console.log(`${index}. ${item}` )
})

// for Loop 

for (let count = 0 ;count < Notes.length; count++ ){
    const num = count + 1
    const Note  = Notes[count]
    console.log(`${num}. ${Note}`)
}
