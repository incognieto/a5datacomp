// Fungsi untuk mengekstrak rating dari data JSON baru
function getAverageRating(data) {
  let totalRating = 0;
  let count = 0;
  for (const item of data) {
    if (item.rating && item.rating !== 'N/A') {
      const rating = parseFloat(item.rating);
      if (!isNaN(rating)) {
        totalRating += rating;
        count++;
      }
    }
  }
  return count > 0 ? totalRating / count : 0;
}
  
// Fungsi untuk membaca file JSON dan mendapatkan data
async function getData() {
  const fetchData = async (file) => {
    const response = await fetch(file);
    return await response.json();
  };
  
  const expertData = await fetchData('../data/ExpertShop.json');
  const jayaData = await fetchData('../data/JayaPCShop.json');
  const bzonesData = await fetchData('../data/BZonesShop.json');
  
  return {
    'Toko Expert': {
      intel: getAverageRating(expertData["Prosesor Intel"]),
      amd: getAverageRating(expertData["Prosesor AMD"]),
      nvidia: getAverageRating(expertData["VGA GeForce"]),
      radeon: getAverageRating(expertData["VGA Radeon"])
    },
    'Toko Jaya': {
      intel: getAverageRating(jayaData["Prosesor Intel"]),
      amd: getAverageRating(jayaData["Prosesor AMD"]),
      nvidia: getAverageRating(jayaData["VGA GeForce"]),
      radeon: getAverageRating(jayaData["VGA Radeon"])
    },
    'BZones': {
      intel: getAverageRating(bzonesData["Prosesor Intel"]),
      amd: getAverageRating(bzonesData["Prosesor AMD"]),
      nvidia: getAverageRating(bzonesData["VGA GeForce"]),
      radeon: getAverageRating(bzonesData["VGA Radeon"])
    }
  };
}
  
    // Fungsi untuk memperbarui grafik
    async function updateCharts() {
      const data = await getData();

      const tokoEnterCheckbox = document.getElementById('toko-enter').checked;
      const tokoExpertCheckbox = document.getElementById('toko-expert').checked;
      const tokoJayaCheckbox = document.getElementById('toko-jaya').checked;
      const itShopCheckbox = document.getElementById('itshop').checked;
      const bZonesCheckbox = document.getElementById('bzones').checked;
      const intelCheckbox = document.getElementById('intel-checkbox').checked;
      const amdCheckbox = document.getElementById('amd-checkbox').checked;
      const nvidiaCheckbox = document.getElementById('nvidia-checkbox').checked;
      const radeonCheckbox = document.getElementById('radeon-checkbox').checked;

      const labels = [];
      const values = {
        intel: [],
        amd: [],
        nvidia: [],
        radeon: []
      };

      if (tokoExpertCheckbox) {
        labels.push('Toko Expert');
        if (intelCheckbox) values.intel.push(data['Toko Expert'].intel);
        if (amdCheckbox) values.amd.push(data['Toko Expert'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Toko Expert'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Toko Expert'].radeon);
      }
      if (tokoJayaCheckbox) {
        labels.push('Toko Jaya');
        if (intelCheckbox) values.intel.push(data['Toko Jaya'].intel);
        if (amdCheckbox) values.amd.push(data['Toko Jaya'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Toko Jaya'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Toko Jaya'].radeon);
      }
      if (bZonesCheckbox) {
        labels.push('BZones');
        if (intelCheckbox) values.intel.push(data['BZones'].intel);
        if (amdCheckbox) values.amd.push(data['BZones'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['BZones'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['BZones'].radeon);
      }

      // Update bar chart
      Plotly.newPlot('chart-container', [
        { x: labels, y: values.intel, type: 'bar', name: 'Intel' },
        { x: labels, y: values.amd, type: 'bar', name: 'AMD' },
        { x: labels, y: values.nvidia, type: 'bar', name: 'NVIDIA' },
        { x: labels, y: values.radeon, type: 'bar', name: 'Radeon' }
      ]);

      // Update pie chart
      const pieLabels = [];
      const pieValues = [];
      if (intelCheckbox) {
        pieLabels.push('Intel');
        pieValues.push(values.intel.reduce((a, b) => a + b, 0));
      }
      if (amdCheckbox) {
        pieLabels.push('AMD');
        pieValues.push(values.amd.reduce((a, b) => a + b, 0));
      }
      if (nvidiaCheckbox) {
        pieLabels.push('NVIDIA');
        pieValues.push(values.nvidia.reduce((a, b) => a + b, 0));
      }
      if (radeonCheckbox) {
        pieLabels.push('Radeon');
        pieValues.push(values.radeon.reduce((a, b) => a + b, 0));
      }

      Plotly.newPlot('pie-chart-container', [{
        labels: pieLabels,
        values: pieValues,
        type: 'pie'
      }]);

      // Update line chart
      Plotly.newPlot('line-chart-container', [
        { x: labels, y: values.intel, type: 'scatter', mode: 'lines+markers', name: 'Intel' },
        { x: labels, y: values.amd, type: 'scatter', mode: 'lines+markers', name: 'AMD' },
        { x: labels, y: values.nvidia, type: 'scatter', mode: 'lines+markers', name: 'NVIDIA' },
        { x: labels, y: values.radeon, type: 'scatter', mode: 'lines+markers', name: 'Radeon' }
      ]);

      // Update scatter chart
      Plotly.newPlot('scatter-chart-container', [
        { x: labels, y: values.intel, type: 'scatter', mode: 'markers', name: 'Intel' },
        { x: labels, y: values.amd, type: 'scatter', mode: 'markers', name: 'AMD' },
        { x: labels, y: values.nvidia, type: 'scatter', mode: 'markers', name: 'NVIDIA' },
        { x: labels, y: values.radeon, type: 'scatter', mode: 'markers', name: 'Radeon' }
      ]);
    }

    // Fungsi untuk toggle visibility dari chart
    function toggleChart(chartId) {
      const charts = document.getElementsByClassName('chart-container');
      for (let i = 0; i < charts.length; i++) {
        charts[i].style.display = 'none';
      }
      document.getElementById(chartId).style.display = 'block';
    }

    // Fungsi untuk menampilkan tanggal dan waktu saat ini
    function showDateTime() {
      const now = new Date();
      const datetimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      document.getElementById('datetime').textContent = datetimeString;
    }

    // Panggil fungsi-fungsi awal
    showDateTime();
    updateCharts();
    setInterval(showDateTime, 1000); // Update waktu setiap detik