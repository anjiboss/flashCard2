let curNum = 2;
let front = true;
const card = $(".flash-card");
let words;

async function changeLevel(level) {
  if (level !== "Choose level") {
    res = await fetch("../kanjiJson/" + level + ".json");
    data = await res.json();

    words = data;
    console.log(data);
    $("#word").html(`<p>${curNum} / ${data.length}</>`);
    showTheWord(data, curNum, front);
  }
}

function showTheWord(words, curNum, front) {
  if (front) {
    card.html('<p class="normal-p">' + words[curNum].kanji + "</p>");
  } else {
    card.html(`<p class="rotated-p">${words[curNum].hanViet}</p>`);
  }
}

$("#left").click(() => {
  console.log("in1");
  if (curNum > 1) {
    curNum--;
  }
  $("#word").html(`<p>${curNum} / ${words.length}</>`);
  showTheWord(words, curNum, front);
});

$("#right").click(() => {
  console.log("in2");
  if (curNum <= words.length) {
    curNum++;
  }
  $("#word").html(`<p>${curNum} / ${words.length}</>`);
  showTheWord(words, curNum, front);
});

$(".flash-card").click(() => {
  if (words != undefined) {
    if (front) {
      $(".flash-card").css("transform", "rotateX(180deg)");
    } else {
      $(".flash-card").css("transform", "rotateX(360deg)");
    }
    front = !front;
    card.html("");
    setTimeout(() => {
      showTheWord(words, curNum, front);
    }, 500);
  }
});
