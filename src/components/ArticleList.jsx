import React from 'react';
import Article from './Article';
import blogData from '../data/blog';

function ArticleList() {
    const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];
    return (
        <main>
            {blogData.posts.map((posts) => (
                <Article key={posts.id} title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    );
}

export default ArticleList;


