function loadModule(module) {
    let links = '';
    const dynamicLinks = document.getElementById('dynamicLinks');

    switch(module) {
      case 'module1':
        links = `
          <li class="nav-item"><a class="nav-link" href="../module1/big_data.html">Big Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../module1/careers.html">Careers</a></li>
          <li class="nav-item"><a class="nav-link" href="../module1/modern_data_collection.html">Modern Data Collection</a></li>
          <li class="nav-item"><a class="nav-link" href="../module1/technology_evolution.html">Technology Evolution</a></li>
          <li class="nav-item"><a class="nav-link" href="../module1/pioneers.html">Early Pioneers</a></li>
          <li class="nav-item"><a class="nav-link" href="../module1/early_analysis.html">Role of Early Analysis</a></li>
        `;
        break;
      case 'module2':
        links = `
          <li class="nav-item"><a class="nav-link" href="../module2/graphs.html">Graph Guide</a></li>
          <li class="nav-item"><a class="nav-link" href="../module2/missing_data.html">Missing Data and Zero Values</a></li>
          <li class="nav-item"><a class="nav-link" href="../module2/scale_of_data.html">Scale of Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../module2/anomalies.html">Data Anomalies</a></li>
          <li class="nav-item"><a class="nav-link" href="../module2/dataquality.html">Data Analytics</a></li>
          <li class="nav-item"><a class="nav-link" href="../module2/accuracy_vs_speed.html">Trade-Off</a></li>
        `;
        break;
      case 'module3':
        links = `
        <li class="nav-item"><a class="nav-link" href="../module3/basicconcepts.html">Basic Concepts</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/basiccharts.html">Basic Charts</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/customizing.html">Customizing</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/dashboard.html">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/advanced.html">Advanced</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/sharing.html">Sharing</a></li>
        <li class="nav-item"><a class="nav-link" href="../module3/playlists.html">Playlists</a></li>
        `;
        break;
    }

    dynamicLinks.innerHTML = links;
  }
  document.addEventListener("DOMContentLoaded", function() {
      loadModule('module2');
});