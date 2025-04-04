import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        {/* footer1 */}

        <div className="row section-11 justify-content-center py-5" style={{backgroundColor: "#000000c5"}}>
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="container">

                  
                  <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-md-4">
                    <div className="col">
                      <div className="text-white fw-bold fs-5 mb-4"><i className="bi bi-square-fill fs-6" style={{color: "#ff0000"}}> </i>Company</div>
                      <ul className="p-0 text-white fs-6" style={{listStyle: "none"}}>
                        <li className="mb-2">About</li>
                        <li className="mb-2">Contact us</li>
                        <li className="mb-2">Blog</li>
                        <li className="mb-2">Career</li>
                        <li className="mb-2">Media</li>
                        <li className="mb-2">Faq</li>
                        <li className="mb-2">Lubricants</li>
                        <li className="mb-2">Review</li>
                        <li className="mb-2">Terms & Condition</li>
                        <li className="mb-2">Privacy Policy</li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="text-white fw-bold fs-5 mb-4"><i className="bi bi-square-fill fs-6" style={{color: "#ff0000"}}> </i>Top Pages</div>
                      <ul className="p-0 text-white fs-6" style={{listStyle: "none"}}>
                        <li className="mb-2">Car Service In Gurgaon</li>
                        <li className="mb-2">Car Service In Mumbai</li>
                        <li className="mb-2">Car Service In Delhi</li>
                        <li className="mb-2">Car Service In Ghaziabad</li>
                        <li className="mb-2">Car Service In Pune</li>
                        <li className="mb-2">Car Service In Bengaluru</li>
                        <li className="mb-2">Car Service In Ahmedabad</li>
                        <li className="mb-2">Car Service In Chandigarh</li>
                        <li className="mb-2">Car Service In Faridabad</li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="text-white fw-bold fs-5 mb-4"><i className="bi bi-square-fill fs-6" style={{color: "#ff0000"}}> </i>Popular Brands</div>
                      <ul className="p-0 text-white fs-6" style={{listStyle: "none"}}>
                        <li className="mb-2">Maruti Suzuki</li>
                        <li className="mb-2">Tata</li>
                        <li className="mb-2">Honda</li>
                        <li className="mb-2">Toyota</li>
                        <li className="mb-2">Hyundai</li>
                        <li className="mb-2">Kia</li>
                        <li className="mb-2">MG</li>
                        <li className="mb-2">Audi</li>
                        <li className="mb-2">Mahindra</li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="text-white fw-bold fs-5 mb-4"><i className="bi bi-square-fill fs-6" style={{color: "#ff0000"}}> </i>Services Near By</div>
                      <ul className="p-0 text-white fs-6" style={{listStyle: "none"}}>
                        <li className="mb-2">Car Workshop Near Me</li>
                        <li className="mb-2">Car Garage Near Me</li>
                        <li className="mb-2">Car Mechanic Near Me</li>
                        <li className="mb-2">Car Wash Near Me</li>
                        <li className="mb-2">Car AC Repair Near Me</li>
                        <li className="mb-2">Car Repair Near Me</li>
                        <li className="mb-2">Car Service Near Me</li>
                        <li className="mb-2">Car Scrapping</li>
                        <li className="mb-2">Partner Workshop</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
        </div>

        {/* footer2 */}

        <div className="row section-11 justify-content-center pt-5" style={{backgroundColor: "#000000"}}>

              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="container">

                  <div className="row justify-content-center row-cols-1 row-cols-md-2 g-3 g-md-4">

                    <div className="col">
                        <img src="/Logo/logo3.png" className='w-50' alt="" />
                      <p className="text-white py-4 mb-0" style={{fontSize: "large"}}>VehicleCare is your one-stop solution for car service, repair, insurance claims, and business solutions. With state-of-the-art technology and a PAN India workshop network, we deliver customer-focused, reliable care for all vehicles.</p>
                      <div className="text-white fs-6">
                        <i className="bi bi-facebook pe-2"></i>
                        <i className="bi bi-linkedin pe-2"></i>
                        <i className="bi bi-twitter pe-2"></i>
                        <i className="bi bi-instagram pe-2"></i>
                        <i className="bi bi-youtube pe-2"></i>
                        <i className="bi bi-whatsapp"></i>
                      </div>
                    </div>

                    <div className="col pe-4">
                      <p className="mb-2" style={{color:"#ff0000", fontSize: "large"}}>MiQB Executive Coworking Space</p>
                      <p className="text-white pe-5 mb-4" style={{fontSize: "large"}}>Plot 23, Sector 18 Maruti Industrial Development Area, Gurugram, Haryana 122015</p>
                      <p className="mb-1" style={{color:"#ff0000", fontSize: "large"}}>Email: <span className="text-white">support@vehiclecare.in</span></p>
                      <p style={{color:"#ff0000", fontSize: "large"}}>Phone: <span className="text-white">9911-020-209</span>, <span className="text-white">9355-30-2514</span></p>
                    </div>

                  </div>

                </div>                
              </div>

              <div className="row d-flex justify-content-end mt-5 p-0">
                <div className="col-md-11 col-sm-12 text-white py-4 footer-bottom ps-5 text-center text-lg-start">Copyright © 2025 Houseneed Doorstep Services Private Limited. All rights reserved.</div>
              </div>

        </div>

    </>
  )
}

export default Footer
