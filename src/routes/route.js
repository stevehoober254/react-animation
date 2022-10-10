import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';


export default function AnimatedRoutes() {
    const location = useLocation();

    return (
            <AnimatePresence>
                <Header />
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
    )
} 