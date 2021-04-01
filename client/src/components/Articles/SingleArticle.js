
import { useState, useEffect, useLayoutEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

const SingleArticle = ({ data }) => {

    let history = useHistory()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='about-articles'>
            <div className="card-mid-singleArticle">
                <h2>{history.location.myProps && history.location.myProps.title}</h2>
            </div>

            <div className="card-mid-singleArticle">
                {history.location.myProps && history.location.myProps.article}
            </div>
            <br />
            <Link to='/profile'>Back</Link>

        </div >
    )
}
// { history.location.pathname === '/profile' ? null : <Link to='/articles'>Back</Link>}

export default SingleArticle

