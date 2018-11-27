var checkout = [];
var bookStoreDetail =[];
var i = 0;
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
	localStorage.setItem(i,JSON.stringify(bookStoreDetail));
	i++;
alert("Successfully Added Books in the Cart");
}

function search_books() {
	      var input = document.getElementById('searchTerm').value;
	      var result = "<table border=1 table table-hover table-dark>";
	      result += "<th>"+"Book Name"+"</th>"+"<th>"+"Author Name"+"</th>"+"<th>"+"ISBN"+"</th>"+"<th>"+"Unit Price"+"</th>"+"<th>"+"Book Quantity"+"</th>";
	      for (var i = localStorage.length-1; i < localStorage.length; i++) {
	      	ls = JSON.parse(localStorage[i]);
	
	      	
	      	for (var  j= 0; j < ls.length; j++) {
	      		
	      		if (input.toLowerCase() === ((ls[j]).bookName).toLowerCase()||parseInt(input) == parseInt((ls[j]).bookSerialNo)) {
	      	result += "<tr>";
	      	result += "<td>"+ls[j].bookName+"</td>"+"<td>"+ls[j].authName+"</td>"+"<td>"+ls[j].bookSerialNo+"</td>"+"<td>"+ls[j].bookPrice+"</td>"+"<td>"+ls[j].bookQuantity+"</td>";	
	      	result +="</tr>";
	      	}
	      	else if(input.toLowerCase() !== ((ls[j]).bookName).toLowerCase()&&parseInt(input) != parseInt((ls[j]).bookSerialNo)){
	      		// result +="<tr>";
	      		// result += "<td>"+"Book Not Found"+"</td>";
	      		// result +="</tr>";
	      		continue;
	      		alert("Book Not Found");
	      	}
	      	
	      	}
	      	
	      }
	      result += "</table>";
	document.getElementById("searchData").innerHTML = result;
}

function display_inventory() {
	var result = "<table border=1 table table-hover table-dark>";
	result += "<th>"+"Book Name"+"</th>"+"<th>"+"Author Name"+"</th>"+"<th>"+"ISBN"+"</th>"+"<th>"+"Unit Price"+"</th>"+"<th>"+"Book Quantity"+"</th>";
	for (var i = localStorage.length-1; i < localStorage.length; i++) {
		ls = JSON.parse(localStorage[i]);
		for (var j = 0; j < ls.length; j++) {
			result += "<tr>";
			result += "<td>"+ls[j].bookName+"</td>"+"<td>"+ls[j].authName+"</td>"+"<td>"+ls[j].bookSerialNo+"</td>"+"<td>"+ls[j].bookPrice+"</td>"+"<td>"+ls[j].bookQuantity+"</td>";
			result += "</tr>";
		}
    	
        }
result += "</table>";
document.getElementById('tabl').innerHTML = result;
}


function buy_book() {
    var buyobj = {};
    var bknmfld = document.getElementById('nameofbook').value;
	var bkquantity = document.getElementById('bbook_quantity').value;
	for (var k = localStorage.length-1; k < localStorage.length; k++) 
	{
		ls = JSON.parse(localStorage[k]);
		for (var l = 0; l < ls.length; l++) {
			var m = ls.length-1;
			if ((bknmfld).toUpperCase() === ((ls[l].bookName).toUpperCase()) && parseInt(bkquantity) <= parseInt(ls[l].bookQuantity))
			{
				buyobj = Object.assign({"bknm": ls[l].bookName},buyobj);
				buyobj = Object.assign({"athnm": ls[l].authName},buyobj);
				buyobj = Object.assign({"bkprce": ls[l].bookPrice},buyobj);
				buyobj = Object.assign({"bksrlno": ls[l].bookSerialNo},buyobj);
				buyobj = Object.assign({"bkqty": bkquantity},buyobj);
				checkout.push(buyobj);

				updateQuantity = parseInt(ls[l].bookQuantity) - parseInt(bkquantity);
				ls[l].bookQuantity = updateQuantity;
				localStorage.setItem(k,JSON.stringify(ls));
			alert("Successfully Books Added In Your Cart.If U Want To Buy More Plz Check Our Inventory First");
			}
		else if ((ls[l].bookQuantity) == 0 ) {
			alert("Book is Out of Stock.Plz check our Inventory First");
		}
		else if (m == l) {
			break;
		}	
		else if ((bknmfld).toUpperCase() !== ((ls[m].bookName).toUpperCase())) {
			alert("Book u r searching for is not in our stock.Plz check our Inventory First");
		}	 
				
		// else if ((parseInt(ls[l].bookQuantity)) < parseInt(bkquantity) ) {
		// 	alert("Book is Out of Stock.Plz check our Inventory First");
		// }			
		}
		
	}
	
	
}

function checkoutInvoice() {
	if (checkout === undefined || checkout.length == 0) {
		alert("Your Cart is Empty Plz Select Products to buy first from list of books shown in Inventory");
	}
	else{
		var result = "<table border=1>";
	var totalPrice = 0;
	result += "<th>"+"Book Name"+"</th>"+"<th>"+"Author Name"+"</th>"+"<th>"+"Unit Price"+"</th>"+"<th>"+"ISBN"+"</th>"+"<th>"+"Book Quantity"+"</th>";
	for (var i = 0; i < checkout.length; i++) {
	result += "<tr>";	
	result += "<td>"+checkout[i].bknm+"</td>"+"<td>"+checkout[i].athnm+"</td>"+"<td>"+checkout[i].bkprce+"</td>"+"<td>"+checkout[i].bksrlno+"</td>"+"<td>"+checkout[i].bkqty+"</td>";	
	result += "</tr>";
	totalPrice += parseInt(checkout[i].bkprce) * parseInt(checkout[i].bkqty);
	}
	result += "<tr>";
	result += "<td colspan = 3>"+"Total Price"+"</td>"+"<td colspan = 2>"+totalPrice+"</td>";
	result += "</tr>";
	result += "</table>";
	document.getElementById("purchaseRecipt").innerHTML = result;
	}
}
