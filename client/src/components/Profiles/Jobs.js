

import { Link } from 'react-router-dom'
import '../CSS/JobsProfile.css'
import { useState, useEffect } from 'react'
import MyArticles from '../Articles/MyArticles'
import SubmitArticle from '../Articles/SubmitArticle'


const Jobs = ({ id, data }) => {

        const [reload, setReload] = useState({})

        return (
                <div className='row-single-job-profile'>
                        <div className=''>

                                <SubmitArticle setReload={setReload} reload={reload} />

                                <div className='column-jobs-article'>
                                        <MyArticles id={id} reload={reload} />
                                </div>
                        </div>

                        <div className='control-out-border-single-job-profile'>
                                <div className="card-single-job-profile">
                                        <img src={data.image} alt={data.username} width="50%" height="50%" />
                                </div>
                                <br />
                                <br />
                                
                                <div>
                                        <h4 style={{ borderBottom: '2px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >Dear {data.username}, your answers are:</h4>
                                        <br />
                                        <br />

                                        <h4 style={{ borderBottom: '1px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >Your field at sport:</h4>
                                        <li>{data.one}</li>
                                        <br />

                                        <h4 style={{ borderBottom: '1px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} > Are you traning with pro atlets:</h4>
                                        <li>{data.two}</li>
                                        <br />

                                        <h4 style={{ borderBottom: '1px solid rgba(56, 151, 1, 0.925)', display: 'inline-block', marginBottom: '10px' }} >What sport education/certificates do you have:</h4>
                                        <li>{data.three}</li>
                                        <br />
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