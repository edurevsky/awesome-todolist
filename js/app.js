import { AppController } from "./controllers/todo-controller.js";
import { TodoService } from "./services/todo-service.js";

new AppController(new TodoService());
