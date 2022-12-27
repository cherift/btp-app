import '../styles/index.scss';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className='container'>
            <Sidebar />
            <Body/>
        </div>
    );
}

export default App;