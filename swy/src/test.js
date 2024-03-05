import React, { useState } from 'react';
import './App.css';

const TimesheetForm = () => {
  const [rows, setRows] = useState(1);
  const [totalWorkingHours, setTotalWorkingHours] = useState({
    Mon: Array(8).fill(0),
    Tue: Array(8).fill(0),
    Wed: Array(8).fill(0),
    Thu: Array(8).fill(0),
    Fri: Array(8).fill(0),
    Sat: Array(8).fill(0),
    Sun: Array(8).fill(0),
  });

  const addRow = () => {
    setRows(prevRows => prevRows + 1);
  };

  const handleTimeChange = (e, day, index) => {
    const { value } = e.target;
    const newTotalWorkingHours = { ...totalWorkingHours };
    newTotalWorkingHours[day][index] = parseFloat(value);
    setTotalWorkingHours(newTotalWorkingHours);

    // If the selected day is not Sunday and not the last row, adjust the time for the next day in the same row
    if (day !== 'Sun' && index < rows - 1) {
      const nextDay = days[(days.indexOf(day) + 1) % 7]; // Get the next day
      newTotalWorkingHours[nextDay][index] = parseFloat(value); // Set the next day's time
      setTotalWorkingHours({ ...newTotalWorkingHours }); // Update the state
    }
  };

  const calculateTotalHours = () => {
    let totalHours = 0;
    Object.values(totalWorkingHours).forEach(dayHours => {
      totalHours += dayHours.reduce((acc, val) => acc + val, 0);
    });
    return totalHours;
  };

  const calculateAH = (day) => {
    if (day === 'Sun') return 0;
    return totalWorkingHours[day].reduce((acc, val) => acc + val, 0) ;
  };

  const totalHours = calculateTotalHours();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Define days array

  return (
    <div>
      <div className="nav-header">
        <div className="brand-logo">
          <a href="index.html">
            <b className="logo-abbr">
              <img src="../images/logo.png" alt="" />
            </b>
            <span className="logo-compact">
              <img src="../images/logo-compact.png" alt="" />
            </span>
            <span className="brand-title">
              <img src="../images/logo-text.png" alt="" style={{ width: '100%', marginTop: '-17px' }} />
            </span>
          </a>
        </div>
      </div>
      <div className="header">
        <div className="header-content clearfix">
          <div className="nav-control">
            <div className="hamburger">
              <span className="toggle-icon"><i className="icon-menu"></i></span>
            </div>
          </div>
          <div className="header-left">
            <div className="input-group icons">
              <div className="input-group-prepend">
                <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1">
                  <i className="mdi mdi-magnify"></i>
                </span>
              </div>
              <input type="search" className="form-control" placeholder="Search Dashboard" aria-label="Search Dashboard" />
              <div className="drop-down animated flipInX d-md-none">
                <form action="#">
                  <input type="text" className="form-control" placeholder="Search" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
            <li className="breadcrumb-item active"><a href="javascript:void(0)">Timesheet Managment System</a></li>
          </ol>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 form-space">
            <div className="card">
              <div className='card-body'>

                <div className="exts">
                  <h2>Timesheet Management System</h2>
                  <div className="row hor dept">
                    <div className="col temp">
                      <div className="card">
                        <div className="card-body">
                          <h5>Name: Anil Kumar Sharma</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5>Staff Id: 1161</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5>Dept: Computer Integrated Engineering</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <h4 className="text-center w-100" style={{
                    margin: 'auto',
                    border: '1px solid #f3f3f3',
                    width: '91%', // Note: Important is not used in React inline styles
                    padding: '15px',
                    marginTop: '20px',
                  }}>
                    Time Sheet Entry : Project Hours
                  </h4>
                </div>
                <div className="container">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered zero-configuration">
                      <thead>
                        <tr>
                          <th rowSpan="2">Project</th>
                          <th rowSpan="2">Department - Work Code</th>
                          <th>Date</th>
                          {[...Array(7)].map((_, i) => (
                            <th key={i}> {i + 22}-Jul</th>
                          ))}
                          <th rowSpan="2">Total Working Hours</th>
                        </tr>
                        <tr>
                          <th>Day</th>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                            <th key={dayIndex}>{day}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(rows)].map((_, rowIndex) => (
                          <tr key={rowIndex}>
                            <td>
                              <select className="form-control" id={`project${rowIndex + 1}`}>
                                <option>10513 SB</option>
                                <option>10511 SB</option>
                              </select>
                            </td>
                            <td colSpan="2">
                              <input type="text" id={`dept${rowIndex + 1}`} onChange={copyText} />
                            </td>
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                              <td key={dayIndex}>
                                <select
                                  name={`${day.toLowerCase()}${rowIndex + 1}`}
                                  className={`${day.toLowerCase()}${rowIndex + 1}`}
                                  id={`${day.toLowerCase()}${rowIndex + 1}`}
                                  onChange={(e) => handleTimeChange(e, day, rowIndex)}
                                >
                                  <option value="0.00">--</option>
                                  {[...Array(32)].map((_, i) => (
                                    <option key={i} value={i / 2}>{`${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`}</option>
                                  ))}
                                </select>
                              </td>
                            ))}
                            {rowIndex === 0 && (
                              <td rowSpan={rows}>
                                <input type="number" value={totalHours} readOnly />
                              </td>
                            )}
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="11">
                            <button style={{marginTop:'-20px', marginBottom:'20px'}}type="button" onClick={addRow} className="btn btn-primary valid-sub">
                              Add Row
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2">Weekly summary</td>
                          <td align="center"><b>ST</b></td>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <td key={index} align="center">8</td>
                          ))}
                          <td align="center">64</td>
                        </tr>
                        <tr align="center">
                          <td colSpan="2"><b></b></td>
                          <td align="center"><b>AH</b></td>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <td key={index}>{calculateAH(day)}</td>
                          ))}
                          <td>{totalHours}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const copyText = () => {
  // Implement the copy text function if needed
};

export default TimesheetForm;

