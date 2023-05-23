
let string="";
let sum=0
const display=(x)=>
{
    string=string.concat(x)
    document.getElementById("boxtop").innerText= string
}
const eqal=()=>
{
    let p=document.getElementById("boxtop").innerText;
    let q =eval(p)
    string=''+q;
    document.getElementById("boxtop").innerText=q;
}
const Clear=(p)=>
{
    if (p==='CLS')
    {
        document.getElementById("boxtop").innerText='';
        string=''
    }
    if(p==='C')
    {
        document.getElementById("boxtop").innerText=string.slice(0,-1)
        string=string.slice(0,-1)
    }
}
