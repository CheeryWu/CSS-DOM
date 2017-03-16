/**
 * Created by Christy on 2017/3/16.
 */
function prepareSlideshow() {

  // 确保浏览器支持DOM方法
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  // 确保元素存在
  if (!document.getElementById("linklist")) return false;
  //创建div元素
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  var preview = document.createElement("img");
  preview.setAttribute("src","images/topics.gif");
  preview.setAttribute("alt","building blocks of web design");
  preview.setAttribute("id","preview");
  slideshow.appendChild(preview);
  var list = document.getElementById("linklist");
  insertAfter(slideshow,list);
  // 取得列表中的所有链接
  var links = list.getElementsByTagName("a");
  // 为onmouseover事件添加动画效果
  links[0].onmouseover = function () {
    moveElement("preview",-215,0,10);
  };
  links[1].onmouseover = function () {
    moveElement("preview", -430, 0, 10);
  };
  links[2].onmouseover = function () {
    moveElement("preview", -645, 0, 10);
  };

}
addLoadEvent(prepareSlideshow);