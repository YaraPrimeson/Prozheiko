"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Redirect = () => {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname === "/kontakty.html") {
      router.replace("/contacts");
    } else if (pathname === "/o-klinike.html") {
      router.replace("/clinic");
    } else if (pathname === "/otzyvy-1.html") {
      router.replace("/");
    } else if (pathname === "/akcii.html") {
      router.replace("/");
    } else if (pathname !== "/404") {
      router.replace("/404");
    }
  });
  return <div></div>;
};

export default Redirect;
