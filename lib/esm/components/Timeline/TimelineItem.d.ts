interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactElement;
    position?: "left" | "right" | "center";
}
export declare const TimelineItem: React.FC<TimelineItemProps>;
export {};
