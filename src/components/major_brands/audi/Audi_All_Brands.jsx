import React from 'react'
import './Audi_All_Brands.css'


const Audi_All_Brands = () => {
    const cars = [
        { name: "A STAR", img: "/sec-2.jpg", fuel: ["PETROL", "CNG"] },
        { name: "ALTO", img: "/path-to-image/alto.png", fuel: ["PETROL", "CNG"] },
        { name: "ALTO 800", img: "/path-to-image/alto800.png", fuel: ["PETROL", "CNG"] },
        { name: "ALTO K10", img: "/path-to-image/alto-k10.png", fuel: ["CNG", "PETROL"] },
        { name: "BALENO", img: "/path-to-image/baleno.png", fuel: ["CNG", "PETROL", "DIESEL"] },
    ];


    return (
        <div>
            <div className="container-fluid my-4">
                <div className="accordion" id="carAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-btn accordion-button fs-3 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Other Models from Audi</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#carAccordion">
                            <div className="accordion-body" style={{ height: "300px" }}>
                                <div className="row gap-4 justify-content-center  align-items-center">
                                    
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a3.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A3</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a4.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A4</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a5.jpeg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A5</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a6.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A6</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a7.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A7</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a8.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A8</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/a8l.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">A8l</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q2.jpeg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Q2</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q3.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Q3</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q5.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Q5</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q7.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Q7</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q8.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Q8 E-TRON</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Audi/q8rs.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">RS Q8</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                        </div>
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

export default Audi_All_Brands
