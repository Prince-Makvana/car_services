import React from 'react'
import './Honda_All_Brands.css'


const Honda_All_Brands = () => {
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
                            <button className="accordion-btn accordion-button fs-3 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Other Models from Honda</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#carAccordion">
                            <div className="accordion-body" style={{ height: "300px" }}>
                                <div className="row gap-4 justify-content-center  align-items-center">
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/accord.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ACCORD</h5>
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
                                        <img src="/Major_Brand/Honda/accord-hybrid.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ACCORD HYBRID</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/amaze.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">AMAZE</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/brio.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">BRIO</h5>
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
                                        <img src="/Major_Brand/Honda/brv.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">BRV</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/city.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">CITY</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/civic.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">CIVIC</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/crv.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">CRV</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/jazz.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">JAZZ</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/mobilio.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">MOBILIO</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/CNG.png" alt="CNG" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">CNG</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Honda/wrv.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">WRV</h5>
                                        <div className="d-flex justify-content-center">
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/PETROL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">PETROL</p>
                                            </div>
                                            <div className="fuel-box mx-1 border">
                                                <img src="/Major_Brand/DIESEL.png" alt="Petrol" className="fuel-icon" style={{ width: "30px", height: "30px" }} />
                                                <p className="fuel-text m-0">DIESEL</p>
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

export default Honda_All_Brands
