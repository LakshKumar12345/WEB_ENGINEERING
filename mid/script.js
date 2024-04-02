let currentindex=0;
const images=document.querySelectorAll('.image-slider')
const thumbnails=document.querySelectorAll('.thumbnail')
function showimage(index){
    images.forEach(image => image.classList.remove('active'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    images[index].classList.add('active');
    thumbnails[index].classList.add('active');
}
    function prevImage(){
        currentindex=(currentindex -1 + images.length) % images.length;
        showimage(currentindex);
    }
    function nextImage(){
        currentindex=(currentindex + 1) % images.length;
        showimage(currentindex);
    }
    thumbnails.forEach((thumbnail , index )=> {
        thumbnail.addEventListener('click',()=>{
            showimage(currentindex);
        });
    });
    showimage(currentindex);
    



