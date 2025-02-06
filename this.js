console.log(this); // In a browser, this will log the 'window' object.


function showThis() {
    console.log(this); // In non-strict mode, 'this' refers to the global object (window in the browser)
  }
  
  showThis(); // Logs the global object (window in browsers)
  