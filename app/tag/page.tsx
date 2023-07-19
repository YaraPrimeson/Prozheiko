import React from "react";
import { createTag, getTags } from "@/lib/tag";
// import { createTagAction } from "@/app/_actions";
// import { getAllTags } from "@/prisma/tag";
export default function Page() {
  // const { tags }: any = await getAllTags();
  // console.log(tags);
  // async function action(data: FormData) {
  //   const tag = data.get("tag");
  //   if (!tag || typeof tag !== "string") return;
  //   await createTag(tag);
  // }
  return (
    <div>
      {/*<form action={action}>*/}
      {/*  <h2>test</h2>*/}
      {/*  <input type="text" name="tag" />*/}
      {/*  <button type="submit">send</button>*/}
      {/*</form>*/}
      <div>
        {/*<h3>{!tags.length && "tags is empty"}</h3>*/}
        {/*{tags?.map((tag: any) => (*/}
        {/*  <p key={tag}>{tag.tag}</p>*/}
        {/*))}*/}
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const tags = await getTags();
//
//   return { props: { tags } };
// };
