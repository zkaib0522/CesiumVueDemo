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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./GeometryAttribute-c51a6913","./GeometryAttributes-1c7ce91d","./AttributeCompression-666e41a6","./GeometryPipeline-202928f7","./EncodedCartesian3-c35ef7c7","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./GeometryOffsetAttribute-c4a1a9a6","./GeometryInstance-0f8cf15e","./arrayRemoveDuplicates-77a66bd5","./EllipsoidTangentPlane-b95a773e","./ArcType-66bc286a","./EllipsoidRhumbLine-4ca13d6b","./PolygonPipeline-dded5b81","./PolygonGeometryLibrary-8695919e"],function(v,e,E,c,A,t,i,_,G,L,r,T,o,H,n,a,C,O,l,D,x,s,I,w){"use strict";var S=[],k=[];function R(e,t,i,r,o){var n,a,l=D.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,S);I.PolygonPipeline.computeWindingOrder2D(l)===I.WindingOrder.CLOCKWISE&&(l.reverse(),t=t.slice().reverse());var s=t.length,y=0;if(r)for(n=new Float64Array(2*s*3),a=0;a<s;a++){var u=t[a],p=t[(a+1)%s];n[y++]=u.x,n[y++]=u.y,n[y++]=u.z,n[y++]=p.x,n[y++]=p.y,n[y++]=p.z}else{var d=0;if(o===x.ArcType.GEODESIC)for(a=0;a<s;a++)d+=w.PolygonGeometryLibrary.subdivideLineCount(t[a],t[(a+1)%s],i);else if(o===x.ArcType.RHUMB)for(a=0;a<s;a++)d+=w.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[a],t[(a+1)%s],i);for(n=new Float64Array(3*d),a=0;a<s;a++){var c;o===x.ArcType.GEODESIC?c=w.PolygonGeometryLibrary.subdivideLine(t[a],t[(a+1)%s],i,k):o===x.ArcType.RHUMB&&(c=w.PolygonGeometryLibrary.subdivideRhumbLine(e,t[a],t[(a+1)%s],i,k));for(var g=c.length,f=0;f<g;++f)n[y++]=c[f]}}var h=2*(s=n.length/3),m=H.IndexDatatype.createTypedArray(s,h);for(a=y=0;a<s-1;a++)m[y++]=a,m[y++]=a+1;return m[y++]=s-1,m[y++]=0,new O.GeometryInstance({geometry:new G.Geometry({attributes:new L.GeometryAttributes({position:new G.GeometryAttribute({componentDatatype:_.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:m,primitiveType:G.PrimitiveType.LINES})})}function N(e,t,i,r,o){var n,a,l=D.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,S);I.PolygonPipeline.computeWindingOrder2D(l)===I.WindingOrder.CLOCKWISE&&(l.reverse(),t=t.slice().reverse());var s=t.length,y=new Array(s),u=0;if(r)for(n=new Float64Array(2*s*3*2),a=0;a<s;++a){y[a]=u/3;var p=t[a],d=t[(a+1)%s];n[u++]=p.x,n[u++]=p.y,n[u++]=p.z,n[u++]=d.x,n[u++]=d.y,n[u++]=d.z}else{var c=0;if(o===x.ArcType.GEODESIC)for(a=0;a<s;a++)c+=w.PolygonGeometryLibrary.subdivideLineCount(t[a],t[(a+1)%s],i);else if(o===x.ArcType.RHUMB)for(a=0;a<s;a++)c+=w.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[a],t[(a+1)%s],i);for(n=new Float64Array(3*c*2),a=0;a<s;++a){var g;y[a]=u/3,o===x.ArcType.GEODESIC?g=w.PolygonGeometryLibrary.subdivideLine(t[a],t[(a+1)%s],i,k):o===x.ArcType.RHUMB&&(g=w.PolygonGeometryLibrary.subdivideRhumbLine(e,t[a],t[(a+1)%s],i,k));for(var f=g.length,h=0;h<f;++h)n[u++]=g[h]}}s=n.length/6;var m=y.length,b=2*(2*s+m),P=H.IndexDatatype.createTypedArray(s+m,b);for(a=u=0;a<s;++a)P[u++]=a,P[u++]=(a+1)%s,P[u++]=a+s,P[u++]=(a+1)%s+s;for(a=0;a<m;a++){var v=y[a];P[u++]=v,P[u++]=v+s}return new O.GeometryInstance({geometry:new G.Geometry({attributes:new L.GeometryAttributes({position:new G.GeometryAttribute({componentDatatype:_.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:P,primitiveType:G.PrimitiveType.LINES})})}function g(e){var t=e.polygonHierarchy,i=v.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84),r=v.defaultValue(e.granularity,E.CesiumMath.RADIANS_PER_DEGREE),o=v.defaultValue(e.perPositionHeight,!1),n=o&&v.defined(e.extrudedHeight),a=v.defaultValue(e.arcType,x.ArcType.GEODESIC),l=v.defaultValue(e.height,0),s=v.defaultValue(e.extrudedHeight,l);if(!n){var y=Math.max(l,s);s=Math.min(l,s),l=y}this._ellipsoid=c.Ellipsoid.clone(i),this._granularity=r,this._height=l,this._extrudedHeight=s,this._arcType=a,this._polygonHierarchy=t,this._perPositionHeight=o,this._perPositionHeightExtrude=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=w.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+c.Ellipsoid.packedLength+8}g.pack=function(e,t,i){return i=v.defaultValue(i,0),i=w.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,i),c.Ellipsoid.pack(e._ellipsoid,t,i),i+=c.Ellipsoid.packedLength,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._granularity,t[i++]=e._perPositionHeightExtrude?1:0,t[i++]=e._perPositionHeight?1:0,t[i++]=e._arcType,t[i++]=v.defaultValue(e._offsetAttribute,-1),t[i]=e.packedLength,t};var f=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),h={polygonHierarchy:{}};return g.unpack=function(e,t,i){t=v.defaultValue(t,0);var r=w.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=c.Ellipsoid.unpack(e,t,f);t+=c.Ellipsoid.packedLength;var n=e[t++],a=e[t++],l=e[t++],s=1===e[t++],y=1===e[t++],u=e[t++],p=e[t++],d=e[t];return v.defined(i)||(i=new g(h)),i._polygonHierarchy=r,i._ellipsoid=c.Ellipsoid.clone(o,i._ellipsoid),i._height=n,i._extrudedHeight=a,i._granularity=l,i._perPositionHeight=y,i._perPositionHeightExtrude=s,i._arcType=u,i._offsetAttribute=-1===p?void 0:p,i.packedLength=d,i},g.fromPositions=function(e){return new g({polygonHierarchy:{positions:(e=v.defaultValue(e,v.defaultValue.EMPTY_OBJECT)).positions},height:e.height,extrudedHeight:e.extrudedHeight,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,arcType:e.arcType,offsetAttribute:e.offsetAttribute})},g.createGeometry=function(e){var t=e._ellipsoid,i=e._granularity,r=e._polygonHierarchy,o=e._perPositionHeight,n=e._arcType,a=w.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!o,t);if(0!==a.length){var l,s,y,u=[],p=E.CesiumMath.chordLength(i,t.maximumRadius),d=e._height,c=e._extrudedHeight;if(e._perPositionHeightExtrude||!E.CesiumMath.equalsEpsilon(d,c,0,E.CesiumMath.EPSILON2))for(y=0;y<a.length;y++){if((l=N(t,a[y],p,o,n)).geometry=w.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(l.geometry,d,c,t,o),v.defined(e._offsetAttribute)){var g=l.geometry.attributes.position.values.length/3,f=new Uint8Array(g);f=e._offsetAttribute===C.GeometryOffsetAttribute.TOP?C.arrayFill(f,1,0,g/2):(s=e._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1,C.arrayFill(f,s)),l.geometry.attributes.applyOffset=new G.GeometryAttribute({componentDatatype:_.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})}u.push(l)}else for(y=0;y<a.length;y++){if((l=R(t,a[y],p,o,n)).geometry.attributes.position.values=I.PolygonPipeline.scaleToGeodeticHeight(l.geometry.attributes.position.values,d,t,!o),v.defined(e._offsetAttribute)){var h=l.geometry.attributes.position.values.length,m=new Uint8Array(h/3);s=e._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1,C.arrayFill(m,s),l.geometry.attributes.applyOffset=new G.GeometryAttribute({componentDatatype:_.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:m})}u.push(l)}var b=T.GeometryPipeline.combineInstances(u)[0],P=A.BoundingSphere.fromVertices(b.attributes.position.values);return new G.Geometry({attributes:b.attributes,indices:b.indices,primitiveType:b.primitiveType,boundingSphere:P,offsetAttribute:e._offsetAttribute})}},function(e,t){return v.defined(t)&&(e=g.unpack(e,t)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),g.createGeometry(e)}});
