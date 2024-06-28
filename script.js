import data from  './data.json' with { type: 'json' };

let newDocs = []
let newDocsLi
const textArea = document.getElementsByTagName("textarea")[0];
const wrapperUpper = document.getElementById("wrapper-upper");
const preview = document.getElementById("preview");
const close = document.getElementById("close");
const open = document.getElementById("open");
const sidebar = document.getElementById("sidebar");
const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
const showPp = document.getElementById("showPp");
const showP = document.getElementById("showP");
const hideP = document.getElementById("hideP");
const pmain = document.getElementById("preview-main");
const saveBtn = document.getElementById("save");
const markdown = document.getElementById("markdown");
const innerContent = document.getElementById("inner-content");
const checkedStatus = document.getElementById("check");
const ndoc = document.getElementById("ndoc");
const con = document.getElementById("content");
let darkMode = false
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
        div.style.padding = "1px 20px";
        div.style.fontFamily = "Roboto";
        div.style.fontSize = ".85rem";
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
        darkMode ? bq.style.background = '#35393F' : bq.style.background = ''
        bq.style.color = '#000'
        bq.innerText = word.slice(1);
        div.append(bq);
      } else {
        div.style.padding = "10px 0";
        div.style.fontSize = '.95rem';
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
  window.innerWidth <= 700 ?   innerContent.style.width = "100%" :   innerContent.style.width = "50%"
});
showPp.addEventListener("click", () => {
  showPp.classList.add("d-none");
  hideP.classList.remove("d-none");
  pmain.style.flexBasis = "100%";
  preview.style.display = "flex";
  preview.style.justifyContent = "center";
  markdown.style.display = "none";
  window.innerWidth <= 700 ?   innerContent.style.width = "100%" :   innerContent.style.width = "50%"
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
 
  // create a Modal
  if(window.innerWidth > 700){
    let m = document.createElement("div")
    m.setAttribute('class', 'absClass')
    let g = document.createElement('div')
    m.appendChild(g)
    document.body.appendChild(m)

    let headers = document.createElement('div')
    let gBody = document.createElement('div')
    let ndlabel = document.createElement('div')
    let gp = document.createElement('p')
    let btn = document.createElement('button')

    btn.setAttribute('class', 'nbtn')

    ndlabel.setAttribute('class','input-container')
    let label = document.createElement('label')
    let inputText = document.createElement('input')
    inputText.setAttribute('type', 'text')
    inputText.setAttribute('id', 'nd')
    label.innerText = 'Document name'
    label.setAttribute('for', 'dname')
    btn.innerText = 'Create document'
    // btn.setAttribute('disabled', true)
    ndlabel.append(label)
    ndlabel.append(inputText)

    gp.innerHTML = '<span><b>Create a new document </b></span> Input a suitable name that best describes your document'
    headers.setAttribute('class' , 'cnd---')
    let h2 = document.createElement('h2')
    h2.innerText = "New Document"
    gBody.append(gp)
    gBody.append(ndlabel)
    gBody.append(btn)
    headers.append(h2)
    g.append(headers)
    g.append(gBody)
  }
  const ndb = document.getElementsByClassName('nbtn')[0]
  const absc = document.getElementsByClassName('absClass')[0]
  let int = document.getElementById('nd')


  ndb.addEventListener('click', () => {
    if(int.value != ''){
      let cudate = new Date().toLocaleDateString()
      let entry = [int.value+ '.md', cudate.replace(/\//g,'-')]
      newDocs.push(entry)
      document.body.removeChild(absc)
    }
    if(newDocs.length > 0){
         const li = document.createElement("li");
         li.setAttribute('class', 'newDocsLi')
         let span1 = document.createElement('span')
         let span2 = document.createElement('span')
        
         let current = newDocs.shift()
         span1.innerText = current[0]
         span2.innerText = current[1]

         li.append(span1)
         li.append(span2)

         wrapperUpper.appendChild(li);

      }
      newDocsLi = Array.from(document.getElementsByClassName('newDocsLi'))
      newDocsLi.forEach(el => el.addEventListener('click', (e) =>{
        if(e.target.nodeName == "SPAN"){
          newDocsLi.forEach(el => el.classList.remove('active'))
          makeActive(e)
        }
      }))
  })

});


function makeActive(e){
  if(!e.target.parentElement.classList.contains('active')){
    e.target.parentElement.classList += ' active'
  }
}




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
    darkMode = false
  } else {
    preview.style.backgroundColor = "#FFF";
    textArea.style.backgroundColor = "#FFF";
    preview.style.color = "#000";
    textArea.style.color = "#000";
    textMarkDown.forEach((el) => {
      el.style.backgroundColor = "#F5F5F5";
      el.style.color = "black";
    });
    darkMode = true
  }
});
window.addEventListener("click", (e) => {
  if (e.target.className == "absClass") {
    document.body.removeChild(e.target);
  }
});

if (window.innerWidth <= 700) {
  document.getElementById("savechanges").style.display = "none";
  innerContent.style.width = "100%";
}


window.onload = ()=>{
  textArea.innerHTML = data[1].content.split(',').map(el => `${el}`)
}