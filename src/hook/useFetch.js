import { useState, useEffect } from "react";

import { getFirestore, doc, setDoc, getDocs, getDoc, collection, query, where, updateDoc, arrayRemove } from "firebase/firestore";
import { app } from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);

const useFetch = () => {

    const [itm, setItm] = useState({});
    const [finitm, setFintm] = useState([]);
    const [emaill, setEmaill] = useState('no email');
    const [uname, setUname] = useState('no name');
    const [totalprice, setTotalprice] = useState(0);




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmaill(user.email); // Set user email
                setUname(user.displayName)
            } else {
                setEmaill(null); // No user logged in
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);


    useEffect(() => {
        const getitm = async () => {
            try {
                const docRef = doc(db, "user", emaill);
                const querySnapshot = await getDoc(docRef);
                setItm(querySnapshot.data() || { xx: "xx" })

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        getitm();
    }, [emaill])


    useEffect(() => {
        setFintm(itm.cartItems || [])

    }, [itm])

    useEffect(() => {
        let total = 0
        finitm.forEach((val) => {
            total += Number(val.price)
        })
        console.log(total)
        setTotalprice(total)
    }, [finitm])



    const [tp, setTp] = useState(null);
    const [ti, setTi] = useState(null);

    useEffect(() => {
        setTp(totalprice);
        setTi(finitm.length)
        
    }, [totalprice]);

    return [tp, ti];
};

export default useFetch;