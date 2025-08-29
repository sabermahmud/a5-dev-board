document.getElementById(`bg-btn`).addEventListener(`click`,function(event){
    event.preventDefault();

    const randomBgColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomBgColor}`;
})