import * as Matter from "matter-js";
import { useEffect, useRef } from "react";

// TODO (bregydoc) make a automatic resize performing a good algorithm

function setPathData(pathData) {
    let parts = pathData && pathData.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
        coords;
    let array = [];

    for (let i = 0, l = parts && parts.length; i < l; i++) {
        coords = parts[i].match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);

        for (let j = 0; j < coords.length; j += 2) {
            array.push({
                x: +coords[j],
                y: +coords[j + 1]
            });
        }
    }

    return array;
}

const BulbLights = () => {
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
                height: h,
                wireframes: false,
                background: "white"
            }
        });

        World.add(engine.world, [
            Bodies.rectangle(w / 2, h - 20, w * 0.98, 20, { isStatic: true, render: { fillStyle: "white" } })
        ]);

        [
            [(w * 2) / 12, -400],
            [(w * 3) / 12, -200],
            [(w * 9) / 12, -100]
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
                    density: 0.0008,
                    angle: -89.48,
                    render: {
                        // fillStyle: "#ffdf53",
                        // strokeStyle: "black",
                        // lineWidth: 2
                        sprite: {
                            yOffset: -0.2,
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

        Render.run(render);
    }, []);

    return <div ref={ref} />;
};

export { BulbLights };
