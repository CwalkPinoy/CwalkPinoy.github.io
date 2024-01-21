var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear().toString().substr(2, 2); //get the last 2 digits of the full year;

today = mm + '-' + dd + '-' + yyyy;
document.write(today);