

export function createTokyoTab() {
  const tabDiv = document.querySelector("#tab-contents");
  
  let div2 = document.createElement("div");
  div2.style.cssText =
    "position:absolute;margin-left:50%;width:400px;height:200px;background:#FFB6C1;border:3px solid black;";

  div2.classList.add("tabcontent");
  div2.id = "Tokyo";

  let h3 = document.createElement("h3");
  h3.innerHTML = "Menu";
  div2.appendChild(h3);

  let p = document.createElement("p");
  p.innerHTML = "About the Menu";
  div2.appendChild(p);

  tabDiv.appendChild(div2);
}