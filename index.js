let read = require("readline-sync");

//welcome note
console.log("Comic Quiz!")
let user = read.question("Enter your user name - ");
console.log("welcome " + user + " to the K-code\n");

//to get user choice
let comic = read.question("Choose your Favourite Comic . . .\n 1. marvel\n 2. DC\n")

//questions for marvel comic
//array for question using objects
let que1 = [
  {
    Q: "\n1. What is Hulk's colour? \n 1.red\n 2.yellow\n 3.green\n 4.orange\n \n--> ",
    A: "green"
  },
  {
    Q: "2. Thor's power? \n 1.water\n 2.lightning\n 3.air\n 4.fire\n \n--> ",
    A: "lightning"
  },
  {
    Q: "3. Who is Groot? \n 1.stone\n 2.hammer\n 3.machine\n 4.plant\n \n--> ",
    A: "plant"
  },
  {
    Q: "4. The enemy of Avenger's? \n 1.nick fury\n 2.thanos\n 3.vision\n 4.black widow\n \n--> ",
    A: "thanos"
  },
  {
    Q: "5. Hero of Wakanda? \n 1.black panther\n 2.iron man\n 3.thor\n 4.dr. strange\n \n--> ",
    A: "black panther"
  }
]

//questions for DC comic
//second array for que
let que2 = [
  {
    Q: "\n1. What is Superman's colour? \n 1.red\n 2.blue\n 3.green\n 4.orange\n \n--> ",
    A: "blue"
  },
  {
    Q: "2. Aquaman's power? \n 1.water\n 2.lightning\n 3.air\n 4.fire\n \n--> ",
    A: "water"
  },
  {
    Q: "3. Who is Darkseid? \n 1.sfriend\n 2.weapon\n 3.enemy\n 4.god\n \n--> ",
    A: "enemy"
  },
  {
    Q: "4. The lady with sword? \n 1.shazam\n 2.flash\n 3.batman\n 4.wonder woman\n \n--> ",
    A: "wonder woman"
  },
  {
    Q: "5. Weakness of Superman? \n 1.wood\n 2.kryptonite\n 3.metal\n 4.fear\n \n--> ",
    A: "kryptonite"
  }
]

//conditions for marvel comic
let score = 0;
if (comic == "marvel") {
  //execution
  for (let i = 0; i < que1.length; i++) {
    let CQ = que1[i];
    game(CQ.Q, CQ.A);
  }
}


//condition for DC comic
else if (comic == "DC") {
  //execution
  for (let i = 0; i < que2.length; i++) {
    let CQ = que2[i];
    game(CQ.Q, CQ.A);
  }
}

//for wrong choice
else {
  console.log("Wrong choice!");
}



//function
function game(question, answer) {
  let u_ans = read.question(question);
  if (u_ans === answer) {
    console.log("Right");
    score++;
  }
  else
    console.log("Wrong");

  console.log("current score is " + score);
  console.log("-------------------------------\n");
}

console.log("Thank You for playing " + user);
console.log("Your final score is " + score + "/5");