// Fungsi untuk mengekstrak jumlah terjual dari data JSON baru
function getTotalSold(data) {
  let totalSold = 0;
  for (const item of data) {
    if (item.sold && item.sold !== 'N/A' && item.sold !== 'Stok: Habis') {
      const soldCount = parseInt(item.sold.replace(/\D/g, ''));
      totalSold += isNaN(soldCount) ? 0 : soldCount;
    }
  }
  return totalSold;
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
  const imbaPCData = await fetchData('../data/ImbaPCShop.json');
  const agresData = await fetchData('../data/AgresShop.json');
  const itshop = await fetchData('../data/ITShop.json');
  const pcrakitanshop = await fetchData('../data/PCRakitanshop.json');
  const rakitanshop = await fetchData('../data/RakitanOfficialShop.json');
  
  return {
    'Toko Expert': {
      intel: getTotalSold(expertData["Prosesor Intel"]),
      amd: getTotalSold(expertData["Prosesor AMD"]),
      nvidia: getTotalSold(expertData["VGA GeForce"]),
      radeon: getTotalSold(expertData["VGA Radeon"]),
      moboIntel: getTotalSold(expertData["Motherboard Intel"]),
      moboAMD: getTotalSold(expertData["Motherboard AMD"]),
      ram: getTotalSold(expertData["RAM"]),
      ssd: getTotalSold(expertData["SSD"]),
      hdd: getTotalSold(expertData["HDD"])
    },
    'Toko Jaya': {
      intel: getTotalSold(jayaData["Prosesor Intel"]),
      amd: getTotalSold(jayaData["Prosesor AMD"]),
      nvidia: getTotalSold(jayaData["VGA GeForce"]),
      radeon: getTotalSold(jayaData["VGA Radeon"]),
      moboIntel: getTotalSold(jayaData["Motherboard Intel"]),
      moboAMD: getTotalSold(jayaData["Motherboard AMD"]),
      ram: getTotalSold(jayaData["RAM"]),
      ssd: getTotalSold(jayaData["SSD"]),
      hdd: getTotalSold(jayaData["HDD"])
    },
    'BZones': {
      intel: getTotalSold(bzonesData["Prosesor Intel"]),
      amd: getTotalSold(bzonesData["Prosesor AMD"]),
      nvidia: getTotalSold(bzonesData["VGA GeForce"]),
      radeon: getTotalSold(bzonesData["VGA Radeon"]),
      moboIntel: getTotalSold(bzonesData["Motherboard Intel"]),
      moboAMD: getTotalSold(bzonesData["Motherboard AMD"]),
      ram: getTotalSold(bzonesData["RAM"]),
      ssd: getTotalSold(bzonesData["SSD"])
    },
    'Enter Shop': {
      intel: getTotalSold(enterData["Prosesor Intel"]),
      amd: getTotalSold(enterData["Prosesor AMD"]),
      nvidia: getTotalSold(enterData["VGA GeForce"]),
      radeon: getTotalSold(enterData["VGA Radeon"]),
      moboIntel: getTotalSold(enterData["Motherboard Intel"]),
      moboAMD: getTotalSold(enterData["Motherboard AMD"]),
      ram: getTotalSold(enterData["RAM"]),
      ssd: getTotalSold(enterData["SSD"]),
      hdd: getTotalSold(enterData["HDD"])
    },
    'Imba PC': {
      intel: getTotalSold(imbaPCData["Prosesor Intel"]),
      amd: getTotalSold(imbaPCData["Prosesor AMD"]),
      nvidia: getTotalSold(imbaPCData["VGA GeForce"]),
      radeon: getTotalSold(imbaPCData["VGA Radeon"]),
      moboIntel: getTotalSold(imbaPCData["Motherboard Intel"]),
      moboAMD: getTotalSold(imbaPCData["Motherboard AMD"]),
      ram: getTotalSold(imbaPCData["RAM"]),
      ssd: getTotalSold(imbaPCData["SSD"]),
      hdd: getTotalSold(imbaPCData["HDD"])
    },
    'Agres Shop': {
      intel: getTotalSold(agresData["Prosesor Intel"]),
      amd: getTotalSold(agresData["Prosesor AMD"]),
      nvidia: getTotalSold(agresData["VGA GeForce"]),
      radeon: getTotalSold(agresData["VGA Radeon"]),
      moboIntel: getTotalSold(agresData["Motherboard Intel"]),
      moboAMD: getTotalSold(agresData["Motherboard AMD"]),
      ram: getTotalSold(agresData["RAM"]),
      ssd: getTotalSold(agresData["SSD"])
      // hdd: getTotalSold(agresData["HDD"])
    },
    'IT Shop': {
      intel: getTotalSold(itshop["Prosesor Intel"]),
      amd: getTotalSold(itshop["Prosesor AMD"]),
      nvidia: getTotalSold(itshop["VGA GeForce"]),
      radeon: getTotalSold(itshop["VGA Radeon"]),
      moboIntel: getTotalSold(itshop["Motherboard Intel"]),
      moboAMD: getTotalSold(itshop["Motherboard AMD"]),
      ram: getTotalSold(itshop["RAM"]),
      ssd: getTotalSold(itshop["SSD"]),
      hdd: getTotalSold(itshop["HDD"])
    },
    'PC Rakitan Shop': {
      intel: getTotalSold(pcrakitanshop["Prosesor Intel"]),
      amd: getTotalSold(pcrakitanshop["Prosesor AMD"]),
      nvidia: getTotalSold(pcrakitanshop["VGA GeForce"]),
      radeon: getTotalSold(pcrakitanshop["VGA Radeon"]),
      moboIntel: getTotalSold(pcrakitanshop["Motherboard Intel"]),
      moboAMD: getTotalSold(pcrakitanshop["Motherboard AMD"]),
      ram: getTotalSold(pcrakitanshop["RAM"]),
      ssd: getTotalSold(pcrakitanshop["SSD"]),
      hdd: getTotalSold(pcrakitanshop["HDD"])
    },
    'Rakitan Official Shop': {
      intel: getTotalSold(rakitanshop["Prosesor Intel"]),
      amd: getTotalSold(rakitanshop["Prosesor AMD"]),
      nvidia: getTotalSold(rakitanshop["VGA GeForce"]),
      radeon: getTotalSold(rakitanshop["VGA Radeon"]),
      moboIntel: getTotalSold(rakitanshop["Motherboard Intel"]),
      moboAMD: getTotalSold(rakitanshop["Motherboard AMD"]),
      ram: getTotalSold(rakitanshop["RAM"]),
      ssd: getTotalSold(rakitanshop["SSD"]),
      hdd: getTotalSold(rakitanshop["HDD"])
    }
  };
}
  
