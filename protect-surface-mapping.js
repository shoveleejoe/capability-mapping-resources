// Fetch the data (we'll use fetch but you can also use XMLHttpRequest or any other method)
fetch('path/to/your/json')
  .then(response => response.json())
  .then(data => {

    // Get the panel element
    var panel1 = document.getElementById('panel1');

    // Get the card container
    var gridContainer = panel1.getElementsByClassName('grid-container')[0];

    // For each asset card in the data
    for (var i = 0; i < data.cards.length; i++) {
        if (data.cards[i].cardType === "asset") {
            // Create the card
            var card = document.createElement('div');
            card.className = 'card asset-card';

            // Create the icon
            var icon = document.createElement('img');
            icon.src = data.cards[i].iconPath;
            icon.alt = 'Asset Icon';
            card.appendChild(icon);

            // Create the display name
            var name = document.createElement('h2');
            name.textContent = data.cards[i].displayValue;
            card.appendChild(name);

            // Create the asset category
            var category = document.createElement('p');
            category.textContent = 'Asset Category: ' + data.cards[i].assetCategory;
            card.appendChild(category);

            // Create the environment
            var environment = document.createElement('p');
            environment.textContent = 'Environment: ' + data.cards[i].environment;
            card.appendChild(environment);

            // Add the card to the grid container
            gridContainer.appendChild(card);
        }
    }

        // Get the panel element
        var panel2 = document.getElementById('panel2');

        // Get the card container
        var gridContainer = panel2.getElementsByClassName('grid-container')[0];
    
        // For each control card in the data
        for (var i = 0; i < data.cards.length; i++) {
            if (data.cards[i].cardType === "control") {
                // Create the card
                var card = document.createElement('div');
                card.className = 'card control-card';
    
                // Create the icon
                var icon = document.createElement('img');
                icon.src = data.cards[i].iconPath;
                icon.alt = 'Control Icon';
                card.appendChild(icon);
    
                // Create the display name
                var name = document.createElement('h2');
                name.textContent = data.cards[i].displayValue;
                card.appendChild(name);
    
                // Create the control description
                var description = document.createElement('p');
                description.textContent = 'Description: ' + data.cards[i].controlDescription;
                card.appendChild(description);
    
                // Create the control category
                var category = document.createElement('p');
                category.textContent = 'Control Category: ' + data.cards[i].controlCategory;
                card.appendChild(category);
    
                // Create the control type
                var type = document.createElement('p');
                type.textContent = 'Control Type: ' + data.cards[i].controlType;
                card.appendChild(type);
    
                // Add more data as per your needs...
    
                // Add the card to the grid container
                gridContainer.appendChild(card);
            }
        }

            // Get the panel element
    var panel3 = document.getElementById('panel3');

    // Get the card container
    var gridContainer = panel3.getElementsByClassName('grid-container')[0];

    // For each technique card in the data
    for (var i = 0; i < data.cards.length; i++) {
        if (data.cards[i].cardType === "technique") {
            // Create the card
            var card = document.createElement('div');
            card.className = 'card technique-card';

            // Create the icon
            var icon = document.createElement('img');
            icon.src = data.cards[i].iconPath;
            icon.alt = 'Technique Icon';
            card.appendChild(icon);

            // Create the display name
            var name = document.createElement('h2');
            name.textContent = data.cards[i].displayValue;
            card.appendChild(name);

            // Create the technique ID
            var id = document.createElement('p');
            id.textContent = 'Technique ID: ' + data.cards[i].techniqueID;
            card.appendChild(id);

            // Create the technique name
            var techniqueName = document.createElement('p');
            techniqueName.textContent = 'Technique Name: ' + data.cards[i].techniqueName;
            card.appendChild(techniqueName);

            // Create the tactic for the technique
            var tactic = document.createElement('p');
            tactic.textContent = 'Tactic: ' + data.cards[i].tactic;
            card.appendChild(tactic);

            // Add the card to the grid container
            gridContainer.appendChild(card);
        }
    }
})
.catch(error => console.error('Error:', error));

