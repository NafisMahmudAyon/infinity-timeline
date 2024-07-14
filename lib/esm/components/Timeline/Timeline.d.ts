import React from "react";
interface Option {
    size?: number;
    color?: string;
    spacing?: number;
    fill?: string;
    borderSize?: number;
    radius?: number | "full";
}
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
    position?: "left" | "right" | "center";
    option?: Option;
}
export declare const Timeline: React.FC<TimelineProps>;
export {};
