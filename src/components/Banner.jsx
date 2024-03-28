
const Banner = () => {
    return (
        <div className="hero bg-base-200 p-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/FBTp68v/cover-book.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="lg: mr-20">
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <div className="mt-8">
      <a href="listedbooks" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">View The List</span>
</a>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;