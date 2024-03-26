//Logiska operatorer i Javascript ||, &&, !

var name = "Jeremia";

if (name === "Jeremia" || name === "Anna") {
	alert("Hej Jeremia eller Anna!");
}  

// Man måste definiera variabler innan man använder dem i villkor eller "conditions"
var firstName = "Bob";
var lastName = "Smith";

var (firstName === "Bob" && lastName === "Smith") {
	alert("Hej Bob Smith");
}


// Om man inte heter "Fredrik" för följande
if (!(name === "Fredrik")) {
	alert("Hej Fredrik");
}

//!false --> gör om det till true (eftersom den gör motsatsen) !true --> false 