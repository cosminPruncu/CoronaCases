var COVID = COVID ? COVID : {};

COVID.animate = {
    animateValues: function () {
        $(".increment").each(function () {
            var $currentElement = $(this);
            $({ counter: 0 }).animate({ counter: $currentElement.text() }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $currentElement.text(Math.ceil(this.counter));
                }
            });
        });
    },

    animateTotalValues: function () {
        $(".increment-totals").each(function () {
            var $currentElement = $(this);
            $({ counter: 100000 }).animate({ counter: $currentElement.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $currentElement.text(Math.ceil(this.counter));
                }
            });
        });
    }
}

$(document).ready(function () {
    COVID.animate.animateValues();
    COVID.animate.animateTotalValues();
});