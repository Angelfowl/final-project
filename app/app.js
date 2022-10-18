function initListeners(){
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        MODEl.changePageContent(btnId);
    })
}



$(document).ready(function () {
    initListeners();
    MODEl.changePageContent("home")
});

