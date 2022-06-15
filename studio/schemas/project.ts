export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Project's Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        },
        {
            name: "developer",
            title: "Developer",
            type: "reference",
            to: { type: "developer" }
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
            name: "tool",
            title: "Tool",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "tool",
                            title: "Tool",
                            type: "reference",
                            to: [{type: "tool"}]
                        }                        
                    ],
                    preview: {
                        select: {
                            title: "tool.name",
                            name: "tool.name",
                            media: "tool.image"
                        }
                    },
                    prepare({
                        title,
                        subtitle,
                        media
                    }) {
                        return {
                            title,
                            subtitle,
                            media
                        }
                    }
                }
            ]
        },
        {
            name: "details",
            title: "Details",
            type: "array",
            of: [{type: "block"}]
        }
    ]
}