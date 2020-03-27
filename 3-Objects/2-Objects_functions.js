
let mybook = {

    title: '1984',
    author: 'George Orwell',
    pageCount: 326 
}

let otherBook = {
    title: 'Three mistakes of my life',
    author: 'chaiten bhagat',
    pageCount: 478

}

let getSummary = function (book) {

        // console.log(`${book.title} by ${book.author}`)


    return {

       summary:  `${book.title} by ${book.author}.`,
       pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }

}

let BookSummary = getSummary(mybook)
let OtherBookSummarry =  getSummary(otherBook)

console.log(BookSummary.pageCountSummary)
console.log(OtherBookSummarry.summary)




