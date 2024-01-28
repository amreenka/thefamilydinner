// Declaring variables
//If want to: make so can only click text box
//Background assets
let intro;
let mansion;
let diningRoom;
let MCroom;
let crab;
let hallway;
let riverBedroom;
let carriage;
let underBed;
let letterBox;
let letter1;
let letter2;
let letter3;


//Character assets
let MC;
let Hunter;
let Jasper;
let River;
let RiverHappy;
let RiverUpset;

//Other assets
let length = 1150; //for canvas
let width = 675; //for canvas
let stage = 0; //allows for scene to change <3

// *************DO NOT USE PROMPT()**************


function preload(){ //loading assets
  mansion = loadImage("bg_assets/mansion.png");
  diningRoom = loadImage("bg_assets/diningroom.jpeg");
  intro = loadImage("bg_assets/diningroom.jpeg");
  MCroom = loadImage("bg_assets/MCroom.jpeg");
  crab = loadImage("bg_assets/crab.jpg");
  //MC = loadImage("character_assets/little_guy.webp");
  hallway = loadImage("bg_assets/hallway.jpeg");
  riverBedroom = loadImage("bg_assets/riverbedroom.jpeg");
  carriage= loadImage("bg_assets/carriage.jpeg");
  twFont = loadFont('other_assets/ElegantTypewriterBold-BWnYG.otf');
  underBed = loadImage('bg_assets/underBed.jpg');
  letterBox = loadImage('bg_assets/letterBox.jpg');
  letter1 = loadImage('bg_assets/letter1.jpg');
  letter2 = loadImage('bg_assets/letter2.jpg');
  letter3 = loadImage('bg_assets/letter3.jpg');
  Hunter= loadImage("character_assets/Hunter.png");
  Jasper = loadImage("character_assets/Jasper.png");
  Jasper2=loadImage("character_assets/Jasper2.png");
  River = loadImage("character_assets/River.png");
  RiverUpset = loadImage("character_assets/RiverUpset.png");
  RiverHappy = loadImage("character_assets/RiverHappy.png");
}

function setup() {
  createCanvas(length, width);
}

function draw() {
  imageMode(CORNER);
  const scenes = [scene0, scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11, scene12, scene13, scene14, scene15, scene16, scene17, scene18, scene19, scene20, scene21, scene22, scene23, scene24, scene25, scene26, scene27, scene28, scene29, scene30, scene31, scene32, scene33, scene34, scene35, scene36, scene37, scene38, scene39, scene40, scene41, scene42];
  if (stage >= 0 && stage < scenes.length) {
    scenes[stage]();
  }
}



//Helper Functions!

// Making a textbox
function makeTextbox(){
  rectMode(CORNER);
  fill(7, 26, 36, 200);
  strokeWeight(0);
  rect(0, 450, length, 225);
}

// Formatting the text for the speaker's name
function textStyleSpeakerName(speaker_name) {
  rectMode(CENTER);
  fill(218, 226, 230);
  textStyle(BOLD);
  textSize(25);
  text(speaker_name, 50, 500);
  textStyle(NORMAL);
  textFont(twFont);
}

// Formatting the text for the dialogue
function textStyleTextBox(text_content){
  rectMode(CORNER);
  fill(218, 226, 230);
  textSize(20);
  text(text_content, 50, 550);
  textFont(twFont);
}

//Scene Functions!

//Scene 0
function scene0(){
  background(intro)
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 1; //start game
  }
}


//Scene 1
function scene1() {
  background(mansion);

  //image(MC,0,0);
  
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"It’s been five years since I’ve been home … but somehow, it feels like nothing has changed.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 2; //start game
  }
}


//Scene 2
function scene2(){
  background(mansion);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"I don’t know what happened exactly. I’ve never been close to my parents, so when I left for university,\n it was too easy to just not look back.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 3;
  }
}


//Scene 3
function scene3(){
  background(mansion);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"Welcome home! It’s wonderful to see you again. Here, I'll walk you to your room.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 4;
  }
}


//Scene 4
function scene4() {//MC is escorted to room
  background(MCroom);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"Dinner will be served at 7pm. Mother and Father are looking forward to seeing you.\n It’s been a long time since the family has been all together!\"")
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 5;
  }
}


//Scene 5
function scene5() {// family dinner
  background(diningRoom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"The air is tense… Everyone looks so uncomfortable… \"")
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 6; 
  }
}

//Scene 6
function scene6() {// crab on table
  background(crab);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"... and is it just me, or is my crab still alive?\"")
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 7;
  }
}

//Scene 7
function scene7(){ //choice #1, eat or not eat crab
  background(crab);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("[ Eat the crab ]");
  text("[ Don't eat the crab ]", 900, 550);

  //code for choices!
  rectMode(CORNER);
  if(mouseY >= height - 225){
    if(mouseX >= width/2 && mouseIsPressed == true){
      //right side
      mouseIsPressed = false;
      stage = 8
    }
    if(mouseX <= width/2 && mouseIsPressed == true){
      //left side
      mouseIsPressed = false;
      stage = 8;
    }
  }
}


