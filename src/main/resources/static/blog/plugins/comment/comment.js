$('#commentSubmit').click(function () {
    var blogId = $('#blogId').val();
    var verifyCode = $('#verifyCode').val();
    var commentator = $('#commentator').val();
    var email = $('#email').val();
    var commentBody = $('#commentBody').val();
    if (isNull(blogId)) {
        swal("参数异常", {
            icon: "warning",
        });
        return;
    }
    if (isNull(commentator)) {
        swal("how can 俺 call u ?", {
            icon: "warning",
        });
        return;
    }
    if (isNull(commentBody)) {
        swal("评论内容不能为空", {
            icon: "warning",
        });
        return;
    }
    if (isNull(verifyCode)) {
        swal("请输入验证码", {
            icon: "warning",
        });
        return;
    }
    if (!validCN_ENString2_100(commentator)) {
        swal("请输入符合规范的名称(俺不认识特殊字符)", {
            icon: "warning",
        });
        return;
    }
    if (!validCN_ENString2_100(commentBody)) {
        swal("请输入符合规范的评论内容(俺不认识特殊字符)", {
            icon: "warning",
        });
        return;
    }
    if (!validLength(commentBody, 200)) {
        swal("评论内容过长(请控制在200字以内)", {
            icon: "warning",
        });
        return;
    }
    var data = {
        "blogId": blogId, "verifyCode": verifyCode, "commentator": commentator,
        "email": email, "commentBody": commentBody
    };
    console.log(data);
    $.ajax({
        type: 'POST',//方法类型
        url: '/blog/comment',
        data: data,
        success: function (result) {
            if (result.resultCode == 200) {
                swal("评论成功", {
                    icon: "success",
                });
                $('#commentBody').val('');
                $('#verifyCode').val('');
                location.reload();
                document.getElementById("comments").scrollIntoView();
            }
            else {
                swal(result.message, {
                    icon: "error",
                });
            };
        },
        error: function () {
            swal("操作失败", {
                icon: "error",
            });
        }
    });
});