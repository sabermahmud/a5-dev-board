    document.getElementById(`complete-btn`).addEventListener(`click`, function(){
    const getTaskNumbers = document.getElementById(`assigned-number`);
    let convertToNumber = parseInt(getTaskNumbers.innerText);
    let sub = convertToNumber - 1;
    getTaskNumbers.innerText = sub;
    if(sub < 1){
        alert(`All tasks are completed!`);
        getTaskNumbers.innerText = 0;
    }
    const getCompletedNumber = document.getElementById(`card-1-btn`);
    let convertCompletedToNumber = parseInt(getCompletedNumber.innerText);
    getCompletedNumber.innerText = convertCompletedToNumber + 1;

    const addToActivity = document.getElementById(`activity-container`);
    const li = document.createElement(`li`);
    const taskName = document.getElementById(`card-1-heading`).innerText;
    const time = new Date().toLocaleTimeString();
    li.innerText = `${taskName} at ${time}`;
    addToActivity.appendChild(li);
    localStorage.setItem(`lastTask`, taskName);

    this.innerText = `Completed ✔️`;
    this.disabled = true;
})


// card 2


    document.getElementById(`card-2-btn`).addEventListener(`click`, function(){
    const getTaskNumbers = document.getElementById(`assigned-number`);
    let convertToNumber = parseInt(getTaskNumbers.innerText);
    let sub = convertToNumber - 1;
    getTaskNumbers.innerText = sub;
    if(sub < 1){
        alert(`All tasks are completed!`);
        getTaskNumbers.innerText = 0;
    }
    const getCompletedNumber = document.getElementById(`completed-number`);
    let convertCompletedToNumber = parseInt(getCompletedNumber.innerText);
    getCompletedNumber.innerText = convertCompletedToNumber + 1;

    const addToActivity = document.getElementById(`activity-container`);
    const li = document.createElement(`li`);
    const taskName = document.getElementById(`card-2-heading`).innerText;
    const time = new Date().toLocaleTimeString();
    li.innerText = `${taskName} at ${time}`;
    addToActivity.appendChild(li);
    localStorage.setItem(`lastTask`, taskName);

    this.innerText = `Completed ✔️`;
    this.disabled = true;
})


// card 3


    document.getElementById(`card-3-btn`).addEventListener(`click`, function(){
    const getTaskNumbers = document.getElementById(`assigned-number`);
    let convertToNumber = parseInt(getTaskNumbers.innerText);
    let sub = convertToNumber - 1;
    getTaskNumbers.innerText = sub;
    if(sub < 1){
        alert(`All tasks are completed!`);
        getTaskNumbers.innerText = 0;
    }
    const getCompletedNumber = document.getElementById(`completed-number`);
    let convertCompletedToNumber = parseInt(getCompletedNumber.innerText);
    getCompletedNumber.innerText = convertCompletedToNumber + 1;

    const addToActivity = document.getElementById(`activity-container`);
    const li = document.createElement(`li`);
    const taskName = document.getElementById(`card-3-heading`).innerText;
    const time = new Date().toLocaleTimeString();
    li.innerText = `${taskName} at ${time}`;
    addToActivity.appendChild(li);
    localStorage.setItem(`lastTask`, taskName);

    this.innerText = `Completed ✔️`;
    this.disabled = true;
})

// card 4


    document.getElementById(`card-4-btn`).addEventListener(`click`, function(){
    const getTaskNumbers = document.getElementById(`assigned-number`);
    let convertToNumber = parseInt(getTaskNumbers.innerText);
    let sub = convertToNumber - 1;
    getTaskNumbers.innerText = sub;
    if(sub < 1){
        alert(`All tasks are completed!`);
        getTaskNumbers.innerText = 0;
    }
    const getCompletedNumber = document.getElementById(`completed-number`);
    let convertCompletedToNumber = parseInt(getCompletedNumber.innerText);
    getCompletedNumber.innerText = convertCompletedToNumber + 1;

    const addToActivity = document.getElementById(`activity-container`);
    const li = document.createElement(`li`);
    const taskName = document.getElementById(`card-4-heading`).innerText;
    const time = new Date().toLocaleTimeString();
    li.innerText = `${taskName} at ${time}`;
    addToActivity.appendChild(li);
    localStorage.setItem(`lastTask`, taskName);

    this.innerText = `Completed ✔️`;
    this.disabled = true;
})


