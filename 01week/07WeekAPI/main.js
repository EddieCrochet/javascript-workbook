console.log("In address");

window.onload = function() {
    console.log("inside window onload");
    fetchUsers();
}

function fetchUsers() {
    console.log("About to call api");
    fetch("https://randomuser.me/api/?results=5").then(function(response){
        console.log("Processiung response", response);
        //do something with response once I get it
        return response.json();
    }).then(function(myJson){
        //do something with json payload
        console.log("Processing json payload", myJson);
        processUsers(myJson.results);
    });
}

function processUsers(listOfUsers) {
    listOfUsers.forEach(function(user){
        console.log("Processing a single user", user);
    })
}