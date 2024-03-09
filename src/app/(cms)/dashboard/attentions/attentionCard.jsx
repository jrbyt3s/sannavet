
import React from 'react'
import Link from 'next/link';


const AttentionCard = () => {
  return (
    <div>
    
    
    <div className="grid grid-cols-12 md:gap-x-6">

        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
            <div className="box">
                <img src="https://drfecommercee.s3.us-west-1.amazonaws.com/pets/rambo.png" className="card-img-top" alt="..." />
                <div className="box-body">
                    <h6 className="box-title font-semibold !text-[1rem]">Card title</h6>
                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                </ul>
                <div className="box-body">
                    <Link href="#!" className="card-link text-primary me-2">Card link</Link>
                    <Link href="#!" className="card-link text-secondary inline-block">Another
                        link</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
};

export default AttentionCard