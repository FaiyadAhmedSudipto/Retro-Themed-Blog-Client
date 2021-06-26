import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HeaderMain.css'
import header from '../../../../images/Head.png'

const HeaderMain = () => {
    const history = useHistory()
    const handleHeader = () => {
        history.push(`/customer`);
    }

    return (
        // <main style={{height:'700px'}} className="row d-flex align-items-center headerMain">
        //     <div className="col-md-3 offset-md-1">
        //         <h1 className="fw-bold fs-1">Computoria</h1>
        //         <p className="text-secondary text-start">Computoria is one of the leading computer repair companies in the US providing services for individuals and businesses. No matter what kind of a PC you have, we can fix it.</p>
        //         {/* <button className="btn btn-brand">GET APPOINTMENT</button> */}
        //         {/* <button className="button" onClick={handleHeader}>Create An Account</button> */}
        //         <button class="button" onClick={handleHeader}><span>Visit Now</span></button>
        //     </div>
        // </main>


        <div className="custom-container">
            <div className="row">
                <div className="col-md-5 header-text d-flex align-items-center">
                    <div>
                        <h1>Retro Themed Blog <br /> Latest Top News <br /> First In Here</h1>
                    </div>
                </div>
                <div className="col-md-7 header-img">
                    {/* <img className="img-fluid" src="https://i.ibb.co/gmcWbwW/Frame.png" alt="" /> */}
                    <img className="img-fluid" src={header} alt="" />
                    {/*  Header Image Link ___ https://www.freepik.com/free-vector/blogging-illustration-concept_6192594.htm#page=1&query=blog&position=2  */}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;