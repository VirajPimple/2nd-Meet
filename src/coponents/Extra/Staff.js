import React from 'react'

function DJ() {
  return (
    <div className="content-page">

    <div className="content">
      <div className="container-fluid">
        <div className="page-title-box">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h4 className="page-title">Staff Details</h4>
            </div>
            
          </div>
        </div>

       
        <div className="row">
          <div className="col-xl-12">
            <div className="card m-b-30">
              <div className="card-body">
                <h4 className="mt-0 header-title mb-4">Staff List


                </h4>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                    <tr>
                    <th scope="col">Sr No.</th>
                        <th scope="col">FirstName</th>
                        <th >LastName</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Email</th>
                        <th scope="col" colSpan="4">Designation</th>

                 
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9876543210</th>
                    <th>-</th>
                    <th>Poen</th>
                    </tr>
                    
                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9876543210</th>
                    <th>HarshJ@gmail.com</th>
                    <th>Professor</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9876543210</th>
                    <th>HarshJ@gmail.com</th>
                    <th>Professor</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9876543210</th>
                    <th>HarshJ@gmail.com</th>
                    <th>Operation Head</th>
                    </tr>

                    <tr>
                    <th>1.</th>
                    <th>Harsh</th>
                    <th>Jadeja</th>
                    <th>9876543210</th>
                    <th>HarshJ@gmail.com</th>
                    <th>Driver</th>
                    </tr>
                   


                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>
          </div>
        </div>



      </div>


    </div>
  

  </div>
  )
}

export default DJ