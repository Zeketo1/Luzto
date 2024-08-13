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
            // console.log(comments);
        });
    }, []);

    // Firestore comments
    const [loggedInEmail, setLoggedInEmail] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLoggedInEmail(user?.email);
                // console.log(user?.email);
            }
        });
    }, []);

    const loginUserDetails = usernames.find(
        (username) => username?.email == loggedInEmail
    );

    const addComment = (e, comment) => {
        e.preventDefault();

        console.log(loginUserDetails);

        const username = loginUserDetails?.firstname;
        const profile = loginUserDetails?.email?.slice(0, 1).toUpperCase();
        const email = loggedInEmail;
        const num = comments.length + 1;
        // console.log(username);

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

    // console.log(comments);

    return (
        <>
            <div className="flex flex-col gap-1 font-poppins">
                {comments?.map((item, i) => (
                    <div
                        key={i}
                        className={`w-full flex ${
                            item?.email == loggedInEmail
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >
                        <div
                            className={`relative ${
                                item?.email == loggedInEmail
                                    ? "bg-blue-500 text-black"
                                    : "bg-neutral-900 text-white"
                            } overflow-hidden p-3 w-[90%] sm:w-fit rounded-xl`}
                        >
                            <Meteors />
                            <p className="text-[14px] font-[800]">
                                {item.username}
                            </p>
                            <h1 className="max-w-[430px] text-[15px] font-[500]">
                                {item.comment}
                            </h1>
                            <p>{item.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleCommentSubmit}>
                <input
                    value={comment}
                    placeholder="Comment"
                    type="text"
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Reviews;
