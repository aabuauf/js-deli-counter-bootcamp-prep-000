function takeANumber(line,name){
  line.push(name)
  return "Welcome, "+ name +". You are number "+ (line.length) +" in line."
}

function nowserving(katzDeliLine){
  if (katzDeliLine[0]===""){
    return "There is nobody waiting to be served!"}
  return katzDeliLine[0];
}