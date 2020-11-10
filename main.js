// Selectors
const todoInput=  document.querySelector(".to-do-Input"); //for selecting a class from CSS.
const btnInput =  document.querySelector(".btn-class");
const todoList =  document.querySelector(".to-do-list");

// Events
// sytax for adding a event 
//(variableName.addEventListener('event',functionToBeCalledForEvent)

btnInput.addEventListener('click',storeTodoTask);  // adding event when button is clicked
todoList.addEventListener('click',deleteOrCheckTodoTask);  // adding event when button is clicked

// Functions
//syntax for adding a function using arrow function.
// functionName () => {}

//funtion for storin todo task. 
 function storeTodoTask(event) {
     //prevent page from reloading for submission.
     event.preventDefault();

/***************************************************************************************************************************************/
    // we can do HTML and CSS coding in Javascript as well. we will create the code below in comment section using Javascript.
    // <div class="to-do-task">
    //    <li class="to-do">hey</li>
    //       <button class="check-button">< class="fas fa-check-square"></ i><button>
    //       <button class="trash-button"><i class="fas fa-trash-alt"></i></button>
    // </div>
/***************************************************************************************************************************************/

    // CREATE TODO DIV
    const TodoDiv = document.createElement("div"); // for creating a div element in html file.
    TodoDiv.classList.add("to-do-task");// for adding class inside a div.

    // CREATE LI TAG
    const newTodo = document.createElement("li"); // for creating li in a div
   
    newTodo.innerText= todoInput.value; // for adding text inside the li tag.
    newTodo.classList.add('to-do');  // giving class name to li
    // for adding a tag to the div syntax : divNameInWhichToAddTag.appenedchild(tagNameToBeAdded);
    TodoDiv.appendChild(newTodo); // for adding li tag in TodoDiv.

    //CREATE CHECK BUTTON
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');     //create class name
    checkButton.innerHTML= '<i class="fas fa-check-square"></i>'; //we can also add any html tag using this method as well.
    TodoDiv.appendChild(checkButton); // for adding the button inside a div.
  
    //CREATE TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');      //create class name
    trashButton.innerHTML= '<i class="fas fa-trash-alt"></i>'; 
    TodoDiv.appendChild(trashButton); // for adding the button inside a div.

    //APPEND DIV created above with ul tag in the index.html.
     todoList.appendChild(TodoDiv);
     
     //CLEAR INPUT VALUE
     todoInput.value=' ';   //for clearing the input value after storing
    
 }

// Function for deleting the todo task

function deleteOrCheckTodoTask(event)
{
   const targetItem=event.target;

   //delete task
   if(targetItem.classList[0]==="trash-button")
   {
       const itemToDelete= targetItem.parentElement;  // to delete the entire div
       itemToDelete.classList.add("animateBeforeFall");  //animate
       console.log("hello world1");
        // itemToDelete.remove();
    //    itemToDelete.addEventListener("animateEnd",deleteItem);
/*******************SOLVE THE REMOVE ANIMATION ISSUE ****************************/
   }
//    function deleteItem (event)
//    {
//         console.log("hello world");
//    }
   //mark as completed
   if(targetItem.classList[0] ==="check-button")
   {
       const completedItem= targetItem.parentElement;  // to delete the entire div
       completedItem.classList.toggle("completed");   // here completed is a class name used in css not a text.       
   }

                                       

}