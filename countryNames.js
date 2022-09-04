// 3. All countries names, regions, sub-region and populations.

let conn = new XMLHttpRequest;

conn.open("GET", "https://restcountries.com/v3.1/all");
conn.send();

conn.responseType = "json";




conn.onload = function (){
    const details = conn.response;


    for (let d of details){

        console.log(`Country Name: ${d.name.common} \n Region: ${d.region} \n Sub-region: ${d.subregion} \n Population: ${d.population}`);
    }
};