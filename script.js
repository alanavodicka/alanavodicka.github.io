function aboutMe(){
      let aboutMeP = document.getElementById("aboutMeP");
      let moreMe = document.getElementById("moreMe");
     
            if(aboutMeP.classList.contains("hidden")){
                  moreMe.innerHTML = "See Less...";
                  aboutMeP.classList.remove("hidden");
            }
            else{
                  moreMe.innerHTML = "See More...";
                  aboutMeP.classList.add("hidden");
            }
      }
     
function careerPlans(){
      let careerP = document.getElementById("careerP");
      let moreCareer = document.getElementById("moreCareer");
     
            if(careerP.classList.contains("hidden")){
                  moreCareer.innerHTML = "See Less...";
                  careerP.classList.remove("hidden");
            }
            else{
                  moreCareer.innerHTML = "See More...";
                  careerP.classList.add("hidden");
            }
      }

     
function checkAnswers(){
      let q1Ans = document.getElementById("q1").value;
      let q2Ans = document.getElementById("q2").value;
      let q3Ans = document.getElementById("q3").value;
      let q4Ans = document.getElementById("q4").value;
      
      let pOne = document.getElementById("one");
      let pTwo = document.getElementById("two");
      let pThree = document.getElementById("three");
      let pFour = document.getElementById("four");
      
      let scoreP = document.getElementById("score");
      
      let result = document.getElementById("result");
      
      result.classList.remove("hidden");
      
      var count = 0;
      
      if(q1Ans == "Cascading Style Sheets"){
            pOne.innerHTML = "Question 1 - correct";
            count ++;
      }
      else{
            pOne.innerHTML = "Question 1 - incorrect";
      }
      if(q2Ans == ";"){
            pTwo.innerHTML = "Question 2 - correct";
            count ++;
      }
      else{
            pTwo.innerHTML = "Question 2 - incorrect";
      }
      if(q3Ans == "let"){
            pThree.innerHTML = "Question 3 - correct";
            count ++;
      }
      else{
            pThree.innerHTML = "Question 3 - incorrect";
      }
      if(q4Ans == "< >"){
            pFour.innerHTML = "Question 4 - correct";
            count ++;
      }
      else{
            pFour.innerHTML = "Question 4 - incorrect";
      }
      
      
      scoreP.innerHTML = "Score: " + count + "/4";
      
      
}


setInterval(changeSlide, 10000);

function changeSlide(){
      let slide1 = document.getElementById("slideshow1");
      let slide2 = document.getElementById("slideshow2");
      let slide3 = document.getElementById("slideshow3");
      let slide4 = document.getElementById("slideshow4");
      let slide5 = document.getElementById("slideshow5");
      
      if(slide2.classList.contains("hidden") && slide3.classList.contains("hidden") && slide4.classList.contains("hidden") && slide5.classList.contains("hidden")){
            slide1.classList.add("hidden");
            slide1.classList.remove("slideshow");
            slide2.classList.remove("hidden");
            slide2.classList.add("slideshow");
      }
      else if(slide1.classList.contains("hidden")&& slide3.classList.contains("hidden") && slide4.classList.contains("hidden") && slide5.classList.contains("hidden")){
            slide2.classList.add("hidden");
            slide2.classList.remove("slideshow");
            slide3.classList.remove("hidden");
            slide3.classList.add("slideshow");
      }
      else if(slide1.classList.contains("hidden") && slide2.classList.contains("hidden") && slide4.classList.contains("hidden") && slide5.classList.contains("hidden")){
            slide3.classList.add("hidden");
            slide3.classList.remove("slideshow");
            slide4.classList.remove("hidden");
            slide4.classList.add("slideshow");
      }
      else if(slide1.classList.contains("hidden") && slide2.classList.contains("hidden") && slide3.classList.contains("hidden") && slide5.classList.contains("hidden")){
            slide4.classList.add("hidden");
            slide4.classList.remove("slideshow");
            slide5.classList.remove("hidden");
            slide5.classList.add("slideshow");
      }
      else{
            slide5.classList.add("hidden");
            slide5.classList.remove("slideshow");
            slide1.classList.remove("hidden");
            slide1.classList.add("slideshow");
      }
}