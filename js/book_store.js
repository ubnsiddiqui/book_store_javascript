var bookStoreDetail =[];
var checkout = [];

function add_books() {
	var bsobj = {};
	bookName = document.getElementById('namebook').value;
	authName = document.getElementById('authorname').value;
	bookSerialNo = document.getElementById('bookserialno').value;
	bookPrice = document.getElementById('bookprice').value;
	bookQuantity = document.getElementById('no_ofbooks').value;
	bsobj = Object.assign({"bookName":bookName},bsobj);
	bsobj = Object.assign({"authName":authName},bsobj);
	bsobj = Object.assign({"bookSerialNo":bookSerialNo},bsobj);
	bsobj = Object.assign({"bookPrice":bookPrice},bsobj);
	bsobj = Object.assign({"bookQuantity":bookQuantity},bsobj);

	bookStoreDetail.push(bsobj)
}

function search_books() {
	      var input = document.getElementById('searchTerm').value;
	      var result = "<table border=1 table table-hover table-dark>";

	      for (var i = 0; i < bookStoreDetail.length; i++) {
	      	result += "<tr>";
	      	if (input.toLowerCase() === ((bookStoreDetail[i]).bookName).toLowerCase()||input.toLowerCase() === ((bookStoreDetail[i]).bookSerialNo).toLowerCase()) {
	      	result += "<td>"+bookStoreDetail[i].bookName+"</td>"+"<td>"+bookStoreDetail[i].authName+"</td>"+"<td>"+bookStoreDetail[i].bookSerialNo+"</td>"+"<td>"+bookStoreDetail[i].bookPrice+"</td>"+"<td>"+bookStoreDetail[i].bookQuantity+"</td>";	
	      	}
	      	else{
	      		console.log("Book Not Found")
	      	}
	      	result +="<tr>";
	      }
	      result += "</table>";
	document.getElementById("searchData").innerHTML = result;
}

function display_inventory() {
	var result = "<table border=1 table table-hover table-dark>";
	for (var i = 0; i < bookStoreDetail.length; i++) {
		result += "<tr>";
		result += "<td>"+bookStoreDetail[i].bookName+"</td>"+"<td>"+bookStoreDetail[i].authName+"</td>"+"<td>"+bookStoreDetail[i].bookSerialNo+"</td>"+"<td>"+bookStoreDetail[i].bookPrice+"</td>"+"<td>"+bookStoreDetail[i].bookQuantity+"</td>";
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
		document.getElementById("tabl").innerHTML = " ";
	}
}

function buy_book() {
	var bknmfld = document.getElementById('nameofbook').value;
	var bkquantity = document.getElementById('bbook_quantity').value;
	for (var i = 0; i < bookStoreDetail.length; i++) 
	{
		//if ((bknmfld).toUpperCase() === (bookStoreDetail[i].toUpperCase())) 
		{
			
		}
	}

}
