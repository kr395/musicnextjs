
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <link href="#">
                  <MenuItem setActive={setActive} active={active} item="Home">

                  </MenuItem>
                  <MenuItem setActive={setActive} active={active} item="Our Courses ">
                  <HoveredLink href="/courses">All Courses</HoveredLink>
                  </MenuItem>
                </link>
            </Menu>
        </div>
    )
}