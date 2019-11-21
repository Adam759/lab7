function init(){
//add your javascrip between these two lines of code

  document.addEventListener('click', function (event) {
    if (!event.target.matches('#entrybutton')) return; //Listen for all clicks, return if not the entrybutton
    var textbox = document.getElementById('entryinput').value; //Set var textbox to the value of entryinput
    alert('Adam Patton: ' + textbox); //Alert with the textbox input value
    document.getElementById("textoutput").innerHTML = textbox;
  });
}

window.addEventListener('load', init);
