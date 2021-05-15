import React, { useEffect } from 'react'
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import ShowMoreText from 'react-show-more-text'
import { FaEye, FaHeart, FaHeartBroken } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
   checkSubscriptionStatus,
   getChannelDetails,
} from '../../redux/actions/channel.action'
// import HelmetCustom from '../HelmetCustom'
const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
   const { channelId, channelTitle, description, title, publishedAt } = snippet
   const { viewCount, likeCount, dislikeCount } = statistics

   const dispatch = useDispatch()

   const {
      snippet: channelSnippet,
      statistics: channelStatistics,
   } = useSelector(state => state.channelDetails.channel)

   const subscriptionStatus = useSelector(
      state => state.channelDetails.subscriptionStatus
   )

   useEffect(() => {
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscriptionStatus(channelId))
   }, [dispatch, channelId])

   return (
      <div className='mx-5  py-1 videoMetaData'>
         {/* <HelmetCustom title={title} description={description} /> */}

         <div className=' videoMetaData__top'>
         <div className='py-1 d-flex justify-content-between align-items-center'>
               <span className=' days-ago'>
                  {moment( publishedAt).fromNow()}
               </span>

               <div className='videoMetaData__top__stats'>
                   <span className='mr-4' style={{color: '#fff'}}>
                       <FaEye size={18} className='mr-2 eye-icon' /> 
                   {numeral( viewCount).format('0.a')} views
                   </span>

                  <span className='mr-4 ' style={{color: '#FE3636'}}>
                     <FaHeart size={18} className='mr-2 heart-icon' /> {numeral( likeCount ).format('0.a')}
                  </span>
                  <span style={{color: '#838080'}}>
                     <FaHeartBroken size={18} className='mr-2 heartbr-icon' />{' '}
                     {numeral(
                         dislikeCount
                       
                         ).format('0.a')}
                  </span>
               </div>
            </div>
            
            <h5>
                {title}
               
                </h5>
           
         </div>
         <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src= {channelSnippet?.thumbnails?.default?.url}
                  alt=''
                  className='mr-3' style={{borderRadius: '15px'}}
               />
               <div className='d-flex flex-column'>
                  <span className='channel-title'>
                      
                      {channelTitle}
                      </span>
                  <span>
                     {' '}
                     {numeral(
                         
                         channelStatistics?.subscriberCount
                         ).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button
               className={`p-2 m-2 border-0 btn
                ${
                  subscriptionStatus && 'btn-green'
               }`
               }
               >
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
               
            </button>
         </div>
         <div className='videoMetaData__description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               {description}
           
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData
