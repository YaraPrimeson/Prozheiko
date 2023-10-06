"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Redirect = () => {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname !== "/404") {
      router.replace("/404");
    }
  });
  return <div></div>;
};

export default Redirect;
