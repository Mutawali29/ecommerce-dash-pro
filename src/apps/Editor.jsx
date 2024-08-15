import React, { useState } from 'react';

const Editor = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newImages, setNewImages] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');
  const [editImages, setEditImages] = useState([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          images: newImages
        }
      ]);
      setNewTask('');
      setNewImages([]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditTask(task);
    setEditTaskText(task.text);
    setEditImages(task.images);
  };

  const saveEdit = () => {
    if (editTaskText.trim()) {
      setTasks(tasks.map(task =>
        task.id === editTask.id
          ? { ...task, text: editTaskText, images: editImages }
          : task
      ));
      setEditTask(null);
      setEditTaskText('');
      setEditImages([]);
    }
  };

  const cancelEdit = () => {
    setEditTask(null);
    setEditTaskText('');
    setEditImages([]);
  };

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map(file => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImages).then(results => {
        if (editTask) {
          setEditImages(prevImages => [...prevImages, ...results]);
        } else {
          setNewImages(prevImages => [...prevImages, ...results]);
        }
      });
    }
  };

  const handleImageDelete = (index, isEditing) => {
    if (isEditing) {
      setEditImages(prevImages => prevImages.filter((_, i) => i !== index));
    } else {
      setNewImages(prevImages => prevImages.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Editor</h1>

      {/* Form to add task */}
      <div className="mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-3 w-full rounded-md shadow-md mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <label className="block mb-4 cursor-pointer">
          <span className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">Upload Images</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        {newImages.length > 0 && (
          <div className="mb-4 flex flex-wrap">
            {newImages.map((img, index) => (
              <div key={index} className="relative mb-2 mr-2 group">
                <img src={img} alt="Preview" className="max-w-xs h-auto rounded-md shadow-md transition-transform transform group-hover:scale-105" />
                <button
                  onClick={() => handleImageDelete(index, false)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors group-hover:block hidden"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={addTask}
          className="bg-cyan-500 text-white p-2 rounded-md hover:bg-cyan-600 transition-colors"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-none pl-0">
        {tasks.map(task => (
          <li key={task.id} className="flex flex-col mb-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition-colors group">
            {editTask && editTask.id === task.id ? (
              <div className="flex flex-col w-full">
                <div className="flex mb-2">
                  <button
                    onClick={() => handleFormat('bold')}
                    className="bg-gray-200 text-black p-2 rounded-l-md hover:bg-gray-300 transition-colors"
                  >
                    B
                  </button>
                  <button
                    onClick={() => handleFormat('italic')}
                    className="bg-gray-200 text-black p-2 rounded-r-md hover:bg-gray-300 transition-colors"
                  >
                    I
                  </button>
                </div>
                <div
                  contentEditable
                  className="border p-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onInput={(e) => setEditTaskText(e.currentTarget.innerHTML)}
                  dangerouslySetInnerHTML={{ __html: editTaskText }}
                />
                <label className="block mb-4 cursor-pointer">
                  <span className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">Upload Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {editImages.length > 0 && (
                  <div className="mb-4 flex flex-wrap">
                    {editImages.map((img, index) => (
                      <div key={index} className="relative mb-2 mr-2 group">
                        <img src={img} alt="Preview" className="max-w-xs h-auto rounded-md shadow-md transition-transform transform group-hover:scale-105" />
                        <button
                          onClick={() => handleImageDelete(index, true)}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors group-hover:block hidden"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={saveEdit}
                  className="bg-green-500 text-white p-2 rounded-md mr-2 hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex-1">
                <span dangerouslySetInnerHTML={{ __html: task.text }}></span>
                {task.images.length > 0 && (
                  <div className="mt-2 flex flex-wrap">
                    {task.images.map((img, index) => (
                      <div key={index} className="relative mb-2 mr-2 group">
                        <img src={img} alt="Task" className="max-w-xs h-auto rounded-md shadow-md transition-transform transform group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {!editTask || editTask.id !== task.id ? (
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => startEditing(task)}
                  className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Editor;
