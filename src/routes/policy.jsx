import PolicyData from '../requests/policyData';

export default function Policy() {
    return (
        <div className='container'>
            <label className='sub-title'>Policy Average Active Duration Data</label>
            <PolicyData />
        </div>
    );
}