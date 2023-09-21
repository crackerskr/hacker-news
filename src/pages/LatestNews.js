import React, { useEffect, useState } from 'react'

import { HACKER_NEWS_API } from '../Config';

function LatestNews() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    useEffect(() => {
        // Fetch the latest news
        const fetchLatestNews = async () => {
            try {
                const response = await fetch(HACKER_NEWS_API.LATEST_NEWS);
                const newsIDs = await response.json();

                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                //Display all news
                // const newsPromises = newsIDs.map(async (newsID) => {
                //   const newsResponse = await fetch(HACKER_NEWS_API.ITEM(newsID));
                //   return await newsResponse.json();
                // });

                //Display 30 news only
                // const newsPromises = newsIDs.slice(0, 30).map(async (newsID) => {
                //     const newsResponse = await fetch(HACKER_NEWS_API.ITEM(newsID));
                //     return await newsResponse.json();
                // });

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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((newsItem, index) => (
                        <tr key={newsItem.id}>
                            <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                            <td>
                                <table>
                                    <tbody >
                                        <tr>
                                            <td >
                                                <a className="newsTitle" href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                                    {newsItem.title}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="newsData">{newsItem.score} point by {newsItem.by} {formatTime(newsItem.time)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    disabled={news.length < itemsPerPage}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default LatestNews;
