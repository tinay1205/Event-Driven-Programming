let display = document.getElementById("display");
function addNum(value){
  display.value+= value;
}
function calculate(value){
  display.value = eval(display.value);
    if(display.value == "Infinity"){
   alert("can't devide by zero");
   display.value = "";
  }
}
function clearAll(){
  display.value = "";
}
function DELETE(){
  display.value = display.value.slice(0,-1);
}
