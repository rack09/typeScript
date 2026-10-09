import type { IAzienda } from "../types/IAzienda";
import type { ICorso } from "../types/ICorso";
import type { IPartecipante } from "../types/IPartecipante";

function nomeCompleto(partecipante: IPartecipante): string {
    return `${partecipante.nome} ${partecipante.cognome}`;
}

function esitoImprevisto(esito: never): never {
    throw new Error(`Esito offerta inatteso: ${esito}`);
}

export function gestisciIscrizione(
    partecipante: IPartecipante,
    corso: ICorso
): void {
    const iscrizioneCompletata = partecipante.iscrivitiCorso(corso);

    if (iscrizioneCompletata) {
        console.log(
            `Iscrizione di ${nomeCompleto(partecipante)} al corso ${corso.titoloCorso} completata.`
        );
        return;
    }

    console.log(
        `${nomeCompleto(partecipante)} è già iscritto al corso ${corso.titoloCorso}.`
    );
}

export function gestisciOfferta(
    azienda: IAzienda,
    partecipante: IPartecipante,
    posizione: string
): void {
    const esito = azienda.offriPosizione(partecipante, posizione);

    switch (esito) {
        case "registrata":
            console.log(
                `${azienda.nomeAzienda} offre la posizione di ${posizione} a ${nomeCompleto(partecipante)}.`
            );
            return;
        case "non_disponibile":
            console.log(
                `La posizione ${posizione} non è disponibile presso ${azienda.nomeAzienda}.`
            );
            return;
        case "gia_effettuata":
            console.log(
                `${azienda.nomeAzienda} ha già offerto la posizione di ${posizione} a ${nomeCompleto(partecipante)}.`
            );
            return;
        default:
            esitoImprevisto(esito);
    }
}

export function stampaIscritti(corso: ICorso): void {
    const iscritti = corso.elencoIscritti.map(nomeCompleto);

    console.log(`\n--- ISCRITTI: ${corso.titoloCorso.toUpperCase()} ---`);
    console.log(iscritti.length > 0 ? iscritti : ["Nessun partecipante iscritto"]);
}

export function stampaOfferte(azienda: IAzienda): void {
    const offerte = azienda.offerteEffettuate.map(
        (offerta) => `${offerta.posizione} → ${nomeCompleto(offerta.partecipante)}`
    );

    console.log(`\n--- OFFERTE: ${azienda.nomeAzienda.toUpperCase()} ---`);
    console.log(offerte.length > 0 ? offerte : ["Nessuna offerta effettuata"]);
}
