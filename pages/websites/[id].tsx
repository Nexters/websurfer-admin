/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { DetailTemplate, MainLayout } from "@/components/templates";

import { Website } from "@/models";

export default function WebsiteDetail() {
  const router = useRouter();

  return (
    <MainLayout>
      <DetailTemplate<Website>
        name="website"
        title={(v) => v.name}
        pk={Number(router.query.id)}
        fields={[
          { label: "ID", name: "id", editable: false },
          { label: "이름", name: "name" },
          { label: "서브도메인", name: "hostname" },
          {
            label: "favicon 미리보기",
            name: "favicon-preview",
            render: (v) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <img src={v.faviconUrl} style={{ border: "1px solid blue" }} />
              </div>
            ),
          },
          { label: "favicon URL", name: "faviconUrl" },
          {
            label: "canonical 사이트",
            name: "canonical",
            render: ({ canonical }) =>
              canonical != null ? (
                <a href={`/websites/${canonical.id}`}>
                  ({canonical.id}) {canonical.name}({canonical.hostname})
                </a>
              ) : (
                "-"
              ),
          },
          { label: "canonical 사이트 ID", name: "canonicalId" },
          {
            label: "서핑태그",
            name: "achievement",
            render: ({ achievement }) =>
              achievement != null ? (
                <a href={`/achievements/${achievement.id}`}>
                  ({achievement.id}) {achievement.name}({achievement.category})
                </a>
              ) : (
                "-"
              ),
          },
          { label: "서핑태그 ID", name: "achievementId" },
        ]}
      />
    </MainLayout>
  );
}
