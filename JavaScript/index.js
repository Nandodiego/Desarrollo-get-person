const API_URL = 'https://randomuser.me/api/?results=2';
const images = document.querySelector('#images');
const names = document.querySelector('#names');
const usernames = document.querySelector('#usernames');
const cells = document.querySelector('#cells');
const emails = document.querySelector('#emails');
const getPerson = document.querySelector('#getPersonBtn');


const getInformation = async () => {
    try{
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        console.log(datos);

        this.addImages(images, datos.results[0].picture.large);
        this.addNames(names,`${datos.results[0].name.title} 
        ${datos.results[0].name.first} ${datos.results[0].name.last}`);
        this.addUsernames(usernames, `${datos.results[0].login.username}`);
        this.addCell(cells, datos.results[0].cell);
        this.addEmail(emails, datos.results[0].email);     
    } catch(error){
        alert(error);
    };
};

getInformation();

getPerson.addEventListener('click', () => {
    getInformation();
});

function addImages(elementHtml, images){
    elementHtml.src = images;
};

function addNames(elementHtml, names){
    elementHtml.innerHTML = names;
};

function addUsernames(elementHtml, username){
    elementHtml.innerHTML = username;
};

function addCell(elementHtml, cells){
    elementHtml.innerHTML = cells;
};

function addEmail(elementHtml, emails){
    elementHtml.innerHTML = emails;
};
