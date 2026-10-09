import type { ICorso } from "../types/ICorso";
import type { IPartecipante } from "../types/IPartecipante";

export class Corso implements ICorso {
    private readonly iscritti: IPartecipante[] = [];

    constructor(
        public readonly titoloCorso: string,
        public readonly descrizione: string,
        public readonly settoreProfessionale: string,
        public readonly durata: number
    ) {}

    get elencoIscritti(): readonly IPartecipante[] {
        return [...this.iscritti];
    }

    aggiungiPartecipante(partecipante: IPartecipante): boolean {
        if (this.iscritti.includes(partecipante)) {
            return false;
        }

        this.iscritti.push(partecipante);
        return true;
    }
}
