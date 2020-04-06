var COVID = COVID ? COVID : {};

COVID.input = {

    searchBarInput: function () {
        $(".input-search-country").autocomplete({
            source: COVID.countries.country_list,
            minLength: 2
        });
    },

    bindSearchOnSearchButton: function () {
        var $button = $(".search-button");
        $button.on('click', function () {
            var $searchCountry = $(".input-search-country").val();
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://covid-19-data.p.rapidapi.com/country?format=undefined&name=" + $searchCountry,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                    "x-rapidapi-key": "535c1d3527msh148cb4ef6ceb123p1eab9djsnf2f84d2bb4b7"
                },
                success: function (data) {
                    var results = data[0];
                    if (results == '' || results == undefined) {
                        $('.invalid-feedback').addClass('d-flex');
                    } else {
                        var remainingCases = results.confirmed - results.recovered - results.deaths;
                        COVID.remove.removeChildren();
                        $('.invalid-feedback').removeClass('d-flex');

                        $(".country").append(` <b>${results.country}</b>`);
                        $(".confirmed").append(` <b class="increment">${results.confirmed}</b>`);
                        $(".recovered").append(` <b class="increment">${results.recovered}</b>`);
                        $(".critical").append(` <b class="increment">${results.critical}</b>`);
                        $(".deaths").append(` <b class="text-danger increment">${results.deaths}</b>`);
                        $(".remaining").append(` <b class="text-remaining increment">${remainingCases}</b>`);

                        COVID.animate.animateValues();
                    }

                },
                error: function (data) {
                    console.log(data);
                }
            });
        });
    },

    bindSearchOnInputSearch: function () {
        var $input = $(".input-search-country");
        $input.on('keypress', function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                var $searchCountry = $(".input-search-country").val();
                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "https://covid-19-data.p.rapidapi.com/country?format=undefined&name=" + $searchCountry,
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                        "x-rapidapi-key": "535c1d3527msh148cb4ef6ceb123p1eab9djsnf2f84d2bb4b7"
                    },
                    success: function (data) {
                        var results = data[0];
                        if (results == '' || results == undefined) {
                            $('.invalid-feedback').addClass('d-flex');
                        } else {
                            var remainingCases = results.confirmed - results.recovered - results.deaths;
                            COVID.remove.removeChildren();
                            $('.invalid-feedback').removeClass('d-flex');

                            $(".country").append(` <b>${results.country}</b>`);
                            $(".confirmed").append(` <b class="increment">${results.confirmed}</b>`);
                            $(".recovered").append(` <b class="increment">${results.recovered}</b>`);
                            $(".critical").append(` <b class="increment">${results.critical}</b>`);
                            $(".deaths").append(` <b class="text-danger increment">${results.deaths}</b>`);
                            $(".remaining").append(` <b class="text-remaining increment">${remainingCases}</b>`);

                            COVID.animate.animateValues();
                        }

                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }

        });
    },
}


$(document).ready(function () {
    COVID.input.searchBarInput();
    COVID.input.bindSearchOnSearchButton();
    COVID.input.bindSearchOnInputSearch();
});

