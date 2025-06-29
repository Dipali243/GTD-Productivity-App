// context/TaskContext.js

import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [inbox, setInbox] = useState([]);
  const [projects, setProjects] = useState([]);
  const [nextActions, setNextActions] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addToInbox = (text) => {
    if (!text.trim()) return;
    setInbox([...inbox, { id: Date.now().toString(), text }]);
  };

  const moveToProject = (task) => {
    setProjects([...projects, task]);
    setInbox(inbox.filter((t) => t.id !== task.id));
  };

  const moveToNextAction = (task, context) => {
    setNextActions([...nextActions, { ...task, context }]);
    setInbox(inbox.filter((t) => t.id !== task.id));
  };

  const markAsComplete = (id) => {
    const task = nextActions.find((t) => t.id === id);
    if (task) {
      setCompletedTasks([...completedTasks, task]);
      setNextActions(nextActions.filter((t) => t.id !== id));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        inbox,
        projects,
        nextActions,
        completedTasks,
        addToInbox,
        moveToProject,
        moveToNextAction,
        markAsComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
