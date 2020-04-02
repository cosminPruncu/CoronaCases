var COVID = COVID ? COVID : {}

COVID.cases = {
    dropdownCountryList : function(){
        var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
        "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
        "Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
        "British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde",
        "Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
        "Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
        "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
        "Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon",
        "Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey",
        "Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran",
        "Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya",
        "Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
        "Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
        "Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro",
        "Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles",
        "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau",
        "Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar",
        "Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe",
        "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands",
        "Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent",
        "Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este"
        ,"Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda",
        "Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City"
        ,"Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
        $.each(country_list, function(key){
            $(".dropdown-menu").append(`<button class="dropdown-item search-country-name">${country_list[key]}</button>`);
        });
    },

    animateValues : function(){
        $(".increment").each(function(){
            var $currentElement = $(this);
            $({ counter : 0 }).animate({ counter : $currentElement.text() },{
                duration : 1000,
                easing : 'swing',
                step : function(){
                    $currentElement.text(Math.ceil(this.counter));
                }
            });
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
                        $(".confirmed").append(` <b class="increment">${results.confirmed}</b>`);
                        $(".recovered").append(` <b class="increment">${results.recovered}</b>`);
                        $(".critical").append(` <b class="increment">${results.critical}</b>`);
                        $(".deaths").append(` <b class="text-danger increment">${results.deaths}</b>`);
                        COVID.cases.animateValues();
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

