// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  saturdayFun();
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  function wrapAdjective(adjWrapper = "*") {
    let part1 = `You are`
    return function(emphatic) {
      return `${part1} ${adjWrapper}${emphatic}${adjWrapper}!`;
    }
  }
  console.log(wrapAdjective("*")('strong')); 
  