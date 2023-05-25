import { Routes, Route } from 'react-router-dom'
import Menu from './MenuFunc';
import HomePage from './HomePageFunc';
import DriftPage from './DriftPageFunc';
import TimeAttackPage from './TimeAttackPageFunc';
import ForzaPage from './ForzaPageFunc';

export default function RacingTaxi() {
    return (
        <div className="page">
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/drift" element={<DriftPage />} />
                <Route path="/timeattack" element={<TimeAttackPage />} />
                <Route path="/forza" element={<ForzaPage />} />
            </Routes>
        </div>
    );
}