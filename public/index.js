$(function () {
  console.log("Jquery loaded succcesfuly");
  let title = $("#title").val();
  $("#gen").on("click", function () {
    $.ajax({
        type: "POST",
        url: '/download',
        data: {name: 'geoff'},

      });
  });
});
