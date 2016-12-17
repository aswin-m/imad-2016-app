//countee code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
   
    //Create a request oobject 
    // Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
   // capture the response and store it in a variable
   request.onreadystatechange = function() {
     if (request.readyState === XMLHttprequest.DONE) {
         // Take some action
         if (request.status === 200) {
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString()  ;
           }     
     }
     //Not done yet
   };
   // Make the request
   request.open('GET', 'http://http://aswin-m.imad.hasura-app.io/counter',true);
   request.send(null);
};