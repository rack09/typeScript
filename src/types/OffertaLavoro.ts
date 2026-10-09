import type { IPartecipante } from "./IPartecipante";

export type OffertaLavoro = {
    readonly partecipante: IPartecipante;
    readonly posizione: string;
};
