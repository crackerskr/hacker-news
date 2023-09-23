import React, { useEffect, useState } from 'react'
import { HACKER_NEWS_API } from '../Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../component/Pagination/Pagination';

function LatestNews() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 300;
    const itemsPerPage = 30;

    useEffect(() => {
        // Fetch the latest news
        const fetchLatestNews = async () => {
            try {
                const response = await fetch(HACKER_NEWS_API.LATEST_NEWS);
                const newsIDs = await response.json();

                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                // Display 30 news pagination
                const newsPromises = newsIDs.slice(startIndex, endIndex).map(async (newsID) => {
                    const newsResponse = await fetch(HACKER_NEWS_API.ITEM(newsID));
                    return await newsResponse.json();
                });

                const newsData = await Promise.all(newsPromises);

                // Sort in descending order by time
                const sortedNews = newsData.sort((a, b) => b.time - a.time);
                setNews(sortedNews);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchLatestNews();
    }, []);

    const formatTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleString();
    };

    const handlePageChange = (newPage) => {
        if(newPage >=1 && newPage <= totalItems){
            setCurrentPage(newPage);
        }
    };

    return (
        <>
            <div className='container'>
                <h2>Today Latest News</h2>
                {news.map((newsItem, index) => (
                    // <div className='text-center'>{(currentPage - 1) * itemsPerPage + index + 1}</div>
                    <a className="newsTitle" href={newsItem.url} target="_blank" rel="noopener noreferrer">
                        <div className='card'>
                            <div className="order-card-left">
                                <h3>{newsItem.title}</h3>
                                <h4 className='newsData'><FontAwesomeIcon icon={faUser} /> Author: {newsItem.by} | <FontAwesomeIcon icon={faClock} /> Created at {formatTime(newsItem.time)}</h4>
                            </div>
                            <div class="order-card-right">
                                <h4 className='newsData'>{newsItem.score} point</h4>

                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="pagination">
                <Pagination
                    currentPage={currentPage}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>

        </>
    );
}

export default LatestNews;