//Scene 8
function scene8() //talking to jasper
{
  background(diningRoom);
  image(Jasper, 0,0);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"It’s good to have you home. How have you been?\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 9;
  }
}

//Scene 9
function scene9() //talking to jasper
{
  background(diningRoom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"I’ve been very well, Jasper. I’ve missed you.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 10; 
  }
}

//Scene 10
function scene10() //talking to hunter
{
  background(diningRoom);
  image(Hunter, 50,50);
  makeTextbox();
  textStyleSpeakerName("HUNTER (brother)");
  textStyleTextBox("\"Missed?? You haven’t been home in five years. The only thing you miss is sinking your teeth \n in the family coffers.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 11;
  }
}

//Scene 11
function scene11() //choice to be mean (jump to choice 12) or nice (jump to choice 13-17) to hunter
{
  background(diningRoom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("[\"It’s no wonder I haven’t been home, \nbecause then I’d have to see \nyour face every day.\"]");
  text("[\"I know. I’m sorry. I guess I just got\n so caught up with life.\"]", length/2 + 50, 550);
  //code for choices!
  rectMode(CORNER);
  if(mouseY >= height - 225){
    if(mouseX >= width/2 && mouseIsPressed == true){
      //right side
      mouseIsPressed = false;
      stage = 13; //nice option
    }
    if(mouseX <= width/2 && mouseIsPressed == true){
      //left side
      mouseIsPressed = false;
      stage = 12; //mean option
    }
  }
}

//Scene 12
function scene12() //mother talking
{
  background(diningRoom);
  makeTextbox();
  textStyleSpeakerName("MOTHER");
  textStyleTextBox("\"Your brother is right, my dear. You bring shame to our family.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 40;
  }
}

//Scene 13, 3A begins
function scene13()
{
  background(hallway);
  image(Jasper2,50,50);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"Hey!\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 14;
  }
}

//Scene 14, 3A continues
function scene14()
{
  background(hallway);
  image(Jasper2,50,50);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"Things have… changed a lot since you’ve been gone. Our sister, River, there’s something amiss with her.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 15;
  }
}

//Scene 15, 3A continues
function scene15() //jasper confesses
{
  background(hallway);
  image(Jasper2,50,50);
  makeTextbox();
  textStyleSpeakerName("JASPER (brother)");
  textStyleTextBox("\"Something is not right. Please… be careful.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 16;
  }
}

//Scene 16, 3A continues
function scene16() //jasper confesses
{
  background(hallway);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"I’m worried. Should I investigate?\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 17;
  }
}

//Scene 17, 3A ends here, choice to investigate or not, if not go to 20-23, if investigate go to 24
function scene17() //jasper confesses
{
  background(hallway);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("[ Yes, search River’s room ]");
  text("[ No, respect her privacy ]", length/2 + 50, 550);
  //code for choices!
  rectMode(CORNER);
  if(mouseY >= height - 225){
    if(mouseX >= width/2 && mouseIsPressed == true){
      //right side
      mouseIsPressed = false;
      stage = 20; //not investigate option
    }
    if(mouseX <= width/2 && mouseIsPressed == true){
      //left side
      mouseIsPressed = false;
      stage = 24; //investigate option
    }
  }
}

//Scene 18, 3B
function scene18() //convo with river
{
  background(hallway);
  image(RiverUpset,50,50);
  makeTextbox();
  textStyleTextBox("River approaches you. \"Hey, I feel like I could talk to you about something. \nRecently, I’ve been feeling targeted by Mrs. Astor. She’s been vicious about the way I dress. \nShe conveniently forgets to invite me to family gatherings because I make them look bad . \nYou would know if you were around more…\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 19;
  }
}

//Scene 19, 3B, scene ends here, choice to sympathize (38) or not (16)
function scene19() //convo with river, choice to sympathize or not
{
  background(hallway);
  makeTextbox();
  textStyleTextBox("[ Sympathize ]");
  text("[ Don't sympathize ]", length/2 + 50, 550);
  //code for choices!
  rectMode(CORNER);
  if(mouseY >= height - 225){
    if(mouseX >= width/2 && mouseIsPressed == true){
      //right side
      mouseIsPressed = false;
      stage = 16; //not sympathize option, now go back and have option to search room again
    }
    if(mouseX <= width/2 && mouseIsPressed == true){
      //left side
      mouseIsPressed = false;
      stage = 38; //sympathize option
    }
  }
}

//Scene 20, 4A begins
function scene20() //go to bed
{
  background(MCroom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"It’s been a long day. I’m going to head to bed.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 21;
  }
}

//Scene 21, 4A continues
function scene21() //wakes up
{
  background(MCroom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("*You wake up*");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 22;
  }
}

