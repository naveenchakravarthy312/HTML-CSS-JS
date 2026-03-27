// gemini.js

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = document.currentScript.getAttribute('data-api-key');
    const apiSecret = document.currentScript.getAttribute('data-api-secret');

    // Example function to fetch account information
    async function fetchAccountInfo() {
        try {
            const response = await fetch('https://api.gemini.com/v1/accounts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-GEMINI-APIKEY': apiKey,
                    'X-GEMINI-PAYLOAD': btoa(JSON.stringify({
                        request: '/v1/accounts',
                        nonce: Date.now()
                    })),
                    'X-GEMINI-SIGNATURE': crypto.subtle.digest('HMAC-SHA256', new TextEncoder().encode(apiSecret), new TextEncoder().encode(btoa(JSON.stringify({
                        request: '/v1/accounts',
                        nonce: Date.now()
                    }))))
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching account info:', error);
        }
    }

    // Example button to trigger fetchAccountInfo
    const fetchButton = document.createElement('button');
    fetchButton.textContent = 'Fetch Account Info';
    fetchButton.addEventListener('click', fetchAccountInfo);

    const widgetDiv = document.getElementById('gemini-widget');
    widgetDiv.appendChild(fetchButton);
});