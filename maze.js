"use strict";
var count = 0;
$(document).ready(function(){
    $("#start").click( function(){
        $("h1,h2,p,.boundary example").mouseover(function(){
            $(".boundary").addClass("youlose");
            $("#status").text("You lose! :[");
            count++;
        });
        if(count === 0){
        $(".boundary").mouseover(function(){
            $(".boundary").addClass("youlose"); 
            count++;
            $("#status").text("You lose! :[");
        });
    }else{
        $(".boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin.");
        count = 0;
    }
    });
    $("#end").click(function(){
        if(count === 0){
             $("#status").text("You win! :]");
        }
    });
});


