$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,450,100,100); //leftmost platform
    createPlatform(300,660,100,100); //left right platform
    createPlatform(600,550,100,100); //middle left platform
    createPlatform(775,478,50,50); //middle right platform
    createPlatform(900,360,100,100); // right left platform
    createPlatform(1100,350,200,100); // rightmost platform
    // TODO 3 - Create Collectables
    createCollectable("steve",200,250,0);//first collectible
    createCollectable("steve",320,560,0);//second collectible
    createCollectable("steve",500,400,0);//third collectible
    createCollectable("steve",1005,200,0);//fourth collectible
    createCollectable("steve",1305,250,0);//last collectible
    // TODO 4 - Create Cannons
    createCannon("left",650,0.00001,40000,20)//bottom barrier
    createCannon("right",170,30,40000,20);// top barrier
    createCannon("top",100,1250);// platform 1
    createCannon("top",250,1000);//jump 1 top
    createCannon("bottom",100,900);//jump 1 bottom
    createCannon("top",500,850);//jump 2 cannon 1
    createCannon("top",550,850);//jump 2 cannon 2
    createCannon("top",800,850);//jump 5
    createCannon("top",1300,6200,40,10000000000000);//end trophy guard
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
