var COVID = COVID ? COVID : {}

COVID.cases = {
    dropdownCountryList : function(){
        var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
        "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
        "Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
        "British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon", "Canada", "Cape Verde",
        "Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire",
        "Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
        "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands",
        "Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia",
        "Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
        "Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
        "Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic",
        "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia",
        "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
        "Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles",
        "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama",
        "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion",
        "Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia",
        "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea",
        "Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland",
        "Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
        "Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine",
        "United Arab Emirates","United Kingdom","Uruguay", "USA", "Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)",
        "Yemen","Zambia","Zimbabwe"];
        $.each(country_list, function(key){
            $(".dropdown-menu").append(`<button class="dropdown-item search-country-name">${country_list[key]}</button>`);
        });
    },

    removeChildren : function(){
        $(".country").children().remove();
        $(".confirmed").children().remove();
        $(".recovered").children().remove();
        $(".critical").children().remove();
        $(".deaths").children().remove();
    },

    bindSearchOnClick : function(){
        var $button = $(".search-country-name");
        $button.on('click',function(){
            var $searchCountry = $(this).text();
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://covid-19-data.p.rapidapi.com/country?format=undefined&name=" + $searchCountry,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                    "x-rapidapi-key": "535c1d3527msh148cb4ef6ceb123p1eab9djsnf2f84d2bb4b7"
                },
                success : function(data){
                    var results = data[0];
                    if(results == '' || results == undefined){
                        console.log("country not found");
                    } else {
                        COVID.cases.removeChildren();

                        $(".country").append(` <b>${results.country}</b>`);
                        $(".confirmed").append(` <b>${results.confirmed}</b>`);
                        $(".recovered").append(` <b>${results.recovered}</b>`);
                        $(".critical").append(` <b>${results.critical}</b>`);
                        $(".deaths").append(` <b class="text-danger">${results.deaths}</b>`);
                    }
                    
                },
                error : function(data){
                    console.log(data);
                }
            });
        });
    },
}


$(document).ready(function(){
    COVID.cases.dropdownCountryList();
    COVID.cases.bindSearchOnClick();
});


//# sourceMappingURL=main.js.map