// "use client";
// import React, { createContext, useState } from "react";
// import api from "../../../api";
//
// export const AppContext = createContext({
//   tags: [],
//   tagsLoading: true,
//   getAllTags: () => {},
//   createTag: () => {},
//   editTag: () => {},
//   deleteTag: () => {},
//   blog: [],
//   getAllBlog: () => {},
//   createBlog: (blog) => {},
//   editBlog: () => {},
//   deleteBlog: () => {},
//   price: [],
//   getAllPrice: () => {},
//   createPrice: () => {},
//   editPrice: () => {},
//   deletePrice: () => {},
//   images: [],
//   getAllImages: () => {},
//   createImage: () => {},
//   deleteImage: () => {},
// });
// const Context = ({ children }) => {
//   const [tags, setTags] = useState([]);
//   const [tagsLoading, setTagsLoading] = useState(true);
//   const getAllTags = () => {
//     setTagsLoading(true);
//     api.tags
//       .getTags()
//       .then((res) => setTags(res))
//       .finally(() => setTagsLoading(false));
//   };
//   const createTag = (tag) => {
//     api.tags.createTag(tag).then(getAllTags);
//   };
//   const editTag = (_id, tag) => {
//     api.tags.editTag(_id, tag).then(getAllTags);
//   };
//   const deleteTag = (_id) => {
//     api.tags.deleteTag(_id).then(getAllTags);
//   };
//   const [blog, setBlog] = useState([]);
//   const getAllBlog = () => {
//     api.blog.getBlog().then((res) => setBlog(res));
//   };
//   const createBlog = (article) => {
//     api.blog.createBlog(article).then(getAllBlog);
//   };
//   const editBlog = (_id, article) => {
//     api.blog.editBlog(_id, article).then(getAllBlog);
//   };
//   const deleteBlog = (_id) => {
//     api.blog.deleteBlog(_id).then(getAllBlog);
//   };
//   const [price, setPrice] = useState([]);
//   const getAllPrice = () => {
//     api.price.getPrice().then((res) => setPrice(res));
//   };
//   const createPrice = (price) => {
//     api.price.createPrice(price).then(getAllPrice);
//   };
//   const editPrice = (_id, price) => {
//     api.price.editPrice(_id, price).then(getAllPrice);
//   };
//   const deletePrice = (_id) => {
//     api.price.deletePrice(_id).then(getAllPrice);
//   };
//
//   const [images, setImages] = useState([]);
//   const getAllImages = () => {
//     api.images.getImages().then((res) => setImages(res));
//   };
//   const createImage = (price) => {
//     api.images.createImage(price).then(getAllImages);
//   };
//   const deleteImage = (_id) => {
//     api.images.deleteImage(_id).then(getAllImages);
//   };
//   return (
//     <AppContext.Provider
//       value={{
//         tags,
//         tagsLoading,
//         getAllTags,
//         deleteTag,
//         createTag,
//         editTag,
//         blog,
//         getAllBlog,
//         createBlog,
//         editBlog,
//         deleteBlog,
//         price,
//         getAllPrice,
//         createPrice,
//         editPrice,
//         deletePrice,
//         images,
//         getAllImages,
//         createImage,
//         deleteImage,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
//
// export default Context;
