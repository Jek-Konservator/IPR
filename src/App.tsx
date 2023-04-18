import React, { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "./photos";
import { PhotosContainer } from "./styles";
import { Virtuoso } from "react-virtuoso";

export interface POST {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const App = () => {
  const [posts, setPosts] = useState<POST[]>([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PhotosContainer>
      <Virtuoso
        style={{ height: "calc(100vh)", width: "100%" }}
        totalCount={posts?.length}
        itemContent={(index) => {
          const post = posts[index];
          return (
            <div style={{ display: "flex" }}>
              <Posts post={post} />
            </div>
          );
        }}
      />
    </PhotosContainer>
  );
};
