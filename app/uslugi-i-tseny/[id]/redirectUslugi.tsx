"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const RedirectUslugi = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/services`);
  });
  return <div></div>;
};

export default RedirectUslugi;
