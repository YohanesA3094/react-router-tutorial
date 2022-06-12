import PolicyChart from '../requests/policyChart';
import CaseChart from '../requests/caseChart';

export default function Home() {
    return (
        <div className="container">
            <div className='chart-container'>
                <PolicyChart />
            </div>
            <div className='chart-container'>
                <CaseChart />
            </div>            
        </div>
    );
}