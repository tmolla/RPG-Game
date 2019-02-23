var images = []
images[0] = "Yoda.jpeg";
images[1] = "Luke_Sky_walker.jpeg";
images[2] = "Darth_Vader2.jpeg";
images[3] = "Bobo_Fett.jpeg";
images[4] = "FireMan.jpeg";
images[5] = "Kylo_Ren.Jpeg";
images[6] = "Luke_Sky_Walkerjpeg";
images[7] = "Han_Solo.jpeg";
images[8] = "Obi_One_Kenobi.jpeg";
images[8] = "Mace_Windu.jpeg";
function setUp(){
    var k = 0
    $('.char').each(function(){
        $(this).attr({"src":"assets/images/" + images[k], "height":"75px", "width":"100px"});
        $(this).parent().find(".name").text("yea " + k);
        $(this).parent().find(".healthpoint").text(100 + k);
        k++;
    }) // Find every cell containing "Henry"

    $(".caracters").each(function(){
        $(this).css({"padding-left":$(".name").css("height"), "padding-right":$(".name").css("height"), "margin":"0px"});
    })
 
}
    

$(document).ready(function(){
    setUp();
    //get all images from the caracgers div
    //set each one with images, name, health point and attack points
    /* j = 0
    $("#caracters").children().each(function(){
        $(this).attr({"src":"assets/images/" + images[j], "height":"75px", "width":"100px"});
        j++;
    })
    $(".tt").attr("src", "assets/images/Yoda.jpeg"); */
});

$(document).on("click", ".caracters", function(){
    alert("clicked on caracter");
    var enemies = $(this).siblings();
    //$(enemies).removeClass()
    //$("#caracters").remove($(this).siblings());
    $(".enemy-container").append($(enemies));
    $(".enemy-container").children().removeClass();
    $(".enemy-container").children().addClass("enemies");
    $(".enemies").css({"margin-right":"4px"});
    $("#you").append($(this));
});

$(document).on("click", ".enemy", function(){
    alert("clicked on enemy");
    //if ($("#defender").is(":empty")){
        $(this).css({"id":"defed"});
        $("#defender").prepend($(this));
    //}
});