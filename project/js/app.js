function dropdownmenu() {
  var x = document.getElementById("dropdown-icon-click");
  if (x.className === "nav-left") {
    x.className += "responsive";
  } else {
    x.className = "nav-left";
  }
}
