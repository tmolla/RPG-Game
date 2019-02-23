var defender = "";
var you = "";
var caracters = [ 
    {name: "Master Yoda", healthPoint:0, initialAP:0, attackPoints:0, image:"Yoda.jpeg"},
    {name: "Mace Windu", healthPoint:0, initialAP:0, attackPoints:0, image:"Mace_Windu.jpeg"},
    {name: "Luke Skywalker", healthPoint:0, initialAP:0, attackPoints:0, image:"Luke_Sky_walker.jpeg"},
    {name: "Kylo Ren", healthPoint:0, initialAP:0, attackPoints:0, image:"Kylo_Ren.Jpeg"},
    
]

function setUp(){
    for (var i=0; i<caracters.length; i++){
        caracters[i].healthPoint = Math.floor(Math.random() * 51) + 100
        caracters[i].initialAP = Math.floor(Math.random() * 5) + 5;
        caracters[i].attackPoints = caracters[i].initialAP;
        console.log("char hp = " + caracters[i].healthPoint + " iap = " + caracters[i].initialAP +" ap = " + caracters[i].attackPoints)

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
    caracters[mHP].attackPoints += caracters[mHP].initialAP; 
    $(".me").siblings(".healthpoint").html("<small>" + caracters[mHP].healthPoint + "</small>");
    $(".defed").siblings(".healthpoint").html("<small>" + caracters[dHP].healthPoint + "</small>");
    if (caracters[dHP].healthPoint <= 0){
        alert("defernder dies");
        $(".defender").remove();
    }else if(caracters[mHP].healthPoint <= 0){ 
        $(".me").remove();
        alert("you die");
    }
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
    $("#caracter-container").empty()
    $(this).find("img").removeClass().addClass("me");
    console.log($(".me").attr("data-index"));
});

$(document).on("click", ".enemies", function(){
    alert("clicked on enemy");
    //if ($("#defender-container").is(":empty")){
        $(this).find("img").removeClass().addClass("defed");
        $(this).removeClass().addClass("defender");
        $("#defender-container").prepend($(this));
    //}
});