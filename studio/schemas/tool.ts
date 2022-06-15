export default {
    name: "tool",
    title: "Tool",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Tool's name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true
            }
        },
        {
            name: "notes",
            title: "Notes",
            type: "text",
        }
       
    ]
}