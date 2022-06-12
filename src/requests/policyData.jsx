import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function PolicyData() {
    const [policies, setPolicies] = useState([]);

    const headers = {
        'Authorization': 'Bearer 2|obroR3rzuh0OuJaunAfWAvZXAJziriJfio9kcoaC',
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        Axios.post('http://test.com:8000/api/report/policy', {}, {
            headers: headers
        }).then((response) => {
            if(response.status === 200){
                setPolicies(response.data.data);
            }
        });
    }, []);

    return (
        <table className='table'>
            <thead className='table-header'>
                <tr>
                    <th className='table-data header-item'>Policy Type</th>
                    <th className='table-data header-item'>Average Active Duration</th>
                </tr>
            </thead>
            <tbody>
            {policies.map((pl, idx) => (
                    <tr className='table-row' key={idx}>
                        <td className='table-data'>{pl.type}</td>
                        <td className='table-data'>{pl.avg_count_days}</td>
                    </tr>
                ))}
            </tbody>            
        </table>
    )
}