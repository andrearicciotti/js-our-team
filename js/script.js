// RACCOLTA DATI
// Creo array di oggetti
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg"
    }
]


// LOGICA DEL PROGRAMMA
// Stampo in console chiavi e valori di ogni singolo oggetto
// console.log(team);
// console.log(team[0].name,team[0].role,team[0].photo);
// console.log(team[1].name,team[1].role,team[1].photo);
// console.log(team[2].name,team[2].role,team[2].photo);
// console.log(team[3].name,team[3].role,team[3].photo);
// console.log(team[4].name,team[4].role,team[4].photo);
// console.log(team[5].name,team[5].role,team[5].photo);


// Stampo le informazioni su ogni singolo oggetto nel DOM sotto forma di stringa

const rowElem = document.querySelector('.row');
// let string = "";

// for (let i = 0; i < team.length; i++) {

//     const curObject = team[i];

//     for (let key in curObject) {
//         console.log(key, "-", curObject[key]);

//         string += `${curObject[key]}`
//     }
//     console.log("----------");
//     // console.log(string);
// }

// rowElem.innerHTML = string;
// console.log(rowElem);


// Creo elementi immagine
const teamPhotos = [];

for (let i = 0; i < team.length; i++) {

    const curPhoto = team[i].photo;
    // console.log(curPhoto);

    let ImageElem = document.createElement('img');
    ImageElem.classList.add('card-img-top');
    ImageElem.src = curPhoto;

    // console.log(ImageElem);
    teamPhotos.push(ImageElem);

}

// console.log(teamPhotos);


// Stampo elementi immagine
const cards = document.querySelector('.team-section');
cards.classList.add('g-4');

// for (let i = 0; i < teamPhotos.length; i++) {

//     const curImage = teamPhotos[i];

//     const col = document.createElement('div');
//     col.classList.add('col-4');

//     const card = document.createElement('div');
//     card.classList.add('card');

//     const cardElems = document.createElement('ul');
//     cardElems.classList.add('list-group');
//     cardElems.classList.add('list-group-flush');
//     cardElems.classList.add(`card-elem-${i}`);

//     // console.log(curImage);
//     console.log(cardElems);
//     card.append(curImage);
//     col.append(card);
//     cards.append(col);
// }


// Organizzazione singoli membri in card individuali
for (let i = 0; i < team.length; i++) {

    const col = document.createElement('div');
    col.classList.add('col-lg-4');
    col.classList.add('col-md-6');
    col.classList.add('col-sm-12');

    const card = document.createElement('div');
    card.classList.add('card');

    const curPhoto = team[i].photo;
    const ImageElem = document.createElement('img');
    ImageElem.classList.add('card-img-top');
    ImageElem.src = curPhoto;

    card.append(ImageElem);

    const cardElems = document.createElement('ul');
    cardElems.classList.add('list-group');
    cardElems.classList.add('list-group-flush');
    card.append(cardElems);

    const curName = team[i].name;
    console.log(curName);
    const nameElem = document.createElement('li');
    nameElem.classList.add('list-group-item');
    nameElem.innerHTML = curName;
    cardElems.append(nameElem);

    const curRole = team[i].role;
    console.log(curRole);
    const roleElem = document.createElement('li');
    roleElem.classList.add('list-group-item');
    roleElem.innerHTML = curRole;
    cardElems.append(roleElem);
    // console.log(curPhoto);
    col.append(card);
    cards.append(col);

}
