const content = document.getElementsByTagName("p")[0];
const shareButton = document.getElementById("share");

content.contentEditable = "true";    

shareButton.addEventListener("click", async () => {
    if (navigator.share && navigator.canShare({ title: document.title, url: window.location.href })) {
        try {
            await navigator.share({ title: document.title, url: window.location.href });
        } catch (err) {}
    }
});