import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
      <div className="mb-4 md:mb-0 w-full md:w-1/2">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg w-full object-cover h-[30vh]"
        />
      </div>
      <div className="flex-grow pl-0 md:pl-6 flex flex-col justify-between">
        <div className="text-center md:text-left">
          <div className="text-2xl text-primaryblue font-karla font-bold mb-4">
            {book.title}
          </div>
          <p className="mt-2 text-gray-600 font-roboto">{book.summary}</p>
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-4 mt-4">
          <Link
            to={`/books/${book.id}`}
            className="text-white rounded-lg border cursor-pointer bg-primaryblue border-primary-600 hover:bg-secondaryblue py-2 px-3 text-xs font-medium text-center"
          >
            Notes
          </Link>
          <a href={book.amazon_link} target="_blank">
            <FontAwesomeIcon
              icon={faAmazon}
              className="self-center text-darkgrey text-lg sm:text-xl transition-colors duration-100 hover:text-primaryblue"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
