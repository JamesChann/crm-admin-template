<template>
  <crm-main-panel namespace="c-user-manage">
    <crm-breadcrumb />
  </crm-main-panel>
</template>

<script>
export default {
  name: 'user-manage'
}
</script>

<style lang="scss" scoped>
  .app-container {
    .divider-icon {
      font-size: 18px;
    }

    .btn-item {
      margin: 10px 0px;
      float: right;
    }

    .table-item {
      margin-top: 16px;
    }

    .pagination-item {
      margin-top: 16px;
    }
  }

  .btn {
    // float: right;
  }
</style>
