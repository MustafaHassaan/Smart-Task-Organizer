<script>
    import { addTask } from '../lib/TaskStore';

    let title = '';
    let category = 'General';
    let priority = 'Medium';
    let error = '';

    const handleSubmit = () => {
        if (!title.trim()) {
            error = 'Please enter a task title';
            return;
        }
        
        addTask({ title, category, priority });
        
        // Reset form
        title = '';
        category = 'General';
        priority = 'Medium';
        error = '';
    };
</script>

<form on:submit|preventDefault={handleSubmit} class="task-form">
    <div class="input-group">
        <input 
            type="text" 
            bind:value={title} 
            placeholder="What needs to be done?" 
            class:error={error}
        />
        {#if error}
            <span class="error-msg">{error}</span>
        {/if}
    </div>

    <div class="controls">
        <select bind:value={category}>
            <option>General</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Shopping</option>
        </select>

        <select bind:value={priority}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>

        <button type="submit">Add Task</button>
    </div>
</form>

<style>
    .task-form {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.8rem 1rem;
        border-radius: 8px;
        color: white;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    input:focus {
        outline: none;
        border-color: #bb86fc;
        box-shadow: 0 0 10px rgba(187, 134, 252, 0.2);
    }

    input.error {
        border-color: #ff5252;
    }

    .error-msg {
        color: #ff5252;
        font-size: 0.8rem;
    }

    .controls {
        display: flex;
        gap: 1rem;
    }

    select {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        padding: 0.5rem;
        border-radius: 8px;
        flex: 1;
        cursor: pointer;
    }

    button {
        background: linear-gradient(135deg, #bb86fc 0%, #6200ee 100%);
        color: white;
        border: none;
        padding: 0.5rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(187, 134, 252, 0.4);
    }

    button:active {
        transform: translateY(0);
    }
</style>
