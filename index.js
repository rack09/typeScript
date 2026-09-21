"use strict";
// interfaccia partecipante
// class Partecipante
class Partecipante {
    nome;
    cognome;
    paeseOrigine;
    livelloIstruzione;
    competenzeLinguistiche;
    ambitoFormazioneInteresse;
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiPartecipante(this);
    }
}
// classe corso
class Corso {
    titoloCorso;
    descrizione;
    settoreProfessionale;
    durata;
    elencoIscritti = [];
    constructor(titoloCorso, descrizione, settoreProfessionale, durata) {
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }
    aggiungiPartecipante(partecipante) {
        const giaIscritto = this.elencoIscritti.indexOf(partecipante) !== -1;
        if (giaIscritto) {
            console.log(partecipante.nome + " " + partecipante.cognome +
                "è già iscritto al corso " + this.titoloCorso);
            return;
        }
        this.elencoIscritti.push(partecipante);
        console.log("Iscrizione di " + partecipante.nome + " " + partecipante.cognome +
            "al corso " + this.titoloCorso + " completata.");
    }
}
// classe azienda
class Azienda {
    nomeAzienda;
    settoreAttivita;
    descrizione;
    posizioniAperte;
    constructor(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        const posizioneDisponibile = this.posizioniAperte.indexOf(posizione) !== -1;
        if (!posizioneDisponibile) {
            console.log("La posizione " + posizione + " non è disponibile presso " +
                this.nomeAzienda);
            return;
        }
        console.log(this.nomeAzienda + " offre la posizione di " + posizione + " a " +
            partecipante.nome + " " + partecipante.cognome);
    }
}
// =========================
// CREAZIONE PARTECIPANTI
// =========================
const partecipante1 = new Partecipante("Melvin", "Rosales", "El Salvador", "Laurea in informatica", ["spagnolo", "italiano"], "Falegnameria");
const partecipante2 = new Partecipante("Amina", "Diallo", "Senegal", "Diploma", ["francese", "italiano", "wolof"], "Sartoria");
const partecipante3 = new Partecipante("Omar", "Hassan", "Egitto", "Scuola secondaria", ["arabo", "italiano"], "Ristorazione");
// =========================
// CREAZIONE CORSI
// =========================
const corsoFalegnameria = new Corso("Corso di falegnameria", "Tecniche fondamentali per lavorare il legno", "Artigianato", 120);
const corsoSartoria = new Corso("Corso di sartoria", "Tecniche di cucito e realizzazione di abiti", "Artigianato tessile", 100);
const corsoRistorazione = new Corso("Corso di ristorazione", "Preparazione degli alimenti e organizzazione della cucina", "Ristorazione", 150);
// =========================
// ISCRIZIONE AI CORSI
// =========================
partecipante1.iscrivitiCorso(corsoFalegnameria);
partecipante2.iscrivitiCorso(corsoSartoria);
partecipante3.iscrivitiCorso(corsoRistorazione);
// Proviamo a iscrivere nuovamente lo stesso partecipante
partecipante1.iscrivitiCorso(corsoFalegnameria);
// =========================
// CREAZIONE AZIENDE
// =========================
const aziendaLegnoVivo = new Azienda("Legno Vivo", "Falegnameria", "Bottega specializzata nella lavorazione artigianale del legno", [
    "Apprendista falegname",
    "Addetto alla lavorazione del legno"
]);
const aziendaStileArtigiano = new Azienda("Stile Artigiano", "Sartoria", "Laboratorio specializzato nella produzione di abiti artigianali", [
    "Apprendista di sartoria",
    "Addetto al confezionamento"
]);
// =========================
// OFFERTE DI LAVORO
// =========================
aziendaLegnoVivo.offriPosizione(partecipante1, "Apprendista falegname");
aziendaStileArtigiano.offriPosizione(partecipante2, "Apprendista di sartoria");
// Testiamo una posizione non disponibile
aziendaLegnoVivo.offriPosizione(partecipante3, "Cuoco");
// =========================
// RIEPILOGO FINALE
// =========================
console.log("\n--- ISCRITTI AL CORSO DI FALEGNAMERIA ---");
console.log(corsoFalegnameria.elencoIscritti.map(partecipante => `${partecipante.nome} ${partecipante.cognome}`));
console.log("\n--- ISCRITTI AL CORSO DI SARTORIA ---");
console.log(corsoSartoria.elencoIscritti.map(partecipante => `${partecipante.nome} ${partecipante.cognome}`));
console.log("\n--- ISCRITTI AL CORSO DI RISTORAZIONE ---");
console.log(corsoRistorazione.elencoIscritti.map(partecipante => `${partecipante.nome} ${partecipante.cognome}`));
