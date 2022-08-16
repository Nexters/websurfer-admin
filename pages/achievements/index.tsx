/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { MainLayout, ListTemplate } from "@/components/templates";

import { Achievement } from "@/models";

export default function AchievementList() {
  return (
    <MainLayout>
      <ListTemplate<Achievement>
        name="achievement"
        fields={[
          "id",
          { label: "이름", name: "name" },
          { label: "구분", name: "category" },
          {
            label: "색상",
            render: ({ color }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{ width: 24, height: 24, backgroundColor: color }}
                />
                <p>{color}</p>
              </div>
            ),
          },
          {
            label: "이미지 URL",
            render: ({ imageUrl }) => (
              <img
                src={imageUrl}
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            ),
          },
          {
            label: "카드 이미지 URL",
            render: ({ cardImageUrl }) => (
              <img
                src={cardImageUrl}
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            ),
          },
        ]}
      />
    </MainLayout>
  );
}
