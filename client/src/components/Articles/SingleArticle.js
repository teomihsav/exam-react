
import { useLayoutEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const SingleArticle = (props) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className='about-articles'>
            <div className="card-mid-singleArticle">
                <h2>{props.history.location.myProps && props.history.location.myProps.title}</h2>
            </div>

            <div className="card-mid-singleArticle">
                {props.history.location.myProps && props.history.location.myProps.article}
            </div>
            <br />

            { props.history.location.myProps && props.history.location.myProps.goBack === 'articles' ? <Link to='/articles'>Back</Link> : <Link to='/profile'>Back</Link>}
        </div >
    )
}
// <Link to='/profile'>Back</Link>

const setMapToProps = (state) => ({
    auth: state.auth
})
export default connect(setMapToProps)(SingleArticle)

// export default SingleArticle


