import React, { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "@/app/context/Context";
import style from "./blog.module.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface IBlock {
  type: "title" | "paragraph" | "img";
  value: string | File;
}

interface IBlog {
  block: IBlock[];
}

const CreateBlog = () => {
  const {
    getAllBlog,
    blog,
    getAllTags,
    tags,
    deleteBlog,
    editBlog,
    createBlog,
  } = useContext(AppContext);
  const [newBlog, setNewBlog] = useState<IBlog[]>([]);
  const [block, setBlock] = useState<IBlock | null>(null);
  const [currentInput, setCurrentInput] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const addTitle = () => {
    setBlock({ type: "title", value: "" });
  };
  const addParagraph = () => {
    setBlock({ type: "paragraph", value: "" });
  };
  const addImg = () => {};
  const addToBlog = () => {
    setNewBlog((prev: any) => [...prev, block]);
    setBlock(null);
  };
  const handleCreateBlog = () => {
    createBlog({ blocks: newBlog });
    setNewBlog([]);
    setBlock(null);
  };
  useLayoutEffect(() => {
    getAllBlog();
    getAllTags();
  }, []);
  useLayoutEffect(() => {
    console.log(tags);
  }, [tags]);
  return (
    <div>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel>Tag</InputLabel>
        <Select value={age} label="Age" onChange={handleChange}>
          {tags.map(({ tag, _id }) => (
            <MenuItem key={_id} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className={style.btn__container}>
        <button className={style.btn} onClick={addTitle}>
          Додати заголовок
        </button>
        <button className={style.btn} onClick={addParagraph}>
          Додати параграф
        </button>
        <button className={style.btn}>Додати картинку</button>
      </div>
      {block ? (
        block.type !== "img" ? (
          <div className="">
            {block.type === "title" ? (
              <input
                className={style.input}
                type="text"
                placeholder={"Заголовок"}
                value={block?.value as string}
                onChange={(e) =>
                  setBlock((prev: any) => ({
                    ...prev,
                    ["value"]: e.target.value,
                  }))
                }
              />
            ) : (
              <textarea
                className={style.input}
                placeholder={"Параграф"}
                value={block?.value as string}
                onChange={(e) =>
                  setBlock((prev: any) => ({
                    ...prev,
                    ["value"]: e.target.value,
                  }))
                }
              />
            )}

            <Button
              sx={{ ml: "15px" }}
              variant="contained"
              color="primary"
              disabled={!block.value}
              onClick={addToBlog}
            >
              add To Blog
            </Button>
          </div>
        ) : (
          <div>
            <input
              type="file"
              value={block?.value as "File"}
              onChange={(e) =>
                setBlock((prev: any) => ({ ...prev, value: e.target.value }))
              }
            />
          </div>
        )
      ) : null}
      {newBlog.map((blog: any) => (
        <div key={blog.value}>
          {blog.type === "title" ? <h1>{blog.value}</h1> : <p>{blog.value}</p>}
        </div>
      ))}
      <button className={style.btn} onClick={handleCreateBlog}>
        create article
      </button>
    </div>
  );
};

export default CreateBlog;
