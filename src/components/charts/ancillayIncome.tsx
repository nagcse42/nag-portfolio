import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function AncillayIncome() {
const options = {
    chart: {
        type: 'column',
        width: 500
    },
    title: {
        text: 'Ancillary Report'
    },
    xAxis: {
        categories: ['Excess Baggage', 'Document Print', 'Lounge', 'Paid Seat', 'Wheel Chair']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Income in Millions($)'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                   'black'
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            'white' || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Dubai',
        data: [100, 10, 220, 45, 2]
    }, {
        name: 'London',
        data: [250, 25, 35, 22, 11]
    }, {
        name: 'USA',
        data: [300, 180, 124, 12, 35]
    }, {
        name: 'Europe',
        data: [350, 41, 44, 62, 85]
    }, {
        name: 'Asia',
        data: [150, 41, 24, 62, 85]
    }
]
};


    return (
        <div style={{width:'500px'}}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
