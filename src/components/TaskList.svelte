<script>
    import { tasks, removeTask, toggleTask, updateTask } from '../lib/TaskStore';
    import { fade, slide } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let filter = 'All';
    let editingId = null;
    let editValue = '';
    let editCategory = '';
    let editPriority = '';

    $: filteredTasks = $tasks.filter(t => {
        if (filter === 'All') return true;
        if (filter === 'Active') return !t.completed;
        if (filter === 'Completed') return t.completed;
        return true;
    });

    const startEdit = (task) => {
        editingId = task.id;
        editValue = task.title;
        editCategory = task.category;
        editPriority = task.priority;
    };

    const saveEdit = (id) => {
        if (editValue.trim()) {
            updateTask(id, { 
                title: editValue, 
                category: editCategory, 
                priority: editPriority 
            });
        }
        editingId = null;
    };

    const handleKeydown = (e, id) => {
        if (e.key === 'Enter') saveEdit(id);
        if (e.key === 'Escape') editingId = null;
    };
</script>

<div class="task-list-container">
    <div class="filters">
        <button class:active={filter === 'All'} on:click={() => filter = 'All'}>All</button>
        <button class:active={filter === 'Active'} on:click={() => filter = 'Active'}>Active</button>
        <button class:active={filter === 'Completed'} on:click={() => filter = 'Completed'}>Completed</button>
    </div>

    {#if filteredTasks.length === 0}
        <div class="empty-state" in:fade>
            No tasks found. Add some to get started!
        </div>
    {:else}
        <ul class="task-list">
            {#each filteredTasks as task (task.id)}
                <li 
                    animate:flip={{duration: 300}}
                    transition:slide|local
                    class="task-item"
                    class:completed={task.completed}
                    class:editing={editingId === task.id}
                >
                    <div class="task-info">
                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            on:change={() => toggleTask(task.id)}
                        />
                        <div class="text-content">
                            {#if editingId === task.id}
                                <input 
                                    type="text" 
                                    class="edit-input" 
                                    bind:value={editValue} 
                                    on:keydown={(e) => handleKeydown(e, task.id)}
                                />
                                <div class="edit-meta">
                                    <select bind:value={editCategory}>
                                        <option>General</option>
                                        <option>Work</option>
                                        <option>Personal</option>
                                        <option>Shopping</option>
                                    </select>
                                    <select bind:value={editPriority}>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                            {:else}
                                <span class="title">{task.title}</span>
                                <div class="meta">
                                    <span class="category">{task.category}</span>
                                    <span class="priority {task.priority.toLowerCase()}">{task.priority}</span>
                                </div>
                            {/if}
                        </div>
                    </div>
                    
                    <div class="actions">
                        {#if editingId === task.id}
                            <button class="action-btn save-btn" on:click={() => saveEdit(task.id)} title="Save changes">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>
                            <button class="action-btn cancel-btn" on:click={() => editingId = null} title="Cancel">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        {:else}
                            <button class="action-btn edit-btn" on:click={() => startEdit(task)} title="Edit task">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                            <button class="action-btn delete-btn" on:click={() => removeTask(task.id)} title="Delete task">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .task-list-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .filters {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    .filters button {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
        padding: 0.4rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .filters button.active {
        background: #bb86fc;
        color: #121212;
        border-color: #bb86fc;
    }

    .task-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .task-item {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.2s ease, background 0.2s ease;
    }

    .task-item:hover {
        background: rgba(255, 255, 255, 0.07);
        transform: scale(1.01);
    }

    .task-item.editing {
        background: rgba(187, 134, 252, 0.1);
        border-color: rgba(187, 134, 252, 0.3);
    }

    .task-info {
        display: flex;
        gap: 1rem;
        align-items: center;
        flex: 1;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.5rem;
    }

    .edit-input {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid #bb86fc;
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-size: 1rem;
        width: 100%;
        outline: none;
    }

    .edit-meta {
        display: flex;
        gap: 0.5rem;
    }

    .edit-meta select {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.8rem;
        cursor: pointer;
    }

    .title {
        font-weight: 500;
        color: white;
    }

    .completed .title {
        text-decoration: line-through;
        color: rgba(255, 255, 255, 0.3);
    }

    .meta {
        display: flex;
        gap: 0.5rem;
        font-size: 0.75rem;
    }

    .category {
        color: rgba(255, 255, 255, 0.5);
    }

    .priority {
        padding: 0 0.4rem;
        border-radius: 4px;
    }

    .priority.low { color: #81c784; background: rgba(129, 199, 132, 0.1); }
    .priority.medium { color: #ffb74d; background: rgba(255, 183, 77, 0.1); }
    .priority.high { color: #e57373; background: rgba(229, 115, 115, 0.1); }

    .actions {
        display: flex;
        gap: 0.3rem;
    }

    .action-btn {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .edit-btn:hover {
        color: #bb86fc;
        background: rgba(187, 134, 252, 0.1);
    }

    .save-btn {
        color: #81c784;
    }
    
    .save-btn:hover {
        background: rgba(129, 199, 132, 0.1);
    }

    .cancel-btn:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
    }

    .delete-btn:hover {
        color: #ff5252;
        background: rgba(255, 82, 82, 0.1);
    }

    input[type="checkbox"] {
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
        accent-color: #bb86fc;
    }

    .empty-state {
        text-align: center;
        padding: 3rem;
        color: rgba(255, 255, 255, 0.4);
        font-style: italic;
    }
</style>
