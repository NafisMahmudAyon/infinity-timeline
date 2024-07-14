// import Image from "next/image";
// "use client"

import { Timeline as Time, TimelineItem } from "@/lib/cjs";
// import { Timeline as Time, TimelineItem } from "./src";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Time position="right" className="border-l border-solid ">
        <TimelineItem
        dotStyle="mb-4"
          // title="First Event"
          // date="2022-01-01"
          // description="This is the first event in the timeline"
        >
          <div className="p-4 bg-gray-200 rounded-lg">
            <p>This is the content of the first event.</p>
          </div>
        </TimelineItem>
        <TimelineItem
          // title="Second Event"
          // date="2022-02-01"
          // description="This is the second event in the timeline"
        >
          <div className="">
            <p>This is the content of the second event.</p>
          </div>
          <div className="">
            <p>This is the content of the second event.</p>
          </div>
        </TimelineItem>
      </Time>
    </main>
  );
}
