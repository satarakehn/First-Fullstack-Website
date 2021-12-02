function checkPassword(){
    var psw = document.getElementById("passwordFirst");
    var cpsw = document.getElementById("passwordConfirm");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var match = document.getElementById("match");
    psw.onkeyup = function(){
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var minLength = 8;
        if(psw.value.match(lowerCaseLetters)){
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } 
        else{
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        if(psw.value.match(upperCaseLetters)){
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        }
        else{
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        
        }
        if(psw.value.match(numbers)){
            number.classList.remove("invalid");
            number.classList.add("valid");
        }
        else{
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
        if(psw.value.length >= minLength){
            length.classList.remove("invalid");
            length.classList.add("valid");
        }
        else{
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    };
    cpsw.onkeyup = function(){
        var passEqualsConfPass = (psw.value == cpsw.value);
        if(passEqualsConfPass){
          match.classList.remove("invalid");
          match.classList.add("valid");
        }
        else{
          match.classList.remove("valid");
          match.classList.add("invalid");
        }
        enableButton(letter, capital, number, length, match);
    };
}

function enableButton(letter, capital, number, length, match) {
    var button = document.getElementById("submit_button");
    var condition = (letter.classList.contains("valid") && capital.classList.contains("valid") && number.classList.contains("valid") && length.classList.contains("valid") && match.classList.contains("valid"));
    if (condition){
      button.disabled = false;
    }
}


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  }

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(nameArr) {
  var li = document.createElement("li");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  // var inputValue = document.getElementById("myInput").value;
  // var nameArr = inputValue.split(',');
  var t = document.createTextNode(nameArr.assignment_name);
  var t1 = document.createTextNode(nameArr.class_name);
  var t2 = document.createTextNode(nameArr.due_date);
  li.appendChild(t);
  li1.appendChild(t1);
  li2.appendChild(t2);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myUL1").appendChild(li1);
    document.getElementById("myUL2").appendChild(li2);
  
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  //li1.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}