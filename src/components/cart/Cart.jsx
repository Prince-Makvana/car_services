import React, { useEffect, useRef, useState } from 'react'
import './Cartstyle.css'
import { toast } from 'react-toastify';


import { getFirestore, doc, setDoc, getDocs, getDoc, collection, query, where, updateDoc, arrayRemove } from "firebase/firestore";
import { app } from '../../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);

const Cart = () => {

    const [itm, setItm] = useState({});
    const [finitm, setFintm] = useState([]);
    const [email, setEmail] = useState('no email');
    const [uname, setUname] = useState('no name');
    const [totalprice, setTotalprice] = useState(0);


    //######################################################################################### delete cart st
    const deleteFieldFromDocument = async (id) => {
        try {
            const docRef = doc(db, "user", email); // Replace with your collection & doc ID

            await updateDoc(docRef, {
                cartItems: arrayRemove(id)  // Replace 'fieldName' with the actual field name
            });

            console.log("Field deleted successfully!");
            toast.success("Item Removed..")
            const getitm = async () => {
                try {
                    const docRef = doc(db, "user", email);
                    const querySnapshot = await getDoc(docRef);
                    setItm(querySnapshot.data() || { xx: "xx" })

                } catch (error) {
                    console.error("Error fetching products:", error);
                }
            };
            getitm();
        } catch (error) {
            console.error("Error deleting field:", error);
            toast.error("Error to Removed..")

        }
    };
    //######################################################################################### delete cart end

    const confirmorder = async () => {
        function generate5DigitID() {
            return Math.floor(10000 + Math.random() * 90000).toString();
        }
        function getFormattedDate() {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return new Date().toLocaleDateString('en-US', options);
        }

        let id = generate5DigitID()
        let date = getFormattedDate()

        try {
            await setDoc(doc(db, "order", id), {
                id: id,
                name: uname,
                total: totalprice,
                date: date
            });
            toast.success("Oreder Confirm")


        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Error to Oreder")
        }

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email); // Set user email
                setUname(user.displayName)
            } else {
                setEmail(null); // No user logged in
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);


    useEffect(() => {
        const getitm = async () => {
            try {
                const docRef = doc(db, "user", email);
                const querySnapshot = await getDoc(docRef);
                setItm(querySnapshot.data() || { xx: "xx" })

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        getitm();
    }, [email])


    useEffect(() => {
        setFintm(itm.cartItems || [])

    }, [itm])

    useEffect(() => {
        let total = 0
        finitm.forEach((val) => {
            total += Number(val.price)
        })
        setTotalprice(total)
    }, [finitm])

    // const showfin = () => {
    //     console.log(itm);

    // }

    // const setquant = async (val, id) => {
    //     console.log(val, id)
    //     await setDoc(doc(db, "user", email), {
    //         [id]: Number(val)

    //     }, { merge: true });
    //     const getitm = async () => {
    //         try {
    //             const docRef = doc(db, "user", email);
    //             const querySnapshot = await getDoc(docRef);
    //             setItm(querySnapshot.data())
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     };
    //     getitm();
    // };







    return (
        <div>
            <div className="container-fluid  pt-5 px-4 py-5">
                <h2 className="fw-bold  pt-5">My Cart</h2>

                <div className="cart-container m-0 row gap-4 align-items-start justify-content-between ">
                    <div className="col-lg-8">



                        {finitm.map((itms, index) => (
                            <div key={index}
                                className="cart-item col-md-12 col d-flex justify-content-between flex-column flex-sm-row border-top border-dark-subtle border-2">
                                <div className="d-flex gap-4">
                                    <div className="cart-info ms-5">
                                        <h5 className="card-title fw-bolder">Car : {itms.brand}</h5>
                                        <p className="mb-0 text-muted fs-6"><b>Model : </b> {itms.model}</p>
                                        <p className="mb-0 text-muted fs-6"><b>Service : </b>{itms.service}</p>

                                    </div>
                                </div>

                                <div className="d-flex gap-3 gap-md-5 me-5">
                                    <div className="">
                                        <p className="fw-bold mb-1">Date</p>
                                        <p className="fw-bold text-muted">{itms.date}</p>

                                    </div>

                                    <div className="">
                                        <p className="fw-bold mb-1">Total</p>
                                        <p className="fw-bold  text-muted">₹{itms.price}</p>
                                        <div style={{ height: "30px", width: "30px" }} className='mt-3' onClick={() => deleteFieldFromDocument(itms)}>
                                            <i className="bi bi-trash ms-2"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}



                        <div
                            className="cart-item col-md-12 col d-flex justify-content-between flex-column flex-sm-row border-top border-black border-2">

                            <div className="d-flex justify-content-between container-fluid px-5 fw-bolder fs-6">
                                <div className="">
                                    Total Service: {finitm.length}
                                </div>

                                <div className="">
                                    ₹{totalprice}
                                </div>
                            </div>


                        </div>
                        <button type="button" className="btn btn-danger container-fluid rounded-pill py-2 mb-2" data-bs-toggle="modal" data-bs-target="#checkoutModal" ><i
                            className="fa-solid fa-lock me-2"></i>Checkout</button>
                        <div className="modal fade" id="checkoutModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog ">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Proceed to checkout</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="col-md-12">

                                            <div className="summary-box">
                                                <div className="price-info">
                                                    <p><span>Total item:</span> <span> {finitm.length}</span></p>
                                                    <p><span>Discount:</span> <span>-$0</span></p>
                                                    <p><span>Tax:</span> <span>TBD</span></p>
                                                    <hr className="m-1 border border-dark border-1" />
                                                    <p className="fw-bold mb-0"><span>Estimated Total:</span> <span>₹{totalprice}</span></p>
                                                </div>
                                            </div>
                                            <div className="pay mt-3">

                                                <button type="button" className="btn btn-danger container-fluid rounded-pill py-2 mb-2" onClick={() => confirmorder()}>Confirm Order</button>
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

export default Cart
