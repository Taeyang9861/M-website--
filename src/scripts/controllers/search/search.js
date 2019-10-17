const searchHtml = require('../../views/search/search.art')

const searchModule = require('../../models/search')

const recommendHtml = require('../../views/search/recommend.art')

const contentHtml = require('../../views/search/content.art')

class Search {
    constructor() {
        this.render()
        this.list = []
    }

    contentRender(list) {
        let html = contentHtml({
            list
        })

        $('.search-recommend').html(html)
    }

    preventShake(fun, delay) {
        var timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fun();
            }, delay);
        }
    }

    render() {
        let that = this

        let html = searchHtml()

        $('#home').html(html)

        let recommend = recommendHtml()

        $('.search-recommend').html(recommend)

        $('.search-input').on('input', async function () {

            var name = $('.search-input').val()

            if (name) {

                let search = await searchModule.get({
                    name: name
                })

                let list = search.info

                that.contentRender(list)
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