var timeDisplayEl = $('#currentDay');
var hour = dayjs().format('HH');


$(function () {

  $(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var events = $(this).parents().attr("id");
    localStorage.setItem(events, text);
  });


  $("#9").children(".description").val(localStorage.getItem("9"));
  $("#10").children(".description").val(localStorage.getItem("10"));
  $("#11").children(".description").val(localStorage.getItem("11"));
  $("#12").children(".description").val(localStorage.getItem("12"));
  $("#13").children(".description").val(localStorage.getItem("13"));
  $("#14").children(".description").val(localStorage.getItem("14"));
  $("#15").children(".description").val(localStorage.getItem("15"));
  $("#16").children(".description").val(localStorage.getItem("16"));
  $("#17").children(".description").val(localStorage.getItem("17"));


  function hourTracker(){

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));
      hour = parseInt(hour);

      if (hour > blockHour) {
        $(this).addClass("past");
      } else if (hour < blockHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present")
      }
    })
  }

  
  function displayTime() {
    var now = dayjs().format('dddd, MMMM D');
    timeDisplayEl.text(now);
  }


 displayTime() 
 hourTracker();
});

