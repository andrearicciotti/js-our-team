// RACCOLTA DATI
// Creo array di oggetti
const team = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        photo : "wayne-barnett-founder-ceo.jpg"
    },

    {
        name : "Angela Caroll",
        role : "Chief Editor",
        photo : "angela-caroll-chief-editor.jpg"
    },

    {
        name : "Walter Gordon",
        role : "Office Manager",
        photo : "walter-gordon-office-manager.jpg"
    },

    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        photo : "angela-lopez-social-media-manager.jpg"
    },

    {
        name : "Scott Estrada",
        role : "Developer",
        photo : "scott-estrada-developer.jpg"
    },

    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        photo : "barbara-ramos-graphic-designer.jpg"
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

const rowElem = document.querySelector('.team-section');
let string ="";

for (let i = 0; i < team.length; i++) {
    const curObject = team[i];

    for (let key in curObject) {
        console.log(key, curObject[key]);

        string += `${curObject[key]}`
    }
    console.log(string);
}

rowElem.innerHTML = string;
console.log(rowElem);