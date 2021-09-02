<template>
  <div class="c-login">
    <el-form ref="loginForm"
             :model="loginForm"
             :rules="loginRules"
             class="c-login__form"
             auto-complete="on"
             label-position="left">

      <div class="c-login__title">
        <h3 class="c-login__title-txt">CRM后台管理系统</h3>
      </div>

      <!-- login form username -->
      <el-form-item prop="username">
        <span class="c-login__svg">
          <svg-icon icon-class="user" />
        </span>

        <el-input ref="username"
                  v-model="loginForm.username"
                  placeholder="Username"
                  name="username"
                  type="text"
                  tabindex="1"
                  auto-complete="on" />
      </el-form-item>

      <!-- login form password -->
      <el-form-item prop="password">
        <span class="c-login__svg">
          <svg-icon icon-class="password" />
        </span>

        <el-input :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="Password"
                  name="password"
                  tabindex="2"
                  auto-complete="on"
                  @keyup.enter.native="handleLogin" />
        <span class="c-login__pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading"
                 type="primary"
                 style="width:100%;margin-bottom:30px;"
                 @click.native.prevent="handleLogin">
        登录
      </el-button>

      <div class="c-login__tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
</template>

<script src="./login.js" />

<style lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .c-login .el-input input {
      color: $cursor;
    }
  }

  /* reset element-ui css */
  .c-login {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped src="./login.scss"/>