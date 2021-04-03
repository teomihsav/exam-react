

import { Link } from 'react-router-dom'
import '../CSS/JobsProfile.css'
import { useState, useEffect } from 'react'
import MyArticles from '../Articles/MyArticles'
import SubmitArticle from '../Articles/SubmitArticle'


const Jobs = ({ id, data }) => {

        const [reload, setReload] = useState({})

        return (
                <div className='row-single-job-profile'>
                        <div className='column-jobs-article'>

                                <SubmitArticle setReload={setReload} reload={reload} />

                                <div className='column-jobs-article'>
                                        <MyArticles id={id} reload={reload} />
                                </div>
                        </div>

                        <div className='control-out-border-single-job-profile'>
                                <div className="card-single-job-profile">
                                        <img src={data.image} alt={data.username} width="50%" height="50%" />
                                </div>
                                <div>
                                        Dear {data.username}, your answers are:
                                <br />
                                        <br />

                                 Your field at sport:
                                <hr></hr>
                                        <p></p>
                                        {data.one}
                                        <br />
                                        <br />

                                Are you traning with pro atlets:
                                <hr></hr>

                                        {data.two}
                                        <br />
                                        <br />

                                What sport education/certificates do you have:
                                <hr></hr>
                                        {data.three}
                                        <br />

                                </div>
                                <Link className='text-logo-link'
                                        to={{
                                                pathname: "/startjobs",
                                                myProps: {
                                                        title: 'Editing this answers will change chosen clients for you'
                                                }
                                        }} > <button className='btn-home-jobs-edit' > Edit Profile </button>
                                </Link>
                        </div>
                </div>
        )
}

export default Jobs