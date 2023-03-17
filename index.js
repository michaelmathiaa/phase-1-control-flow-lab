function scuberGreetingForFeet(distance){
  // Write your code here!
  let gForFeet;
  if (distance <= 400) {
    gForFeet = 'This one is on me!';
    return gForFeet;
  } else if (distance < 2000) {
    gForFeet = 'That will be twenty bucks.';
    return gForFeet;
  } else if (distance < 2500) {
    gForFeet = 'I will gladly take your thirty bucks.';
    return gForFeet;
  } else if (distance > 2500) {
    gForFeet = 'No can do.';
    return gForFeet;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityCheck = "NYC";
  const cityGreeting = cityCheck === city ? 'Ok, sounds good.' : 'No go.';
  return cityGreeting;
}

function switchOnCharmFromTip(tipG){
  // Write your code here!
  const tipGenerosity = tipG;
  let response;
  switch (tipGenerosity) {
    case 'generous':
      return response = 'Thank you so much.';
    case 'not as generous':
      return response = 'Thank you.';
    default:
      return 'Bye.';
  }
}
