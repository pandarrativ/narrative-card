import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// card system
import CardHomePage from './pages/CardHomePage/CardHomePage';
import CardHistoryPage from './pages/CardHistoryPage/CardHistoryPage';

// mindmap system


//reframing system




export default function Routers(){  
    return (
        <BrowserRouter>
            <Routes>
            {/* Redirect from "/" to "/card/home" */}
            <Route path="/" element={<Navigate replace to="/card/home" />} />



                {/* card system */}
                <Route path="/card/home" element={<CardHomePage/>} />
                <Route path="/card/history" element={<CardHistoryPage/>} />



                {/* mindmap system */}



                {/* reframing system */}

            </Routes>
        </BrowserRouter>
    )
};