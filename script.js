function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = (read)?'Completed reading': 'Not read yet';

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
    console.log(values);
    for(let i = 1; i < 5; i++){
        const paragraph = document.createElement('p');
        paragraph.innerText = values[i];
        card.appendChild(paragraph);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    let button = document.createElement('button');
    button.textContent = 'Complete';
    buttonContainer.appendChild(button);
    button = document.createElement('button');
    button.textContent = 'Delete';
    buttonContainer.appendChild(button);
    card.appendChild(buttonContainer);

    container.appendChild(card);
}

const myLibrary = [];
const x = new Book('The Hobbit', 'J.R.R. Tolkien', '287', true);
const y = new Book('Lord of The Rings', 'J.R.R. Tolkien', '1072', false);
myLibrary.push(x);
myLibrary.push(y);
makeCard(x);




