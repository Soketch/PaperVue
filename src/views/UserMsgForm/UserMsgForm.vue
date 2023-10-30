<template>
    <div class="container">
        <div class="Card">
            <div class="UserCover">
                <div>
                    <img src="../../assets/img/User/UserCover-img.png" alt="用户封面背景">
                </div>
            </div>
            <div class="UserWrapper">
                <div class="wrapMain">
                    <div class="picEdit">
                        <div class="UserAvatar">
                            <img class="Avatar" src="../../assets/img/User/User-pic.jpg" alt="头像">
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="BackUser">
                    <button><router-link to="/User" tag="button">&lt; 返回个人主页</router-link></button>
                </div>
                <!-- 使用el-form组件创建表单 -->
                <el-form :model="userForm" :rules="userFormRules" ref="userFormRef" label-width="100px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="userForm.username"></el-input>
                    </el-form-item>
                    <!-- 邮箱表单项，使用el-input组件作为输入框，绑定userForm.email的值 -->
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userForm.email"></el-input>
                    </el-form-item>
                    <!-- 手机表单项，使用el-input组件作为输入框，绑定userForm.mobile的值 -->
                    <el-form-item label="手机" prop="mobile">
                        <el-input v-model="userForm.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="userForm.sex">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="行业/领域" prop="domain">
                        <el-select v-model="userForm.domain">
                            <el-option label="教育" value="教育"></el-option>
                            <el-option label="医疗" value="医疗"></el-option>
                            <el-option label="金融" value="金融"></el-option>
                            <el-option label="生物" value="生物"></el-option>
                            <el-option label="科技" value="科技"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="简介" prop="brief">
                        <el-input type="textarea" maxlength="15" v-model="userForm.brief" show-word-limit></el-input>
                    </el-form-item>

                    <!-- 提交按钮，使用el-button组件作为按钮，添加点击事件处理函数submitForm -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue"
import { ElRadioGroup, ElRadio, ElOption, ElSelect, ElForm, ElFormItem, ElInput, ElButton } from "element-plus";

// 注册组件
export default defineComponent({
    components: {
        ElForm,
        ElFormItem,
        ElInput,
        ElButton,
        ElRadioGroup,
        ElRadio,
        ElSelect,
        ElOption
    },
    setup() {
        // 定义用户信息修改表单的数据对象
        const userForm = ref({
            username: "", // 用户名
            email: "", // 邮箱
            mobile: "", // 手机
            sex: "",//性别
            brief: "", //简介
            domain: "", //行业/领域
        });

        // 定义用户信息修改表单的校验规则对象
        const userFormRules = ref({
            username: [
                // 用户名校验规则
                { required: true, message: "请输入用户名", trigger: "blur" }, // 必填项，失去焦点时触发
                { min: 3, max: 10, message: "用户名长度在3~10个字符", trigger: "blur" }, // 长度限制，失去焦点时触发
            ],
            email: [
                // 邮箱校验规则
                { required: true, message: "请输入邮箱", trigger: "blur" }, // 必填项，失去焦点时触发
                { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }, // 邮箱格式，失去焦点时触发
            ],
            mobile: [
                // 手机校验规则
                { required: true, message: "请输入手机号", trigger: "blur" }, // 必填项，失去焦点时触发
                { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号码", trigger: "blur" }, // 手机号码格式，失去焦点时触发
            ],
        });

        // 获取表单组件的实例
        const userFormRef = ref();

        // 定义提交表单的函数
        const submitForm = () => {
            // 调用表单组件的validate方法进行校验
            userFormRef.value.validate((valid) => {
                // valid为校验结果，为true表示通过，为false表示不通过
                if (valid) {
                    // 校验通过，发送请求更新用户信息
                    console.log("更新用户信息成功");
                } else {
                    // 校验不通过，提示用户
                    console.log("请检查表单输入");
                    return false; // 阻止提交
                }
            });
        };

        // 返回数据和函数
        return {
            userForm,
            userFormRules,
            userFormRef,
            submitForm,
        };
    },
});



</script>
<style lang="scss" scoped>
.container {
    margin: 10px auto;
    padding: 0 16px;
    position: relative;
    width: 1000px;
    height: 90vh;
    // background-color: red;
}

.Card {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px hsla(0, 0%, 7%, .1);
    box-sizing: border-box;
    margin-bottom: 10px;
}

.UserCover {
    background: #f5f5f5;
    height: 240px;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    transition: height .3s;
}

.UserCover-image img {
    height: 100%;
    object-fit: cover;
    width: 100%;
}

.UserWrapper {
    background: #fff;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}

.wrapMain {
    margin: 0 20px 24px;
    position: relative;
    // background-color: purple;
}

.picEdit {
    position: absolute;
    left: 0;
    top: -25px;
    cursor: pointer;
    z-index: 1;
}

.UserAvatar {
    // display: none;
    border-radius: 8px;
    border: 4px solid #fff;
}

.Avatar {
    background: #fff;
    border-radius: 2px;
    vertical-align: top;
    border-radius: 4px;
    width: 160px;
    aspect-ratio: auto 160 / 160;
    height: 160px;
}

.content {
    border-left: 164px solid transparent;
    padding-left: 32px;
    padding-top: 16px;
}

.BackUser {
    position: relative;
    width: 100%;
    height: 30px;
}

.BackUser button {
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    background-color: #fff;
    border: 0;
    font-size: 16px;
    font-weight: 500;
    color: #8e8e8e;
    margin-bottom: 10px;
}

.BackUser button:hover {
    color: rgba(0, 0, 0, 0.6);
}
</style>
