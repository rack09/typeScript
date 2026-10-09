import type { IPartecipante } from "./IPartecipante";

export interface ICorso {
    readonly titoloCorso: string;
    readonly descrizione: string;
    readonly settoreProfessionale: string;
    readonly durata: number;
    readonly elencoIscritti: readonly IPartecipante[];

    aggiungiPartecipante(partecipante: IPartecipante): boolean;
}
