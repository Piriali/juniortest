<template>
	<div>
		<div class="container">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
				<div class="menu">
					<h1 class="bold f-55">Product List</h1>
			        <div class="buttons-wrap">
			          	<el-button type="primary" @click="save('ruleForm')">Save</el-button>
				    	<el-button @click="cancel('ruleForm')">Cancel</el-button>
			        </div>
				</div>
				<div class="form">
					<el-form-item prop="sku">
					  	<label>SKU</label>
					    <el-input v-model="ruleForm.sku" id="sku"></el-input>
					</el-form-item>
					<el-form-item  prop="name">
					  	<label>Name</label>
					    <el-input v-model="ruleForm.name" id="name"></el-input>
					</el-form-item>
					<el-form-item  prop="price">
					  	<label>Price ($)</label>
					    <el-input v-model.number="ruleForm.price" id="price"></el-input>
					</el-form-item>
					<el-form-item prop="type">
					  	<label>Type Switcher</label>
					    <el-select v-model="ruleForm.type" placeholder="Choose Type"
					    	id="productType">
					      	<el-option
						      v-for="item in types"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					    </el-select>
					</el-form-item>
					<transition name="fade" mode="out-in">
						<div v-if="ruleForm.type === 'furniture'" key="dimensions" class="dimensions">
							<label>Please, provide dimensions</label>
							<el-form-item prop="height">	  	
							    <el-input v-model.number="ruleForm.height" id="height"></el-input>
							</el-form-item>
							<el-form-item prop="width">
							    <el-input v-model.number="ruleForm.width" id="width"></el-input>
							</el-form-item>
							<el-form-item prop="length">
							    <el-input v-model.number="ruleForm.length" id="length"></el-input>
							</el-form-item>
						</div>
						<el-form-item prop="size" v-if="ruleForm.type === 'dvd'" key="size">
						  	<label>Please, provide size</label>
						    <el-input v-model="ruleForm.size" id="size"></el-input>
						</el-form-item>

						<el-form-item prop="weigth" v-if="ruleForm.type === 'book'" key="weigth">
						  	<label>Please, provide weight</label>
						    <el-input v-model="ruleForm.weigth" id="weigth"></el-input>
						</el-form-item>
					</transition>
				</div>
			</el-form>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	types: [{
	        value: 'dvd',
	        label: 'DVD'
        }, {
	        value: 'book',
	        label: 'Book'
        }, {
	        value: 'furniture',
	        label: 'Furniture'
        }],
        ruleForm: {
	      	sku: '',
	      	name: '',
	      	price: '',
	      	type: '',
	      	size: '',
	      	weigth: '',
	      	height: '',
	      	width: '',
	      	length: ''
        },
        rules: {
	        sku: [
	            { required: true, message: 'Please input sku', trigger: 'blur' },
	        ],
	        name: [
	            { required: true, message: 'Please input name', trigger: 'blur' },
	        ],
	        price: [
	            { required: true, message: 'Please input price', trigger: 'blur' },
	            { type: 'number', message: 'Please, provide the data of digital type', trigger: 'blur' },
	        ],
	        type: [
	            { required: true, message: 'Please select Activity zone', trigger: 'change' }
	        ],
	        size: [
	            { required: true, message: 'Please input size', trigger: 'blur' },
	        ],
	        weigth: [
	            { required: true, message: 'Please input weigth', trigger: 'blur' },
	        ],
	        height: [
	            { required: true, message: 'Please input height', trigger: 'blur' },
	            { type: 'number', message: 'Please, provide the data of digital type', trigger: 'blur' },
	        ],
	        width: [
	            { required: true, message: 'Please input width', trigger: 'blur' },
	            { type: 'number', message: 'Please, provide the data of digital type', trigger: 'blur' },
	        ],
	        length: [
	            { required: true, message: 'Please input length', trigger: 'blur' },
	            { type: 'number', message: 'Please, provide the data of digital type', trigger: 'blur' },
	        ],
        }
      };
    },
    methods: {
      save(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.commit('addProduct', this.ruleForm);
            this.$router.push({ name: 'Home'})
          } else {
            return false;
          }
        });
      },
      cancel(formName){
        this.$refs[formName].resetFields();
        this.$router.push({ name: 'Home'})
      }
    }
  }
</script>
<style scoped>
	.menu{
	    display: flex;
	    justify-content: space-between;
	    padding: 20px 0;
	    border-bottom: 1px solid #ccc;
	}
	.form{
		margin-top: 60px;
		max-width: 600px;
	}
	>>> .el-form-item__content{
		margin-left: 0 !important;
		line-height: unset !important;
		display: flex;
	}
	>>> .el-form-item__content label{
		flex: none;
		width: 150px;
		padding-right: 20px;
	}
	.dimensions label{
		display: flex;
		margin-bottom: 20px;
	}
	>>> .el-select{
		flex: 1;
	}
	.btns{
		margin-top: 40px;
	}
	@media(max-width:  767px){
		.menu{
			flex-direction: column;
		}
		.buttons-wrap{
			margin-top: 20px
		}
		>>> .el-form-item__content{
			flex-direction: column;
		}
		>>> .el-form-item__content label{
			width: 100%;
			margin-bottom: 10px;
		}
	}
</style>