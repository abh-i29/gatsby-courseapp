import React from 'react'
import Heading from "../Reusable/Heading"

export default function Contact() {
    return (
        <section className=" py-3">
            <Heading title="Contact us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/f/xqkgneqk" method="POST">
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="Email" name="Email" id="Email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="Contact" id="Contact" placeholder="Your Contact"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" type="text" name="description" id="description" placeholder="Your Message for Us"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
