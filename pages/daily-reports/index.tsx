import { MainLayout, ListTemplate } from "@/components/templates";

import { DailyReport } from "@/models";

export default function DailyReportList() {
  return (
    <MainLayout>
      <ListTemplate<DailyReport>
        name="daily-report"
        fields={[
          "id",
          {
            label: "사용자",
            name: "userId",
          },
          {
            label: "날짜",
            name: "date",
          },
          {
            label: "총 체류시간(초)",
            render: ({ totalDuration }) => `${totalDuration}초`,
          },
          {
            label: "총 체류시간(분)",
            render: ({ totalDuration }) => `${Math.ceil(totalDuration / 60)}분`,
          },
        ]}
      />
    </MainLayout>
  );
}
