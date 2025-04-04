import React from 'react'
import './Hyundai_All_Brands.css'


const Hyundai_All_Brands = () => {
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
                            <button className="accordion-btn accordion-button fs-3 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Other Models from Hyundai</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#carAccordion">
                            <div className="accordion-body" style={{ height: "300px" }}>
                                <div className="row gap-4 justify-content-center  align-items-center">
                                    <div className="card car-card shadow-sm text-center p-3 d-flex flex-column justify-content-center  align-items-center  col-sm-5 col-md-3 col-lg-2 col-12 mb-3">
                                        <img src="/Major_Brand/Hyundai/accent.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ACCENT VIVA</h5>
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
                                        <img src="/Major_Brand/Hyundai/alcazar.jpeg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">Alcazar</h5>
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
                                        <img src="/Major_Brand/Hyundai/aura.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">AURA</h5>
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
                                        <img src="/Major_Brand/Hyundai/creta.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">CRETA</h5>
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
                                        <img src="/Major_Brand/Hyundai/elantra.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ELANTRA</h5>
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
                                        <img src="/Major_Brand/Hyundai/elite.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">ELITE i20</h5>
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
                                        <img src="/Major_Brand/Hyundai/eon.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">EON</h5>
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
                                        <img src="/Major_Brand/Hyundai/grandi10.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">GRAND i 10</h5>
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
                                        <img src="/Major_Brand/Hyundai/nios.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">GRAND i10 NIOS</h5>
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
                                        <img src="/Major_Brand/Hyundai/i10.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">i10</h5>
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
                                        <img src="/Major_Brand/Hyundai/i20.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">I20</h5>
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
                                        <img src="/Major_Brand/Hyundai/i20active.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">i20ACTIVE</h5>
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
                                        <img src="/Major_Brand/Hyundai/santafe.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">SANTA FE</h5>
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
                                        <img src="/Major_Brand/Hyundai/santro.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">SANTRO</h5>
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
                                        <img src="/Major_Brand/Hyundai/santro-xing.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">SANTRO XING</h5>
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
                                        <img src="/Major_Brand/Hyundai/sonata.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">SONATA</h5>
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
                                        <img src="/Major_Brand/Hyundai/tucson.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">TUCSON</h5>
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
                                        <img src="/Major_Brand/Hyundai/venue.png" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">VENUE</h5>
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
                                        <img src="/Major_Brand/Hyundai/verna.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">VERNA</h5>
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
                                        <img src="/Major_Brand/Hyundai/xcent.jpg" className="car-img mb-2" alt="A STAR" />
                                        <h5 className="car-title">XCENT</h5>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hyundai_All_Brands
