import React, { useState } from 'react';
import ItemDetail from '../component/ItemDetail';

function NewsDetailPage() {
  // const [selectedItemId, setSelectedItemId] = useState(null);

  // const handleItemClick = (itemId) => {
  //   setSelectedItemId(itemId);
  // };

  // return (
  //   <div>
  //     <h1>News Detailed Page</h1>
  //     <ul>
  //       <li onClick={() => handleItemClick(2921983)}>Example News Item 1</li>
  //       {/* Add more news items here */}
  //     </ul>
  //     {selectedItemId && <NewsDetail itemId={selectedItemId} />}
  //   </div>
  // );

  const itemID = 2921983; // Replace with the selected item's ID

  return (
    <div>
      <ItemDetail itemID={itemID} />
    </div>
  );
}

export default NewsDetailPage;