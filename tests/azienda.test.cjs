const test = require("node:test");
const assert = require("node:assert/strict");
const { Azienda } = require("../dist/models/Azienda.js");
const { Partecipante } = require("../dist/models/Partecipante.js");
const { gestisciOfferta } = require("../dist/presentation/presentazione.js");

function creaPartecipante(nome) {
    return new Partecipante(nome, "Test", "Italia", "Diploma", ["italiano"], "Sartoria");
}

test("registra un'offerta valida senza chiudere la posizione", () => {
    const azienda = new Azienda("Bottega", "Sartoria", "Laboratorio", ["Sarto"]);
    const amina = creaPartecipante("Amina");
    const omar = creaPartecipante("Omar");

    assert.equal(azienda.offriPosizione(amina, "Sarto"), "registrata");
    assert.equal(azienda.offriPosizione(omar, "Sarto"), "registrata");
    assert.equal(azienda.offerteEffettuate.length, 2);
    assert.deepEqual(azienda.posizioniAperte, ["Sarto"]);
});

test("distingue una posizione non disponibile senza registrare l'offerta", () => {
    const azienda = new Azienda("Bottega", "Sartoria", "Laboratorio", ["Sarto"]);

    assert.equal(azienda.offriPosizione(creaPartecipante("Amina"), "Cuoco"), "non_disponibile");
    assert.equal(azienda.offerteEffettuate.length, 0);
});

test("distingue un'offerta duplicata senza aggiungerla due volte", () => {
    const azienda = new Azienda("Bottega", "Sartoria", "Laboratorio", ["Sarto"]);
    const amina = creaPartecipante("Amina");

    assert.equal(azienda.offriPosizione(amina, "Sarto"), "registrata");
    assert.equal(azienda.offriPosizione(amina, "Sarto"), "gia_effettuata");
    assert.equal(azienda.offerteEffettuate.length, 1);
});

test("la presentazione usa soltanto l'esito restituito dall'azienda", () => {
    let chiamate = 0;
    const azienda = {
        nomeAzienda: "Bottega",
        offriPosizione() {
            chiamate += 1;
            return "non_disponibile";
        },
        get posizioniAperte() {
            throw new Error("La presentazione non deve leggere le regole dell'azienda");
        },
        get offerteEffettuate() {
            throw new Error("La presentazione non deve leggere le regole dell'azienda");
        }
    };
    const messaggi = [];
    const logOriginale = console.log;

    try {
        console.log = (messaggio) => messaggi.push(messaggio);
        gestisciOfferta(azienda, creaPartecipante("Amina"), "Cuoco");
    } finally {
        console.log = logOriginale;
    }

    assert.equal(chiamate, 1);
    assert.deepEqual(messaggi, ["La posizione Cuoco non è disponibile presso Bottega."]);
});
