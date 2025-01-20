import React from "react";

function Book({ book }) {
    // console.log(book);
  const { bookName,author, image } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="w-80">
        <img
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default Book;
