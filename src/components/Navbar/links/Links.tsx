'use client'
import { useState } from "react"
import styled from "../../../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import menu from "@/assets/menu-aberto.png"
import NavLinks from "../navLinks/NavLinks"

const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Trips',
        path: '/trips',
    },
    {
        title: 'About planets',
        path: '/planets',
    },
    {
        title: 'Contacts',
        path: '/contact',
    },
]


export default function Links(){
    const [open, setOpen] = useState(false)
    return(
        <div className={styled.links}>
            {links.map((link) => {
                return(
                    <Link href={link.path} key={link.title}>{link.title}</Link>
                )
            })}

            <Image src={menu} width={30} height={30} alt="" className={styled.menuIcon} onClick={() => setOpen((prev) => !prev)}/>
           {open &&( <div className={styled.mobileLinks}>
                {links.map((link) => {
                    return(  
                            <NavLinks item={link} key={link.title}/>
                    )
                })}
            </div>)}
        </div>
    )
}