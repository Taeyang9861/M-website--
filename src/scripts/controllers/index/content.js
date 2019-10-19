const contentView = require('../../views/index/content.art')
const contentRecommend = require('../../views/index/recommend.art')
const recommendModel = require('../../models/recommend')

const BScroll = require('better-scroll')

class Content {
    constructor() {
        this.render()
        this.list = []
    }

    renderRecommend(list) {
        let recommendHtml = contentRecommend({
            list
        })

        $('.index-recommend').html(recommendHtml)
    }

    async render() {
        let positionHtml = contentView({})
        let $main = $('main')
        $main.html(positionHtml)

        $('.head-login').on('click', function () {
            window.location.href = 'login.html'
        })

        $('.head-search').on('click', function () {
            window.location.href = 'search.html'
        })

        $('.index-nav .classify').on('click', function () {
            window.location.href = 'classify.html'
        })

        $('.index-nav .history').on('click', function () {
            window.location.href = 'history.html'
        })

        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                disableOnInteraction: false
            },
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
            }
        })

        let recommend = await recommendModel.get()

        let list = recommend.info

        this.renderRecommend(list)

        $('.item').on('click', function () {

            let bigbookid = this.getAttribute('bookid')

            window.location.href = `detail.html?${bigbookid}`
        })

        new BScroll.default($('main ').get(0), {
            probeType: 2,
            click: true
        })

    }
}

new Content()