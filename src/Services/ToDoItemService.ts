import http from "../http-common";
import TodoItem from '../Models/ToDoItem';

const getAll = () => {
    return http.get("/todoitems");
  };

const AddToDoItem = (data : TodoItem) => {
    return http.post("/todoitem", data)
};

export default {
    getAll,
    AddToDoItem
};