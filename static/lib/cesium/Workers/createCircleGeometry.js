/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./AttributeCompression-666e41a6","./GeometryPipeline-202928f7","./EncodedCartesian3-c35ef7c7","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./GeometryOffsetAttribute-c4a1a9a6","./VertexFormat-2d5d904f","./EllipseGeometryLibrary-83fad80c","./GeometryInstance-0f8cf15e","./EllipseGeometry-89e3b415"],function(o,e,t,a,i,r,n,s,l,d,m,c,u,p,y,_,h,G,x,f,g){"use strict";function v(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new g.EllipseGeometry(i),this._workerName="createCircleGeometry"}v.packedLength=g.EllipseGeometry.packedLength,v.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new g.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new a.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return v.unpack=function(e,t,i){var r=g.EllipseGeometry.unpack(e,t,E);return w.center=a.Cartesian3.clone(r._center,w.center),w.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,w.ellipsoid),w.height=r._height,w.extrudedHeight=r._extrudedHeight,w.granularity=r._granularity,w.vertexFormat=G.VertexFormat.clone(r._vertexFormat,w.vertexFormat),w.stRotation=r._stRotation,w.shadowVolume=r._shadowVolume,o.defined(i)?(w.semiMajorAxis=r._semiMajorAxis,w.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new g.EllipseGeometry(w),i):(w.radius=r._semiMajorAxis,new v(w))},v.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},v.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,a=t(r,o),n=i(r,o);return new v({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:a,height:n,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(v.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=v.unpack(e,t)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),v.createGeometry(e)}});
