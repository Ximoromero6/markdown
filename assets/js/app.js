(function() {
    let markdownInput = document.getElementById("markdownInput");
    let markdownPreview = document.getElementById("markdownPreview");

    function addEvent(el1, el2, event) {
        el1.addEventListener(event, (evt) => {
            el2.value = evt.target.value;
        });
    }

    addEvent(markdownInput, markdownPreview, "keyup");
    addEvent(markdownInput, markdownPreview, "keydown");
    addEvent(markdownInput, markdownPreview, "keypress");

})();