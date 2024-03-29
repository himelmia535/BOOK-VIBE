import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const blog = useLoaderData()
    const { id } = useParams();
    // console.log(blog, id)
    const [bookDetails, setBookDetails] = useState(null);

    useEffect(() => {
      const foundBook = blog.find(book => book.bookId == id);
      setBookDetails(foundBook);
    }, [blog, id]);
    console.log(bookDetails)

    console.log(blog, id)

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
        <div className="w-1/3">
          <img src={image} alt={bookName} className="rounded-lg shadow-lg" />
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="text-lg font-semibold">By: {author}</p>
          <p className="text-lg">Category: {category}</p>
          <p className="text-lg">Review: {review}</p>
          <p className="text-lg">Tags: {tags.join(', ')}</p>
          <p className="text-lg">Total Pages: {totalPages}</p>
          <p className="text-lg">Publisher: {publisher}</p>
          <p className="text-lg">Year of Publishing: {yearOfPublishing}</p>
          <p className="text-lg">
            Rating: {rating} {/* You might want to render stars here based on the rating */}
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Read</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Details;