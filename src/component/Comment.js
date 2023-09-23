import React, { useEffect, useState } from 'react';
import { HACKER_NEWS_API } from '../Config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

function Comment({ commentID }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(HACKER_NEWS_API.ITEM(commentID));
        setComment(response.data);
      } catch (error) {
        console.error('Error fetching comment details:', error);
      }
    };

    fetchComment();
  }, [commentID]);

  return (
    <div>
      {comment && (
        <div>
          <FontAwesomeIcon icon={faComment} />
          <div dangerouslySetInnerHTML={{ __html: comment.text }}/> 
             
          {comment.kids && (
            <ul>
              {comment.kids.map((childCommentID) => (
                <Comment key={childCommentID} commentID={childCommentID} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Comment;
