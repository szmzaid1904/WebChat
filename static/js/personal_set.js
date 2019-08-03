$(function () {
    $("#phone_num").blur(function () {
        var phone_num = $(this).val();
        console.log(phone_num)
        var span = $("<span>手机号码不符合要求</span>");
        if ($(this).next() == span) {
            $(span).remove()
        };

        if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone_num))) {

            $(this).after(span);

        };
    });
    // 修改个人信息
    $("#per_btn").click(function () {
        // 1. 创建异步对象xhr
        var xhr = createXhr();
        // 2. 创建请求
        var username = $("#username").val();
        var nickname = $("#nickname").val();
        var age = $("#age").val();
        var gender = $('input:radio[name="gender"]:checked').val()
        var birthday = $("#birthday").val();
        var address = $("#address").val();
        var mail = $("#mail").val();
        var phone_num = $("#phone_num").val();
        var per_sign = $("#per_sign").val();

        console.log(nickname);
        console.log(username)
        console.log(age);
        console.log(gender);
        console.log(birthday);
        console.log(address);
        console.log(mail);
        console.log(phone_num);
        console.log(per_sign);
        xhr.open("post", "/chat/personal_set", true);
        // 3. 设置回调函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == '1') {
                    alert("修改成功");
                    window.location.reload()
                } else {
                    alert("修改失败");
                }
            }
        }
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        var csrf = $("[name='csrfmiddlewaretoken']").val();
        var params = "username+" + username + "&nickname=" + nickname + "&age=" + age + "&gender=" + gender + "&birthday=" + birthday + "&address=" + address + "&mail=" + mail + "&phone_num=" + phone_num + "&per_sign=" + per_sign;
        console.log(params)
        // 4. 发送请求
        xhr.send(params);
    });
    // 上传图片
    $("#avatar_btn").click(function () {
        // 1. 创建异步对象xhr
        var xhr = createXhr();
        // 2. 创建请求
        var avatar = $("#icon").val();
        console.log(avatar)
        xhr.open("post", "/chat/personal_set", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == '1') {
                    alert("上传成功");
                    window.location.reload()
                } else {
                    alert("上传失败");
                }
            }
        }
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        var csrf = $("[name='csrfmiddlewaretoken']").val();
        var params = 'avatar=' + avatar
        console.log(params)
        // 4. 发送请求
        xhr.send(params);

    });
    // 修改密码
    $("#pwd_btn").click(function () {
        // 1. 创建异步对象xhr
        var xhr = createXhr();
        // 2. 创建请求
        var username = $("#username").val();
        var old_password = $("#old_password").val();
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        if (password1 != password2) {
            alert('Two different passwords！！')

        } else if (password1 == old_password) {
            alert('Do not same with old password')
        } else {
            var jsonobj = {
                username: username,
                old_password: old_password,
                password1: password1,
                password2: password2
            };
            jsonstr = JSON.stringify(jsonobj);
            console.log(jsonstr);
            xhr.open("post", "/chat/personal_set", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.responseText == '1') {
                        alert("修改成功");
                        window.location.reload()
                    } else {
                        alert("修改失败");
                    }
                }
            }
            xhr.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            var csrf = $("[name='csrfmiddlewaretoken']").val();
            var params = "jsonstr=" + jsonstr + "&csrfmiddlewaretoken=" + csrf;
            console.log(params)
            // 4. 发送请求
            xhr.send(params);

        }

    })


})