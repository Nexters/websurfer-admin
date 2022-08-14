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
            render: ({ user }) =>
              `(${user.id}) 
                ${
                  user.email.slice(0, 10) +
                  (user.email.length > 10 ? "..." : "")
                }`,
          },
          {
            label: "제목",
            render: ({ title }) =>
              title.slice(0, 20) + (title.length > 20 ? "..." : ""),
          },
          {
            label: "주소",
            render: ({ href }) =>
              href.slice(0, 20) + (href.length > 20 ? "..." : ""),
          },
          { label: "체류시간(초)", name: "duration" },
          { label: "방문일시", name: "createdAt" },
        ]}
      />
    </MainLayout>
  );
}
