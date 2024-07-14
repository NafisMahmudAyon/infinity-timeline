import React from "react";
import {TimelineItem} from "./TimelineItem";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
  position?: "left | right" | "center";
}

export const Timeline: React.FC<TimelineProps> = ({className="",children, position="left", ...rest}) => {
  // type TimelineItemProps = {
  //   position: "left | right" | "center"
  // }

  // const timelineItemProps: TimelineItemProps = {
  //   position
  // };
  return (
    <div className={`${className}`} {...rest}>
      {React.Children.map(children, (child: React.ReactElement) => {
        if (React.isValidElement(child) && child.type === TimelineItem) {
          return React.cloneElement(child as React.ReactElement<any>, {position});
        }
        return null;
      })}
    </div>
  )
}