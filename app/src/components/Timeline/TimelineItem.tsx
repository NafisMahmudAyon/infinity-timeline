interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string;
  children?: React.ReactElement;
  position?: "left" | "right" | "center";
}

export const TimelineItem: React.FC<TimelineItemProps> = ({className="", position, children}) => {
  console.log(position)
  return (
    <div className={`${className}`}>{children}</div>
  )
}

