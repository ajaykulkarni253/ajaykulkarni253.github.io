const addButton = document.querySelector('.add');
var inputValue = document.querySelector('.inp-text');
const container = document.querySelector('.container');

class item{
	constructor(itemName){
		this.createDiv(itemName);
	}

	createDiv(itemName){
		let input = document.createElement('input');
		input.value = itemName;
		input.disabled = true;
		input.classList.add('input-value');
		input.type = "text";
		
		let itemBox = document.createElement('div');
		itemBox.classList.add('task-list');

		let selectButton = document.createElement('button');
		selectButton.innerHTML = "O" ;
		selectButton.classList.add('circle');

		let removeButton = document.createElement('button');
		removeButton.innerHTML = "X";
		removeButton.classList.add('delete');

		container.appendChild(itemBox);

		itemBox.appendChild(selectButton);
		itemBox.appendChild(input);
		itemBox.appendChild(removeButton);

		selectButton.addEventListener('click', () => this.edit(input));

		removeButton.addEventListener('click', () => this.remove(itemBox));
	}

	edit(input){
		input.disabled = !input.disabled;
	}

	remove(item){
		container.removeChild(item);
	}
}

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
		inputValue.value = "";
	}
}

addButton.addEventListener('click', check);