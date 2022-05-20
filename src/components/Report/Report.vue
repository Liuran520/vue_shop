<template>
    <div>
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据统计</el-breadcrumb-item>
        <el-breadcrumb-item>数据报表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图区域 -->
        <el-card>
            <!-- 2. 为ECharts准备一个具备大小（宽高）的Dom -->
            <div id="main" style="width: 750px;height:400px;"></div>
        </el-card>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
    data(){
        return {
            // chart: null
             // 需要合并的数据
            options: {
                title: {
                text: '用户来源'
                },
                tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                    backgroundColor: '#E9EEF3'
                    }
                }
                },
                grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
                },
                xAxis: [
                {
                    boundaryGap: false
                }
                ],
                yAxis: [
                {
                    type: 'value'
                }
                ]
            }
        }
    },
    created(){},
    mounted(){ this.init()},
    methods: {
        async init () {
            let myChart = this.$echarts.init(document.getElementById('main'));
            const { data: res } = await this.$http.get('reports/type/1')
            if (res.meta.status !== 200) {
                return this.$message.error('获取折线图数据失败！')
            }
            // const option = {
            //     xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            //     yAxis: { type: 'value' },
            //     series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
            // }
            // 4. 准备数据和配置项
            const result = _.merge(res.data, this.options)
            myChart.setOption(result)
        }
    }
}
</script>
<style lang="less" scoped>

</style>
