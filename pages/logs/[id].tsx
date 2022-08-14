/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { DetailTemplate, MainLayout } from "@/components/templates";

import { Log } from "@/models";

export default function LogDetail() {
  const router = useRouter();

  return (
    <MainLayout>
      <DetailTemplate<Log>
        name="log"
        title={(v) => `(${v.id})${v.category}`}
        pk={Number(router.query.id)}
        fields={[
          { label: "ID", name: "id", editable: false },
          {
            label: "구분",
            name: "category",
            editable: false,
          },
          {
            label: "본문",
            name: "text",
            editable: false,
          },
          { label: "생성일시", name: "createdAt" },
        ]}
      />
    </MainLayout>
  );
}
