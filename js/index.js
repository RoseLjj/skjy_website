// 引入必须文件
document.write('<script src="bootstrap/js/bootstrap.min.js"></script>'); // 引入bootstrap.js
document.write("<script language=javascript src='js/config.js'></script>"); // 引入配置文件

$(function () {
  console.log('index')
  // 引入头部
  $("#headBody").load("head.html?v=1.0.0", function () {
    $("#top-parent").val(0);
  });
  // 引入底部
  $("#bottomBody").load("bottom.html?v=1.0.0", function () {
    $("#bottom-parent").val(0);
  });
  // 初始化轮播
  $('.carousel').carousel()
  // 默认展示的品牌释义
  $('.brand-text').eq(0).show()
  // 品牌释义点击
  $('.brand-bottom .brand-one').click(function () {
    var brandList = [
      {
        img: 'images/img_home_brand@2x.png',
        zh: '品牌释义',
        en: 'BRAND STORY'
      },
      {
        img: 'images/img_home_idea@2x.png',
        zh: '品牌理念与愿景',
        en: 'BRAND STORY'
      },
      {
        img: 'images/img_home_service@2x.png',
        zh: '服务与承诺',
        en: 'GOOD SERVICE'
      }
    ]
    var nowIndex = $(this).index()
    $('.brand-bottom .brand-one').removeClass('active').eq(nowIndex).addClass('active')
    $('.brand-title-en').text(brandList[nowIndex].en)
    $('.brand-title-zh').text(brandList[nowIndex].zh)
    $('.brand-top img').attr({
      src: brandList[nowIndex].img
    })
    $('.brand-text').hide().eq(nowIndex).show()
  })
  // 职业装
  $('.suit-title,.suit-img').click(function () {
    window.location.href = 'suitList.html'
  })
  // 私人定制图片
  $('.business-img-big').click(function () {
    window.location.href = "tailor.html"
  })
})