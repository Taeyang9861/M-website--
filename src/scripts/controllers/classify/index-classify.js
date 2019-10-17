const layoutView = require('../../views/classify/layout-classify.art')
const classifylist = require('../../views/classify/classify-list.art')
const classifyModel = require('../../models/classifyList')

class Index {
    constructor() {
        this.render()
    }

    renderer(list) {
        let listHtml = classifylist({
            list
        })

        $('section').html(listHtml)
    }

    async render() {
        let that = this

        const html = layoutView()

        $('#home').html(html)

        let classify = await classifyModel.get({})

        let list = JSON.parse(classify).datas.items

        this.renderer(list)

        //点击切换
        for (var i = 0; i < $('.item').length; i++) {
            $('.item').eq(i).on('click', async function () {

                $(this).addClass('active').siblings().removeClass('active')

                let param = $(this).attr('data-to')

                let gname = $(this).html

                let classifyPage = await classifyModel.get({
                    param: param,
                    gname: gname
                })

                let list = JSON.parse(classifyPage).datas.items

                that.renderer(list)
            })
        }

        //点击返回
        $('.head-back').on('click', () => {
            window.history.back(-1);
        })

    }
}

new Index()