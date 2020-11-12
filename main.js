// Selectors
const todoInput=  document.querySelector(".to-do-Input"); 
const btnInput =  document.querySelector(".btn-class");
const todoList =  document.querySelector(".to-do-list");

// Events
btnInput.addEventListener('click',storeTodoTask);  
todoList.addEventListener('click',deleteOrCheckTodoTask);  

// Functions

//funtion for storing todo task. 
 function storeTodoTask(event) 
 {  
    event.preventDefault();

    /****************************************************************************************/
    // Created the below HTML code in Javascript.
    // <div class="to-do-task">
    //    <li class="to-do">hey</li>
    //       <button class="check-button">< class="fas fa-check-square"></ i><button>
    //       <button class="trash-button"><i class="fas fa-trash-alt"></i></button>
    // </div>
    /***************************************************************************************/

    // CREATE  DIV TAG
    const TodoDiv = document.createElement("div"); 
    TodoDiv.classList.add("to-do-task");

    // CREATE LI TAG
    const newTodo = document.createElement("li"); 
    newTodo.innerText= todoInput.value; // for adding text inside the li tag.
    newTodo.classList.add('to-do');  // giving class name to li
    TodoDiv.appendChild(newTodo); // for adding li tag in TodoDiv.

    //CREATE CHECK BUTTON
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');     
    checkButton.innerHTML= '<i class="fas fa-check-square"></i>'; 
    TodoDiv.appendChild(checkButton); 
  
    //CREATE TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');      
    trashButton.innerHTML= '<i class="fas fa-trash-alt"></i>'; 
    TodoDiv.appendChild(trashButton); 

    //Append DIV to UL tag in the index.html.
    todoList.appendChild(TodoDiv);
     
    //CLEAR INPUT VALUE
    todoInput.value=' ';   //for clearing the input value after storing 
 }

// Function for marking check or deleting the todo task
function deleteOrCheckTodoTask(ev)
{
   const targetItem=ev.target;

   //delete task
   if(targetItem.classList[0]==="trash-button")
   {
       const itemToDelete= targetItem.parentElement;  
       itemToDelete.classList.add("animateBeforeFall");  //animate
       setTimeout(waitForAnimation, 600);   //delay function
       
       function waitForAnimation()
       {
            itemToDelete.remove();
       }
   }

   //mark as completed
   if(targetItem.classList[0] ==="check-button")
   {
       const completedItem= targetItem.parentElement;  
       completedItem.classList.toggle("completed");          
   }                        
}
