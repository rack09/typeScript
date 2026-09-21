# 🌍 IncluDO – Progetto TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/it/docs/Web/JavaScript)
[![OOP](https://img.shields.io/badge/OOP-Classi%20e%20interfacce-6C63FF?style=flat)](https://www.typescriptlang.org/docs/handbook/2/classes.html)
[![CodePen](https://img.shields.io/badge/CodePen-Demo%20online-000000?style=flat\&logo=codepen\&logoColor=white)](https://codepen.io/editor/M-Rosales/pen/01a0c4db-a264-70a6-80ee-718006bee0e8?console=true&file=%2Fscript.ts&orientation=left&panel=files&show=split)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat\&logo=github\&logoColor=white)](https://github.com/rack09/typeScript)

Un progetto TypeScript dedicato alla formazione professionale e all'inclusione lavorativa dei migranti.

🌐 **[Demo su CodePen](https://codepen.io/editor/M-Rosales/pen/01a0c4db-a264-70a6-80ee-718006bee0e8?console=true&file=%2Fscript.ts&orientation=left&panel=files&show=split)**
💻 **[Repository GitHub](https://github.com/rack09/typeScript)**

## 🚀 Descrizione del progetto

**IncluDO** rappresenta una piattaforma che mette in relazione partecipanti, corsi di formazione e aziende partner.

Il programma permette di iscrivere i partecipanti ai corsi, controllare eventuali iscrizioni duplicate e verificare la disponibilità di una posizione prima che un'azienda la offra.

Il progetto è stato realizzato come esercitazione finale del modulo **TypeScript** del Master Full Stack Development di **start2impact**.

## 🎯 Obiettivi

Il progetto applica alcuni concetti fondamentali della programmazione orientata agli oggetti in TypeScript:

* 🧩 definizione di interfacce;
* 🏗️ creazione di classi che implementano le interfacce;
* 🔤 utilizzo di proprietà, parametri e metodi tipizzati;
* 📋 gestione di array di oggetti;
* 🔗 interazione tra istanze di classi differenti;
* 🛡️ controllo delle iscrizioni duplicate e delle posizioni disponibili.

## ✨ Funzionalità principali

* 👤 Creazione di partecipanti con dati personali, istruzione e competenze linguistiche.
* 🎓 Creazione di corsi di formazione con durata, settore ed elenco degli iscritti.
* ✅ Iscrizione di un partecipante a un corso.
* 🚫 Prevenzione della doppia iscrizione allo stesso corso.
* 🏢 Creazione di aziende partner con posizioni lavorative aperte.
* 💼 Offerta di una posizione disponibile a un partecipante.
* ⚠️ Segnalazione delle posizioni non disponibili.
* 📊 Visualizzazione in console degli iscritti a ogni corso.

## 🧱 Interfacce e classi

| Componente      | Responsabilità                                                          |
| --------------- | ----------------------------------------------------------------------- |
| `IPartecipante` | Definisce i dati e il comportamento richiesti per un partecipante.      |
| `Partecipante`  | Memorizza le informazioni personali e gestisce l'iscrizione a un corso. |
| `ICorso`        | Definisce le proprietà e i metodi richiesti per un corso.               |
| `Corso`         | Gestisce l'elenco degli iscritti e impedisce le iscrizioni duplicate.   |
| `IAzienda`      | Definisce i dati e il comportamento richiesti per un'azienda partner.   |
| `Azienda`       | Controlla le posizioni aperte e offre una posizione al partecipante.    |

## ⚙️ Come funziona

1. Vengono creati tre partecipanti con caratteristiche differenti.
2. Vengono creati tre corsi: falegnameria, sartoria e ristorazione.
3. Ogni partecipante viene iscritto al corso di interesse.
4. Il programma prova una seconda iscrizione per verificare il controllo dei duplicati.
5. Vengono create due aziende con le relative posizioni aperte.
6. Le aziende offrono due posizioni disponibili.
7. Il programma prova anche a offrire una posizione non disponibile.
8. La console mostra il riepilogo finale degli iscritti.

## 🛠️ Tecnologie utilizzate

| Tecnologia   | Utilizzo                                                    |
| ------------ | ----------------------------------------------------------- |
| TypeScript   | Interfacce, tipizzazione, classi e logica del progetto.     |
| JavaScript   | Versione compilata ed esecuzione del programma.             |
| OOP          | Organizzazione del codice tramite oggetti e responsabilità. |
| CodePen      | Esecuzione e dimostrazione online.                          |
| Git e GitHub | Versionamento e pubblicazione del codice sorgente.          |

## 🗂️ Struttura del progetto

```text
typeScript/
├── index.ts   # Codice sorgente TypeScript
├── index.js   # Codice JavaScript compilato
└── README.md  # Documentazione del progetto
```

## 💻 Esecuzione locale

È necessario avere [Node.js](https://nodejs.org/) e TypeScript installati.

```bash
git clone https://github.com/rack09/typeScript.git
cd typeScript
npx tsc index.ts
node index.js
```

Poiché il repository contiene già il file JavaScript compilato, è possibile eseguirlo direttamente:

```bash
node index.js
```

I risultati delle iscrizioni e delle offerte di lavoro vengono mostrati nella console.

## 👨‍💻 Autore

**Melvin Rosales**

* GitHub: [@rack09](https://github.com/rack09)

