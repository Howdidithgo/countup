$(function() {
  $("#form1").submit(function(event) {
    $("#output").text("");
    var counter = parseFloat($("#counter").val());
    var goal = parseFloat($("#goal").val());
    if (counter < 0 || goal < 0) {
      alert("Please enter only positive numbers");
    }else if (counter > goal) {
      alert("Please make sure your counter is less than the goal");
    }else if (!counter || !goal) {
      alert("Please enter numbers");
    }else{
      for (var output = counter; output <= goal; output += counter) {
        $("#output").append(output + ", ");
      }
    }



    event.preventDefault();
  });
});
