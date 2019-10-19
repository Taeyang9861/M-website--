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
            let userinfo = JSON.parse(userInfoStrS)[0].email

            let userInfoStrL = localStorage.getItem("userInfo")
            let userInfo = JSON.parse(userInfoStrL)

            let result = $.grep(userInfo, (item) => {
                return (item.email == userinfo)
            })

            console.log(result);


            if (result) {

                let sectionHtml = `
                <section class="favorite-content">
                    <div class="item">
                        <div class="item-pic" style="background-image: ${result[0].bookImg}"></div>
                        <p class="item-text">${result[0].bookName}</p>
                    </div>
                </section>
                `

                $('.comic-cue').css('display', 'none')
                $('#home').append(sectionHtml)
            }

        })

        $('.header-title').eq(1).on('click', function () {
            $('.header-title').eq(1).addClass('active').siblings().removeClass('active')
        })
    }
}

new Index()