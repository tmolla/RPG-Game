
var caracters = [ 
    {name: "Master Yoda", healthPoint:0, initialAP:0, attackPoints:0, image:"Yoda.jpeg"},
    {name: "Mace Windu", healthPoint:0, initialAP:0, attackPoints:0, image:"Mace_Windu.jpeg"},
    {name: "Luke Skywalker", healthPoint:0, initialAP:0, attackPoints:0, image:"Luke_Sky_Walker3.jpeg"},
    {name: "Darth Maul", healthPoint:0, initialAP:0, attackPoints:0, image:"Darth_Maul.png"},
    
]

function setUp(){
    $("#defender-container").empty();
    $("#you").empty();
    $("#defender-container").empty();
    $("#yourMessage").empty();
    $("#defenderMessage").empty();
    $("#restart").hide();
    for (var i=0; i<caracters.length; i++){
        caracters[i].healthPoint = Math.floor(Math.random() * 51) + 100
        caracters[i].initialAP = Math.floor(Math.random() * 21) + 5;
        caracters[i].attackPoints = caracters[i].initialAP;
        //console.log("char hp = " + caracters[i].healthPoint + " iap = " + caracters[i].initialAP +" ap = " + caracters[i].attackPoints)
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
    if (!($("#defender-container").is(":empty"))){
        var dHP = $(".defed").attr("data-index");
        var mHP = $(".me").attr("data-index");
        //console.log("coming in  " + caracters[mHP].attackPoints) 
        $("#yourMessage").html("You attacked " + caracters[dHP].name + " for " + caracters[mHP].attackPoints + " damage </small>");
        $("#defenderMessage").html("<samll>" + caracters[dHP].name + " attacked you back for " + caracters[dHP].attackPoints + " damage</small>")
        caracters[dHP].healthPoint -= caracters[mHP].attackPoints;
        caracters[mHP].healthPoint -= caracters[dHP].attackPoints;
        caracters[mHP].attackPoints += caracters[mHP].initialAP; 
        

        $(".me").siblings(".healthpoint").html("<small>" + caracters[mHP].healthPoint + "</small>");
        $(".defed").siblings(".healthpoint").html("<small>" + caracters[dHP].healthPoint + "</small>");
        if ((caracters[dHP].healthPoint <= 0) && (caracters[mHP].healthPoint <= 0)){
            $(".defender").remove();  
            $("#you").remove();     
            $("#defenderMessage").html("you have defeted " + caracters[dHP].name + ", your last enmey. Game Over!!!!"); 
            $("#defenderMessage").html("you have defeated each other. Game Over!!!");
            $("#yourMessage").empty();
            $("#restart").show();      
        }else if (caracters[dHP].healthPoint <= 0){
            $(".defender").remove();            //alert("you have defeted " + caracters[dHP].name + ", you can choose to fight another enemy.");
            if ($(".enemy-container").is(":empty")){
                $("#defenderMessage").html("you have defeted " + caracters[dHP].name + ", your last enmey. Game Over!!!!"); 
                $("#restart").show();      
            }else {
                $("#defenderMessage").html("you have defeted " + caracters[dHP].name + ", you can choose to fight another enemy.");
            }   
            $("#yourMessage").empty();
        }else if(caracters[mHP].healthPoint <= 0){ 
            $("#you").remove();
            $("#yourMessage").html("You have been defeted ... GAME OVER!!!");
            $("#defenderMessage").empty()
            $("#restart").show();

        }
        //console.log(caracters[mHP].name + " at the end " + caracters[mHP].attackPoints)
    }
});
$(document).ready(setUp());

$(document).on("click", ".caracters", function(){
    //alert("clicked me")
    var enemies = $(this).siblings();
    $(".enemy-container").append($(enemies));
    $(".enemy-container").children().removeClass();
    $(".enemy-container").children().addClass("enemies");
    $(".enemies").css({"margin-right":"4px"});
    $("#you").append($(this));
    $("#caracter-container").empty()
    $(this).find("img").removeClass().addClass("me");

    // adjust the attack point for an even game
    var index = $(".me").attr("data-index")
    caracters[index].initialAP = Math.floor(Math.random() * 5 ) + 2;
    caracters[index].attackPoints = caracters[index].initialAP;
    //console.log("in caracters " + caracters[index].attackPoints);
    
    
});

$(document).on("click", ".enemies", function(){

    if ($("#defender-container").is(":empty")){
        $(this).find("img").removeClass().addClass("defed");
        $(this).removeClass().addClass("defender");
        $("#defender-container").prepend($(this));
    }
});

//restart reloads the game.
$(document).on("click", "#restart", function(){
    //$("#you").empty();
    location.reload();
});