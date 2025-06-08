# 📝 To-Do API (Flask + In-Memory Storage)

This is the backend for a simple full-stack To-Do List app built with **Flask** and **Python**. It supports basic CRUD operations on an in-memory list of to-do items, and is ready to connect to a React frontend.

---

## 🚀 Features

- ✅ Create, read, update, and delete to-do items
- 🔎 Search/filter-ready structure
- ⚡ Fast in-memory performance
- 🔗 CORS-enabled for frontend integration
- 📦 Easy setup with `venv` and `pip`

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/wbconnor/to-do.git
cd to-do/backend
```

### 2. Create and activate a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
python app.py
```

> The API will be available at: `http://localhost:5000`

**💡 Note**
Run these when you need to restart the server:

```sh
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

---

## 📬 API Endpoints

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| GET    | `/todos`      | Get all to-do items       |
| POST   | `/todos`      | Create a new to-do item   |
| PUT    | `/todos/<id>` | Update a to-do item by ID |
| DELETE | `/todos/<id>` | Delete a to-do item by ID |

### ✅ Example POST request body

```json
{
  "title": "Build frontend",
  "description": "Connect to API and display data"
}
```

### ✅ Example PUT request body

```json
{
  "title": "Build frontend UI",
  "completed": true
}
```

---

## 🧱 To-Do Item Structure

Each to-do item is represented as a dictionary with the following fields:

```json
{
  "id": "string (UUID)",
  "title": "string",
  "description": "string",
  "created_at": "ISO 8601 timestamp",
  "completed": true | false
}
```

---

## 🧹 Notes

* This app uses an **in-memory list**, so all data will be lost when the server is restarted.
* For production or more realistic development, you could add JSON file persistence or connect to a database like SQLite or PostgreSQL.
* This backend is designed to be paired with a React frontend served from `localhost:3000`.
