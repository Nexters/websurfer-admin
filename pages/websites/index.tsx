/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { MainLayout, ListTemplate } from "@/components/templates";

import { Website } from "@/models";

export default function WebsiteList() {
  return (
    <MainLayout>
      <ListTemplate<Website>
        name="website"
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
