window.onload = function () {
    let cm = document.getElementById('centimeter');
    let mm = document.getElementById('millimeter');
    cm.oninput = function  () {
        mm.value = cm.value * 10;
    };
    mm.oninput = function () {
        cm.value = mm.value / 10;
    };
}
