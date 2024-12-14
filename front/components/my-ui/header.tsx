"use client"

import { Separator } from "../ui/separator"




export default function Header(){
    return (
        <>
            <div className="h-16 flex flex-col justify-between w-full">
                <h1 className="text-foreground text-center justify-center items-center">Hellooo!</h1>
                <Separator className=""/>
            </div>
        </>
    )
}