export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "projectLogo",
      title: "Project Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "overview",
      type: "string",
    },
    {
      name: "favorite",
      type: "boolean",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "academic", title: "Academic" },
          { value: "client", title: "Client" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
