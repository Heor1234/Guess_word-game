const wel=document.querySelector("h2");
const but=document.querySelector("button");
const input=document.querySelector("input");
let randomword;
console.log(wel);
let flag=false;
let arr=["C++","HELLO","PYTHON","DBMS","SQL"];
function sw(a){
    for(let i=0;i<a.length;i++)
    {
        let temp=a[i];
    let j=Math.ceil(Math.random()*a.length);
        a[i]=a[j];
        a[j]=temp;
    
    }
    return a;
}


function r(){
    console.log(arr.length)
    let rand=Math.floor(Math.random()*arr.length);
    console.log(rand);
    return arr[rand];
}
but.addEventListener("click",function(){
    if(!flag)
    {  flag=true;
    input.style.visibility="visible";
    but.innerHTML="Guss";
    input.classList.toggle('hidden');
     randomword=r();
     console.log(randomword);
    let swap=sw(randomword.split("")).join("");
    wel.innerHTML=`Guss word is-->${swap}`;
    }
    else{
        let word=input.value;
        console.log(word);
        if(randomword === word)
        {
            flag=false;
            wel.innerHTML=`Awesome It's Correct. it is ${word}`
            but.innerHTML="START AGAIN";
            randomword="";
            word="";
            input.value=""
           input.style.visibility="hidden"
        }
        else{
            wel.innerHTML="is not correct"+wel.innerHTML;
           
        }
    }
    
})
