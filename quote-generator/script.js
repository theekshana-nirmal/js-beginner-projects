var quotes = {
  "― Mahatma Gandhi" : '“Be the change that you wish to see in the world.”',
  "― Thomas A. Edison" : '“I have not failed. I have just found 10,000 ways that not work.”',
  "― Pablo Picasso" : '“Everything you can imagine is real.”',
  "― George Bernard Shaw" : '“Life is not about finding yourself. Life is about creating yourself.”',
  "― Eleanor Roosevelt" : '“The future belongs to those who believe in the beauty of their dreams.”'
}

// Generates a random quote from the quotes object and updates the HTML content
function generate(){
  // Get all authors (keys) from the quotes object
  var authors = Object.keys(quotes);

  // Generate a random index
  var index = Math.floor(Math.random() * authors.length);

  // Select a random author and their quote
  var author = authors[index];
  var quote = quotes[author];

  document.getElementsByClassName("author")[0].innerHTML = author;
  document.getElementsByClassName("quote")[0].innerHTML = quote;
}