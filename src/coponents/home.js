import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Footer from "./footer/Footer";
import BarGraphs from "./BarGraph/BarGraphs";

function Home() {
  
  useEffect(() => {
    async function data() {
      
    }
    data();
  }, []);
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Dashboard</h4>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-right">
                    <li className="breadcrumb-item">
                      <Link to="/">University</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-cube-outline bg-primary  text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Students</h5>
                    </div>
                    <h3 className="mt-4">600</h3>

                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-briefcase-check bg-success text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Colleges</h5>
                    </div>
                    <h3 className="mt-4">3</h3>
                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-tag-text-outline bg-warning text-white"></i>
                    </div>
                    <div className="font-16">
                    <Link to="/staff">
               <i className="font-16"/> &ensp; STAFF
          </Link>
                    </div>
                    <h3 className="mt-4">10</h3>
                    <p className="text-muted mt-2 mb-0">Life time </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-danger text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs 5000</h3>

                    <p className="text-muted  mt-2 mb-0">This month</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-info text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs 50000</h3>

                    <p className="text-muted  mt-2 mb-0">This Year</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="card">
                  <div className="card-heading p-4">
                    <div className="mini-stat-icon float-right">
                      <i className="mdi mdi-buffer bg-light text-white"></i>
                    </div>
                    <div>
                      <h5 className="font-16">Revenue</h5>
                    </div>
                    <h3 className="mt-4">Rs 500000</h3>

                    <p className="text-muted  mt-2 mb-0">Life time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
          <div className="col-xl-12">
            <div className="card m-b-30">
              <div className="card-body">
                <h4 className="mt-0 header-title mb-4">Exam Toppers


                </h4>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                    <tr>
                    <th scope="col">Seat No.</th>
                        <th scope="col">FirstName</th>
                        <th >LastName</th>
                        <th scope="col">Percentile</th>
                        <th scope="col">College</th>

                 
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9.9</th>
                    <th>TSEC</th>
                    </tr>
                    
                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9.7</th>
                    <th>SPCE</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9.68</th>
                    <th>SPCE</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9.66</th>
                    <th>DJSCE</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9.64</th>
                    <th>TSEC</th>
                    </tr>
                   


                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <h4>Monthly Footfall:</h4>
        <BarGraphs/>
        







          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
