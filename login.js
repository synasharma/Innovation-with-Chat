function loginuser()
{
    userid=document.getElementById("userid");
    localStorage.setItem("user_ID",userid);
    window.location="room.html";
}