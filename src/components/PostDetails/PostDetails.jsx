import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const PostDetails = () => {

    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;

    console.log(postId);

    const hankleGoBack = () =>{
        navigate(-1);
    }


    return (
        <div>
            <h2>Post Details: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={hankleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;