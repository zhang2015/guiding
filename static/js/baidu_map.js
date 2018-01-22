//根据 id=allmap 创建对象
//	116.404, 39.915
function show_baidu_map(longitude,latitude){

	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(longitude, latitude), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

	// 创建点
	var marker = new BMap.Marker(new BMap.Point(longitude,latitude)); 
	//增加点
	map.addOverlay(marker); 

}