let a = document.getElementById("name");
let ten = JSON.stringify(a);
let b = document.getElementById("mail");
let email = JSON.stringify(b);
let c = document.getElementById("mk");
let mk1 = JSON.stringify(c);
let d = document.getElementById("re-mk");
let mk2 = JSON.stringify(d);
let users = JSON.parse(localStorage.getItem("users")) || [];

function check()
{
    let trung=false;
    let a = document.getElementById("name").value;
    let b = document.getElementById("mail").value;
    let c = document.getElementById("mk").value;
    let d = document.getElementById("re-mk").value;
    
    if(mk1==mk2)
    {
        let user = {
            "name": a,
            "email": b,
            "mk1": c,
            "mk2": d,
        }
        for(let i=0;i<users.length;i++)
        {
        if(user.name==users[i].name)
        {
            trung=true;
            prompt("Người dùng đã tồn tại");
        }
        }
        if(!trung)
        {
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            window.location = "file:///C:/VSC/SPCK/html/sign%20%20in.html";
        }
    }
    if(mk1!=mk2)
    {
        prompt("Mật khẩu không hợp lệ");
    }
}