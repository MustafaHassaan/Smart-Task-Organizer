<script>
  import TaskForm from './components/TaskForm.svelte';
  import TaskList from './components/TaskList.svelte';
</script>

<main class="app-container">
  <header>
    <h1>Smart Task <span>Organizer</span></h1>
    <p>Minimalist productivity for your daily goals.</p>
  </header>

  <section class="content">
    <TaskForm />
    <TaskList />
  </section>

  <footer>
    <p>&copy; 2026 Mostafa's Mini App. Built with Svelte.</p>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0f111a;
    background-image: radial-gradient(circle at 50% 0%, rgba(187, 134, 252, 0.1) 0%, transparent 50%);
    color: #e0e0e0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  .app-container {
    width: 100%;
    max-width: 600px;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    text-align: center;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 800;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #fff 0%, #bb86fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 span {
    font-weight: 300;
  }

  header p {
    color: rgba(255, 255, 255, 0.5);
    margin-top: 0.5rem;
  }

  .content {
    flex: 1;
  }

  footer {
    text-align: center;
    padding: 2rem 0;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
