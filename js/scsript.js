let open = 0;
function makeCall () {
    if(!open){
        document.getElementsByClassName("container-call").styles.visibility = "hidden";
        open = 1;
    }
    else{
        document.getElementsByClassName("container-call").style.display = "none";
        open = 0;
    }
}