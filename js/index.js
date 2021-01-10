
//Add task to task list
document.getElementById("task-input").addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        const idTag=Date.now()
        let value=document.getElementById("task-input").value
        var element=`<div class="item" id=${'div'+idTag}>
                        <div class="item-desc">
                            <div class="circle"></div>
                            <p>${value}</p>
                        </div>
                        <div>
                            <i class="fas fa-times" id=${'fas'+idTag}></i>  
                        </div>
                    </div>`
        var html=document.getElementById("todo-items").innerHTML;
        document.getElementById("todo-items").innerHTML=element + html;
        document.getElementById("task-input").value="";   
     }

})

//delete task from task list
document.addEventListener("click",(e)=>{
    if(e.target.id.substr(0,3)==="fas"){
        let item = document.getElementById('div'+e.target.id.substr(3));
        item.parentNode.removeChild(item);
    }
})