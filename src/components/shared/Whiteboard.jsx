import React from "react";
import { useRef, useState, useEffect } from "react";

function Whiteboard() {

    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [color, setColor] = useState("#000000")
    const [isEraser, setIsEraser] = useState(false)

    // ref to check previous values
    const isDrawingRef = useRef(false)
    const colorRef = useRef(color)
    const isEraserRef = useRef(isEraser)

    // syncing our ref and states together (using useEffect)
    useEffect(() => { colorRef.current = color }, [color])
    useEffect(() => { isEraserRef.current = isEraser }, [isEraser])

    {/* Drawing with MOUSE */}
    const startDrawing = (e) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        setIsDrawing(true)
    }

    const draw = (e) => {
        if (!isDrawing) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.lineWidth = 4
        ctx.lineCap = "round"
        ctx.strokeStyle = isEraser ? "#ffffff" : color
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke()
    }

    const stopDrawing = () => {
        setIsDrawing(false)
    }


    // With Touch (Apple Pencil)
    // Preventing scrolling while drawing 
 
    useEffect(() => {
        const canvas = canvasRef.current
        
        const getTouchPos = (e) => {
            const rect = canvas.getBoundingClientRect()
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            }
        }

        const startDrawingTouch = (e) => {
            e.preventDefault()
            const pos = getTouchPos(e)
            const ctx = canvas.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(pos.x, pos.y)
            isDrawingRef.current = true
        }

        const drawTouch = (e) => {
            e.preventDefault()
            if (!isDrawingRef.current) return 
            const pos = getTouchPos(e)
            const ctx = canvas.getContext("2d")
            ctx.lineWidth = 4
            ctx.lineCap = "round"
            ctx.strokeStyle = isEraserRef.current ? "#ffffff" : colorRef.current
            ctx.lineTo(pos.x, pos.y)
            ctx.stroke()
        }

        const stopDrawingTouch = () => {
            isDrawingRef.current = false
        }

        canvas.addEventListener("touchstart", startDrawingTouch, { passive: false })
        canvas.addEventListener("touchmove", drawTouch, { passive: false })
        canvas.addEventListener("touchend", stopDrawingTouch)

        return () => {
            canvas.removeEventListener("touchstart", startDrawingTouch)
            canvas.removeEventListener("touchmove", drawTouch)
            canvas.removeEventListener("touchend", stopDrawingTouch)
        }

    }, [])


    return (
        <div className="whiteboard">
            <canvas
                ref={canvasRef}
                width={800}
                height={500}
                style={{border: "1px solid black", cursor: "crosshair"}}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
        </div>
    )
}

export default Whiteboard;