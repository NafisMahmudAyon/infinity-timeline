// import Image from "next/image";

import { Timeline, TimelineItem } from "@/lib/cjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Timeline position="right">
        <TimelineItem
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
          <div className="p-4 bg-gray-200 rounded-lg">
            <p>This is the content of the second event.</p>
          </div>
        </TimelineItem>
      </Timeline>
    </main>
  );
}
