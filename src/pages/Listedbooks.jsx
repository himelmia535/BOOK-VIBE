import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';


const Listedbooks = () => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

    const blog = useLoaderData();

    return (
        <div>
            <div className='flex gap-4'>
                <div>
                    <h1>Read Books</h1>
                    {readBooks.map((bookId, index) => {
                        // Fetch book details from localStorage or an API call
                        const bookDetails = {
                            bookName: "Book Name",
                            author: "Author Name",
                            image: "path/to/image",
                            category: "Category",
                            rating: 4.5, // Example rating
                            tags: ["Tag1", "Tag2", "Tag3"],
                        };
                        return (
                            <div key={index} className="border rounded-2xl p-4 m-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary">
                                {/* Your custom book display */}
                                <h3>{bookDetails.bookName}</h3>
                                <p>By: {bookDetails.author}</p>
                                {/* Add other book details as needed */}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h1>Wishlist Books</h1>
                    {wishlistBooks.map((bookId, index) => {
                        // Fetch book details from localStorage or an API call
                        const bookDetails = {
                            bookName: "Book Name",
                            author: "Author Name",
                            image: "path/to/image",
                            category: "Category",
                            rating: 4.5, // Example rating
                            tags: ["Tag1", "Tag2", "Tag3"],
                        };
                        return (
                            <div key={index} className="border rounded-2xl p-4 m-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary">
                                {/* Your custom book display */}
                                <h3>{bookDetails.bookName}</h3>
                                <p>By: {bookDetails.author}</p>
                                {/* Add other book details as needed */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Listedbooks;
