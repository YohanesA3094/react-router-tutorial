import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function PatientData() {
    const [patients, setPatients] = useState([]);

    const [province, setProvince] = useState('Seoul');

    const headers = {
        'Authorization': 'Bearer 2|obroR3rzuh0OuJaunAfWAvZXAJziriJfio9kcoaC',
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        Axios.post('http://test.com:8000/api/report/patient', {province: province}, {
            headers: headers
        }).then((response) => {
            if(response.status === 200){
                setPatients(response.data.data);
            }
        });
    }, []);

    return (
        <table className='table'>
            <thead className='table-header'>
                <tr>
                    <th className='table-data header-item'>Province</th>
                    <th className='table-data header-item'>Sex</th>
                    <th className='table-data header-item'>Age</th>
                    <th className='table-data header-item'>Total Patient</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((pa, idx) => (
                    <tr className='table-row' key={idx}>
                        <td className='table-data'>{pa.province}</td>
                        <td className='table-data'>{pa.sex ? pa.sex : '-'}</td>
                        <td className='table-data'>{pa.age ? pa.age : '-'}</td>
                        <td className='table-data'>{pa.patient_count}</td>
                    </tr>
                ))}
            </tbody>            
        </table>
    )
}