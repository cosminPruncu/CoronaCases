var COVID = COVID ? COVID : {};

COVID.totals = {
    displayTotalStats: function () {
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://covid-19-data.p.rapidapi.com/totals?format=undefined",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "535c1d3527msh148cb4ef6ceb123p1eab9djsnf2f84d2bb4b7"
            },
            success : function(data){
                var totals = data[0];
                var totalActive = totals.confirmed - totals.recovered - totals.deaths;
                $(".total-confirmed").text(totals.confirmed);
                $(".total-recovered").text(totals.recovered);
                $(".total-critical").text(totals.critical);
                $(".total-deaths").text(totals.deaths);
                $(".total-active").text(totalActive);

                COVID.animate.animateTotalValues();
            },
            error : function(data){
                console.log(data);
            }
        });
    }
}

$(document).ready(function () {
    COVID.totals.displayTotalStats();
});