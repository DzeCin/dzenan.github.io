class PostClass {


    constructor(id, header, title, author, content, tags, dateCreated, dateUpdated) {
        this.header = header;
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.tags = tags;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
    }
}

export { PostClass };
