

import React from 'react'

import { logoutUser } from '../actions/authAction'
import { useHistory } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from 'react'



const Dashboard = ({ user }) => {

    console.log('logged: ', user)

    return (
        <div>
            Dashboard of {user}
        </div>
    )
}

export default Dashboard
