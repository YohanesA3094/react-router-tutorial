import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ReactECharts from 'echarts-for-react'

export default function PolicyChart() {
    const [option, setOption] = useState({});
    const headers = {
        'Authorization': 'Bearer 2|obroR3rzuh0OuJaunAfWAvZXAJziriJfio9kcoaC',
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        Axios.post('http://test.com:8000/api/chart/policy', {}, {
            headers: headers
        }).then((response) => {
            if(response.status === 200){
                let chartOption = {
                    title: {
                        text: 'Average Active Days by Policy Type',
                        left: 'center',
                    },
                    xAxis: {
                        type: 'category',
                        name: 'Policy Type',
                        data: response.data.data.xAxis
                    },
                    yAxis: {
                        type: 'value',
                        name: 'Active Days',
                    },
                    series: [
                        {
                            type: 'bar',
                            data: response.data.data.yAxis
                        }
                    ]
                };
                setOption(chartOption);
            }
        });
    }, []);

    return (
        <ReactECharts option={option} />
    )
}