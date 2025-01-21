import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  // console.log(typeof id,id);
  const data = useLoaderData();
  // console.log('from json',data[0].bookId,'from pram',bookId);
  const book = data.find((b) => b.bookId === id);
  console.log(book);
  // {
  //     "bookId": 5,
  //     "bookName": "Pride and Prejudice",
  //     "author": "Jane Austen",
  //     "image": "https://i.ibb.co.com/YdQDMpn/81me-ud-V63-L-AC-UF1000-1000-QL80.jpg",
  //     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
  //     "totalPages": 279,
  //     "rating": 4.7,
  //     "category": "Classic",
  //     "tags": [
  //         "Romance",
  //         "Satire"
  //     ],
  //     "publisher": "T. Egerton, Whitehall",
  //     "yearOfPublishing": 1813
  // }
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
  return (
    <div>
      <h2>This is Book Detail: {bookId}</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-4">
                <div className="w-96 items-end p-5 bg-slate-300" >
                     <img src={image} alt="book image" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <p>
                    <div className="divider"></div>
                        <span className="font-bold text-xl">{category}</span>
                    <div className="divider"></div>
                    </p>
                    <p className="flex gap-2">
                       <span className="text-base text-gray-600 w-4/6">
                            <span className="font-bold text-lg leading-tight text-wrap">Review :</span> 
                            {review}
                        </span>
                    </p>
                </div>
      </div>
    </div>
  );
}

export default BookDetail;
