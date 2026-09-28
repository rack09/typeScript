"use strict";
// =========================
//     TIPI E INTERFACCE
// =========================
// =========================
//          CLASSI
// =========================
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
        return corso.aggiungiPartecipante(this);
    }
}
class Corso {
    titoloCorso;
    descrizione;
    settoreProfessionale;
    durata;
    iscritti = [];
    constructor(titoloCorso, descrizione, settoreProfessionale, durata) {
        this.titoloCorso = titoloCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }
    get elencoIscritti() {
        return [...this.iscritti];
    }
    aggiungiPartecipante(partecipante) {
        const giaIscritto = this.iscritti.includes(partecipante);
        if (giaIscritto) {
            return false;
        }
        this.iscritti.push(partecipante);
        return true;
    }
}
class Azienda {
    nomeAzienda;
    settoreAttivita;
    descrizione;
    posizioni;
    offerte = [];
    constructor(nomeAzienda, settoreAttivita, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioni = [...posizioniAperte];
    }
    get posizioniAperte() {
        return [...this.posizioni];
    }
    get offerteEffettuate() {
        return this.offerte.map((offerta) => ({ ...offerta }));
    }
    offriPosizione(partecipante, posizione) {
        const posizioneDisponibile = this.posizioni.includes(posizione);
        const offertaGiaEffettuata = this.offerte.some((offerta) => offerta.partecipante === partecipante &&
            offerta.posizione === posizione);
        if (!posizioneDisponibile || offertaGiaEffettuata) {
            return false;
        }
        this.offerte.push({ partecipante, posizione });
        // Una semplice offerta non chiude la posizione:
        // potrà essere proposta anche ad altri partecipanti.
        return true;
    }
}
// =========================
// FUNZIONI DI PRESENTAZIONE
// =========================
function nomeCompleto(partecipante) {
    return `${partecipante.nome} ${partecipante.cognome}`;
}
function gestisciIscrizione(partecipante, corso) {
    const iscrizioneCompletata = partecipante.iscrivitiCorso(corso);
    if (iscrizioneCompletata) {
        console.log(`Iscrizione di ${nomeCompleto(partecipante)} al corso ${corso.titoloCorso} completata.`);
        return;
    }
    console.log(`${nomeCompleto(partecipante)} è già iscritto al corso ${corso.titoloCorso}.`);
}
function gestisciOfferta(azienda, partecipante, posizione) {
    const posizioneDisponibile = azienda.posizioniAperte.includes(posizione);
    const offertaGiaEffettuata = azienda.offerteEffettuate.some((offerta) => offerta.partecipante === partecipante &&
        offerta.posizione === posizione);
    const offertaRegistrata = azienda.offriPosizione(partecipante, posizione);
    if (offertaRegistrata) {
        console.log(`${azienda.nomeAzienda} offre la posizione di ${posizione} a ${nomeCompleto(partecipante)}.`);
        return;
    }
    if (!posizioneDisponibile) {
        console.log(`La posizione ${posizione} non è disponibile presso ${azienda.nomeAzienda}.`);
        return;
    }
    if (offertaGiaEffettuata) {
        console.log(`${azienda.nomeAzienda} ha già offerto la posizione di ${posizione} a ${nomeCompleto(partecipante)}.`);
    }
}
function stampaIscritti(corso) {
    const iscritti = corso.elencoIscritti.map(nomeCompleto);
    console.log(`\n--- ISCRITTI: ${corso.titoloCorso.toUpperCase()} ---`);
    console.log(iscritti.length > 0 ? iscritti : ["Nessun partecipante iscritto"]);
}
function stampaOfferte(azienda) {
    const offerte = azienda.offerteEffettuate.map((offerta) => `${offerta.posizione} → ${nomeCompleto(offerta.partecipante)}`);
    console.log(`\n--- OFFERTE: ${azienda.nomeAzienda.toUpperCase()} ---`);
    console.log(offerte.length > 0 ? offerte : ["Nessuna offerta effettuata"]);
}
// =========================
//      DATI DI ESEMPIO
// =========================
const partecipante1 = new Partecipante("Melvin", "Rosales", "El Salvador", "Laurea in informatica", ["spagnolo", "italiano"], "Falegnameria");
const partecipante2 = new Partecipante("Amina", "Diallo", "Senegal", "Diploma", ["francese", "italiano", "wolof"], "Sartoria");
const partecipante3 = new Partecipante("Omar", "Hassan", "Egitto", "Scuola secondaria", ["arabo", "italiano"], "Ristorazione");
const corsoFalegnameria = new Corso("Corso di falegnameria", "Tecniche fondamentali per lavorare il legno", "Artigianato", 120);
const corsoSartoria = new Corso("Corso di sartoria", "Tecniche di cucito e realizzazione di abiti", "Artigianato tessile", 100);
const corsoRistorazione = new Corso("Corso di ristorazione", "Preparazione degli alimenti e organizzazione della cucina", "Ristorazione", 150);
const aziendaLegnoVivo = new Azienda("Legno Vivo", "Falegnameria", "Bottega specializzata nella lavorazione artigianale del legno", ["Apprendista falegname", "Addetto alla lavorazione del legno"]);
const aziendaStileArtigiano = new Azienda("Stile Artigiano", "Sartoria", "Laboratorio specializzato nella produzione di abiti artigianali", ["Apprendista di sartoria", "Addetto al confezionamento"]);
// =========================
// ESECUZIONE DEL PROGRAMMA
// =========================
gestisciIscrizione(partecipante1, corsoFalegnameria);
gestisciIscrizione(partecipante2, corsoSartoria);
gestisciIscrizione(partecipante3, corsoRistorazione);
// Verifica del controllo sulle iscrizioni duplicate.
gestisciIscrizione(partecipante1, corsoFalegnameria);
gestisciOfferta(aziendaLegnoVivo, partecipante1, "Apprendista falegname");
gestisciOfferta(aziendaStileArtigiano, partecipante2, "Apprendista di sartoria");
// Verifica di una posizione non disponibile.
gestisciOfferta(aziendaLegnoVivo, partecipante3, "Cuoco");
// Verifica del controllo sulle offerte duplicate.
gestisciOfferta(aziendaLegnoVivo, partecipante1, "Apprendista falegname");
const corsi = [
    corsoFalegnameria,
    corsoSartoria,
    corsoRistorazione
];
const aziende = [
    aziendaLegnoVivo,
    aziendaStileArtigiano
];
corsi.forEach(stampaIscritti);
aziende.forEach(stampaOfferte);
