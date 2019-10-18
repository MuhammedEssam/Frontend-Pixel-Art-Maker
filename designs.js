// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(event => {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
});
function makeGrid(height, width) {
  // Your code goes here!
  $("tr").remove();
  for (var i = 1; i <= height; i++) {
    $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
    for (var j = 1; j <= width; j++) {
      $("#table" + i).append("<td></td>");
    }
  }
  //set the color
  $("td").click(function addcolor() {
    color = $("#colorPicker").val();
    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}
