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
define(["exports","./when-a55a8a4c","./Check-ff379c67","./Math-4c7277cb"],function(e,u,t,r){"use strict";var h=r.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,t,r){if(u.defined(e)){r=u.defaultValue(r,!1);var n,a,f,i=e.length;if(i<2)return e;for(n=1;n<i&&!t(a=e[n-1],f=e[n],h);++n);if(n===i)return r&&t(e[0],e[e.length-1],h)?e.slice(1):e;for(var c=e.slice(0,n);n<i;++n)t(a,f=e[n],h)||(c.push(f),a=f);return r&&1<c.length&&t(c[0],c[c.length-1],h)&&c.shift(),c}}});
