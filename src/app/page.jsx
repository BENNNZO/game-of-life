"use client"

import React, { useState, useEffect } from 'react';

export default function Home() {
    const WIDTH = 50
    const HEIGHT = 25
    
    const [playState, setPlayState] = useState(false)

    const [hover, setHover] = useState({x: 0, y: 0})
    const [mouse, setMouse] = useState(false)

    const [matrix, setMatrix] = useState(baseMatrix())

    useEffect(() => {
        window.addEventListener("mousedown", () => {setMouse(true)})
        window.addEventListener("mouseup", () => setMouse(false))

        return () => {
            window.removeEventListener("mousedown", () => {setMouse(true)})
            window.removeEventListener("mouseup", () => setMouse(false))
        }
    }, [])

    useEffect(() => {
        if (mouse) {
            let x = hover.x
            let y = hover.y

            setMatrix(oldArr => {
                let newArr = [...oldArr]
                newArr[x][y] = true
                return newArr
            })
        }
    }, [hover])
    
    useEffect(() => {
        const playing = setInterval(() => {
            if (playState) frame(matrix)
        }, 5);

        return () => clearInterval(playing)
    }, [playState, matrix])

    function baseMatrix() {
        // this is really long
        // i realize this is less customizable than generating the empty matrix but this is faster
        return [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]
    }

    function frame(oldArr) {
        setMatrix(() => {  
            // this is the stupidest thing in the world
            // i literally cant use a spread operator to clone the array so i have to recreate the empty array as a whole
            let m = baseMatrix()   

            for (let x = 1; x < WIDTH + 1; x++) {
                for (let y = 1; y < HEIGHT + 1; y++) {
                    let sum = 0
    
                    if (oldArr[x + 1][y + 1]) sum++
                    if (oldArr[x - 1][y + 1]) sum++
                    if (oldArr[x + 1][y - 1]) sum++
                    if (oldArr[x - 1][y - 1]) sum++
                    if (oldArr[x + 1][y]) sum++
                    if (oldArr[x - 1][y]) sum++
                    if (oldArr[x][y + 1]) sum++
                    if (oldArr[x][y - 1]) sum++
    
                    if (oldArr[x][y] === false) {
                        if (sum === 3) m[x][y] = true
                    } else if (oldArr[x][y] === true) {
                        console.log({x, y})
                        console.log(sum)
                        if (sum > 3) m[x][y] = false
                        if (sum < 2) m[x][y] = false
                        if (sum === 2) m[x][y] = true
                        if (sum === 3) m[x][y] = true
                    }
                }
            }
            // for (let x = 0; x < WIDTH + 2; x++) {
            //     for (let y = 0; y < HEIGHT + 2; y++) {
            //         let sum = 0
    
            //         // m[x][y] = true

            //         console.log(oldArr)

            //         let posX = x + 1 > WIDTH + 2 ? 0 : x + 1
            //         let negX = x - 1 < 0 ? WIDTH + 2 : x - 1
            //         let posY = y + 1 > HEIGHT + 2 ? 0 : y + 1
            //         let negY = y - 1 < 0 ? HEIGHT + 2 : y - 1

            //         if (oldArr[posX][posY]) sum++
            //         if (oldArr[negX][posY]) sum++
            //         if (oldArr[posX][negY]) sum++
            //         if (oldArr[negX][negY]) sum++
            //         if (oldArr[posX][y]) sum++
            //         if (oldArr[negX][y]) sum++
            //         if (oldArr[x][posY]) sum++
            //         if (oldArr[x][negY]) sum++
    
            //         if (oldArr[x][y] === false) {
            //             if (sum === 3) m[x][y] = true
            //         } else if (oldArr[x][y] === true) {
            //             console.log({x, y})
            //             console.log(sum)
            //             if (sum > 3) m[x][y] = false
            //             if (sum < 2) m[x][y] = false
            //             if (sum === 2) m[x][y] = true
            //             if (sum === 3) m[x][y] = true
            //         }
            //     }
            // }

            return m
        })
    }

    return (
        <main className='h-screen bg-neutral-950 grid place-items-center'>
            {/* <p className='text-yellow-300 bg-red-700 absolute top-0 left-0 opacity-20'>
                {JSON.stringify(matrix, null, 4)}
            </p> */}
            <p className='text-yellow-300 bg-red-700 absolute top-0 left-0 px-3 py-1 ml-3 mt-3 rounded-md'>
                {JSON.stringify(hover, null, 4)}
            </p>
            <div className='flex flex-row'>
                {matrix.map((e, x) => (
                    <div key={x} className='flex flex-col'>
                        {e.map((e2, y) => (
                            <div
                                key={y}
                                className='h-5 w-5 select-none'
                                draggable={false}
                                style={{ backgroundColor: `${e2 ? "white" : "black"}` }}
                                onMouseMove={() => setHover({x, y, state: matrix[x][y]})}
                                onClick={() => {
                                    setMatrix(oldArr => {
                                        let newArr = [...oldArr]
                                        console.log(newArr)
                                        newArr[x][y] = !newArr[x][y]
                                        console.log({x, y})
                                        return newArr
                                    })
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className='flex flex-row gap-5'>
                <button className='bg-white px-3 py-1 rounded-md' onClick={() => frame([...matrix])}>FRAME</button>
                <button className='bg-white px-3 py-1 rounded-md' onClick={() => {setMatrix(baseMatrix()); setPlayState(false)}}>CLEAR</button>
                <button className={`${playState ? "bg-green-400" : "bg-white"} px-3 py-1 rounded-md`} onClick={() => setPlayState(true)}>PLAY</button>
                <button className={`${playState ? "bg-white" : "bg-red-400"} px-3 py-1 rounded-md`} onClick={() => setPlayState(false)}>STOP</button>
            </div>
        </main>
    )
}
