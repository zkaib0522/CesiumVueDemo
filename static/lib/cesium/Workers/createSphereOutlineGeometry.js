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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./IndexDatatype-3ec27f23","./GeometryOffsetAttribute-c4a1a9a6","./EllipsoidOutlineGeometry-6d6f1b29"],function(n,e,i,a,t,r,s,o,c,d,l,u,m){"use strict";function p(e){var i=n.defaultValue(e.radius,1),t={radii:new a.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}p.packedLength=m.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return m.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var y=new m.EllipsoidOutlineGeometry,G={radius:void 0,radii:new a.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(e,i,t){var r=m.EllipsoidOutlineGeometry.unpack(e,i,y);return G.stackPartitions=r._stackPartitions,G.slicePartitions=r._slicePartitions,G.subdivisions=r._subdivisions,n.defined(t)?(a.Cartesian3.clone(r._radii,G.radii),t._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(G),t):(G.radius=r._radii.x,new p(G))},p.createGeometry=function(e){return m.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=p.unpack(e,i)),p.createGeometry(e)}});
