import { jsx as _jsx } from "react/jsx-runtime";
export const TimelineItem = ({ className = "", position, children }) => {
    console.log(position);
    return (_jsx("div", { className: `${className}`, children: children }));
};
