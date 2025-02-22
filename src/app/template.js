"use client"


import { useEffect } from "react"
import { animatePageIn} from "./anim"

export default function Template({children}){

    useEffect(() => {
        animatePageIn()

    },[])


    return(
        <div>
            <div id="banner" className="min-h-screen  z-10 fixed top-0 left-0 w-full" style={{ backgroundColor: "#fdfdf1", opacity:"0.5" }}/>
            {/* <div id="banner-2" className="min-h-screen bg-black z-10 fixed top-0 left-1/4 w-1/4"/>
            <div id="banner-3" className="min-h-screen bg-black z-10 fixed top-0 left-2/4 w-1/4"/>
            <div id="banner-4" className="min-h-screen bg-black z-10 fixed top-0 left-3/4 w-1/4"/> */}

            {children}
        </div>
    )
}