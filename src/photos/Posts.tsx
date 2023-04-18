import { POST } from "../App";
import { Post, SubTitlePost, TitlePost } from "../styles";

export const Posts = ({ post }: { post: POST }) => {
  return (
    <Post>
      <TitlePost>{post.title}</TitlePost>
      <SubTitlePost>{post.body}</SubTitlePost>
    </Post>
  );
};
