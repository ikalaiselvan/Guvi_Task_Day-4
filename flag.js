// 2.All country flags in the console:

const connection = new XMLHttpRequest();

connection.open("GET", "https://restcountries.com/v3.1/all");
connection.send();

connection.responseType = "json";



connection.onload = function() {
    const allDetails = connection.response;

    for (let index in allDetails){
    console.log(`Country Name: ${allDetails[index].name.common} \n Flag Format in PNG: ${allDetails[index].flags.png} \n Flag Format in SVG: ${allDetails[index].flags.svg}`);
}
};