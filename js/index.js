// 引入必须文件
document.write('<script src="bootstrap/js/bootstrap.min.js"></script>'); // 引入bootstrap.js
document.write("<script language=javascript src='js/config.js'></script>"); // 引入配置文件

$(function(){
  console.log('index')
  $("#headBody").load("head.html?v=1.0.0", function () {
    $("#get-parent").val(0);
  });
  $('.carousel').carousel()
  // 初始化轮播
  $(".start-slide").click(function () {
    $("#myCarousel").carousel('cycle');
  });
  // 停止轮播
  $(".pause-slide").click(function () {
    $("#myCarousel").carousel('pause');
  });
  // 循环轮播到上一个项目
  $(".prev-slide").click(function () {
    $("#myCarousel").carousel('prev');
  });
  // 循环轮播到下一个项目
  $(".next-slide").click(function () {
    $("#myCarousel").carousel('next');
  });
  // 循环轮播到某个特定的帧
  $(".slide-one").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".slide-two").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".slide-three").click(function () {
    $("#myCarousel").carousel(2);
  });
})