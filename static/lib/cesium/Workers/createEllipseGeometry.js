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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./AttributeCompression-666e41a6","./GeometryPipeline-202928f7","./EncodedCartesian3-c35ef7c7","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./GeometryOffsetAttribute-c4a1a9a6","./VertexFormat-2d5d904f","./EllipseGeometryLibrary-83fad80c","./GeometryInstance-0f8cf15e","./EllipseGeometry-89e3b415"],function(r,e,t,a,n,c,i,o,s,l,d,f,m,p,y,b,u,G,C,E,A){"use strict";return function(e,t){return r.defined(t)&&(e=A.EllipseGeometry.unpack(e,t)),e._center=a.Cartesian3.clone(e._center),e._ellipsoid=a.Ellipsoid.clone(e._ellipsoid),A.EllipseGeometry.createGeometry(e)}});
