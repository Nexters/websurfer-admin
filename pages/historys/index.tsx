import { MainLayout, ListTemplate } from "@/components/templates";

import { History } from "@/models";

export default function HistoryList() {
  return (
    <MainLayout>
      <ListTemplate<History>
        name="history"
        fields={[
          "id",
          {
            label: "사용자",
            name: "userId",
          },
          {
            label: "제목",
            render: ({ title }) =>
              title.slice(0, 20) + (title.length > 20 ? "..." : ""),
          },
          {
            label: "주소",
            render: ({ href }) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={href} target="_blank">
                {href.slice(0, 20) + (href.length > 20 ? "..." : "")}
              </a>
            ),
          },
          { label: "체류시간(초)", name: "duration" },
          {
            label: "웹사이트",
            render: ({ website }) =>
              website != null ? (
                <a href={`/websites/${website.id}`}>
                  ({website.id}) {website.name}
                </a>
              ) : (
                "-"
              ),
          },
          { label: "방문일시", name: "createdAt" },
        ]}
      />
    </MainLayout>
  );
}
