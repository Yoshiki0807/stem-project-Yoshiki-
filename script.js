let oneline = "??";
function getoneline1(line1){
  return line1*line1;
}

function getoneline2(line2){
  return line2*line2;
}

function getvalueofline(line1, line2){
if(line1 > 0 && line2 > 0){
  let oneline1 = getoneline1(line1);
  let oneline2= getoneline2(line2);
  //let oneline = getTriangleArea(h3*h3);
  
  oneline =Math.sqrt(oneline1+oneline2)

}else{
  alert("Please enter positive numbers"); }
}


function getInputs() {
  let line1, line2;
  line1 = document.getElementById("ih1").value;
  line2 = document.getElementById("ih2").value;
  getvalueofline(line1, line2);
  document.getElementById("output").innerText =oneline;
}