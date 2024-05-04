import data from  './data.json' with { type: 'json' };

const textArea = document.getElementsByTagName("textarea")[0];
const wrapperUpper = document.getElementById("wrapper-upper");
const preview = document.getElementById("preview");
const close = document.getElementById("close");
const open = document.getElementById("open");
const sidebar = document.getElementById("sidebar");
const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
const showP = document.getElementById("showP");
const hideP = document.getElementById("hideP");
const pmain = document.getElementById("preview-main");
const saveBtn = document.getElementById("save");
const markdown = document.getElementById("markdown");
const innerContent = document.getElementById("inner-content");
const checkedStatus = document.getElementById("check");
const ndoc = document.getElementById("ndoc");
const con = document.getElementById("content");
const textMarkDown = Array.from(
  document.getElementsByClassName("text-markdown")
);

saveBtn.addEventListener("click", (e) => {
  let words = textArea.value.split("\n");
  if (innerContent.children.length == 1) {
    innerContent.removeChild(Array.from(innerContent.children)[0]);
  }
  let wordsContainer = document.createElement("div");
  wordsContainer.setAttribute("class", "word-container");
  for (const word of words) {
    if (word != "") {
      let div = document.createElement("div");
      if (word[0] == "#" && word[1] !== "#") {
        div.style.font = "2.5rem bold Roboto";
        div.style.paddingBottom = "10px";
        div.innerText = word.slice(1);
      } else if (word[0] == "#" && word[1] == "#" && word[2] != "#") {
        div.style.font = "1.75rem Roboto lighter";
        div.style.paddingBottom = "10px";
        div.innerText = word.slice(2);
      } else if (word[0] == "#" && word[1] == "#" && word[2] == "#" && word[3] != "#") {
        div.style.font = " 1.5rem Roboto lighter";
        div.style.padding = "20px 0";
        div.innerText = word.slice(3);
      }
      else if (word[0] == "#" && word[1] == "#" && word[2] == "#" && word[3] == "#" && word[4] != '#') {
        div.style.font = " 1.35rem Roboto lighter";
        div.style.padding = "20px 0";
        div.innerText = word.slice(4);
      } else if (word[0] == "#" && word[1] == "#" && word[2] == "#" && word[3] == "#" && word[4] == '#' && word[5] != '#') {
        div.style.font = " 1.25rem Roboto lighter";
        div.style.padding = "20px 0";
        div.innerText = word.slice(5);
      }
      else if (word[0] == "#" && word[1] == "#" && word[2] == "#" && word[3] == "#" && word[4] == '#' && word[5] == '#') {
        div.style.font = " 1rem Roboto lighter";
        div.style.padding = "20px 0";
        div.style.color = '#E46643';
        div.innerText = word.slice(6);
      }
       else if (/[0-9]/.test(word[0])) {
        div.style.padding = "2px 20px";
        div.style.font = "300 .95rem Roboto ";
        div.innerText = word;
      } else if (word[0] == '-') {
        div.style.padding = "0px 30px" ;
        div.setAttribute('class','bullet')
        div.innerText = word.slice(1);
      }
      // else if (word.includes('`')) {
      //   let span = document.createElement('span');
      //   let count = 0
      //   let m = ''
      //   for(let i=0;i<word.length;i++){
      //     if(word[i] == '`' ){
      //       count++
      //       m += word[i+1]
      //     }
      //     if(count % 2 == 0){
      //       span.style.fontWeight = 'bolder'
      //       span.innerText = m
      //       div.appendChild(span)
      //       continue
      //     }
      //   }
      //   div.style.padding = "0px 30px" ;
      //   div.innerText = word.slice(1);
      // }
      else if (word.startsWith(">")) {
        let bq = document.createElement("blockquote");
        bq.innerText = word.slice(1);
        div.append(bq);
      } else {
        div.style.padding = "10px 0";
        div.innerText = word;
      }
      wordsContainer.appendChild(div);
    }
  }
  innerContent.appendChild(wordsContainer);
});

close.addEventListener("click", (e) => {
  const width = sidebar.getBoundingClientRect().width;
  sidebar.style.left = `-${width}px`;
  main.style.marginLeft = 0;
  header.style.marginLeft = 0;
  close.classList.add("d-none");
  open.classList.remove("d-none");
});

open.addEventListener("click", (e) => {
  const width = sidebar.getBoundingClientRect().width;
  sidebar.style.left = `0`;
  main.style.marginLeft = `${width}px`;
  header.style.marginLeft = `${width}px`;
  open.classList.add("d-none");
  close.classList.remove("d-none");
});

showP.addEventListener("click", () => {
  showP.classList.add("d-none");
  hideP.classList.remove("d-none");
  pmain.style.flexBasis = "100%";
  preview.style.display = "flex";
  preview.style.justifyContent = "center";
  markdown.style.display = "none";
  innerContent.style.width = "50%";
});
hideP.addEventListener("click", () => {
  hideP.classList.add("d-none");
  showP.classList.remove("d-none");
  pmain.style.flexBasis = "50%";
  markdown.style.flexBasis = "50%";
  markdown.style.display = "unset";
  preview.style.display = "block";
  innerContent.style.width = "unset";
});

ndoc.addEventListener("click", () => {
  let obj = {
    parentclassName: "parentWrapper",
    childclassName: "childWrapper",
  };
  if (wrapperUpper.children.length == 2) {
    const ul = document.createElement("ul");
    wrapperUpper.appendChild(ul);
  }
  if (wrapperUpper.children.length > 2) {
    const li = document.createElement("li");
    li.setAttribute("contenteditable", true);
    li.innerText = "new document";
    let n = Array.from(wrapperUpper.children);
    n.find((el) => el.nodeName == "UL").appendChild(li);
  }
});

function randomSeq(num) {
  let result = "";
  let alph = "abcdefghijklmnopqrstuvwxyz123456789&!@#$";
  for (let i = 0; i < num; i++) {
    result += alph[Math.floor(Math.random() * alph.length)];
  }
  return result;
}

function createModal(content) {
  let parentWrapper = document.createElement("div");
  let { parentclassName, childclassName } = content;
  parentWrapper.setAttribute("class", parentclassName);
  let child = document.createElement("div");
  child.setAttribute("class", childclassName);
  parentWrapper.appendChild(child);

  document.body.append(parentWrapper);
}

checkedStatus.addEventListener("change", (e) => {
  if (checkedStatus.checked) {
    preview.style.backgroundColor = "#151619";
    textArea.style.backgroundColor = "#151619";
    preview.style.color = "#FFF";
    textArea.style.color = "#FFF";
    textMarkDown.forEach((el) => {
      el.style.backgroundColor = "#1d1f22";
      el.style.color = "white";
    });
  } else {
    preview.style.backgroundColor = "#FFF";
    textArea.style.backgroundColor = "#FFF";
    preview.style.color = "#000";
    textArea.style.color = "#000";
    textMarkDown.forEach((el) => {
      el.style.backgroundColor = "#F5F5F5";
      el.style.color = "black";
    });
  }
});
window.addEventListener("click", (e) => {
  if (e.target.className == "parentWrapper") {
    document.body.removeChild(e.target);
  }
});

if (window.innerWidth <= 700) {
  document.getElementById("savechanges").style.display = "none";
}


window.onload = ()=>{
  textArea.innerHTML = data[1].content.split(',').map(el => `${el}`)
}