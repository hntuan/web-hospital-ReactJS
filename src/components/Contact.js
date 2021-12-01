import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <div className="container min-vh-100">
                    <h1 className="heading">
                        {" "}
                        <span>Contact</span>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <form >
                                <div className="inputBox">
                                    <input type="text" placeholder="full name" />
                                    <input type="number" placeholder="phone" />
                                </div>
                                <div className="inputBox">
                                    <input type="email" placeholder="your email" />
                                    <select>
                                        <option disabled >
                                            Make an appointment
                                        </option>
                                        <option value="9-11 am">9-11 am</option>
                                        <option value="10-11 pm">10-11 pm</option>
                                        <option value="11-11 pm">11-11 pm</option>
                                        <option value="12-11 pm">12-11 pm</option>
                                    </select>
                                </div>
                                <textarea
                                    
                                    cols={30}
                                    rows={10}
                                    placeholder="message ( optional )"
                                   
                                />
                                <input
                                    type="submit"
   
                                    className="button"
                                    value="Make appointment"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contact;