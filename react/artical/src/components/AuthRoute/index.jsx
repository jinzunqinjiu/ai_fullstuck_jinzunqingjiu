//判断token是否存在？允许跳转，否则重定向login

import React from 'react';
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'
//高阶组件
function AuthRoute({ children }) {
    const isTonken = getToken()

    if (isTonken) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' replace></Navigate>
    }
}

export { AuthRoute }