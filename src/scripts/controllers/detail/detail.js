const detailHtml = require('../../views/detail/layout-detail.art')
const catalogHtml = require('../../views/detail/catalog.art')

const recommendModel = require('../../models/recommend')

class Index {
    bindClick() {
        //页面切换
        location.hash = $(this).attr('data-to')
    }

    async render() {

        let bigbookid = location.search.substr(1)

        //渲染头部信息
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

        let catalog = catalogHtml()

        $('.content').html(catalog)

        $('.btn-fav').on('click', function() {
            $('.icon-love img').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAdVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyaicm3AAAAJnRSTlMA0vPBOXRvaffs6adDHBAIrp1nW1BI4t3axqt+ZBkVCsuyoJiRQkohKG0AAADMSURBVDjLhdLXboQwEEDRCxjTO2wvqfz/J8YhBHnZNXPeRroayYVJcakPfuI1fcmk7Bsv8Q/1pWChd+PsmGN8H//nnebPPRstGrQ9Z3eMyjS2tn2cswqIRkEERSpFaWEWiVre5ahmL0d7fDnySeUo5U2OPL7k6JNcjnKqQGqCCnnVgNFsNx/8unmbR7sxGWJ3Ew/MOnfUsdCuJsQSyo3rf0as9Mk6STqeKG91dsUL15PdnK68FvrLPwtxUsH8pooN5Tk2t3wu2aaC5zU/Ayhuau7Co14AAAAASUVORK5CYII=')

            let bookName = $('.info-title').html()
            let bookImg = $('.header-pic').css('background-image')

            console.log(typeof bookImg);


            let userInfoStrS = sessionStorage.getItem("userInfo")
            let userinfo = JSON.parse(userInfoStrS).email

            let userInfoStrL = localStorage.getItem("userInfo")
            let userInfo = JSON.parse(userInfoStrL)

            let result = userInfo.filter((index) => {
                return ($(this).email == userinfo )
            })

            result[0].bookName = bookName
            result[0].bookImg = bookImg

            localStorage.setItem('userInfo',JSON.stringify(result))
        })

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