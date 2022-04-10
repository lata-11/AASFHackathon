$(".btn1").click(function(){
    var data=prompt("Write your idea");
    $(".btn1").after("<p>"+data+"</p>");
    $(".btn1").hide();
})
$(".s1").on("mouseover", function() {
    (".story1").css("height", "40rem")
})
