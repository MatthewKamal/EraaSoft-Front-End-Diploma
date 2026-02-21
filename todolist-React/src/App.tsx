import { CiEdit } from "react-icons/ci";
import "./App.css";
import { MdDelete, MdDisabledByDefault, MdDoneAll } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useRef, useState } from "react";

type Task = {
  taskName: string;
  taskStatus: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { taskName: "Read a book", taskStatus: true },
    { taskName: "Read a book 1", taskStatus: false },
    { taskName: "Read a book 2", taskStatus: true },
    { taskName: "Read a book 3", taskStatus: false },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const addInput = useRef<HTMLInputElement | null>(null);

  const addNewTask = (): void => {
    if (!addInput.current) return;
    if (addInput.current.value.trim() === "") return;

    const newTask: Task = {
      taskName: addInput.current.value,
      taskStatus: false,
    };

    setTasks([...tasks, newTask]);
    addInput.current.value = "";
  };

  const deleteTask = (selectedIndex: number): void => {
    const copy = [...tasks];
    copy.splice(selectedIndex, 1);
    setTasks(copy);
  };

  const changeStatus = (selectedIndex: number): void => {
    const copy = [...tasks];
    copy[selectedIndex].taskStatus = !copy[selectedIndex].taskStatus;
    setTasks(copy);
  };

  return (
    <>
      <div className="wrap">
        <aside className="panel">
          <div className="circle-wrap">
            <svg className="progress-circle" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#5b6cff" />
                  <stop offset="50%" stopColor="#4ec6a7" />
                  <stop offset="100%" stopColor="#4ec6a6" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#eef2ff"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#g1)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
                strokeDasharray="251.2"
                strokeDashoffset="100"
              />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fontSize="18"
                fill="#22303f"
                fontWeight="700"
              >
                0
              </text>
              <text
                x="50"
                y="72"
                textAnchor="middle"
                fontSize="10"
                fill="#6b7788"
              >
                Total
              </text>
            </svg>
            <div className="sub">0% Completed</div>
          </div>

          <h3>Today's tasks</h3>
          <div className="today-list"></div>
        </aside>

        <main className="main">
          <div className="topline">
            <h1>To-Do List</h1>
          </div>

          <div className="add-row">
            <input ref={addInput} placeholder="Add a new task..." />
            <button onClick={addNewTask} className="btn-add">
              Add
            </button>
          </div>

          <div className="container-tasks">
            {tasks.map((task, index) => (
              <div key={index} className="mini-task">
                <div className="list">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{task.taskName}</p>
                    {task.taskStatus ? (
                      <MdDoneAll size={30} />
                    ) : (
                      <MdDisabledByDefault size={30} />
                    )}
                  </div>

                  <div className="Icons">
                    <button
                      className="filter-btn"
                      onClick={() => setShowModal(true)}
                    >
                      <CiEdit size={30} />
                    </button>
                    <button
                      className="filter-btn"
                      onClick={() => deleteTask(index)}
                    >
                      <MdDelete size={30} />
                    </button>
                    <button
                      className="filter-btn"
                      onClick={() => changeStatus(index)}
                    >
                      <FaHeart size={30} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {showModal && (
        <div
          className="fixed w-100 bg-danger updatedModal"
          style={{ height: "100vh" }}
        >
          <button
            className="filter-btn text-success"
            onClick={() => setShowModal(false)}
          >
            <MdDelete size={30} />
          </button>
        </div>
      )}
    </>
  );
}
