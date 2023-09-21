function myfunc() {
  let q1 = document.getElementsByName("Question1");
  let q1Value;
  let totalPoints = 0;
  let comment;

  for (let i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      q1Value = q1[i].value;
      break;
    }
  }

  let q2 = document.getElementsByName("Question2");
  let q2Value;

  for (let i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      q2Value = q2[i].value;
      break;
    }
  }
  let q3 = document.getElementsByName("Question3");
  let q3Value;

  for (let i = 0; i < q3.length; i++) {
    if (q3[i].checked) {
      q3Value = q3[i].value;
      break;
    }
  }

  let q4 = document.getElementsByName("Question4");
  let q4Value;

  for (let i = 0; i < q4.length; i++) {
    if (q4[i].checked) {
      q4Value = q4[i].value;
      break;
    }
  }

  let q5 = document.getElementsByName("Question5");
  let q5Value;

  for (let i = 0; i < q5.length; i++) {
    if (q5[i].checked) {
      q5Value = q5[i].value;
      break;
    }
  }

  if (q1Value === "Paris") {
    document.getElementById("points1").innerHTML = "<b>1 Point  Correct!</b>";
    totalPoints += 1;
  } else {
    document.getElementById("points1").innerHTML =
      "<b>0 Point  Incorrect Answer</b>";
  }

  if (q2Value === "George Orwell") {
    document.getElementById("points2").innerHTML = "<b>1 Point  Correct!</b>";
    totalPoints += 1;
  } else {
    document.getElementById("points2").innerHTML =
      "<b>0 Point  Incorrect Answer</b>";
  }

  if (q3Value === "Bill Gates") {
    document.getElementById("points3").innerHTML = "<b>1 Point  Correct!</b>";
    totalPoints += 1;
  } else {
    document.getElementById("points3").innerHTML =
      "<b>0 Point  Incorrect Answer</b>";
  }

  if (q4Value === "Mount Everest") {
    document.getElementById("points4").innerHTML = "<b>1 Point  Correct!</b>";
    totalPoints += 1;
  } else {
    document.getElementById("points4").innerHTML =
      "<b>0 Point  Incorrect Answer</b>";
  }

  if (q5Value === "Yen") {
    document.getElementById("points5").innerHTML = "<b>1 Point  Correct!</b>";
    totalPoints += 1;
  } else {
    document.getElementById("points5").innerHTML =
      "<b>0 Point  Incorrect Answer</b>";
  }
  document.getElementById("totalpt").innerHTML = totalPoints;
  if (totalPoints >= 3) {
    document.getElementById("comment").innerHTML = "Great Job!";
  } else {
    document.getElementById("comment").innerHTML = "You can do better";
  }
}
