
const todoListArray = JSON.parse(localStorage.getItem('todoListArray')) || [];
displayValues();

function displayValues(){
  let todoInHTML = '';
  for (let i = 0; i < todoListArray.length; i++){
    let toDisplayListObject = todoListArray[i];
    const { name, dueDate } = toDisplayListObject; 
    // const name = toDisplayListObject.name;
    // const dueDate = toDisplayListObject.dueDate;
    const inHTML = `
        <div class="nameElement">${name} </div>
        <div class="dueDateElement">${dueDate} </div> 
        <button onclick="
          todoListArray.splice(${i} , 1);
          displayValues();
          saveToStorage();
        " class="deleteButton">Delete</button>
      `;
    todoInHTML += inHTML; 
  };
  // loop using forEach instead of for loop
    //  todoListArray.forEach(function(toDisplayListObject, index){ // function()=== () =>
    // const { name, dueDate } = toDisplayListObject; 
    // const inHTML = `
    //     <div class="nameElement">${name} </div>
    //     <div class="dueDateElement">${dueDate} </div> 
    //     <button onclick="
    //       todoListArray.splice(${index} , 1);
    //       displayValues();
    //       saveToStorage();
    //     " class="deleteButton">Delete</button>
    //   `;
    // todoInHTML += inHTML; 
    // });

  let container = document.querySelector('.container');
  container.innerHTML = todoInHTML; 

  // // instead of onclick inside button we use addEventListner
  // document.querySelectorAll('.deleteButton').forEach((deleteButton, index) => {
  // deleteButton.aaddEventListener('click', function(){
  //   todoListArray.splice(index , 1);
  //         displayValues();
  //         saveToStorage();
  //  });
};

let addBtton = document.querySelector('.addButton');
addBtton.addEventListener('click', function(){ addToDo(); });

function addToDo() {
  const inputElement = document.querySelector('.inputElement');
  const name = inputElement.value ;
  const dueDateInput = document.querySelector('.dueDateInput');
  const dueDate = dueDateInput.value;
  todoListArray.push({
    name: name,       // === name,
    dueDate: dueDate  // === dueDate
  });
  inputElement.value = '';
  displayValues();
  saveToStorage();
};

function saveToStorage(){
  localStorage.setItem('todoListArray' , JSON.stringify(todoListArray));
};