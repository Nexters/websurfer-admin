/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";

import { MainLayout, ListTemplate } from "@/components/templates";

import { Website } from "@/models";

import { api } from "@/services";

export default function WebsiteList() {
  const router = useRouter();

  const createByUrl = async () => {
    const url = prompt("URL을 입력하세요 (루트 경로가 아니어도 괜찮습니다.)");
    if (!url || !isValidHttpUrl(url)) {
      alert("유효하지 않은 URL입니다.");
      return;
    }

    try {
      await api.post(`/websites`, { href: url });
      alert(
        "생성이 요청되었습니다. 몇초만 기다려주세요. (확인을 누르면 새로고침됩니다.)"
      );
      router.reload();
    } catch {
      alert("이미 추가된 웹사이트입니다.");
    }
  };

  return (
    <MainLayout>
      <ListTemplate<Website>
        name="website"
        buttons={[{ label: "웹사이트 생성 요청", onClick: createByUrl }]}
        fields={[
          "id",
          {
            label: "favicon",
            render: ({ faviconUrl }) => (
              <img
                src={faviconUrl}
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            ),
          },
          { label: "이름", name: "name" },
          { label: "서브도메인", name: "hostname" },
        ]}
      />
    </MainLayout>
  );
}

function isValidHttpUrl(input: string): boolean {
  let url;

  try {
    url = new URL(input);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
