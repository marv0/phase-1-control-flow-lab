function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if (distance <= 400){
    message = 'This one is on me!';
  }
  else if(distance > 2000 && distance < 2500){
    message = 'I will gladly take your thirty bucks.';
  }
  else{
    message = 'No can do.';
  }
  return message
  
}


function ternaryCheckCity(city){
  // Write your code here!
  let msg;
  msg = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return msg;
}
  

  if(city === NYC){
    msg = 'Ok, sounds good.';

  }
  else if(city === Pittsburgh){
    msg = 'No go.';
  }


function switchOnCharmFromTip(tip){
  // Write your code here!
  let msgs;
  switch(tip){
    case "generous":
      msgs = "Thank you so much.";
      break;
    case "not as generous":
      msgs = 'Thank you.';
      break;
    default:
      msgs = "Bye."; 
  }
  return msgs;
}