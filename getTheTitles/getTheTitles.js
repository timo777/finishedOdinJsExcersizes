const getTheTitles = function(books) {
    let tittles = []
    for (let book in books) {
        tittles.push(books[book].title)
    }
    return tittles
}

module.exports = getTheTitles;