import { useEffect } from "react";
import { useRef } from "react";

interface BoardProps {
    boardSize : number;
};

export default function Board({boardSize} : BoardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=> {
        drawLines();
    },[]);

    const drawLines = () => {
        const context = canvasRef.current?.getContext('2d');

        if(canvasRef.current && context){
            const width = canvasRef.current.width;
            const height = canvasRef.current.height;
            context.strokeRect(0,0,width,height);

            const interval = width / (boardSize);

            for(let i = 0; i <= boardSize; i++){
                const start = interval * i;
                context.moveTo(start, 0);
                context.lineTo(start, height);
                context.moveTo(0, start);
                context.lineTo(width, start);
                context.stroke();
            }
        }
    };

    return <canvas width='300' height='300' ref={canvasRef} >
    </canvas>;
}