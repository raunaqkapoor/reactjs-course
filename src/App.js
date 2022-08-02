import Todo from './components/Todo';

function App() {
    return (
        <div>
            <h1>My Todo List</h1>
            <Todo text='Learn React' />
            <Todo text='Master React' />
            <Todo text='Explore full React potential' />
        </div>
    );
}

export default App;
