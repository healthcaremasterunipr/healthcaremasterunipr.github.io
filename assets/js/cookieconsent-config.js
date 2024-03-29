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
                    title: "Informativa cookie",
                    description: "Per facilitare la navigazione del sito utilizziamo cookie tecnici",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href=\"#link\">Informativa sulla privacy</a>\n<a href=\"#link\">Termini e condizioni</a>"
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
                            description: "I cookie sono brevi frammenti di testo (lettere e/o numeri) che permettono al server web di memorizzare sul client (il browser, ad es. Internet Explorer, Chrome, Firefox, Opera…) informazioni da riutilizzare nel corso della medesima visita al sito (cookie di sessione) o in seguito, anche a distanza di giorni (cookie persistenti). I cookie vengono memorizzati, in base alle preferenze dell’utente, dal singolo browser sullo specifico dispositivo utilizzato (computer, tablet, smartphone)."
                        },
                        {
                            title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Sono i cookie che servono a effettuare la navigazione o a fornire un servizio richiesto dall’utente. Non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare del sito web. Senza il ricorso a tali cookie, alcune operazioni non potrebbero essere compiute o sarebbero più complesse e/o meno sicure, per le quali i cookie, che consentono di effettuare e mantenere l’identificazione dell’utente nell’ambito della sessione, risultano indispensabili.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Ulteriori informazioni",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            }
        },
        autoDetect: "browser"
    }
});
