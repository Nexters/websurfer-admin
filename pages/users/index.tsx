import { MainLayout, ListTemplate } from "@/components/templates";

import { User } from "@/models";

export default function Users() {
  return (
    <MainLayout>
      <ListTemplate<User>
        name="user"
        fields={[
          "id",
          { label: "구글식별자", name: "googleTokenId" },
          { label: "가입일시", name: "createdAt" },
          {
            label: "hash",
            render: ({ hash }) => hash.slice(0, 35) + "...",
          },
        ]}
      />
    </MainLayout>
  );
}
