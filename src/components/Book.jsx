import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  // console.log(book);
  const { bookId, bookName, author, image, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="w-80 bg-blue-200 p-8 rounded-xl">
          <img src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-8">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-800"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="border-t-2 border-dashed"></div>
          {/* divide-x-dashed */}
          <p>By: {author}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="flex gap-1">
              <span>5.00</span>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book;
