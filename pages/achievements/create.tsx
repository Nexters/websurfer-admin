import { MainLayout, CreateTemplate } from "@/components/templates";

export default function AchievementCreate() {
  return (
    <MainLayout>
      <CreateTemplate
        name="achievement"
        fields={[
          { label: "이름", name: "name", type: "string" },
          {
            label: "카테고리(쉼표로 구분, optional)",
            name: "category",
            type: "string",
          },
          { label: "색상", name: "color", type: "string" },
          { label: "이미지 URL", name: "imageUrl", type: "string" },
          { label: "카드 이미지 URL", name: "cardImageurl", type: "string" },
        ]}
      />
    </MainLayout>
  );
}
