var myIndex = [
    {
      "title": "About Data in Action",
      "content": "Data in Action",
      "url": "/about.html" // URL to the page of the article
    },
    // ... more items
  ];

var options = {
    // is the pattern by which Fuse will search your list. 
    keys: ['title', 'content'],
    includeScore: true,
    threshold: 0.2 // At what point the match is considered good. 0 for perfect match, 1 would match anything.
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