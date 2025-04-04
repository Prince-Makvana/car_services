import React, { useState } from "react";
import './Blogstyle.css'
import Footer from "../Footer";

const Blog = () => {
    return (
        <>
        <div className="container" >

            <nav className="d-flex justify-content-center" style={{marginTop:"80px"}}>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">HOME</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">MAINTENANCE</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">WHEEL CARE</button>
                <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">CLEANING AND DETAILING</button>
                <button className="nav-link" id="nav-batteris-tab" data-bs-toggle="tab" data-bs-target="#nav-batteris" type="button" role="tab" aria-controls="nav-batteris" aria-selected="false">BATTERIS</button>
                <button className="nav-link" id="nav-qas-tab" data-bs-toggle="tab" data-bs-target="#nav-qas" type="button" role="tab" aria-controls="nav-qas" aria-selected="false">Q&AS</button>
                <button className="nav-link" id="nav-news-tab" data-bs-toggle="tab" data-bs-target="#nav-news" type="button" role="tab" aria-controls="nav-news" aria-selected="false">AUTO NEWS</button>
                <button className="nav-link" id="nav-fun-tab" data-bs-toggle="tab" data-bs-target="#nav-fun" type="button" role="tab" aria-controls="nav-fun" aria-selected="false">FUN READS</button>
            </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                    <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-batteris" role="tabpanel" aria-labelledby="nav-batteris-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-qas" role="tabpanel" aria-labelledby="nav-qas-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-news" role="tabpanel" aria-labelledby="nav-news-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="nav-fun" role="tabpanel" aria-labelledby="nav-fun-tab" tabIndex="0">
                <div className="row d-flex justify-content-center">
                    <div className=" col-8 mt-4 ">
                            <div className="row">
                                <div className="card border-0">
                                    <img
                                        src="https://vehiclecare.in/blaze/wp-content/uploads/2024/08/pexels-mikebirdy-40965281-1024x536.jpg" // Replace with actual image URL
                                        className="card-img-top"
                                        alt="Luxury Car"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="fw-medium mt-3" style={{ fontSize: "26px", color: "red" }}>
                                            The Best Second-Hand Luxury Car Under 10–25 Lakh in 2024
                                        </h2>

                                        <p className="text-uppercase text-muted small">
                                            By: Vehicle Care / On: November 11, 2024 / In: Auto News
                                        </p>

                                        <p className="text-muted px-3">
                                            For many car lovers, luxury cars symbolize elegance, status, comfort, and advanced technology. However, buying a Second-Hand Luxury Car is costly and goes out of the budget for many. Fortunately, the pre-owned market in India offers a wide range of luxurious cars at reasonably affordable rates.
                                        </p>

                                        <p className="text-danger text-uppercase fw-normal">
                                            Continue Reading
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/SaveClip.App_462756811_18316239226094688_3632207723770032686_n-1.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="McLaren W1 Hyper Car"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                McLaren Launched First W1 Hyper Car In Global – 100kmph in 2 Seconds
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 22, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                When it comes to hypercars, McLaren has always been a name that commands attention, and with the launch of the McLaren W1 Hyper, they’ve managed to outdo even themselves...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/10/Mahindra-BE.05-Front-View.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mahindra BE.05 Coming Soon in January 2025 – New Era For Electric
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: October 15, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Mahindra, a trusted name in India’s automotive industry, is set to take a bold step forward with its upcoming electric vehicle (EV) offering, the Mahindra BE.05...
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/person-using-ar-technology-their-daily-occupation1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                The Future of Automotive Technology – Next Car Servicing Plan
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 24, 2024 / In: Informational, Q&As, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                1. What is automotive technology? Change is the only constant, and evolution is the enabler of change. It is not only that living beings evolve. Technology, an intelligent by-product of evolved and still evolving human beings, is growing daily, and this evolution is very much visible in the automotive industry
                                            </p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/07/glcglcfrontview1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Mercedes GLC 2024 Edition – Check Features And Price
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: July 11, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Whenever we talk about elegance and style in the automotive sector, Mercedes is a brand that often comes to mind. In 2024, Mercedes-Benz came up with the second generation of the Mercedes-Benz GLC in 2023. The new Mercedes GLC 2024 Edition is an upgraded version and a larger version, and</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/Addaheading-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Car Cleaning Gadgets And Tools – How To Use This
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: June 7, 2024 / In: Informational, Tips and Tricks
                                            </p>
                                            <p className="text-muted px-3">
                                                Imagine this: you wake up on a beautiful Sunday morning and decide to go for a long ride in your car, only to find that it is all dirty and dusty. You drive your car to the car accessory showroom and are amazed by the kinds of tools and gadgets</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/macanturboevmacanturboevrightfrontthreequarter-1-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Porsche Macan EV Turbo Best Luxury Vehicle Coming Soon
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 23, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Porsche Macan EV Porsche needs no introduction. When we start talking about it among a group of people, they are reminded of the cultural icon that is the Porsche 911. They have been at the forefront of technological developments in the automotive industry for decades now, and the primary reason</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/05/cybertruck-tesla-image-1024x536.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Tesla Cybertruck Best Electric Vehicle In The Market
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 17, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Unveiling the Future of Luxury Electric Vehicles Tesla Cybertruck The automotive world is an ever-changing world of technological innovation. And since the dawn of electric vehicles, the landscape has been changing even faster. Among the pioneers leading the bandwagon are Tesla and Porsche. Both automotive giants are renowned for their</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://vehiclecare.in/blaze/wp-content/uploads/2024/04/scorpionscorpionleftfrontthreequarter1-1024x538.jpg" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Safest Cars In 2024 – Promising Peace Of Mind On The Road
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: May 4, 2024 / In: Auto News, Informational
                                            </p>
                                            <p className="text-muted px-3">
                                                What is the first thing that comes to mind while buying a car? It is safe. Safety is the primary feature any car buyer looks for before buying a car. A car purchase is an important event in Indian household life. Therefore, it becomes very important to do our research</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 ">
                                        <img
                                            src="https://s7ap1.scene7.com/is/image/tatamotors/GrasslandBeige-0-2?$PO-750-500-S$&fit=crop&fmt=avif-alpha" // Replace with actual image URL
                                            className="card-img-top"
                                            alt="Mahindra BE.05"
                                        />
                                        <div className="card-body text-center">
                                            <h3 className="fw-medium" style={{ fontSize: "20px", color: "red" }}>
                                                Best Upcoming CNG Cars in India – Highest Average Car
                                            </h3>
                                            <p className="text-uppercase text-muted small">
                                                By: Vehicle Care / On: April 28, 2024 / In: Auto News
                                            </p>
                                            <p className="text-muted px-3">
                                                Upcoming CNG Cars Living in a time where global warming is at its peak and climate change is bringing extreme weather conditions, adopting a sustainable way of life is the smartest choice. Vehicles that run on traditional fuels like petrol and diesel are not only increasing the average global temperature</p>
                                            <p className="text-danger text-uppercase fw-normal">
                                                Continue Reading
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
        <Footer/>
        </>
    )
}

export default Blog
