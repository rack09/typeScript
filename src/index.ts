import {
    aziende,
    aziendaLegnoVivo,
    aziendaStileArtigiano,
    corsi,
    corsoFalegnameria,
    corsoRistorazione,
    corsoSartoria,
    partecipante1,
    partecipante2,
    partecipante3
} from "./data/datiEsempio";
import {
    gestisciIscrizione,
    gestisciOfferta,
    stampaIscritti,
    stampaOfferte
} from "./presentation/presentazione";

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

corsi.forEach(stampaIscritti);
aziende.forEach(stampaOfferte);
