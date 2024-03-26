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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
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
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
