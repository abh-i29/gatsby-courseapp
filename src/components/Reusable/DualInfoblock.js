import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function DualInfoblock({heading, address}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt totam qui eveniet eos tempora non consequatur deleniti? Sint, minima tempore iure ipsa velit dolor reiciendis? Culpa id hic laudantium vero iusto quae praesentium facilis sequi porro libero temporibus vitae rem, nostrum amet mollitia. Culpa, temporibus officia maiores labore nemo nostrum.

                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark" >
                    <img src={address} className="card-img-top" alt="Image goes here"/>
                    <div className="card-body">
                    <h5 className="card-title text-white">Code and build</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    < Link to="/contact">
                        <button className="btn btn-warning btn-block" >{heading}</button>
                    </Link>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
