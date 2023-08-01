import React, { ChangeEvent, FC } from "react";
import { IBlock } from "@/app/admin/blog/blog-create-modal";
import style from "@/app/admin/blog/blog.module.scss";
import { TextField } from "@mui/material";

type BlockListProps = {
  block: IBlock;
  addToBlocks: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDeleteCurrentBlock: () => void;
};
const BlockList: FC<BlockListProps> = ({
  block,
  addToBlocks,
  onChange,
  onDeleteCurrentBlock,
}) => {
  console.log(block);
  return (
    <div>
      {block &&
        (block?.type === "subtitle" ? (
          <>
            <input
              className={style.input}
              type="text"
              placeholder={"Заголовок"}
              value={block?.value as string}
              onChange={onChange}
            />
            <button disabled={!block?.value} onClick={addToBlocks}>
              add To Blog
            </button>
            <button onClick={onDeleteCurrentBlock}>cancel</button>
          </>
        ) : (
          <>
            <TextField
              multiline
              sx={{ whiteSpace: "pre-wrap" }}
              minRows={2}
              className={style.input}
              placeholder={"Параграф"}
              value={block?.value as string}
              onChange={onChange}
            />
            <div>
              <button disabled={!block?.value} onClick={addToBlocks}>
                add To Blog
              </button>
              <button onClick={onDeleteCurrentBlock}>cancel</button>
            </div>
          </>
        ))}
    </div>
  );
};

export default BlockList;
