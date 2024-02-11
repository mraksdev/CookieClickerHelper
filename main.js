var autoclick = setInterval(function(){
    try {
        Game.lastClick -= 1000;
        Game.ClickCookie();
    } catch (err) {
        console.error('Stopping program');
        clearInterval(autoclick);
    }
}, 0.001);

const autoGC = setInterval(
    () => {
        for (let h = 0; h < Game.shimmers; h++) {
            if (Game.shimmers[h].type=="golden") {
                Game.shimmers[h].pop()
            }
        }
    }, 1000);   
