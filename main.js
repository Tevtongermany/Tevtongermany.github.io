function redirectTo(url) {
    window.location.href = url;
}



function showtext(element,text) {
    element.innerHTML = text;
}
function copytoclipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}