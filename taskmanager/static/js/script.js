document.addEventListener("DOMContentLoaded", function () {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  // datepicker initialization
  var datepicker = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: { done: "Select" },
  });

  // select initialization
  var selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  // collapsible initialization
  var collapsible = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsible);
});
