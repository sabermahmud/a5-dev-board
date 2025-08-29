document.getElementById(`bg-btn`).addEventListener(`click`,function(event){
    event.preventDefault();
    document.body.classList.toggle(`bg-blue-100`);
    document.body.classList.toggle(`bg-gray-300`);
})