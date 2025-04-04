import React from 'react'
import Vehiclecare from './Vehiclecare'
import Footer from './Footer'

const Vehicleai_Labs = () => {
  return (
    
    <div className="container-fluid" style={{marginTop: "80px"}}>

        {/* section-1 */}
        
        <div className="row justify-content-center pt-2">
            <div className="col-lg-9 col-lg-11 col-sm-12">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 col-md-12 col-sm-12 p-md-4 order-2 order-lg-1">
                            <p className='fs-1 fw-bold'>Welcome to <span style={{color: "#ff0000"}}>VehicleAI Labs:</span> Revolutionizing Vehicle Care in India</p>
                            <p>At VehicleAI, we're pioneering a transformative initiative aimed at revolutionizing the entire lifecycle of vehicles. Our comprehensive solution addresses the myriad challenges faced by millions of car owners across India. Our mission? To seamlessly enhance your car ownership experience by providing proactive care akin to having a dedicated 'car buddy' by your side. We're committed to keeping you well-informed about your vehicle's health and seamlessly connecting you with the finest workshops when necessary.</p>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 p-md-4 order-1 order-lg-2">
                            <p className='fs-1 fw-bold text-end' style={{color: "#ff0000", textShadow: "3px 4px #000000"}}>Coming soon</p>
                            <img src="/VehicleAI_Labs/Section-1/banner.jpg" className='w-100' alt="" />
                        </div>

                    </div>

                    <div className="row px-md-4">
                        <p className='fs-3 fw-bold'>Leading the Charge with Cutting-Edge Technology</p>
                        <p className='mb-4'>Leveraging state-of-the-art technology, including Artificial Intelligence and the prowess of mobile computing, we're constructing a groundbreaking platform. This platform, named the Digital Car Service eXperience (DcSX), is designed to automate the entire car service and repair process. Additionally, our Digital Claim eXperience (DCX) simplifies and streamlines insurance claims, ensuring a hassle-free process for our users.</p>
                        <p className='fs-3 fw-bold mt-2'>Introducing VehicleCareAI Labs</p>
                        <p className='mb-0'>Under the umbrella of VehicleCareAI Labs, we're introducing an unparalleled initiative. This initiative aims to craft an end-to-end automation solution catered specifically for vehicle owners. It's our commitment to provide a seamless, intuitive, and comprehensive suite of services that will redefine how car owners interact with and maintain their vehicles.</p>
                    </div>

                </div>
            </div>
        </div>



        {/* section-2 */}

        <Vehiclecare/>



        {/* section-3 */}

        <Footer/>


        
    </div>
   
  )
}

export default Vehicleai_Labs
