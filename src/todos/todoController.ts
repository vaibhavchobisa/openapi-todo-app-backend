import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  /**
   * We can provide description about the API here, which would then be included in the OpenAPI spec file 'swagger.json'.
   * For example:
   * This is the controller for getting a todo respective of its id.
   */
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    let todoService = new TodoService();
    return todoService.get(todoId);
  }
}
