//var username = document.getElementById("loginName").value;
//var password = document.getElementById("loginPassword").value;
//var newUsername = document.getElementById("registerName").value;
//var newPassword = document.getElementById("registerPassword").value;
var storedusers = [];
var storedpasswords = [];

//Register
document.getElementById("registerButton").onclick = function() {
    var newUsername = document.getElementById("registerName").value;
    var newPassword = document.getElementById("registerPassword").value;
    storedusers.push({storedusers: newUsername})
    storedpasswords.push({storedpasswords: newPassword})
    console.log(storedusers,storedpasswords);
}
//Login
document.getElementById("loginButton").onclick = function() {

   var x = document.getElementById("loginName").value;
   var y = document.getElementById("loginPassword").value;

   var checkObjects = false;

   for (var i=0; i <storedusers.length; i++) {
        if ((x == storedusers[i]) && (y == storedpasswords[i])) {
            checkObjects = true;
            break;
    }
  }
}
