import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import tableCss from './table';
import './ChartStyles.css';

export default function TableChart() {
    const dataOptions = {
        chart: {
            type: 'column',
        },

        title: {
            text: 'Total region ancillary income, grouped by carrier code'
        },

        xAxis: {
            categories: ["Excess Baggage", "Document Print", "Lounge", "Upgrade", "Paid Seat","Empty Row"]
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Ancillary income in millions(AED)'
            }
        },

        tooltip: {
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [
            {
                "name": "UAE",
                "data":[300, 450,175,200,58,4],
                "stack": "EK"
            },
            {
                "name": "UK",
                "data":[400,150,75,200,58,2],
                "stack": "DNATA"
            },
            {
                "name": "Europe",
                "data":[620,300,100,200,58,1.25],
                "stack": "EK"
            },
            {
                "name": "Asia",
                "data":[220,700,60,600,12,0.5],
                "stack": "EK"
            },
            {
                "name": "USA",
                "data":[800,170,390,1200,25,0.5],
                "stack": "OTHERS"
            }
        ]
};

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={dataOptions} />
        </div>
    )
}
