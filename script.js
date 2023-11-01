function loadModule(module) {
    let links = '';
    const dynamicLinks = document.getElementById('dynamicLinks');

    switch(module) {
      case 'module1':
        links = `
          <li class="nav-item"><a class="nav-link" href="../Module1/pioneers.html">Early Pioneers</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/early_analysis.html">Role of Early Analysis</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/careers.html">Careers</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/modern_data_collection.html">Modern Data Collection</a></li>
           <li class="nav-item"><a class="nav-link" href="../Module1/big_data.html">Big Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/technology_evolution.html">Technology Evolution</a></li>
        `;
        break;
      case 'module2':
        links = `
          <li class="nav-item"><a class="nav-link" href="../Module2/graphs.html">Graph Guide</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module2/Understanding_Missing_Data_and_Zero_Values_in_Datasets.html">Missing Data and Zero Values</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module2/The_Scale_of_Data__From_Bytes_to_Zettabytes.html">Scale of Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module2/Dealing_with_Anomalies_in_Data.html">Data Anomalies</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module2/The_Importance_of_Data_Quality_in_Analytics.html">Data Analytics</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module2/The_Trade-off_Between_Data_Accuracy_and_Speed.html">Trade-Off</a></li>
        `;
        break;
      case 'module3':
        links = `
        <li class="nav-item"><a class="nav-link" href="../Module3/basicconcepts.html">Basic Concepts</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/basiccharts.html">Basic Charts</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/cutomizing.html">Cutomizing</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/dashboard.html">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/advanced.html">Advanced</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/sharing.html">Sharing</a></li>
        <li class="nav-item"><a class="nav-link" href="../Module3/playlists.html">Playlists</a></li>
        `;
        break;
    }

    dynamicLinks.innerHTML = links;
  }
  document.addEventListener("DOMContentLoaded", function() {
      loadModule('module1');
  });