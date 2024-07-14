
import React from "react";
import {TimelineItem} from "./TimelineItem";

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

export const Timeline: React.FC<TimelineProps> = ({className="",children, position="left", option={size:20,color: "blue", spacing: 30, fill: "red", borderSize: 2, radius: 10 }, ...rest}) => {
  // type TimelineItemProps = {
  //   position: "left | right" | "center"
  // }

  // const timelineItemProps: TimelineItemProps = {
  //   position
  // };
  return (
    <div className={`${className} border-l border-solid border-red-500 `} {...rest}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (React.isValidElement(child) && child.type === TimelineItem) {
          return React.cloneElement(child as React.ReactElement<any>, {position, option});
        }
        return null;
      })}
    </div>
  )
}