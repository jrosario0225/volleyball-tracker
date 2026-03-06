import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Whiteboard.css"

function Whiteboard() {

    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [color, setColor] = useState("#000000")
    const [history, setHistory] = useState([])


    // ref to check previous values
    const isDrawingRef = useRef(false)
    const colorRef = useRef(color)
    const historyRef = useRef([])


    // syncing our ref and states together (using useEffect)
    useEffect(() => { colorRef.current = color }, [color])
    useEffect(() => { historyRef.current = history }, [history])


    {/* Drawing with MOUSE */ }
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
        ctx.lineWidth = 3
        ctx.lineCap = "round"
        ctx.strokeStyle = colorRef.current
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke()
    }

    const stopDrawing = () => {
        if (!isDrawing) return
        const canvas = canvasRef.current
        const snapshot = canvas.toDataURL()
        setHistory(prev => [...prev.slice(-9), snapshot])
        setIsDrawing(false)
    }

    const cancelDrawing = () => {
        setIsDrawing(false)
    }

    const undo = () => {
        if (history.length === 0) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        const newHistory = history.slice(0, -1)
        setHistory(newHistory)

        if (newHistory.length === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            return
        }

        const img = new Image()
        img.src = newHistory[newHistory.length - 1]
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0)}
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
            const touch = e.touches[0]
            if (touch.touchType !== "stylus") return // only draws with Apple Pencil
            e.preventDefault()
            const pos = getTouchPos(e)
            const ctx = canvas.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(pos.x, pos.y)
            isDrawingRef.current = true
        }

        const drawTouch = (e) => {
            const touch = e.touches[0]
            if (touch.touchType !== "stylus") return
            e.preventDefault()
            if (!isDrawingRef.current) return
            const pos = getTouchPos(e)
            const ctx = canvas.getContext("2d")
            ctx.lineWidth = 3
            ctx.lineCap = "round"
            ctx.strokeStyle = colorRef.current
            ctx.lineTo(pos.x, pos.y)
            ctx.stroke()
        }

        const stopDrawingTouch = () => {
            if (!isDrawingRef.current) return
            const snapshot = canvas.toDataURL()
            const newHistory = [...historyRef.current.slice(-9), snapshot]
            historyRef.current = newHistory
            setHistory(newHistory)
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

    const presetColors = ["#000000", "#0000FF", "#FF0000"]


    return (
        <div className="whiteboard">
            <div className="whiteboard-controls">
                
                {presetColors.map((presetColor) => (
                    <button
                        key={presetColor}
                        onClick={() => { setColor(presetColor) }}
                        style={{
                            backgroundColor: presetColor,
                            width: "40px",
                            height: "40px",
                            minWidth: "40px",
                            minHeight: "40px",
                            borderRadius: "50%",
                            padding: "0",
                            border: color === presetColor ? "3px solid white" : "none"
                        }}
                    />
                ))}


                <button onClick={undo}>Undo</button>

                <button onClick={() => {
                    const canvas = canvasRef.current
                    const ctx = canvas.getContext("2d")
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                }}>
                    Clear All
                </button>
            </div>

            <canvas
                ref={canvasRef}
                width={900}
                height={800}
                style={{ border: "1px solid black", cursor: "crosshair" }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={cancelDrawing}
            />
        </div>
    )
}

export default Whiteboard;