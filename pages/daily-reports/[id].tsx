/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { DetailTemplate, MainLayout } from "@/components/templates";

import { DailyReport } from "@/models";

export default function DailyReportDetail() {
  const router = useRouter();

  return (
    <MainLayout>
      <DetailTemplate<DailyReport>
        name="daily-report"
        title={(v) => `${v.date} 보고서 - ${v.user.email}`}
        pk={Number(router.query.id)}
        fields={[
          { label: "ID", name: "id", editable: false },
          {
            label: "사용자",
            name: "user",
            render: ({ user }) => `(${user.id}) ${user.email}`,
          },
          {
            label: "날짜",
            name: "date",
            editable: false,
          },
          {
            label: "총 사용시간",
            name: "totalDuration",
            editable: false,
          },
          {
            label: "0~2 사용시간",
            name: "duration0",
            editable: false,
          },
          {
            label: "2~4 사용시간",
            name: "duration1",
            editable: false,
          },
          {
            label: "4~6 사용시간",
            name: "duration2",
            editable: false,
          },
          {
            label: "6~8 사용시간",
            name: "duration3",
            editable: false,
          },
          {
            label: "8~10 사용시간",
            name: "duration4",
            editable: false,
          },
          {
            label: "10~12 사용시간",
            name: "duration5",
            editable: false,
          },
          {
            label: "12~14 사용시간",
            name: "duration6",
            editable: false,
          },
          {
            label: "14~16 사용시간",
            name: "duration7",
            editable: false,
          },
          {
            label: "16~18 사용시간",
            name: "duration8",
            editable: false,
          },
          {
            label: "18~20 사용시간",
            name: "duration9",
            editable: false,
          },
          {
            label: "20~22 사용시간",
            name: "duration10",
            editable: false,
          },
          {
            label: "22~24 사용시간",
            name: "duration11",
            editable: false,
          },
        ]}
      />
    </MainLayout>
  );
}
