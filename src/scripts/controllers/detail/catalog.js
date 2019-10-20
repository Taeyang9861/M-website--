import catalogHtml from '../../views/detail/catalog.art'

class Catalog {
    render() {
        let html = catalogHtml()

        $('.content').html(html)

        $('.btn-fav').on('click', function() {
            $('.icon-love img').attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAdVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyaicm3AAAAJnRSTlMA0vPBOXRvaffs6adDHBAIrp1nW1BI4t3axqt+ZBkVCsuyoJiRQkohKG0AAADMSURBVDjLhdLXboQwEEDRCxjTO2wvqfz/J8YhBHnZNXPeRroayYVJcakPfuI1fcmk7Bsv8Q/1pWChd+PsmGN8H//nnebPPRstGrQ9Z3eMyjS2tn2cswqIRkEERSpFaWEWiVre5ahmL0d7fDnySeUo5U2OPL7k6JNcjnKqQGqCCnnVgNFsNx/8unmbR7sxGWJ3Ew/MOnfUsdCuJsQSyo3rf0as9Mk6STqeKG91dsUL15PdnK68FvrLPwtxUsH8pooN5Tk2t3wu2aaC5zU/Ayhuau7Co14AAAAASUVORK5CYII=')

            let bookName = $('.info-title').html()
            let bookImg = $('.header-pic').css('background-image')



            let userInfoStrS = sessionStorage.getItem("userInfo")
            var userinfo = JSON.parse(userInfoStrS).email


            let userInfoStrL = localStorage.getItem("userInfo")
            let userInfo = JSON.parse(userInfoStrL)

            let result = userInfo.filter((index) => {
                return ($(this).email == userinfo )
            })

            result[0].bookName = bookName
            result[0].bookImg = bookImg

            localStorage.setItem('userInfo',JSON.stringify(result))
        })
    }
}

export default new Catalog()