var defender = "";
var you = "";
var caracters = [ 
    {name: "Master Yoda", healthPoint:200, attackPoints:50, image:"Yoda.jpeg"},
    {name: "Mace Windu", healthPoint:175, attackPoints:45, image:"Mace_Windu.jpeg"},
    {name: "Luke Skywalker", healthPoint:130, attackPoints:30, image:"Luke_Sky_walker.jpeg"},
    {name: "Kylo Ren", healthPoint:125, attackPoints:40, image:"Kylo_Ren.Jpeg"},
    
]

function setUp(){
    for (var i=0; i<caracters.length; i++){
        caracters[i].healthPoint = Math.floor(Math.random() * 51) + 100
        caracters[i].attackPoints = Math.floor(Math.random() * 5) + 5;
    }
    var k = 0
    $('.char').each(function(){
        $(this).attr({"src":"assets/images/" + caracters[k].image, "data-index":k, "height":"75px", "width":"100px"});
        $(this).parent().find(".name").html("<small>"+caracters[k].name)+"</small>";
        $(this).parent().find(".healthpoint").html("<small>"+caracters[k].healthPoint+"</small>");
        k++;
    }) // Find every cell containing "Henry"

    $(".caracters").each(function(){
        $(this).css({"padding-left":$(".name").css("height"), "padding-right":$(".name").css("height"), "margin":"0px"});
    })
 
}
    
$(document).on("click", "#attack", function(){
    var dHP = $(".defed").attr("data-index");
    var mHP = $(".me").attr("data-index");
    caracters[dHP].healthPoint -= caracters[mHP].attackPoints;
    caracters[mHP].healthPoint -= caracters[dHP].attackPoints;
    caracters[mHP].attackPoints *= 2; 
    $(".me").siblings(".healthpoint").html("<small>" + caracters[mHP].healthPoint + "</small>");
    $(".defed").siblings(".healthpoint").html("<small>" + caracters[dHP].healthPoint + "</small>");
    console.log("me hp = " + caracters[mHP].healthPoint)
    console.log("def hp = " + caracters[dHP].healthPoint)
    console.log("me ap = " + caracters[mHP].attackPoints)

});
$(document).ready(function(){
    setUp();

});

$(document).on("click", ".caracters", function(){
    alert("clicked on caracter");
    var enemies = $(this).siblings();
    $(".enemy-container").append($(enemies));
    $(".enemy-container").children().removeClass();
    $(".enemy-container").children().addClass("enemies");
    $(".enemies").css({"margin-right":"4px"});
    $("#you").append($(this));
    $(this).find("img").removeClass().addClass("me");
    console.log($(".me").attr("data-index"));
});

$(document).on("click", ".enemies", function(){
    alert("clicked on enemy");
    //if ($("#defender").is(":empty")){
        $(this).find("img").removeClass().addClass("defed");
        $("#defender").prepend($(this));
    //}
});