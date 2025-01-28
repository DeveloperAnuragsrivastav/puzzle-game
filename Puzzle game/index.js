let matchBoxes = [];
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("button");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let img = box.querySelector("img");
    let imgSrc = img.getAttribute("src");

    img.style.display = "block";

    matchBoxes.push({ box, imgSrc });
    if (matchBoxes.length === 2) {
      if (matchBoxes[0].imgSrc === matchBoxes[1].imgSrc) {
        let dis=document.querySelector('.congrats')
        dis.style.display='block';
      } else {
      setTimeout(()=>{
          matchBoxes[0].box.querySelector("img").style.display = "none";
          matchBoxes[1].box.querySelector("img").style.display = "none";
          matchBoxes = [];
        },500)
      }
    }
  });
});

reset.addEventListener('click', () => {
 
  boxes.forEach(box => {
    box.querySelector('img').style.display = 'none';
  });
  
  let dis = document.querySelector('.congrats');
  dis.style.display = 'none';
  
  matchBoxes = [];
});
