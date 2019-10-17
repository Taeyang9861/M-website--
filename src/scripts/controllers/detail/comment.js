import commentcontentHtml from '../../views/detail/comment-content.art'

import commentHtml from '../../views/detail/comment.art'

import commentModel from '../../models/comment'

class Comment {
    constructor() {
        this.list = []
        this.render()
        this.pageno = 1
    }

    renderComment(list) {
        let html = commentcontentHtml({
            list: list
        })

        $('.detail-comment').html(html)
    }

    async render() {
        let html = commentHtml()

        $('.content').html(html)

        let that = this

        let commentData = await commentModel.get({})

        let list = commentData.info.list

        this.renderComment(list)

        $('.list-more').on('click', async function () {
            that.pageno++

            let result = await commentModel.get({
                pageno: that.pageno
            })

            let newList = result.info.list

            let Lists = [...list, ...newList]

            that.renderComment(Lists)

        })
    }
}

export default new Comment()