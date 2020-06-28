<template>
  <div>
    <HeaderTop :title='address.name'>
   	<router-link slot="left" to="/search" class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
      	<router-link slot="right"    :to="userInfo._id? '/userinfo':'/login'" class="header_login">
       	<span class="header_login_text"   v-if='userInfo._id'>
           	<i class="iconfont icon-person"></i>
         </span>
				<span class="header_login_text" v-else>登录|注册</span>
			</router-link>
    </HeaderTop>
  </div>
</template>

<script>
import {mapState} from "vuex";
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["address", "userInfo"])
  },
  created() {
     
  },
  mounted() {
    this.$store.dispatch("getAddress");
     
  },
  watch: {},
  methods: {
     
  },
  components: {
    HeaderTop
  }
};

</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixins.styl'
  	.msite  //首页
          width 100%
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>
