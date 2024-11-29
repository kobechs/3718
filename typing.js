let target = document.getElementById("target");

function start () {
    document.body.addEventListener("keydown", main); 
}
function end () {
    document.body.removeEventListener("keydown", main);
    alert("クエストクリア");
}
function main(event) {
    if (target.textContent.charAt(0) == event.key) {
        target.textContent = target.textContent.slice(1);
        if (target.textContent.length == 0) {
            end();
        }
    }
    console.log(event.key + "が押されました");
}
