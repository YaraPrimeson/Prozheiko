"use client";
import React, { FC, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface RedirectProps {
  oldPath: string;
  newPath: string;
}

const Redirect: FC<RedirectProps> = ({ oldPath, newPath }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === `/${oldPath}`) {
      router.replace(`/${newPath}`);
    }
  });
  return <></>;
};

export default Redirect;
