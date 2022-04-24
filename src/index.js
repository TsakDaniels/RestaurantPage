{
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
}

export function createButtonsInsideTabs() {
  const tabDiv = document.querySelector("#tab-contents");

  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");

  btn1.innerHTML = "London";
  btn2.innerHTML = "Tokyo";

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
