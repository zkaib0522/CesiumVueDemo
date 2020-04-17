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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./AttributeCompression-666e41a6","./GeometryPipeline-202928f7","./EncodedCartesian3-c35ef7c7","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./PrimitivePipeline-2723091e","./WebMercatorProjection-cdd3e436","./createTaskProcessorWorker"],function(u,e,r,t,n,a,i,o,c,s,f,d,m,b,l,p,y,P,k){"use strict";var v={};function C(e){var r=v[e];return u.defined(r)||("object"==typeof exports?v[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){v[r=e]=e})),r}return k(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),i=0;i<n;i++){var o=t[i],c=o.geometry,s=o.moduleName;if(u.defined(s)){var f=C(s);a[i]=f(c,o.offset)}else a[i]=c}return u.when.all(a,function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
