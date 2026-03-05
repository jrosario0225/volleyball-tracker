import React from "react";
import { useRef, useState } from "react";

function Whiteboard() {

    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [color, setColor] = useState("#000000")
    const [isEraser, setIsEraser] = useState(false)

    // Drawing with Mouse
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
    const getTouchPos = (e) => {
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        }
    }

    const startDrawingTouch = (e) => {
        e.preventDefault()
        const pos = getTouchPos(e)
        const ctx = canvasRef.current.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        setIsDrawing(true)
    }

    const drawTouch = (e) => {
        e.preventDefault()
        if (!isDrawing) return
        const pos = getTouchPos(e)
        const ctx = canvasRef.current.getContext("2d")
        ctx.lineWidth = 4
        ctx.lineCap = "round"
        ctx.strokeStyle = isEraser ? "#ffffff" : color
        ctx.lineTo(pos.x, pos.y)
        ctx.stroke()
    }



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
                onTouchStart={startDrawingTouch}
                onTouchMove={drawTouch}
                onTouchEnd={stopDrawing}
            />
        </div>
    )
}

export default Whiteboard;