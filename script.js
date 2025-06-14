function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = (read)?'Completed Reading': 'Not Read Yet';

    this.info = () => {
        let status = (read)?'read': 'not read yet'
        return(title + ' by ' + author + '; pages: ' + pages + '; status: ' + status);
    }
}

const container = document.querySelector('.container');

function makeCard(x){
    const card = document.createElement('div');
    card.classList.add('card');
    Object.assign(card, x);
    const values = Object.values(x);
    let paragraph;

    for(let i = 1; i < 5; i++){
        paragraph = document.createElement('p');
        paragraph.innerText = values[i];
        card.appendChild(paragraph);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    let button = document.createElement('button');
    button.textContent = (paragraph.innerText === 'Completed Reading')?'Undo':'Complete';
    buttonContainer.appendChild(button);

    button.addEventListener('click', function(){
        if(button.textContent === 'Undo'){
            button.textContent = 'Complete';
            paragraph.textContent = 'Not Read Yet';
        }
        else{
            button.textContent = 'Undo';
            paragraph.textContent = 'Completed Reading';
        }
    })
    const button2 = document.createElement('button');
    button2.textContent = 'Delete';
    buttonContainer.appendChild(button2);

    button2.addEventListener('click', function(){
        card.remove();
        RemoveFromArray(x);
    })
    card.appendChild(buttonContainer);

    container.appendChild(card);
}

function RemoveFromArray(x){
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i] === x){
            myLibrary.splice(i, 1);
            break;
        }
    }
}

const addBook = document.querySelector('.new-book');
const cancelBook = document.querySelector('.cancel');
const dialog = document.querySelector('#dialogForm');
addBook.addEventListener('click', () => {
    dialog.showModal();
})
cancelBook.addEventListener('click', () => {
    dialog.close();
})

const submit = document.querySelector('.save');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('input[name="pages"]');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const read = document.querySelector('input[name="read"]:checked');

    if(title.value !== '' && author.value !== '' && pages.value > 0){
        let readval = (read.value === 'Completed Reading');
        const newBook = new Book(title.value, author.value, pages.value, readval);
        myLibrary.push(newBook);
        makeCard(newBook);

        title.value = ''; author.value = ''; pages.value = 0;
        dialog.close();
    }
})

const myLibrary = [];
const x = new Book('The Hobbit', 'J.R.R. Tolkien', '287', true);
const y = new Book('Lord of The Rings', 'J.R.R. Tolkien', '1072', false);
myLibrary.push(x);
myLibrary.push(y);
makeCard(x);
makeCard(y);




