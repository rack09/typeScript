import type { EsitoOfferta } from "../types/EsitoOfferta";
import type { IAzienda } from "../types/IAzienda";
import type { IPartecipante } from "../types/IPartecipante";
import type { OffertaLavoro } from "../types/OffertaLavoro";

export class Azienda implements IAzienda {
    private readonly posizioni: string[];
    private readonly offerte: OffertaLavoro[] = [];

    constructor(
        public readonly nomeAzienda: string,
        public readonly settoreAttivita: string,
        public readonly descrizione: string,
        posizioniAperte: readonly string[]
    ) {
        this.posizioni = [...posizioniAperte];
    }

    get posizioniAperte(): readonly string[] {
        return [...this.posizioni];
    }

    get offerteEffettuate(): readonly OffertaLavoro[] {
        return this.offerte.map((offerta) => ({ ...offerta }));
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): EsitoOfferta {
        if (!this.posizioni.includes(posizione)) {
            return "non_disponibile";
        }

        const offertaGiaEffettuata = this.offerte.some(
            (offerta) =>
                offerta.partecipante === partecipante &&
                offerta.posizione === posizione
        );

        if (offertaGiaEffettuata) {
            return "gia_effettuata";
        }

        this.offerte.push({ partecipante, posizione });

        // Una semplice offerta non chiude la posizione:
        // potrà essere proposta anche ad altri partecipanti.
        return "registrata";
    }
}
