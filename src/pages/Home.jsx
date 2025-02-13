import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/PostView";
import Loader from "../components/Loader";
import { Createpost } from "../components/CreatePosts";


export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/posts.json?key=1702ee00")
            .then((response) => response.json())
            .then((data) => setPosts(data));

    }, []);

    console.log("posts from Home component:", posts);

    const updatedPosts = posts.map((post) => {
        return {
            ...post,
            postimage: `https://picsum.photos/id/${post.id}/800/400`,
        };
    });

    return (
        <Layout>
            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row feed-body">
                            <div className="col-xl-8 col-xxl-9 col-lg-8">
                                <Createpost />
                                {!updatedPosts || updatedPosts.length < 1 ? (
                                    <Loader />
                                ) : (
                                    updatedPosts.map((post) => (
                                        <Postview key={post.id} {...post} />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};