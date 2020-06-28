
(function () {

    var world_ele = document.getElementById("world");
    var india_ele = document.getElementById("india");


    const world_url = `https://api.covid19api.com/world/total`;

    var country_name = "india";

    var url = `https://api.covid19api.com/country/${country_name}`;

    function httpGetAsync(theurl, callback)
    {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
            //console.log(data);
            //console.log(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theurl, true); // true for asynchronous 
        xmlHttp.send(null);
    }

    function getData() {
    httpGetAsync(url, (data)=> {
        data = data[data.length - 1];


        document.getElementById("i-confirmed").innerHTML = `Total Confirmed: ${data.Confirmed}`;
        document.getElementById("i-deaths").innerHTML = `Total Deaths: ${data.Deaths}`;
        document.getElementById("i-recovered").innerHTML = `Total Recovered: ${data.Recovered}`;
        document.getElementById("i-active").innerHTML = `Total Active: ${data.Active}`;

    })

    httpGetAsync(world_url, (data)=> {

        document.getElementById("w-confirmed").innerHTML = `Total Confirmed: ${data.TotalConfirmed}`;
        document.getElementById("w-deaths").innerHTML = `Total Deaths: ${data.TotalDeaths}`;
        document.getElementById("w-recovered").innerHTML = `Total Recovered: ${data.TotalRecovered}`;
    
        });
    }

    var second = 1000;

    setInterval(()=> {
        getData();
    }, second *60)
    getData();
})();
