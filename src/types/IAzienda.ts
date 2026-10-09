import type { EsitoOfferta } from "./EsitoOfferta";
import type { IPartecipante } from "./IPartecipante";
import type { OffertaLavoro } from "./OffertaLavoro";

export interface IAzienda {
    readonly nomeAzienda: string;
    readonly settoreAttivita: string;
    readonly descrizione: string;
    readonly posizioniAperte: readonly string[];
    readonly offerteEffettuate: readonly OffertaLavoro[];

    offriPosizione(partecipante: IPartecipante, posizione: string): EsitoOfferta;
}
