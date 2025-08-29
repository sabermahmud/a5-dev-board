function completeTasks (cardHeading) {
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
    const taskName = document.getElementById(cardHeading).innerText;
    const time = new Date().toLocaleTimeString();
    li.innerText = `${taskName} at ${time}`;
    addToActivity.appendChild(li);
    localStorage.setItem(`lastTask`, taskName);
}