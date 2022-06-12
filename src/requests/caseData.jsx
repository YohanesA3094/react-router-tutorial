import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function CaseData() {
    const [cases, setCases] = useState([]);

    const headers = {
        'Authorization': 'Bearer 2|obroR3rzuh0OuJaunAfWAvZXAJziriJfio9kcoaC',
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        Axios.post('http://test.com:8000/api/report/case', {}, {
            headers: headers
        }).then((response) => {
            if(response.status === 200){
                setCases(response.data.data);
            }
        });
    }, []);

    return (
        <table className='table'>
            <thead className='table-header'>
                <tr>
                    <th className='table-data header-item'>City</th>
                    <th className='table-data header-item'>Total Confirmed</th>
                    <th className='table-data header-item'>test</th>
                </tr>
            </thead>
            <tbody>
                {cases.map((cs, idx) => (
                    <tr className='table-row' key={idx}>
                        <td className='table-data'>{cs.city}</td>
                        <td className='table-data'>{cs.total_confirmed}</td>
                        <td className='table-data'>{cs.region && cs.region.elderly_population_ratio ? cs.region.elderly_population_ratio : '-'}</td>
                    </tr>
                ))}
            </tbody>            
        </table>
    )
}