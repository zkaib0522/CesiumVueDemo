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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./IndexDatatype-3ec27f23","./GeometryOffsetAttribute-c4a1a9a6","./CylinderGeometryLibrary-64d088a0"],function(h,t,e,v,A,i,a,R,G,O,V,C,L){"use strict";var g=new v.Cartesian2;function f(t){var e=(t=h.defaultValue(t,h.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,a=t.bottomRadius,r=h.defaultValue(t.slices,128),n=Math.max(h.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=a,this._slices=r,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(t,e,i){return i=h.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=h.defaultValue(t._offsetAttribute,-1),e};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(t,e,i){e=h.defaultValue(e,0);var a=t[e++],r=t[e++],n=t[e++],o=t[e++],u=t[e++],s=t[e];return h.defined(i)?(i._length=a,i._topRadius=r,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=a,d.topRadius=r,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(t){var e=t._length,i=t._topRadius,a=t._bottomRadius,r=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||a<0||0===i&&0===a)){var o,u=2*r,s=L.CylinderGeometryLibrary.computePositions(e,i,a,r,!1),f=2*r;if(0<n){var d=Math.min(n,r);o=Math.round(r/d),f+=d}var c,l=V.IndexDatatype.createTypedArray(u,2*f),m=0;for(c=0;c<r-1;c++)l[m++]=c,l[m++]=c+1,l[m++]=c+r,l[m++]=c+1+r;if(l[m++]=r-1,l[m++]=0,l[m++]=r+r-1,l[m++]=r,0<n)for(c=0;c<r;c+=o)l[m++]=c,l[m++]=c+r;var b=new O.GeometryAttributes;b.position=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}),g.x=.5*e,g.y=Math.max(a,i);var p=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));if(h.defined(t._offsetAttribute)){e=s.length;var y=new Uint8Array(e/3),_=t._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1;C.arrayFill(y,_),b.applyOffset=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new G.Geometry({attributes:b,indices:l,primitiveType:G.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:t._offsetAttribute})}},function(t,e){return h.defined(e)&&(t=f.unpack(t,e)),f.createGeometry(t)}});
