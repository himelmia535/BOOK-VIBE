import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const blog = useLoaderData();
    const { id } = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const [isAddedToRead, setIsAddedToRead] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    useEffect(() => {
        const foundBook = blog.find(book => book.bookId == id);
        setBookDetails(foundBook);
    }, [blog, id]);

    useEffect(() => {
        const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];

        setIsAddedToRead(readBooks.includes(id));
        setIsAddedToWishlist(wishlistBooks.includes(id));
    }, [id]);

    const handleReadButtonClick = () => {
        if (!isAddedToRead) {
            // Add book to local storage for read
            const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
            localStorage.setItem('readBooks', JSON.stringify([...readBooks, id]));

            // Show toast/sweet alert for adding to read
            alert('Book added to Read list!');
            setIsAddedToRead(true);
        } else {
            // Show toast/sweet alert if book is already added
            alert('This book is already added to Read list!');
        }
    };

    const handleWishlistButtonClick = () => {
        if (!isAddedToWishlist && !isAddedToRead) {
            // Add book to local storage for wishlist
            const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
            localStorage.setItem('wishlistBooks', JSON.stringify([...wishlistBooks, id]));

            // Show toast/sweet alert for adding to wishlist
            alert('Book added to Wishlist!');
            setIsAddedToWishlist(true);
        } else if (isAddedToRead) {
            // Show toast/sweet alert if book is already added to read
            alert('This book is already added to Read list. You cannot add it to Wishlist!');
        } else {
            // Show toast/sweet alert if book is already added
            alert('This book is already added to Wishlist!');
        }
    };

    if (!bookDetails) {
        return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>;
    }

    const {
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating,
        image,
    } = bookDetails;

    return (
        <div className="container mx-auto py-8">
            <div className="flex">
                <div className="w-1/2 flex justify-center">
                    <div className='px-24'>
                        <img src={image} alt={bookName} className="rounded-lg shadow-lg h-auto w-screen" />
                    </div>
                </div>
                <div className="w-1/2 pl-8 flex flex-col justify-evenly">
                    <h2 className="text-3xl font-bold mb-2">{bookName}</h2>
                    <p className="text-lg font-semibold mb-4">By: {author}</p>
                    <hr />
                    <p className="text-lg mt-3 mb-3">{category}</p>
                    <hr />
                    <p className="text-lg mt-4"><span className='font-bold'>Review:</span> {review}</p>
                    <div className="flex items-center gap-2 text-green-500 font-bold m-2">
                        <h3 className='text-black'>Tag </h3>
                        <h3 className="bg-slate-200 p-2 rounded-3xl">#{tags[0]}</h3>
                        <h3 className="bg-slate-200 p-2 rounded-3xl">#{tags[1]}</h3>
                        <h3 className="bg-slate-200 p-2 rounded-3xl">#{tags[2]}</h3>
                    </div>
                    <hr />
                    <p className="text-lg">Total Pages: <span className='font-bold pl-12'>{totalPages}</span></p>
                    <p className="text-lg">Publisher: <span className='font-bold pl-16'>{publisher}</span></p>
                    <p className="text-lg">Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
                    <p className="text-lg">
                        Rating: <span className='font-bold pl-24'>{rating}</span> {/* You might want to render stars here based on the rating */}
                    </p>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleReadButtonClick} disabled={isAddedToRead}>Read</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleWishlistButtonClick} disabled={isAddedToWishlist}>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
