import React from 'react';
import Header from "./myblogItems/Header";
import MyblogWidget from './MyblogWidget';
import MyblogPostList from './MyblogPostList';
import MyblogCategoryWidget from './MyblogCategoryWidget';
export default function myblog() {
  return (
    <>
      <Header />
      <div style={{display: "flex", flexDirection: "row", gap: "20px", padding: "30px"}}>
        <MyblogWidget />
        <MyblogPostList />
        <MyblogCategoryWidget />
      </div>
    </>
  )
}
