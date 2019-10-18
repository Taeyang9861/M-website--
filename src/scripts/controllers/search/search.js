const searchHtml = require('../../views/search/search.art')

const searchModule = require('../../models/search')

const recommendHtml = require('../../views/search/recommend.art')

const freshHtml = require('../../views/search/recommend-hot.art')

const hotsearchModule = require('../../models/search-hot')

const contentHtml = require('../../views/search/content.art')

class Search {
    constructor() {
        this.render()
        this.list = []
        this.hotword = []
    }

    contentRender(list) {
        let html = contentHtml({
            list
        })

        $('.search-recommend').html(html)
    }

    hotWordsRender(hotword) {
        let html = freshHtml({
            hotword
        })

        $('.recommend-content').html(html)
    }

    /* preventShake(fun, delay) {
        var timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fun();
            }, delay);
        }
    } */

    async render() {
        let that = this

        let html = searchHtml()
        $('#home').html(html)

        let fresh = recommendHtml()
        $('.search-recommend').html(fresh)

        let hot = await hotsearchModule.get()

        let hotWord = hot.info.hotWordsList

        this.hotWordsRender(hotWord)

        //刷新
        $('.title-btn').on('click', async function () {

            let hot = await hotsearchModule.get()

            let hotWord = hot.info.hotWordsList

            that.hotWordsRender(hotWord)
        })

        //输入提示
        $('.search-input').on('input', async function () {

            var name = $('.search-input').val()

            if (name) {

                let search = await searchModule.get({
                    name: name
                })

                let list = search.info

                that.contentRender(list)

                $('.header-btn').on('click', function () {
                    window.location.href = `searchContent.html#${name}`
                })
            } else {
                $('.search-recommend').html(recommend)
            }

        })

        $('.header-back').on('click', () => {
            window.history.back(-1);
        })

    }
}

new Search()