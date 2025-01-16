let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev =  document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive =  countItem - 1;
    }
    showSlider();
}

//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);

function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if(itemActiveOld){
        itemActiveOld.classList.remove('active');
    }
    if(thumbnailActiveOld){
        thumbnailActiveOld.classList.remove('active');
    }
   

    //active new item
    if (items[itemActive]){
        items[itemActive].classList.add('active');
    }
    if(thumbnails[itemActive]){
        thumbnails[itemActive].classList.add('active');
    }

    //clear auto time run slider
    clearInterval(refreshInterval);
}

//click thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', ()=>{
        itemActive = index;
        showSlider();
    })
})