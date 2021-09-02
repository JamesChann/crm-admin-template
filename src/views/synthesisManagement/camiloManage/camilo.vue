<template>
  <crm-main-panel namespace="c-camilo">
    <crm-breadcrumb />

    <crm-operation-panel>
      <el-form ref="queryForm"
               label-width="150px"
               :inline="true"
               :model="MQuery">
        <el-form-item label="卡密状态"
                      label-width="80px"
                      prop="camilopwd">
          <crm-select :data-model.sync="MQuery.camilostatus"
                      :data="Drop.camilostatus"
                      placeholder="请选择卡密状态"
                      size="small" />
        </el-form-item>

        <el-form-item label="卡密"
                      label-width="50px"
                      prop="camilopwd">
          <crm-input :data-model.sync="MQuery.camilopwd"
                     placeholder="请输入卡密"
                     size="small" />
        </el-form-item>

        <el-form-item label="用户手机号"
                      label-width="90px"
                      prop="phone">
          <crm-input :data-model.sync="MQuery.userphone"
                     placeholder="请输入用户手机号"
                     size="small" />
        </el-form-item>

        <el-form-item label="过期时间"
                      label-width="80px"
                      prop="dateStart">
          <crm-date-picker :linkage="false"
                          date-type="date"
                          size="small"
                          :start-date.sync="MQuery.dateStart"
                          :end-date.sync="MQuery.dateEnd" />
        </el-form-item>

        <el-form-item class="search-buttons">
          <crm-button type="import"
                      icon="import"
                      @click="importUser">导入用户</crm-button>
          <crm-button type="search" icon="search">搜索</crm-button>
        </el-form-item>
        
      </el-form>
    </crm-operation-panel>

    <crm-empty-panel padding="T" height="auto">
      <crm-table :dataList="MTable.list"
                 :tableConfig.sync="MTable.config">
      </crm-table>
    </crm-empty-panel>
  </crm-main-panel>
</template>

<script src="./camilo.js" />

<style lang="scss" scoped src="./camilo.scss" />