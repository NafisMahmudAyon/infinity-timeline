import React from 'react';
interface Option {
    size?: number;
    color?: string;
    spacing?: number;
    fill?: string;
    borderSize?: number;
    radius?: number | "full";
}
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    position?: "left" | "right" | "center";
    option?: Option;
    dotStyle?: string;
}
export declare const TimelineItem: React.FC<TimelineItemProps>;
export {};
