document.getElementById("task-input").addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("task-input").value
        var element=`<div class="item">
                        <div class="item-desc">
                            <div class="circle"></div>
                            <p>${value}</p>
                        </div>
                        <div>
                            <i class="fas fa-times"></i>  
                        </div>
                    </div>`
        var html=document.getElementById("todo-items").innerHTML;
        document.getElementById("todo-items").innerHTML=element + html;
    }

})