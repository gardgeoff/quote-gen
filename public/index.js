$(function () {
  console.log("Jquery loaded succcesfuly");

  $("#gen").on("click", function () {
    let title = $("#title").val();
    $.post("/download", { title }).done(() => {
      window.location.href = "/req";
    });
  });
});
