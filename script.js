let counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    let followerVal = counter.getAttribute("data-target");
    let stepCounter = 62;
    let incrementingVal = Math.ceil(followerVal / stepCounter);

    for(let i = 0; i < stepCounter; i++){
        setTimeout(() => {
            counter.innerHTML = Number(counter.innerHTML) + incrementingVal;
            if(i == stepCounter - 1){
                counter.innerHTML = followerVal;
            }
        }, 100 * i);
        
    }
    
})