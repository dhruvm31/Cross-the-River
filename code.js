var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d7335e7-db22-4fcb-be01-f62fc8ee95f7","5e6519c1-dd57-485b-b7f9-29c4b1e5fc32","e968ea1b-ea1a-44b8-947b-7ffc63b8c8db","d926aef6-42e1-451d-906e-853d6e82b055","7a99c687-6768-446c-8e2b-b6062d7a105d","f7364dcb-3d58-43de-909f-587954491327","91a7e047-b2f9-4129-a0e7-516b78522770","4547a5c3-959c-4bb7-a218-1189a71869ed"],"propsByKey":{"7d7335e7-db22-4fcb-be01-f62fc8ee95f7":{"name":"Water","sourceUrl":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nlKh.1TrqEu2U_N6Zm2Vx5XUmRfunazM/category_backgrounds/bg_underwater_07.png"},"5e6519c1-dd57-485b-b7f9-29c4b1e5fc32":{"name":"Green","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZMqKVV7TKWZVC96OWBzlpz30Hb.4aVxK","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/5e6519c1-dd57-485b-b7f9-29c4b1e5fc32.png"},"e968ea1b-ea1a-44b8-947b-7ffc63b8c8db":{"name":"Orange","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"vnu5TuHuRJnJWozBam3umXIrtsWScRoS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/e968ea1b-ea1a-44b8-947b-7ffc63b8c8db.png"},"d926aef6-42e1-451d-906e-853d6e82b055":{"name":"Purple","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"2ngbwFoux0pk69fwDhn0b4_881f2lLSp","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/d926aef6-42e1-451d-906e-853d6e82b055.png"},"7a99c687-6768-446c-8e2b-b6062d7a105d":{"name":"Yellow","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"umo8U.fGZYdsSGyIec9fbP2LH3QZtoZm","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/7a99c687-6768-446c-8e2b-b6062d7a105d.png"},"f7364dcb-3d58-43de-909f-587954491327":{"name":"Black","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"C0tkCzIRxSmvKl22EA8ydTTmmzwiLOyA","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/f7364dcb-3d58-43de-909f-587954491327.png"},"91a7e047-b2f9-4129-a0e7-516b78522770":{"name":"Red","sourceUrl":null,"frameSize":{"x":370,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"djsB5j0luk.yZz._aEMPepkILDMD1Bwa","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":400},"rootRelativePath":"assets/91a7e047-b2f9-4129-a0e7-516b78522770.png"},"4547a5c3-959c-4bb7-a218-1189a71869ed":{"name":"Fish","sourceUrl":null,"frameSize":{"x":399,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"nwYibcBXyVlTCBvJnaJ0N52F49hSa7Vk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":300},"rootRelativePath":"assets/4547a5c3-959c-4bb7-a218-1189a71869ed.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//I tried to use a lot of resources but its bugging, and a lot of error is occuring and this is the best ic an do for proj 9, so you can go ahead and give me 2 stars.

var life = 0;
var croc1, croc2, croc3,croc4,croc5,croc6;
var boundary1, boundary2, start, end;
var fish;

  start = createSprite(15,187,35,90);
  start.shapeColor = "Coral";
  
  end = createSprite(400,187,20,90);
  end.shapeColor = "#d6b63f";
  
  boundary1 = createSprite(202,43,420,3);
  boundary1.shapeColor = "Coral";
  
  boundary2 = createSprite(190,357,420,3);
  boundary2.shapeColor = "Coral";
  
  fish = createSprite(20,190,13,13);
  fish.setAnimation("Fish");
  fish.scale = 0.05;
  
  croc1 = createSprite(75,130,10,10);
  croc1.setAnimation("Green");
  croc1.scale = 0.05;
  
  croc2 = createSprite(200,130,10,10);
  croc2.setAnimation("Black");
  croc2.scale = 0.05;
  
  croc3 = createSprite(135,250,10,10);
  croc3.setAnimation("Red");
  croc3.scale = 0.05;
  
  croc4 = createSprite(265,250,10,10);
  croc4.setAnimation("Yellow");
  croc4.scale = 0.05;
  
  croc5 = createSprite(325,130,10,10);
  croc5.setAnimation("Purple");
  croc5.scale = 0.05;
  
  croc6 = createSprite(375,250,10,10);
  croc6.setAnimation("Orange");
  croc6.scale = 0.05;
  
  
  croc1.velocityY = 20;
  croc2.velocityY = 20;
  croc3.velocityY = -20;
  croc4.velocityY = -20;
  croc5.velocityY = 20;
  croc6.velocityY = 20;

function draw() {
  background("Cyan");
  fill("Gold");
  text("Lives: " + life,180,100);
  
  
  croc1.bounceOff(boundary1);
  croc1.bounceOff(boundary2);
  croc2.bounceOff(boundary1);
  croc2.bounceOff(boundary2);
  croc3.bounceOff(boundary1);
  croc3.bounceOff(boundary2);
  croc4.bounceOff(boundary1);
  croc4.bounceOff(boundary2);
  croc5.bounceOff(boundary1);
  croc5.bounceOff(boundary2);
  croc6.bounceOff(boundary1);
  croc6.bounceOff(boundary2);
 
  if(keyDown("right")){
    fish.x = fish.x + 4;
  }
  if(keyDown("left")){
    fish.x = fish.x - 4;
  }
  
  if(
     fish.isTouching(croc1)||
     fish.isTouching(croc2)||
     fish.isTouching(croc3)||
     fish.isTouching(croc4)||
     fish.isTouching(croc5)||
     fish.isTouching(croc6))
  {
     fish.x = 20;
     fish.y = 190;
     life = life + 1;
  }

 drawSprites();
}

if(
  fish.isTouching(end))
  croc1.velocityY = 0;
   textSize(60);
   textFont("Times new roman");
   fill("#00ffa7");
   text("YOU WON", 150,200);
   textFont("times new roman");
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
