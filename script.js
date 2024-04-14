const textArea =  document.getElementsByTagName('textarea')[0];
const preview = document.getElementById('preview')
let obj = {}
textArea.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        let words = textArea.value.split("\n")
        for(const word of words){
            if(word in obj){continue}
            if(word != ''){
                let div = document.createElement("div");
                if(/#{1}/.test(word)){
                    div.style.font = '2rem bold'
                    div.style.paddingBottom = '10px'
                    div.innerText = word.slice(1)
                }
                if(/#{2}/.test(word)){
                    div.style.font = '1.5rem lighter'
                    div.style.paddingBottom = '10px'
                    div.innerText = word.slice(2)
                }
                if(/[0-9]/.test(word[0])){
                    div.style.padding = '0px 30px'
                    div.innerText = word
                }
                if(word.startsWith('>')){
                    let bq = document.createElement('blockquote')
                    bq.innerText = word.slice(1)
                    div.append(bq)
                }
                else{
                    div.style.paddingBottom = '10px'
                    div.innerText = word
                }
                obj[word] = div
            }
        }
        for(item in Object.values(obj)){
            preview.appendChild(Object.values(obj)[item])
        }
    }
})