import React from 'react'
import "./Analytics.css"
import {BarChart,XAxis,Tooltip,CartesianGrid,YAxis,Bar,Legend,PieChart,Pie,LineChart,Line,Radar,PolarAngleAxis,RadarChart,PolarRadiusAxis,PolarGrid} from "recharts"
const Analytics = ({chart_i,chart_ii,chart_iii,chart_iv}) => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ];
      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
          
      const data3 = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ];
      const data4 = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      
                                  
      
                                  
      
                                  
    
      
  return (
    <div className='analytics'>
        {chart_i && (
        <>
        <header>
        <span className='followers'>Subscriber:</span>
        <span className='earnings'>Earnings:</span>
      </header>
      <BarChart className="chart" width={250} height={210} data={data}>
        <CartesianGrid strokeDasharray="100 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#ffc738" />
        <Bar dataKey="uv" fill="#F4A261" />
      </BarChart>
      </>)
        }
        {chart_ii && (
        <>
        <header>
        <span className='followers'>Subscriber:</span>
        <span className='earnings'>Earnings:</span>
      </header>
      <PieChart width={300} height={300}>
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#ffc738" />
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#F4A261" label />
      </PieChart>
      </>)
        }
        {chart_iii && (
        <>
        <header>
        <span className='followers'>Subscriber:</span>
        <span className='earnings'>Earnings:</span>
      </header>
      <RadarChart outerRadius={90} width={730} height={250} data={data3}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar  dataKey="A" stroke="#ffc738" fill="#ffc738" fillOpacity={0.6} />
        <Radar  dataKey="B" stroke="#F4A261" fill="#F4A261" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
      </>)
        }
        {chart_iv && (
        <>
        <header>
        <span className='followers'>Subscriber:</span>
        <span className='earnings'>Earnings:</span>
      </header>
      <LineChart width={250} height={250} data={data4}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#ffc738" />
        <Line type="monotone" dataKey="uv" stroke="#F4A261" />
      </LineChart>
      </>)
        }
        <span className="section-title"></span>
        <div className="row tall-square"></div>
        <div className="row tall-square"></div>
      
    </div>
  )
}

export default Analytics
