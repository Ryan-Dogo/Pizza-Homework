var menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza",
                        "Cheese Pizza",
                        "Pepperoni Pizza"];
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
    }
    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/06/1200/675/iStock-1222455274.jpg?ve=1&tl=1"/>'
        var item=document.getElementById("addinput").value;
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'  <br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
    }
function add_top(){
	var item=document.getElementById("addinput").value;
    menu_list_array.push(item);
	add_item();
}