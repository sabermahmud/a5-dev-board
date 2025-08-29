function showTime (){
    // catch the html elements:
    const getDay = document.getElementById(`day`);
    const getDate = document.getElementById(`date`);
    const getClock = document.getElementById(`clock`);

    // get the real time from js codes:
    const time = new Date();
    const days = [`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`];
    const months = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];

    // catch the real date-data from objects:
    const day = days[time.getDay()];
    const date = time.getDate();
    const month = months[time.getMonth()];
    const year = time.getFullYear();
    const hour = time.getHours();
    const realMin = time.getMinutes();
    const sec = time.getSeconds();

    // set the infos to html:
    getDay.innerHTML = day;
    getDate.innerHTML = `${date}/${month}/${year}`;
    getClock.innerHTML = `${hour}:${realMin}:${sec}`;
    setTimeout(showTime,1000);
}
showTime();