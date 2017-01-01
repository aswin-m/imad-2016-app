//countee code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
   
    // Create a request object
    var request = new XMLHttpRequest();
    
    
   // capture the response and store it in a variable
   request.onreadystatechange = function() {
     if (request.readyState === XMLHttprequest.DONE) {
         // Take some action
         if (request.status === 200) {
         // capture a list of names and render it as a list
         var names = request.responseText;
         names = JSON.parse(names);
         var list = '';
          for (var i=0; i< names.length; i++) {
            list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
    
           }     
     }
     //Not done yet
   };
   
};

// submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // Make a request to the server and  send the name
    
  // Make the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
   request.open('GET', 'http://http://aswin-m.imad.hasura-app.io/submit-name?name=' + name,true);
   request.send(null);
   
};   
   