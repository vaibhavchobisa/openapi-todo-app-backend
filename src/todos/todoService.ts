import { Todo } from "./todo";

// export type TodoCreationParams = {
//   title: string;
//   description: string;
// };

// The above is same as the more elegant writing style as used below:

export type TodoCreationParams = Pick<Todo, "title" | "description">;

// we can write the below logic using functions, but we will be using the class based implementaion here

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    console.log("mock db call");
    return {
      id: "1",
      title: "mocked todo",
      description: "mocked todo",
      done: false,
    };
  }
}
