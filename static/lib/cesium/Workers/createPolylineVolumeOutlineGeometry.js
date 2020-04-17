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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./arrayRemoveDuplicates-77a66bd5","./BoundingRectangle-bb8f4b91","./EllipsoidTangentPlane-b95a773e","./EllipsoidRhumbLine-4ca13d6b","./PolygonPipeline-dded5b81","./PolylineVolumeGeometryLibrary-10a2326e","./EllipsoidGeodesic-f441d806","./PolylinePipeline-2138f536"],function(d,e,t,c,y,i,n,h,g,f,m,a,r,o,l,s,p,u,v,E,P){"use strict";function _(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=i,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,v.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var a=1+i.length*c.Cartesian3.packedLength;a+=1+n.length*c.Cartesian2.packedLength,this.packedLength=a+c.Ellipsoid.packedLength+2}_.pack=function(e,i,n){var a;n=d.defaultValue(n,0);var t=e._positions,r=t.length;for(i[n++]=r,a=0;a<r;++a,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(t[a],i,n);var o=e._shape;for(r=o.length,i[n++]=r,a=0;a<r;++a,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[a],i,n);return c.Ellipsoid.pack(e._ellipsoid,i,n),n+=c.Ellipsoid.packedLength,i[n++]=e._cornerType,i[n]=e._granularity,i};var b=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),k={polylinePositions:void 0,shapePositions:void 0,ellipsoid:b,height:void 0,cornerType:void 0,granularity:void 0};_.unpack=function(e,i,n){var a;i=d.defaultValue(i,0);var t=e[i++],r=new Array(t);for(a=0;a<t;++a,i+=c.Cartesian3.packedLength)r[a]=c.Cartesian3.unpack(e,i);t=e[i++];var o=new Array(t);for(a=0;a<t;++a,i+=c.Cartesian2.packedLength)o[a]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,b);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(n)?(n._positions=r,n._shape=o,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._cornerType=s,n._granularity=p,n):(k.polylinePositions=r,k.shapePositions=o,k.cornerType=s,k.granularity=p,new _(k))};var C=new l.BoundingRectangle;return _.createGeometry=function(e){var i=e._positions,n=o.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),a=e._shape;if(a=v.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(a),!(n.length<2||a.length<3)){u.PolygonPipeline.computeWindingOrder2D(a)===u.WindingOrder.CLOCKWISE&&a.reverse();var t=l.BoundingRectangle.fromPoints(a,C);return function(e,i){var n=new f.GeometryAttributes;n.position=new g.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var a,t,r=i.length,o=n.position.values.length/3,l=e.length/3/r,s=m.IndexDatatype.createTypedArray(o,2*r*(1+l)),p=0,d=(a=0)*r;for(t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,d=(a=l-1)*r,t=0;t<r-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=r-1+d,s[p++]=d,a=0;a<l-1;a++){var c=r*a,u=c+r;for(t=0;t<r;t++)s[p++]=t+c,s[p++]=t+u}return new g.Geometry({attributes:n,indices:m.IndexDatatype.createTypedArray(o,s),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:g.PrimitiveType.LINES})}(v.PolylineVolumeGeometryLibrary.computePositions(n,a,t,e,!1),a)}},function(e,i){return d.defined(i)&&(e=_.unpack(e,i)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),_.createGeometry(e)}});
