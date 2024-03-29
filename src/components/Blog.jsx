import { Link } from "react-router-dom";
import { LuStar } from "react-icons/lu";

const Blog = ({blog}) => {
    const{bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = blog;
    return (
        <div className="border rounded-2xl p-4 m-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  ">

            <Link to={`/blog/${blog.bookId}`} className="max-w-sm mx-auto dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-screen  dark:bg-gray-500" src={image} />
                <div className="flex gap-2 text-green-500 font-bold m-2">
                    <h3 className="bg-slate-200 p-2 rounded-3xl">{tags[0]}</h3>
                    <h3 className="bg-slate-200 p-2 rounded-3xl">{tags[1]}</h3>
                    <h3 className="bg-slate-200 p-2 rounded-3xl">{tags[2]}</h3>
                </div>
                <div className="p-6 space-y-2">
                    <h3 className="text-3xl font-bold">{bookName}</h3>
                    <h3 className="text-lg font-semibold">By: {author}</h3>

                    <h5 className="border-b-2 m-2 border-dashed mx-auto"></h5>

                    <div className="flex justify-between text-lg">
                        <span>{category}</span>
                        <div className="flex items-center gap-2">
                            <span>{rating}</span>
                            <LuStar />
                        </div>
                    </div>
                </div>
            </Link>
                
        </div>
    );
};

export default Blog;