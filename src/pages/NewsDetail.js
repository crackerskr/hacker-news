// ItemDetail.js
import React, { useEffect, useState } from 'react';

function NewsDetail({ itemId }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetail();
  }, [itemId]);

  const renderComments = (comments) => {
    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            {comment.kids && comment.kids.length > 0 && renderComments(comment.kids)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {itemData && (
        <div>
          <h1>{itemData.title}</h1>
          <p>{itemData.text}</p>
          <h2>Comments</h2>
          {itemData.kids && itemData.kids.length > 0 ? renderComments(itemData.kids) : <p>No comments available.</p>}
        </div>
      )}
    </div>
  );
}

export default NewsDetail;
