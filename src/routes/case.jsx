import CaseData from '../requests/caseData';

export default function Policy() {
    return (
        <div className='container'>
            <label className='sub-title'>Top 5 Confirmed Case by City</label>
            <CaseData />
        </div>
    );
}