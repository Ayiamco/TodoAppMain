
//Add task to task list
document.getElementById("task-input").addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        const idTag=Date.now()
        let value=document.getElementById("task-input").value
        var element=`<div class="task" id=${'div'+idTag}>
                        <div class="task-desc">
                            <div class="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                                    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                                </svg>
                            </div>
                            <p>${value}</p>
                        </div>
                        <div>
                            <i class="fas fa-times" id=${'fas'+idTag}></i>  
                        </div>
                    </div>`
       
        var html=document.getElementById("todo-tasks").innerHTML;
        document.getElementById("todo-tasks").innerHTML=element + html;
        document.getElementById("task-input").value="";   
        
        //update task count
        const tasks=document.getElementsByClassName("task");
        document.getElementById("tasks-counter").textContent=`${tasks.length} task left`;
     }

})

//delete task from task list
document.addEventListener("click",(e)=>{
    if(e.target.id.substr(0,3)==="fas"){
        let task = document.getElementById('div'+e.target.id.substr(3));
        task.parentNode.removeChild(task);
    }
})

//tag a task as completed
document.addEventListener("click",(e)=>{
    if(e.target.className==="circle"){
        console.log('clicked')
        
         let directParent=e.target.parentNode;
         let task=directParent.parentNode;
         if(task.className==="task"){
            task.className="task completed-task" 
         }
         else if(task.className==="task completed-task"){
            task.className="task"
         }

        //update task count
        const allTasks=document.getElementsByClassName("task").length;
        const completedTasks=document.getElementsByClassName("completed-task").length;
        document.getElementById("tasks-counter").textContent=`${allTasks-completedTasks} task left`
        
         
    }
   
})