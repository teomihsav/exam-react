
import { useState, useEffect, useLayoutEffect } from 'react'
import './index.css'
import { takeAllArticles } from '../../actions/jobAction'
import { Link } from 'react-router-dom'
import SingleArticle from './SingleArticle'

const Articles = () => {

    const [data, setData] = useState({})
    const [catHealthy, setCatHealthy] = useState({})
    const [catExerc, setCatExerc] = useState({})

    let firstFive = []
    let catHealthyArray = []
    let catExercArray = []

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        takeAllArticles()
            .then(res => { //console.log('Response Status Profile Answers: ', res.data)
                res.data.forEach(element => {
                    element.forEach(elInner => { // console.log(elInner)
                        if (elInner.category === 'healthy') { catHealthyArray.push(elInner) }
                        if (elInner.category === 'exercices') { catExercArray.push(elInner) }

                        firstFive.push(elInner)
                    })
                })
                console.log(firstFive)
                setData(firstFive.slice(0, 5))
                setCatHealthy(catHealthyArray)
                setCatExerc(catExercArray)
            })
            .catch(err => {
                if (err.response) {
                    console.log('Afer API response Profile Articles: ', err.response)
                }
            })
    }, [])

    console.log('Data from Articels  Front:', data)

    return (
        <div>
            <h2 style={{ borderBottom: '1px solid #cbf8c0', display: 'inline-block' }}> Last articles here </h2>
            <div className='row-articles'>
                <div className='about-articles'>
                    <div className="card-articles card-header card-footer">
                        {(Object.keys(data).length > 0)
                            &&
                            data.map(el =>
                                <div className="card-mid">
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
                            )}
                    </div>
                </div>
            </div>

            <br />
            <br />
            <h2 style={{ borderBottom: '1px solid #cbf8c0', display: 'inline-block' }}>Categories</h2>
            <div className='row-articles'>
                <div className='column-articles'>
                    <div className="card-articles-left card-header-left card-footer-left">
                        <h2 style={{ borderBottom: '1px solid #cbf8c0', display: 'inline-block' }}> Eating the right peace of the world  </h2>
                        {(Object.keys(catHealthy).length > 0)
                            &&
                            catHealthy.map(el =>
                                <div className="card-mid-left">
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
                            )}
                    </div>
                </div>

                <div className='column-articles'>
                    <div className="card-articles-right card-header-right card-footer-right">
                        <h2 style={{ borderBottom: '1px solid #cbf8c0', display: 'inline-block' }}> Sports and exercices for beginners </h2>
                        {(Object.keys(catExerc).length > 0)
                            &&
                            catExerc.map(el =>
                                <div className="card-mid-right">
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
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
