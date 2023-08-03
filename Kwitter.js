function adduser(){
    userame=document.getElementById("user_name").value;
    localStorage.setItem("user_name",userame);
    window.location="kwitter_room.html"
}
