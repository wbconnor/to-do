# To-Do App Frontend (React + Tailwind)

This is the frontend for a full-stack To-Do application, built with **React**, styled with **Tailwind CSS**, and connected to a Flask-based REST API.

---

## 🚀 Features

- 📋 View a list of to-do items
- ✅ Mark tasks as complete/incomplete
- 🖊️ Edit tasks inline (with debounced auto-save)
- ➕ Add new tasks from an inline form
- 🔍 Filter by search text (real-time)
- 🔽 Sort by:
  - Date Created
  - Completion status
  - Alphabetical (A → Z)
- 🧽 Delete tasks (in edit mode)
- 🧑‍🎨 Responsive, polished UI using Tailwind

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Lodash.debounce](https://lodash.com/docs/4.17.15#debounce)

---

## 🛠️ Getting Started

Note: Start with the backend setup first for a streamline setup process

### 1. Install dependencies

```bash
cd frontend
npm install
````

### 2. Start the dev server

```bash
npm start
```

> This runs the app on [http://localhost:3000](http://localhost:3000)

> Make sure the backend server is running on `http://localhost:5050` or change the `baseURL` in `src/api.js`.

---

## 🧪 API Expectations

This frontend expects a backend with the following endpoints:

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/todos`     | Get all to-dos   |
| POST   | `/todos`     | Create new to-do |
| PUT    | `/todos/:id` | Update a to-do   |
| DELETE | `/todos/:id` | Delete a to-do   |

To test with the provided Flask backend, see the [`backend/README.md`](../backend/README.md).

---

### ⚠️ Note on Dependency Vulnerabilities

This project may show a small number of vulnerabilities when running:

```bash
npm audit
```

These come from indirect dependencies (primarily in the React + Tailwind toolchain). Attempting to auto-fix them using `npm audit fix --force` caused breaking changes to `react-scripts` and Tailwind integration.

For this reason, and to preserve a fully working and testable demo, known vulnerabilities were not force-fixed.

✅ **If this project were going to production**, I would:

* Replace `react-scripts` with a custom Vite/Webpack setup
* Lock and verify all dependencies with `npm audit`
* Ensure CI and automated tests cover regressions
