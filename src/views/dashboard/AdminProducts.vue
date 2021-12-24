<template>
  <h2 class="text-center fw-bold">產品</h2>
  <button
    type="button"
    class="btn btn-primary d-block ms-auto mb-3"
    @click.prevent="openModal(true, this.product)"
  >
    建立新的產品
  </button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">分類</th>
        <th scope="col">產品名稱</th>
        <th scope="col">原價</th>
        <th scope="col">售價</th>
        <th scope="col">是否啟用</th>
        <th scope="col">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item">
        <th>{{ item.category }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.origin_price }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click.prevent="openModal(false, item)"
            >
              編輯
            </button>
            <button type="button" class="btn btn-outline-danger" @click.prevent="delProduct(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @update-page="getProducts"></Pagination>
  <ProductModal
    ref="ProductModal"
    :isNew="isNew"
    :productProps="product"
    @update-product="updateProduct"
  ></ProductModal>
</template>
<script>
import ProductModal from '@/components/dashboard/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      isNew: false, // 判斷新增或編輯
    };
  },
  components: {
    ProductModal,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (isNew) {
        this.product = {};
      } else {
        // 使用深層拷貝，不管下面有幾層都會以獨立的方式存在
        // 如果新增多張圖片 product內就會有第二層 → imagesUrl
        this.product = JSON.parse(JSON.stringify(item));
      }
      this.$refs.ProductModal.showModal();
    },
    updateProduct(item) {
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        method = 'put';
      }
      this.$http[method](api, { data: this.product }).then((res) => {
        if (res.data.success) {
          this.$refs.ProductModal.hideModal();
          this.getProducts();
        }
      });
    },
    delProduct(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http.delete(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.$refs.ProductModal.hideModal();
          this.getProducts();
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