// Fungsi untuk memperbarui grafik dan tabel berdasarkan toko yang dipilih
async function updateCharts() {
  const data = await getData();
  const selectedStores = Array.from(document.querySelectorAll('#input-container input[type="checkbox"]:checked')).map(input => input.value);
    
  const isIntelChecked = document.getElementById('intel-checkbox').checked;
  const isAMDChecked = document.getElementById('amd-checkbox').checked;
  const isNvidiaChecked = document.getElementById('nvidia-checkbox').checked;
  const isRadeonChecked = document.getElementById('radeon-checkbox').checked;
  const isMoboIntelChecked = document.getElementById('moboIntel-checkbox').checked;
  const isMoboAMDChecked = document.getElementById('moboAMD-checkbox').checked;
  const isramChecked = document.getElementById('ram-checkbox').checked;
  const isssdChecked = document.getElementById('ssd-checkbox').checked;
  const ishddChecked = document.getElementById('hdd-checkbox').checked;
  
  const labels = [];
  const intelData = [];
  const amdData = [];
  const nvidiaData = [];
  const radeonData = [];
  const moboIntelData = [];
  const moboAMDData = [];
  const ramData = [];
  const ssdData = [];
  const hddData = [];
  
  selectedStores.forEach(store => {
    if (data[store]) {
      labels.push(store);
      if (isIntelChecked) intelData.push(data[store].intel);
      if (isAMDChecked) amdData.push(data[store].amd);
      if (isNvidiaChecked) nvidiaData.push(data[store].nvidia);
      if (isRadeonChecked) radeonData.push(data[store].radeon);
      if (isMoboIntelChecked) moboIntelData.push(data[store].moboIntel);
      if (isMoboAMDChecked) moboAMDData.push(data[store].moboAMD);
      if (isramChecked) ramData.push(data[store].ram);
      if (isssdChecked) ssdData.push(data[store].ssd);
      if (ishddChecked) hddData.push(data[store].hdd);
    }
  });
  
  // Bar Chart
  const barData = [];
  if (isIntelChecked) barData.push({
    x: labels,
    y: intelData,
    type: 'bar',
    name: 'Intel',
    marker: {
      color: 'rgba(54, 162, 235, 0.5)',
      line: {
        color: 'rgba(54, 162, 235, 1)',
        width: 2
      }
    }
  });
  
  if (isAMDChecked) barData.push({
    x: labels,
    y: amdData,
    type: 'bar',
    name: 'AMD',
    marker: {
      color: 'rgba(255, 99, 132, 0.5)',
      line: {
        color: 'rgba(255, 99, 132, 1)',
        width: 2
      }
    }
  });
  
  if (isNvidiaChecked) barData.push({
    x: labels,
    y: nvidiaData,
    type: 'bar',
    name: 'NVIDIA',
    marker: {
      color: 'rgba(75, 192, 192, 0.5)',
      line: {
        color: 'rgba(75, 192, 192, 1)',
        width: 2
      }
    }
  });
  
  if (isRadeonChecked) barData.push({
    x: labels,
    y: radeonData,
    type: 'bar',
    name: 'Radeon',
    marker: {
      color: 'rgba(255, 159, 64, 0.5)',
      line: {
        color: 'rgba(255, 159, 64, 1)',
        width: 2
      }
    }
  });

  if (isMoboIntelChecked) barData.push({
    x: labels,
    y: moboIntelData,
    type: 'bar',
    name: 'Mobo Intel',
    marker: {
      color: 'rgba(153, 102, 255, 0.5)',
      line: {
        color: 'rgba(153, 102, 255, 1)',
        width: 2
      }
    }
  });

  if (isMoboAMDChecked) barData.push({
    x: labels,
    y: moboAMDData,
    type: 'bar',
    name: 'Mobo AMD',
    marker: {
      color: 'rgba(255, 205, 86, 0.5)',
      line: {
        color: 'rgba(255, 205, 86, 1)',
        width: 2
      }
    }
  });

  if (isramChecked) barData.push({
    x: labels,
    y: ramData,
    type: 'bar',
    name: 'RAM',
    marker: {
      color: 'rgba(75, 192, 192, 0.5)',
      line: {
        color: 'rgba(75, 192, 192, 1)',
        width: 2
      }
    }
  });

  if (isssdChecked) barData.push({
    x: labels,
    y: ssdData,
    type: 'bar',
    name: 'SSD',
    marker: {
      color: 'rgba(255, 159, 64, 0.5)',
      line: {
        color: 'rgba(255, 159, 64, 1)',
        width: 2
      }
    }
  });

  if (ishddChecked) barData.push({
    x: labels,
    y: hddData,
    type: 'bar',
    name: 'HDD',
    marker: {
      color: 'rgba(153, 102, 255, 0.5)',
      line: {
        color: 'rgba(153, 102, 255, 1)',
        width: 2
      }
    }
  });
  
  const barLayout = {
    barmode: 'group',
    xaxis: {
      title: 'Nama Toko'
    },
    yaxis: {
      title: 'Jumlah Terjual',
      tickformat: ',d', // Format angka dengan koma ribuan
      rangemode: 'tozero' // Mulai dari sumbu Y dari nilai 0
    }
  };
  
  Plotly.newPlot('chart-container', barData, barLayout);
  
  // Pie Chart
  const pieValues = [];
  const pieLabels = [];
  const pieColors = [];
  
  if (isIntelChecked) {
    pieValues.push(intelData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('Intel');
    pieColors.push('rgba(54, 162, 235, 0.5)');
  }
  if (isAMDChecked) {
    pieValues.push(amdData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('AMD');
    pieColors.push('rgba(255, 99, 132, 0.5)');
  }
  if (isNvidiaChecked) {
    pieValues.push(nvidiaData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('NVIDIA');
    pieColors.push('rgba(75, 192, 192, 0.5)');
  }
  if (isRadeonChecked) {
    pieValues.push(radeonData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('Radeon');
    pieColors.push('rgba(255, 159, 64, 0.5)');
  }
  if (isMoboIntelChecked) {
    pieValues.push(moboIntelData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('Mobo Intel');
    pieColors.push('rgba(153, 102, 255, 0.5)');
  }
  if (isMoboAMDChecked) {
    pieValues.push(moboAMDData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('Mobo AMD');
    pieColors.push('rgba(255, 205, 86, 0.5)');
  }
  if (isramChecked) {
    pieValues.push(ramData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('RAM');
    pieColors.push('rgba(75, 192, 192, 0.5)');
  }
  if (isssdChecked) {
    pieValues.push(ssdData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('SSD');
    pieColors.push('rgba(255, 159, 64, 0.5)');
  }
  if (ishddChecked) {
    pieValues.push(hddData.reduce((acc, val) => acc + val, 0));
    pieLabels.push('HDD');
    pieColors.push('rgba(153, 102, 255, 0.5)');
  }

  const pieData = [{
    values: pieValues,
    labels: pieLabels,
    type: 'pie',
    marker: {
      colors: pieColors,
      line: {
        color: 'rgba(0, 0, 0, 1)',
        width: 2
      }
    }
  }];
  
  const pieLayout = {
    title: 'Total Penjualan Per Komponen'
  };
  
  Plotly.newPlot('pie-chart-container', pieData, pieLayout);
  
  // Line Chart
  const lineData = [];
  if (isIntelChecked) lineData.push({
    x: labels,
    y: intelData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Intel',
    line: {
      color: 'rgba(54, 162, 235, 1)'
    }
  });
  
  if (isAMDChecked) lineData.push({
    x: labels,
    y: amdData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'AMD',
    line: {
      color: 'rgba(255, 99, 132, 1)'
    }
  });
  
  if (isNvidiaChecked) lineData.push({
    x: labels,
    y: nvidiaData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'NVIDIA',
    line: {
      color: 'rgba(75, 192, 192, 1)'
    }
  });
  
  if (isRadeonChecked) lineData.push({
    x: labels,
    y: radeonData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Radeon',
    line: {
      color: 'rgba(255, 159, 64, 1)'
    }
  });

  if (isMoboIntelChecked) lineData.push({
    x: labels,
    y: moboIntelData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Mobo Intel',
    line: {
      color: 'rgba(153, 102, 255, 1)'
    }
  });

  if (isMoboAMDChecked) lineData.push({
    x: labels,
    y: moboAMDData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Mobo AMD',
    line: {
      color: 'rgba(255, 205, 86, 1)'
    }
  });

  if (isramChecked) lineData.push({
    x: labels,
    y: ramData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'RAM',
    line: {
      color: 'rgba(75, 192, 192, 1)'
    }
  });

  if (isssdChecked) lineData.push({
    x: labels,
    y: ssdData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'SSD',
    line: {
      color: 'rgba(255, 159, 64, 1)'
    }
  });

  if (ishddChecked) lineData.push({
    x: labels,
    y: hddData,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'HDD',
    line: {
      color: 'rgba(153, 102, 255, 1)'
    }
  });
  
  const lineLayout = {
    xaxis: {
      title: 'Nama Toko'
    },
    yaxis: {
      title: 'Jumlah Terjual',
      tickformat: ',d', // Format angka dengan koma ribuan
      rangemode: 'tozero' // Mulai dari sumbu Y dari nilai 0
    }
  };
  
  Plotly.newPlot('line-chart-container', lineData, lineLayout);
  
  // Scatter Chart
  const scatterData = [];
  if (isIntelChecked) scatterData.push({
    x: labels,
    y: intelData,
    type: 'scatter',
    mode: 'markers',
    name: 'Intel',
    marker: {
      color: 'rgba(54, 162, 235, 0.5)',
      line: {
        color: 'rgba(54, 162, 235, 1)',
        width: 2
      },
      size: 10
    }
  });
  
  if (isAMDChecked) scatterData.push({
    x: labels,
    y: amdData,
    type: 'scatter',
    mode: 'markers',
    name: 'AMD',
    marker: {
      color: 'rgba(255, 99, 132, 0.5)',
      line: {
        color: 'rgba(255, 99, 132, 1)',
        width: 2
      },
      size: 10
    }
  });
  
  if (isNvidiaChecked) scatterData.push({
    x: labels,
    y: nvidiaData,
    type: 'scatter',
    mode: 'markers',
    name: 'NVIDIA',
    marker: {
      color: 'rgba(75, 192, 192, 0.5)',
      line: {
        color: 'rgba(75, 192, 192, 1)',
        width: 2
      },
      size: 10
    }
  });
  
  if (isRadeonChecked) scatterData.push({
    x: labels,
    y: radeonData,
    type: 'scatter',
    mode: 'markers',
    name: 'Radeon',
    marker: {
      color: 'rgba(255, 159, 64, 0.5)',
      line: {
        color: 'rgba(255, 159, 64, 1)',
        width: 2
      },
      size: 10
    }
  });
  
  if (isMoboIntelChecked) scatterData.push({
    x: labels,
    y: moboIntelData,
    type: 'scatter',
    mode: 'markers',
    name: 'Mobo Intel',
    marker: {
      color: 'rgba(153, 102, 255, 0.5)',
      line: {
        color: 'rgba(153, 102, 255, 1)',
        width: 2
      },
      size: 10
    }
  });

  if (isMoboAMDChecked) scatterData.push({
    x: labels,
    y: moboAMDData,
    type: 'scatter',
    mode: 'markers',
    name: 'Mobo AMD',
    marker: {
      color: 'rgba(255, 205, 86, 0.5)',
      line: {
        color: 'rgba(255, 205, 86, 1)',
        width: 2
      },
      size: 10
    }
  });

  if (isramChecked) scatterData.push({
    x: labels,
    y: ramData,
    type: 'scatter',
    mode: 'markers',
    name: 'RAM',
    marker: {
      color: 'rgba(75, 192, 192, 0.5)',
      line: {
        color: 'rgba(75, 192, 192, 1)',
        width: 2
      },
      size: 10
    }
  });

  if (isssdChecked) scatterData.push({
    x: labels,
    y: ssdData,
    type: 'scatter',
    mode: 'markers',
    name: 'SSD',
    marker: {
      color: 'rgba(255, 159, 64, 0.5)',
      line: {
        color: 'rgba(255, 159, 64, 1)',
        width: 2
      },
      size: 10
    }
  });

  if (ishddChecked) scatterData.push({
    x: labels,
    y: hddData,
    type: 'scatter',
    mode: 'markers',
    name: 'HDD',
    marker: {
      color: 'rgba(153, 102, 255, 0.5)',
      line: {
        color: 'rgba(153, 102, 255, 1)',
        width: 2
      },
      size: 10
    }
  });

  const scatterLayout = {
    xaxis: {
      title: 'Nama Toko'
    },
    yaxis: {
      title: 'Jumlah Terjual',
      tickformat: ',d', // Format angka dengan koma ribuan
      rangemode: 'tozero' // Mulai dari sumbu Y dari nilai 0
    }
  };
  
  Plotly.newPlot('scatter-chart-container', scatterData, scatterLayout);
  
  // Perbarui tabel penjualan
  const tableBody = document.querySelector('#sales-table tbody');
  tableBody.innerHTML = ''; // Hapus isi tabel sebelumnya
  
  selectedStores.forEach(store => {
    if (data[store]) {
      if (isIntelChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>Intel</td><td>${data[store].intel}</td>`;
        tableBody.appendChild(row);
      }
      if (isAMDChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>AMD</td><td>${data[store].amd}</td>`;
        tableBody.appendChild(row);
      }
      if (isNvidiaChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>NVIDIA</td><td>${data[store].nvidia}</td>`;
        tableBody.appendChild(row);
      }
      if (isRadeonChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>Radeon</td><td>${data[store].radeon}</td>`;
        tableBody.appendChild(row);
      }
      if (isMoboIntelChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>Mobo Intel</td><td>${data[store].moboIntel}</td>`;
        tableBody.appendChild(row);
      }
      if (isMoboAMDChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>Mobo AMD</td><td>${data[store].moboAMD}</td>`;
        tableBody.appendChild(row);
      }
      if (isramChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>RAM</td><td>${data[store].ram}</td>`;
        tableBody.appendChild(row);
      }
      if (isssdChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>SSD</td><td>${data[store].ssd}</td>`;
        tableBody.appendChild(row);
      }
      if (ishddChecked) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${store}</td><td>HDD</td><td>${data[store].hdd}</td>`;
        tableBody.appendChild(row);
      }
    }
  });
}
  
// Fungsi untuk menampilkan atau menyembunyikan grafik
function toggleChart(chartId) {
  const chart = document.getElementById(chartId);
  chart.style.display = chart.style.display === 'none' ? 'block' : 'none';
}
  
// Inisialisasi grafik dan tabel saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCharts);