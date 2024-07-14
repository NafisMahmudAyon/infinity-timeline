import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { TimelineItem } from "./TimelineItem";
export const Timeline = ({ className = "", children, position = "left", ...rest }) => {
    // type TimelineItemProps = {
    //   position: "left | right" | "center"
    // }
    // const timelineItemProps: TimelineItemProps = {
    //   position
    // };
    return (_jsx("div", { className: `${className}`, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === TimelineItem) {
                return React.cloneElement(child, { position });
            }
            return null;
        }) }));
};
