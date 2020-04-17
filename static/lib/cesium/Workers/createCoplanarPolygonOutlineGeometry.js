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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./AttributeCompression-666e41a6","./GeometryPipeline-202928f7","./EncodedCartesian3-c35ef7c7","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./GeometryInstance-0f8cf15e","./arrayRemoveDuplicates-77a66bd5","./EllipsoidTangentPlane-b95a773e","./OrientedBoundingBox-ffb6d96d","./CoplanarPolygonGeometryLibrary-4d6ff422","./ArcType-66bc286a","./EllipsoidRhumbLine-4ca13d6b","./PolygonPipeline-dded5b81","./PolygonGeometryLibrary-8695919e"],function(a,e,t,l,p,r,n,s,u,d,o,m,i,f,y,c,g,b,h,P,G,v,L,C,T){"use strict";function E(e){for(var t=e.length,r=new Float64Array(3*t),n=f.IndexDatatype.createTypedArray(t,2*t),o=0,a=0,i=0;i<t;i++){var y=e[i];r[o++]=y.x,r[o++]=y.y,r[o++]=y.z,n[a++]=i,n[a++]=(i+1)%t}var c=new d.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new u.Geometry({attributes:c,indices:n,primitiveType:u.PrimitiveType.LINES})}function k(e){var t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=T.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=T.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var H={polygonHierarchy:{}};return k.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=T.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var o=e[t];return a.defined(r)||(r=new k(H)),r._polygonHierarchy=n,r.packedLength=o,r},k.createGeometry=function(e){var t=e._polygonHierarchy,r=t.positions;if(!((r=b.arrayRemoveDuplicates(r,l.Cartesian3.equalsEpsilon,!0)).length<3)&&G.CoplanarPolygonGeometryLibrary.validOutline(r)){var n=T.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var o=[],a=0;a<n.length;a++){var i=new g.GeometryInstance({geometry:E(n[a])});o.push(i)}var y=m.GeometryPipeline.combineInstances(o)[0],c=p.BoundingSphere.fromPoints(t.positions);return new u.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:c})}}},function(e,t){return a.defined(t)&&(e=k.unpack(e,t)),e._ellipsoid=l.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}});
