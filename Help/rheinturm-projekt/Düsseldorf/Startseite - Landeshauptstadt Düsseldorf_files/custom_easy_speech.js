$(function () {

    var easyLink = $('#easy-speech-lhd');

    // Spinner-CSS dynamisch hinzufügen
    var spinnerStyle = document.createElement("style");
    spinnerStyle.innerHTML = `
        .status-spinner {
            display:inline-block;
            width:12px;
            height:12px;
            border:2px solid black;
            border-top:2px solid transparent;
            border-radius:50%;
            animation:eaSpin 0.8s linear infinite;
            margin-right:5px;
        }

        @keyframes eaSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinnerStyle);

    EA.deactivateEasy();

    function updateSymbol(isActive) {
        var symbol = isActive ? '✔' : '✖';
        easyLink.find('.status-symbol').remove();
        easyLink.find('.status-spinner').remove();
        easyLink.prepend('<span class="status-symbol" style="font-weight:bold; color:black; margin-right:5px;">' + symbol + '</span>');
    }

    function showSpinner() {
        easyLink.find('.status-symbol').remove();
        easyLink.find('.status-spinner').remove();
        easyLink.prepend('<span class="status-spinner"></span>');
    }

    if (EA.scriptIsLoaded() && EA.isEasyActive()) {
        console.log('Einfache Sprache ist aktiv.');
        updateSymbol(true);
    } else {
        updateSymbol(false);
    }

    easyLink.on('click', async function (e) {

        e.preventDefault();

        if (!EA.scriptIsLoaded()) {
            return;
        }

        var statusEasy = EA.statusEasy();

        switch (statusEasy.status) {

            case 1: // Aktivieren
                try {
                    showSpinner();
                    if (await EA.activateEasy()) {
                        updateSymbol(true);
                        console.log('Einfache Sprache aktiviert!');
                    }
                } catch (err) {
                    console.error('Fehler beim Aktivieren:', err);
                }
                break;

            case 2: // Deaktivieren
                try {
                    showSpinner();
                    if (await EA.deactivateEasy()) {
                        updateSymbol(false);
                        console.log('Einfache Sprache deaktiviert!');
                    }
                } catch (err) {
                    console.error('Fehler beim Deaktivieren:', err);
                }
                break;

            default:
                showSpinner();
                console.log('Status: lädt...');
                break;
        }
    });

});