const detailHtml = require('../../views/detail/layout-detail.art')

const recommendModel = require('../../models/recommend')

class Index {
    bindClick() {
        //页面切换
        location.hash = $(this).attr('data-to')
    }

    async render() {

        let bigbookid = location.search.substr(1)

        let recommend = await recommendModel.get()
        let data = recommend.info
        let result
        for(var i=0;i<data.length;i++){
            let list = data[i].comicslist

            result = $.grep(list, (item) => {
                return (item.bigbook_id == bigbookid)
            })
            if(result)
                break
        }

        let html = detailHtml({
            list: result
        })

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