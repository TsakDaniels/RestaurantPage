

export function createTokyoTab() {
  const tabDiv = document.querySelector("#tab-contents");
  
  let div2 = document.createElement("div");
  div2.style.cssText =
  "position:absolute;margin-top:50px;margin-left:80px;background-color:orange;width:400px;height:200px;border:3px solid black;";

  div2.classList.add("tabcontent");
  div2.id = "Tokyo";

  let h3 = document.createElement("h3");
  h3.innerHTML = "Contacts";
  div2.appendChild(h3);

  let p = document.createElement("p");
  p.innerHTML = "Contact us";
  div2.appendChild(p);

  tabDiv.appendChild(div2);
}