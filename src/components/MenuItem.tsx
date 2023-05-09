import React from "react"
import { IconType } from "react-icons"
import Link from "next/link"

type MenuItem = {
    title: string;
    address: string;
    Icon: IconType;
}

export default function MenuItem({ title, address, Icon }: MenuItem) {
    return (
        <div>
            <Link href={address} className="">
                <Icon />
                <p>{title}</p>
            </Link>
        </div>
    )
}
