import React, { useEffect, useState } from "react";
import { auth, colComments, usernames } from "../firebase";
import { addDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Meteors } from "../utils/meteors";

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    onSnapshot(colComments, (snapshot) => {
      const newComments = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setComments(newComments.sort((a, b) => a.num - b.num));
    });
  }, []);

  // Firestore comments
  const [loggedInEmail, setLoggedInEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoggedInEmail(user?.email);
      }
    });
  }, []);

  const loginUserDetails = usernames.find(
    (username) => username?.email === loggedInEmail
  );


  const addComment = (e, comment) => {
    e.preventDefault();

    const username = loginUserDetails?.firstname;
    const profile = loginUserDetails?.email?.slice(0, 1).toUpperCase();
    const email = loggedInEmail;
    const num = comments.length + 1;

    addDoc(colComments, {
      username,
      comment,
      profile,
      email,
      num,
    }).then(() => {
      console.log("Comment added");
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(e, comment);
    setComment("");
  };

  return (
    <>
      <div className="flex flex-col gap-1 font-poppins">
        {comments?.map((item, i) => (
          <div
            key={i}
            className={`w-full flex ${
              item?.email == loggedInEmail ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`relative ${
                item?.email == loggedInEmail
                  ? "bg-blue-500 text-black"
                  : "bg-neutral-900 text-white"
              } overflow-hidden p-3 w-[90%] sm:w-fit rounded-md`}
            >
              <Meteors />
              <p className="text-[14px] font-[800] mb-2">{item.username}</p>
              <h1 className="max-w-[430px] text-[16px] font-[500]">
                {item.comment}
              </h1>
              {/* <p>{item.email}</p> */}
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleCommentSubmit}
        className="flex items-center justify-center p-4"
      >
        <div className="flex justify-between border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full md:w-[80%]">
          <input
            type="text"
            placeholder="Enter your review..."
            className="px-4 py-2 w-[80%] text-gray-700 focus:outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Reviews;
