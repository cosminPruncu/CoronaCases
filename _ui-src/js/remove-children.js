var COVID = COVID ? COVID : {};

COVID.remove = {
    removeChildren: function () {
        $(".country").children().remove();
        $(".confirmed").children().remove();
        $(".recovered").children().remove();
        $(".critical").children().remove();
        $(".deaths").children().remove();
    },
}

$(document).ready(function(){
    COVID.remove.removeChildren();
});