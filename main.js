// 1
home1.onclick = function() {
    let home1 = document.getElementById("home1");

    let height = home1.scrollHeight;
    let width = home1.scrollWidth;

    console.log(height);

    home1.style.height = height + 15 + 'px';
    home1.style.width = width + 15 + 'px';
}

home2.ondblclick = function() {
    console.log(document.getElementById('home2'));
}

imgcat.onclick = function() {
    document.getElementById("imgcat").src = "https://sun9-46.userapi.com/impg/yCJKkiHelDCewCvxMwXmZePP0mvA83TJiJ6TVg/JNn45v4mHEw.jpg?size=1440x2160&quality=95&sign=0a2604b420afdec7bb0f936839fbbf9a&type=album";
}

document.querySelector(".inp").onkeypress = function(event) {

    if( !isNaN(event.key) ){
    document.querySelector(".inpcode").value = false;
    console.log(event.key);
    }
    else {
        document.querySelector(".inpcode").value = event.charCode;
        console.log(event.charCode);
    }
    
}