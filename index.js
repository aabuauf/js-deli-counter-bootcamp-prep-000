function takeANumber(line,name){
  line.push(name)
  return "Welcome, "+ name +". You are number "+ (line.length) +" in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length<1){
    return "There is nobody waiting to be served!"}
    var name = katzDeliLine[0]
    katzDeliLine.shift()
  return "Currently serving " + name + ".";
}

