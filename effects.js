$(document).ready(function() {
  var box = $("#box");

  $("#show").hide();

  $("#show").click(function() {
    $(this).hide();
    $("#hide").show();

    box.show("fast"); // makes the effect visible at fast speed, there is also normal and slow
  });
  $("#hide").click(function() {
    $(this).hide();
    $("#show").show();

    box.hide("slow", function() {
      console.log("Box hidden"); //We can add a function as a second parameter, in this case to know when all the stages has been hidden
    }); // makes the effect visible at slow speed
  });

  //fadeIn and fadeOut are also functions that create similar effects.
  //fadeTo goes from one state to another one. We have to give two parameters: fadeTo("slow", 0). The second parameter is the opacity, is from 0 to 1 with decimals.

  $("#hideandshow").click(function() {
    box.toggle("fast"); //Toggle is having a show and hide button in one, it´s a function that does both things depending on the current state of the object.
    //It´s also possible to have fadeToggle.
    //As property of toggle, we can also have slideDown and slideUp.
  });

  $("#animate").click(function() {
    box
      .animate(
        {
          borderRadius: "100px",
          marginLeft: "300px",
          fontSize: "50px",
          height: "100px" //auto doesn´t work.  Animate allows you to create your own animations. The animation has to go inside a JSON object {}
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginTop: "150px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginLeft: "0px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginTop: "0px"
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "100px",
          marginLeft: "300px",
          fontSize: "50px",
          height: "100px" //auto doesn´t work.  Animate allows you to create your own animations. The animation has to go inside a JSON object {}
        },
        "slow"
      );
  });
});
