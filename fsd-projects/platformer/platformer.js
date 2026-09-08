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
    createPlatform(0,450,100,50,"yellow"); //leftmost platform
    createPlatform(350,660,100,50, "red"); //left right bottom platform
    createPlatform(300,460,100,50, "green"); //left right top platform
    createPlatform(600,550,100,50, "indigo"); //middle left platform
    createPlatform(775,478,50,50, "orange"); //middle right platform
    createPlatform(900,360,100,50, "blue"); // right left platform
    createPlatform(1100,350,250,50, "violet"); // rightmost platform
    // TODO 3 - Create Collectables
    createCollectable("partysaurus_rex",350,400,0); //rex
    createCollectable("ernest",400,600,0);//slinky
    createCollectable("mr_evil_dr_porkchop",625,500,0);//ham
    createCollectable("tuberous_root_man",925,300,0);//mr potato head
    createCollectable("little_green_man",1300,300,0);//alien
    // TODO 4 - Create Cannons
    createCannon("left",650,0.00001,40000,20)//bottom barrier
    createCannon("right",170,30,40000,20);// top barrier
    createCannon("top",120,1250);// platform 1
    createCannon("top",250,1000);//jump 1 top
    createCannon("bottom",100,900);//jump 1 bottom
    createCannon("top",500,1000);//jump 2 cannon 1
    createCannon("top",550,1000);//jump 2 cannon 2
    createCannon("top",800,850);//jump 5
    createCannon("top",1300,8500,40,1000000);//end trophy guard
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
