import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { TimelineItem } from "./TimelineItem";
export const Timeline = ({ className = "", children, position = "left", option = { size: 20, color: "blue", spacing: 30, fill: "red", borderSize: 2, radius: 10 }, ...rest }) => {
    // type TimelineItemProps = {
    //   position: "left | right" | "center"
    // }
    // const timelineItemProps: TimelineItemProps = {
    //   position
    // };
    return (_jsx("div", { className: `${className} border-l border-solid border-red-500 `, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === TimelineItem) {
                return React.cloneElement(child, { position, option });
            }
            return null;
        }) }));
};
