import React from 'react'
import './Toyota_All_Brands.css'


const Toyota_All_Brands = () => {
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
                            <button className="accordion-btn accordion-button fs-3 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Other Models from Toyota</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#carAccordion">
                            <div className="accordion-body" style={{ height: "300px" }}>
                                <div className="row gap-4 justify-content-center  align-items-center">
                                    

                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/camry.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">CAMRY</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/corolla.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">COROLLA</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/etios.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ETIOS</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/fortuner.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">FORTUNER</h5>
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
                                        <img src="/Major_Brand/Toyota/glanza.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">GLANZA</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/innova.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">INNOVA</h5>
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
                                        <img src="/Major_Brand/Toyota/land-cruiser.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">LAND CRUISER</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/qualis.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">QUALIS</h5>
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
                                        <img src="/Major_Brand/Toyota/rumion.jpeg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">RUMION</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/urban-cruiser.jpeg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">URBAN CRUISER</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Toyota/yaris.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">YARIS</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
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

export default Toyota_All_Brands
