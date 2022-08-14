import { MainLayout, ListTemplate } from "@/components/templates";

import { Log } from "@/models";

export default function LogList() {
  return (
    <MainLayout>
      <ListTemplate<Log>
        name="log"
        fields={[
          "id",
          {
            label: "구분",
            name: "category",
          },
          {
            label: "본문",
            render: ({ text }) =>
              text.slice(0, 50) + (text.length > 50 ? "..." : ""),
          },
          { label: "생성일시", name: "createdAt" },
        ]}
      />
    </MainLayout>
  );
}
