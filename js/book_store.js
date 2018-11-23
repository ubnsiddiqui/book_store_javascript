var bookStoreDetail =[{bookName:"Namal",authName:"Namra Ahmad",bookSerialNo:"3310113843401",bookPrice:"1000/-"},
                       {bookName:"Bang e Dara",authName:"Allama Iqbal",bookSerialNo:"331019843341",bookPrice:"2000/-"},
                       {bookName:"Peer e Kamil",authName:"Umera Ahmad",bookSerialNo:"331019823401",bookPrice:"950/-"},
                       {bookName:"Abdullah",authName:"Hashim Nadeem",bookSerialNo:"331011243401",bookPrice:"1500/-"},
                       {bookName:"Khak o Khun",authName:"Naseem Hijazi",bookSerialNo:"3310239843401",bookPrice:"800/-"}];

// function add_books() {
// 	var bsobj = {};
// 	bookName = document.getElementById('namebook').value;
// 	authName = document.getElementById('authorname').value;
// 	bookSerialNo = document.getElementById('bookserialno').value;
// 	bookPrice = document.getElementById('bookprice').value;
// 	bsobj = Object.assign({"bookName":bookName});
// 	bsobj = Object.assign({"authName":authName});
// 	bsobj = Object.assign({"bookSerialNo":bookSerialNo});
// 	bsobj = Object.assign({"bookPrice":bookPrice});

// 	bookStoreDetail.push(bsobj)
// }

function search_books() {
	      var input = document.getElementById('searchTerm').value;
	      var x = /input/i;
	      var result = "<table border=1 table table-hover table-dark>";
	      for (var i = 0; i < bookStoreDetail.length; i++) {
	      	result += "<tr>";
	      	if (input == bookStoreDetail[i]) {
	      	result += "<td>"+bookStoreDetail[i].bookName+"</td>"+"<td>"+bookStoreDetail[i].authName+"</td>"+"<td>"+bookStoreDetail[i].bookSerialNo+"</td>"+"<td>"+bookStoreDetail[i].bookPrice+"</td>";	
	      	}
	      	else{

	      	}
	      	result +="<tr>";
	      }
	      result += "</table>";
	document.getElementById("searchData")
}

function display_inventory() {
	var result = "<table border=1 table table-hover table-dark>";
	for (var i = 0; i < bookStoreDetail.length; i++) {
		result += "<tr>";
		result += "<td>"+bookStoreDetail[i].bookName+"</td>"+"<td>"+bookStoreDetail[i].authName+"</td>"+"<td>"+bookStoreDetail[i].bookSerialNo+"</td>"+"<td>"+bookStoreDetail[i].bookPrice+"</td>";
    	result += "</tr>";
        }
result += "</table>";
document.getElementById('tabl').innerHTML = result;
}

function toggle_inventory_data(){
	if(isEmpty($('tabl'))) {
		display_inventory();
	}
	else{
		document.getElementById("tabl").innerHTML = "";
	}
}

