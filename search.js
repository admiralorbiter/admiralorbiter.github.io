var myIndex = [
    {
      "title": "About Data in Action",
      "content": "Data in Action",
      "url": "/about.html" // URL to the page of the article
    },
    {
      "title": "Big Data",
      "content": "Big data, as the name suggests, refers to extremely large datasets that are too voluminous to draw conclusions from without specialized processing. It's not just about the size but also about the complexity. Such data requires powerful software and computational tools for its processing. As technology has advanced and the cost of creating and storing data has plummeted, the generation and utilization of big data have soared, being used at a rapidly accelerating pace.",
      "url": "../module1/big_data.html" // URL to the page of the article
    },
    {
      "title": "Careers in Data Analytics",
      "content": "Growing exponentially, data analytics is being used to increase efficiency to optimize key areas of focus across virtually all industries. As a result, career opportunities currently outpace workforce development.",
      "url": "../module1/careers.html"
    }
    // ... more items
  ];

var options = {
    // is the pattern by which Fuse will search your list. 
    keys: ['title', 'content'],
    includeScore: true,
    // threshold: 0.2 // At what point the match is considered good. 0 for perfect match, 1 would match anything.
};

var fuse = new Fuse(myIndex, options);

document.getElementById('search-input').addEventListener('keyup', function() {
    var results = fuse.search(this.value);
    var output = '';
  
    // Set the color of links to white
    results.forEach(function(result) {
      output += '<a href="' + result.item.url + '" class="list-group-item list-group-item-action">' + result.item.title + '</a>';
    });
  
    document.getElementById('search-results').innerHTML = output;
  });