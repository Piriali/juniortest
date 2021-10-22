<template>
  <div class="home">
    <div class="container">
      <div class="menu">
        <h1 class="bold f-55">Product List</h1>
        <div class="buttons-wrap">
          <router-link :to="{ name: 'AddProduct'}">
            <el-button>ADD</el-button>
          </router-link>
          <el-button 
            @click.prevent="deleteProducts" 
            id="delete-product-btn">
              MASS DELETE
          </el-button>
        </div>
      </div>

      <div class="list" v-if="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <el-checkbox 
            v-model="checkbox[index]" :true-label="product.sku" 
            class="delete-checkbox"></el-checkbox>
          <div class="id">{{product.sku}}</div>
          <h2 class="name">{{product.name}}</h2>
          <span class="price">{{product.price}} $</span>
          <div class="attributes">
            <span v-if="product.weigth">Weight: {{product.weigth}}</span>
            <span v-if="product.size">Size: {{product.size}}</span>
            <span v-if="product.type === 'furniture'">
              Dimension: {{product.height}}x{{product.width}}x{{product.length}}
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return{
      checkbox: [],
    }
  },
  computed:{
    products(){
      return this.$store.state.products;
    }
  },
  methods:{
    deleteProducts(){
      this.$store.commit('deleteProduct', this.checkbox);
    }
  }
}
</script>
<style  scoped>
  .menu{
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }
  .buttons-wrap a{
    margin-right: 10px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  }
  .product{
    position: relative;
    text-align: center;
    width: calc(25% - 15px);
    margin: 0 20px 20px 0;
    border:  1px solid #ccc;
    border-radius: 4px;
    padding: 25px;
  }
  .product:nth-child(4n){
    margin-right: 0;
  }
  .product .el-checkbox{
    position: absolute;
    top: 8px;
    left: 8px;
  }
  .product .name{
    margin: 5px 0;
    font-family: "Helvetica-Bold";
  }
  .product .attributes{
    margin-top: 10px;
  }
  .product .attributes span{
    margin-bottom: 0;
    font-size: 13px;
  }
  .product .attributes span:last-child{
    margin-bottom: 0;
  }
  @media(max-width: 1023px){
    .product{
      width: calc(33.33% - 20px);
      margin: 0 30px 30px 0;
    }
    .product:nth-child(4n){
      margin-right: 30px;
    }
    .product:nth-child(3n){
      margin-right: 0px;
    }
  }

  @media(max-width: 767px){
    .menu{
      flex-direction: column;
    }
    .buttons-wrap{
      margin-top: 20px
    }
    .product{
      width: 100%;
      margin: 0 0 30px 0;
    }
    .product:nth-child(4n){
      margin-right: 0px;
    }
  }
</style>

