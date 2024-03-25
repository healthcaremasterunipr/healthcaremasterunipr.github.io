import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "it",
        translations: {
            it: {
                consentModal: {
                    title: "Questo sito web utilizza i cookie",
                    description: "Utilizziamo solo cookie tecnici per rendere possibile questa tua esperienza di navigazione.",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href="">Informativa sulla privacy</a>\n<a href=\"#link\">Termini e condizioni</a>"
                },
                preferencesModal: {
                    title: "Centro preferenze per il consenso",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    savePreferencesBtn: "Salva le preferenze",
                    closeIconLabel: "Chiudi la finestra",
                    serviceCounterLabel: "Servizi",
                    sections: [
                        {
                            title: "Utilizzo dei Cookie",
                            description: "Utilizziamo solo cookie tecnici per facilitare la tua esperienza di navigazione."
                        },
                        {
                            title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Cosa sono i cookie tecnici? Sono i cookie che servono a effettuare la navigazione o a fornire un servizio richiesto dall’utente. Non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare del sito web.

Senza il ricorso a tali cookie, alcune operazioni non potrebbero essere compiute o sarebbero più complesse e/o meno sicure, come ad esempio le attività di home banking (visualizzazione dell’estratto conto, bonifici, pagamento di bollette, ecc.), per le quali i cookie, che consentono di effettuare e mantenere l’identificazione dell’utente nell’ambito della sessione, risultano indispensabili.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Ulteriori informazioni",
                            description: "Per ogni informazione e richiesta in merito alla nostra gestione dei cookies per favore <a class=\"cc__link\" href=\"#yourdomain.com\">contattaci</a>."
                        }
                    ]
                }
            }
        },
        autoDetect: "browser"
    },
    disablePageInteraction: true
});
