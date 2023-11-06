# Esercizio 

---

## Testo dell' Esercizio

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

---

- MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
- MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
- MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
- BONUS 1:
Trasformare la stringa foto in una immagine effettiva
- BONUS 2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

---

## Algoritmo di svolgimento

**1. Raccolta dati**

Creo Array di oggetti contententi i membri del team e le informazioni personali per ognuno.

**2. Logica del programma**

- Creo Array di oggetti.
- Stampo in console chiavi e valori dei ogni sngolo oggetto contenuto nell' array.
- Recupero un elemento dal documento HTML al quale associare la stringa con chiavi e valori di ogni singolo oggetto.
- Trasformo la stringa foto in un immagine creando un elemento "img" modificandone il valore "src" con il path dell' immagine definito nella stringa che e' il valore della chiave "foto" dell' oggetto contenuto nell' array.
- Manipolo il DOM creando elementi di tipo "card" al quale assegnare i valori recuperati dal nostro array di oggetti tramite cicli.


