class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo);
    }

    delete_todo(id){
        this.todo_data.todo.splice(id, 1);
        
    }

    update_todo(id, todo){
        for (var i in this.todo_data.todo) 
        {
             if (i == id) 
             {
                this.todo_data.todo[i] = todo;
             }  
             break;
        }
    }
}


module.exports= todoservice;
