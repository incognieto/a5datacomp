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
  
  return {
    'Toko Expert': {
      intel: getTotalSold(expertData["Prosesor Intel"]),
      amd: getTotalSold(expertData["Prosesor AMD"]),
      nvidia: getTotalSold(expertData["VGA GeForce"]),
      radeon: getTotalSold(expertData["VGA Radeon"])
    },
    'Toko Jaya': {
      intel: getTotalSold(jayaData["Prosesor Intel"]),
      amd: getTotalSold(jayaData["Prosesor AMD"]),
      nvidia: getTotalSold(jayaData["VGA GeForce"]),
      radeon: getTotalSold(jayaData["VGA Radeon"])
    },
    'BZones': {
      intel: getTotalSold(bzonesData["Prosesor Intel"]),
      amd: getTotalSold(bzonesData["Prosesor AMD"]),
      nvidia: getTotalSold(bzonesData["VGA GeForce"]),
      radeon: getTotalSold(bzonesData["VGA Radeon"])
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
  
  const labels = [];
  const intelData = [];
  const amdData = [];
  const nvidiaData = [];
  const radeonData = [];
  
  selectedStores.forEach(store => {
    if (data[store]) {
      labels.push(store);
      if (isIntelChecked) intelData.push(data[store].intel);
      if (isAMDChecked) amdData.push(data[store].amd);
      if (isNvidiaChecked) nvidiaData.push(data[store].nvidia);
      if (isRadeonChecked) radeonData.push(data[store].radeon);
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