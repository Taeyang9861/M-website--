const detailHtml = require('../../views/detail/layout-detail.art')

class Index {
    bindClick() {
        //页面切换
        location.hash = $(this).attr('data-to')
    }

    async render() {

        let html = detailHtml()

        $('#home').html(html)

        // 绑定事件
        $('.detail-tab .tab-item').on('click', this.bindClick)

        $('.header-back').on('click', () => {
            window.history.back(-1);
        })

        $('.header-index').on('click', () => {
            window.location.href = 'index.html'
        })
    }
}

export default new Index()