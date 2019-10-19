const proHtml = require('../../views/login/profile.art')

const loginHtml = require('../../views/login/login.art')

const registerHtml = require('../../views/login/register.art')

class Index {
    constructor() {
        this.render()
    }

    profile() {
        let html = proHtml()

        $('#home').html(html)

        let userInfoStr = sessionStorage.getItem("userInfo")

        let userInfo = JSON.parse(userInfoStr)

        if(userInfo){
            $('.login-btn').html(`id:${userInfo.email}`)

            var footer = `
            <footer class="mine-logout">退出登录</footer>
            `

            $('#home').append(footer)
        }

        $('.header-back').on('click', function(){
            window.location.href = 'index.html'
        })
    }

    login() {
        let login = loginHtml()

        $('#home').html(login)
    }

    render() {
        this.profile()

        let that = this

        $('.mine-login').on('click', function(){

            let This = that

            This.login()

            $('.login-btn').on('click', function(){
                let Thisis = This

                let email = $('input').eq(0).val()
                let pwd = $('input').eq(1).val()

                let userinfo = {
                    email: email,
                    password: pwd
                }

                let userInfoStr = localStorage.getItem("userInfo")

                let userInfo = JSON.parse(userInfoStr)

                let result = $.grep(userInfo, (item) => {
                    return (item == userinfo)
                })

                if(result){
                    sessionStorage.setItem('userInfo',JSON.stringify(userinfo))

                    Thisis.profile()

                    $('.login-btn').html(`id:${email}`)
                }
            })

            $('.icon-reg').on('click', function(){

                let thisis = This

                let register = registerHtml()
                $('.content').html(register)

                $('.register-btn').on('click', function(){
                    let thatis = thisis

                    let email = $('input').eq(0).val()
                    let pwd = $('input').eq(2).val()

                    let userInfoStr = localStorage.getItem("userInfo")

                    let userInfo = JSON.parse(userInfoStr)

                    if(!userInfo){

                        let arr = []

                        let userinfo = {
                            email: email,
                            password: pwd
                        }

                        arr.push(userinfo)

                        localStorage.setItem('userInfo', JSON.stringify(arr))

                        sessionStorage.setItem('userInfo',JSON.stringify(arr))

                        thatis.profile()

                        $('.login-btn').html(`id:${email}`)
                    }
                    else{
                        let userinfo = {
                            email: email,
                            password: pwd
                        }

                        userInfo.push(userinfo)

                        localStorage.setItem('userInfo', JSON.stringify(userInfo))

                        sessionStorage.setItem('userInfo',JSON.stringify(userinfo))

                        thatis.profile()

                        $('.login-btn').html(`id:${email}`)
                    }

                })
            })
        })
    }
}

new Index()