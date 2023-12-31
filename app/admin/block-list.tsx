import React, { ChangeEvent, FC } from "react";
import { IBlock } from "@/app/admin/blog/blog-create-modal";
import style from "@/app/admin/blog/blog.module.scss";
import globalS from "@/app/styles/global.module.scss";
import { IconButton, Stack, TextField } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

type BlockListProps = {
  block: IBlock;
  addToBlocks: () => void;
  addNewListToBlock: () => void;
  deleteCurrentListItem: (indexValue: number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeBlockListValue: (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  onDeleteCurrentBlock: () => void;
};
const BlockList: FC<BlockListProps> = ({
  block,
  addToBlocks,
  addNewListToBlock,
  deleteCurrentListItem,
  onChange,
  onChangeBlockListValue,
  onDeleteCurrentBlock,
}) => {
  return (
    <div>
      <p>{block.type}</p>
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
            <div className={style.btn__create__wrapper}>
              <button
                className={globalS.btn__create}
                disabled={!block?.value}
                onClick={addToBlocks}
              >
                Додати в статтю
              </button>
              <button
                className={globalS.cancel__btn}
                onClick={onDeleteCurrentBlock}
              >
                Скасувати
              </button>
            </div>
          </>
        ) : block?.type === "subtitleText" ? (
          <>
            <input
              className={style.input}
              type="text"
              placeholder={"Заголовок p"}
              value={block?.value as string}
              onChange={onChange}
            />
            <div className={style.btn__create__wrapper}>
              <button
                className={globalS.btn__create}
                disabled={!block?.value}
                onClick={addToBlocks}
              >
                Додати в статтю
              </button>
              <button
                className={globalS.cancel__btn}
                onClick={onDeleteCurrentBlock}
              >
                Скасувати
              </button>
            </div>
          </>
        ) : block?.type === "paragraph" ? (
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
              <div className={style.btn__create__wrapper}>
                <button
                  className={globalS.btn__create}
                  disabled={!block?.value}
                  onClick={addToBlocks}
                >
                  Додати в статтю
                </button>
                <button
                  className={globalS.cancel__btn}
                  onClick={onDeleteCurrentBlock}
                >
                  Скасувати
                </button>
              </div>
            </div>
          </>
        ) : block?.type === "imageUrl" ? (
          <>
            <TextField
              sx={{ whiteSpace: "pre-wrap" }}
              className={style.input}
              placeholder={"imageUrl"}
              value={block?.value as string}
              onChange={onChange}
            />
            <div>
              <div className={style.btn__create__wrapper}>
                <button
                  className={globalS.btn__create}
                  disabled={!block?.value}
                  onClick={addToBlocks}
                >
                  Додати в статтю
                </button>
                <button
                  className={globalS.cancel__btn}
                  onClick={onDeleteCurrentBlock}
                >
                  Скасувати
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {Array.isArray(block?.value) &&
              block?.value?.map((list: string, index: number) => {
                return (
                  <Stack
                    key={index}
                    flexDirection="row"
                    gap="15px"
                    alignItems="center"
                    sx={{ mt: "15px" }}
                  >
                    <input
                      className={style.admin__input}
                      placeholder={"list"}
                      value={list as string}
                      onChange={(e) => onChangeBlockListValue(index, e)}
                    />
                    <button
                      className={globalS.delete__btn}
                      onClick={() => deleteCurrentListItem(index)}
                    >
                      delete
                    </button>
                  </Stack>
                );
              })}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <button
                className={globalS.btn__create}
                disabled={!block?.value}
                onClick={addToBlocks}
                style={{ margin: "0" }}
              >
                Додати в Block
              </button>
              <button
                style={{ margin: "0" }}
                className={globalS.btn__create}
                onClick={addNewListToBlock}
              >
                Створити новий список
              </button>
              <button
                style={{ margin: "0" }}
                className={globalS.cancel__btn}
                onClick={onDeleteCurrentBlock}
              >
                Скасувати
              </button>
            </div>
          </>
        ))}
    </div>
  );
};

export default BlockList;
