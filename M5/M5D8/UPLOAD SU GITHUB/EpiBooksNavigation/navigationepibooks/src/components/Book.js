import React from "react";
// import Card from "react-bootstrap/Card";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Book = (props) => {
  const bookID = useParams()
  console.log(bookID)

  return (
    <>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <Link to={`/comments/${props.asin}`}>
              <a
                href=""
                class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-contain md:object-scale-down"
                    src={props.img}
                    alt=""
                  ></img>
                </div>
                <div class="p-4">
                  <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    BOOK
                  </span>
                  <h5 class="mt-2 mb-2  font-italic">
                    {props.title}
                  </h5>
                  <p class="text-sm">
                    {props.category}
                  </p>
                  <div class="mt-3 flex items-center">
                    <span class="font-bold text-xl">{props.price}</span>&nbsp;
                    <span class="text-sm font-semibold">€</span>
                  </div>
                </div>
            </a>
            </Link>
              </div>
    </>
  );
};

export default Book;