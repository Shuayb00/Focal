function whatToDoForLunch(hungry, availableTime) {
  if (!hungry) {
    console.log("I'm not hungry. I don't need to eat.");
  } else {
    if (availableTime < 20) {
      console.log("I'm hungry and I have less than 20 minutes. Pick up a snack or eat something at home.");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("I'm hungry and I have 20-30 minutes. Cook a tasty meal and enjoy your break!");
    } else {
      console.log("I'm hungry and I have more than 30 minutes. It's an intense program, so you might want to reconsider eating right now.");
    }
  }
}

// Test cases
whatToDoForLunch(true, 15);
whatToDoForLunch(true, 25);
whatToDoForLunch(true, 50);
whatToDoForLunch(false, 30);
