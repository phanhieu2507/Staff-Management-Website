import { useEffect } from "react";
const BackGround = () => {
    useEffect(() => {
     
        window.bubbly({
            colorStart: "#fff",
            colorStop: "#fff",
            blur: 1,
            bubbles: 220,
            compose: "source-over",
            shadowColor: "#5DB09B",
            radiusFunc: () => Math.random() * 3,
            bubbleFunc: () => `hsla(0, 0%, 85%, ${Math.random() * 0.25})`,
            velocityFunc: () => 0.1 + Math.random() * 0.3,
            angleFunc: () =>  -Math.PI / 4,
            canvas: document.querySelector("#background")
            });
    },[])
      
      return (
        <canvas id="background" style = {{minHeight:"90vh",minWidth:"98vw",maxWidth:"98vw",maxHeight:"91vh"}} >
        </canvas>
      );
}
export default BackGround;