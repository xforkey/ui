import React from 'react'

const DemoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col items-center justify-center'  >

            <div className='max-w-md'>{children}</div>
        </div>
    )
}

export default DemoLayout
