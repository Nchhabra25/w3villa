let a=[
    {word:"apple",definition:"a fruit that is red and round", frequency:1},
    {word:"apricot",definition:"a fruit people eat",frequency:1},
    {word:"ball",definition:"a round object kids play with",frequency:1},
    {word:"bat",definition:"something used to hit a ball, or a flying animal that comes out at night",frequency:1},
    {word:"brawl",definition:"a fight",frequency:1},
    {word:"bread",definition:"a food item",frequency:1}
];

let addWord=()=>{
    let word=prompt("Enter a word");
    word = word.trim().toLowerCase()
    let def=prompt("Enter the definition of the word");
    let exists = false
    for(let i=0;i<a.length;i++){
        if(a[i].word === word){
            exists = true
            break
        }
    }
    if(exists){
        alert("Word already exists in the dictionary");
        return}
    if(word!="" && def!=""){
        a.push({word:word,definition:def,frequency:1});
    }
    alert("Word successfully added");
}

let searchWord=()=>{
    document.getElementById("suggestions").innerHTML=""
    let search = document.getElementById("searchInput").value.toLowerCase()
    let found=false
    for(let i=0;i<a.length;i++){
        if(a[i].word==search){
            a[i].frequency++;
            document.getElementsByClassName("word")[0].innerHTML=a[i].word.toLocaleUpperCase();
            document.getElementsByClassName("definition")[0].innerHTML=`: ${a[i].definition}`;
            document.getElementsByClassName("frequency")[0].innerHTML=`(${a[i].frequency})`;
            found=true
            break;
        }
    }   
    if(!found){
            alert("No words found")
            document.getElementById("searchInput").value = ""
        }
}

let suggestWords=()=>{
    let words=document.getElementById("searchInput").value.toLowerCase()
    if(words === ""){
    document.getElementById("suggestions").innerHTML=""
    return
    }
    let suggestions=[];
    for(let i=0;i<a.length;i++){
        if(a[i].word.startsWith(words)){
            suggestions.push(a[i])
        }
        suggestions.sort((x, y)=>{
        return y.frequency-x.frequency
        })
        suggestions=suggestions.slice(0, 3)
        let result=suggestions.map(item=>item.word+" ("+ item.frequency+")").join("<br>")
        document.getElementById("suggestions").innerHTML=result;
    }
}



