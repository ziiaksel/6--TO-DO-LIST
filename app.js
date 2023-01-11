const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");
container.addEventListener("click", (eo) => {

  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    case "icon-check icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart">   </span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      eo.target.classList.add("dn");

      const addAngry = `
<span class="icon-check icon"> </span>
`;

      eo.target.parentElement.innerHTML += addAngry;
      break;

    case "icon-star icon":
      eo.target.classList.add("orange");

      container.prepend(eo.target.parentElement);
      break;

    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;
 
  }
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `   
  
  <div class="task">
  <span class="icon-star icon"> </span>
  <p lang="ar"  class="task-text">      ${input.value}     </p>

  <div>
    <span class="icon-trash icon"> </span>

    <span class="icon-check icon"> </span>
  </div>

 </div>`;

  container.innerHTML += task;

  input.value = "";
});



// ----------
// RANDOM QUOTES 
// ----------
const btnGenerate = document.getElementById("generate-button");
// const btnq= document.querySelectorAll(button)
console.log(btnGenerate);
let i=0;
const quoteWrapper =document.getElementsByClassName("blockquote-wrapper")[0];
//  when click on button 
 btnGenerate.addEventListener("click",(eo) => {
//  let btnq= eo.target.parentElement.getElementsByClassName("") ;
  

console.log("OK");

const quotesArr =[
  `  <div class="blockquote anim">
  <h1>
  Whatever the mind of man can conceive and believe, it can achieve.
   </h1>
  <div class="box-buttom">
    <h4>&mdash;Albert Einstein</h4>
  </div> 

</div>

  `,
  `  <div class="blockquote anim">
  <h1>
    You miss 100% of the shots you don’t take ,
   </h1>
  <div class="box-buttom">
    <h4>&mdash;Wayne Gretzky</h4>
  </div>

</div>
  `,
  `  <div class="blockquote anim">
  <h1>
  I attribute my success to this: I never gave or took any excuse.
   </h1>
  <div class="box-buttom">
    <h4>&mdash;Florence Nightingale</h4>
  </div>

</div>
  `,
  `  <div class="blockquote anim">
  <h1>
  The most difficult thing is the decision to act, the rest is merely tenacity.
  </h1>
  <div class="box-buttom">
  <h4>&mdash; Amelia Earhart</h4>
  </div>

</div>
  `
];
quoteWrapper.innerHTML= quotesArr[i];
i++;
if (i==quotesArr.length) {
  i=0;
}
 });