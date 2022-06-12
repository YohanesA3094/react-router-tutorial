import PatientData from '../requests/patientData';

export default function Policy() {
    return (
        <div className='container'>
            <label className='sub-title'>Patient Info Data</label>
            <PatientData />
        </div>
    );
}