console.log("In address");

window.onload = function() {
    //window loaded
    console.log("inside window onload");
    //now we fetch the api
    fetchUsers();
}

function fetchUsers() {
    //started the function that calls the api
    console.log("About to call api");
    //fetch and handle api results --> pass response to function that gets passed in here
    fetch("https://randomuser.me/api/?results=5").then(function(response){
        console.log("Processiung response", response);
        //do something with response once I get it
        return response.json();
    }).then(function(myJson){
        //do something with json payload
        console.log("Processing json payload", myJson);
        //pass in results of my json payload to the function that will process my users
        processUsers(myJson.results);
    });
}

function processUsers(listOfUsers) {
    listOfUsers.forEach(function(user){
        //call this function on every item in my list I pass to processusers function
        console.log("Processing a single user", user);
        //then list individual user's info
    })
}