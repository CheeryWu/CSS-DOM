/**
 * Created by Christy on 2017/3/16.
 */
function positionMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.top = "50px";
  elem.style.left = "100px";
}
addLoadEvent(positionMessage);