import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Detail, HomePage, Other, Register, SignIn } from './page';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
