$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var unanswered = 0;
  var number = 31;

  var audioElement = document.createElement("audio");
   audioElement.setAttribute("src", "macarena.mp3");

  
    //
    $("#magical").on("click", function() {
      audioElement.play();
      //when you click on the cat button button, it'll run this function
      //event caller, cat button in dom, click it
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=90s";

      //(where information is being pulled from- it is pulling from random in the url)
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //feth URL
      //AJAX is calling the giphy API to return the JSON object 
      //new function to process response
      .done(function(response) {

        //done is returning the url object 
        //setting a variable for image URL from ajax
        var imageUrl = response.data.image_original_url;

        //setting a jQuery element to image HTML
        var timeImage = $("<img>");

        //setting the image url to the src of img, and then alt text is "cat image"
        timeImage.attr("src", imageUrl);
        timeImage.attr("alt", "time image");

        //adding our new image to the images div, along existing images there. 
        $("#images").prepend(timeImage);
      });
    });
  

      function tally() {
            stop();
    
            var radioValueone = $("input[name='ans']:checked").val();
            console.log(radioValueone);
            if(radioValueone=="lance bass"){
              wins++;
              console.log(wins);
            } else if(radioValueone=="aj mclean"){
              losses++;
              console.log(losses);
            } else if(radioValueone=="nick carter"){
              losses++;
              console.log(losses);
            } else if(radioValueone=="kevin richardson"){
              losses++;
            }
            var radioValuetwo = $("input[name='anstwo']:checked").val();
            if(radioValuetwo=="cabbage patch kids"){
              wins++;
              console.log(wins);
            } else if(radioValuetwo=="oj simpson"){
              losses++;
              console.log(losses);
            } else if(radioValuetwo=="tonya harding"){
              losses++;
              console.log(losses);
            } else if(radioValuetwo=="the gulf war"){
              losses++;
              console.log(losses);
            }
            var radioValuethree = $("input[name='ansthree']:checked").val();
            if(radioValuethree=="gladiator"){
              wins++;
              console.log(wins);

            } else if(radioValuethree=="clueless"){
              losses++;
              console.log(losses);
            } else if(radioValuethree=="jurassic park"){
              losses++;
              console.log(losses);
            } else if(radioValuethree=="home alone"){
              losses++;
              console.log(losses);
            }
            var radioValuefour= $("input[name='ansfour']:checked").val();
            if (radioValuefour=="tie-dye"){
              wins++;
              console.log(wins);
            } else if(radioValuefour=="vests"){
              losses++;
              console.log(losses);
            } else if(radioValuefour=="tamagotchi"){
              losses++;
              console.log(losses);
            } else if(radioValuefour=="aol"){
              losses++;
              console.log(losses);
            }

    $(".responsediv").html("All Done!");
    $(".winsdiv").html("Wins: " + wins);
    $(".lossesdiv").html("Losses: " + losses);
    $(".unanswereddiv").html("Unanswered: " + (4-(wins + losses)))
  };


  $(".intro").hide();
  $(".responsediv").hide();

  $("#Start").click(function(){
    $(".intro").show();
    $(".responsediv").show();
    $("#Start").hide();
    run();
    if (number === 0) {
        //  ...run the stop function.
        stop();
        tally();
        };
  });
//   <div id = "anchor-div">
//       <ul>
//         <li> <a id="about-anchor" href="javascript:;"> About</a> </li> 
//         <li> <a id="help-anchor" href="javascript:;> Help </a> </li>
//       </ul>
// </div>


// <div id="content-div">
//        <div id="about-content"></div>
//        <div id="help-content"></div>
// </div>
// $(document).ready(function(){

//         //if you wish to keep both the divs hidden by default then dont forget to hide //them           
//         $("#help-content").hide();
//         $("#about-content").hide();

//        $("#about-anchor").click(function(){
//              $("#help-content").hide();
//              $("#about-content").show();
//         });

//       $("#help-anchor").click(function(){
//               $("#help-content").show();
//              $("#about-content").hide();
//        });
// });




	$("input[type='button']").click(function(){
            tally();
            
        });
    // var questions =
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 31;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    var losses = 0;

    function reset() {
      number=31;
      // wait=5;
    };
    // callitself();
    //  When the stop button gets clicked, run the stop function.
    // $("#stop").on("click", stop);
    // //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    // function callitself () {
    //   for (var i=0; i<questions.length; i++) {
    //   $("#question").html(questions[i].question);
    //   console.log(questions[i].question);
    //   $("#answer-one").html(questions[i].answerone);
    //   console.log(questions[i].answerone);
    //   $("#answer-two").html(questions[i].answertwo);
    //   console.log(questions[i].answertwo);
    //   $("#answer-three").html(questions[i].answerthree);
    //   console.log(questions[i].answerthree);
    //   $("#answer-four").html(questions[i].answerfour);
    //   console.log(questions[i].answerfour);
    //   console.log(questions[i].correctanswer);
    //   var correctthing = questions[i].correctanswer;
    //   console.log(correctthing);
    //   // window.onload = function() {
    // $(".whoa").on("click", function() {
    //   var html = $(this).html();
    //   console.log(html);
    //   if (html === correctthing) {
    //     $('#answerdialog').html('<h2>' + "Correct Answer!" + '</h2>');
         
    //       reset();
          
        

      // } else {
      //   $('#answerdialog').html('<h2>' + "Incorrect Answer Sucker!" + '</h2>');
      //   $('#question').html('The correct answer is  ' + correctthing);
      //   // console.log(questions[i].correctanswer);
      //   $('#answer-one').empty();
      //   $('#answer-two').empty();
      //   $('#answer-three').empty();
      //   $('#answer-four').empty();
      //   reset();
        
      // };
     // });
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
      // reset();

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
        tally();
        };
        // $('#question').html('The correct answer is  ' + questionfour.correctanswer);
        
        // $('#answerdialog').html('<h2>' + "Time is up!" + '</h2>');
        // $('#question').html('The correct answer is  ' + correctthing);
        // // console.log(questions[i].correctanswer);
        // $('#answer-one').empty();
        // $('#answer-two').empty();
        // $('#answer-three').empty();
        // $('#answer-four').empty();
        // reset();
        // callitself();

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
      });
    
