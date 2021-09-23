import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">
            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                </div>
              </div>
            </header>
           
            <div class="row text-center align-items-end">
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">FREE</h1>
                  <h2 class="h1 font-weight-bold">$0<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Single Use</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 5GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Project</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>  
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Unlimited Public Project</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Dedicated Phone Support</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Free Subdomain</del>
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Report</del>
                    </li>
                  </ul>
                  <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                 </div>
                </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">PLUS</h1>
                  <h2 class="h1 font-weight-bold">$9<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 5 Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Private Project</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated Phone Support</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Free Subdomain</li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i>
                      <del>Monthly Status Reports</del>
                    </li>
                  </ul>
                  <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                 </div>
                </div>
              </div>
             
              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">PRO</h1>
                  <h2 class="h1 font-weight-bold">$49<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Users</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 150GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Private Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated Phone Support</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i><strong>Unlimited</strong> Free Subdomains</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Monthly Status Reports</li>  
                  </ul>
                  <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                 </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
     
      
)
};
}
export default Home;