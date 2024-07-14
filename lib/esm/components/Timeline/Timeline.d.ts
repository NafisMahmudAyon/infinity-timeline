import React from "react";
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
    position?: "left | right" | "center";
}
export declare const Timeline: React.FC<TimelineProps>;
export {};
