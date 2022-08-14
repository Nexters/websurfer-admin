/** @type {import('./type').AdminConfig} */
const config = {
  name: "Websurfer",
  apiUrl: "https://api.websurfer.ga/admin",
  sections: [
    {
      name: "회원 관리",
      models: [
        {
          label: "유저(사용자)",
          name: "user",
          searchFieldName: "email",
          searchFieldLabel: "이메일",
        },
      ],
    },
    {
      name: "웹사이트 관리",
      models: [
        {
          label: "방문기록",
          name: "history",
          searchFieldName: "href",
          searchFieldLabel: "주소",
        },
        {
          label: "웹사이트",
          name: "website",
          description: "서브도메인의 'www.'는 자동으로 제거됩니다.",
          searchFieldName: "hostname",
          searchFieldLabel: "서브도메인",
          detail: true,
          edit: true,
        },
      ],
    },
    {
      name: "시스템 관리",
      models: [
        {
          label: "서핑 태그",
          name: "achievement",
          description:
            "id 1은 항상 기본값(바닷속 진주)이도록 유지해주세용\n그리고 기본값 태그에는 웹사이트를 등록하지 말아주세요!",
          searchFieldName: "name",
          searchFieldLabel: "이름",
          create: true,
          delete: true,
          detail: true,
          edit: true,
        },
      ],
    },
  ],
};

export default config;
