import React, { useState, useEffect } from 'react';
import './Table.module.css';

function TableData() {
  
  
    const [data, getData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const URL = 'https://www.balldontlie.io/api/v1/games';

    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response.data);
            })

    }

    return (
        <div className='App'>
           <table>
            <thead>
              <tr>
                    <th>Team Name</th>
                    <th>City</th>
                    <th>Abbrivation</th>
                    <th>Conference</th>
                    <th>Division</th>
                </tr>
                </thead>
            <tbody>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.visitor_team.full_name}</td>
                        <td>{item.visitor_team.city}</td>
                        <td>{item.visitor_team.abbreviation}</td>
                        <td>{item.visitor_team.conference}</td>
                        <td>{item.visitor_team.division}</td>
                    </tr>
                ))}
            </tbody>
            </table>
           

        </div>
    );
}

export default TableData;