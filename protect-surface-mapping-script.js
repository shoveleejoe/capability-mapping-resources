// Utility function to load JSON
function loadJSON(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      } else {
        console.error("Error loading JSON");
      }
    };
    xobj.send(null);
  }
  
  // Utility function to create a card
  function createCard(data, type) {
    var card = document.createElement('div');
    card.className = 'card';
    card.textContent = data.displayValue;
  
    // Set the card's grid row and column based on its data
    var row, column;
    if (type === 'asset') {
      row = data.environment;
      column = data.assetCategory;
    } else if (type === 'control') {
      row = data.controlFunction;
      column = data.assetCategory;
    } else if (type === 'technique') {
      row = data.techniqueTactic;
      column = data.assetCategory;
    }
    card.style.gridColumn = column;
    card.style.gridRow = row;
  
    return card;
  }
  
  // Event listener for JSON form submission
  document.getElementById('json-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('json-url').value;
    loadJSON(url, function(data) {
      // Clear any existing cards
      var panels = document.querySelectorAll('.panel');
      panels.forEach(function(panel) {
        while (panel.firstChild) {
          panel.removeChild(panel.firstChild);
        }
      });
  
      // Check if the data for assets, controls, and techniques are defined
      if(data.assets && Array.isArray(data.assets)) {
        data.assets.forEach(function(assetData) {
          var card = createCard(assetData, 'asset');
          document.getElementById('panel1').appendChild(card);
        });
      }
      if(data.controls && Array.isArray(data.controls)) {
        data.controls.forEach(function(controlData) {
          var card = createCard(controlData, 'control');
          document.getElementById('panel2').appendChild(card);
        });
      }
      if(data.techniques && Array.isArray(data.techniques)) {
        data.techniques.forEach(function(techniqueData) {
          var card = createCard(techniqueData, 'technique');
          document.getElementById('panel3').appendChild(card);
        });
      }
    });
  });
  