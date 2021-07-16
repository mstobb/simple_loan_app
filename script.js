function showResult(elem) {
  document.getElementById("showresulthere").innerHTML = Number(elem.value) + 2;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "hello.txt";

    download(filename, text);
}, false);


// var set_btn = document.getElementById("settings_button")
//
// set_btn.onclick = function(){
//   var stuff = document.querySelector('.main-flex.collapsible');
//   //stuff.classList.toggle("collapsed");
//   stuff.value="SET"
// }



// Collapsible settings menu
document.getElementById("settings_button").addEventListener("click", function(){
  document.querySelector('.main-flex.collapsible').value="SET";
});

const mybutton = document.getElementById('settings-button');

mybutton.addEventListener('click', updateButton);

function updateButton() {
  if (mybutton.innerText === 'Settings') {
    mybutton.innerText = 'SET!';
  } else {
    mybutton.innerText = 'Settings';
  }
}
