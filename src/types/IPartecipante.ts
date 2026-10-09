import type { ICorso } from "./ICorso";

export interface IPartecipante {
    readonly nome: string;
    readonly cognome: string;
    readonly paeseOrigine: string;
    readonly livelloIstruzione: string;
    readonly competenzeLinguistiche: readonly string[];
    readonly ambitoFormazioneInteresse: string;

    iscrivitiCorso(corso: ICorso): boolean;
}
