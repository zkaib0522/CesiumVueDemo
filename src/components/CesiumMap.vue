<template>
  <div id="cesiumContainer"></div>
</template>

<script>
let viewer = null;

export default {
  name: "CesiumMap",
  data() {
    return {
      msg: "cesium demo"
    };
  },
  methods: {
    initMap() {
      var imageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=s,h&x={x}&y={y}&z={z}",
        maximumLevel: 19,
        tilingScheme: new Cesium.WebMercatorTilingScheme()
      });

      //初始化底图
      viewer = new Cesium.Viewer("cesiumContainer", {
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        fullscreenButton: false,
        vrButton: false,
        baseLayerPicker: false,
        infoBox: false,
        selectionIndicator: true,
        animation: true,
        timeline: true,
        shouldAnimate: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        showRenderLoopErrors: false,
        mapProjection: new Cesium.WebMercatorProjection(),
        terrainProvider: null,
        imageryProvider: imageryProvider
      });

      //其他设置
      viewer._cesiumWidget._creditContainer.style.display = "none";
      viewer.scene.globe.enableLighting = false; //太阳光
      viewer.scene.skyBox.show = false; //星空
      viewer.scene.globe.depthTestAgainstTerrain = true;
      viewer.scene.globe.showGroundAtmosphere = false;
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
