// src/components/TaskList.tsx
import React, { useState } from "react";
import "./TaskList.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const updateTask = (id: number) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: editText } : task))
    );
    setEditingId(null);
    setEditText("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h2>Task Manager</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <input
                value={editText}
                className="edit-input"
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
            )}
            {editingId === task.id ? (
              <button className="edit" onClick={() => updateTask(task.id)}>
                Save
              </button>
            ) : (
              <button
                className="edit"
                onClick={() => {
                  setEditingId(task.id);
                  setEditText(task.text);
                }}
              >
                Edit
              </button>
            )}
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
