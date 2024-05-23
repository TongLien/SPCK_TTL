let users = JSON.parse(localStorage.getItem("users")) || [];

function kt()
{
    let a = document.getElementById("name").value;
    let c = document.getElementById("mk").value;
    for(let i=0;i<users.length;i++)
    {
        if(users[i].name.trim()==a.trim() && users[i].mk1.trim()==c.trim())
        {
            alert("Đăng nhập thành công");
            window.location = "file:///C:/VSC/SPCK/html/home.html";
        }
    }
}