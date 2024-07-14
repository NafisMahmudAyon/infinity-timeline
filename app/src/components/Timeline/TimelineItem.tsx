"use client"

import styled from 'styled-components';
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
  children?: React.ReactNode; // Allow ReactNode to cover more cases
  position?: "left" | "right" | "center";
  option?: Option;
  dotStyle?: string;
}

interface DotProps {
  option: Option;
}

const Item = styled.div<TimelineItemProps>`
  position: relative;
  margin-left: ${(props) => props.option?.spacing ? props.option.spacing : 0}px;
`;

const Dot = styled.div<DotProps>`
  display: inline-block;
  position: absolute;
  background-color: ${(props) => props.option?.fill || "#dddddd"};
  border-radius: ${(props) => props.option?.radius ? (props.option.radius === "full" ? "100%" : `${props.option.radius}px`) : '0'};
  width: ${(props) => props.option?.size || 20}px;
  height: ${(props) => props.option?.size || 20}px;
  top: 20%;
  left: ${(props) => props.option?.spacing ? `-${props.option.spacing + (props.option.size ? props.option.size / 2 : 0)}px` : '0'};
  border: ${(props) => props.option?.borderSize || 2}px solid;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    background-color: ${(props) => props.option?.color || "#dddddd"};
    width: ${(props) => props.option?.spacing ? `${props.option.spacing - (props.option.size ? props.option.size / 2 : 0)}px` : '0'};
    height: 2px;
    top: 50%;
    left: ${(props) => props.option?.spacing ? `${props.option.spacing - (props.option.size ? props.option.size / 2 : 0) - (props.option.borderSize || 0)}px` : '0'};
    transform: translateY(-50%);
  }
`;

export const TimelineItem: React.FC<TimelineItemProps> = ({
  className = "",
  position = "left",
  children,
  option = { size: 20, color: "blue", spacing: 30, fill: "red", borderSize: 2, radius: "full" },
  dotStyle = ""
}) => {

  console.log(position);
  console.log(JSON.stringify(option));

  return (
    <Item className={className} option={option}>
      {children}
      <Dot option={option} className={dotStyle}></Dot>
    </Item>
  );
};
