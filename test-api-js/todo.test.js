

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
    test("add_todo", () => {
        todoitem = {
            "title": "P1",
            "description": "G1",
            "done": false
        }
        todo_service.add_todo(todoitem);
        expect(todo_service.get_todos().todo.length).toEqual(4);
        expect(todo_service.todo_data.todo[3].title).toEqual("P1");
    });
    
    
    test("delete_todo", () => {

        todo_service.delete_todo(1);
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
    
    
    test("update_todo", () => {

        todoitem = {
            "title": "P1",
            "description": "G1",
            "done": false
        }
        todo_service.update_todo(0,todoitem);
        expect(todo_service.get_todos().todo.length).toEqual(3);
        expect(todo_service.todo_data.todo[0].title).toEqual("P1");
    });
    

   


});

    
