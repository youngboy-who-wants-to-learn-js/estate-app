import React from 'react'
import { Spin,Alert } from 'antd'

const Loader = ({status}) => {
    if (status === 'loading'){
        return <Spin  size="large" />
    }
    if ( status === 'failed') {
        return   <Alert
                message="Error"
                description="The page did not load"
                type="error"
        />
    }

    return null
}

export { Loader }