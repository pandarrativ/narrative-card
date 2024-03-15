import { BrowserRouter, Routes, Route } from 'react-router-dom';

// card system
import CardHomePage from './pages/CardHomePage/CardHomePage';
import CardHistoryPage from './pages/CardHistoryPage/CardHistoryPage';

// mindmap system


//reframing system




export default function Routers(){  
    return (
        <BrowserRouter>
            <Routes>
                {/* card system */}
                <Route path="/card/home" element={<CardHomePage/>} />
                <Route path="/card/history" element={<CardHistoryPage/>} />



                {/* mindmap system */}



                {/* reframing system */}

            </Routes>
        </BrowserRouter>
    )
};