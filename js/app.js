/* Generare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Bonus
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Prendo il container dove inserirò le celle
const gridContainer = document.querySelector(".grid-container");

// Creo la griglia 10*10 invocando la funzione
createGrid(10, 10);

// Prendo il bottone di input della difficoltà
const submitButton = document.getElementById("submitButton");

// Aggiungo un EventListener al bottone per resettare la partita e cambiare la difficoltà
submitButton.addEventListener("click", function() {
    // Prendo il valore del select
    const selectedDifficulty = document.getElementById("difficultySelector").value;

    if (selectedDifficulty === "easy") {
        // Se è stata scelta la difficoltà facile, creo una griglia 10*10
        createGrid(10, 10);
    } else if (selectedDifficulty === "medium") {
        // Se è stata scelta la difficoltà media, creo una griglia 9*9
        createGrid(9, 9);
    } else if (selectedDifficulty === "hard") {
        // Se è stata scelta la difficoltà difficile, creo una griglia 7*7
        createGrid(7, 7);
    }
});

function createGrid(rows, cols) {
    // Svuoto il container
    gridContainer.innerHTML = "";

    // Assegno al container una larghezza in base al numero di colonne
    gridContainer.style.width = `calc(var(--cell-size) * ${cols})`;

    // Calcolo il numero totale di celle
    const cellsTotal = rows * cols;

    // Creo ogni cella usando un ciclo
    for (let i = 1; i <= cellsTotal; i++) {
        // Aggiungo la cella al container
        gridContainer.append(createCell(i));
    }
}

function createCell(counter) {
    // Creo la cella
    const cell = document.createElement("div");
    // Le fornisco una classe
    cell.classList.add("cell");
    // Le aggiungo il numero che deve contenere
    cell.innerHTML = `<span>${counter}</span>`;
    // Le aggiungo un EventListener che la colora al click
    cell.addEventListener("click", onCellClick);
    // Ritorno la cella
    return cell;
}

function onCellClick() {
    this.classList.add("cell-clicked");
}