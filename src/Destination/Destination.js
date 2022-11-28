import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import './Destination.css'


const Destination = () => {
  

    const { destinationId, fname, fprice, img } = useParams()
    const [pick, setPick] = useState('')
    const [pickto, setPickto] = useState('')
    const [show, setShow] = useState(true)

    const showFunction = () => {

        var e = document.getElementById("info");
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        var e2 = document.getElementById("info2");
        var value2 = e2.value;
        var text2 = e2.options[e2.selectedIndex].text;
        console.log(value, text);
        console.log(value2, text2);
        setPick(value)
        setPickto(value2)
        setShow(!show)

    }


    return (
        <div className='div-container'>

            <div className='form-containers mx-auto mt-5 '>
                {show ? <>
                    <h4>Pick from</h4>
                    <select id='info'>

                        <option value="Mirpur">Mirpur</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Mirpur 3">Mirpur 3</option>

                    </select>
                    <h4>Pick to</h4>
                    <select id="info2">

                        <option value="Mirpur">Mirpur</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Mirpur 3">Mirpur 3</option>

                    </select>
                    <button onClick={showFunction} className='mx-auto mt-1'>Search</button></> :
                    <>

                        <div>

                            <div className='des-info'>
                                <p>{pick}</p>
                                <div className='picks'>

                                </div>
                                <p>{pickto}</p>
                            </div>
                            <div className='destination-div mx-auto mt-2'>

                                <h3>{fname}</h3>
                                <img src="https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg" alt="" />
                                <h3>{fprice}</h3>

                            </div>
                            <div className='destination-div mx-auto mt-2'>

                                <h3>{fname}</h3>
                                <img src="https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg" alt="" />
                                <h3>{fprice}</h3>

                            </div>
                        </div>
                    </>}
            </div>

            <div className='mx-auto'>
                <img id="map" className='mt-5' src="https://www.justvehicle.solutions/wp-content/uploads/2019/05/Google-Maps-Tips.png" alt="" />
            </div>














        </div>
    );
};

export default Destination;