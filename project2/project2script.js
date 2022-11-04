for (let i = date_diff-date_diff; i<= date_diff+1; i++) {
    $("#image" + i).css("display", "block");
}

//eye-icon and change opacity to 0%

var isVisible = true;
function myScript() {
    if (isVisible == true) {
    $("#title").css("display", "none");
    }
    else {
    $("#title").css("display", "block");
    }
    isVisible = !isVisible;
    //x.classList.toggle("eye-icon2");
}

//change eye button after it's been clicked

function myClick(x) {
    x.classList.toggle("eye-icon2");
  }

//2 images- 1 with display none and display block