import type { ICorso } from "../types/ICorso";
import type { IPartecipante } from "../types/IPartecipante";

export class Partecipante implements IPartecipante {
    constructor(
        public readonly nome: string,
        public readonly cognome: string,
        public readonly paeseOrigine: string,
        public readonly livelloIstruzione: string,
        public readonly competenzeLinguistiche: readonly string[],
        public readonly ambitoFormazioneInteresse: string
    ) {}

    iscrivitiCorso(corso: ICorso): boolean {
        return corso.aggiungiPartecipante(this);
    }
}
