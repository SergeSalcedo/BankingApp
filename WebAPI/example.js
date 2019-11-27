var usernames = ["admin",  "phil",  "sarah", "serge", "lawrence"];
var passwords = ["password", "supermAn", "c0cac0la", "okey", "wazhere"];

var x = prompt("Please enter the username");
var y = prompt("Please enter the password");

var valid = false;

validate(x, y);

function validate(username, password) {

    for (var i=0; i <usernames.length; i++) {
        if ((username == usernames[i]) && (password == passwords[i])) {
            valid = true;
            break;
        }
    }
}

if(valid) {
  alert("valid credentials");
}
else {
  alert("invalid credentials");
}
