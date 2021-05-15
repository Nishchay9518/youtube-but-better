import React from 'react'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';

const SkeletonVideo = () => {
    return (
        <div style={{width:'90%', margin:'1rem 0' }}>
            <SkeletonTheme color =" #323232" highlightColor="#15161A" >
                <Skeleton height={100} style={{marginBottom:'0.5rem', borderRadius:'20px'}}/>
                <div >
                    <Skeleton height={40} width="85%"/>
                    <div style={{display: 'flex', alignItems: 'center'}}>

                    <Skeleton style={{margin:'0.5rem', borderRadius:'15px'}}  height={40} width={40}/>
                    <Skeleton height={40} width="55%"/>
                    </div>
                </div>
                
                </SkeletonTheme>         
        </div>
    )
}

export default SkeletonVideo

