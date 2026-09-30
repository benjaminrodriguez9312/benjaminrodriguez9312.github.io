var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        let circles = [];  //creates an array named circles


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //draws a random circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); //applies random velocity to the circle
            view.addChild(circle); //adds circle to view
            circles.push(circle); //stores the circle in the circles array
        }// creates a function that draws a circle


        // TODO 3 : Call the drawCircle() function
           /* drawCircle(); //calls the drawCircle function
            drawCircle(); //calls the drawCircle function
            drawCircle(); //calls the drawCircle function
            drawCircle(); //calls the drawCircle function
            drawCircle(); //calls the drawCircle function */
        // TODO 7 : Use a loop to create multiple circles 
        for(let i = 0; i < 100; i++){
            drawCircle(); //calls the drawCircle function
        }


        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
        /*   physikz.updatePosition(circles[0]); //updates the position of the first circle to make it move
            physikz.updatePosition(circles[1]); //updates the position of the second circle to make it move
            physikz.updatePosition(circles[2]); //updates the position of the third circle to make it move
            physikz.updatePosition(circles[3]); //updates the position of the fourth circle to make it move
            physikz.updatePosition(circles[4]); //updates the position of the fifth circle to make it move 
            // TODO 5 : Call game.checkCirclePosition() on your circles
            game.checkCirclePosition(circles[0]);  //checks the first circle's position
            game.checkCirclePosition(circles[1]); //checks the second  circle's position 
            game.checkCirclePosition(circles[2]); //checks the third circle's position 
            game.checkCirclePosition(circles[3]);  //checks the fourth circle's position
            game.checkCirclePosition(circles[4]); //checks the fifth circle's position */

            // TODO 8 / TODO 9 : Iterate over the array
           for(let i = 0; i < circles.length; i++){
            physikz.updatePosition(circles[i]); //updates the position of the circles to make them move
            game.checkCirclePosition(circles[i]);  //checks the circle's positions
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            var rightEdge = circle.x + circle.radius; //defines the right edge of each ball
            var leftEdge = circle.x - circle.radius; //defines the left edge of every balls
            var bottomEdge = circle.y + circle.radius; //defines the bottom edge of every balls
            var topEdge = circle.y - circle.radius; //defines the top edge of every balls
            
            if ( leftEdge > canvas.width ) {
                circle.x = 0 - circle.radius;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(rightEdge < 0) {
                circle.x = canvas.width + circle.radius;
            }  //if the circle goes off the left, it reappears on the right

            if(bottomEdge < 0) {
                circle.y = canvas.height + circle.radius;
            } //if the circle goes off the top, it reappears on the bottom

            if(topEdge > canvas.height) {
                circle.y = 0 - circle.radius;
            } //if the circle goes off the bottom, it reappears on the top
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
