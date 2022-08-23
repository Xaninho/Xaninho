export default {
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Article's Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "developer",
            type: "reference",
            title: "Developer",
            to: [{ type: "developer" }]
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published At"
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent"
        }

    ],
}