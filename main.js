var images = 
["https://png.pngtree.com/png-clipart/20190121/ourlarge/pngtree-beautiful-pretty-fashion-teenage-girl-png-image_506884.jpg","https://i.pinimg.com/originals/22/34/44/223444fbc6f4833832aea3c3a48297ce.jpg",
"https://lh3.googleusercontent.com/proxy/5tCO2-CPf6qLe_RjfSQLwn-YVuO5UkAwbGYblXzis1-V0XCa9yNHInbx5hZsvhHzfr2nJmVD5ysYoVmZ6ANHyEs8b_0y0oOIuNxkWnz-CANymNGP-GXIzMA",
"https://lh3.googleusercontent.com/proxy/xHEfT0EDATRKkZuZ27jjuD73-dpVOgyrt30tlpvl8c20-E9mmhtYQEcI5Y1UVHqdJjUswxJ7J_xWekDSS2MRy6sLmt1tAKGKY18v",
"https://i.pinimg.com/originals/bf/95/c5/bf95c5d4180d6cdd853e45d5da774d18.jpg"];

var names = 
["Pranjali Sharma","Prafulla kumar","Varsha tanu","Kedarnath Sharma","Priyansh Kumar"];

var i = 0;

function update() {
    i++;
    var number_of_family_members_in_array = 4
    if(i > number_of_family_members_in_array)
{
    i = 0;
}

var updatedimages = images[i];
var updatednames = names[i];
document.getElementById("family member image").src = updatedimages;
document.getElementById("family member name").innerHTML = updatednames;



}