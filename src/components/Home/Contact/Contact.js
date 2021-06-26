import React from 'react';
import './Contact.css';
import contactFrom from '../../../images/contactFrom.png'


const Contact = () => {
    return (
        <section className="px-4">
            <div className="row align-items-center emailCard px-5 pb-5 pt-5">
                <div className="container col-md-6 shadow p-3">
                    <h3 htmlFor="" className="text-center">Email Us</h3>
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-brand"> Submit </button>
                        </div>
                    </form>
                </div>

                <div className="container col-md-5">
                    <img className="img-fluid" src={contactFrom} alt="" />
                </div>
                <div />
            </div>
        </section>
    );
};

export default Contact;