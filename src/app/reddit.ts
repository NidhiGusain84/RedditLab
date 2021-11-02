export interface OneRedditItem {

    data:{
        title: string,
        thumbnail: string,
        permalink: string
    }
}

export interface Reddit{
    data: {
        children: OneRedditItem[]
    }
}
