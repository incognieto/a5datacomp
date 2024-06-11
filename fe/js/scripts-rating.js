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
  const enterData = await fetchData('../data/EnterShop.json');
  const agresData = await fetchData('../data/AgresShop.json');
  const imbaData = await fetchData('../data/ImbaPCShop.json');
  const pcrakitanData = await fetchData('../data/PCRakitanShop.json');
  const rakitanData = await fetchData('../data/RakitanOfficialShop.json');
  const itshopData = await fetchData('../data/ITShop.json');
  
  return {
    'Toko Expert': {
      intel: getAverageRating(expertData["Prosesor Intel"]),
      amd: getAverageRating(expertData["Prosesor AMD"]),
      nvidia: getAverageRating(expertData["VGA GeForce"]),
      radeon: getAverageRating(expertData["VGA Radeon"]),
      moboIntel: getAverageRating(expertData["Motherboard Intel"]),
      moboAmd: getAverageRating(expertData["Motherboard AMD"]),
      ram: getAverageRating(expertData["RAM"]),
      ssd: getAverageRating(expertData["SSD"]),
      hdd: getAverageRating(expertData["HDD"])
    },
    'Toko Jaya': {
      intel: getAverageRating(jayaData["Prosesor Intel"]),
      amd: getAverageRating(jayaData["Prosesor AMD"]),
      nvidia: getAverageRating(jayaData["VGA GeForce"]),
      radeon: getAverageRating(jayaData["VGA Radeon"]),
      moboIntel: getAverageRating(jayaData["Motherboard Intel"]),
      moboAmd: getAverageRating(jayaData["Motherboard AMD"]),
      ram: getAverageRating(jayaData["RAM"]),
      ssd: getAverageRating(jayaData["SSD"]),
      hdd: getAverageRating(jayaData["HDD"])
    },
    'BZones': {
      intel: getAverageRating(bzonesData["Prosesor Intel"]),
      amd: getAverageRating(bzonesData["Prosesor AMD"]),
      nvidia: getAverageRating(bzonesData["VGA GeForce"]),
      radeon: getAverageRating(bzonesData["VGA Radeon"]),
      moboIntel: getAverageRating(bzonesData["Motherboard Intel"]),
      moboAmd: getAverageRating(bzonesData["Motherboard AMD"]),
      ram: getAverageRating(bzonesData["RAM"]),
      ssd: getAverageRating(bzonesData["SSD"]),
      hdd: getAverageRating(bzonesData["HDD"])
    },
    'Enter': {
      intel: getAverageRating(enterData["Prosesor Intel"]),
      amd: getAverageRating(enterData["Prosesor AMD"]),
      nvidia: getAverageRating(enterData["VGA GeForce"]),
      radeon: getAverageRating(enterData["VGA Radeon"]),
      moboIntel: getAverageRating(enterData["Motherboard Intel"]),
      moboAmd: getAverageRating(enterData["Motherboard AMD"]),
      ram: getAverageRating(enterData["RAM"]),
      ssd: getAverageRating(enterData["SSD"]),
      hdd: getAverageRating(enterData["HDD"])
    },
    'Agres': {
      intel: getAverageRating(agresData["Prosesor Intel"]),
      amd: getAverageRating(agresData["Prosesor AMD"]),
      nvidia: getAverageRating(agresData["VGA GeForce"]),
      radeon: getAverageRating(agresData["VGA Radeon"]),
      moboIntel: getAverageRating(agresData["Motherboard Intel"]),
      moboAmd: getAverageRating(agresData["Motherboard AMD"]),
      ram: getAverageRating(agresData["RAM"]),
      ssd: getAverageRating(agresData["SSD"]),

    },
    'Imba': {
      intel: getAverageRating(imbaData["Prosesor Intel"]),
      amd: getAverageRating(imbaData["Prosesor AMD"]),
      nvidia: getAverageRating(imbaData["VGA GeForce"]),
      radeon: getAverageRating(imbaData["VGA Radeon"]),
      moboIntel: getAverageRating(imbaData["Motherboard Intel"]),
      moboAmd: getAverageRating(imbaData["Motherboard AMD"]),
      ram: getAverageRating(imbaData["RAM"]),
      ssd: getAverageRating(imbaData["SSD"]),
      hdd: getAverageRating(imbaData["HDD"])
    },
    'PC Rakitan': {
      intel: getAverageRating(pcrakitanData["Prosesor Intel"]),
      amd: getAverageRating(pcrakitanData["Prosesor AMD"]),
      nvidia: getAverageRating(pcrakitanData["VGA GeForce"]),
      radeon: getAverageRating(pcrakitanData["VGA Radeon"]),
      moboIntel: getAverageRating(pcrakitanData["Motherboard Intel"]),
      moboAmd: getAverageRating(pcrakitanData["Motherboard AMD"]),
      ram: getAverageRating(pcrakitanData["RAM"]),
      ssd: getAverageRating(pcrakitanData["SSD"]),
      hdd: getAverageRating(pcrakitanData["HDD"])
    },
    'Rakitan Official': {
      intel: getAverageRating(rakitanData["Prosesor Intel"]),
      amd: getAverageRating(rakitanData["Prosesor AMD"]),
      nvidia: getAverageRating(rakitanData["VGA GeForce"]),
      radeon: getAverageRating(rakitanData["VGA Radeon"]),
      moboIntel: getAverageRating(rakitanData["Motherboard Intel"]),
      moboAmd: getAverageRating(rakitanData["Motherboard AMD"]),
      ram: getAverageRating(rakitanData["RAM"]),
      ssd: getAverageRating(rakitanData["SSD"]),
      hdd: getAverageRating(rakitanData["HDD"])
    },
    'IT Shop': {
      intel: getAverageRating(itshopData["Prosesor Intel"]),
      amd: getAverageRating(itshopData["Prosesor AMD"]),
      nvidia: getAverageRating(itshopData["VGA GeForce"]),
      radeon: getAverageRating(itshopData["VGA Radeon"]),
      moboIntel: getAverageRating(itshopData["Motherboard Intel"]),
      moboAmd: getAverageRating(itshopData["Motherboard AMD"]),
      ram: getAverageRating(itshopData["RAM"]),
      ssd: getAverageRating(itshopData["SSD"]),
      hdd: getAverageRating(itshopData["HDD"])
    }
  };
}
  
    // Fungsi untuk memperbarui grafik
    async function updateCharts() {
      const data = await getData();

      // Shop checkboxes
      const tokoExpertCheckbox = document.getElementById('toko-expert').checked;
      const tokoJayaCheckbox = document.getElementById('toko-jaya').checked;
      const bZonesCheckbox = document.getElementById('bzones').checked;
      const enterCheckbox = document.getElementById('enter').checked;
      const agresCheckbox = document.getElementById('agres').checked;
      const imbaCheckbox = document.getElementById('imba').checked;
      const pcrakitanCheckbox = document.getElementById('pcrakitan').checked;
      const rakitanCheckbox = document.getElementById('rakitanofficial').checked;
      const itshopCheckbox = document.getElementById('itshop').checked;

      // Component checkboxes
      const intelCheckbox = document.getElementById('intel-checkbox').checked;
      const amdCheckbox = document.getElementById('amd-checkbox').checked;
      const nvidiaCheckbox = document.getElementById('nvidia-checkbox').checked;
      const radeonCheckbox = document.getElementById('radeon-checkbox').checked;
      const moboIntelCheckbox = document.getElementById('moboIntel-checkbox').checked;
      const moboAmdCheckbox = document.getElementById('moboAmd-checkbox').checked;
      const ramCheckbox = document.getElementById('ram-checkbox').checked;
      const ssdCheckbox = document.getElementById('ssd-checkbox').checked;
      const hddCheckbox = document.getElementById('hdd-checkbox').checked;

      const labels = [];
      const values = {
        intel: [],
        amd: [],
        nvidia: [],
        radeon: [],
        moboIntel: [],
        moboAmd: [],
        ram: [],
        ssd: [],
        hdd: []
      };

      if (tokoExpertCheckbox) {
        labels.push('Toko Expert');
        if (intelCheckbox) values.intel.push(data['Toko Expert'].intel);
        if (amdCheckbox) values.amd.push(data['Toko Expert'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Toko Expert'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Toko Expert'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Toko Expert'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Toko Expert'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Toko Expert'].ram);
        if (ssdCheckbox) values.ssd.push(data['Toko Expert'].ssd);
        if (hddCheckbox) values.hdd.push(data['Toko Expert'].hdd);
      }
      if (tokoJayaCheckbox) {
        labels.push('Toko Jaya');
        if (intelCheckbox) values.intel.push(data['Toko Jaya'].intel);
        if (amdCheckbox) values.amd.push(data['Toko Jaya'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Toko Jaya'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Toko Jaya'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Toko Jaya'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Toko Jaya'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Toko Jaya'].ram);
        if (ssdCheckbox) values.ssd.push(data['Toko Jaya'].ssd);
        if (hddCheckbox) values.hdd.push(data['Toko Jaya'].hdd);
      }
      if (bZonesCheckbox) {
        labels.push('BZones');
        if (intelCheckbox) values.intel.push(data['BZones'].intel);
        if (amdCheckbox) values.amd.push(data['BZones'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['BZones'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['BZones'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['BZones'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['BZones'].moboAmd);
        if (ramCheckbox) values.ram.push(data['BZones'].ram);
        if (ssdCheckbox) values.ssd.push(data['BZones'].ssd);
        if (hddCheckbox) values.hdd.push(data['BZones'].hdd);
      }
      if (enterCheckbox) {
        labels.push('Enter');
        if (intelCheckbox) values.intel.push(data['Enter'].intel);
        if (amdCheckbox) values.amd.push(data['Enter'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Enter'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Enter'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Enter'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Enter'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Enter'].ram);
        if (ssdCheckbox) values.ssd.push(data['Enter'].ssd);
        if (hddCheckbox) values.hdd.push(data['Enter'].hdd);
      }
      if (agresCheckbox) {
        labels.push('Agres');
        if (intelCheckbox) values.intel.push(data['Agres'].intel);
        if (amdCheckbox) values.amd.push(data['Agres'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Agres'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Agres'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Agres'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Agres'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Agres'].ram);
        if (ssdCheckbox) values.ssd.push(data['Agres'].ssd);
      }
      if (imbaCheckbox) {
        labels.push('Imba');
        if (intelCheckbox) values.intel.push(data['Imba'].intel);
        if (amdCheckbox) values.amd.push(data['Imba'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Imba'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Imba'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Imba'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Imba'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Imba'].ram);
        if (ssdCheckbox) values.ssd.push(data['Imba'].ssd);
        if (hddCheckbox) values.hdd.push(data['Imba'].hdd);
      }
      if (pcrakitanCheckbox) {
        labels.push('PC Rakitan');
        if (intelCheckbox) values.intel.push(data['PC Rakitan'].intel);
        if (amdCheckbox) values.amd.push(data['PC Rakitan'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['PC Rakitan'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['PC Rakitan'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['PC Rakitan'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['PC Rakitan'].moboAmd);
        if (ramCheckbox) values.ram.push(data['PC Rakitan'].ram);
        if (ssdCheckbox) values.ssd.push(data['PC Rakitan'].ssd);
        if (hddCheckbox) values.hdd.push(data['PC Rakitan'].hdd);
      }
      if (rakitanCheckbox) {
        labels.push('Rakitan Official');
        if (intelCheckbox) values.intel.push(data['Rakitan Official'].intel);
        if (amdCheckbox) values.amd.push(data['Rakitan Official'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['Rakitan Official'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['Rakitan Official'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['Rakitan Official'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['Rakitan Official'].moboAmd);
        if (ramCheckbox) values.ram.push(data['Rakitan Official'].ram);
        if (ssdCheckbox) values.ssd.push(data['Rakitan Official'].ssd);
        if (hddCheckbox) values.hdd.push(data['Rakitan Official'].hdd);
      }
      if (itshopCheckbox) {
        labels.push('IT Shop');
        if (intelCheckbox) values.intel.push(data['IT Shop'].intel);
        if (amdCheckbox) values.amd.push(data['IT Shop'].amd);
        if (nvidiaCheckbox) values.nvidia.push(data['IT Shop'].nvidia);
        if (radeonCheckbox) values.radeon.push(data['IT Shop'].radeon);
        if (moboIntelCheckbox) values.moboIntel.push(data['IT Shop'].moboIntel);
        if (moboAmdCheckbox) values.moboAmd.push(data['IT Shop'].moboAmd);
        if (ramCheckbox) values.ram.push(data['IT Shop'].ram);
        if (ssdCheckbox) values.ssd.push(data['IT Shop'].ssd);
        if (hddCheckbox) values.hdd.push(data['IT Shop'].hdd);
      }

      // Update bar chart
      Plotly.newPlot('bar-chart-container', [
        { x: labels, y: values.intel, type: 'bar', name: 'Intel' },
        { x: labels, y: values.amd, type: 'bar', name: 'AMD' },
        { x: labels, y: values.nvidia, type: 'bar', name: 'NVIDIA' },
        { x: labels, y: values.radeon, type: 'bar', name: 'Radeon' },
        { x: labels, y: values.moboIntel, type: 'bar', name: 'Motherboard Intel' },
        { x: labels, y: values.moboAmd, type: 'bar', name: 'Motherboard AMD' },
        { x: labels, y: values.ram, type: 'bar', name: 'RAM' },
        { x: labels, y: values.ssd, type: 'bar', name: 'SSD' },
        { x: labels, y: values.hdd, type: 'bar', name: 'HDD' }
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
      if (moboIntelCheckbox) {
        pieLabels.push('Motherboard Intel');
        pieValues.push(values.moboIntel.reduce((a, b) => a + b, 0));
      }
      if (moboAmdCheckbox) {
        pieLabels.push('Motherboard AMD');
        pieValues.push(values.moboAmd.reduce((a, b) => a + b, 0));
      }
      if (ramCheckbox) {
        pieLabels.push('RAM');
        pieValues.push(values.ram.reduce((a, b) => a + b, 0));
      }
      if (ssdCheckbox) {
        pieLabels.push('SSD');
        pieValues.push(values.ssd.reduce((a, b) => a + b, 0));
      }
      if (hddCheckbox) {
        pieLabels.push('HDD');
        pieValues.push(values.hdd.reduce((a, b) => a + b, 0));
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
        { x: labels, y: values.radeon, type: 'scatter', mode: 'lines+markers', name: 'Radeon' },
        { x: labels, y: values.moboIntel, type: 'scatter', mode: 'lines+markers', name: 'Motherboard Intel' },
        { x: labels, y: values.moboAmd, type: 'scatter', mode: 'lines+markers', name: 'Motherboard AMD' },
        { x: labels, y: values.ram, type: 'scatter', mode: 'lines+markers', name: 'RAM' },
        { x: labels, y: values.ssd, type: 'scatter', mode: 'lines+markers', name: 'SSD' },
        { x: labels, y: values.hdd, type: 'scatter', mode: 'lines+markers', name: 'HDD' }
      ]);

      // Update scatter chart
      Plotly.newPlot('scatter-chart-container', [
        { x: labels, y: values.intel, type: 'scatter', mode: 'markers', name: 'Intel' },
        { x: labels, y: values.amd, type: 'scatter', mode: 'markers', name: 'AMD' },
        { x: labels, y: values.nvidia, type: 'scatter', mode: 'markers', name: 'NVIDIA' },
        { x: labels, y: values.radeon, type: 'scatter', mode: 'markers', name: 'Radeon' },
        { x: labels, y: values.moboIntel, type: 'scatter', mode: 'markers', name: 'Motherboard Intel' },
        { x: labels, y: values.moboAmd, type: 'scatter', mode: 'markers', name: 'Motherboard AMD' },
        { x: labels, y: values.ram, type: 'scatter', mode: 'markers', name: 'RAM' },
        { x: labels, y: values.ssd, type: 'scatter', mode: 'markers', name: 'SSD'},
        { x: labels, y: values.hdd, type: 'scatter', mode: 'markers', name: 'HDD'}
      ]);
    }

    // Fungsi untuk memperbarui visibilitas chart
    function updateChartVisibility(chartId) {
      const chart = document.getElementById(chartId);
      chart.style.display = chart.style.display === 'block' ? 'none' : 'block';
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