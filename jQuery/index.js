// 1)
// $(document).keypress(function(event)
// {
//     console.log(event.key);
//     $("h1").text(event.key)
// });

// 2)
// len = document.querySelectorAll("button").length;
// len2 = document.querySelectorAll("h1").length;
// for (i = 0; i < len; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     for (i = 0; i <len2; i++)
//       document.querySelectorAll("h1")[i].style.color = "purple";
//   });
// }

// this above code 2 is equivalent to :
// $("button").on("click", function () {
//   $("h1").css("color", "purple");
// });

$(".title").prepend("<button>button0</button>")

$("button").on('click',function(){
    $("h1").animate({opacity:0.5}).animate({opacity:1})
})