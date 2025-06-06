from flask import Flask, jsonify, request
from flask_cors import CORS
import todos  # ← import your module

app = Flask(__name__)
CORS(app)

@app.route("/todos", methods=["GET"])
def get_todos():
    return jsonify(todos.get_all_todos())

@app.route("/todos", methods=["POST"])
def add_todo():
    data = request.json
    todo = todos.create_todo(data)
    return jsonify(todo), 201

@app.route("/todos/<todo_id>", methods=["PUT"])
def update(todo_id):
    data = request.json
    todo = todos.update_todo(todo_id, data)
    if todo:
        return jsonify(todo)
    return jsonify({"error": "Todo not found"}), 404

@app.route("/todos/<todo_id>", methods=["DELETE"])
def delete(todo_id):
    todos.delete_todo(todo_id)
    return "", 204

if __name__ == "__main__":
    app.run(debug=True, port=5050, use_reloader=False)