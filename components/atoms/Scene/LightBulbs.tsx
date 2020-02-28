import * as Matter from "matter-js";
import { useEffect, useRef } from "react";

// TODO (bregydoc) make a automatic resize performing a good algorithm

const LightBulbs = () => {
    const ref = useRef();
    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Composites = Matter.Composites,
            // Mouse = Matter.Mouse,
            Constraint = Matter.Constraint;
        // MouseConstraint = Matter.MouseConstraint,
        // Svg = Matter.Svg;

        var engine = Engine.create({
            positionIterations: 20
        });

        var render = Render.create({
            element: ref.current,
            engine: engine,
            options: {
                width: w,
                height: h * 1.2,
                wireframes: false,
                background: "white"
            }
        });

        World.add(engine.world, [
            Bodies.rectangle(w / 2, h - 20, w * 0.98, 20, { isStatic: true, render: { fillStyle: "white" } })
        ]);

        [
            [(w * 2) / 12, -480],
            [(w * 3) / 12, -280],
            [(w * 9) / 12, -180]
        ].map(([posX, posY], i) => {
            var rope = Composites.stack(posX, posY, 1, 32, 1, 1, function(x, y) {
                return Bodies.rectangle(x, y, 20, 1, {
                    render: {
                        fillStyle: "#1a1d25"
                    }
                });
            });
            Composite.add(
                rope,
                Bodies.circle(posX, posY * 1.8, 15, {
                    restitution: 0.8,
                    density: 0.0006,
                    angle: -89.48,
                    render: {
                        // fillStyle: "#ffdf53",
                        // strokeStyle: "black",
                        // lineWidth: 2
                        sprite: {
                            yOffset: -0.16,
                            xScale: 0.33,
                            yScale: 0.33,
                            texture: `/images/bulb${i + 2}.png`
                        }
                    }
                })
            );

            Composites.chain(rope, 0.5, 0, -0.5, 0, {
                stiffness: 0.9,
                length: 0,
                render: {
                    fillStyle: "#1a1d25",
                    strokeStyle: "white",
                    lineWidth: 1
                }
            }); //  render: { type: "line" }
            Composite.add(
                rope,
                Constraint.create({
                    bodyB: rope.bodies[0],
                    // pointB: { x: 25, y: 0 },
                    pointA: { x: rope.bodies[0].position.x, y: rope.bodies[0].position.y },
                    stiffness: 1
                })
            );

            World.add(engine.world, [rope]);
        });

        Engine.run(engine);

        setTimeout(() => {
            Render.stop(render);
        }, 18000);
        Render.run(render);
    }, []);

    return <div ref={ref} />;
};

export { LightBulbs };
