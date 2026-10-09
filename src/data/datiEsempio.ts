import { Azienda } from "../models/Azienda";
import { Corso } from "../models/Corso";
import { Partecipante } from "../models/Partecipante";
import type { IAzienda } from "../types/IAzienda";
import type { ICorso } from "../types/ICorso";

export const partecipante1 = new Partecipante(
    "Melvin",
    "Rosales",
    "El Salvador",
    "Laurea in informatica",
    ["spagnolo", "italiano"],
    "Falegnameria"
);

export const partecipante2 = new Partecipante(
    "Amina",
    "Diallo",
    "Senegal",
    "Diploma",
    ["francese", "italiano", "wolof"],
    "Sartoria"
);

export const partecipante3 = new Partecipante(
    "Omar",
    "Hassan",
    "Egitto",
    "Scuola secondaria",
    ["arabo", "italiano"],
    "Ristorazione"
);

export const corsoFalegnameria = new Corso(
    "Corso di falegnameria",
    "Tecniche fondamentali per lavorare il legno",
    "Artigianato",
    120
);

export const corsoSartoria = new Corso(
    "Corso di sartoria",
    "Tecniche di cucito e realizzazione di abiti",
    "Artigianato tessile",
    100
);

export const corsoRistorazione = new Corso(
    "Corso di ristorazione",
    "Preparazione degli alimenti e organizzazione della cucina",
    "Ristorazione",
    150
);

export const aziendaLegnoVivo = new Azienda(
    "Legno Vivo",
    "Falegnameria",
    "Bottega specializzata nella lavorazione artigianale del legno",
    ["Apprendista falegname", "Addetto alla lavorazione del legno"]
);

export const aziendaStileArtigiano = new Azienda(
    "Stile Artigiano",
    "Sartoria",
    "Laboratorio specializzato nella produzione di abiti artigianali",
    ["Apprendista di sartoria", "Addetto al confezionamento"]
);

export const corsi: readonly ICorso[] = [
    corsoFalegnameria,
    corsoSartoria,
    corsoRistorazione
];

export const aziende: readonly IAzienda[] = [
    aziendaLegnoVivo,
    aziendaStileArtigiano
];
