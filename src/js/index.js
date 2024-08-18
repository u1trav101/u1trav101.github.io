const gateImage = document.getElementById("gate-image");
const gateCaption = document.getElementById("gate-caption");
const webrings = [
    {
        "domain": "webring.bucketfish.me",
        "element": "bucket-webring"
    }
];

const flip = () => {
    try {
        gateImage.classList.toggle("image-flipped");
        gateCaption.classList.toggle("caption-flipped");
        marqueeAnimation.reverse();
    } catch (error) {}
}

const gateHover = () => {
    gateImage.setAttribute("src", "/img/gallery/1080p/gate.webp");
    flip();
}

const gateUnhover = () => {
    gateImage.setAttribute("src", "/img/gallery/1080p/unedited/gate.webp");
    flip();
}

const checkWebrings = () => {
    webrings.forEach(webring => {
        if (document.referrer.includes(webring["domain"])) {
            document.getElementById(webring["element"]).classList.toggle("hidden");
        }
    })
}