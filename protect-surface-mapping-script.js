// Mapping for asset categories
const categoryMapping = {
    "device": 0,
    "network": 1,
    "application": 2,
    "data": 3,
    "user": 4
};

// Function to handle JSON data
function handleJSONData(json) {
    let data = JSON.parse(json);
    createAssetCards(data.assets);
    createControlCards(data.controls);
    createTechniqueCards(data.techniques);
}

// Function to create asset cards
function createAssetCards(assets) {
    assets.forEach(asset => {
        let cell = document.querySelector(`.asset-${asset.environment}-${categoryMapping[asset.assetCategory]}`);
        if (!cell) {
            console.log('Could not find cell:', `.asset-${asset.environment}-${categoryMapping[asset.assetCategory]}`);
            return;
        }
        let card = document.createElement('div');
        card.className = 'card asset';
        card.innerHTML = `
            <img src="${asset.icon}" alt="${asset.type}">
            <p>${asset.value}</p>
        `;
        cell.appendChild(card);
    });
}

// Function to create control cards
function createControlCards(controls) {
    controls.forEach(control => {
        let cell = document.querySelector(`.control-${control.function}-${categoryMapping[control.assetCategory]}`);
        if (!cell) {
            console.log('Could not find cell:', `.control-${control.function}-${categoryMapping[control.assetCategory]}`);
            return;
        }
        let card = document.createElement('div');
        card.className = 'card control';
        card.innerHTML = `
            <img src="${control.icon}" alt="${control.type}">
            <p>${control.value}</p>
        `;
        cell.appendChild(card);
    });
}

// Function to create technique cards
function createTechniqueCards(techniques) {
    techniques.forEach(technique => {
        let cell = document.querySelector(`.technique-${technique.tactic}-${categoryMapping[technique.assetCategory]}`);
        if (!cell) {
            console.log('Could not find cell:', `.technique-${technique.tactic}-${categoryMapping[technique.assetCategory]}`);
            return;
        }
        let card = document.createElement('div');
        card.className = 'card technique';
        card.innerHTML = `
            <img src="${technique.icon}" alt="${technique.type}">
            <p>${technique.value}</p>
        `;
        cell.appendChild(card);
    });
}

// Function to load JSON data from a URL
function loadJSONfromURL(callback) {   
    let xobj = new XMLHttpRequest();
    let url = document.getElementById('json-input-url') ? document.getElementById('json-input-url').value : '';
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

// Function to load JSON data from a file
function loadJSONfromFile(callback) {
    let file = document.getElementById('json-input-file') ? document.getElementById('json-input-file').files[0] : null;
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            callback(e.target.result);
        };
        reader.readAsText(file);
    }
}

window.onload = function() {
    const formURL = document.getElementById('json-form-url');
    const formFile = document.getElementById('json-form-file');

    if(formURL) {
        formURL.addEventListener('submit', function(e) {
            e.preventDefault();
            loadJSONfromURL(handleJSONData);
        });
    } else {
        console.log("'json-form-url' element not found.");
    }

    if(formFile) {
        formFile.addEventListener('submit', function(e) {
            e.preventDefault();
            loadJSONfromFile(handleJSONData);
        });
    } else {
        console.log("'json-form-file' element not found.");
    }
};
