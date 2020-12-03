
var rock = 0;
var scissors = 1;
var paper = 2;

$(function () {
    //この中に書いていく
    //ここにグーを選んだ時の処理を書いていきます。
    $("#rock").on("click", function(){
        var rivalhand = Math.floor(Math.random() * 3);
        //相手の手を表示します。
        // console.log(rivalhand, "ランダムに相手の手として、012がでます。"); 
        if (rivalhand == 0){
            $("#rivalrock").show();
            $("#rivalscissors").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 1){
            $("#rivalscissors").show();
            $("#rivalrock").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 2){
            $("#rivalpaper").show();
            $("#rivalscissors").hide();
            $("#rivalrock").hide();
        };
        var myhand = rock;
        //自分の手を表示します。
        // console.log(myhand);
        var judge = (myhand - rivalhand + 3) % 3;
        // judgeの中身を確認します。
        // console.log(judge);
        if(judge == 0){
            $(".winlose").html("引き分けです。");
        } else if (judge == 1){
            $(".winlose").html("あなたの負けです。");
        } else if (judge == 2){
            $(".winlose").html("あなたの勝ちです。");
        }
    });
    //ここにチョキを選んだ時の処理を書いていきます。
    $("#scissors").on("click", function(){
        var rivalhand = Math.floor(Math.random() * 3);
        if (rivalhand == 0){
            $("#rivalrock").show();
            $("#rivalscissors").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 1){
            $("#rivalscissors").show();
            $("#rivalrock").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 2){
            $("#rivalpaper").show();
            $("#rivalscissors").hide();
            $("#rivalrock").hide();
        };
        //相手の手を表示します。
        // console.log(rivalhand, "ランダムに相手の手として、012がでます。");  
        var myhand = scissors;
        //自分の手を表示します。
        // console.log(myhand);
        var judge = (myhand - rivalhand + 3) % 3;
        // judgeの中身を確認します。
        // console.log(judge);
        if(judge == 0){
            $(".winlose").html("引き分けです。");
        } else if (judge == 1){
            $(".winlose").html("あなたの負けです。");
        } else if (judge == 2){
            $(".winlose").html("あなたの勝ちです。");
        }
    });
    //ここにパーを選んだ時の処理を書いていきます。
    $("#paper").on("click", function(){
        var rivalhand = Math.floor(Math.random() * 3);
        if (rivalhand == 0){
            $("#rivalrock").show();
            $("#rivalscissors").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 1){
            $("#rivalscissors").show();
            $("#rivalrock").hide();
            $("#rivalpaper").hide();
        } else if (rivalhand == 2){
            $("#rivalpaper").show();
            $("#rivalscissors").hide();
            $("#rivalrock").hide();
        };
        //相手の手を表示します。
        // console.log(rivalhand, "ランダムに相手の手として、012がでます。");  
        var myhand = paper;
        //自分の手を表示します。
        // console.log(myhand);
        var judge = (myhand - rivalhand + 3) % 3;
        // judgeの中身を確認します。
        // console.log(judge);
        if(judge == 0){
            $(".winlose").html("引き分けです。");
        } else if (judge == 1){
            $(".winlose").html("あなたの負けです。");
        } else if (judge == 2){
            $(".winlose").html("あなたの勝ちです。");
        }
    });

});
