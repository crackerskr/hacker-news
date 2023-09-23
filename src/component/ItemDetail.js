import React, { useEffect, useState } from 'react';
import { HACKER_NEWS_API } from '../Config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faClock } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';

function ItemDetail({ itemID }) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(HACKER_NEWS_API.ITEM(itemID));
                setItem(response.data);


            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItem();
    }, [itemID]);

    const formatTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleString();
    };

    return (
        <div className='container'>
            <div className='details-card'>
                {item && (
                    <div>
                        <div style={{ fontSize: '30px', fontWeight: 'bolder' }} dangerouslySetInnerHTML={{ __html: item.text }}/>                        
                        <p className='detailData'><FontAwesomeIcon icon={faUser} /> By {item.by}  <FontAwesomeIcon icon={faClock} /> {formatTime(item.time)} </p>
                        
                        <h2><FontAwesomeIcon icon={faComments} /> Comments</h2>
                        <ul>
                            {item.kids && item.kids.map((commentID) => (
                                <Comment key={commentID} commentID={commentID} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}

export default ItemDetail;

