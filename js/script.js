function init(){
//add your javascrip between these two lines of code

  document.addEventListener('click', function (event) { //Listen for all clicks
    if (event.target.matches('#entrybutton')) { //Filter out entrybutton click
      var textbox = document.getElementById('entryinput').value; //Set var textbox to the value of entryinput
      alert('Adam Patton: ' + textbox); //Alert with the textbox input value
      document.getElementById("textoutput").innerHTML = textbox;
  }
  });
}

window.addEventListener('load', init);

//I configured the listener as such to allow for simply adding a new if statement to capture a click on a different element, if desired
