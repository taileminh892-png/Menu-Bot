let chart;

function soi(){
 let data=document.getElementById("cau").value.toUpperCase().replace(/\s/g,"");
 if(!data) return alert("Nhập B / P / T");

 let y=[],labels=[],colors=[];
 for(let i=0;i<data.length;i++){
  labels.push(i+1);
  if(data[i]=="B"){y.push(1);colors.push("#22c55e")}
  if(data[i]=="P"){y.push(0);colors.push("#ef4444")}
  if(data[i]=="T"){y.push(.5);colors.push("#eab308")}
 }
 let b=(data.match(/B/g)||[]).length;
 let p=(data.match(/P/g)||[]).length;
 let t=(data.match(/T/g)||[]).length;

 document.getElementById("result").innerText=
 `B: ${(b/data.length*100).toFixed(1)}% | 
  P: ${(p/data.length*100).toFixed(1)}% | 
  T: ${(t/data.length*100).toFixed(1)}%`;

 document.getElementById("goiy").innerText=
 b>p?"👉 Gợi ý: BANKER":p>b?"👉 Gợi ý: PLAYER":"👉 Cân bằng";

 if(chart) chart.destroy();
 chart=new Chart(document.getElementById("chart"),{
  type:"line",
  data:{labels,datasets:[{data:y,pointBackgroundColor:colors,pointRadius:5}]},
  options:{plugins:{legend:{display:false}},scales:{y:{min:-.2,max:1.2}}}
 });
}
