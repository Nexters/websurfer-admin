/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { DetailTemplate, MainLayout } from "@/components/templates";

import { History } from "@/models";

export default function HistoryDetail() {
  const router = useRouter();

  return (
    <MainLayout>
      <DetailTemplate<History>
        name="history"
        title={(v) => v.title}
        pk={Number(router.query.id)}
        fields={[
          { label: "ID", name: "id", editable: false },
          {
            label: "사용자 ID",
            name: "user",
            render: ({ userId }) => (userId != null ? userId : "-"),
          },
          {
            label: "제목",
            name: "title",
            editable: false,
          },
          {
            label: "주소",
            name: "href",
            editable: false,
          },
          { label: "체류시간(초)", name: "duration", editable: false },
          { label: "방문일시", name: "createdAt" },
          {
            label: "웹사이트",
            name: "website",
            render: ({ websiteId }) =>
              websiteId != null ? (
                <a href={`/websites/${websiteId}`}>{websiteId}</a>
              ) : (
                "-"
              ),
          },
        ]}
      />
    </MainLayout>
  );
}
