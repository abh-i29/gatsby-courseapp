import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Infoblock({heading,url}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore at dolorem explicabo nihil magni alias nesciunt ea voluptatem totam odit nulla maxime ipsum expedita adipisci vitae distinctio voluptatum harum consequuntur, amet ex. Corporis voluptates eum ab consequatur quisquam nobis a repudiandae voluptatum sapiente sint ad, quidem quae minus facere. Eius possimus corrupti eligendi debitis repellat dolores a aut blanditiis!
                        </p>
                        <Link to={url}>
                            <button className="btn btn-warning btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
