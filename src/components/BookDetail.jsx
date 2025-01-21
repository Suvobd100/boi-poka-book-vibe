import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  // console.log(typeof id,id);
  const data = useLoaderData();
  // console.log('from json',data[0].bookId,'from pram',bookId);
  const book = data.find((b) => b.bookId === id);
  // console.log(book);
  
  const {
    bookId: currBokId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  // function mark as read
  const handelRead = ()=>{



  }

  return (
    <div>
      <h2>This is Book Detail: {bookId}</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-4">
        <div className="w-96 items-end p-5 bg-slate-300">
          <img src={image} alt="book image" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <p>
            <div className="divider"></div>
            <span className="font-bold text-xl">{category}</span>
            <div className="divider"></div>
          </p>
          <div className="flex gap-2 p-4 mx-auto">
            <span className="text-base text-gray-600 w-5/6">
              <span className="font-bold text-lg leading-tight text-wrap ">
                Review :
              </span>
              {review}
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Tag</span>

            <span className="">
              {tags.map((t, indx) => (
                <button
                  key={indx}
                  className="btn btn-xs bg-green-200 text-green-800 mr-6"
                >
                  #{t}
                </button>
              ))}
            </span>
          </div>
          <div className="divider"></div>
                {/*For Heading cols*/}
                <div className="flex gap-24">

                <div className="grid grid-cols-1 gap-y-4">

                  {/* Headings Column */}
                  <div>
                    <h3 className="font-bold">Number of Pages</h3>
                  </div>
                  <div>
                    <h3 className="font-bold">Publisher</h3>
                  </div>
                  <div>
                    <h3 className="font-bold">Year of Publishing</h3>
                  </div>
                  <div>
                    <h3 className="font-bold">Rating</h3>
                  </div>

                  {/* Results Column */}
                  
                </div>

                {/* end Heading */}

                {/* result start */}
                  <div className="grid grid-cols-1 gap-y-4">
                      <div>
                        {totalPages}
                      </div>
                      <div>
                        {publisher}
                      </div>
                      <div>
                        {yearOfPublishing}
                      </div>
                      <div>
                        {rating}
                      </div>
                    
                  </div>


                </div>

                {/* result end */}

                <div className="flex gap-6 mt-4">
                    <button onClick={handelRead} className="btn btn-outline btn-accent">Read</button>
                    <button className="btn bg-blue-400">Wishlist</button>
                </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
