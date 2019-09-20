const firebaseConfig = {
    apiKey: "AIzaSyCrxO_9C9opwnWEl8Qx32zXNWfMZVfH7V0",
    authDomain: "train-scheduler-8ace0.firebaseapp.com",
    databaseURL: "https://train-scheduler-8ace0.firebaseio.com",
    projectId: "train-scheduler-8ace0",
    storageBucket: "",
    messagingSenderId: "728353774031",
    appId: "1:728353774031:web:37775d84d9cb3ecd999aba"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name = "";
var destination = "";
var frequency = "";
var nxtArriv = "";
var minAway = "";

$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    name = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#time-input").val().trim();
    nxtArriv = $("#freq-input").val().trim();

    database.ref().push({
        name: name,
        destination: destination,
        frequency: frequency,
        nxtArriv: nxtArriv
    });



    //console.log(name);

});


database.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val());

    var row = $("<tr>");
    var col1 = $("<td>");
    var col2 = $("<td>");
    var col3 = $("<td>");
    var col4 = $("<td>");
    col1.text(snapshot.val().name);
    col2.text(snapshot.val().destination);
    col3.text(snapshot.val().frequency);
    col4.text(snapshot.val().nxtArriv);
    row.append(col1, col2, col3, col4);
    $("tbody").append(row);
})



