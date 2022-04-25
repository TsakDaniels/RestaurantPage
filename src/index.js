
  /* <button class="tablinks" onclick="openCity(event, 'London')">London</button>
    <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
    <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>

  <div id="London" class="tabcontent">
    <h3>London</h3>
    <p>London is the capital city of England.</p>
  </div>
  
  <div id="Paris" class="tabcontent">
    <h3>Paris</h3>
    <p>Paris is the capital of France.</p> 
  </div>
  
  <div id="Tokyo" class="tabcontent">
    <h3>Tokyo</h3>
    <p>Tokyo is the capital of Japan.</p>
  </div> */



export function createButtonsInsideTabs() {
  const tabDiv = document.querySelector("#tab-contents");

  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");

  btn1.innerHTML = "Menu";
  btn2.innerHTML = "Contact";

  btn1.addEventListener("click", function (event) {
    openCity(event, "London");
  });
  btn2.addEventListener("click", function (event) {
    openCity(event, "Tokyo");
  });

  btn1.classList.add("tablinks");
  btn2.classList.add("tablinks");

  tabDiv.appendChild(btn1);
  tabDiv.appendChild(btn2);

  
let header = document.createElement("h1")
header.style.cssText = "text-align:center; color:white; font-size:45px"
header.append("Restaurant")
document.body.appendChild(header)


const para = document.createElement("p");
para.style.cssText = "text-align:center; color:white; font-size:20px"
para.innerText = "Not the greatest restaurant page, i know. :( :(";
document.body.appendChild(para);
}



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// import {createButtonsInsideTabs} from '../src/index.js'
