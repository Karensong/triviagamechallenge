$(document).ready(function() {

	var questionone = {
      question: "Which of these is not a 90s trend?",
      answerone: "Vests",
      answertwo: "Tamagotchi Pets",
      answerthree: "AOL",
      answerfour: "Tie-dye shirts",
      correctanswer: "Tie-dye shirts",
    };
    var questiontwo = {
      question: "What did not happen in the 90s?",
      answerone: "OJ Simpson trial",
      answertwo: "Tonya Harding's Feud with Nancy Kerrigan",
      answerthree: "Cabbage Patch Kids Craze",
      answerfour: "The Gulf War",
      correctanswer: "Cabbage Patch Kids Craze",
    };
    var questionthree = {
      question: "Which of these is not a 90s movie?",
      answerone: "Clueless",
      answertwo: "Jurassic Park",
      answerthree: "Home Alone",
      answerfour: "Gladiator",
      correctanswer: "Gladiator",
    };
    var questionfour = {
      question: "Who was NOT a part of the Backstreet Boys?",
      answerone: "AJ McLean",
      answertwo: "Nick Carter",
      answerthree: "Kevin Richardson",
      answerfour: "Lance Bass",
      correctanswer: "Lance Bass",
    };
    var questions = [questionone, questiontwo, questionthree, questionfour];
    // var questions =
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 30;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    var losses = 0;

    function reset() {
      number=31;
      // wait=5;
    };
    callitself();
    //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);
    // //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function callitself () {
      for (var i=0; i<questions.length; i++) {
      $("#question").html(questions[i].question);
      console.log(questions[i].question);
      $("#answer-one").html(questions[i].answerone);
      console.log(questions[i].answerone);
      $("#answer-two").html(questions[i].answertwo);
      console.log(questions[i].answertwo);
      $("#answer-three").html(questions[i].answerthree);
      console.log(questions[i].answerthree);
      $("#answer-four").html(questions[i].answerfour);
      console.log(questions[i].answerfour);
      console.log(questions[i].correctanswer);
      var correctthing = questions[i].correctanswer;
      console.log(correctthing);
      // window.onload = function() {
    $(".whoa").on("click", function() {
      var html = $(this).html();
      console.log(html);
      if (html === correctthing) {
        $('#answerdialog').html('<h2>' + "Correct Answer!" + '</h2>');
         
          reset();
          
        

      } else {
        $('#answerdialog').html('<h2>' + "Incorrect Answer Sucker!" + '</h2>');
        $('#question').html('The correct answer is  ' + correctthing);
        // console.log(questions[i].correctanswer);
        $('#answer-one').empty();
        $('#answer-two').empty();
        $('#answer-three').empty();
        $('#answer-four').empty();
        reset();
        
      };
     });
    //  $("#answer-two").on("click", answertwofunction());
    //  function answertwofunction() {
    //   if (questions[i].answer === questions[i].correctanswer) {
    //     $('#answerdialog').html('<h2>' + "Correct Answer!" + '</h2>');
    //   } else {
    //     $('#question').html('The correct answer is  ' + correctthing);
    //     // console.log(questions[i].correctanswer);
    //     $('#answer-one').empty();
    //     $('#answer-two').empty();
    //     $('#answer-three').empty();
    //     $('#answer-four').empty();
    //   };
    //  };
    //  var state = $(this).attr("data-state");
    //     // =============================================
    //     if (state == 'still') {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else if (state == 'animate') {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    // $("#answer-two").on("click", stopwatch.stop);
    // $("#answer-three").on("click", stopwatch.reset);
    // $("#answer-four").on("click", stopwatch.start);
    // };
      reset();

      function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      }

    function run() {
      intervalId = setInterval(decrement, 1000);
      function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
        if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        
        losses++;
        console.log(losses);
        // $('#question').html('The correct answer is  ' + questionfour.correctanswer);
        
        $('#answerdialog').html('<h2>' + "Time is up!" + '</h2>');
        $('#question').html('The correct answer is  ' + correctthing);
        // console.log(questions[i].correctanswer);
        $('#answer-one').empty();
        $('#answer-two').empty();
        $('#answer-three').empty();
        $('#answer-four').empty();
        reset();
        callitself();

        // waittime();
        // function waittime() {
        //   intervalWait = setInterval(decrease, 1000);
        // }
        //   function decrease() {
        //   wait--;
        //   if (wait ===0) {
            // callitself();
            };
          };
      };
    };

    run();
    
  };
});
