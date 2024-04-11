import React, { Suspense } from 'react'
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import Login from '../pages/login'
const LayoutWrap = React.lazy(() => import('../pages/layout/index'))
const Students = React.lazy(() => import('../pages/students'))
const Personal = React.lazy(() => import('../pages/personal'))
const Employment = React.lazy(() => import('../pages/employment'))
const routerList = [
    {
        path: '/login',
        element: <Login />
    }, {
        path: '/layout',
        element: <LayoutWrap />,
        children: [
            {
                path: '',
                element: <Navigate to='/layout/students' />
            },
            {
                path: 'students',
                element: <Students />
            },
            {
                path: 'personal',
                element: <Personal />
            },
            {
                path: 'employment',
                element: <Employment />
            }
        ]
    }
]

function Element() {
    const el = useRoutes(routerList)
    return el
}


function WrapperRouters() {

    return (
        <Suspense>
            <BrowserRouter>
                <Element />
            </BrowserRouter>
        </Suspense>
    )
}


export default WrapperRouters