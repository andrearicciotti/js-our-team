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
let string = "";

for (let i = 0; i < team.length; i++) {

    const curObject = team[i];

    for (let key in curObject) {
        console.log(key, "-", curObject[key]);

        string += `${curObject[key]}`
    }
    console.log("----------");
    // console.log(string);
}

rowElem.innerHTML = string;
// console.log(rowElem);


// Creo elementi immagine
const teamPhotos = [];

for (let i = 0; i < team.length; i++) {

    const curPhoto = team[i].photo;
    console.log(curPhoto);

    let ImageElem = document.createElement('img');
    ImageElem.src = curPhoto;

    console.log(ImageElem);
    teamPhotos.push(ImageElem);

}

console.log(teamPhotos);


// Stampo elementi immagine
for (let i = 0; i < teamPhotos.length; i++) {

    const curImage = teamPhotos[i];

    const card = document.createElement('div');
    card.classList.add('col-4');

    console.log(curImage);
    card.append(curImage);
    rowElem.append(card);
}


