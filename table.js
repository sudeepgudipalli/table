const btn = document.getElementById("toggle");
const table = document.getElementById("table");

const arr = ["Anakin","Obi-Wan","Luke","Leia"];

btn.addEventListener('click',tab);

function tab(){
    var t = "<table style='width:50%;margin-left:25%;'>";
    t+="<tr>"
    t+="<th><center>S.No.</center></th>";
    t+="<th><center>Name</center></th>";
    t+="</tr>"
    for(let i=0;i<arr.length;i++){
        t+="<tr>";
        t+="<td>"+(i+1).toString()+"</td>";
        t+="<td>"+arr[i]+"</td>";
        t+="</tr>";
    }
    t+="</table>";
    table.innerHTML=t;
}