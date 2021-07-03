
$(document).ready(function(){
    console.log("sairam");
    $("#after").hide();


    $("#send").click(function() {
        $("#after").show();
        $("#Letter")[0].value = "";        
        $("#before").hide();
        
        setTimeout(function(){ 
            $("#after").hide();
            $("#before").show();
        }, 1000 *60 * 10);
     });
  
});
