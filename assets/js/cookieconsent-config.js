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
                    description: "Utilizziamo solo cookie tecnici per facilitare la tua esperienza di navigazione.
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze",
                    footer: "<a href=\"https://www.unipr.it/privacypolicy">Informativa sulla privacy</a>
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
                            description: "I cookie necessari contribuiscono a rendere fruibile il sito web abilitandone funzionalità di base quali la navigazione sulle pagine e l'accesso alle aree protette del sito. Il sito web non è in grado di funzionare correttamente senza questi cookie.",
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
