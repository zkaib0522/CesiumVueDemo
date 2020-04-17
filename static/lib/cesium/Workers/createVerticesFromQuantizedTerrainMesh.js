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
define(["./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb","./Cartesian2-eb7626a5","./Transforms-b79da894","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-b8ee84b3","./AttributeCompression-666e41a6","./IndexDatatype-3ec27f23","./IntersectionTests-d55e9256","./Plane-ddea39c5","./WebMercatorProjection-cdd3e436","./createTaskProcessorWorker","./EllipsoidTangentPlane-b95a773e","./OrientedBoundingBox-ffb6d96d","./TerrainEncoding-e11b94f3"],function(Te,e,pe,fe,Ee,t,r,n,ve,ye,i,o,Ne,a,we,xe,Me){"use strict";function be(){e.DeveloperError.throwInstantiationError()}Object.defineProperties(be.prototype,{errorEvent:{get:e.DeveloperError.throwInstantiationError},credit:{get:e.DeveloperError.throwInstantiationError},tilingScheme:{get:e.DeveloperError.throwInstantiationError},ready:{get:e.DeveloperError.throwInstantiationError},readyPromise:{get:e.DeveloperError.throwInstantiationError},hasWaterMask:{get:e.DeveloperError.throwInstantiationError},hasVertexNormals:{get:e.DeveloperError.throwInstantiationError},availability:{get:e.DeveloperError.throwInstantiationError}});var s=[];be.getRegularGridIndices=function(e,t){var r=s[e];Te.defined(r)||(s[e]=r=[]);var n=r[t];return Te.defined(n)||p(e,t,n=e*t<pe.CesiumMath.SIXTY_FOUR_KILOBYTES?r[t]=new Uint16Array((e-1)*(t-1)*6):r[t]=new Uint32Array((e-1)*(t-1)*6),0),n};var u=[];be.getRegularGridIndicesAndEdgeIndices=function(e,t){var r=u[e];Te.defined(r)||(u[e]=r=[]);var n=r[t];if(!Te.defined(n)){var i=be.getRegularGridIndices(e,t),o=T(e,t),a=o.westIndicesSouthToNorth,s=o.southIndicesEastToWest,d=o.eastIndicesNorthToSouth,c=o.northIndicesWestToEast;n=r[t]={indices:i,westIndicesSouthToNorth:a,southIndicesEastToWest:s,eastIndicesNorthToSouth:d,northIndicesWestToEast:c}}return n};var g=[];function T(e,t){var r,n=new Array(t),i=new Array(e),o=new Array(t),a=new Array(e);for(r=0;r<e;++r)i[a[r]=r]=e*t-1-r;for(r=0;r<t;++r)o[r]=(r+1)*e-1,n[r]=(t-r-1)*e;return{westIndicesSouthToNorth:n,southIndicesEastToWest:i,eastIndicesNorthToSouth:o,northIndicesWestToEast:a}}function p(e,t,r,n){for(var i=0,o=0;o<t-1;++o){for(var a=0;a<e-1;++a){var s=i+e,d=s+1,c=i+1;r[n++]=i,r[n++]=s,r[n++]=c,r[n++]=c,r[n++]=s,r[n++]=d,++i}++i}}function d(e,t,r,n){for(var i=e[0],o=e.length,a=1;a<o;++a){var s=e[a];r[n++]=i,r[n++]=s,r[n++]=t,r[n++]=t,r[n++]=s,r[n++]=t+1,i=s,++t}return n}be.getRegularGridAndSkirtIndicesAndEdgeIndices=function(e,t){var r=g[e];Te.defined(r)||(g[e]=r=[]);var n=r[t];if(!Te.defined(n)){var i=e*t,o=(e-1)*(t-1)*6,a=2*e+2*t,s=i+a,d=o+6*Math.max(0,a-4),c=T(e,t),u=c.westIndicesSouthToNorth,h=c.southIndicesEastToWest,l=c.eastIndicesNorthToSouth,I=c.northIndicesWestToEast,m=ye.IndexDatatype.createTypedArray(s,d);p(e,t,m,0),be.addSkirtIndices(u,h,l,I,i,m,o),n=r[t]={indices:m,westIndicesSouthToNorth:u,southIndicesEastToWest:h,eastIndicesNorthToSouth:l,northIndicesWestToEast:I,indexCountWithoutSkirts:o}}return n},be.addSkirtIndices=function(e,t,r,n,i,o,a){var s=i;a=d(e,s,o,a),a=d(t,s+=e.length,o,a),a=d(r,s+=t.length,o,a),d(n,s+=r.length,o,a)},be.heightmapTerrainQuality=.25,be.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(e,t,r){return 2*e.maximumRadius*Math.PI*be.heightmapTerrainQuality/(t*r)},be.prototype.requestTileGeometry=e.DeveloperError.throwInstantiationError,be.prototype.getLevelMaximumGeometricError=e.DeveloperError.throwInstantiationError,be.prototype.getTileDataAvailable=e.DeveloperError.throwInstantiationError,be.prototype.loadTileDataAvailability=e.DeveloperError.throwInstantiationError;var Ce=32767,Se=new fe.Cartesian3,Ae=new fe.Cartesian3,Pe=new fe.Cartesian3,We=new fe.Cartographic,De=new fe.Cartesian2,Be=new fe.Cartesian3,Fe=new Ee.Matrix4,ke=new Ee.Matrix4;function Ve(e,t,r,n,i,o,a,s,d){var c=Number.POSITIVE_INFINITY,u=i.north,h=i.south,l=i.east,I=i.west;l<I&&(l+=pe.CesiumMath.TWO_PI);for(var m=e.length,g=0;g<m;++g){var T=e[g],p=r[T],f=n[T];We.longitude=pe.CesiumMath.lerp(I,l,f.x),We.latitude=pe.CesiumMath.lerp(h,u,f.y),We.height=p-t;var E=o.cartographicToCartesian(We,Se);Ee.Matrix4.multiplyByPoint(a,E,E),fe.Cartesian3.minimumByComponent(E,s,s),fe.Cartesian3.maximumByComponent(E,d,d),c=Math.min(c,We.height)}return c}function _e(e,t,r,n,i,o,a,s,d,c,u,h,l,I,m){var g=Te.defined(a),T=d.north,p=d.south,f=d.east,E=d.west;f<E&&(f+=pe.CesiumMath.TWO_PI);for(var v=r.length,y=0;y<v;++y){var N=r[y],w=i[N],x=o[N];We.longitude=pe.CesiumMath.lerp(E,f,x.x)+I,We.latitude=pe.CesiumMath.lerp(p,T,x.y)+m,We.height=w-c;var M,b=s.cartographicToCartesian(We,Se);if(g){var C=2*N;if(De.x=a[C],De.y=a[1+C],1!==u){var S=ve.AttributeCompression.octDecode(De.x,De.y,Be),A=Ee.Transforms.eastNorthUpToFixedFrame(Se,s,ke),P=Ee.Matrix4.inverseTransformation(A,Fe);Ee.Matrix4.multiplyByPointAsVector(P,S,S),S.z*=u,fe.Cartesian3.normalize(S,S),Ee.Matrix4.multiplyByPointAsVector(A,S,S),fe.Cartesian3.normalize(S,S),ve.AttributeCompression.octEncode(S,De)}}n.hasWebMercatorT&&(M=(Ne.WebMercatorProjection.geodeticLatitudeToMercatorAngle(We.latitude)-h)*l),t=n.encode(e,t,b,x,We.height,De,M)}}function He(e,t){var r;return"function"==typeof e.slice&&"function"!=typeof(r=e.slice()).sort&&(r=void 0),Te.defined(r)||(r=Array.prototype.slice.call(e)),r.sort(t),r}return a(function(e,t){var r,n,i=e.quantizedVertices,o=i.length/3,a=e.octEncodedNormals,s=e.westIndices.length+e.eastIndices.length+e.southIndices.length+e.northIndices.length,d=e.includeWebMercatorT,c=fe.Rectangle.clone(e.rectangle),u=c.west,h=c.south,l=c.east,I=c.north,m=fe.Ellipsoid.clone(e.ellipsoid),g=e.exaggeration,T=e.minimumHeight*g,p=e.maximumHeight*g,f=e.relativeToCenter,E=Ee.Transforms.eastNorthUpToFixedFrame(f,m),v=Ee.Matrix4.inverseTransformation(E,new Ee.Matrix4);d&&(r=Ne.WebMercatorProjection.geodeticLatitudeToMercatorAngle(h),n=1/(Ne.WebMercatorProjection.geodeticLatitudeToMercatorAngle(I)-r));var y=i.subarray(0,o),N=i.subarray(o,2*o),w=i.subarray(2*o,3*o),x=Te.defined(a),M=new Array(o),b=new Array(o),C=new Array(o),S=d?new Array(o):[],A=Ae;A.x=Number.POSITIVE_INFINITY,A.y=Number.POSITIVE_INFINITY,A.z=Number.POSITIVE_INFINITY;var P=Pe;P.x=Number.NEGATIVE_INFINITY,P.y=Number.NEGATIVE_INFINITY,P.z=Number.NEGATIVE_INFINITY;for(var W=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY,B=Number.POSITIVE_INFINITY,F=Number.NEGATIVE_INFINITY,k=0;k<o;++k){var V=y[k],_=N[k],H=V/Ce,O=_/Ce,G=pe.CesiumMath.lerp(T,p,w[k]/Ce);We.longitude=pe.CesiumMath.lerp(u,l,H),We.latitude=pe.CesiumMath.lerp(h,I,O),We.height=G,W=Math.min(We.longitude,W),D=Math.max(We.longitude,D),B=Math.min(We.latitude,B),F=Math.max(We.latitude,F);var Y=m.cartographicToCartesian(We);M[k]=new fe.Cartesian2(H,O),b[k]=G,C[k]=Y,d&&(S[k]=(Ne.WebMercatorProjection.geodeticLatitudeToMercatorAngle(We.latitude)-r)*n),Ee.Matrix4.multiplyByPoint(v,Y,Se),fe.Cartesian3.minimumByComponent(Se,A,A),fe.Cartesian3.maximumByComponent(Se,P,P)}var z,R,L,U=He(e.westIndices,function(e,t){return M[e].y-M[t].y}),j=He(e.eastIndices,function(e,t){return M[t].y-M[e].y}),q=He(e.southIndices,function(e,t){return M[t].x-M[e].x}),Q=He(e.northIndices,function(e,t){return M[e].x-M[t].x});1!==g&&(R=Ee.BoundingSphere.fromPoints(C),z=xe.OrientedBoundingBox.fromRectangle(c,T,p,m)),(1!==g||T<0)&&(L=new Me.EllipsoidalOccluder(m).computeHorizonCullingPointPossiblyUnderEllipsoid(f,C,T));var K=T;K=Math.min(K,Ve(e.westIndices,e.westSkirtHeight,b,M,c,m,v,A,P)),K=Math.min(K,Ve(e.southIndices,e.southSkirtHeight,b,M,c,m,v,A,P)),K=Math.min(K,Ve(e.eastIndices,e.eastSkirtHeight,b,M,c,m,v,A,P)),K=Math.min(K,Ve(e.northIndices,e.northSkirtHeight,b,M,c,m,v,A,P));for(var X=new we.AxisAlignedBoundingBox(A,P,f),Z=new Me.TerrainEncoding(X,K,p,E,x,d),J=Z.getStride(),$=new Float32Array(o*J+s*J),ee=0,te=0;te<o;++te){if(x){var re=2*te;if(De.x=a[re],De.y=a[1+re],1!==g){var ne=ve.AttributeCompression.octDecode(De.x,De.y,Be),ie=Ee.Transforms.eastNorthUpToFixedFrame(C[te],m,ke),oe=Ee.Matrix4.inverseTransformation(ie,Fe);Ee.Matrix4.multiplyByPointAsVector(oe,ne,ne),ne.z*=g,fe.Cartesian3.normalize(ne,ne),Ee.Matrix4.multiplyByPointAsVector(ie,ne,ne),fe.Cartesian3.normalize(ne,ne),ve.AttributeCompression.octEncode(ne,De)}}ee=Z.encode($,ee,C[te],M[te],b[te],De,S[te])}var ae=Math.max(0,2*(s-4)),se=e.indices.length+3*ae,de=ye.IndexDatatype.createTypedArray(o+s,se);de.set(e.indices,0);var ce=1e-4*(D-W),ue=1e-4*(F-B),he=-ce,le=ce,Ie=ue,me=-ue,ge=o*J;return _e($,ge,U,Z,b,M,a,m,c,e.westSkirtHeight,g,r,n,he,0),_e($,ge+=e.westIndices.length*J,q,Z,b,M,a,m,c,e.southSkirtHeight,g,r,n,0,me),_e($,ge+=e.southIndices.length*J,j,Z,b,M,a,m,c,e.eastSkirtHeight,g,r,n,le,0),_e($,ge+=e.eastIndices.length*J,Q,Z,b,M,a,m,c,e.northSkirtHeight,g,r,n,0,Ie),be.addSkirtIndices(U,q,j,Q,o,de,e.indices.length),t.push($.buffer,de.buffer),{vertices:$.buffer,indices:de.buffer,westIndicesSouthToNorth:U,southIndicesEastToWest:q,eastIndicesNorthToSouth:j,northIndicesWestToEast:Q,vertexStride:J,center:f,minimumHeight:T,maximumHeight:p,boundingSphere:R,orientedBoundingBox:z,occludeePointInScaledSpace:L,encoding:Z,indexCountWithoutSkirts:e.indices.length}})});
