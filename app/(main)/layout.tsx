import React from 'react'

const layout  =({
    children,
}:Readonly<{
    children:React.ReactNode;
}>)=>{
    return <div className='mt-30'> {children}</div>
}

export default layout;