
var  currentImg='img/bodyimg/prize1.jpg';
var  indexImg=0;
var  images = ['img/bodyimg/prize1.jpg','fin.jpg', 'prize.jpg', 'prize1.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
     

function  nextImg() {
    if (indexImg < images.length - 1) {
        indexImg++;
        currentImg ="img/bodyimg/"+images[indexImg];
        console.log(indexImg);
    }
    $("#bodyImg").attr("src", currentImg);
}

function  previousImg() {
    if(indexImg  >0){
        indexImg--;
        currentImg ="img/bodyimg/"+ images[indexImg];
        console.log(indexImg);

    }else if(indexImg ===0){
        currentImg='img/bodyimg/prize1.jpg';
    }
    $("#bodyImg").attr("src", currentImg);
}







