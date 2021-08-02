menu_list_array = ["Veg Margherita Pizza",
                    "golden corn pizza",
                    "paneer onion pizza",
                    "pepper paneer pizza",
                    "Farm House",
                    "garlic bread"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata'<div class="card">'
         + img src="https://www.pngkit.com/png/detail/0-6945_pizza-png-image-free-vector-pizza-vector-png.png"
         +menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_top").value;
menu_list_array.push(item);
add_item();
}