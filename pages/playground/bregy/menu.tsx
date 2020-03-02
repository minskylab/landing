import React from "react";
import Head from "next/head";
import VerticalMenu from "../../../components/atoms/VerticalMenu";
const MenuShowcase = () => {
    return (
        <div>
            <Head>
                <title> Menu Showcase | Minsky</title>
            </Head>
            <div>
                <VerticalMenu
                    items={[
                        { name: "A", key: "a" },
                        { name: "B", key: "b" },
                        { name: "C", key: "c" },
                        { name: "D", key: "d" }
                    ]}
                    onSelected={item => console.log(item)}
                ></VerticalMenu>
            </div>
        </div>
    );
};

export default MenuShowcase;
