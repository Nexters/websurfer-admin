/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { Badge } from "@/components/atoms";
import { DetailTemplate, MainLayout } from "@/components/templates";

import { Achievement } from "@/models";
import { api } from "@/services";

import { isValidHttpUrl } from "../websites";

export default function AchievementDetail() {
  const router = useRouter();

  const addWebsite = async (id: number) => {
    const url = prompt("추가할 웹사이트 URL를 입력하세요");
    if (!url || !isValidHttpUrl(url)) {
      alert("유효하지 않은 URL입니다.");
      return;
    }

    try {
      await api.post(`/achievements/${id}/websites`, { url });
      alert("추가되었습니다.");
      router.reload();
    } catch {
      alert(
        "실패했습니다.\n입력된 URL의 웹사이트가 생성되어있는지 확인해보세요"
      );
    }
  };
  const deleteWebsite = async (id: number) => {
    const websiteId = Number(prompt("해제할 웹사이트 ID를 입력하세요"));
    if (!websiteId || Number.isNaN(websiteId)) {
      alert("유효하지 않은 입력입니다.");
      return;
    }

    try {
      await api.delete(`/achievements/${id}/websites/${websiteId}`);
      alert("해제되었습니다.");
      router.reload();
    } catch {}
  };

  return (
    <MainLayout>
      <DetailTemplate<Achievement>
        name="achievement"
        title={(v) => v.name}
        pk={Number(router.query.id)}
        buttons={(v) => [
          {
            label: "웹사이트 등록",
            type: "secondary",
            onClick: () => addWebsite(v.id),
          },
          {
            label: "웹사이트 등록해제",
            type: "secondary",
            onClick: () => deleteWebsite(v.id),
          },
        ]}
        fields={[
          { label: "ID", name: "id", editable: false },
          { label: "이름", name: "name" },
          { label: "카테고리(쉼표로 구분)", name: "category" },
          { label: "색상(카드에서 사용됨)", name: "color" },
          {
            label: "이미지 미리보기",
            name: "image-preview",
            render: (v) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                <img src={v.imageUrl} style={{ border: "1px solid blue" }} />
                <img
                  src={v.cardImageUrl}
                  style={{ border: "1px solid blue" }}
                />
              </div>
            ),
          },
          { label: "이미지 URL", name: "imageUrl" },
          { label: "카드 이미지 URL", name: "cardImageUrl" },
          {
            label: "등록된 웹사이트",
            name: "websites",
            render: (v) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 20,
                }}
              >
                {v.websites.length === 0 && <>없음</>}
                {v.websites.map((website) => (
                  <Badge type="code" key={website.id}>
                    {website.name} / {website.hostname} (id:{website.id})
                  </Badge>
                ))}
              </div>
            ),
          },
        ]}
      />
    </MainLayout>
  );
}
