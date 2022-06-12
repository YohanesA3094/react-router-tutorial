import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ReactECharts from 'echarts-for-react'

export default function CaseChart() {
    const [option, setOption] = useState({});
    const headers = {
        'Authorization': 'Bearer 2|obroR3rzuh0OuJaunAfWAvZXAJziriJfio9kcoaC',
        'Content-Type': 'application/json',
    }

    useEffect(() => {
        Axios.post('http://test.com:8000/api/chart/case', {}, {
            headers: headers
        }).then((response) => {
            if(response.status === 200){
                let chartOption = {
                    title: {
                        text: 'Top 5 Most Confirmed Case by City',
                        left: 'center',
                    },
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            type: 'pie',
                            name: 'Confirmed Case',
                            radius: '60%',
                            data: response.data.data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                                }
                            }
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