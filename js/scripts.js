$(document).ready(function() {
  $("button#Dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});

$(document).ready(function() {
  $("button#Light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
