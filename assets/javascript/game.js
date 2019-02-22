var images = []
images[0] = "Yoda.jpeg";
images[1] = "Aniken_Skywalker.jpeg";
images[2] = "Darth_Vader2.jpeg";
images[3] = "Bobo_Fett.jpeg";
images[4] = "FireMan.jpeg";
images[5] = "Kylo_Ren.Jpeg";
images[6] = "Luke_Sky_Walkerjpeg";
images[7] = "Han_Solo.jpeg";
images[8] = "Obi_One_Kenobi.jpeg";
images[8] = "Mace_Windu.jpeg";
    

$(document).ready(function(){
    j = 0
    $("#caracters").children().each(function(){
        $(this).attr({"src":"assets/images/" + images[j], "height":"100px", "width":"150px"});
        j++;
    })
    

    $(".tt").attr("src", "assets/images/Yoda.jpeg");
});
$(document).on("click", ".char", function(){
    alert("clicked on char");
    var enemies = $(this).siblings();
    $(enemies).removeClass()
    //$("#caracters").remove($(this).siblings());
    $("#enemies").append($(enemies));
    $("#enemies").children().removeClass();
    $("#enemies").children().addClass("enemy");
    $("#you").append($(this));
});

$(document).on("click", ".enemy", function(){
    alert("clicked on enemy");
    //if ($("#defender").is(":empty")){
        $(this).css({"id":"defed"});
        $("#defender").prepend($(this));
    //}
});