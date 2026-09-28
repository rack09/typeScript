# 🌍 IncluDO – Progetto TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![OOP](https://img.shields.io/badge/OOP-Classi%20e%20interfacce-6C63FF?style=flat)](https://www.typescriptlang.org/docs/handbook/2/classes.html)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github&logoColor=white)](https://github.com/rack09/typeScript)

**IncluDO** è un progetto TypeScript dedicato alla formazione professionale e all'inclusione lavorativa dei migranti.

Il programma mette in relazione partecipanti, corsi di formazione e aziende partner, gestendo le iscrizioni e le offerte di lavoro attraverso interfacce e classi.

## 🚀 Funzionalità principali

- 👤 Creazione di partecipanti con dati personali, istruzione e competenze linguistiche.
- 🎓 Iscrizione dei partecipanti ai corsi di formazione.
- 🚫 Controllo delle iscrizioni duplicate.
- 🔒 Elenco degli iscritti protetto e accessibile in sola lettura.
- 🏢 Creazione di aziende con posizioni lavorative aperte.
- 💼 Registrazione delle offerte di lavoro effettuate.
- 🚫 Controllo delle offerte duplicate e delle posizioni non disponibili.
- 📊 Riepilogo in console degli iscritti e delle offerte registrate.

## 🧱 Struttura OOP

| Componente | Responsabilità |
| --- | --- |
| `IPartecipante` | Definisce i dati e il comportamento di un partecipante. |
| `Partecipante` | Conserva i dati personali e richiede l'iscrizione a un corso. |
| `ICorso` | Definisce le proprietà e le operazioni di un corso. |
| `Corso` | Protegge l'elenco degli iscritti e impedisce i duplicati. |
| `IAzienda` | Definisce i dati e le operazioni di un'azienda partner. |
| `Azienda` | Controlla le posizioni e registra le offerte effettuate. |
| `OffertaLavoro` | Descrive il partecipante e la posizione di ogni offerta. |

## 🛡️ Scelte progettuali

Le classi gestiscono esclusivamente i dati e la logica del dominio:

- `aggiungiPartecipante()` restituisce `true` o `false` e non stampa messaggi;
- `offriPosizione()` restituisce `true` o `false` e registra ogni offerta valida;
- gli array interni sono `private` e vengono esposti come collezioni `readonly`;
- i messaggi destinati all'utente vengono stampati da funzioni esterne alle classi;
- le posizioni restano aperte dopo una semplice offerta, ma la stessa posizione non può essere offerta due volte allo stesso partecipante.

Questa separazione permette di riutilizzare le classi anche in una futura interfaccia web senza modificarne la logica.

## 🗂️ Struttura del progetto

```text
typeScript/
├── index.ts          # Codice sorgente TypeScript
├── package.json      # Script e dipendenze del progetto
├── package-lock.json # Versioni esatte delle dipendenze
├── tsconfig.json     # Configurazione del compilatore
├── .gitignore        # File generati esclusi da Git
└── README.md         # Documentazione
```

La cartella `dist/` viene generata durante la compilazione e non viene salvata nel repository.

## 💻 Installazione ed esecuzione

È necessario avere Node.js 18 o una versione successiva.

```bash
git clone https://github.com/rack09/typeScript.git
cd typeScript
npm install
npm run build
npm start
```

Per compilare ed eseguire il progetto con un unico comando:

```bash
npm run dev
```

Per controllare i tipi senza generare JavaScript:

```bash
npm run typecheck
```

## ⚙️ Configurazione TypeScript

Il file `tsconfig.json` utilizza:

- `target: ES2022`;
- `module: CommonJS`;
- `strict: true`;
- `outDir: dist`;
- `noEmitOnError: true`.

Il JavaScript compilato può quindi essere rigenerato in modo identico da chiunque cloni il repository.

## 👨‍💻 Autore

**Melvin Rosales**

- GitHub: [@rack09](https://github.com/rack09)
