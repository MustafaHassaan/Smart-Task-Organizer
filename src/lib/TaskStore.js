import { writable } from 'svelte/store';

// Initialize tasks from localStorage if available
const initialTasks = JSON.parse(localStorage.getItem('smart-tasks')) || [];

export const tasks = writable(initialTasks);

// Subscribe to changes and update localStorage
tasks.subscribe(value => {
    localStorage.setItem('smart-tasks', JSON.stringify(value));
});

export const addTask = (task) => {
    tasks.update(allTasks => {
        return [...allTasks, { ...task, id: Date.now(), completed: false }];
    });
};

export const removeTask = (id) => {
    tasks.update(allTasks => allTasks.filter(t => t.id !== id));
};

export const toggleTask = (id) => {
    tasks.update(allTasks => {
        return allTasks.map(t => {
            if (t.id === id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
    });
};

export const updateTask = (id, updates) => {
    tasks.update(allTasks => {
        return allTasks.map(t => {
            if (t.id === id) {
                return { ...t, ...updates };
            }
            return t;
        });
    });
};
