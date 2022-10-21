var checkBox = document.getElementById("myCheck");
var text = document.getElementById("text");
var img = document.getElementById("img");
var images = ["https://guardian.ng/wp-content/uploads/2022/07/World-population.jpg", "https://media.istockphoto.com/photos/the-first-sunlight-of-planet-earth-picture-id174771982?k=20&m=174771982&s=170667a&w=0&h=KX4TDfefWSA74l_3oTm_vCxeP8V9fwbC1Mb4jRr30yo="]
    
  function myFunction() {
    console.log(checkBox);
    if (checkBox.checked == true){
      console.log("yes");
      text.style.display = "block";
      document.getElementById("img").style.backgroundImage = 'url("' + images[0] + '")';
      
    } else {
      console.log("no");
       text.style.display = "none";
    }
  }
  
  function displayImage(x) {
    if (checkBox.checked = true){
      document.getElementById("img").style.backgroundImage = 'url("' + images[0] + '")';
      img.style.backgroundImage = "url(" + images[x] + ")";
      img.innerText = images[x];
    } else {
      document.getElementById("img").style.backgroundImage = 'url("' + images[1] + '")';
    }
  }