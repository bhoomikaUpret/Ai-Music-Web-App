song1 = "";
song2 = "";

function preload()
{
    song1 = loadsound("");
    song2 = loadsound("");
}

function setup()
{
    canvas = createCanvas(600 , 500);
    canvas.center;

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 600 , 500);
}