//Scene 22, 4A continues
function scene22() //river says good morning
{
  background(MCroom);
  Image(RiverHappy, 50, 50)
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"Good morning!\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 23;
  }
}

//Scene 23, 4A and game ENDS
function scene23() //river says good night
{
  background(MCroom);
  makeTextbox();
  textStyleTextBox("*YOU ARE DEAD NOW.*");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 42;
  }
}

//Scene 24, 4B begins
function scene24() //investigating river's room
{
  background(underBed);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("You look under the bed.");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 41;
  }
}

function scene41() //investigating river's room
{
  background(letterBox);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("There's a box full of letters.");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 25;
  }
}

//Scene 25, 4B continues
function scene25() //open letters
{
  background(letter1);
  textStyleSpeakerName("LETTER 1");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 26;
  }
}

//Scene 26, 4B continues
function scene26() //open letters
{
  background(letter2);
  textStyleSpeakerName("LETTER 2");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 27;
  }
}

//Scene 27, 4B continues
function scene27() //open letters
{
  background(letter3);
  textStyleSpeakerName("LETTER 3");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 28;
  }
}

//Scene 28, 4B continues
function scene28() //open letters
{
  background(riverBedroom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("I can feel my heart in my throat. \nMy hands are shaking so hard I can barely keep my grip on the pages. \nMy head is pounding, thoughts racing…");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 29;
  }
}

//Scene 29, 4B ends, make choice to confront (30) or leave (37)
function scene29() //open letters
{
  background(riverBedroom);
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("[ I have to get out of here, as soon as possible. \nI am not safe here. ]");
  text("[ I have to confront River.\n I can’t let her get away with this. ]", length/2 + 50, 550);
  //code for choices!
  rectMode(CORNER);
  if(mouseY >= height - 225){
    if(mouseX >= width/2 && mouseIsPressed == true){
      //right side
      mouseIsPressed = false;
      stage = 30; //confront
    }
    if(mouseX <= width/2 && mouseIsPressed == true){
      //left side
      mouseIsPressed = false;
      stage = 37; //leave
    }
  }
}

//Scene 30, 6B starts
function scene30() //confront river
{
  background(riverBedroom);;
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"River? We need to talk.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 31;
  }
}

//Scene 31, 6B continues
function scene31() //confront river
{
  background(riverBedroom);;
  image(River, 0, 0);
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"It's late. What is it?\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 32;
  }
}

//Scene 32, 6B continues
function scene32() //confront river
{
  background(riverBedroom);;
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"I know you’re planning to kill Father.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 33;
  }
}

//Scene 33, 6B continues
function scene33() //confront river
{
  background(riverBedroom);;
  image(RiverUpset, 0, 0)
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"Your father. He is no one to me.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 34;
  }
}

//Scene 34, 6B continues
function scene34() //confront river
{
  background(riverBedroom);;
  makeTextbox();
  textStyleSpeakerName("YOU");
  textStyleTextBox("\"You’ll never get away with this.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 35;
  }
}

//Scene 35, 6B continues
function scene35() //confront river
{
  background(riverBedroom);;
  image(RiverUpset, 0, 0);
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"I liked you. I’ve always respected you for having the strength to leave.\n I didn’t want you to become entangled in all this.\n But now I can’t let you leave.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 36;
  }
}

//Scene 36, 6B ends, MC dead
function scene36() //its over for mc.
{
  background(riverBedroom);;
  makeTextbox();
  textStyleTextBox("*YOU ARE DEAD NOW.*");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 42;
  }
}

//Scene 37, 6A starts and ends, game over. you won.
function scene37() //leave
{
  background(carriage); 
  makeTextbox();
  textStyleTextBox("You leave with your luggage in a carriage. You are safe. Or are you...");
}

//Scene 38, you sympathize with river
function scene38()
{
  background(hallway);
  image(RiverUpset, 50, 50);
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"Not long ago, I received a letter from my biological mother. \nShe explained that 22 years ago, our father had an affair when his wife was pregnant. \nYour mother lost her child when she gave birth, but the mistress gave birth to a healthy baby girl. \nOur father refused to let her keep their child, taking her baby to pass it as his own.\n Therefore, I'm not your biological sibling.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 39;
  }
}

//Scene 39, you sympathize with river, they tell you to leave and you leave. game ends.
function scene39()
{
  background(hallway);
  image(River, 0, 0);
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"You should leave before things get ugly...\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 37;
  }
}

//Scene 40, snarky river at dinner table
function scene40()
{
  background(diningRoom);
  image(River, 0, 0);
  makeTextbox();
  textStyleSpeakerName("RIVER (sister)");
  textStyleTextBox("\"You already do that just fine.\"");
  if(mouseIsPressed == true){
    mouseIsPressed = false;
    stage = 18;
  }
}
//Scene 42, test
function scene42()
{
  background(carriage); // change background !!!!
  makeTextbox();
}
