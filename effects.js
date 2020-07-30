window.onload = function() {
    i = 0;
    setInterval(() => {
        if(i<=100) {
            document.getElementById("name").style.opacity = i/100;
            i = i + 1;
        }
    },10);
}