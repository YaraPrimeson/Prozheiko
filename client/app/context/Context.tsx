"use client";
import React, { createContext, useState } from "react";
import api from "../api";

export const AppContext = createContext({
  tags: [],
  getAllTags: () => {},
  createTag: (tag: string) => {},
  editTag: (_id: string, tag: string) => {},
  deleteTag: (_id: string) => {},
  blog: [],
  getAllBlog: () => {},
  createBlog: (blog: any) => {},
  editBlog: (_id: string, blog: any) => {},
  deleteBlog: (_id: string) => {},
  price: [],
  getAllPrice: () => {},
  createPrice: (price: any) => {},
  editPrice: (_id: string, price: any) => {},
  deletePrice: (_id: string) => {},
});
const Context = ({ children }: { children: React.ReactNode }) => {
  const [tags, setTags] = useState([]);
  const getAllTags = () => {
    api.tags.getTags().then((res) => setTags(res));
  };
  const createTag = (tag: string) => {
    api.tags.createTag(tag).then(getAllTags);
  };
  const editTag = (_id: string, tag: string) => {
    api.tags.editTag(_id, tag).then(getAllTags);
  };
  const deleteTag = (_id: string) => {
    api.tags.deleteTag(_id).then(getAllTags);
  };
  const [blog, setBlog] = useState([]);
  const getAllBlog = () => {
    api.blog.getBlog().then((res) => setBlog(res));
  };
  const createBlog = (article: any) => {
    api.blog.createBlog(article).then(getAllBlog);
  };
  const editBlog = (_id: string, article: any) => {
    api.blog.editBlog(_id, article).then(getAllBlog);
  };
  const deleteBlog = (_id: string) => {
    api.blog.deleteBlog(_id).then(getAllBlog);
  };
  const [price, setPrice] = useState([]);
  const getAllPrice = () => {
    api.price.getPrice().then((res) => setPrice(res));
  };
  const createPrice = (price: any) => {
    api.price.createPrice(price).then(getAllPrice);
  };
  const editPrice = (_id: string, price: any) => {
    api.price.editPrice(_id, price).then(getAllPrice);
  };
  const deletePrice = (_id: string) => {
    api.price.deletePrice(_id).then(getAllPrice);
  };
  return (
    <AppContext.Provider
      value={{
        tags,
        getAllTags,
        deleteTag,
        createTag,
        editTag,
        blog,
        getAllBlog,
        createBlog,
        editBlog,
        deleteBlog,
        price,
        getAllPrice,
        createPrice,
        editPrice,
        deletePrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
