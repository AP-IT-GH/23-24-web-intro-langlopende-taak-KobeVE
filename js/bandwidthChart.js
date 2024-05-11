// bandwidthChart.js
document.addEventListener('DOMContentLoaded', function() {
    // Voorbeeldgegevens voor gegevensgebruik
    const timeLabels = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'];
    const uploadData = [50, 60, 40, 70, 80, 70]; // Uploadgegevens in Mbps
    const downloadData = [100, 120, 80, 150, 200, 180]; // Downloadgegevens in Mbps
  
    // Selecteer het canvas-element
    const ctx = document.getElementById('bandwidthChart').getContext('2d');
  
    // Maak de grafiek
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [{
          label: 'Uploadgegevens (Mbps)',
          data: uploadData,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
        }, {
          label: 'Downloadgegevens (Mbps)',
          data: downloadData,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  