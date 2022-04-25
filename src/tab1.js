
export function createLondonTab() {
  const tabDiv = document.querySelector("#tab-contents");
  
  let div1 = document.createElement("div");
  div1.style.cssText =
    "position:absolute;margin-top:50px;background-color:orange;width:400px;height:200px;border:3px solid black;";

  div1.classList.add("tabcontent");
  div1.id = "London";

  let h3 = document.createElement("h3");
  h3.innerHTML = "Menu";
  div1.appendChild(h3);

  let p = document.createElement("p");
  p.innerHTML = "About the Menu";
  div1.appendChild(p);

  tabDiv.appendChild(div1);
}