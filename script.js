//function for dummy data
const library = [];

function Book(author, title, pages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = false;
}
// add books to the array
function addBookToLibrary(author, title, pages) {
  let newBook = new Book(author, title, pages)
  library.push(newBook);
}

for (let i=1; i<6; i++){
    addBookToLibrary("Rosemary"+[i], "Bio", "100");
}

const tableBooks = document.querySelector("tbody");
function displayEachBook(i){
    //display in a table or individual card
        const row = document.createElement('tr')
        const title = document.createElement('td');
        const author = document.createElement('td');
        const pages = document.createElement('td');
        const readStatus = document.createElement('td');
        const read = document.createElement('button')
        const removeStatus = document.createElement('td');
        const remove = document.createElement('button');

        title.textContent = library[i].title;
        author.textContent = library[i].author;
        pages.textContent = library[i].pages;

        if (library[i].read === true){
        read.textContent = "Read";
        }else {read.textContent = "Not Read"}
        read.classList.add("readToggle");

        remove.textContent = "Remove";
        remove.classList.add('remove-button');

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        readStatus.appendChild(read);
        row.appendChild(readStatus);
        readStatus.appendChild(remove);
        row.appendChild(remove);


        tableBooks.appendChild(row);
}

for (let i = 0; i< library.length; i++){
    displayEachBook(i);
    console.log(library[i].read);
}
// const readButton = document.getElementsByClassName("readToggle");

// readButton.addEventListener('click', (e) =>{
//     const target = e.target;
//     console.log(target.textContent);
//     if (target.textContent === "Read"){
//         target.textContent = "Not Read";
//     }else{
//         target.textContent = "Read";
//     }
// });

tableBooks.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('remove-button')) {
        const row = target.parentNode;
        const table = row.parentNode;
        table.removeChild(row);
    }

    console.log(target.textContent);
    if (target.textContent === "Read"){
        target.textContent = "Not Read";
    }else{
        target.textContent = "Read";
    }
});


const addNewBookButton = document.querySelector('.addBook');

const addNew = document.querySelector('.addNew');
const newTitle = document.getElementById('title');
const newAuthor = document.getElementById('author');
const newPages = document.getElementById('page');



addNewBookButton.addEventListener('click', (e) =>{
    let pageRegex = /^[1-9]\d*$/;
    if (pageRegex.test(newPages.value)){
    addBookToLibrary(newAuthor.value, newTitle.value, newPages.value);
    displayEachBook(library.length-1);
    newAuthor.value = "";
    newTitle.value = "";
    newPages.value = 0;
    }else {
        alert("Input valid page numbers!");
    }
});
