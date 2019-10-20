const historyHtml = require('../../views/history/history.art')

class Index {
    constructor() {
        this.render()
    }

    render() {
        let html = historyHtml()

        $('#home').html(html)

        $('.header-back').on('click', function () {
            window.history.back(-1)
        })

        $('.header-title').eq(0).on('click', function () {
            $('.header-title').eq(0).addClass('active').siblings().removeClass('active')

            let userInfoStrS = sessionStorage.getItem("userInfo")
            let userinfo = JSON.parse(userInfoStrS).email

            let userInfoStrL = localStorage.getItem("userInfo")
            let userInfo = JSON.parse(userInfoStrL)

            let result = userInfo.filter((index) => {
                return ($(this).email == userinfo )
            })

            let src = result[0].bookImg

            if (result) {

                let sectionHtml = `
                <section class="favorite-content">
                    <div class="item">
                        <div class="item-pic"></div>
                        <p class="item-text">${result[0].bookName}</p>
                    </div>
                </section>
                `

                $('.comic-cue').css('display', 'none')
                $('#home').append(sectionHtml)

                $('.item-pic').css('background-image', src)
            }

        })

        $('.header-title').eq(1).on('click', function () {
            $('.header-title').eq(1).addClass('active').siblings().removeClass('active')
        })
    }
}

new Index()