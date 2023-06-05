document.getElementById('json-url-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var url = document.getElementById('json-url').value;
    
    // Fetch the JSON data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            generateCards('panel1', 'asset', data);
            generateCards('panel2', 'control', data);
            generateCards('panel3', 'technique', data);
        })
        .catch(error => console.error('Error:', error));
});

function generateCards(panelId, cardType, data) {
    // Get the panel element
    var panel = document.getElementById(panelId);

    // Get the card container
    var gridContainer = panel.getElementsByClassName('grid-container')[0];

    // For each card of the specified type in the data
    for (var i = 0; i < data.cards.length; i++) {
        if (data.cards[i].cardType === cardType) {
            // Create the card
            var card = document.createElement('div');
            card.className = 'card ' + cardType + '-card';

            // Create the icon
            var icon = document.createElement('img');
            icon.src = data.cards[i].iconPath;
            icon.alt = cardType.charAt(0).toUpperCase() + cardType.slice(1) + ' Icon';
            card.appendChild(icon);

            // Create the display name
            var name = document.createElement('h2');
            name.textContent = data.cards[i].displayValue;
            card.appendChild(name);

            // Create additional elements based on the card type
            if (cardType === 'asset') {
                var environment = document.createElement('p');
                environment.textContent = 'Environment: ' + data.cards[i].environment;
                card.appendChild(environment);
            } else if (cardType === 'control') {
                var description = document.createElement('p');
                description.textContent = 'Description: ' + data.cards[i].controlDescription;
                card.appendChild(description);

                // Add more control-specific data as per your needs...
            } else if (cardType === 'technique') {
                var id = document.createElement('p');
                id.textContent = 'Technique ID: ' + data.cards[i].techniqueID;
                card.appendChild(id);

                var techniqueName = document.createElement('p');
                techniqueName.textContent = 'Technique Name: ' + data.cards[i].techniqueName;
                card.appendChild(techniqueName);

                var tactic = document.createElement('p');
                tactic.textContent = 'Tactic: ' + data.cards[i].tactic;
                card.appendChild(tactic);
            }

            // Add the card to the grid container
            gridContainer.appendChild(card);
        }
    }
}
