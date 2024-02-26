import styles from './page.modules.css'
import Render from './test3D.tsx'

function App() {
    return (
        <main>
            <h1 className={styles.greeting}>Hey there!</h1>
            <Render />
        </main>
    );
}

export default App;
