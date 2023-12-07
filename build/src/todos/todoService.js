"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
// we can write the below logic using functions, but we will be using the class based implementaion here
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false,
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
