import React, { useState } from 'react';

const initialTasks = {
  todo: [
    { id: '1', content: 'Define project requirements' },
    { id: '2', content: 'Research technologies' },
    { id: '3', content: 'Draft project proposal' },
    { id: '4', content: 'Prepare budget estimate' },
    { id: '5', content: 'Schedule initial meetings' },
    { id: '6', content: 'Identify project stakeholders' },
    { id: '7', content: 'Create project timeline' },
    { id: '8', content: 'Set up project repository' }
  ],
  inProcess: [
    { id: '9', content: 'Set up development environment' },
    { id: '10', content: 'Create initial project structure' },
    { id: '11', content: 'Implement core functionality' },
    { id: '12', content: 'Design database schema' },
    { id: '13', content: 'Develop user authentication' },
    { id: '14', content: 'Integrate third-party APIs' },
    { id: '15', content: 'Write unit tests' },
    { id: '16', content: 'Conduct code reviews' }
  ],
  pending: [
    { id: '17', content: 'Design UI/UX' },
    { id: '18', content: 'Write project documentation' },
    { id: '19', content: 'Prepare user training materials' },
    { id: '20', content: 'Test deployment process' },
    { id: '21', content: 'Gather user feedback' },
    { id: '22', content: 'Fix reported bugs' },
    { id: '23', content: 'Update project roadmap' },
    { id: '24', content: 'Conduct final review' }
  ],
  done: [
    { id: '25', content: 'Initial project meeting' },
    { id: '26', content: 'Finalize project plan' },
    { id: '27', content: 'Complete project setup' },
    { id: '28', content: 'Obtain project approval' },
    { id: '29', content: 'Deploy application to staging' },
    { id: '30', content: 'Perform user acceptance testing' },
    { id: '31', content: 'Go live with application' },
    { id: '32', content: 'Project retrospective' }
  ]
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (e, taskId, sourceColumn) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumn = e.dataTransfer.getData('sourceColumn');

    if (taskId && sourceColumn) {
      const sourceTasks = Array.from(tasks[sourceColumn]);
      const targetTasks = Array.from(tasks[targetColumn]);

      // Remove task from source
      const [task] = sourceTasks.filter(task => task.id === taskId);
      const updatedSourceTasks = sourceTasks.filter(task => task.id !== taskId);

      // Add task to target
      targetTasks.push(task);

      setTasks({
        ...tasks,
        [sourceColumn]: updatedSourceTasks,
        [targetColumn]: targetTasks
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-200">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Kanban Board</h1>
        <div className="flex space-x-6 overflow-x-auto">
          {Object.entries(tasks).map(([status, taskList]) => (
            <div
              key={status}
              className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow-md w-80 min-w-max"
              onDrop={(e) => handleDrop(e, status)}
              onDragOver={handleDragOver}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-700 capitalize">{status}</h2>
              {taskList.map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id, status)}
                  className="bg-white p-3 mb-3 rounded-lg shadow-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  {task.content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
