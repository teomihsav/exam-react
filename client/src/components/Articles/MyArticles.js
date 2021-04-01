
import { useState, useEffect, useLayoutEffect } from 'react'
import './index.css'
import { takeJobsUserArticles } from '../../actions/jobAction'
import { Link } from 'react-router-dom'
import SingleArticle from './SingleArticle'
import { useHistory } from "react-router-dom";

const MyArticles = ({ id }) => {

    let history = useHistory()

    const [data, setData] = useState({})

    let firstFive = []

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        takeJobsUserArticles({ id })
            .then(res => {
                console.log('Response Status Jobs User Articles: ', res.data[0].articles)
                res.data[0].articles.forEach(el => {
                    firstFive.push(el)
                })
                setData(firstFive)
            })
            .catch(err => {
                if (err.response) {
                    console.log('Afer API response Profile Articles: ', err.response)
                }
            })
    }, [])

    const editArticle = () => {

    }
    console.log('Data from Jobs User Articels Front:', data)

    return (
        <div>
            <h2 style={{ borderBottom: '1px solid #cbf8c0', display: 'inline-block' }}> My articles </h2>
            <div className='row-articles'>
                <div className='about-articles'>
                    <div className="card-my-articles card-header card-footer">
                        {(Object.keys(data).length > 0)
                            &&
                            data.map(el =>
                                <div className="card-mid-my-article">
                                    <div className='row-my-articles'>
                                        <div className='column-button-my-article'>
                                            <Link className='text-logo-link'
                                                to={{
                                                    pathname: "/singlearticle",
                                                    myProps: {
                                                        title: el.title,
                                                        article: el.article
                                                    }
                                                }} >

                                                {el.title}

                                            </Link>
                                        </div>
                                        <div className='column-button-my-article'>
                                            <div className='row-articles-buttons'>
                                                <Link className='text-logo-link'
                                                    to={{
                                                        pathname: "/profile",
                                                        myProps: {
                                                            id: el._id
                                                        }
                                                    }} > <button className='my-article-button-place' >Edit</button>
                                                </Link>


                                                <button className='my-article-button-place' >Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MyArticles
