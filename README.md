# IncluDO – Progetto TypeScript

IncluDO è un progetto sviluppato in **TypeScript** per rappresentare una piattaforma dedicata alla formazione professionale e all'inclusione lavorativa dei migranti.

Il programma mette in relazione partecipanti, corsi di formazione e aziende partner, permettendo di gestire le iscrizioni ai corsi e le offerte di lavoro.

## Obiettivo del progetto

L'obiettivo è applicare i concetti fondamentali della programmazione orientata agli oggetti in TypeScript:

- definizione di interfacce;
- creazione di classi che implementano le interfacce;
- utilizzo di proprietà e metodi tipizzati;
- gestione di array di oggetti;
- interazione tra istanze di classi differenti;
- controllo delle iscrizioni duplicate e delle posizioni disponibili.

## Struttura del progetto

```text
├── index.ts   # Codice sorgente TypeScript
├── index.js   # Codice JavaScript compilato
└── README.md  # Documentazione del progetto
```

## Interfacce e classi

### Partecipante

L'interfaccia `IPartecipante` descrive i dati personali, il livello di istruzione, le competenze linguistiche e l'ambito di formazione di interesse.

La classe `Partecipante` implementa l'interfaccia e utilizza il metodo `iscrivitiCorso()` per iscrivere il partecipante a un corso.

### Corso

L'interfaccia `ICorso` definisce le caratteristiche di un corso e il relativo elenco degli iscritti.

La classe `Corso` implementa il metodo `aggiungiPartecipante()`, che aggiunge un partecipante all'elenco e impedisce che la stessa persona venga iscritta due volte allo stesso corso.

### Azienda

L'interfaccia `IAzienda` rappresenta un'azienda partner e le sue posizioni lavorative aperte.

La classe `Azienda` implementa il metodo `offriPosizione()`, che verifica la disponibilità della posizione prima di offrirla a un partecipante.

## Funzionalità dimostrate

Nel progetto vengono creati:

- tre partecipanti con caratteristiche differenti;
- tre corsi di formazione;
- due aziende partner con diverse posizioni aperte.

Il codice verifica inoltre:

- l'iscrizione dei partecipanti ai corsi;
- il tentativo di iscrizione duplicata;
- l'offerta di posizioni lavorative disponibili;
- il tentativo di offrire una posizione non disponibile;
- la visualizzazione finale degli iscritti a ogni corso.

I risultati delle operazioni vengono mostrati nella console.

## Tecnologie utilizzate

- TypeScript
- JavaScript
- Programmazione orientata agli oggetti
- CodePen
- GitHub

## Esecuzione del progetto

Il progetto può essere provato direttamente su CodePen:

[Apri IncluDO su CodePen](https://codepen.io/editor/M-Rosales/pen/01a0c4db-a264-70a6-80ee-718006bee0e8?console=true&file=%2Fscript.ts&orientation=left&panel=files&show=split)

Per eseguirlo localmente, con Node.js e TypeScript installati:

```bash
npx tsc index.ts
node index.js
```

È anche possibile eseguire direttamente il file JavaScript già compilato:

```bash
node index.js
```

## Repository

[Codice sorgente su GitHub](https://github.com/rack09/typeScript)

## Autore

**Melvin Rosales**

Progetto realizzato come esercitazione finale del modulo TypeScript.
