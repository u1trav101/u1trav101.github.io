const marqueeText = document.getElementById("marquee-text");
let marqueeAnimation;

window.onload = () => {
    marqueeAnimation = marqueeText.getAnimations()[0];
    checkWebrings();
}