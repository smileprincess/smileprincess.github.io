window.addEventListener("mousemove", function(e){
    px = e.screenX / window.innerWidth;
    py = e.screenY / window.innerHeight;
    px -=0.5
    py -= 0.5
    px *= 2
    py *= 2
    sign.setAttribute("transform", "translate(" + 20*px + ", " + 20 * py + ")");
    gradient_rect.setAttribute("transform", "translate(" + 200*px + ", " + 200 * py + ")");
    sign.style.textShadow = -px * 7+ "px " + -py * 7 + "px 0 #555";
})

$(document).ready(function () {
    start = new Date();
    circle = function(){
    t = ((new Date() - start) / 2000);
    t %= 6.28;
    let ax = 100;
    let ay = 100;
    let x=2 * ax * Math.cos(t) -ax * Math.cos(2*t)
    let y=2 * ay * Math.sin(t) -ay * Math.sin(2*t)
    let dx=2 * ax * Math.cos(t + 0.00001) -ax * Math.cos(2*t + 0.00001) - x
    let dy=2 * ay * Math.sin(t + 0.00001) -ay * Math.sin(2*t + 0.00001) - y
    let rot = Math.atan2(-dx, dy) + 3.15 / 2
    if (t % 6.28 > 5){
        rot += ((t % 6.28) - 5);
    } 
    else if (t % 6.28 < 1.28){
        rot += t % 6.28 - 1.28;
    }
    butterfly1.setAttribute("transform", "translate(" + y+ ", " + -x + ") rotate(" + rot / 3.141592 * 180 + ", 420, 220) ");
    ax = 140;
    ay = 140;
    t *= 1.5;
    t += 1;
    x=2 * ax * Math.cos(t) -ax * Math.cos(2*t)
    y=2 * ay * Math.sin(t) -ay * Math.sin(2*t)
    dx=2 * ax * Math.cos(t + 0.00001) -ax * Math.cos(2*t + 0.00001) - x
    dy=2 * ay * Math.sin(t + 0.00001) -ay * Math.sin(2*t + 0.00001) - y
    rot = Math.atan2(-dx, dy) + 3.15 / 2
    if (t % 6.18 > 5){
        rot += ((t % 6.18) - 5);
    } 
    else if (t % 6.18 < 1.18){
        rot += t % 6.18 - 1.18;
    }
    butterfly2.setAttribute("transform", "translate(" + y+ ", " + -x + ") rotate(" + rot / 3.141592 * 180 + ", 420, 220) ");
    requestAnimationFrame(circle);
    }
    circle();
    var lineDrawing = anime({
        targets: '#heart_line',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 20000,
        easing: 'linear'
    });
    var bl_line = anime({
        targets: '.black_line',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 20000,
        easing: 'linear'
    });
});