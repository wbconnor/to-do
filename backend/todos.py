from datetime import datetime
import uuid

todos = []

def get_all_todos():
    return todos

def create_todo(data):
    todo = {
        "id": str(uuid.uuid4()),
        "title": data.get("title", ""),
        "description": data.get("description", ""),
        "created_at": datetime.utcnow().isoformat(),
        "completed": False
    }
    todos.append(todo)
    return todo

def update_todo(todo_id, data):
    for todo in todos:
        if todo["id"] == todo_id:
            todo["title"] = data.get("title", todo["title"])
            todo["description"] = data.get("description", todo["description"])
            todo["completed"] = data.get("completed", todo["completed"])
            return todo
    return None

def delete_todo(todo_id):
    global todos
    todos = [t for t in todos if t["id"] != todo_id]