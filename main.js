var canvas = new fabric.Canvas("myCanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update (){
    fabric.Image.fromURL("player.png", function (Ing){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);

    });

}

function new_image (get_image){
    fabric.Image.fromURL(get_image, function (Ing){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_image_object);
        
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown (e){
    key_press = e.keyCode;
    if (e.shiftKey == true && key_press == '77'){
        block_img_width -= 10;
        block_img_height -= 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
}
if (e.shiftKey == true && key_press == '80'){
    block_img_width += 10;
    block_img_height += 10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
}

if (key_press == '70'){
    new_image('ironman_face.png');
}

if (key_press == '66'){
    new_image('spiderman_body.png');
}

if (key_press == '76'){
    new_image('hulk_legs');
}

if (key_press == '82'){
    new_image('thor_right_hand.png')
}

if (key_press == '72'){
    new_image('captain_america_leftr_hand.png')
}