    // Lokasi data
    // ../data/BZonesShop.json
    // ../data/JayaPCShop.json
    // ../data/ExpertShop.json

    // const files = ['BZonesShop.json', 'JayaPCShop.json', 'ExpertShop']; // Tambahkan nama file JSON lainnya di sini
    const categoryColors = {
        "Prosesor Intel": 'blue',
        "Prosesor AMD": 'red',
        "VGA GeForce": 'green',
        "VGA Radeon": 'orange',
        "Motherboard Intel": 'darkblue',
        "Motherboard AMD": 'darkred',
        "SSD": 'purple',
        "HDD": 'pink'
    };

    async function fetchData(file) {
        const response = await fetch(file);
        return await response.json();
    }

    function countProducts(data) {
        const counts = {};
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                counts[category] = data[category].length;
            }
        }
        return counts;
    }

    async function getData() {
        const expertData = await fetchData('../data/ExpertShop.json');
        const jayaData = await fetchData('../data/JayaPCShop.json');
        const bzonesData = await fetchData('../data/BZonesShop.json');
        
        return {
            'Toko Expert': countProducts(expertData),
            'Toko Jaya': countProducts(jayaData),
            'BZones': countProducts(bzonesData)
        };
    }

    async function updateCharts() {
        const data = await getData();

        const tokoExpertCheckbox = document.getElementById('toko-expert').checked;
        const tokoJayaCheckbox = document.getElementById('toko-jaya').checked;
        const bZonesCheckbox = document.getElementById('bzones').checked;
        const intelCheckbox = document.getElementById('intel-checkbox').checked;
        const amdCheckbox = document.getElementById('amd-checkbox').checked;
        const nvidiaCheckbox = document.getElementById('nvidia-checkbox').checked;
        const radeonCheckbox = document.getElementById('radeon-checkbox').checked;
        const mbIntelCheckbox = document.getElementById('mb-intel-checkbox').checked;
        const mbAmdCheckbox = document.getElementById('mb-amd-checkbox').checked;
        const ssdCheckbox = document.getElementById('ssd-checkbox').checked;
        const hddCheckbox = document.getElementById('hdd-checkbox').checked;

        const labels = [];
        const values = {
            "Prosesor Intel": [],
            "Prosesor AMD": [],
            "VGA GeForce": [],
            "VGA Radeon": [],
            "Motherboard Intel": [],
            "Motherboard AMD": [],
            "SSD": [],
            "HDD": []
        };

        if (tokoExpertCheckbox) {
            labels.push('Toko Expert');
            if (intelCheckbox) values["Prosesor Intel"].push(data['Toko Expert']["Prosesor Intel"] || 0);
            if (amdCheckbox) values["Prosesor AMD"].push(data['Toko Expert']["Prosesor AMD"] || 0);
            if (nvidiaCheckbox) values["VGA GeForce"].push(data['Toko Expert']["VGA GeForce"] || 0);
            if (radeonCheckbox) values["VGA Radeon"].push(data['Toko Expert']["VGA Radeon"] || 0);
            if (mbIntelCheckbox) values["Motherboard Intel"].push(data['Toko Expert']["Motherboard Intel"] || 0);
            if (mbAmdCheckbox) values["Motherboard AMD"].push(data['Toko Expert']["Motherboard AMD"] || 0);
            if (ssdCheckbox) values["SSD"].push(data['Toko Expert']["SSD"] || 0);
            if (hddCheckbox) values["HDD"].push(data['Toko Expert']["HDD"] || 0);
        }
        if (tokoJayaCheckbox) {
            labels.push('Toko Jaya');
            if (intelCheckbox) values["Prosesor Intel"].push(data['Toko Jaya']["Prosesor Intel"] || 0);
            if (amdCheckbox) values["Prosesor AMD"].push(data['Toko Jaya']["Prosesor AMD"] || 0);
            if (nvidiaCheckbox) values["VGA GeForce"].push(data['Toko Jaya']["VGA GeForce"] || 0);
            if (radeonCheckbox) values["VGA Radeon"].push(data['Toko Jaya']["VGA Radeon"] || 0);
            if (mbIntelCheckbox) values["Motherboard Intel"].push(data['Toko Jaya']["Motherboard Intel"] || 0);
            if (mbAmdCheckbox) values["Motherboard AMD"].push(data['Toko Jaya']["Motherboard AMD"] || 0);
            if (ssdCheckbox) values["SSD"].push(data['Toko Jaya']["SSD"] || 0);
            if (hddCheckbox) values["HDD"].push(data['Toko Jaya']["HDD"] || 0);
        }
        if (bZonesCheckbox) {
            labels.push('BZones');
            if (intelCheckbox) values["Prosesor Intel"].push(data['BZones']["Prosesor Intel"] || 0);
            if (amdCheckbox) values["Prosesor AMD"].push(data['BZones']["Prosesor AMD"] || 0);
            if (nvidiaCheckbox) values["VGA GeForce"].push(data['BZones']["VGA GeForce"] || 0);
            if (radeonCheckbox) values["VGA Radeon"].push(data['BZones']["VGA Radeon"] || 0);
            if (mbIntelCheckbox) values["Motherboard Intel"].push(data['BZones']["Motherboard Intel"] || 0);
            if (mbAmdCheckbox) values["Motherboard AMD"].push(data['BZones']["Motherboard AMD"] || 0);
            if (ssdCheckbox) values["SSD"].push(data['BZones']["SSD"] || 0);
            if (hddCheckbox) values["HDD"].push(data['BZones']["HDD"] || 0);
        }

        // Update bar chart
        Plotly.newPlot('chart-container', [
            { x: labels, y: values["Prosesor Intel"], type: 'bar', name: 'Intel', marker: { color: categoryColors["Prosesor Intel"] } },
            { x: labels, y: values["Prosesor AMD"], type: 'bar', name: 'AMD', marker: { color: categoryColors["Prosesor AMD"] } },
            { x: labels, y: values["VGA GeForce"], type: 'bar', name: 'NVIDIA', marker: { color: categoryColors["VGA GeForce"] } },
            { x: labels, y: values["VGA Radeon"], type: 'bar', name: 'Radeon', marker: { color: categoryColors["VGA Radeon"] } },
            { x: labels, y: values["Motherboard Intel"], type: 'bar', name: 'Motherboard Intel', marker: { color: categoryColors["Motherboard Intel"] } },
            { x: labels, y: values["Motherboard AMD"], type: 'bar', name: 'Motherboard AMD', marker: { color: categoryColors["Motherboard AMD"] } },
            { x: labels, y: values["SSD"], type: 'bar', name: 'SSD', marker: { color: categoryColors["SSD"] } },
            { x: labels, y: values["HDD"], type: 'bar', name: 'HDD', marker: { color: categoryColors["HDD"] } }
        ]);

        // Update pie chart
        const pieLabels = [];
        const pieValues = [];
        if (intelCheckbox) {
            pieLabels.push('Intel');
            pieValues.push(values["Prosesor Intel"].reduce((a, b) => a + b, 0));
        }
        if (amdCheckbox) {
            pieLabels.push('AMD');
            pieValues.push(values["Prosesor AMD"].reduce((a, b) => a + b, 0));
        }
        if (nvidiaCheckbox) {
            pieLabels.push('NVIDIA');
            pieValues.push(values["VGA GeForce"].reduce((a, b) => a + b, 0));
        }
        if (radeonCheckbox) {
            pieLabels.push('Radeon');
            pieValues.push(values["VGA Radeon"].reduce((a, b) => a + b, 0));
        }
        if (mbIntelCheckbox) {
            pieLabels.push('Motherboard Intel');
            pieValues.push(values["Motherboard Intel"].reduce((a, b) => a + b, 0));
        }
        if (mbAmdCheckbox) {
            pieLabels.push('Motherboard AMD');
            pieValues.push(values["Motherboard AMD"].reduce((a, b) => a + b, 0));
        }
        if (ssdCheckbox) {
            pieLabels.push('SSD');
            pieValues.push(values["SSD"].reduce((a, b) => a + b, 0));
        }
        if (hddCheckbox) {
            pieLabels.push('HDD');
            pieValues.push(values["HDD"].reduce((a, b) => a + b, 0));
        }

        Plotly.newPlot('pie-chart-container', [{
            labels: pieLabels,
            values: pieValues,
            type: 'pie'
        }]);

        // Update line chart
        Plotly.newPlot('line-chart-container', [
            { x: labels, y: values["Prosesor Intel"], type: 'scatter', mode: 'lines+markers', name: 'Intel' },
            { x: labels, y: values["Prosesor AMD"], type: 'scatter', mode: 'lines+markers', name: 'AMD' },
            { x: labels, y: values["VGA GeForce"], type: 'scatter', mode: 'lines+markers', name: 'NVIDIA' },
            { x: labels, y: values["VGA Radeon"], type: 'scatter', mode: 'lines+markers', name: 'Radeon' },
            { x: labels, y: values["Motherboard Intel"], type: 'scatter', mode: 'lines+markers', name: 'Motherboard Intel' },
            { x: labels, y: values["Motherboard AMD"], type: 'scatter', mode: 'lines+markers', name: 'Motherboard AMD' },
            { x: labels, y: values["SSD"], type: 'scatter', mode: 'lines+markers', name: 'SSD' },
            { x: labels, y: values["HDD"], type: 'scatter', mode: 'lines+markers', name: 'HDD' }
        ]);

        // Update scatter chart
        Plotly.newPlot('scatter-chart-container', [
            { x: labels, y: values["Prosesor Intel"], type: 'scatter', mode: 'markers', name: 'Intel' },
            { x: labels, y: values["Prosesor AMD"], type: 'scatter', mode: 'markers', name: 'AMD' },
            { x: labels, y: values["VGA GeForce"], type: 'scatter', mode: 'markers', name: 'NVIDIA' },
            { x: labels, y: values["VGA Radeon"], type: 'scatter', mode: 'markers', name: 'Radeon' },
            { x: labels, y: values["Motherboard Intel"], type: 'scatter', mode: 'markers', name: 'Motherboard Intel' },
            { x: labels, y: values["Motherboard AMD"], type: 'scatter', mode: 'markers', name: 'Motherboard AMD' },
            { x: labels, y: values["SSD"], type: 'scatter', mode: 'markers', name: 'SSD' },
            { x: labels, y: values["HDD"], type: 'scatter', mode: 'markers', name: 'HDD' }
        ]);
    }

    function toggleChart(chartId) {
        const charts = document.getElementsByClassName('chart-container');
        for (let i = 0; i < charts.length; i++) {
            charts[i].style.display = 'none';
        }
        document.getElementById(chartId).style.display = 'block';
    }

    // Inisialisasi
    updateCharts();