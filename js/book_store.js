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

	bookStoreDetail.push(bsobj);
alert("Successfully Added Books in the Cart");
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
	      		result += "<td>"+"Book Not Found"+"</td>";
	      	}
	      	result +="<tr>";
	      }
	      result += "</table>";
	document.getElementById("searchData").innerHTML = result;
}

function display_inventory() {
	var result = "<table border=1 table table-hover table-dark>";
	result += "<th>"+"Book Name"+"</th>"+"<th>"+"Author Name"+"</th>"+"<th>"+"ISBN"+"</th>"+"<th>"+"Unit Price"+"</th>"+"<th>"+"Book Quantity"+"</th>";
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
    var buyobj = {};
    var bknmfld = document.getElementById('nameofbook').value;
	var bkquantity = document.getElementById('bbook_quantity').value;
	for (var i = 0; i < bookStoreDetail.length; i++) 
	{
		if ((bknmfld).toUpperCase() === ((bookStoreDetail[i].bookName).toUpperCase()) && (bookStoreDetail[i].bookQuantity) != 0) 
		{
			if (parseInt(bkquantity) <= parseInt((bookStoreDetail[i]).bookQuantity)) {
				buyobj = Object.assign({"bknm": bookStoreDetail[i].bookName},buyobj);
				buyobj = Object.assign({"athnm": bookStoreDetail[i].authName},buyobj);
				buyobj = Object.assign({"bkprce": bookStoreDetail[i].bookPrice},buyobj);
				buyobj = Object.assign({"bksrlno": bookStoreDetail[i].bookSerialNo},buyobj);
				buyobj = Object.assign({"bkqty": bkquantity},buyobj);
				checkout.push(buyobj);
				updateQuantity = parseInt(bookStoreDetail[i].bookQuantity) - parseInt(bkquantity);
				bookStoreDetail[i].bookQuantity = updateQuantity;
			}
			
		}
		else if ((bookStoreDetail[i].bookQuantity) == 0 ||(bknmfld).toUpperCase() !== ((bookStoreDetail[i].bookName).toUpperCase())||(parseInt(bookStoreDetail[i].bookQuantity)) < parseInt(bkquantity) ) {
			alert("Book is Out of Stock.Plz check our Inventory First");
		}
	}
	alert("Successfully Books Added In Your Cart.If U Want To Buy More Plz Check Our Inventory First");
	
}

function checkoutInvoice() {
	var result = "<table>";
	var totalPrice = 0;
	result += "<th>"+"Book Name"+"</th>"+"<th>"+"Author Name"+"</th>"+"<th>"+"Unit Price"+"</th>"+"<th>"+"ISBN"+"</th>"+"<th>"+"Book Quantity"+"</th>";
	for (var i = 0; i < checkout.length; i++) {
	result += "<tr>";	
	result += "<td>"+checkout[i].bknm+"</td>"+"<td>"+checkout[i].athnm+"</td>"+"<td>"+checkout[i].bkprce+"</td>"+"<td>"+checkout[i].bksrlno+"</td>"+"<td>"+checkout[i].bkqty+"</td>";	
	result = "</tr>";
	totalPrice += parseInt(checkout[i].bkprce) * parseInt(checkout[i].bkqty);
	}
	result += "<tr>";
	result += "<td colspan = 3>"+"Total Price"+"</td>"+"<td>"+"</td>"+"<td colspan = 2>"+totalPrice+"</td>";
	result += "</tr>";
	result += "</table>";
	document.getElementById("purchaseRecipt").innerHTML = result;
}
