let addBookBtn = document.querySelector("#submit");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let table = document.querySelector("table");
let tableBody = document.querySelector("tbody");

addBookBtn.addEventListener("click",addBook);
let count = 0;
function addBook(e){
	count++;
	e.preventDefault();
	let row = document.createElement("tr");
	row.id = `row${count}`;
	let col1 = document.createElement("td");
	col1.innerText = title.value;
	let col2 = document.createElement("td");
	col2.innerText = author.value;
	let col3 = document.createElement("td");
	col3.innerText = isbn.value;
	let col4 = document.createElement("td");
	let deleteBtn = document.createElement("button");
	deleteBtn.className = "delete";
	deleteBtn.id = `delete${count}`;
	col4.append(deleteBtn);
	deleteBtn.innerText = "Delete"
	row.append(col1, col2, col3, col4);
	tableBody.append(row);

	deleteBtn.addEventListener("click",deleteBook);
	let rows = document.querySelectorAll("#book-list tr");


	function deleteBook(e){
		let id = e.target.id.slice(6);
		// console.log(id);
		rows.forEach(row =>{
			if(row.id.slice(3) == id){
				row.remove();
			}
			
		})
	}	
}






