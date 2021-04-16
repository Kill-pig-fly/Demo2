<template>
  <div class="wrapper">
    <div>
      <ul>
      <li>头部1</li>
      <li>头部2</li>
      <li>头部3</li>
      <li>头部4</li>
      <li>头部5</li>
      <li>头部6</li>
      <li>头部7</li>
      <li>头部8</li>
      <li>头部9</li>
      <li>头部10</li>
      </ul>
      <ul>
      <li>分类数据1</li>
      <li>分类数据2</li>
      <li>分类数据3</li>
      <li>分类数据4</li>
      <li>分类数据5</li>
      <li>分类数据6</li>
      <li>分类数据7</li>
      <li>分类数据8</li>
      <li>分类数据9</li>
      <li>分类数据10</li>
      <li>分类数据11</li>
      <li>分类数据12</li>
      <li>分类数据13</li>
      <li>分类数据14</li>
      <li>分类数据15</li>
      <li>分类数据16</li>
      <li>分类数据17</li>
      <li>分类数据18</li>
      <li>分类数据19</li>
      <li>分类数据20</li>
      <li>分类数据21</li>
      <li>分类数据22</li>
      <li>分类数据23</li>
      <li>分类数据24</li>
      <li>分类数据25</li>
      <li>分类数据26</li>
      <li>分类数据27</li>
      <li>分类数据28</li>
      <li>分类数据29</li>
      <li>分类数据30</li>
      <li>分类数据31</li>
      <li>分类数据32</li>
      <li>分类数据33</li>
      <li>分类数据34</li>
      <li>分类数据35</li>
      <li>分类数据36</li>
      <li>分类数据37</li>
      <li>分类数据38</li>
      <li>分类数据39</li>
      <li>分类数据40</li>
      <li>分类数据41</li>
      <li>分类数据42</li>
      <li>分类数据43</li>
      <li>分类数据44</li>
      <li>分类数据45</li>
      <li>分类数据46</li>
      <li>分类数据47</li>
      <li>分类数据48</li>
      <li>分类数据49</li>
      <li>分类数据50</li>
      <li>分类数据51</li>
      <li>分类数据52</li>
      <li>分类数据53</li>
      <li>分类数据54</li>
      <li>分类数据55</li>
      <li>分类数据56</li>
      <li>分类数据57</li>
      <li>分类数据58</li>
      <li>分类数据59</li>
      <li>分类数据60</li>
      <li>分类数据61</li>
      <li>分类数据62</li>
      <li>分类数据63</li>
      <li>分类数据64</li>
      <li>分类数据65</li>
      <li>分类数据66</li>
      <li>分类数据67</li>
      <li>分类数据68</li>
      <li>分类数据69</li>
      <li>分类数据70</li>
      <li>分类数据71</li>
      <li>分类数据72</li>
      <li>分类数据73</li>
      <li>分类数据74</li>
      <li>分类数据75</li>
      <li>分类数据76</li>
      <li>分类数据77</li>
      <li>分类数据78</li>
      <li>分类数据79</li>
      <li>分类数据80</li>
      <li>分类数据81</li>
      <li>分类数据82</li>
      <li>分类数据83</li>
      <li>分类数据84</li>
      <li>分类数据85</li>
      <li>分类数据86</li>
      <li>分类数据87</li>
      <li>分类数据88</li>
      <li>分类数据89</li>
      <li>分类数据90</li>
      <li>分类数据91</li>
      <li>分类数据92</li>
      <li>分类数据93</li>
      <li>分类数据94</li>
      <li>分类数据95</li>
      <li>分类数据96</li>
      <li>分类数据97</li>
      <li>分类数据98</li>
      <li>分类数据99</li>
      <li>分类数据100</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'

export default {
  mounted() {
    const wrapper = document.querySelector('.wrapper')
    const bs = new BScroll(wrapper,{
      // 监听滚动 0,1不监听  2监听手指滚动,手指离开不监听  3只要滚动都监听
      probeType:3,
      // click默认是false,会默认拦截bscroll包裹组件事件
      click:true,
      pullUpLoad:true,//上拉
      pullDownRefresh:true//下拉
    })

    //获取滚动位置
    bs.on('scroll',position => {
      // console.log(position.y);
    })

    //上拉加载
    bs.on('pullingUp',() => {
      console.log('上拉加载更多');

      bs.finishPullUp()
    })
    //下拉加载
    bs.on('pullingDown',() => {
      console.log('下拉加载更新');

      bs.finishPullDown()
    })
  },
  
}
</script>

<style lang="scss" scoped>
 .wrapper {
   height: 200px;
   background-color: red;

   overflow: hidden;
 }
</style>