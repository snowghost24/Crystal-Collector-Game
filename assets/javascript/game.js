$(document).ready(function () {
   var lgNumb = "";
   var smNumb = "";
   var smNumbArray = [];
   var sumTotalArray = [];
   var wins = "";
   var loses = "";

   function lgNumbGen() {
      lgNumb = Math.floor(Math.random() * 101) + 19;
      console.log(lgNumb);
      document.querySelector(".lg-rand").innerHTML = lgNumb;
   }

   function numbGenCaller() {
      function smNumbGen() {
         smNumb = Math.ceil(Math.random() * 12);
         console.log(smNumb);
         smNumbArray.push("+" + smNumb);
      }
      smNumbGen();
      smNumbGen();
      smNumbGen();
      smNumbGen();
   }

   lgNumbGen();
   numbGenCaller();

   console.log(smNumbArray);

   function resetValues() {
      smNumbArray = [];
      sumTotalArray = [];
      document.querySelector(".sm-rand").innerHTML = 0;
   }


   $(".crystal-btn").on("click", function () {
      // console.log($(this).attr("class"));
      if ($(this).attr("class") == "flip3D btn1 crystal-btn") {
         sumTotalArray.push(smNumbArray[0]);
      }

      if ($(this).attr("class") == "flip3D btn2 crystal-btn") {
         sumTotalArray.push(smNumbArray[1]);
      }

      if ($(this).attr("class") == "flip3D btn3 crystal-btn") {
         sumTotalArray.push(smNumbArray[2]);
      }
      if ($(this).attr("class") == "flip3D btn4 crystal-btn") {
         sumTotalArray.push(smNumbArray[3]);

      }
      var sumTotalArrayJoined = sumTotalArray.join("")


      var sumTotalJoinedEval = eval(sumTotalArray.join(""));


      console.log(sumTotalJoinedEval);
      document.querySelector(".sm-rand").innerHTML = sumTotalJoinedEval;

      if (lgNumb == sumTotalJoinedEval && sumTotalJoinedEval != "") {
         console.log("We Won");
         wins++;
         $("#win-count").html(wins);
         console.log(wins);
         resetValues();
         lgNumbGen();
         numbGenCaller();
         console.log(smNumbArray);
      }

      if (lgNumb < sumTotalJoinedEval) {
         console.log("Sorry but you lost");
         loses++;
         $("#loss-count").html(loses);
         console.log(loses);
         resetValues();
         lgNumbGen();
         numbGenCaller();
      }
   });
});