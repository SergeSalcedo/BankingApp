var storedusernames = ["Admin",  "Phil",  "Sarah", "Serge", "Lawrence"];
var storedpasswords = ["password", "supermAn", "c0cac0la", "okey", "wazhere"];

document.getElementById("registerButton").onclick = function() {
    var newUsername = document.getElementById("registerName").value;
    var newPassword = document.getElementById("registerPassword").value;
    storedusers.push({storedusers: newUsername})
    storedpasswords.push({storedpasswords: newPassword})
    console.log(storedusers,storedpasswords);
}

document.getElementById("loginButton").onclick = function() {

  var x = document.getElementById("loginName").value;
  var y = document.getElementById("loginPassword").value;

  var valid = false;

  validate(x, y);

  function validate(username, password) {

      for (var i=0; i <storedusernames.length; i++) {
          if ((username == storedusernames[i]) && (password == storedpasswords[i])) {
              valid = true;
              window.location.href = 'profile.html'
              break;
          }
      }
  }

  if(valid) {
    alert("Welcome back "+ x+"!");
  }
  else {
    alert("invalid credentials");
  }

}
