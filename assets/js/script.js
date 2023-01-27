var option1Btn = $(".option-1-btn");
var option2Btn = $(".option-2-btn");
var option3Btn = $(".option-3-btn");
var option1Content = $(".option-1-content");
var option2Content = $(".option-2-content");
var option3Content = $(".option-3-content");

option1Btn.click(function () {
  unhide(option1Content);
  hide(option2Content);
  hide(option3Content);

  clicked(option1Btn);
  unClicked(option2Btn);
  unClicked(option3Btn);
});

option2Btn.click(function () {
  unhide(option2Content);
  hide(option1Content);
  hide(option3Content);

  clicked(option2Btn);
  unClicked(option1Btn);
  unClicked(option3Btn);
});

option3Btn.click(function () {
  unhide(option3Content);
  hide(option2Content);
  hide(option1Content);

  clicked(option3Btn);
  unClicked(option2Btn);
  unClicked(option1Btn);
});

function unhide(option) {
  if (option.hasClass("hidden")) option.removeClass("hidden");
}

function hide(option) {
  if (!option.hasClass("hidden")) option.addClass("hidden");
}

function clicked(btn) {
  if (!btn.hasClass("clicked")) btn.addClass("clicked");
}

function unClicked(btn) {
  if (btn.hasClass("clicked")) btn.removeClass("clicked");
}
