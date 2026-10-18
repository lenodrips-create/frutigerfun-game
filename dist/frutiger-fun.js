(()=>{var Wh="170";var tm=0,fd=1,em=2;var Ff=1,Xh=2,di=3,Kn=0,Re=1,pe=2,Zn=0,$s=1,zi=2,pd=3,md=4,nm=5,ls=100,im=101,sm=102,rm=103,om=104,am=200,cm=201,lm=202,hm=203,Sl=204,bl=205,um=206,dm=207,fm=208,pm=209,mm=210,gm=211,xm=212,_m=213,ym=214,El=0,Tl=1,wl=2,tr=3,Al=4,Rl=5,Cl=6,Il=7,Of=0,vm=1,Mm=2,Oi=0,qh=1,Yh=2,Zh=3,Kh=4,Sm=5,$h=6,go=7,gd="attached",bm="detached",Bf=300,er=301,nr=302,Pl=303,Ll=304,ja=306,xi=1e3,pi=1001,io=1002,Ke=1003,Jh=1004;var Xs=1005;var Ze=1006,Jr=1007;var Yn=1008;var _i=1009,zf=1010,Hf=1011,so=1012,jh=1013,us=1014,Bn=1015,Ge=1016,Qh=1017,tu=1018,ir=1020,kf=35902,Vf=1021,Gf=1022,sn=1023,Wf=1024,Xf=1025,Js=1026,sr=1027,eu=1028,nu=1029,qf=1030,iu=1031;var su=1033,xa=33776,_a=33777,ya=33778,va=33779,Dl=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Hl=37808,kl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,Kl=37817,$l=37818,Jl=37819,jl=37820,Ql=37821,Ma=36492,th=36494,eh=36495,Yf=36283,nh=36284,ih=36285,sh=36286,Em=2200,Tm=2201,wm=2202,rr=2300,or=2301,Hc=2302,qs=2400,Ys=2401,Sa=2402,ru=2500,Am=2501,Zf=0,Qa=1,xo=2,Rm=3200,Cm=3201;var Kf=0,Im=1,qn="",be="srgb",$e="srgb-linear",tc="linear",re="srgb";var ws=7680;var xd=519,Pm=512,Lm=513,Dm=514,$f=515,Um=516,Nm=517,Fm=518,Om=519,rh=35044;var _d="300 es",mi=2e3,ba=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=1234567,jr=Math.PI/180,ar=180/Math.PI;function yn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function ou(s,t){return(s%t+t)%t}function Bm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function zm(s,t,e){return s!==t?(e-s)/(t-s):0}function Qr(s,t,e){return(1-e)*s+e*t}function Hm(s,t,e,n){return Qr(s,t,1-Math.exp(-e*n))}function km(s,t=1){return t-Math.abs(ou(s,t*2)-t)}function Vm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Wm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Xm(s,t){return s+Math.random()*(t-s)}function qm(s){return s*(.5-Math.random())}function Ym(s){s!==void 0&&(yd=s);let t=yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zm(s){return s*jr}function Km(s){return s*ar}function $m(s){return(s&s-1)===0&&s!==0}function Jm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ec={DEG2RAD:jr,RAD2DEG:ar,generateUUID:yn,clamp:Le,euclideanModulo:ou,mapLinear:Bm,inverseLerp:zm,lerp:Qr,damp:Hm,pingpong:km,smoothstep:Vm,smootherstep:Gm,randInt:Wm,randFloat:Xm,randFloatSpread:qm,seededRandom:Ym,degToRad:Zm,radToDeg:Km,isPowerOfTwo:$m,ceilPowerOfTwo:Jm,floorPowerOfTwo:jm,setQuaternionFromProperEuler:Qm,normalize:ce,denormalize:On},K=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],M=i[4],_=i[7],P=i[2],E=i[5],R=i[8];return r[0]=o*x+a*v+c*P,r[3]=o*g+a*M+c*E,r[6]=o*p+a*_+c*R,r[1]=l*x+h*v+u*P,r[4]=l*g+h*M+u*E,r[7]=l*p+h*_+u*R,r[2]=d*x+f*v+m*P,r[5]=d*g+f*M+m*E,r[8]=d*p+f*_+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kc.makeScale(t,e)),this}rotate(t){return this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kc=new Gt;function Jf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t0(){let s=ro("canvas");return s.style.display="block",s}var vd={};function Kr(s){s in vd||(vd[s]=!0,console.warn(s))}function e0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function n0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function i0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:$e,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?tc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Md=[.64,.33,.3,.6,.15,.06],Sd=[.2126,.7152,.0722],bd=[.3127,.329],Ed=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[$e]:{primaries:Md,whitePoint:bd,transfer:tc,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:Sd,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Md,whitePoint:bd,transfer:re,toXYZ:Ed,fromXYZ:Td,luminanceCoefficients:Sd,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var As,oh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=ro("canvas")),As.width=t.width,As.height=t.height;let n=As.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},s0=0,Ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vc(i[o].image)):r.push(Vc(i[o]))}else r=Vc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var r0=0,He=class s extends yi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=pi,i=pi,r=Ze,o=Yn,a=sn,c=_i,l=s.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=yn(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Bf;He.DEFAULT_ANISOTROPY=1;var Qt=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,_=(f+1)/2,P=(p+1)/2,E=(h+d)/4,R=(u+x)/4,C=(m+g)/4;return M>_&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=R/n):_>P?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ah=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ta=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ze=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let P=Math.sqrt(M),E=Math.atan2(P,p*v);g=Math.sin(g*E)/P,a=Math.sin(a*E)/P}let _=a*v;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gc.copy(this).projectOnVector(t),this.sub(Gc)}reflect(t){return this.sub(Gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new w,wd=new ze,rn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),zo.subVectors(this.max,Br),Rs.subVectors(t.a,Br),Cs.subVectors(t.b,Br),Is.subVectors(t.c,Br),Ci.subVectors(Cs,Rs),Ii.subVectors(Is,Cs),ns.subVectors(Rs,Is);let e=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-ns.z,ns.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,ns.z,0,-ns.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-ns.y,ns.x,0];return!Wc(e,Rs,Cs,Is,zo)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,Rs,Cs,Is,zo))?!1:(Ho.crossVectors(Ci,Ii),e=[Ho.x,Ho.y,Ho.z],Wc(e,Rs,Cs,Is,zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new w,new w,new w,new w,new w,new w,new w,new w],Dn=new w,Bo=new rn,Rs=new w,Cs=new w,Is=new w,Ci=new w,Ii=new w,ns=new w,Br=new w,zo=new w,Ho=new w,is=new w;function Wc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){is.fromArray(s,r);let a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var o0=new rn,zr=new w,Xc=new w,mn=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):o0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Xc)),this.expandByPoint(zr.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new w,qc=new w,ko=new w,Pi=new w,Yc=new w,Vo=new w,Zc=new w,cr=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qc.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(qc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ko),a=Pi.dot(this.direction),c=-Pi.dot(ko),l=Pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qc).addScaledVector(ko,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){Yc.subVectors(e,t),Vo.subVectors(n,t),Zc.crossVectors(Yc,Vo);let o=this.direction.dot(Zc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);let c=a*this.direction.dot(Vo.crossVectors(Pi,Vo));if(c<0)return null;let l=a*this.direction.dot(Yc.cross(Pi));if(l<0||c+l>o)return null;let h=-a*Pi.dot(Zc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,c0)}lookAt(t,e,n){let i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(n,fn),Li.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(n,fn)),Li.normalize(),Go.crossVectors(fn,Li),i[0]=Li.x,i[4]=Go.x,i[8]=fn.x,i[1]=Li.y,i[5]=Go.y,i[9]=fn.y,i[2]=Li.z,i[6]=Go.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],M=n[7],_=n[11],P=n[15],E=i[0],R=i[4],C=i[8],S=i[12],y=i[1],T=i[5],L=i[9],U=i[13],N=i[2],H=i[6],O=i[10],J=i[14],V=i[3],st=i[7],G=i[11],Z=i[15];return r[0]=o*E+a*y+c*N+l*V,r[4]=o*R+a*T+c*H+l*st,r[8]=o*C+a*L+c*O+l*G,r[12]=o*S+a*U+c*J+l*Z,r[1]=h*E+u*y+d*N+f*V,r[5]=h*R+u*T+d*H+f*st,r[9]=h*C+u*L+d*O+f*G,r[13]=h*S+u*U+d*J+f*Z,r[2]=m*E+x*y+g*N+p*V,r[6]=m*R+x*T+g*H+p*st,r[10]=m*C+x*L+g*O+p*G,r[14]=m*S+x*U+g*J+p*Z,r[3]=v*E+M*y+_*N+P*V,r[7]=v*R+M*T+_*H+P*st,r[11]=v*C+M*L+_*O+P*G,r[15]=v*S+M*U+_*J+P*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,M=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,P=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,E=e*v+n*M+i*_+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=v*R,t[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*R,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,t[4]=M*R,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*R,t[8]=_*R,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=P*R,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*R,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=c*l,M=c*h,_=c*u,P=n.x,E=n.y,R=n.z;return i[0]=(1-(x+p))*P,i[1]=(f+_)*P,i[2]=(m-M)*P,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(m+M)*R,i[9]=(g-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ps.set(i[0],i[1],i[2]).length(),o=Ps.set(i[4],i[5],i[6]).length(),a=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Un.copy(this);let l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=mi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===mi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ba)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=mi){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,m,x;if(a===mi)m=(o+r)*u,x=-2*u;else if(a===ba)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new w,Un=new Nt,a0=new w(0,0,0),c0=new w(1,1,1),Li=new w,Go=new w,fn=new w,Ad=new Nt,Rd=new ze,$n=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},l0=0,Cd=new w,Ls=new ze,ci=new Nt,Wo=new w,Hr=new w,h0=new w,u0=new ze,Id=new w(1,0,0),Pd=new w(0,1,0),Ld=new w(0,0,1),Dd={type:"added"},d0={type:"removed"},Ds={type:"childadded",child:null},Kc={type:"childremoved",child:null},ve=class s extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new w,e=new $n,n=new ze,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Gt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Id,t)}rotateY(t){return this.rotateOnAxis(Pd,t)}rotateZ(t){return this.rotateOnAxis(Ld,t)}translateOnAxis(t,e){return Cd.copy(t).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Id,t)}translateY(t){return this.translateOnAxis(Pd,t)}translateZ(t){return this.translateOnAxis(Ld,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Hr,Wo,this.up):ci.lookAt(Wo,Hr,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(ci),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d0),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ve.DEFAULT_UP=new w(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new w,li=new w,$c=new w,hi=new w,Us=new w,Ns=new w,Ud=new w,Jc=new w,jc=new w,Qc=new w,tl=new Qt,el=new Qt,nl=new Qt,Ni=class s{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nn.subVectors(i,e),li.subVectors(n,e),$c.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(li),c=Nn.dot($c),l=li.dot(li),h=li.dot($c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(el,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),li.subVectors(t,e),Nn.cross(li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Us.subVectors(i,n),Ns.subVectors(r,n),Jc.subVectors(t,n);let c=Us.dot(Jc),l=Ns.dot(Jc);if(c<=0&&l<=0)return e.copy(n);jc.subVectors(t,i);let h=Us.dot(jc),u=Ns.dot(jc);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Us,o);Qc.subVectors(t,r);let f=Us.dot(Qc),m=Ns.dot(Qc);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ns,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ud.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Ud,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function il(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=ou(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Zt.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Le(Ye.r*255,0,255))*65536+Math.round(Le(Ye.g*255,0,255))*256+Math.round(Le(Ye.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,i=Ye.g,r=Ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=be){Zt.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,i=Ye.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(Xo);let n=Qr(Di.h,Xo.h,e),i=Qr(Di.s,Xo.s,e),r=Qr(Di.l,Xo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new nt;nt.NAMES=jf;var f0=0,on=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=yn(),this.name="",this.blending=$s,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Me=class extends on{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fi=p0();function p0(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function m0(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Le(s,-65504,65504),fi.floatView[0]=s;let t=fi.uint32View[0],e=t>>23&511;return fi.baseTable[e]+((t&8388607)>>fi.shiftTable[e])}function g0(s){let t=s>>10;return fi.uint32View[0]=fi.mantissaTable[fi.offsetTable[t]+(s&1023)]+fi.exponentTable[t],fi.floatView[0]}var nc={toHalfFloat:m0,fromHalfFloat:g0},Pe=new w,qo=new K,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rh&&(t.usage=this.usage),t}};var lr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},x0=0,_n=new Nt,sl=new ve,Fs=new w,pn=new rn,kr=new rn,Be=new w,le=class s extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?hr:lr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(pn.min,kr.min),pn.expandByPoint(Be),Be.addVectors(pn.max,kr.max),pn.expandByPoint(Be)):(pn.expandByPoint(kr.min),pn.expandByPoint(kr.max))}pn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),Be.add(Fs)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,u=new w,d=new K,f=new K,m=new K,x=new w,g=new w;function p(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),a[C].add(x),a[S].add(x),a[y].add(x),c[C].add(g),c[S].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,S=v.length;C<S;++C){let y=v[C],T=y.start,L=y.count;for(let U=T,N=T+L;U<N;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let M=new w,_=new w,P=new w,E=new w;function R(C){P.fromBufferAttribute(i,C),E.copy(P);let S=a[C];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(E,S);let T=_.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,T)}for(let C=0,S=v.length;C<S;++C){let y=v[C],T=y.start,L=y.count;for(let U=T,N=T+L;U<N;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nd=new Nt,ss=new cr,Yo=new mn,Fd=new w,Zo=new w,Ko=new w,$o=new w,rl=new w,Jo=new w,Od=new w,jo=new w,ut=class extends ve{constructor(t=new le,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(rl.fromBufferAttribute(u,t),o?Jo.addScaledVector(rl,h):Jo.addScaledVector(rl.sub(e),h))}e.add(Jo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Yo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Yo,Fd)===null||ss.origin.distanceToSquared(Fd)>(t.far-t.near)**2))&&(Nd.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=M;_<P;_+=3){let E=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);i=Qo(this,p,t,n,l,h,u,E,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);i=Qo(this,o,t,n,l,h,u,v,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,P=M;_<P;_+=3){let E=_,R=_+1,C=_+2;i=Qo(this,p,t,n,l,h,u,E,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,M=g+1,_=g+2;i=Qo(this,o,t,n,l,h,u,v,M,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function _0(s,t,e,n,i,r,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Kn,a),c===null)return null;jo.copy(a),jo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(jo);return l<e.near||l>e.far?null:{distance:l,point:jo.clone(),object:s}}function Qo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Zo),s.getVertexPosition(c,Ko),s.getVertexPosition(l,$o);let h=_0(s,t,e,n,Zo,Ko,$o,Od);if(h){let u=new w;Ni.getBarycoord(Od,Zo,Ko,$o,u),i&&(h.uv=Ni.getInterpolatedAttribute(i,a,c,l,u,new K)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,c,l,u,new K)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};Ni.getNormal(Zo,Ko,$o,d.normal),h.face=d,h.barycoord=u}return h}var Ve=class s extends le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function m(x,g,p,v,M,_,P,E,R,C,S){let y=_/R,T=P/C,L=_/2,U=P/2,N=E/2,H=R+1,O=C+1,J=0,V=0,st=new w;for(let G=0;G<O;G++){let Z=G*T-U;for(let dt=0;dt<H;dt++){let wt=dt*y-L;st[x]=wt*v,st[g]=Z*M,st[p]=N,l.push(st.x,st.y,st.z),st[x]=0,st[g]=0,st[p]=E>0?1:-1,h.push(st.x,st.y,st.z),u.push(dt/R),u.push(1-G/C),J+=1}}for(let G=0;G<C;G++)for(let Z=0;Z<R;Z++){let dt=d+Z+H*G,wt=d+Z+H*(G+1),Y=d+(Z+1)+H*(G+1),tt=d+(Z+1)+H*G;c.push(dt,wt,tt),c.push(wt,Y,tt),V+=6}a.addGroup(f,V,S),f+=V,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ur(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let n=ur(s[e]);for(let i in n)t[i]=n[i]}return t}function y0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var ei={clone:ur,merge:Qe},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ye=class extends on{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Aa=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new w,Bd=new K,zd=new K,Ce=class extends Aa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Bd,zd),e.subVectors(zd,Bd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Bs=1,lh=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ce(Os,Bs,t,e);i.layers=this.layers,this.add(i);let r=new Ce(Os,Bs,t,e);r.layers=this.layers,this.add(r);let o=new Ce(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new Ce(Os,Bs,t,e);a.layers=this.layers,this.add(a);let c=new Ce(Os,Bs,t,e);c.layers=this.layers,this.add(c);let l=new Ce(Os,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ra=class extends He{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hh=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ra(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ve(5,5,5),r=new ye({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Zn});r.uniforms.tEquirect.value=e;let o=new ut(i,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Ze),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ol=new w,S0=new w,b0=new Gt,Fn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ol.subVectors(n,e).cross(S0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||b0.getNormalMatrix(t),i=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new mn,ta=new w,oo=class{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],v=i[13],M=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+v).normalize(),n[3].setComponents(c-o,d-h,g-m,_-v).normalize(),n[4].setComponents(c-a,d-u,g-x,_-M).normalize(),e===mi)n[5].setComponents(c+a,d+u,g+x,_+M).normalize();else if(e===ba)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ta.x=i.normal.x>0?t.max.x:t.min.x,ta.y=i.normal.y>0?t.max.y:t.min.y,ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function E0(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var zn=class s extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<l;M++){let _=M*u-r;m.push(_,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let M=v+l*p,_=v+l*(p+1),P=v+1+l*(p+1),E=v+1+l*p;f.push(M,_,E),f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:I0,aomap_fragment:P0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:N0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:B0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:$0,displacementmap_pars_vertex:J0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:tg,colorspace_fragment:eg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:og,envmap_physical_pars_fragment:xg,envmap_vertex:ag,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:yg,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:wg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Ig,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:Hg,morphtarget_vertex:kg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Jg,opaque_fragment:jg,packing:Qg,premultiplied_alpha_fragment:tx,project_vertex:ex,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:ax,shadowmap_vertex:cx,shadowmask_pars_fragment:lx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:xx,transmission_fragment:_x,transmission_pars_fragment:yx,uv_pars_fragment:vx,uv_pars_vertex:Mx,uv_vertex:Sx,worldpos_vertex:bx,background_vert:Ex,background_frag:Tx,backgroundCube_vert:wx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Ix,depth_frag:Px,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:Nx,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:Hx,meshlambert_frag:kx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:Zx,meshphysical_frag:Kx,meshtoon_vert:$x,meshtoon_frag:Jx,points_vert:jx,points_frag:Qx,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},pt={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Xn={basic:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new nt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new nt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Qe([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Qe([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Qe([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Qe([pt.common,pt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Qe([pt.lights,pt.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Xn.physical={uniforms:Qe([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ea={r:0,b:0,g:0},os=new $n,s_=new Nt;function r_(s,t,e,n,i,r,o){let a=new nt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1,_=m(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,M){let _=m(M);_&&(_.isCubeTexture||_.mapping===ja)?(h===void 0&&(h=new ut(new Ve(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:ur(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),os.copy(M.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(os)),h.material.toneMapped=Zt.getTransfer(_.colorSpace)!==re,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ut(new zn(2,2),new ye({name:"BackgroundMaterial",uniforms:ur(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(ea,Qf(s)),n.buffers.color.setClear(ea.r,ea.g,ea.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:g}}function o_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,T,L,U,N){let H=!1,O=u(U,L,T);r!==O&&(r=O,l(r.object)),H=f(y,U,L,N),H&&m(y,U,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(y,T,L,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,T,L){let U=L.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let H=N[T.id];H===void 0&&(H={},N[T.id]=H);let O=H[U];return O===void 0&&(O=d(c()),H[U]=O),O}function d(y){let T=[],L=[],U=[];for(let N=0;N<e;N++)T[N]=0,L[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,T,L,U){let N=r.attributes,H=T.attributes,O=0,J=L.getAttributes();for(let V in J)if(J[V].location>=0){let G=N[V],Z=H[V];if(Z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),G===void 0||G.attribute!==Z||Z&&G.data!==Z.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function m(y,T,L,U){let N={},H=T.attributes,O=0,J=L.getAttributes();for(let V in J)if(J[V].location>=0){let G=H[V];G===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(G=y.instanceColor));let Z={};Z.attribute=G,G&&G.data&&(Z.data=G.data),N[V]=Z,O++}r.attributes=N,r.attributesNum=O,r.index=U}function x(){let y=r.newAttributes;for(let T=0,L=y.length;T<L;T++)y[T]=0}function g(y){p(y,0)}function p(y,T){let L=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;L[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),N[y]!==T&&(s.vertexAttribDivisor(y,T),N[y]=T)}function v(){let y=r.newAttributes,T=r.enabledAttributes;for(let L=0,U=T.length;L<U;L++)T[L]!==y[L]&&(s.disableVertexAttribArray(L),T[L]=0)}function M(y,T,L,U,N,H,O){O===!0?s.vertexAttribIPointer(y,T,L,N,H):s.vertexAttribPointer(y,T,L,U,N,H)}function _(y,T,L,U){x();let N=U.attributes,H=L.getAttributes(),O=T.defaultAttributeValues;for(let J in H){let V=H[J];if(V.location>=0){let st=N[J];if(st===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let G=st.normalized,Z=st.itemSize,dt=t.get(st);if(dt===void 0)continue;let wt=dt.buffer,Y=dt.type,tt=dt.bytesPerElement,ct=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===jh;if(st.isInterleavedBufferAttribute){let rt=st.data,At=rt.stride,bt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot,rt.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)g(V.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Ot=0;Ot<V.locationSize;Ot++)M(V.location+Ot,Z/V.locationSize,Y,G,At*tt,(bt+Z/V.locationSize*Ot)*tt,ct)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<V.locationSize;rt++)g(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let rt=0;rt<V.locationSize;rt++)M(V.location+rt,Z/V.locationSize,Y,G,Z*tt,Z/V.locationSize*rt*tt,ct)}}else if(O!==void 0){let G=O[J];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(V.location,G);break;case 3:s.vertexAttrib3fv(V.location,G);break;case 4:s.vertexAttrib4fv(V.location,G);break;default:s.vertexAttrib1fv(V.location,G)}}}}v()}function P(){C();for(let y in n){let T=n[y];for(let L in T){let U=T[L];for(let N in U)h(U[N].object),delete U[N];delete T[L]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let L in T){let U=T[L];for(let N in U)h(U[N].object),delete U[N];delete T[L]}delete n[y.id]}function R(y){for(let T in n){let L=n[T];if(L[y.id]===void 0)continue;let U=L[y.id];for(let N in U)h(U[N].object),delete U[N];delete L[y.id]}}function C(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function a_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_i&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!C)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:P,maxSamples:E}}function l_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Fn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,M=v*4,_=p.clippingState||null;c.value=_,_=h(m,d,M,f);for(let P=0;P!==M;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function h_(s){let t=new WeakMap;function e(o,a){return a===Pl?o.mapping=er:a===Ll&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pl||a===Ll)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new hh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hi=class extends Aa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zs=4,Hd=[.125,.215,.35,.446,.526,.582],hs=20,al=new Hi,kd=new nt,cl=null,ll=0,hl=0,ul=!1,cs=(1+Math.sqrt(5))/2,zs=1/cs,Vd=[new w(-cs,zs,0),new w(cs,zs,0),new w(-zs,0,cs),new w(zs,0,cs),new w(0,cs,-zs),new w(0,cs,zs),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],ki=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,ll,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ge,format:sn,colorSpace:$e,depthBuffer:!1},i=Gd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u_(r)),this._blurMaterial=d_(r,t,e)}return i}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,al)}_sceneToCubeUV(t,e,n,i){let a=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kd),h.toneMapping=Oi,h.autoClear=!1;let f=new Me({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new ut(new Ve,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(kd),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;na(i,v*M,p>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===er||t.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;na(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vd[(i-r-1)%Vd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ut(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);let p=[],v=0;for(let R=0;R<hs;++R){let C=R/x,S=Math.exp(-C*C/2);p.push(S),R===0?v+=S:R<g&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;let _=this._sizeLods[i],P=3*_*(i>M-Zs?i-M+Zs:0),E=4*(this._cubeSize-_);na(e,P,E,3*_,2*_),c.setRenderTarget(e),c.render(u,al)}};function u_(s){let t=[],e=[],n=[],i=s,r=s-Zs+1+Hd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Zs?c=Hd[o-s+Zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),M=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,C=E>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(S,x*m*E),M.set(d,g*m*E);let y=[E,E,E,E,E,E];_.set(y,p*m*E)}let P=new le;P.setAttribute("position",new Ie(v,x)),P.setAttribute("uv",new Ie(M,g)),P.setAttribute("faceIndex",new Ie(_,p)),t.push(P),i>Zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gd(s,t,e){let n=new De(s,t,e);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function d_(s,t,e){let n=new Float32Array(hs),i=new w(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wd(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xd(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pl||c===Ll,h=c===er||c===nr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ki(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ki(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function p_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function m_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let M=0,_=v.length;M<_;M+=3){let P=v[M+0],E=v[M+1],R=v[M+2];d.push(P,E,E,R,R,P)}}else if(m!==void 0){let v=m.array;x=m.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let P=M+0,E=M+1,R=M+2;d.push(P,E,E,R,R,P)}}else return;let g=new(Jf(d)?hr:lr)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function __(s,t,e){let n=new WeakMap,i=new Qt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let _=a.attributes.position.count*M,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*P*4*u),R=new Ta(E,_,P,u);R.type=Bn,R.needsUpdate=!0;let C=M*4;for(let y=0;y<u;y++){let T=g[y],L=p[y],U=v[y],N=_*P*4*y;for(let H=0;H<T.count;H++){let O=H*C;f===!0&&(i.fromBufferAttribute(T,H),E[N+O+0]=i.x,E[N+O+1]=i.y,E[N+O+2]=i.z,E[N+O+3]=0),m===!0&&(i.fromBufferAttribute(L,H),E[N+O+4]=i.x,E[N+O+5]=i.y,E[N+O+6]=i.z,E[N+O+7]=0),x===!0&&(i.fromBufferAttribute(U,H),E[N+O+8]=i.x,E[N+O+9]=i.y,E[N+O+10]=i.z,E[N+O+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new K(_,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function y_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ca=class extends He{constructor(t,e,n,i,r,o,a,c,l,h=Js){if(h!==Js&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=us),n===void 0&&h===sr&&(n=ir),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ep=new He,qd=new Ca(1,1),np=new Ta,ip=new ch,sp=new Ra,Yd=[],Zd=[],Kd=new Float32Array(16),$d=new Float32Array(9),Jd=new Float32Array(4);function Sr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Yd[i];if(r===void 0&&(r=new Float32Array(i),Yd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ic(s,t){let e=Zd[t];e===void 0&&(e=new Int32Array(t),Zd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function v_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function S_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function E_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Jd.set(n),s.uniformMatrix2fv(this.addr,!1,Jd),Ne(e,n)}}function T_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$d.set(n),s.uniformMatrix3fv(this.addr,!1,$d),Ne(e,n)}}function w_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Kd.set(n),s.uniformMatrix4fv(this.addr,!1,Kd),Ne(e,n)}}function A_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function R_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function I_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function P_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function L_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function D_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function U_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function N_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qd.compareFunction=$f,r=qd):r=ep,e.setTexture2D(t||r,i)}function F_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ip,i)}function O_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sp,i)}function B_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||np,i)}function z_(s){switch(s){case 5126:return v_;case 35664:return M_;case 35665:return S_;case 35666:return b_;case 35674:return E_;case 35675:return T_;case 35676:return w_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return L_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}function H_(s,t){s.uniform1fv(this.addr,t)}function k_(s,t){let e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function V_(s,t){let e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function G_(s,t){let e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function W_(s,t){let e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function X_(s,t){let e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function q_(s,t){let e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y_(s,t){s.uniform1iv(this.addr,t)}function Z_(s,t){s.uniform2iv(this.addr,t)}function K_(s,t){s.uniform3iv(this.addr,t)}function $_(s,t){s.uniform4iv(this.addr,t)}function J_(s,t){s.uniform1uiv(this.addr,t)}function j_(s,t){s.uniform2uiv(this.addr,t)}function Q_(s,t){s.uniform3uiv(this.addr,t)}function ty(s,t){s.uniform4uiv(this.addr,t)}function ey(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ep,r[o])}function ny(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ip,r[o])}function iy(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||sp,r[o])}function sy(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||np,r[o])}function ry(s){switch(s){case 5126:return H_;case 35664:return k_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return j_;case 36295:return Q_;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z_(e.type)}},dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}},fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},dl=/(\w+)(\])?(\[|\.)?/g;function jd(s,t){s.seq.push(t),s.map[t.id]=t}function oy(s,t,e){let n=s.name,i=n.length;for(dl.lastIndex=0;;){let r=dl.exec(n),o=dl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jd(e,l===void 0?new uh(a,s,t):new dh(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new fh(a),jd(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);oy(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Qd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ay=37297,cy=0;function ly(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var tf=new Gt;function hy(s){Zt._getMatrix(tf,Zt.workingColorSpace,s);let t=`mat3( ${tf.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case tc:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ef(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ly(s.getShaderSource(t),o)}else return i}function uy(s,t){let e=hy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dy(s,t){let e;switch(t){case qh:e="Linear";break;case Yh:e="Reinhard";break;case Zh:e="Cineon";break;case Kh:e="ACESFilmic";break;case $h:e="AgX";break;case go:e="Neutral";break;case Sm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ia=new w;function fy(){Zt.getLuminanceCoefficients(ia);let s=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function my(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function $r(s){return s!==""}function nf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(s){return s.replace(xy,yy)}var _y=new Map;function yy(s,t){let e=Yt[t];if(e===void 0){let n=_y.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ph(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(s){return s.replace(vy,My)}function My(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function of(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function by(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ey(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ty(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case vm:t="ENVMAP_BLENDING_MIX";break;case Mm:t="ENVMAP_BLENDING_ADD";break}return t}function wy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ay(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Sy(e),l=by(e),h=Ey(e),u=Ty(e),d=wy(e),f=py(e),m=my(r),x=i.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`)):(g=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,uy("linearToOutputTexel",e.outputColorSpace),fy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),o=ph(o),o=nf(o,e),o=sf(o,e),a=ph(a),a=nf(a,e),a=sf(a,e),o=rf(o),a=rf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,_=v+p+a,P=Qd(i,i.VERTEX_SHADER,M),E=Qd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,P),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(T){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(P).trim(),N=i.getShaderInfoLog(E).trim(),H=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,E);else{let J=ef(i,P,"vertex"),V=ef(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+J+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||N==="")&&(O=!1);O&&(T.diagnostics={runnable:H,programLog:L,vertexShader:{log:U,prefix:g},fragmentShader:{log:N,prefix:p}})}i.deleteShader(P),i.deleteShader(E),C=new Qs(i,x),S=gy(i,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,ay)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}var Ry=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gh(t),e.set(t,n)),n}},gh=class{constructor(t){this.id=Ry++,this.code=t,this.usedTimes=0}};function Cy(s,t,e,n,i,r,o){let a=new wa,c=new mh,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,y,T,L,U){let N=L.fog,H=U.geometry,O=S.isMeshStandardMaterial?L.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),V=J&&J.mapping===ja?J.image.height:null,st=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Z=G!==void 0?G.length:0,dt=0;H.morphAttributes.position!==void 0&&(dt=1),H.morphAttributes.normal!==void 0&&(dt=2),H.morphAttributes.color!==void 0&&(dt=3);let wt,Y,tt,ct;if(st){let ae=Xn[st];wt=ae.vertexShader,Y=ae.fragmentShader}else wt=S.vertexShader,Y=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),ct=c.getFragmentShaderID(S);let rt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),bt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,Jt=!!S.map,$=!!S.matcap,lt=!!J,D=!!S.aoMap,Lt=!!S.lightMap,ot=!!S.bumpMap,St=!!S.normalMap,ft=!!S.displacementMap,zt=!!S.emissiveMap,vt=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,Rt=S.transmission>0,mt=b&&!!S.anisotropyMap,Mt=k&&!!S.clearcoatMap,$t=k&&!!S.clearcoatNormalMap,at=k&&!!S.clearcoatRoughnessMap,Et=it&&!!S.iridescenceMap,Ht=it&&!!S.iridescenceThicknessMap,kt=Q&&!!S.sheenColorMap,Tt=Q&&!!S.sheenRoughnessMap,jt=!!S.specularMap,qt=!!S.specularColorMap,de=!!S.specularIntensityMap,F=Rt&&!!S.transmissionMap,gt=Rt&&!!S.thicknessMap,q=!!S.gradientMap,et=!!S.alphaMap,yt=S.alphaTest>0,xt=!!S.alphaHash,Wt=!!S.extensions,Ae=Oi;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);let Xe={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:wt,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:bt,instancingColor:bt&&U.instanceColor!==null,instancingMorph:bt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:$e,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:$,envMap:lt,envMapMode:lt&&J.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Lt,bumpMap:ot,normalMap:St,displacementMap:d&&ft,emissiveMap:zt,normalMapObjectSpace:St&&S.normalMapType===Im,normalMapTangentSpace:St&&S.normalMapType===Kf,metalnessMap:vt,roughnessMap:I,anisotropy:b,anisotropyMap:mt,clearcoat:k,clearcoatMap:Mt,clearcoatNormalMap:$t,clearcoatRoughnessMap:at,dispersion:j,iridescence:it,iridescenceMap:Et,iridescenceThicknessMap:Ht,sheen:Q,sheenColorMap:kt,sheenRoughnessMap:Tt,specularMap:jt,specularColorMap:qt,specularIntensityMap:de,transmission:Rt,transmissionMap:F,thicknessMap:gt,gradientMap:q,opaque:S.transparent===!1&&S.blending===$s&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:yt,alphaHash:xt,combine:S.combine,mapUv:Jt&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:Lt&&x(S.lightMap.channel),bumpMapUv:ot&&x(S.bumpMap.channel),normalMapUv:St&&x(S.normalMap.channel),displacementMapUv:ft&&x(S.displacementMap.channel),emissiveMapUv:zt&&x(S.emissiveMap.channel),metalnessMapUv:vt&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:mt&&x(S.anisotropyMap.channel),clearcoatMapUv:Mt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(S.sheenRoughnessMap.channel),specularMapUv:jt&&x(S.specularMap.channel),specularColorMapUv:qt&&x(S.specularColorMap.channel),specularIntensityMapUv:de&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:gt&&x(S.thicknessMap.channel),alphaMapUv:et&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(St||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Jt||et),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:zt&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pe,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)y.push(T),y.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(v(y,S),M(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let y=m[S.type],T;if(y){let L=Xn[y];T=ei.clone(L.uniforms)}else T=S.uniforms;return T}function P(S,y){let T;for(let L=0,U=h.length;L<U;L++){let N=h[L];if(N.cacheKey===y){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Ay(s,y,S,r),h.push(T)),T}function E(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function Iy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Py(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function af(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Py),n.length>1&&n.sort(d||af),i.length>1&&i.sort(d||af)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ly(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new cf,s.set(n,[o])):i>=r.length?(o=new cf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new nt};break;case"SpotLight":e={position:new w,direction:new w,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function Uy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ny=0;function Fy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Oy(s){let t=new Dy,e=Uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let i=new w,r=new Nt,o=new Nt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,M=0,_=0,P=0,E=0,R=0;l.sort(Fy);for(let S=0,y=l.length;S<y;S++){let T=l[S],L=T.color,U=T.intensity,N=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*U,u+=L.g*U,d+=L.b*U;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],U);R++}else if(T.isDirectionalLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,V=e.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=T.shadow.matrix,v++}n.directional[f]=O,f++}else if(T.isSpotLight){let O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(L).multiplyScalar(U),O.distance=N,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[x]=O;let J=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,J.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,T.castShadow){let V=e.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=H,_++}x++}else if(T.isRectAreaLight){let O=t.get(T);O.color.copy(L).multiplyScalar(U),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=O,g++}else if(T.isPointLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){let J=T.shadow,V=e.get(T);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=O,m++}else if(T.isHemisphereLight){let O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(U),O.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[p]=O,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=R,n.version=Ny++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let M=l[p];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function lf(s){let t=new Oy(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function By(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new lf(s),t.set(i,[a])):r>=o.length?(a=new lf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xh=class extends on{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_h=class extends on{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ky(s,t,e){let n=new oo,i=new K,r=new K,o=new Qt,a=new xh({depthPacking:Cm}),c=new _h,l={},h=e.maxTextureSize,u={[Kn]:Re,[Re]:Kn,[pe]:pe},d=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:zy,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new le;m.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let p=this.type;this.render=function(E,R,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Zn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=p!==di&&this.type===di,N=p===di&&this.type!==di;for(let H=0,O=E.length;H<O;H++){let J=E[H],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let st=V.getFrameExtents();if(i.multiply(st),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||U===!0||N===!0){let Z=this.type!==di?{minFilter:Ke,magFilter:Ke}:{};V.map!==null&&V.map.dispose(),V.map=new De(i.x,i.y,Z),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let G=V.getViewportCount();for(let Z=0;Z<G;Z++){let dt=V.getViewport(Z);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),L.viewport(o),V.updateMatrices(J,Z),n=V.getFrustum(),_(R,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===di&&v(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,y,T)};function v(E,R){let C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new De(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,C,f,x,null)}function M(E,R,C,S){let y=null,T=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)y=T;else if(y=C.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let L=y.uuid,U=R.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let H=N[U];H===void 0&&(H=y.clone(),N[U]=H,R.addEventListener("dispose",P)),y=H}if(y.visible=R.visible,y.wireframe=R.wireframe,S===di?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=C}return y}function _(E,R,C,S,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let U=t.update(E),N=E.material;if(Array.isArray(N)){let H=U.groups;for(let O=0,J=H.length;O<J;O++){let V=H[O],st=N[V.materialIndex];if(st&&st.visible){let G=M(E,st,S,y);E.onBeforeShadow(s,E,R,C,U,G,V),s.renderBufferDirect(C,null,U,G,E,V),E.onAfterShadow(s,E,R,C,U,G,V)}}}else if(N.visible){let H=M(E,N,S,y);E.onBeforeShadow(s,E,R,C,U,H,null),s.renderBufferDirect(C,null,U,H,E,null),E.onAfterShadow(s,E,R,C,U,H,null)}}let L=E.children;for(let U=0,N=L.length;U<N;U++)_(L[U],R,C,S,y)}function P(E){E.target.removeEventListener("dispose",P);for(let C in l){let S=l[C],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var Vy={[El]:Tl,[wl]:Cl,[Al]:Il,[tr]:Rl,[Tl]:El,[Cl]:wl,[Il]:Al,[Rl]:tr};function Gy(s,t){function e(){let F=!1,gt=new Qt,q=null,et=new Qt(0,0,0,0);return{setMask:function(yt){q!==yt&&!F&&(s.colorMask(yt,yt,yt,yt),q=yt)},setLocked:function(yt){F=yt},setClear:function(yt,xt,Wt,Ae,Xe){Xe===!0&&(yt*=Ae,xt*=Ae,Wt*=Ae),gt.set(yt,xt,Wt,Ae),et.equals(gt)===!1&&(s.clearColor(yt,xt,Wt,Ae),et.copy(gt))},reset:function(){F=!1,q=null,et.set(-1,0,0,0)}}}function n(){let F=!1,gt=!1,q=null,et=null,yt=null;return{setReversed:function(xt){if(gt!==xt){let Wt=t.get("EXT_clip_control");gt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=yt;yt=null,this.setClear(Ae)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?rt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(xt){q!==xt&&!F&&(s.depthMask(xt),q=xt)},setFunc:function(xt){if(gt&&(xt=Vy[xt]),et!==xt){switch(xt){case El:s.depthFunc(s.NEVER);break;case Tl:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case tr:s.depthFunc(s.LEQUAL);break;case Al:s.depthFunc(s.EQUAL);break;case Rl:s.depthFunc(s.GEQUAL);break;case Cl:s.depthFunc(s.GREATER);break;case Il:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=xt}},setLocked:function(xt){F=xt},setClear:function(xt){yt!==xt&&(gt&&(xt=1-xt),s.clearDepth(xt),yt=xt)},reset:function(){F=!1,q=null,et=null,yt=null,gt=!1}}}function i(){let F=!1,gt=null,q=null,et=null,yt=null,xt=null,Wt=null,Ae=null,Xe=null;return{setTest:function(ae){F||(ae?rt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ae){gt!==ae&&!F&&(s.stencilMask(ae),gt=ae)},setFunc:function(ae,Pn,si){(q!==ae||et!==Pn||yt!==si)&&(s.stencilFunc(ae,Pn,si),q=ae,et=Pn,yt=si)},setOp:function(ae,Pn,si){(xt!==ae||Wt!==Pn||Ae!==si)&&(s.stencilOp(ae,Pn,si),xt=ae,Wt=Pn,Ae=si)},setLocked:function(ae){F=ae},setClear:function(ae){Xe!==ae&&(s.clearStencil(ae),Xe=ae)},reset:function(){F=!1,gt=null,q=null,et=null,yt=null,xt=null,Wt=null,Ae=null,Xe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,_=null,P=null,E=null,R=new nt(0,0,0),C=0,S=!1,y=null,T=null,L=null,U=null,N=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=J>=2);let st=null,G={},Z=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),wt=new Qt().fromArray(Z),Y=new Qt().fromArray(dt);function tt(F,gt,q,et){let yt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(F,xt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<q;Wt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(gt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return xt}let ct={};ct[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(tr),ot(!1),St(fd),rt(s.CULL_FACE),D(Zn);function rt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function At(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function bt(F,gt){return u[F]!==gt?(s.bindFramebuffer(F,gt),u[F]=gt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ot(F,gt){let q=f,et=!1;if(F){q=d.get(gt),q===void 0&&(q=[],d.set(gt,q));let yt=F.textures;if(q.length!==yt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Wt=yt.length;xt<Wt;xt++)q[xt]=s.COLOR_ATTACHMENT0+xt;q.length=yt.length,et=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,et=!0);et&&s.drawBuffers(q)}function Jt(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let $={[ls]:s.FUNC_ADD,[im]:s.FUNC_SUBTRACT,[sm]:s.FUNC_REVERSE_SUBTRACT};$[rm]=s.MIN,$[om]=s.MAX;let lt={[am]:s.ZERO,[cm]:s.ONE,[lm]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[mm]:s.SRC_ALPHA_SATURATE,[fm]:s.DST_COLOR,[um]:s.DST_ALPHA,[hm]:s.ONE_MINUS_SRC_COLOR,[bl]:s.ONE_MINUS_SRC_ALPHA,[pm]:s.ONE_MINUS_DST_COLOR,[dm]:s.ONE_MINUS_DST_ALPHA,[gm]:s.CONSTANT_COLOR,[xm]:s.ONE_MINUS_CONSTANT_COLOR,[_m]:s.CONSTANT_ALPHA,[ym]:s.ONE_MINUS_CONSTANT_ALPHA};function D(F,gt,q,et,yt,xt,Wt,Ae,Xe,ae){if(F===Zn){x===!0&&(At(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),F!==nm){if(F!==g||ae!==S){if((p!==ls||_!==ls)&&(s.blendEquation(s.FUNC_ADD),p=ls,_=ls),ae)switch(F){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case pd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case md:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case md:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,P=null,E=null,R.set(0,0,0),C=0,g=F,S=ae}return}yt=yt||gt,xt=xt||q,Wt=Wt||et,(gt!==p||yt!==_)&&(s.blendEquationSeparate($[gt],$[yt]),p=gt,_=yt),(q!==v||et!==M||xt!==P||Wt!==E)&&(s.blendFuncSeparate(lt[q],lt[et],lt[xt],lt[Wt]),v=q,M=et,P=xt,E=Wt),(Ae.equals(R)===!1||Xe!==C)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Xe),R.copy(Ae),C=Xe),g=F,S=!1}function Lt(F,gt){F.side===pe?At(s.CULL_FACE):rt(s.CULL_FACE);let q=F.side===Re;gt&&(q=!q),ot(q),F.blending===$s&&F.transparent===!1?D(Zn):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let et=F.stencilWrite;a.setTest(et),et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function St(F){F!==tm?(rt(s.CULL_FACE),F!==T&&(F===fd?s.cullFace(s.BACK):F===em?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),T=F}function ft(F){F!==L&&(O&&s.lineWidth(F),L=F)}function zt(F,gt,q){F?(rt(s.POLYGON_OFFSET_FILL),(U!==gt||N!==q)&&(s.polygonOffset(gt,q),U=gt,N=q)):At(s.POLYGON_OFFSET_FILL)}function vt(F){F?rt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function I(F){F===void 0&&(F=s.TEXTURE0+H-1),st!==F&&(s.activeTexture(F),st=F)}function b(F,gt,q){q===void 0&&(st===null?q=s.TEXTURE0+H-1:q=st);let et=G[q];et===void 0&&(et={type:void 0,texture:void 0},G[q]=et),(et.type!==F||et.texture!==gt)&&(st!==q&&(s.activeTexture(q),st=q),s.bindTexture(F,gt||ct[F]),et.type=F,et.texture=gt)}function k(){let F=G[st];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(F){wt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),wt.copy(F))}function Tt(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function jt(F,gt){let q=l.get(gt);q===void 0&&(q=new WeakMap,l.set(gt,q));let et=q.get(F);et===void 0&&(et=s.getUniformBlockIndex(gt,F.name),q.set(F,et))}function qt(F,gt){let et=l.get(gt).get(F);c.get(gt)!==et&&(s.uniformBlockBinding(gt,et,F.__bindingPointIndex),c.set(gt,et))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,G={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,_=null,P=null,E=null,R=new nt(0,0,0),C=0,S=!1,y=null,T=null,L=null,U=null,N=null,wt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:At,bindFramebuffer:bt,drawBuffers:Ot,useProgram:Jt,setBlending:D,setMaterial:Lt,setFlipSided:ot,setCullFace:St,setLineWidth:ft,setPolygonOffset:zt,setScissorTest:vt,activeTexture:I,bindTexture:b,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:it,texImage2D:Et,texImage3D:Ht,updateUBOMapping:jt,uniformBlockBinding:qt,texStorage2D:$t,texStorage3D:at,texSubImage2D:Q,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Mt,scissor:kt,viewport:Tt,reset:de}}function hf(s,t,e,n){let i=Wy(n);switch(e){case Vf:return s*t;case Wf:return s*t;case Xf:return s*t*2;case eu:return s*t/i.components*i.byteLength;case nu:return s*t/i.components*i.byteLength;case qf:return s*t*2/i.components*i.byteLength;case iu:return s*t*2/i.components*i.byteLength;case Gf:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case su:return s*t*4/i.components*i.byteLength;case xa:case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ya:case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Fl:return Math.max(s,16)*Math.max(t,8)/4;case Dl:case Nl:return Math.max(s,8)*Math.max(t,8)/2;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ma:case th:case eh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yf:case nh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ih:case sh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wy(s){switch(s){case _i:case zf:return{byteLength:1,components:1};case so:case Hf:case Ge:return{byteLength:2,components:1};case Qh:case tu:return{byteLength:2,components:4};case us:case jh:case Bn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,b){return f?new OffscreenCanvas(I,b):ro("canvas")}function x(I,b,k){let j=1,it=vt(I);if((it.width>k||it.height>k)&&(j=k/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Q=Math.floor(j*it.width),Rt=Math.floor(j*it.height);u===void 0&&(u=m(Q,Rt));let mt=b?m(Q,Rt):u;return mt.width=Q,mt.height=Rt,mt.getContext("2d").drawImage(I,0,0,Q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Rt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(I,b,k,j,it=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Q=b;if(b===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),b===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),k===s.UNSIGNED_INT&&(Q=s.RGB32UI),k===s.BYTE&&(Q=s.RGB8I),k===s.SHORT&&(Q=s.RGB16I),k===s.INT&&(Q=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),k===s.UNSIGNED_INT&&(Q=s.RGBA32UI),k===s.BYTE&&(Q=s.RGBA8I),k===s.SHORT&&(Q=s.RGBA16I),k===s.INT&&(Q=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),b===s.RGBA){let Rt=it?tc:Zt.getTransfer(j);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=Rt===re?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(I,b){let k;return I?b===null||b===us||b===ir?k=s.DEPTH24_STENCIL8:b===Bn?k=s.DEPTH32F_STENCIL8:b===so&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===us||b===ir?k=s.DEPTH_COMPONENT24:b===Bn?k=s.DEPTH_COMPONENT32F:b===so&&(k=s.DEPTH_COMPONENT16),k}function P(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ke&&I.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function E(I){let b=I.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function R(I){let b=I.target;b.removeEventListener("dispose",R),y(b)}function C(I){let b=n.get(I);if(b.__webglInit===void 0)return;let k=I.source,j=d.get(k);if(j){let it=j[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(I),Object.keys(j).length===0&&d.delete(k)}n.remove(I)}function S(I){let b=n.get(I);s.deleteTexture(b.__webglTexture);let k=I.source,j=d.get(k);delete j[b.__cacheKey],o.memory.textures--}function y(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let it=0;it<b.__webglFramebuffer[j].length;it++)s.deleteFramebuffer(b.__webglFramebuffer[j][it]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=I.textures;for(let j=0,it=k.length;j<it;j++){let Q=n.get(k[j]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(I)}let T=0;function L(){T=0}function U(){let I=T;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),T+=1,I}function N(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function H(I,b){let k=n.get(I);if(I.isVideoTexture&&ft(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){let j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,I,b);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function O(I,b){let k=n.get(I);if(I.version>0&&k.__version!==I.version){Y(k,I,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function J(I,b){let k=n.get(I);if(I.version>0&&k.__version!==I.version){Y(k,I,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function V(I,b){let k=n.get(I);if(I.version>0&&k.__version!==I.version){tt(k,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let st={[xi]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[io]:s.MIRRORED_REPEAT},G={[Ke]:s.NEAREST,[Jh]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[Jr]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},Z={[Pm]:s.NEVER,[Om]:s.ALWAYS,[Lm]:s.LESS,[$f]:s.LEQUAL,[Dm]:s.EQUAL,[Fm]:s.GEQUAL,[Um]:s.GREATER,[Nm]:s.NOTEQUAL};function dt(I,b){if(b.type===Bn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===Jr||b.magFilter===Xs||b.magFilter===Yn||b.minFilter===Ze||b.minFilter===Jr||b.minFilter===Xs||b.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,st[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,G[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ke||b.minFilter!==Xs&&b.minFilter!==Yn||b.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function wt(I,b){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",E));let j=b.source,it=d.get(j);it===void 0&&(it={},d.set(j,it));let Q=N(b);if(Q!==I.__cacheKey){it[Q]===void 0&&(it[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[Q].usedTimes++;let Rt=it[I.__cacheKey];Rt!==void 0&&(it[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(b)),I.__cacheKey=Q,I.__webglTexture=it[Q].texture}return k}function Y(I,b,k){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);let it=wt(I,b),Q=b.source;e.bindTexture(j,I.__webglTexture,s.TEXTURE0+k);let Rt=n.get(Q);if(Q.version!==Rt.__version||it===!0){e.activeTexture(s.TEXTURE0+k);let mt=Zt.getPrimaries(Zt.workingColorSpace),Mt=b.colorSpace===qn?null:Zt.getPrimaries(b.colorSpace),$t=b.colorSpace===qn||mt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let at=x(b.image,!1,i.maxTextureSize);at=zt(b,at);let Et=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),kt=M(b.internalFormat,Et,Ht,b.colorSpace,b.isVideoTexture);dt(j,b);let Tt,jt=b.mipmaps,qt=b.isVideoTexture!==!0,de=Rt.__version===void 0||it===!0,F=Q.dataReady,gt=P(b,at);if(b.isDepthTexture)kt=_(b.format===sr,b.type),de&&(qt?e.texStorage2D(s.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ht,null));else if(b.isDataTexture)if(jt.length>0){qt&&de&&e.texStorage2D(s.TEXTURE_2D,gt,kt,jt[0].width,jt[0].height);for(let q=0,et=jt.length;q<et;q++)Tt=jt[q],qt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Ht,Tt.data):e.texImage2D(s.TEXTURE_2D,q,kt,Tt.width,Tt.height,0,Et,Ht,Tt.data);b.generateMipmaps=!1}else qt?(de&&e.texStorage2D(s.TEXTURE_2D,gt,kt,at.width,at.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Et,Ht,at.data)):e.texImage2D(s.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ht,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,kt,jt[0].width,jt[0].height,at.depth);for(let q=0,et=jt.length;q<et;q++)if(Tt=jt[q],b.format!==sn)if(Et!==null)if(qt){if(F)if(b.layerUpdates.size>0){let yt=hf(Tt.width,Tt.height,b.format,b.type);for(let xt of b.layerUpdates){let Wt=Tt.data.subarray(xt*yt/Tt.data.BYTES_PER_ELEMENT,(xt+1)*yt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,xt,Tt.width,Tt.height,1,Et,Wt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,at.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,kt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Tt.width,Tt.height,at.depth,Et,Ht,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,kt,Tt.width,Tt.height,at.depth,0,Et,Ht,Tt.data)}else{qt&&de&&e.texStorage2D(s.TEXTURE_2D,gt,kt,jt[0].width,jt[0].height);for(let q=0,et=jt.length;q<et;q++)Tt=jt[q],b.format!==sn?Et!==null?qt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Tt.width,Tt.height,Et,Ht,Tt.data):e.texImage2D(s.TEXTURE_2D,q,kt,Tt.width,Tt.height,0,Et,Ht,Tt.data)}else if(b.isDataArrayTexture)if(qt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,kt,at.width,at.height,at.depth),F)if(b.layerUpdates.size>0){let q=hf(at.width,at.height,b.format,b.type);for(let et of b.layerUpdates){let yt=at.data.subarray(et*q/at.data.BYTES_PER_ELEMENT,(et+1)*q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,Et,Ht,yt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Ht,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,Et,Ht,at.data);else if(b.isData3DTexture)qt?(de&&e.texStorage3D(s.TEXTURE_3D,gt,kt,at.width,at.height,at.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Ht,at.data)):e.texImage3D(s.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,Et,Ht,at.data);else if(b.isFramebufferTexture){if(de)if(qt)e.texStorage2D(s.TEXTURE_2D,gt,kt,at.width,at.height);else{let q=at.width,et=at.height;for(let yt=0;yt<gt;yt++)e.texImage2D(s.TEXTURE_2D,yt,kt,q,et,0,Et,Ht,null),q>>=1,et>>=1}}else if(jt.length>0){if(qt&&de){let q=vt(jt[0]);e.texStorage2D(s.TEXTURE_2D,gt,kt,q.width,q.height)}for(let q=0,et=jt.length;q<et;q++)Tt=jt[q],qt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et,Ht,Tt):e.texImage2D(s.TEXTURE_2D,q,kt,Et,Ht,Tt);b.generateMipmaps=!1}else if(qt){if(de){let q=vt(at);e.texStorage2D(s.TEXTURE_2D,gt,kt,q.width,q.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ht,at)}else e.texImage2D(s.TEXTURE_2D,0,kt,Et,Ht,at);g(b)&&p(j),Rt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function tt(I,b,k){if(b.image.length!==6)return;let j=wt(I,b),it=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+k);let Q=n.get(it);if(it.version!==Q.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let Rt=Zt.getPrimaries(Zt.workingColorSpace),mt=b.colorSpace===qn?null:Zt.getPrimaries(b.colorSpace),Mt=b.colorSpace===qn||Rt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let $t=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!$t&&!at?Et[et]=x(b.image[et],!0,i.maxCubemapSize):Et[et]=at?b.image[et].image:b.image[et],Et[et]=zt(b,Et[et]);let Ht=Et[0],kt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),jt=M(b.internalFormat,kt,Tt,b.colorSpace),qt=b.isVideoTexture!==!0,de=Q.__version===void 0||j===!0,F=it.dataReady,gt=P(b,Ht);dt(s.TEXTURE_CUBE_MAP,b);let q;if($t){qt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,jt,Ht.width,Ht.height);for(let et=0;et<6;et++){q=Et[et].mipmaps;for(let yt=0;yt<q.length;yt++){let xt=q[yt];b.format!==sn?kt!==null?qt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,xt.width,xt.height,kt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,jt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,xt.width,xt.height,kt,Tt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,jt,xt.width,xt.height,0,kt,Tt,xt.data)}}}else{if(q=b.mipmaps,qt&&de){q.length>0&&gt++;let et=vt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,jt,et.width,et.height)}for(let et=0;et<6;et++)if(at){qt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,kt,Tt,Et[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,Et[et].width,Et[et].height,0,kt,Tt,Et[et].data);for(let yt=0;yt<q.length;yt++){let Wt=q[yt].image[et].image;qt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,Wt.width,Wt.height,kt,Tt,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,jt,Wt.width,Wt.height,0,kt,Tt,Wt.data)}}else{qt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,kt,Tt,Et[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,jt,kt,Tt,Et[et]);for(let yt=0;yt<q.length;yt++){let xt=q[yt];qt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,kt,Tt,xt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,jt,kt,Tt,xt.image[et])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),Q.__version=it.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ct(I,b,k,j,it,Q){let Rt=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),Mt=M(k.internalFormat,Rt,mt,k.colorSpace),$t=n.get(b),at=n.get(k);if(at.__renderTarget=b,!$t.__hasExternalTextures){let Et=Math.max(1,b.width>>Q),Ht=Math.max(1,b.height>>Q);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,Mt,Et,Ht,b.depth,0,Rt,mt,null):e.texImage2D(it,Q,Mt,Et,Ht,0,Rt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),St(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,it,at.__webglTexture,0,ot(b)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,it,at.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(I,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){let j=b.depthTexture,it=j&&j.isDepthTexture?j.type:null,Q=_(b.stencilBuffer,it),Rt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=ot(b);St(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Q,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Q,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,I)}else{let j=b.textures;for(let it=0;it<j.length;it++){let Q=j[it],Rt=r.convert(Q.format,Q.colorSpace),mt=r.convert(Q.type),Mt=M(Q.internalFormat,Rt,mt,Q.colorSpace),$t=ot(b);k&&St(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Mt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);let it=j.__webglTexture,Q=ot(b);if(b.depthTexture.format===Js)St(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(b.depthTexture.format===sr)St(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function bt(I){let b=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let j=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=j}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,I)}else if(k){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),rt(b.__webglDepthbuffer[j],I,!1);else{let it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),rt(b.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(I,b,k){let j=n.get(I);b!==void 0&&ct(j.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&bt(I)}function Jt(I){let b=I.texture,k=n.get(I),j=n.get(b);I.addEventListener("dispose",R);let it=I.textures,Q=I.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)k.__webglFramebuffer[mt][Mt]=s.createFramebuffer()}else k.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)k.__webglFramebuffer[mt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let mt=0,Mt=it.length;mt<Mt;mt++){let $t=n.get(it[mt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&St(I)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){let Mt=it[mt];k.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let $t=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),Et=M(Mt.internalFormat,$t,at,Mt.colorSpace,I.isXRRenderTarget===!0),Ht=ot(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Et,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),dt(s.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)ct(k.__webglFramebuffer[mt][Mt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Mt);else ct(k.__webglFramebuffer[mt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,Mt=it.length;mt<Mt;mt++){let $t=it[mt],at=n.get($t);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),dt(s.TEXTURE_2D,$t),ct(k.__webglFramebuffer,I,$t,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),g($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),dt(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)ct(k.__webglFramebuffer[Mt],I,b,s.COLOR_ATTACHMENT0,mt,Mt);else ct(k.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,mt,0);g(b)&&p(mt),e.unbindTexture()}I.depthBuffer&&bt(I)}function $(I){let b=I.textures;for(let k=0,j=b.length;k<j;k++){let it=b[k];if(g(it)){let Q=v(I),Rt=n.get(it).__webglTexture;e.bindTexture(Q,Rt),p(Q),e.unbindTexture()}}}let lt=[],D=[];function Lt(I){if(I.samples>0){if(St(I)===!1){let b=I.textures,k=I.width,j=I.height,it=s.COLOR_BUFFER_BIT,Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(I),mt=b.length>1;if(mt)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);let $t=n.get(b[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,it,s.NEAREST),c===!0&&(lt.length=0,D.length=0,lt.push(s.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(lt.push(Q),D.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);let $t=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ot(I){return Math.min(i.maxSamples,I.samples)}function St(I){let b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ft(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function zt(I,b){let k=I.colorSpace,j=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==$e&&k!==qn&&(Zt.getTransfer(k)===re?(j!==sn||it!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=St}function qy(s,t){function e(n,i=qn){let r,o=Zt.getTransfer(i);if(n===_i)return s.UNSIGNED_BYTE;if(n===Qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return s.BYTE;if(n===Hf)return s.SHORT;if(n===so)return s.UNSIGNED_SHORT;if(n===jh)return s.INT;if(n===us)return s.UNSIGNED_INT;if(n===Bn)return s.FLOAT;if(n===Ge)return s.HALF_FLOAT;if(n===Vf)return s.ALPHA;if(n===Gf)return s.RGB;if(n===sn)return s.RGBA;if(n===Wf)return s.LUMINANCE;if(n===Xf)return s.LUMINANCE_ALPHA;if(n===Js)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===eu)return s.RED;if(n===nu)return s.RED_INTEGER;if(n===qf)return s.RG;if(n===iu)return s.RG_INTEGER;if(n===su)return s.RGBA_INTEGER;if(n===xa||n===_a||n===ya||n===va)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l||n===Jl||n===jl||n===Ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===th||n===eh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===nh||n===ih||n===sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yh=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},me=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yy={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new He,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ye({vertexShader:Zy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends yi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new vh,g=e.getContextAttributes(),p=null,v=null,M=[],_=[],P=new K,E=null,R=new Ce;R.viewport=new Qt;let C=new Ce;C.viewport=new Qt;let S=[R,C],y=new yh,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=M[Y];return tt===void 0&&(tt=new to,M[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=M[Y];return tt===void 0&&(tt=new to,M[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=M[Y];return tt===void 0&&(tt=new to,M[Y]=tt),tt.getHandSpace()};function U(Y){let tt=_.indexOf(Y.inputSource);if(tt===-1)return;let ct=M[tt];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,l||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<M.length;Y++){let tt=_[Y];tt!==null&&(_[Y]=null,M[Y].disconnect(tt))}T=null,L=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new De(f.framebufferWidth,f.framebufferHeight,{format:sn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,ct=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?sr:Js,ct=g.stencil?ir:us);let At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new De(d.textureWidth,d.textureHeight,{format:sn,type:_i,depthTexture:new Ca(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(Y){for(let tt=0;tt<Y.removed.length;tt++){let ct=Y.removed[tt],rt=_.indexOf(ct);rt>=0&&(_[rt]=null,M[rt].disconnect(ct))}for(let tt=0;tt<Y.added.length;tt++){let ct=Y.added[tt],rt=_.indexOf(ct);if(rt===-1){for(let bt=0;bt<M.length;bt++)if(bt>=_.length){_.push(ct),rt=bt;break}else if(_[bt]===null){_[bt]=ct,rt=bt;break}if(rt===-1)break}let At=M[rt];At&&At.connect(ct)}}let O=new w,J=new w;function V(Y,tt,ct){O.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(ct.matrixWorld);let rt=O.distanceTo(J),At=tt.projectionMatrix.elements,bt=ct.projectionMatrix.elements,Ot=At[14]/(At[10]-1),Jt=At[14]/(At[10]+1),$=(At[9]+1)/At[5],lt=(At[9]-1)/At[5],D=(At[8]-1)/At[0],Lt=(bt[8]+1)/bt[0],ot=Ot*D,St=Ot*Lt,ft=rt/(-D+Lt),zt=ft*-D;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let vt=Ot+ft,I=Jt+ft,b=ot-zt,k=St+(rt-zt),j=$*Jt/I*vt,it=lt*Jt/I*vt;Y.projectionMatrix.makePerspective(b,k,j,it,vt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let tt=Y.near,ct=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),y.near=C.near=R.near=tt,y.far=C.far=R.far=ct,(T!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,L=y.far),R.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,y.layers.mask=R.layers.mask|C.layers.mask;let rt=Y.parent,At=y.cameras;st(y,rt);for(let bt=0;bt<At.length;bt++)st(At[bt],rt);At.length===2?V(y,R,C):y.projectionMatrix.copy(R.projectionMatrix),G(Y,y,rt)};function G(Y,tt,ct){ct===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ar*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Z=null;function dt(Y,tt){if(h=tt.getViewerPose(l||o),m=tt,h!==null){let ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let rt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let bt=0;bt<ct.length;bt++){let Ot=ct[bt],Jt=null;if(f!==null)Jt=f.getViewport(Ot);else{let lt=u.getViewSubImage(d,Ot);Jt=lt.viewport,bt===0&&(t.setRenderTargetTextures(v,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(v))}let $=S[bt];$===void 0&&($=new Ce,$.layers.enable(bt),$.viewport=new Qt,S[bt]=$),$.matrix.fromArray(Ot.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ot.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),bt===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push($)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){let bt=u.getDepthInformation(ct[0]);bt&&bt.isValid&&bt.texture&&x.init(t,bt,i.renderState)}}for(let ct=0;ct<M.length;ct++){let rt=_[ct],At=M[ct];rt!==null&&At!==void 0&&At.update(rt,tt,l||o)}Z&&Z(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let wt=new tp;wt.setAnimationLoop(dt),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}},as=new $n,$y=new Nt;function Jy(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Re&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Re&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,as.copy(_),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(as)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let _=M.program;n.uniformBlockBinding(v,_)}function l(v,M){let _=i[v.id];_===void 0&&(m(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",g));let P=M.program;n.updateUBOMapping(v,P);let E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let _=s.createBuffer(),P=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=i[v.id],_=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,R=_.length;E<R;E++){let C=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,y=C.length;S<y;S++){let T=C[S];if(f(T,E,S,P)===!0){let L=T.__offset,U=Array.isArray(T.value)?T.value:[T.value],N=0;for(let H=0;H<U.length;H++){let O=U[H],J=x(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,L+N,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,M,_,P){let E=v.value,R=M+"_"+_;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{let C=P[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(v){let M=v.uniforms,_=0,P=16;for(let R=0,C=M.length;R<C;R++){let S=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,T=S.length;y<T;y++){let L=S[y],U=Array.isArray(L.value)?L.value:[L.value];for(let N=0,H=U.length;N<H;N++){let O=U[N],J=x(O),V=_%P,st=V%J.boundary,G=V+st;_+=st,G!==0&&P-G<J.storage&&(_+=P-G),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=J.storage}}}let E=_%P;return E>0&&(_+=P-E),v.__size=_,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Ia=class{constructor(t={}){let{canvas:e=t0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=Oi,this.toneMappingExposure=1;let _=this,P=!1,E=0,R=0,C=null,S=-1,y=null,T=new Qt,L=new Qt,U=null,N=new nt(0),H=0,O=e.width,J=e.height,V=1,st=null,G=null,Z=new Qt(0,0,O,J),dt=new Qt(0,0,O,J),wt=!1,Y=new oo,tt=!1,ct=!1,rt=new Nt,At=new Nt,bt=new w,Ot=new Qt,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function lt(){return C===null?V:1}let D=n;function Lt(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){let B="webgl2";if(D=Lt(B,A),D===null)throw Lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,St,ft,zt,vt,I,b,k,j,it,Q,Rt,mt,Mt,$t,at,Et,Ht,kt,Tt,jt,qt,de,F;function gt(){ot=new p_(D),ot.init(),qt=new qy(D,ot),St=new c_(D,ot,t,qt),ft=new Gy(D,ot),St.reverseDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),zt=new x_(D),vt=new Iy,I=new Xy(D,ot,ft,vt,St,qt,zt),b=new h_(_),k=new f_(_),j=new E0(D),de=new o_(D,j),it=new m_(D,j,zt,de),Q=new y_(D,it,j,zt),kt=new __(D,St,I),at=new l_(vt),Rt=new Cy(_,b,k,ot,St,de,at),mt=new Jy(_,vt),Mt=new Ly,$t=new By(ot),Ht=new r_(_,b,k,ft,Q,f,c),Et=new ky(_,Q,St),F=new jy(D,zt,St,ft),Tt=new a_(D,ot,zt),jt=new g_(D,ot,zt),zt.programs=Rt.programs,_.capabilities=St,_.extensions=ot,_.properties=vt,_.renderLists=Mt,_.shadowMap=Et,_.state=ft,_.info=zt}gt();let q=new Mh(_,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(O,J,!1))},this.getSize=function(A){return A.set(O,J)},this.setSize=function(A,B,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,J=B,e.width=Math.floor(A*V),e.height=Math.floor(B*V),W===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(O*V,J*V).floor()},this.setDrawingBufferSize=function(A,B,W){O=A,J=B,V=W,e.width=Math.floor(A*W),e.height=Math.floor(B*W),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,B,W,X){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,B,W,X),ft.viewport(T.copy(Z).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,B,W,X){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,B,W,X),ft.scissor(L.copy(dt).multiplyScalar(V).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){ft.setScissorTest(wt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,B=!0,W=!0){let X=0;if(A){let z=!1;if(C!==null){let ht=C.texture.format;z=ht===su||ht===iu||ht===nu}if(z){let ht=C.texture.type,_t=ht===_i||ht===us||ht===so||ht===ir||ht===Qh||ht===tu,Ct=Ht.getClearColor(),It=Ht.getClearAlpha(),Vt=Ct.r,Xt=Ct.g,Pt=Ct.b;_t?(m[0]=Vt,m[1]=Xt,m[2]=Pt,m[3]=It,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Vt,x[1]=Xt,x[2]=Pt,x[3]=It,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}B&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),$t.dispose(),vt.dispose(),b.dispose(),k.dispose(),Q.dispose(),de.dispose(),F.dispose(),Rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",rd),q.removeEventListener("sessionend",od),es.stop()};function et(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=zt.autoReset,B=Et.enabled,W=Et.autoUpdate,X=Et.needsUpdate,z=Et.type;gt(),zt.autoReset=A,Et.enabled=B,Et.autoUpdate=W,Et.needsUpdate=X,Et.type=z}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){let B=A.target;B.removeEventListener("dispose",Wt),Ae(B)}function Ae(A){Xe(A),vt.remove(A)}function Xe(A){let B=vt.get(A).programs;B!==void 0&&(B.forEach(function(W){Rt.releaseProgram(W)}),A.isShaderMaterial&&Rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,W,X,z,ht){B===null&&(B=Jt);let _t=z.isMesh&&z.matrixWorld.determinant()<0,Ct=Jp(A,B,W,X,z);ft.setMaterial(X,_t);let It=W.index,Vt=1;if(X.wireframe===!0){if(It=it.getWireframeAttribute(W),It===void 0)return;Vt=2}let Xt=W.drawRange,Pt=W.attributes.position,ee=Xt.start*Vt,fe=(Xt.start+Xt.count)*Vt;ht!==null&&(ee=Math.max(ee,ht.start*Vt),fe=Math.min(fe,(ht.start+ht.count)*Vt)),It!==null?(ee=Math.max(ee,0),fe=Math.min(fe,It.count)):Pt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Pt.count));let xe=fe-ee;if(xe<0||xe===1/0)return;de.setup(z,X,Ct,W,It);let nn,ie=Tt;if(It!==null&&(nn=j.get(It),ie=jt,ie.setIndex(nn)),z.isMesh)X.wireframe===!0?(ft.setLineWidth(X.wireframeLinewidth*lt()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(z.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),ft.setLineWidth(Dt*lt()),z.isLineSegments?ie.setMode(D.LINES):z.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else z.isPoints?ie.setMode(D.POINTS):z.isSprite&&ie.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ie.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Dt=z._multiDrawStarts,ri=z._multiDrawCounts,se=z._multiDrawCount,Ln=It?j.get(It).bytesPerElement:1,Ts=vt.get(X).currentProgram.getUniforms();for(let dn=0;dn<se;dn++)Ts.setValue(D,"_gl_DrawID",dn),ie.render(Dt[dn]/Ln,ri[dn])}else if(z.isInstancedMesh)ie.renderInstances(ee,xe,z.count);else if(W.isInstancedBufferGeometry){let Dt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ri=Math.min(W.instanceCount,Dt);ie.renderInstances(ee,xe,ri)}else ie.render(ee,xe)};function ae(A,B,W){A.transparent===!0&&A.side===pe&&A.forceSinglePass===!1?(A.side=Re,A.needsUpdate=!0,Oo(A,B,W),A.side=Kn,A.needsUpdate=!0,Oo(A,B,W),A.side=pe):Oo(A,B,W)}this.compile=function(A,B,W=null){W===null&&(W=A),p=$t.get(W),p.init(B),M.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let X=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ht=z.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){let Ct=ht[_t];ae(Ct,W,z),X.add(Ct)}else ae(ht,W,z),X.add(ht)}),M.pop(),p=null,X},this.compileAsync=function(A,B,W=null){let X=this.compile(A,B,W);return new Promise(z=>{function ht(){if(X.forEach(function(_t){vt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){z(A);return}setTimeout(ht,10)}ot.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Pn=null;function si(A){Pn&&Pn(A)}function rd(){es.stop()}function od(){es.start()}let es=new tp;es.setAnimationLoop(si),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(A){Pn=A,q.setAnimationLoop(A),A===null?es.stop():es.start()},q.addEventListener("sessionstart",rd),q.addEventListener("sessionend",od),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,C),p=$t.get(A,M.length),p.init(B),M.push(p),At.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(At),ct=this.localClippingEnabled,tt=at.init(this.clippingPlanes,ct),g=Mt.get(A,v.length),g.init(),v.push(g),q.enabled===!0&&q.isPresenting===!0){let ht=_.xr.getDepthSensingMesh();ht!==null&&zc(ht,B,-1/0,_.sortObjects)}zc(A,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,G),$=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$&&Ht.addToRenderList(g,A),this.info.render.frame++,tt===!0&&at.beginShadows();let W=p.state.shadowsArray;Et.render(W,A,B),tt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,z=g.transmissive;if(p.setupLights(),B.isArrayCamera){let ht=B.cameras;if(z.length>0)for(let _t=0,Ct=ht.length;_t<Ct;_t++){let It=ht[_t];cd(X,z,A,It)}$&&Ht.render(A);for(let _t=0,Ct=ht.length;_t<Ct;_t++){let It=ht[_t];ad(g,A,It,It.viewport)}}else z.length>0&&cd(X,z,A,B),$&&Ht.render(A),ad(g,A,B);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,B),de.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],tt===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function zc(A,B,W,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);let _t=Q.update(A),Ct=A.material;Ct.visible&&g.push(A,_t,Ct,W,Ot.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let _t=Q.update(A),Ct=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ct)){let It=_t.groups;for(let Vt=0,Xt=It.length;Vt<Xt;Vt++){let Pt=It[Vt],ee=Ct[Pt.materialIndex];ee&&ee.visible&&g.push(A,_t,ee,W,Ot.z,Pt)}}else Ct.visible&&g.push(A,_t,Ct,W,Ot.z,null)}}let ht=A.children;for(let _t=0,Ct=ht.length;_t<Ct;_t++)zc(ht[_t],B,W,X)}function ad(A,B,W,X){let z=A.opaque,ht=A.transmissive,_t=A.transparent;p.setupLightsView(W),tt===!0&&at.setGlobalState(_.clippingPlanes,W),X&&ft.viewport(T.copy(X)),z.length>0&&Fo(z,B,W),ht.length>0&&Fo(ht,B,W),_t.length>0&&Fo(_t,B,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function cd(A,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new De(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ge:_i,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let ht=p.state.transmissionRenderTarget[X.id],_t=X.viewport||T;ht.setSize(_t.z,_t.w);let Ct=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(N),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),$&&Ht.render(W);let It=_.toneMapping;_.toneMapping=Oi;let Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),tt===!0&&at.setGlobalState(_.clippingPlanes,X),Fo(A,W,X),I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pt=0,ee=B.length;Pt<ee;Pt++){let fe=B[Pt],xe=fe.object,nn=fe.geometry,ie=fe.material,Dt=fe.group;if(ie.side===pe&&xe.layers.test(X.layers)){let ri=ie.side;ie.side=Re,ie.needsUpdate=!0,ld(xe,W,X,nn,ie,Dt),ie.side=ri,ie.needsUpdate=!0,Xt=!0}}Xt===!0&&(I.updateMultisampleRenderTarget(ht),I.updateRenderTargetMipmap(ht))}_.setRenderTarget(Ct),_.setClearColor(N,H),Vt!==void 0&&(X.viewport=Vt),_.toneMapping=It}function Fo(A,B,W){let X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ht=A.length;z<ht;z++){let _t=A[z],Ct=_t.object,It=_t.geometry,Vt=X===null?_t.material:X,Xt=_t.group;Ct.layers.test(W.layers)&&ld(Ct,B,W,It,Vt,Xt)}}function ld(A,B,W,X,z,ht){A.onBeforeRender(_,B,W,X,z,ht),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(_,B,W,X,A,ht),z.transparent===!0&&z.side===pe&&z.forceSinglePass===!1?(z.side=Re,z.needsUpdate=!0,_.renderBufferDirect(W,B,X,z,A,ht),z.side=Kn,z.needsUpdate=!0,_.renderBufferDirect(W,B,X,z,A,ht),z.side=pe):_.renderBufferDirect(W,B,X,z,A,ht),A.onAfterRender(_,B,W,X,z,ht)}function Oo(A,B,W){B.isScene!==!0&&(B=Jt);let X=vt.get(A),z=p.state.lights,ht=p.state.shadowsArray,_t=z.state.version,Ct=Rt.getParameters(A,z.state,ht,B,W),It=Rt.getProgramCacheKey(Ct),Vt=X.programs;X.environment=A.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(A.isMeshStandardMaterial?k:b).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",Wt),Vt=new Map,X.programs=Vt);let Xt=Vt.get(It);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===_t)return ud(A,Ct),Xt}else Ct.uniforms=Rt.getUniforms(A),A.onBeforeCompile(Ct,_),Xt=Rt.acquireProgram(Ct,It),Vt.set(It,Xt),X.uniforms=Ct.uniforms;let Pt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=at.uniform),ud(A,Ct),X.needsLights=Qp(A),X.lightsStateVersion=_t,X.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function hd(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ud(A,B){let W=vt.get(A);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Jp(A,B,W,X,z){B.isScene!==!0&&(B=Jt),I.resetTextureUnits();let ht=B.fog,_t=X.isMeshStandardMaterial?B.environment:null,Ct=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$e,It=(X.isMeshStandardMaterial?k:b).get(X.envMap||_t),Vt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color,xe=Oi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xe=_.toneMapping);let nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=nn!==void 0?nn.length:0,Dt=vt.get(X),ri=p.state.lights;if(tt===!0&&(ct===!0||A!==y)){let xn=A===y&&X.id===S;at.setState(X,A,xn)}let se=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ri.state.version||Dt.outputColorSpace!==Ct||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==It||X.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==Xt||Dt.morphTargets!==Pt||Dt.morphNormals!==ee||Dt.morphColors!==fe||Dt.toneMapping!==xe||Dt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Dt.__version=X.version);let Ln=Dt.currentProgram;se===!0&&(Ln=Oo(X,B,z));let Ts=!1,dn=!1,Fr=!1,_e=Ln.getUniforms(),Wn=Dt.uniforms;if(ft.useProgram(Ln.program)&&(Ts=!0,dn=!0,Fr=!0),X.id!==S&&(S=X.id,dn=!0),Ts||y!==A){ft.buffers.depth.getReversed()?(rt.copy(A.projectionMatrix),n0(rt),i0(rt),_e.setValue(D,"projectionMatrix",rt)):_e.setValue(D,"projectionMatrix",A.projectionMatrix),_e.setValue(D,"viewMatrix",A.matrixWorldInverse);let Ai=_e.map.cameraPosition;Ai!==void 0&&Ai.setValue(D,bt.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,dn=!0,Fr=!0)}if(z.isSkinnedMesh){_e.setOptional(D,z,"bindMatrix"),_e.setOptional(D,z,"bindMatrixInverse");let xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),_e.setValue(D,"boneTexture",xn.boneTexture,I))}z.isBatchedMesh&&(_e.setOptional(D,z,"batchingTexture"),_e.setValue(D,"batchingTexture",z._matricesTexture,I),_e.setOptional(D,z,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",z._indirectTexture,I),_e.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",z._colorsTexture,I));let Or=W.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&kt.update(z,W,Ln),(dn||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,_e.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Wn.envMap.value=It,Wn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Wn.envMapIntensity.value=B.environmentIntensity),dn&&(_e.setValue(D,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&jp(Wn,Fr),ht&&X.fog===!0&&mt.refreshFogUniforms(Wn,ht),mt.refreshMaterialUniforms(Wn,X,V,J,p.state.transmissionRenderTarget[A.id]),Qs.upload(D,hd(Dt),Wn,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qs.upload(D,hd(Dt),Wn,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(D,"center",z.center),_e.setValue(D,"modelViewMatrix",z.modelViewMatrix),_e.setValue(D,"normalMatrix",z.normalMatrix),_e.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let xn=X.uniformsGroups;for(let Ai=0,Ri=xn.length;Ai<Ri;Ai++){let dd=xn[Ai];F.update(dd,Ln),F.bind(dd,Ln)}}return Ln}function jp(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Qp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,W){vt.get(A.texture).__webglTexture=B,vt.get(A.depthTexture).__webglTexture=W;let X=vt.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let W=vt.get(A);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,W=0){C=A,E=B,R=W;let X=!0,z=null,ht=!1,_t=!1;if(A){let It=vt.get(A);if(It.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(It.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(It.__hasExternalTextures)I.rebindTextures(A,vt.get(A.texture).__webglTexture,vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(It.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}let Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(_t=!0);let Xt=vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?z=Xt[B][W]:z=Xt[B],ht=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?z=vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?z=Xt[W]:z=Xt,T.copy(A.viewport),L.copy(A.scissor),U=A.scissorTest}else T.copy(Z).multiplyScalar(V).floor(),L.copy(dt).multiplyScalar(V).floor(),U=wt;if(ft.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&ft.drawBuffers(A,z),ft.viewport(T),ft.scissor(L),ft.setScissorTest(U),ht){let It=vt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,W)}else if(_t){let It=vt.get(A.texture),Vt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,W||0,Vt)}S=-1},this.readRenderTargetPixels=function(A,B,W,X,z,ht,_t){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let It=A.texture,Vt=It.format,Xt=It.type;if(!St.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&W>=0&&W<=A.height-z&&D.readPixels(B,W,X,z,qt.convert(Vt),qt.convert(Xt),ht)}finally{let It=C!==null?vt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,B,W,X,z,ht,_t){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){let It=A.texture,Vt=It.format,Xt=It.type;if(!St.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-X&&W>=0&&W<=A.height-z){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);let Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(B,W,X,z,qt.convert(Vt),qt.convert(Xt),0);let ee=C!==null?vt.get(C).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,ee);let fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await e0(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Pt),D.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,W=0){A.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let X=Math.pow(2,-W),z=Math.floor(A.image.width*X),ht=Math.floor(A.image.height*X),_t=B!==null?B.x:0,Ct=B!==null?B.y:0;I.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,_t,Ct,z,ht),ft.unbindTexture()},this.copyTextureToTexture=function(A,B,W=null,X=null,z=0){A.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let ht,_t,Ct,It,Vt,Xt,Pt,ee,fe,xe=A.isCompressedTexture?A.mipmaps[z]:A.image;W!==null?(ht=W.max.x-W.min.x,_t=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Vt=W.min.y,Xt=W.isBox3?W.min.z:0):(ht=xe.width,_t=xe.height,Ct=xe.depth||1,It=0,Vt=0,Xt=0),X!==null?(Pt=X.x,ee=X.y,fe=X.z):(Pt=0,ee=0,fe=0);let nn=qt.convert(B.format),ie=qt.convert(B.type),Dt;B.isData3DTexture?(I.setTexture3D(B,0),Dt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),Dt=D.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),Dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let ri=D.getParameter(D.UNPACK_ROW_LENGTH),se=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ts=D.getParameter(D.UNPACK_SKIP_ROWS),dn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let Fr=A.isDataArrayTexture||A.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Wn=vt.get(A),Or=vt.get(B),xn=vt.get(Wn.__renderTarget),Ai=vt.get(Or.__renderTarget);ft.bindFramebuffer(D.READ_FRAMEBUFFER,xn.__webglFramebuffer),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Ct;Ri++)Fr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(A).__webglTexture,z,Xt+Ri),A.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,z,fe+Ri),D.blitFramebuffer(It,Vt,ht,_t,Pt,ee,ht,_t,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(Dt,z,Pt,ee,fe+Ri,It,Vt,ht,_t):D.copyTexSubImage2D(Dt,z,Pt,ee,fe+Ri,It,Vt,ht,_t);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Dt,z,Pt,ee,fe,ht,_t,Ct,nn,ie,xe.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Dt,z,Pt,ee,fe,ht,_t,Ct,nn,xe.data):D.texSubImage3D(Dt,z,Pt,ee,fe,ht,_t,Ct,nn,ie,xe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Pt,ee,ht,_t,nn,ie,xe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Pt,ee,xe.width,xe.height,nn,xe.data):D.texSubImage2D(D.TEXTURE_2D,z,Pt,ee,ht,_t,nn,ie,xe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ri),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ts),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dn),z===0&&B.generateMipmaps&&D.generateMipmap(Dt),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,B,W=null,X=null,z=0){return A.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,W,X,z)},this.initRenderTarget=function(A){vt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,ft.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Pa=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new nt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vi=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},dr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new w,ds=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fs=class extends on{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,Vr=new w,ks=new w,Vs=new w,Gs=new K,Gr=new K,rp=new Nt,sa=new w,Wr=new w,ra=new w,uf=new K,fl=new K,df=new K,fr=class extends ve{constructor(t=new fs){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dr(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new ds(n,3,0,!1)),Hs.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Vs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;oa(sa.set(-.5,-.5,0),Vs,o,ks,i,r),oa(Wr.set(.5,-.5,0),Vs,o,ks,i,r),oa(ra.set(.5,.5,0),Vs,o,ks,i,r),uf.set(0,0),fl.set(1,0),df.set(1,1);let a=t.ray.intersectTriangle(sa,Wr,ra,!1,Vr);if(a===null&&(oa(Wr.set(-.5,.5,0),Vs,o,ks,i,r),fl.set(0,1),a=t.ray.intersectTriangle(sa,ra,Wr,!1,Vr),a===null))return;let c=t.ray.origin.distanceTo(Vr);c<t.near||c>t.far||e.push({distance:c,point:Vr.clone(),uv:Ni.getInterpolation(Vr,sa,Wr,ra,uf,fl,df,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function oa(s,t,e,n,i,r){Gs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Gr.x=r*Gs.x-i*Gs.y,Gr.y=i*Gs.x+r*Gs.y):Gr.copy(Gs),s.copy(t),s.x+=Gr.x,s.y+=Gr.y,s.applyMatrix4(rp)}var ff=new w,pf=new Qt,mf=new Qt,Qy=new w,gf=new Nt,aa=new w,pl=new mn,xf=new Nt,ml=new cr,La=class extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gd,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pl.copy(this.boundingSphere),pl.applyMatrix4(i),t.ray.intersectsSphere(pl)!==!1&&(xf.copy(i).invert(),ml.copy(t.ray).applyMatrix4(xf),!(this.boundingBox!==null&&ml.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ml)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;pf.fromBufferAttribute(i.attributes.skinIndex,t),mf.fromBufferAttribute(i.attributes.skinWeight,t),ff.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=mf.getComponent(r);if(o!==0){let a=pf.getComponent(r);gf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Qy.copy(ff).applyMatrix4(gf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},ao=class extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}},pr=class extends He{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ke,h=Ke,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_f=new Nt,tv=new Nt,Da=class s{constructor(t=[],e=[]){this.uuid=yn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:tv;_f.multiplyMatrices(a,e[r]),_f.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new pr(e,t,t,sn,Bn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ao),this.bones.push(o),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},vn=class extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ws=new Nt,yf=new Nt,ca=[],vf=new rn,ev=new Nt,Xr=new ut,qr=new mn,Jn=class extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ev)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),vf.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(vf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),qr.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),yf.multiplyMatrices(n,Ws),Xr.matrixWorld=yf,Xr.raycast(t,ca);for(let o=0,a=ca.length;o<a;o++){let c=ca[o];c.instanceId=r,c.object=this,e.push(c)}ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(i*this.count),i,this.count,eu,Bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var co=class extends on{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new w,Na=new w,Mf=new Nt,Yr=new cr,la=new mn,gl=new w,Sf=new w,mr=class extends ve{constructor(t=new le,e=new co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ua.fromBufferAttribute(e,i-1),Na.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(i),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;Mf.copy(i).invert(),Yr.copy(t.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),v=h.getX(x+1),M=ha(this,t,Yr,c,p,v);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=ha(this,t,Yr,c,x,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=ha(this,t,Yr,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ha(this,t,Yr,c,m-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ha(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Ua.fromBufferAttribute(o,i),Na.fromBufferAttribute(o,r),e.distanceSqToSegment(Ua,Na,gl,Sf)>n)return;gl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(gl);if(!(c<t.near||c>t.far))return{distance:c,point:Sf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var bf=new w,Ef=new w,Fa=class extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)bf.fromBufferAttribute(e,i),Ef.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bf.distanceTo(Ef);t.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oa=class extends mr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ps=class extends on{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tf=new Nt,Sh=new cr,ua=new mn,da=new w,gr=class extends ve{constructor(t=new le,e=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Tf.copy(i).invert(),Sh.copy(t.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);da.fromBufferAttribute(u,g),wf(da,g,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)da.fromBufferAttribute(u,m),wf(da,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wf(s,t,e,n,i,r,o){let a=Sh.distanceSqToPoint(s);if(a<e){let c=new w;Sh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ms=class extends He{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new K:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,i=[],r=[],o=[],a=new w,c=new Nt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Le(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lo=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new K){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bh=class extends lo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var fa=new w,xl=new cu,_l=new cu,yl=new cu,xr=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(fa.subVectors(i[0],i[1]).add(i[0]),l=fa);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),xl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),_l.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),yl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),_l.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xl.calc(c),_l.calc(c),yl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Af(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function nv(s,t){let e=1-s;return e*e*t}function iv(s,t){return 2*(1-s)*s*t}function sv(s,t){return s*s*t}function eo(s,t,e,n){return nv(s,t)+iv(s,e)+sv(s,n)}function rv(s,t){let e=1-s;return e*e*e*t}function ov(s,t){let e=1-s;return 3*e*e*s*t}function av(s,t){return 3*(1-s)*s*s*t}function cv(s,t){return s*s*s*t}function no(s,t,e,n,i){return rv(s,t)+ov(s,e)+av(s,n)+cv(s,i)}var Ba=class extends Mn{constructor(t=new K,e=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new K){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(no(t,i.x,r.x,o.x,a.x),no(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eh=class extends Mn{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(no(t,i.x,r.x,o.x,a.x),no(t,i.y,r.y,o.y,a.y),no(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Mn{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Th=class extends Mn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Mn{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(eo(t,i.x,r.x,o.x),eo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wh=class extends Mn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(eo(t,i.x,r.x,o.x),eo(t,i.y,r.y,o.y),eo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vi=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Af(a,c.x,l.x,h.x,u.x),Af(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new K().fromArray(i))}return this}},Ah=Object.freeze({__proto__:null,ArcCurve:bh,CatmullRomCurve3:xr,CubicBezierCurve:Ba,CubicBezierCurve3:Eh,EllipseCurve:lo,LineCurve:za,LineCurve3:Th,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:wh,SplineCurve:Vi}),Rh=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ah[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ah[i.type]().fromJSON(i))}return this}},gs=class extends Rh{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new za(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ha(this.currentPoint.clone(),new K(t,e),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ba(this.currentPoint.clone(),new K(t,e),new K(n,i),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new lo(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Gi=class s extends le{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Le(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new w,d=new K,f=new w,m=new w,x=new w,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let M=n+v*h*i,_=Math.sin(M),P=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*_,u.y=t[E].y,u.z=t[E].x*P,o.push(u.x,u.y,u.z),d.x=v/e,d.y=E/(t.length-1),a.push(d.x,d.y);let R=c[3*E+0]*_,C=c[3*E+1],S=c[3*E+0]*P;l.push(R,C,S)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let _=M+v*t.length,P=_,E=_+t.length,R=_+t.length+1,C=_+1;r.push(P,E,C),r.push(R,C,E)}this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ka=class s extends Gi{constructor(t=1,e=1,n=4,i=8){let r=new gs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Hn=class s extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new w,h=new K;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},an=class s extends le{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function v(){let _=new w,P=new w,E=0,R=(e-t)/n;for(let C=0;C<=r;C++){let S=[],y=C/r,T=y*(e-t)+t;for(let L=0;L<=i;L++){let U=L/i,N=U*c+a,H=Math.sin(N),O=Math.cos(N);P.x=T*H,P.y=-y*n+g,P.z=T*O,u.push(P.x,P.y,P.z),_.set(H,R,O).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-y),S.push(m++)}x.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){let y=x[S][C],T=x[S+1][C],L=x[S+1][C+1],U=x[S][C+1];(t>0||S!==0)&&(h.push(y,T,U),E+=3),(e>0||S!==r-1)&&(h.push(T,L,U),E+=3)}l.addGroup(p,E,0),p+=E}function M(_){let P=m,E=new K,R=new w,C=0,S=_===!0?t:e,y=_===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;let T=m;for(let L=0;L<=i;L++){let N=L/i*c+a,H=Math.cos(N),O=Math.sin(N);R.x=S*O,R.y=g*y,R.z=S*H,u.push(R.x,R.y,R.z),d.push(0,y,0),E.x=H*.5+.5,E.y=O*.5*y+.5,f.push(E.x,E.y),m++}for(let L=0;L<i;L++){let U=P+L,N=T+L;_===!0?h.push(N,N+1,U):h.push(N+1,N,U),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ch=class s extends le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new w,_=new w,P=new w;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],_),f(e[E+2],P),c(M,_,P,v)}function c(v,M,_,P){let E=P+1,R=[];for(let C=0;C<=E;C++){R[C]=[];let S=v.clone().lerp(_,C/E),y=M.clone().lerp(_,C/E),T=E-C;for(let L=0;L<=T;L++)L===0&&C===E?R[C][L]=S:R[C][L]=S.clone().lerp(y,L/T)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let y=Math.floor(S/2);S%2===0?(d(R[C][y+1]),d(R[C+1][y]),d(R[C][y])):(d(R[C][y+1]),d(R[C+1][y+1]),d(R[C+1][y]))}}function l(v){let M=new w;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let v=new w;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=g(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(_,1-P)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],_=o[v+2],P=o[v+4],E=Math.max(M,_,P),R=Math.min(M,_,P);E>.9&&R<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){let _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function m(){let v=new w,M=new w,_=new w,P=new w,E=new K,R=new K,C=new K;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),P.copy(v).add(M).add(_).divideScalar(3);let T=g(P);x(E,y+0,v,T),x(R,y+2,M,T),x(C,y+4,_,T)}}function x(v,M,_,P){P<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=P/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var jn=class extends gs{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new gs().fromJSON(i))}return this}},lv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=op(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=pv(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ho(r,o,e,a,c,f,0),o}};function op(s,t,e,n,i){let r,o;if(i===Tv(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Rf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rf(r,s[r],s[r+1],o);return o&&sc(o,o.next)&&(fo(o),o=o.next),o}function xs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(sc(e,e.next)||Ee(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(s,t,e,n,i,r,o){if(!s)return;!o&&r&&yv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?uv(s,n,i,r):hv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),fo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=dv(xs(s),t,e),ho(s,t,e,n,i,r,2)):o===2&&fv(s,t,e,n,i,r):ho(xs(s),t,e,n,i,r,1);break}}}function hv(s){let t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ks(i,a,r,c,o,l,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function uv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ee(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ih(f,m,t,e,n),v=Ih(x,g,t,e,n),M=s.prevZ,_=s.nextZ;for(;M&&M.z>=p&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&Ks(a,h,c,u,l,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ks(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&Ks(a,h,c,u,l,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Ks(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function dv(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!sc(i,r)&&ap(i,n,n.next,r)&&uo(i,r)&&uo(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fo(n),fo(n.next),n=s=r),n=n.next}while(n!==s);return xs(n)}function fv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sv(o,a)){let c=cp(o,a);o=xs(o,o.next),c=xs(c,c.next),ho(o,t,e,n,i,r,0),ho(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function pv(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=op(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Mv(l));for(i.sort(mv),r=0;r<i.length;r++)e=gv(i[r],e);return e}function mv(s,t){return s.x-t.x}function gv(s,t){let e=xv(s,t);if(!e)return t;let n=cp(e,s);return xs(n,n.next),xs(e,e.next)}function xv(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Ks(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),uo(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&_v(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function _v(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function yv(s,t,e,n){let i=s;do i.z===0&&(i.z=Ih(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,vv(i)}function vv(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Ih(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Mv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ks(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Sv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!bv(s,t)&&(uo(s,t)&&uo(t,s)&&Ev(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||sc(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function sc(s,t){return s.x===t.x&&s.y===t.y}function ap(s,t,e,n){let i=ma(Ee(s,t,e)),r=ma(Ee(s,t,n)),o=ma(Ee(e,n,s)),a=ma(Ee(e,n,t));return!!(i!==r&&o!==a||i===0&&pa(s,e,t)||r===0&&pa(s,n,t)||o===0&&pa(e,s,n)||a===0&&pa(e,t,n))}function pa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ma(s){return s>0?1:s<0?-1:0}function bv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function uo(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Ev(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function cp(s,t){let e=new Ph(s.i,s.x,s.y),n=new Ph(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rf(s,t,e,n){let i=new Ph(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ph(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Bi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Cf(t),If(n,t);let o=t.length;e.forEach(Cf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,If(n,e[c]);let a=lv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function If(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Va=class s extends le{constructor(t=new jn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Bt(i,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:wv,M,_=!1,P,E,R,C;p&&(M=p.getSpacedPoints(h),_=!0,d=!1,P=p.computeFrenetFrames(h,!1),E=new w,R=new w,C=new w),d||(g=0,f=0,m=0,x=0);let S=a.extractPoints(l),y=S.shape,T=S.holes;if(!Bi.isClockWise(y)){y=y.reverse();for(let $=0,lt=T.length;$<lt;$++){let D=T[$];Bi.isClockWise(D)&&(T[$]=D.reverse())}}let U=Bi.triangulateShape(y,T),N=y;for(let $=0,lt=T.length;$<lt;$++){let D=T[$];y=y.concat(D)}function H($,lt,D){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(lt,D)}let O=y.length,J=U.length;function V($,lt,D){let Lt,ot,St,ft=$.x-lt.x,zt=$.y-lt.y,vt=D.x-$.x,I=D.y-$.y,b=ft*ft+zt*zt,k=ft*I-zt*vt;if(Math.abs(k)>Number.EPSILON){let j=Math.sqrt(b),it=Math.sqrt(vt*vt+I*I),Q=lt.x-zt/j,Rt=lt.y+ft/j,mt=D.x-I/it,Mt=D.y+vt/it,$t=((mt-Q)*I-(Mt-Rt)*vt)/(ft*I-zt*vt);Lt=Q+ft*$t-$.x,ot=Rt+zt*$t-$.y;let at=Lt*Lt+ot*ot;if(at<=2)return new K(Lt,ot);St=Math.sqrt(at/2)}else{let j=!1;ft>Number.EPSILON?vt>Number.EPSILON&&(j=!0):ft<-Number.EPSILON?vt<-Number.EPSILON&&(j=!0):Math.sign(zt)===Math.sign(I)&&(j=!0),j?(Lt=-zt,ot=ft,St=Math.sqrt(b)):(Lt=ft,ot=zt,St=Math.sqrt(b/2))}return new K(Lt/St,ot/St)}let st=[];for(let $=0,lt=N.length,D=lt-1,Lt=$+1;$<lt;$++,D++,Lt++)D===lt&&(D=0),Lt===lt&&(Lt=0),st[$]=V(N[$],N[D],N[Lt]);let G=[],Z,dt=st.concat();for(let $=0,lt=T.length;$<lt;$++){let D=T[$];Z=[];for(let Lt=0,ot=D.length,St=ot-1,ft=Lt+1;Lt<ot;Lt++,St++,ft++)St===ot&&(St=0),ft===ot&&(ft=0),Z[Lt]=V(D[Lt],D[St],D[ft]);G.push(Z),dt=dt.concat(Z)}for(let $=0;$<g;$++){let lt=$/g,D=f*Math.cos(lt*Math.PI/2),Lt=m*Math.sin(lt*Math.PI/2)+x;for(let ot=0,St=N.length;ot<St;ot++){let ft=H(N[ot],st[ot],Lt);rt(ft.x,ft.y,-D)}for(let ot=0,St=T.length;ot<St;ot++){let ft=T[ot];Z=G[ot];for(let zt=0,vt=ft.length;zt<vt;zt++){let I=H(ft[zt],Z[zt],Lt);rt(I.x,I.y,-D)}}}let wt=m+x;for(let $=0;$<O;$++){let lt=d?H(y[$],dt[$],wt):y[$];_?(R.copy(P.normals[0]).multiplyScalar(lt.x),E.copy(P.binormals[0]).multiplyScalar(lt.y),C.copy(M[0]).add(R).add(E),rt(C.x,C.y,C.z)):rt(lt.x,lt.y,0)}for(let $=1;$<=h;$++)for(let lt=0;lt<O;lt++){let D=d?H(y[lt],dt[lt],wt):y[lt];_?(R.copy(P.normals[$]).multiplyScalar(D.x),E.copy(P.binormals[$]).multiplyScalar(D.y),C.copy(M[$]).add(R).add(E),rt(C.x,C.y,C.z)):rt(D.x,D.y,u/h*$)}for(let $=g-1;$>=0;$--){let lt=$/g,D=f*Math.cos(lt*Math.PI/2),Lt=m*Math.sin(lt*Math.PI/2)+x;for(let ot=0,St=N.length;ot<St;ot++){let ft=H(N[ot],st[ot],Lt);rt(ft.x,ft.y,u+D)}for(let ot=0,St=T.length;ot<St;ot++){let ft=T[ot];Z=G[ot];for(let zt=0,vt=ft.length;zt<vt;zt++){let I=H(ft[zt],Z[zt],Lt);_?rt(I.x,I.y+M[h-1].y,M[h-1].x+D):rt(I.x,I.y,u+D)}}}Y(),tt();function Y(){let $=i.length/3;if(d){let lt=0,D=O*lt;for(let Lt=0;Lt<J;Lt++){let ot=U[Lt];At(ot[2]+D,ot[1]+D,ot[0]+D)}lt=h+g*2,D=O*lt;for(let Lt=0;Lt<J;Lt++){let ot=U[Lt];At(ot[0]+D,ot[1]+D,ot[2]+D)}}else{for(let lt=0;lt<J;lt++){let D=U[lt];At(D[2],D[1],D[0])}for(let lt=0;lt<J;lt++){let D=U[lt];At(D[0]+O*h,D[1]+O*h,D[2]+O*h)}}n.addGroup($,i.length/3-$,0)}function tt(){let $=i.length/3,lt=0;ct(N,lt),lt+=N.length;for(let D=0,Lt=T.length;D<Lt;D++){let ot=T[D];ct(ot,lt),lt+=ot.length}n.addGroup($,i.length/3-$,1)}function ct($,lt){let D=$.length;for(;--D>=0;){let Lt=D,ot=D-1;ot<0&&(ot=$.length-1);for(let St=0,ft=h+g*2;St<ft;St++){let zt=O*St,vt=O*(St+1),I=lt+Lt+zt,b=lt+ot+zt,k=lt+ot+vt,j=lt+Lt+vt;bt(I,b,k,j)}}}function rt($,lt,D){c.push($),c.push(lt),c.push(D)}function At($,lt,D){Ot($),Ot(lt),Ot(D);let Lt=i.length/3,ot=v.generateTopUV(n,i,Lt-3,Lt-2,Lt-1);Jt(ot[0]),Jt(ot[1]),Jt(ot[2])}function bt($,lt,D,Lt){Ot($),Ot(lt),Ot(Lt),Ot(lt),Ot(D),Ot(Lt);let ot=i.length/3,St=v.generateSideWallUV(n,i,ot-6,ot-3,ot-2,ot-1);Jt(St[0]),Jt(St[1]),Jt(St[3]),Jt(St[1]),Jt(St[2]),Jt(St[3])}function Ot($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function Jt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Av(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ah[i.type]().fromJSON(i)),new s(n,t.options)}},wv={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new K(r,o),new K(a,c),new K(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-u),new K(d,1-m),new K(x,1-p)]:[new K(a,1-c),new K(h,1-u),new K(f,1-m),new K(g,1-p)]}};function Av(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qn=class s extends Ch{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ga=class s extends le{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new w,m=new K;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,M=v,_=v+n+1,P=v+n+2,E=v+1;a.push(M,_,E),a.push(_,P,E)}}this.setIndex(a),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wi=class s extends le{constructor(t=new jn([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Bt(i,3)),this.setAttribute("normal",new Bt(r,3)),this.setAttribute("uv",new Bt(o,2));function l(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;Bi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let v=m[g];Bi.isClockWise(v)===!0&&(m[g]=v.reverse())}let x=Bi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let v=m[g];f=f.concat(v)}for(let g=0,p=f.length;g<p;g++){let v=f[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=x.length;g<p;g++){let v=x[g],M=v[0]+u,_=v[1]+u,P=v[2]+u;n.push(M,_,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Rv(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function Rv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ge=class s extends le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],M=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+_,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],_=h[p][v],P=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(M,_,E),(p!==n-1||c<Math.PI)&&f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var kn=class s extends le{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wa=class extends ye{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ft=class extends on{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Se=class extends Ft{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ga(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Iv(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Pf(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function lp(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Xi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lh=class extends Xi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ys:r=t,a=2*e-n;break;case Sa:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ys:o=t,c=2*n-e;break;case Sa:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[l+P]+M*o[c+P]+_*o[u+P];return r}},Xa=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Dh=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case or:e=this.InterpolantFactoryMethodLinear;break;case Hc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Cv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=or;var qi=class extends Sn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=rr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Sn{};qa.prototype.ValueTypeName="color";var Mi=class extends Sn{};Mi.prototype.ValueTypeName="number";var Uh=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)ze.slerpFlat(r,0,o,l-a,o,l,c);return r}},Si=class extends Sn{InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=rr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends Sn{};bi.prototype.ValueTypeName="vector";var _r=class{constructor(t="",e=-1,n=[],i=ru){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Lv(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Iv(c);c=Pf(c,1,h),l=Pf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Mi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];lp(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let M=d[m];g.push(M.time),p.push(M.morphTarget===x?1:0)}i.push(new Mi(".morphTargetInfluence["+x+"]",g,p))}c=f.length*o}else{let f=".bones["+e[u].name+"]";n(bi,f+".position",d,"pos",i),n(Si,f+".quaternion",d,"rot",i),n(bi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Pv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return qa;case"quaternion":return Si;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Lv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Pv(s.type);if(s.times===void 0){let e=[],n=[];lp(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Fi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Nh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Dv=new Nh,Ei=class{constructor(t){this.manager=t!==void 0?t:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},Fh=class extends Error{constructor(t,e){super(t),this.response=e}},po=class extends Ei{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Fi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ui[t]!==void 0){ui[t].push({onLoad:e,onProgress:n,onError:i});return}ui[t]=[],ui[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:_})=>{if(M)p.close();else{x+=_.byteLength;let P=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let E=0,R=h.length;E<R;E++){let C=h[E];C.onProgress&&C.onProgress(P)}p.enqueue(_),v()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Fh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Fi.add(t,l);let h=ui[t];delete ui[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ui[t];if(h===void 0)throw this.manager.itemError(t),l;delete ui[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Oh=class extends Ei{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=ro("img");function c(){h(),Fi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Ya=class extends Ei{constructor(t){super(t)}load(t,e,n,i){let r=new He,o=new Oh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},yr=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},vr=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vl=new Nt,Lf=new w,Df=new w,mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Lf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bh=class extends mo{constructor(){super(new Ce(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ar*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Za=class extends yr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Uf=new Nt,Zr=new w,Ml=new w,zh=class extends mo{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zr),Ml.copy(n.position),Ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Uf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},ti=class extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hh=class extends mo{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Hh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ki=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ka=class extends le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var $a=class extends Ei{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Fi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Fi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Fi.add(t,c),r.manager.itemStart(t)}};var Mr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Nf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Nf(){return performance.now()}var kh=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ze.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;ze.multiplyQuaternionsFlat(t,o,t,e,t,n),ze.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},lu="\\[\\]\\.:\\/",Uv=new RegExp("["+lu+"]","g"),hu="[^"+lu+"]",Nv="[^"+lu.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",hu),Ov=/(WCOD+)?/.source.replace("WCOD",Nv),Bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),Hv=new RegExp("^"+Fv+Ov+Bv+zv+"$"),kv=["material","materials","bones","map"],Vh=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uv,"")}static parseTrackName(t){let e=Hv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Vh;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gh=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:qs,endingEnd:qs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Am:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case ru:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===wm;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Em){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ys,i.endingEnd=Ys):(t?i.endingStart=this.zeroSlopeAtStart?Ys:qs:i.endingStart=Sa,e?i.endingEnd=this.zeroSlopeAtEnd?Ys:qs:i.endingEnd=Sa)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},Vv=new Float32Array(1),Ja=class extends yi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;m=new kh(ue.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Xa(new Float32Array(2),new Float32Array(2),1,Vv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?_r.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ru),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Gh(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?_r.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);var rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gv=new Hi(-1,1,1,-1,0,1),uu=class extends le{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},Wv=new uu,$i=class{constructor(t){this._mesh=new ut(Wv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var br=class extends gn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ei.clone(t.uniforms),this.material=new ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $i(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _o=class extends gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},oc=class extends gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ac=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new K);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new br(rc),this.copyPass.material.blending=Zn,this.clock=new Mr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_o!==void 0&&(o instanceof _o?n=!0:o instanceof oc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cc=class extends gn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var hp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Er=class s extends gn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new De(r,o,{type:Ge}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new De(r,o,{type:Ge});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new De(r,o,{type:Ge});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=hp;this.highPassUniforms=ei.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=rc;this.copyUniforms=ei.clone(h.uniforms),this.blendMaterial=new ye({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new nt,this.oldClearAlpha=1,this.basic=new Me,this.fsQuad=new $i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Er.BlurDirectionX=new K(1,0);Er.BlurDirectionY=new K(0,1);var up={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var lc=class extends gn{constructor(){super();let t=up;this.uniforms=ei.clone(t.uniforms),this.material=new Wa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===go&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function ne(s){let t=s>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var oe=(s,t,e)=>Math.min(e,Math.max(t,s)),ke=(s,t,e)=>s+(t-s)*e;function yo(s,t,e){let n=oe((e-s)/(t-s),0,1);return n*n*(3-2*n)}function hc(s,t){let e=Math.imul(s,374761393)+Math.imul(t,668265263)|0;return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967296}function Ji(s,t){let e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),c=hc(e,n),l=hc(e+1,n),h=hc(e,n+1),u=hc(e+1,n+1);return ke(ke(c,l,o),ke(h,u,o),a)*2-1}function _s(s,t,e=4){let n=0,i=.5,r=1,o=0;for(let a=0;a<e;a++)n+=i*Ji(s*r+a*17.3,t*r-a*9.1),o+=i,i*=.5,r*=2.03;return n/o}function dp(s,t,e,n,i,r){let o=i-e,a=r-n,c=o*o+a*a||1,l=oe(((s-e)*o+(t-n)*a)/c,0,1);return Math.hypot(s-(e+o*l),t-(n+a*l))}var Tr=class{constructor(t=16){this.cell=t,this.map=new Map}key(t,e){return t*73856093^e*19349663}insert(t,e,n,i,r){let o=this.cell;for(let a=Math.floor(e/o);a<=Math.floor(i/o);a++)for(let c=Math.floor(n/o);c<=Math.floor(r/o);c++){let l=this.key(a,c),h=this.map.get(l);h||this.map.set(l,h=[]),h.push(t)}}query(t,e,n,i=[]){let r=this.cell;i.length=0;let o=new Set;for(let a=Math.floor((t-n)/r);a<=Math.floor((t+n)/r);a++)for(let c=Math.floor((e-n)/r);c<=Math.floor((e+n)/r);c++){let l=this.map.get(this.key(a,c));if(l)for(let h of l)o.has(h)||(o.add(h),i.push(h))}return i}};var wr=class{constructor(){this.grid=new Tr(16),this.occluders=[],this._q=[]}addBox(t,e,n,i,r=100){let o={type:"box",minX:t,minZ:e,maxX:n,maxZ:i,h:r};return this.grid.insert(o,t,e,n,i),this.occluders.push(o),o}addCircle(t,e,n,i=100,r=!0){let o={type:"circle",x:t,z:e,r:n,h:i};return this.grid.insert(o,t-n,e-n,t+n,e+n),r&&this.occluders.push(o),o}addCanopy(t,e,n,i){this.occluders.push({type:"sphere",x:t,y:e,z:n,r:i})}resolve(t,e){let n=!1;for(let i of this.grid.query(t.x,t.z,e+2,this._q))if(!(t.y>i.h))if(i.type==="circle"){let r=t.x-i.x,o=t.z-i.z,a=Math.hypot(r,o),c=i.r+e;a<c&&a>1e-6&&(t.x=i.x+r/a*c,t.z=i.z+o/a*c,n=!0)}else{let r=Math.max(i.minX,Math.min(t.x,i.maxX)),o=Math.max(i.minZ,Math.min(t.z,i.maxZ)),a=t.x-r,c=t.z-o,l=a*a+c*c;if(l<e*e){if(l>1e-8){let h=Math.sqrt(l);t.x=r+a/h*e,t.z=o+c/h*e}else{let h=[[t.x-i.minX+e,-1,0],[i.maxX-t.x+e,1,0],[t.z-i.minZ+e,0,-1],[i.maxZ-t.z+e,0,1]].sort((u,d)=>u[0]-d[0]);t.x+=h[0][1]*h[0][0],t.z+=h[0][2]*h[0][0]}n=!0}}return n}solidAt(t,e,n,i=.3){for(let r of this.grid.query(t,n,i+1,this._q))if(!(e>r.h)){if(r.type==="circle"){if(Math.hypot(t-r.x,n-r.z)<r.r+i)return!0}else if(t>r.minX-i&&t<r.maxX+i&&n>r.minZ-i&&n<r.maxZ+i)return!0}return!1}rayBlocked(t,e,n=900){for(let i of this.occluders)if(i.type==="sphere"){let r=i.x-t.x,o=i.y-t.y,a=i.z-t.z,c=r*e.x+o*e.y+a*e.z;if(c<0||c>n)continue;let l=r-e.x*c,h=o-e.y*c,u=a-e.z*c;if(l*l+h*h+u*u<i.r*i.r)return!0}else{let r,o,a,c;if(i.type==="circle"?(r=i.x-i.r*.8,o=i.x+i.r*.8,a=i.z-i.r*.8,c=i.z+i.r*.8):{minX:r,maxX:o,minZ:a,maxZ:c}=i,Xv(t,e,r,0,a,o,i.h,c,n))return!0}return!1}};function Xv(s,t,e,n,i,r,o,a,c){let l=0,h=c,u=[[s.x,t.x,e,r],[s.y,t.y,n,o],[s.z,t.z,i,a]];for(let[d,f,m,x]of u)if(Math.abs(f)<1e-9){if(d<m||d>x)return!1}else{let g=(m-d)/f,p=(x-d)/f;if(g>p&&([g,p]=[p,g]),l=Math.max(l,g),h=Math.min(h,p),l>h)return!1}return!0}var te=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[]}get count(){return this.pos.length/3}vert(t,e,n,i,r,o,a,c,l){return this.pos.push(t,e,n),this.nor.push(i,r,o),this.uv.push(a,c),this.col.push(l.r,l.g,l.b),this.count-1}tri(t,e,n){this.idx.push(t,e,n)}quad(t,e,n,i){this.idx.push(t,e,n,t,n,i)}build(){let t=new le;return t.setAttribute("position",new Bt(this.pos,3)),t.setAttribute("normal",new Bt(this.nor,3)),t.setAttribute("uv",new Bt(this.uv,2)),t.setAttribute("color",new Bt(this.col,3)),t.setIndex(this.count>65535?new hr(this.idx,1):new lr(this.idx,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},pp=new nt(1,1,1);function mp(s,t,e,n){let i=e/2,r=n/2;return[[s-i,t+r],[s+i,t+r],[s+i,t-r],[s-i,t-r]]}function vo(s,t,e,n){let i=[];for(let r=0;r<n;r++){let o=-(r/n)*Math.PI*2;i.push([s+Math.cos(o)*e,t+Math.sin(o)*e])}return i}function ys(s,t,e,n,i,r=4){i=Math.min(i,e/2-.01,n/2-.01);let o=e/2-i,a=n/2-i,c=[[o,a,0],[o,-a,-Math.PI/2],[-o,-a,-Math.PI],[-o,a,Math.PI/2]],l=[];for(let[h,u,d]of c)for(let f=0;f<=r;f++){let m=d+f/r*(-Math.PI/2)+Math.PI/2;l.push([s+h+Math.cos(m)*i,t+u+Math.sin(m)*i])}return l}function qv(s){let t=0;for(let e=0;e<s.length;e++){let[n,i]=s[e],[r,o]=s[(e+1)%s.length];t+=n*o-r*i}return t>0?s.slice().reverse():s}function tn(s,t,e,n,i,r={}){t=qv(t);let o=t.length,a=r.tileW??12,c=r.tileH??14.4,l=r.uOff??0,h=r.vOff??0,u=r.yBase??e,d=[];for(let E=0;E<o;E++){let[R,C]=t[E],[S,y]=t[(E+1)%o],T=Math.hypot(S-R,y-C)||1;d.push([-(y-C)/T,(S-R)/T,T])}let f=0,m=0;for(let[E,R]of t)f+=E,m+=R;f/=o,m/=o;let[x,g]=r.slope??[0,0],p=(E,R)=>n+x*(E-f)+g*(R-m),v=Math.max(1,(r.fadeTo??n)-u),M=E=>r.topColor?i.clone().lerp(r.topColor,Math.min(1,Math.max(0,(E-u)/v))):i,_=0,P=(e-u)/c+h;for(let E=0;E<o;E++){let[R,C]=t[E],[S,y]=t[(E+1)%o],[T,L,U]=d[E],N=T,H=L,O=T,J=L;if(r.smooth){let ct=d[(E-1+o)%o],rt=d[(E+1)%o],At=bt=>Math.max(U,bt[2])/Math.min(U,bt[2])<1.8;if(At(ct)){N=T+ct[0],H=L+ct[1];let bt=Math.hypot(N,H)||1;N/=bt,H/=bt}if(At(rt)){O=T+rt[0],J=L+rt[1];let bt=Math.hypot(O,J)||1;O/=bt,J/=bt}}let V=_/a+l,st=(_+U)/a+l;_+=U;let G=p(R,C),Z=p(S,y),dt=s.vert(R,e,C,N,0,H,V,P,M(e)),wt=s.vert(S,e,y,O,0,J,st,P,M(e)),Y=s.vert(S,Z,y,O,0,J,st,(Z-u)/c+h,M(Z)),tt=s.vert(R,G,C,N,0,H,V,(G-u)/c+h,M(G));s.quad(dt,wt,Y,tt)}if(r.roof!==!1){let E=r.roofBuilder??s,R=r.roofColor??i,C=Math.hypot(x,1,g),S=-x/C,y=1/C,T=-g/C,L=E.vert(f,p(f,m),m,S,y,T,f/8,m/8,R),U=t.map(([N,H])=>E.vert(N,p(N,H),H,S,y,T,N/8,H/8,R));for(let N=0;N<o;N++)E.tri(L,U[N],U[(N+1)%o])}return _}var Yv=[[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]],[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]]];function cn(s,t,e,n,i,r,o,a=pp,c=0,l=1){let h=Math.cos(c),u=Math.sin(c),d=(m,x)=>[m*h+x*u,-m*u+x*h],f=[i/2,r/2,o/2];for(let[m,x,g]of Yv){let p=Math.abs(m[0])*f[0]+Math.abs(m[1])*f[1]+Math.abs(m[2])*f[2],v=Math.abs(x[0])*f[0]+Math.abs(x[1])*f[1]+Math.abs(x[2])*f[2],M=Math.abs(g[0])*f[0]+Math.abs(g[1])*f[1]+Math.abs(g[2])*f[2],[_,P]=d(m[0],m[2]),E=[];for(let[R,C]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let S=m[0]*p+x[0]*v*R+g[0]*M*C,y=m[1]*p+x[1]*v*R+g[1]*M*C,T=m[2]*p+x[2]*v*R+g[2]*M*C,[L,U]=d(S,T);E.push(s.vert(t+L,e+y,n+U,_,m[1],P,(R+1)/2*v*2*l,(C+1)/2*M*2*l,a))}s.quad(E[0],E[1],E[2],E[3])}}function bn(s,t,e,n,i,r=1){let o=t.length,a=[];for(let u=0;u<o;u++){let d=t[Math.max(0,u-1)],f=t[Math.min(o-1,u+1)];a.push(f.clone().sub(d).normalize())}let c=new w(0,1,0);Math.abs(a[0].y)>.9&&c.set(1,0,0),c.sub(a[0].clone().multiplyScalar(c.dot(a[0]))).normalize();let l=[],h=0;for(let u=0;u<o;u++){let d=a[u];c.sub(d.clone().multiplyScalar(c.dot(d))).normalize();let f=d.clone().cross(c).normalize();u>0&&(h+=t[u].distanceTo(t[u-1]));let m=[];for(let x=0;x<=n;x++){let g=x/n*Math.PI*2,p=c.x*Math.cos(g)+f.x*Math.sin(g),v=c.y*Math.cos(g)+f.y*Math.sin(g),M=c.z*Math.cos(g)+f.z*Math.sin(g),_=e[u],P=t[u];m.push(s.vert(P.x+p*_,P.y+v*_,P.z+M*_,p,v,M,x/n,h/r,i))}l.push(m)}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++)s.quad(l[u][d],l[u][d+1],l[u+1][d+1],l[u+1][d])}function Fe(s,t,e,n,i,r,o,a=1){bn(s,[t,e],[n,i],r,o,a)}var uc=new w,dc=new w,fp=new Gt;function Mo(s,t,e,n=pp){let i=t.attributes.position,r=t.attributes.normal,o=t.attributes.uv;fp.getNormalMatrix(e);let a=s.count;for(let c=0;c<i.count;c++)uc.fromBufferAttribute(i,c).applyMatrix4(e),dc.fromBufferAttribute(r,c).applyMatrix3(fp).normalize(),s.vert(uc.x,uc.y,uc.z,dc.x,dc.y,dc.z,o?o.getX(c):0,o?o.getY(c):0,n);if(t.index)for(let c=0;c<t.index.count;c++)s.idx.push(a+t.index.getX(c));else for(let c=0;c<i.count;c++)s.idx.push(a+c)}function En(s,t=s){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function ln(s,{repeat:t=!0,color:e=!0}={}){let n=new ms(s);return n.colorSpace=e?be:qn,t&&(n.wrapS=n.wrapT=xi),n.anisotropy=8,n}var ji=(s,t,e,n=1)=>`hsla(${s},${t}%,${e}%,${n})`;function gp(s,t=1){let r=En(512),o=r.getContext("2d"),a=ne(t),c=h=>`rgb(${h.map(u=>Math.round(Math.min(255,u))).join(",")})`,l=(h,u,d,f,m,x)=>{let g=.82+a()*.32,p=o.createLinearGradient(h,u,h+d*.5,u+f);p.addColorStop(0,c(m.map(v=>v*g))),p.addColorStop(1,c(x.map(v=>v*g))),o.fillStyle=p,o.fillRect(h,u,d,f),a()<.25&&(o.fillStyle="rgba(255,255,255,0.12)",o.fillRect(h,u,d,f))};if(s==="apartment"){o.fillStyle="#e9ebec",o.fillRect(0,0,512,512);for(let h=0;h<4;h++){for(let u=0;u<8;u++){let d=u*64,f=h*128;l(d+8,f+22,48,70,[150,175,195],[70,92,115]),o.fillStyle="rgba(255,255,255,0.8)",o.fillRect(d+64/2-1,f+22,2,70),a()<.3&&(o.fillStyle=`rgba(240,235,222,${.5+a()*.4})`,o.fillRect(d+9+(a()<.5?0:24),f+24,22,66))}o.fillStyle="#f7f8f8",o.fillRect(0,h*128+96,512,10),o.fillStyle="rgba(90,100,110,0.45)",o.fillRect(0,h*128+106,512,4),o.fillStyle="rgba(120,130,140,0.35)",o.fillRect(0,h*128+100,512,1)}for(let h=0;h<8;h+=2)o.fillStyle="rgba(160,165,170,0.25)",o.fillRect(h*64,0,2,512)}else if(s==="office"){o.fillStyle="#d9d6cf",o.fillRect(0,0,512,512);for(let h=0;h<4;h++)for(let u=0;u<8;u++){let d=u*64,f=h*128;l(d+10,f+14,44,94,[120,150,170],[45,65,85])}for(let h=0;h<1500;h++)o.fillStyle=`rgba(110,100,90,${a()*.06})`,o.fillRect(a()*512,a()*512,2,2)}else{let h=s==="dark",u=h?[95,120,120]:[150,200,235],d=h?[35,50,55]:[45,100,160];for(let m=0;m<4;m++)for(let x=0;x<8;x++)l(x*64,m*128,64,128,u,d);for(let m=0;m<3;m++){let x=a()*512,g=60+a()*140,p=o.createLinearGradient(x,0,x+g,0);p.addColorStop(0,"rgba(255,255,255,0)"),p.addColorStop(.5,`rgba(230,245,255,${.12+a()*.15})`),p.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=p,o.fillRect(x,0,g,512)}let f=h?"rgba(150,160,160,0.9)":"rgba(205,215,225,0.95)";o.fillStyle=f;for(let m=0;m<8;m++)o.fillRect(m*64,0,3,512);for(let m=0;m<4;m++)o.fillRect(0,m*128,512,3),o.fillStyle=h?"rgba(40,50,55,0.85)":"rgba(70,105,140,0.8)",o.fillRect(0,m*128+128-22,512,19),o.fillStyle=f}return ln(r)}function fc(){let t=En(512),e=t.getContext("2d"),n=ne(7);e.fillStyle="rgb(110,110,110)",e.fillRect(0,0,512,512);for(let i=0;i<14e3;i++){let r=n()*512,o=n()*512,a=5+n()*12,c=(n()-.5)*6,l=60+n()*170;e.strokeStyle=`rgba(${l},${l},${l},0.7)`,e.lineWidth=.8+n()*1.2,e.beginPath(),e.moveTo(r,o),e.quadraticCurveTo(r+c*.3,o-a*.6,r+c,o-a),e.stroke()}return ln(t,{color:!1})}function xp(){let e=En(256),n=e.getContext("2d"),i=ne(11);n.fillStyle="#cfcac1",n.fillRect(0,0,256,256);for(let r=0;r<256;r+=64)for(let o=0;o<256;o+=64){let a=228+i()*18;n.fillStyle=`rgb(${a},${a-3},${a-9})`,n.fillRect(o+2,r+2,60,60),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(o+2,r+2,60,3)}for(let r=0;r<900;r++)n.fillStyle=`rgba(120,110,100,${i()*.08})`,n.fillRect(i()*256,i()*256,2,2);return ln(e)}function _p(){let t=En(256),e=t.getContext("2d"),n=ne(13);e.fillStyle="#7b848c",e.fillRect(0,0,256,256);for(let i=0;i<6e3;i++){let r=90+n()*90;e.fillStyle=`rgba(${r},${r+4},${r+10},0.35)`,e.fillRect(n()*256,n()*256,1.5,1.5)}return ln(t)}function yp(){let t=En(256),e=t.getContext("2d"),n=ne(17);e.fillStyle="#c2ad8c",e.fillRect(0,0,256,256);for(let i=0;i<160;i++){let r=n()*256;e.strokeStyle=`rgba(${90+n()*40},${70+n()*30},${50+n()*20},${.15+n()*.25})`,e.lineWidth=.6+n()*1.6,e.beginPath(),e.moveTo(0,r);for(let o=0;o<=256;o+=32)e.lineTo(o,r+Math.sin(o*.03+i)*2);e.stroke()}return ln(t)}function vp(){let t=En(256),e=t.getContext("2d"),n=ne(19);e.fillStyle="#9b938a",e.fillRect(0,0,256,256);for(let i=0;i<220;i++){let r=n()*256,o=70+n()*90;e.strokeStyle=`rgba(${o},${o-6},${o-12},${.3+n()*.4})`,e.lineWidth=1+n()*3,e.beginPath(),e.moveTo(r,0);for(let a=0;a<=256;a+=16)e.lineTo(r+Math.sin(a*.05+i)*3,a);e.stroke()}return ln(t)}function Mp(s,t,e,n,i,r,o,a,c){s.save(),s.translate(t,e),s.rotate(r);let l=s.createLinearGradient(0,-i,0,i);l.addColorStop(0,ji(o,a,Math.min(88,c+14))),l.addColorStop(.5,ji(o,a,c)),l.addColorStop(1,ji(o+6,a,c-12)),s.fillStyle=l,s.beginPath(),s.moveTo(-n/2,0),s.quadraticCurveTo(0,-i,n/2,0),s.quadraticCurveTo(0,i,-n/2,0),s.fill(),s.strokeStyle=ji(o,a-10,Math.min(92,c+22),.6),s.lineWidth=1,s.beginPath(),s.moveTo(-n/2,0),s.lineTo(n/2,0),s.stroke(),s.restore()}function Sp(s=23){let e=En(512),n=e.getContext("2d"),i=ne(s);for(let r=0;r<900;r++){let o=i()*Math.PI*2,a=Math.sqrt(i())*225,c=512/2+Math.cos(o)*a,l=512/2+Math.sin(o)*a,h=a/225;Mp(n,c,l,26+i()*20,8+i()*6,i()*Math.PI*2,86+i()*26,42+i()*20,26+i()*22+h*10)}return ln(e,{repeat:!1})}function pc(s=29,t=!1){let n=En(256),i=n.getContext("2d"),r=ne(s);i.fillStyle=t?"#3d6e2a":"#3a6e26",i.fillRect(0,0,256,256);for(let o=0;o<1400;o++)Mp(i,r()*256,r()*256,12+r()*10,4+r()*3,r()*Math.PI*2,90+r()*24,40+r()*20,24+r()*24);if(t)for(let o=0;o<420;o++){let a=r()*256,c=r()*256,l=4+r()*4,h=318+r()*28,u=62+r()*22;for(let d=0;d<5;d++){let f=d/5*Math.PI*2+r();i.fillStyle=ji(h,90,u),i.beginPath(),i.arc(a+Math.cos(f)*l*.7,c+Math.sin(f)*l*.7,l*.62,0,Math.PI*2),i.fill()}i.fillStyle=ji(h,70,92),i.beginPath(),i.arc(a,c,l*.3,0,Math.PI*2),i.fill()}return ln(n)}function bp(){let e=En(256,256),n=e.getContext("2d"),i=ne(31);for(let r=0;r<90;r++){let o=20+i()*216,a=256*(.45+i()*.55),c=(i()-.5)*70,l=3+i()*4,h=78+i()*30,u=34+i()*26,d=n.createLinearGradient(0,256,0,256-a);d.addColorStop(0,ji(h+10,60,u-12)),d.addColorStop(1,ji(h-8,75,Math.min(85,u+22))),n.fillStyle=d,n.beginPath(),n.moveTo(o-l,256),n.quadraticCurveTo(o-l*.3+c*.3,256-a*.6,o+c,256-a),n.quadraticCurveTo(o+l*.3+c*.3,256-a*.6,o+l,256),n.fill()}return ln(e,{repeat:!1})}function mc(s=37){let n=En(512,256),i=n.getContext("2d"),r=ne(s),o=[];for(let c=0;c<22;c++){let l=r(),h=70+l*372,u=Math.sin(l*Math.PI),d=34+u*60*(.6+r()*.5),f=204-d*.55-u*30*r();o.push([h,f,d])}for(let[c,l,h]of o){let u=i.createRadialGradient(c,l+h*.35,h*.2,c,l+h*.2,h);u.addColorStop(0,"rgba(205,222,240,0.95)"),u.addColorStop(.75,"rgba(215,230,246,0.75)"),u.addColorStop(1,"rgba(225,238,250,0)"),i.fillStyle=u,i.beginPath(),i.arc(c,l+h*.2,h,0,Math.PI*2),i.fill()}for(let[c,l,h]of o){let u=i.createRadialGradient(c-h*.25,l-h*.35,h*.1,c,l,h*.95);u.addColorStop(0,"rgba(255,255,255,1)"),u.addColorStop(.7,"rgba(250,253,255,0.85)"),u.addColorStop(1,"rgba(240,248,255,0)"),i.fillStyle=u,i.beginPath(),i.arc(c,l,h*.95,0,Math.PI*2),i.fill()}let a=i.createLinearGradient(0,186,0,226);return a.addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.globalCompositeOperation="destination-in",i.fillStyle=a,i.fillRect(0,0,512,256),ln(n,{repeat:!1})}function du(){let t=En(64),e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(240,250,255,0.7)"),n.addColorStop(1,"rgba(220,240,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),ln(t,{repeat:!1})}function Ep(){let t=En(512),e=t.getContext("2d"),n=512/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.06,"rgba(255,255,255,1)"),i.addColorStop(.14,"rgba(255,255,240,0.65)"),i.addColorStop(.35,"rgba(200,240,255,0.18)"),i.addColorStop(1,"rgba(180,230,255,0)"),e.fillStyle=i,e.fillRect(0,0,512,512);let r=[[0,1],[Math.PI/2,1],[Math.PI/4,.62],[-Math.PI/4,.62],[.35,.4],[1.9,.45],[2.6,.35]];for(let[o,a]of r)for(let c of[1,-1])e.save(),e.translate(n,n),e.rotate(o+(c<0?Math.PI:0)),i=e.createLinearGradient(0,0,n*a,0),i.addColorStop(0,"rgba(255,255,255,0.95)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.beginPath(),e.moveTo(0,-7),e.lineTo(n*a,0),e.lineTo(0,7),e.fill(),e.restore();return t.toDataURL("image/png")}var Tp=210,pu=Math.PI*2,Ar=new Nt,mu=new ze,gu=new w,Ap=new w,gc=new w(0,1,0);function fu(s,t,e){return s.onBeforeCompile=n=>{n.uniforms.uTime=e.time,n.vertexShader=`uniform float uTime;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.21 + instanceMatrix[3].z * 0.17;
      #endif
      float h = max(position.y, 0.0);
      transformed.x += (sin(uTime * 1.6 + ph + position.y * 0.35) * 0.6 + sin(uTime * 2.7 + ph * 1.7 + position.x) * 0.4) * ${t.toFixed(4)} * h;
      transformed.z += cos(uTime * 1.3 + ph + position.z * 0.5) * ${(t*.6).toFixed(4)} * h;`)},s.customProgramCacheKey=()=>"windy"+t,s}function wp(s){for(;;){let t=s()*2-1,e=s()*2-1,n=s()*2-1;if(t*t+e*e+n*n<=1)return new w(t,e,n)}}function So(s,{height:t,crown:e,clusters:n,cards:i}){let r=ne(s),o=new te,a=new te,c=new te,l=new nt(1,1,1),h=t*.034,u=new w((r()-.5)*t*.08,t*.52,(r()-.5)*t*.08),d=[];for(let v=0;v<=6;v++){let M=v/6;d.push(new w(u.x*M*M+Math.sin(M*3+s)*.12*M,u.y*M-.3*(1-M),u.z*M*M))}bn(o,d,d.map((v,M)=>h*(1-.45*(M/6))*(M===0?1.45:1)),9,l,2);let f=new w(u.x,t*.7,u.z),m=e,x=e*.72,g=[];for(let v=0;v<n;v++){let M=v/n*pu+r()*.6,_=v===n-1?1:r()*1.3-.35,P=new w(Math.cos(M)*(1-Math.abs(_)*.4),_,Math.sin(M)*(1-Math.abs(_)*.4)),E=f.clone().add(new w(P.x*m*.6,P.y*x*.62,P.z*m*.6)),R=m*(.42+r()*.18);g.push([E,R]);let C=t*(.36+r()*.16),S=new w(u.x*(C/u.y)**2,C,u.z*(C/u.y)**2),y=S.clone().lerp(E,.85),T=S.clone().lerp(y,.5).add(new w(0,.6,0));bn(o,[S,T,y],[h*.5,h*.3,h*.12],5,l,2)}let p=new Qn(1,1);for(let[v,M]of g){Ar.compose(v,mu.identity(),gu.set(M*.62,M*.56,M*.62)),Mo(a,p,Ar,new nt(.75,.75,.75).lerp(l,oe((v.y-f.y)/x+.5,0,1)));for(let _=0;_<i;_++){let P=v.clone().add(wp(r).multiplyScalar(M*.6)),E=wp(r).normalize(),R=new w().crossVectors(E,Math.abs(E.y)>.9?new w(1,0,0):gc).normalize(),C=new w().crossVectors(E,R).normalize(),S=M*(.95+r()*.5),T=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([L,U])=>{let N=P.clone().addScaledVector(R,L*S*.5).addScaledVector(C,U*S*.5),H=N.clone().sub(f).normalize().lerp(gc,.25).normalize(),O=oe(.62+.5*(N.distanceTo(f)/m)+.12*((N.y-f.y)/x),.55,1.15);return c.vert(N.x,N.y,N.z,H.x,H.y,H.z,(L+1)/2,(U+1)/2,new nt(O,O,O))});c.quad(T[0],T[1],T[2],T[3])}}return{bark:o.build(),blob:a.build(),leaf:c.build(),canopyY:f.y,canopyR:m,trunkR:h}}function Zv(s,t){let e=ne(s),n=new te,i=new Qn(1,3),r=i.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o),l=r.getZ(o),h=1+.1*Math.sin(a*7.1+s)*Math.sin(c*6.3)*Math.sin(l*8.7+1.3)+.05*Math.sin(a*17+l*13);r.setXYZ(o,a*h,c*h,l*h)}for(let o=0;o<t;o++){let a=o===0?.85:.5+e()*.3,c=e()*pu,l=o===0?0:.45+e()*.25;Ar.compose(Ap.set(Math.cos(c)*l,a*.75+(o===0?.1:0),Math.sin(c)*l),mu.setFromAxisAngle(gc,e()*pu),gu.set(a,a*.9,a));let h=n.count;Mo(n,i,Ar);for(let u=h;u<n.count;u++){let d=n.pos[u*3+1],f=oe(.5+d*.45,.5,1.08);n.col[u*3]=n.col[u*3+1]=n.col[u*3+2]=f}}return n.build()}function Kv(){let s=new te;for(let t=0;t<3;t++){let e=t/3*Math.PI,n=Math.cos(e)*.55,i=Math.sin(e)*.55,r=new nt(.78,.84,.7),o=new nt(1.1,1.1,1),a=s.vert(-n,0,-i,0,1,0,0,0,r),c=s.vert(n,0,i,0,1,0,1,0,r),l=s.vert(n,1,i,0,1,0,1,1,o),h=s.vert(-n,1,-i,0,1,0,0,1,o);s.quad(a,c,l,h)}return s.build()}function $v(){let s=new te,t=new nt(4161314),e=new nt(16762906),n=new nt(15901196),i=new nt(4860946);bn(s,[new w(0,0,0),new w(.03,.8,0),new w(0,1.55,.06)],[.035,.03,.025],6,t);for(let[l,h]of[[.55,1],[.95,-1]]){let d=[[0,l,0],[h*.22,l+.08,.1],[h*.4,l+.02,0],[h*.22,l-.03,-.08]].map(([f,m,x])=>s.vert(f,m,x,0,1,0,0,0,t));s.quad(d[0],d[1],d[2],d[3])}let r=1.6,o=.1,a=s.vert(0,r,o+.03,0,.2,1,0,0,i),c=[];for(let l=0;l<20;l++){let h=l/20*Math.PI*2;c.push(s.vert(Math.cos(h)*.14,r+Math.sin(h)*.14,o,0,.2,1,0,0,i))}for(let l=0;l<20;l++)s.tri(a,c[l],c[(l+1)%20]);for(let l=0;l<18;l++){let h=l/18*Math.PI*2,u=h-.14,d=h+.14,f=(x,g,p)=>s.vert(Math.cos(g)*x,r+Math.sin(g)*x,o+p,0,.2,1,0,0,l%2?e:n),m=[f(.12,u,0),f(.12,d,0),f(.3,h+.05,-.04),f(.3,h-.05,-.04)];s.quad(m[0],m[1],m[2],m[3])}return s.build()}function Jv(){let s=new Qn(1,1),t=s.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),i=t.getY(e),r=t.getZ(e),o=1+.22*Math.sin(n*4.1+2)*Math.sin(i*3.3+1)*Math.sin(r*5.7);t.setXYZ(e,n*o,i*o*.62,r*o)}return s.computeVertexNormals(),s}var xc=class{constructor(){this.uniforms={time:{value:0}};let t=Sp();this.mats={bark:new Ft({map:vp(),roughness:.95,color:14867925}),blob:new Ft({map:pc(61),color:12114088,roughness:1,vertexColors:!0}),leaf:fu(new Ft({map:t,alphaTest:.5,side:pe,roughness:.8,vertexColors:!0}),.012,this.uniforms),bush:new Ft({map:pc(29),roughness:.95,vertexColors:!0}),flower:new Ft({map:pc(41,!0),roughness:.8,vertexColors:!0}),grass:fu(new Ft({map:bp(),alphaTest:.45,side:pe,roughness:.9,vertexColors:!0}),.1,this.uniforms),rock:new Ft({color:13815752,roughness:.92,flatShading:!0}),sunflower:fu(new Ft({vertexColors:!0,roughness:.75,side:pe}),.03,this.uniforms)},this.variants=[So(101,{height:13,crown:5.6,clusters:9,cards:14}),So(202,{height:11,crown:4.7,clusters:8,cards:13}),So(303,{height:15,crown:6.3,clusters:10,cards:14}),So(404,{height:8.5,crown:3.4,clusters:6,cards:10}),So(505,{height:19,crown:8.2,clusters:13,cards:15})],this.bushGeo=Zv(7,4),this.tuftGeo=Kv(),this.rockGeo=Jv(),this.sunflowerGeo=$v(),this.lists={tree:this.variants.map(()=>[]),bush:[],flower:[],grass:[],rock:[],sunflower:[]}}addTree(t,e,n,i,r,o,a){return this.lists.tree[r].push({x:t,y:e,z:n,s:i,rot:o,tint:a}),this.variants[r]}addBush(t,e,n,i,r,o,a=!1){(a?this.lists.flower:this.lists.bush).push({x:t,y:e,z:n,s:i,rot:r,tint:o})}addTuft(t,e,n,i,r,o=i){this.lists.grass.push({x:t,y:e,z:n,s:i,sy:o,rot:r})}addSunflower(t,e,n,i,r){this.lists.sunflower.push({x:t,y:e,z:n,s:i,rot:r})}addRock(t,e,n,i,r){this.lists.rock.push({x:t,y:e,z:n,s:i,rot:r})}#t(t,e,n,i,{shadow:r=!0,colors:o=!1}={}){let a=new Map;for(let l of i){let h=Math.floor((l.x+2e3)/Tp)*1e3+Math.floor((l.z+2e3)/Tp);a.has(h)||a.set(h,[]),a.get(h).push(l)}let c=[];for(let l of a.values()){let h=new Jn(e,n,l.length);l.forEach((u,d)=>{Ar.compose(Ap.set(u.x,u.y,u.z),mu.setFromAxisAngle(gc,u.rot),gu.set(u.s,u.sy??u.s,u.s)),h.setMatrixAt(d,Ar),o&&h.setColorAt(d,u.tint)}),h.castShadow=r,h.receiveShadow=!0,h.computeBoundingSphere(),t.add(h),c.push(h)}return c}build(t){this.variants.forEach((e,n)=>{let i=this.lists.tree[n];i.length&&(this.#t(t,e.bark,this.mats.bark,i),this.#t(t,e.blob,this.mats.blob,i,{colors:!0}),this.#t(t,e.leaf,this.mats.leaf,i,{colors:!0}))}),this.#t(t,this.bushGeo,this.mats.bush,this.lists.bush,{colors:!0}),this.#t(t,this.bushGeo,this.mats.flower,this.lists.flower,{colors:!0}),this.#t(t,this.tuftGeo,this.mats.grass,this.lists.grass,{shadow:!1}),this.#t(t,this.rockGeo,this.mats.rock,this.lists.rock),this.#t(t,this.sunflowerGeo,this.mats.sunflower,this.lists.sunflower,{shadow:!1})}update(t){this.uniforms.time.value=t}};function bo(s){return new nt(.86,.92,.7).lerp(new nt(.62,.78,.6),s())}var Ut=168,Vn=392,Gn=56,Eo=70,he=.15,Pr=-.45,Oe={cx:0,cz:-20,rx:92,rz:52},Ir=[];for(let s=0;s<=10;s++)Ir.push(-350+Eo*s);function xu(s,t){return Math.abs(s)<Ut&&Math.abs(t)<Ut}function Cp(s){return 1+.07*Math.sin(3*s+.8)+.05*Math.sin(5*s+2.1)+.03*Math.sin(7*s+.3)}function en(s,t){let e=(s-Oe.cx)/Oe.rx,n=(t-Oe.cz)/Oe.rz,i=Math.hypot(e,n),r=Math.atan2(n,e),o=Math.hypot(Math.cos(r)*Oe.rx,Math.sin(r)*Oe.rz);return(i-Cp(r))*o}function Ms(s,t=0){let e=Cp(s),n=Math.hypot(Math.cos(s)*Oe.rx,Math.sin(s)*Oe.rz),i=(e*n+t)/(e*n);return[Oe.cx+Math.cos(s)*e*Oe.rx*i,Oe.cz+Math.sin(s)*e*Oe.rz*i]}function Te(s,t){let e=Math.abs(s),n=Math.abs(t);if(e>Ut||n>Ut)return 0;let i=yo(Ut-4,Ut-34,e)*yo(Ut-4,Ut-34,n),r=en(s,t),o=(_s(s*.0075+3.1,t*.0075-1.7,4)*.5+.5)*8;o+=9*Math.exp(-((s+100)**2+(t-100)**2)/(2*42*42)),o+=5*Math.exp(-((s-110)**2+(t+110)**2)/(2*34*34)),o*=i*yo(5,48,r);let a=o;return r<6&&(a-=yo(6,-14,r)*3.6),a}function vs(s,t,e){let n=new xr(s.map(([r,o])=>new w(r,0,o)),t,"centripetal"),i=Math.max(8,Math.round(n.getLength()/e));return n.getSpacedPoints(i).map(r=>[r.x,r.z])}var _u=[];for(let s=0;s<40;s++)_u.push(Ms(s/40*Math.PI*2,10));function Rr(s){let[t,e]=s[s.length-1],n=null,i=1/0;for(let r of _u){let o=Math.hypot(r[0]-t,r[1]-e);o<i&&(i=o,n=r)}return[...s,n]}var Ti=[{kind:"promenade",width:5.5,pts:vs(_u,!0,1.5),closed:!0},{kind:"walk",width:4.5,hedges:!0,fence:!0,pts:vs(Rr([[4,170],[-8,140],[12,108],[2,78]]),!1,1.5)},{kind:"walk",width:4.5,hedges:!0,pts:vs(Rr([[22,-170],[14,-132],[2,-104]]),!1,1.5)},{kind:"walk",width:4,pts:vs(Rr([[-170,30],[-140,38],[-120,14]]),!1,1.5)},{kind:"walk",width:4,pts:vs(Rr([[170,64],[140,58],[114,42]]),!1,1.5)},{kind:"walk",width:3.6,hedges:!0,fence:!0,pts:vs(Rr([[-150,152],[-120,122],[-96,98],[-74,70]]),!1,1.5)},{kind:"walk",width:3.6,fence:!0,pts:vs(Rr([[140,-150],[112,-118],[92,-84]]),!1,1.5)}],Ip=new Tr(10);for(let s of Ti){let t=s.pts.length;for(let e=0;e<t-1+(s.closed?1:0);e++){let n=s.pts[e],i=s.pts[(e+1)%t],r={a:n,b:i,hw:s.width/2};Ip.insert(r,Math.min(n[0],i[0]),Math.min(n[1],i[1]),Math.max(n[0],i[0]),Math.max(n[1],i[1]))}}var jv=[];function wn(s,t){let e=99;for(let n of Ip.query(s,t,12,jv))e=Math.min(e,dp(s,t,n.a[0],n.a[1],n.b[0],n.b[1])-n.hw);return e}var To=1.7,Cr=[Ms(.62,7),Ms(-.72,7)],Qv=[[0,0],[.25,-6],[.5,3],[.75,-5],[1,0]].map(([s,t])=>[Cr[0][0]+(Cr[1][0]-Cr[0][0])*s+t,Cr[0][1]+(Cr[1][1]-Cr[0][1])*s]),Rp=new xr(Qv.map(([s,t])=>new w(s,0,t)),!1,"centripetal"),Tn={samples:[]};{let t=Rp.getSpacedPoints(220),e=Te(t[0].x,t[0].z)+.28,n=Te(t[220].x,t[220].z)+.28;for(let i=0;i<=220;i++){let r=i/220,o=t[i],a=t[Math.min(220,i+1)],c=t[Math.max(0,i-1)],l=new K(a.x-c.x,a.z-c.z).normalize(),h=Math.max(.3,(1-r)*e+r*n+Math.sin(Math.PI*r)*.45);Tn.samples.push({x:o.x,z:o.z,y:h,dx:l.x,dz:l.y,t:r})}Tn.length=Rp.getLength()}function Pp(s,t){if(s<56||s>90||t<-72||t>34)return null;let e=null,n=1/0;for(let i of Tn.samples){let r=(s-i.x)**2+(t-i.z)**2;r<n&&(n=r,e=i)}return Math.sqrt(n)<=To?e.y:null}function tM(s,t){if(Math.abs(s)>Vn||Math.abs(t)>Vn)return!1;let e=Math.round((s+350)/Eo),n=Math.round((t+350)/Eo);if(e<0||e>10||n<0||n>10)return!1;let i=Ir[e],r=Ir[n];return xu(i,r)?!1:Math.abs(s-i)<=Gn/2&&Math.abs(t-r)<=Gn/2}function eM(s,t){return Math.abs(s)<Ut&&Math.abs(t)<Ut?Te(s,t):tM(s,t)?he:0}function _c(s,t){let e=eM(s,t),n=Pp(s,t);return n!==null?Math.max(e,n):e}function Lp(s,t){return Math.abs(s)>Ut||Math.abs(t)>Ut||Te(s,t)>Pr-.3?!1:Pp(s,t)===null}var wo=Vn+30;var An=(s,t,e)=>new w(s,t,e),Lr=new nt(1,1,1),Dp=new Nt,yc=class{constructor(){this.metal=new te,this.wood=new te,this.glow=new te,this.rope=new te,this.globe=new ge(1,16,12),this.rnd=ne(99)}lamp(t,e,n){Fe(this.metal,An(t,e,n),An(t,e+.45,n),.2,.16,10,Lr),Fe(this.metal,An(t,e+.45,n),An(t,e+4.6,n),.09,.065,10,Lr),Fe(this.metal,An(t,e+5.08,n),An(t,e+5.22,n),.2,.05,10,Lr),Dp.makeScale(.3,.3,.3).setPosition(t,e+4.85,n),Mo(this.glow,this.globe,Dp)}bench(t,e,n,i){let r=Math.cos(i),o=Math.sin(i),a=(l,h)=>[t+l*r+h*o,n-l*o+h*r],c=new nt(1,.96,.9);for(let l=0;l<3;l++){let[h,u]=a(0,-.18+l*.16);cn(this.wood,h,e+.45,u,1.8,.05,.13,c,i,1)}for(let l=0;l<2;l++){let[h,u]=a(0,-.32);cn(this.wood,h,e+.68+l*.18,u,1.8,.12,.04,c,i,1)}for(let l of[-.75,.75]){let[h,u]=a(l,-.05);cn(this.metal,h,e+.22,u,.06,.44,.5,Lr,i);let[d,f]=a(l,-.33);cn(this.metal,d,e+.55,f,.06,.6,.05,Lr,i)}}fencePost(t,e,n){let i=An(t,e+.85,n);return Fe(this.wood,An(t,e-.2,n),i,.07,.065,7,new nt(.86,.78,.66),1),i}ropeBetween(t,e){let n=[];for(let i=0;i<=6;i++){let r=i/6,o=t.clone().lerp(e,r);o.y-=Math.sin(Math.PI*r)*.12+.05,n.push(o)}bn(this.rope,n,n.map(()=>.022),5,Lr)}boardwalk(){let t=Tn.samples,e=this.rnd,n=()=>new nt(.82+e()*.18,.8+e()*.16,.76+e()*.14);for(let a=0;a<t.length;a+=1){let c=t[a],l=Math.atan2(-c.dz,c.dx)+Math.PI/2;cn(this.wood,c.x,c.y-.04,c.z,To*2+.2,.08,.27,n(),l,.5)}let i=(a,c,l)=>An(a.x-a.dz*c,l,a.z+a.dx*c);for(let a of[-1.15,1.15]){let c=[];for(let l=0;l<t.length;l+=6)c.push(i(t[l],a,t[l].y-.2));c.push(i(t[t.length-1],a,t[t.length-1].y-.2)),bn(this.wood,c,c.map(()=>.12),6,new nt(.7,.64,.56),2)}let r=new nt(.8,.72,.6),o=11;for(let a of[-To-.05,To+.05]){let c=null,l=null;for(let h=0;h<t.length;h+=o){let u=t[h],d=i(u,a,Pr-1.5),f=i(u,a,u.y+1);Fe(this.wood,d,f,.13,.12,8,r,1.5),Fe(this.wood,f,f.clone().add(An(0,.06,0)),.12,.04,8,r,1);let m=i(u,a,u.y+.5);c&&(Fe(this.wood,c.clone().add(An(0,-.05,0)),f.clone().add(An(0,-.05,0)),.085,.085,7,r,2),Fe(this.wood,l,m,.06,.06,6,r,2)),c=f,l=m}}}build(t){let e={metal:new Ft({color:16777215,roughness:.3,metalness:.15,vertexColors:!0}),wood:new Ft({map:yp(),roughness:.85,vertexColors:!0}),glow:new Ft({color:16777215,emissive:13628671,emissiveIntensity:.8,roughness:.15}),rope:new Ft({color:15787727,roughness:1})};for(let n of["metal","wood","glow","rope"]){if(!this[n].count)continue;let i=new ut(this[n].build(),e[n]);i.castShadow=n!=="glow",i.receiveShadow=!0,t.add(i)}}};var Rn=(()=>{let s=Tn.samples[Math.round((Tn.samples.length-1)*.86)],t=new w(s.x,s.y,s.z),e=new w(-30-s.x,0,-340-s.z).normalize(),n=new w(-e.z,0,e.x),i=new w(s.dx,0,s.dz).normalize();return{spot:t,f:e,right:n,along:i}})(),vc=(()=>{let s=Rn.spot.clone().addScaledVector(Rn.f,13).addScaledVector(Rn.right,8);for(let t=0;t<40&&(en(s.x,s.z)<11||wn(s.x,s.z)<4);t++)s.addScaledVector(Rn.f,1.5);return{x:s.x,z:s.z}})();function Ao(s,t,e){if(s<50||s>100||t<-80||t>40)return!1;for(let n=0;n<Tn.samples.length;n+=3){let i=Tn.samples[n];if(Math.hypot(s-i.x,t-i.z)<e)return!0}return!1}var Mc=Math.atan2(-.5,.56),nM=[[-58,128,16],[44,122,14],[-136,-58,15],[128,46,13],[-30,-128,12]],iM=[[-128,84],[132,-96]];function Up({foliage:s,colliders:t,props:e,windmills:n}){let i=ne(777),r=[],o=Math.PI*2,a=[];for(let[d,f]of iM)n.add(d,Te(d,f)-1,f,Mc+.4,.62),t.addCircle(d,f,1.4,45),a.push([d,f,12]);for(let[d,f,m]of nM){a.push([d,f,m+3]);for(let x=0;x<m*m*2.2;x++){let g=i()*o,p=Math.sqrt(i())*m,v=d+Math.cos(g)*p,M=f+Math.sin(g)*p*.7;en(v,M)<6||wn(v,M)<1||s.addSunflower(v,Te(v,M)-.05,M,.8+i()*.45,Mc+(i()-.5)*.8)}}let c=(d,f)=>a.every(([m,x,g])=>Math.hypot(d-m,f-x)>g),l=(d,f,m,x)=>{let g=Te(d,f)-.15,p=s.addTree(d,g,f,m,x,i()*o,bo(i));t.addCircle(d,f,p.trunkR*m+.15,5,!1),t.addCanopy(d,g+p.canopyY*m,f,p.canopyR*m*.85),r.push([d,f,p.canopyR*m])},h=(d,f,m,x=5)=>en(d,f)>x&&wn(d,f)>m&&!Ao(d,f,6)&&Math.hypot(d-vc.x,f-vc.z)>12&&c(d,f);l(vc.x,vc.z,1.15,4);for(let d=-Ut+10;d<=Ut-10;d+=11)for(let[f,m]of[[d,-Ut+9],[d,Ut-9],[-Ut+9,d],[Ut-9,d]]){let x=f+(i()-.5)*3,g=m+(i()-.5)*3;wn(x,g)<3||l(x,g,.85+i()*.3,Math.floor(i()*3))}for(let d=-Ut+22;d<Ut-20;d+=8)for(let f=-Ut+22;f<Ut-20;f+=8){let m=d+(i()-.5)*7,x=f+(i()-.5)*7;if(!h(m,x,3))continue;let g=_s(m*.014+7,x*.014-3,3),p=g>.18?.55:g>.05?.12:.025;if(i()>p)continue;let v=i()<.12;l(m,x,v?1+i()*.2:.8+i()*.4,v?4:Math.floor(i()*3))}for(let d of Ti){if(!d.hedges&&!d.fence)continue;let f=d.pts.length,m=[null,null];for(let x=1;x<f-1;x++){let[g,p]=d.pts[x-1],[v,M]=d.pts[x+1],[_,P]=d.pts[x],E=Math.hypot(v-g,M-p)||1,R=-(M-p)/E,C=(v-g)/E;Math.max(Math.abs(_),Math.abs(P))>Ut-8||[-1,1].forEach((S,y)=>{if(d.hedges&&x%2===0){let T=d.width/2+1.5+i()*.4,L=_+R*S*T,U=P+C*S*T;if(en(L,U)>3&&wn(L,U)>.7&&Ji(x*.09,S*3)>-.45){let N=.95+i()*.45;s.addBush(L,Te(L,U)-.2,U,N,i()*o,new nt(1,1,1).multiplyScalar(.92+i()*.16)),t.addCircle(L,U,.85*N,1.6,!1)}}if(d.fence&&x%3===0){let T=d.width/2+.35,L=_+R*S*T,U=P+C*S*T;if(en(L,U)>2&&wn(L,U)>.2){let N=e.fencePost(L,Te(L,U),U);m[y]&&m[y].distanceTo(N)<6&&e.ropeBetween(m[y],N),m[y]=N}else m[y]=null}})}}let u=Ti[0];for(let d=0;d<u.pts.length;d++){let[f,m]=u.pts[d],[x,g]=u.pts[(d+1)%u.pts.length],p=Math.hypot(x-f,g-m)||1,v=-(g-m)/p,M=(x-f)/p;if(en(f+v*3,m+M*3)>en(f-v*3,m-M*3)&&(v=-v,M=-M),!Ao(f,m,9)){if(d%2===0&&Ji(d*.045,1.7)>.05){let _=u.width/2+1.3+i()*.6,P=f+v*_,E=m+M*_;if(en(P,E)>.8){let R=new nt().setHSL(.93+i()*.06,.7,.62+i()*.12).multiplyScalar(1.5);s.addBush(P,Te(P,E)-.25,E,.7+i()*.35,i()*o,i()<.15?new nt(1.3,1.25,1.3):R,!0)}}if(d%26===13){let _=u.width/2+.8,P=f-v*_,E=m-M*_;e.bench(P,Te(P,E),E,Math.atan2(v,M))}if(d%22===0){let _=u.width/2+.5,P=f-v*_,E=m-M*_;e.lamp(P,Te(P,E),E),t.addCircle(P,E,.2,5,!1)}}}for(let d=0;d<26;d++){let f=-.98+i()*.5,[m,x]=Ms(f,1.5+i()*4);if(Ao(m,x,2.5)||wn(m,x)<.6)continue;let g=new nt().setHSL(.92+i()*.07,.75,.62+i()*.12).multiplyScalar(1.5);s.addBush(m,Te(m,x)-.2,x,.6+i()*.4,i()*o,g,!0)}for(let d=0;d<9e3;d++){let f=i()*o,[m,x]=Ms(f,-1.5+i()*4.5);if(Ji(f*3.1,4.2)<-.25||Ao(m,x,2.2)||wn(m,x)<.4)continue;let g=.9+i()*.9;s.addTuft(m,Math.max(Te(m,x),-.6)-.05,x,g*1.1,i()*o,g*(1+i()*.5))}for(let d=0;d<9e3;d++){let f=(i()*2-1)*(Ut-6),m=(i()*2-1)*(Ut-6);if(_s(f*.03,m*.03,2)<-.25||en(f,m)<4||wn(f,m)<.6)continue;let x=.55+i()*.45;s.addTuft(f,Te(f,m)-.05,m,x,i()*o)}for(let d=-Math.PI;d<0;d+=.025){if(Ji(d*2.3,9.1)<.05)continue;let[f,m]=Ms(d,.4+i()*1.6);Ao(f,m,3)||s.addRock(f,Te(f,m)-.15,m,.35+i()*.7,i()*o)}for(let d=-Ut+20;d<=Ut-20;d+=40)for(let[f,m]of[[d,-Ut+3],[d,Ut-3],[-Ut+3,d],[Ut-3,d]])e.lamp(f,Te(f,m),m),t.addCircle(f,m,.2,5,!1);return r}function Np({foliage:s,windmills:t}){let e=ne(31337),n=Math.PI*2;for(let i=0;i<16;i++){let r=i/16*n+e()*.25,o=470+e()*230;t.add(Math.cos(r)*o,-2,Math.sin(r)*o,Mc+.4,.9+e()*.25)}for(let i=0;i<7;i++){let r=e()*n,o=430+e()*120,a=Math.cos(r)*o,c=Math.sin(r)*o,l=40+e()*30,h=26+e()*16,u=e()*Math.PI;for(let d=-l/2;d<l/2;d+=1.1)for(let f=-h/2;f<h/2;f+=1.6){let m=a+d*Math.cos(u)-f*Math.sin(u)+(e()-.5)*.5,x=c+d*Math.sin(u)+f*Math.cos(u)+(e()-.5)*.5;Math.max(Math.abs(m),Math.abs(x))<402||s.addSunflower(m,-.05,x,.85+e()*.35,Mc+(e()-.5)*.6)}}}var yu=new nt(1,1,1);function sM(s){let t=new te,e=[];for(let i=0;i<=8;i++){let r=i/8;e.push([r*s,1.5*(1-r)**.8+.25,.35*(1-r)+.08,r*.35])}for(let i of[1,-1])for(let r=0;r<e.length-1;r++){let[o,a,c,l]=e[r],[h,u,d,f]=e[r+1],m=(p,v,M,_,P)=>[Math.cos(_)*v*P,p,i*M*.5+Math.sin(_)*v*P*.3],g=[m(o,a,c,l,-.3),m(o,a,c,l,.7),m(h,u,d,f,.7),m(h,u,d,f,-.3)].map(([p,v,M])=>t.vert(p,v,M,0,0,i,0,0,yu));i>0?t.quad(g[0],g[1],g[2],g[3]):t.quad(g[0],g[3],g[2],g[1])}let n=t.build();return n.computeVertexNormals(),n}var Sc=class{constructor(t){this.scene=t,this.rotors=[],this.mat=new Ft({color:16054265,roughness:.45,metalness:.05,side:pe}),this.blade=sM(30);let e=new te;bn(e,[new w(0,-2,0),new w(0,66,0)],[2.1,1.15],20,yu),cn(e,0,67.6,-1.5,3.2,3.4,9,yu),this.towerGeo=e.build(),this.hub=new ge(1.5,20,14),this.hub.scale(1,1,1.4)}add(t,e,n,i,r=1){let o=new me;o.position.set(t,e,n),o.rotation.y=i,o.scale.setScalar(r);let a=new ut(this.towerGeo,this.mat);a.castShadow=a.receiveShadow=!0,o.add(a);let c=new me;c.position.set(0,67.6,3.4);let l=new ut(this.hub,this.mat);l.castShadow=!0,c.add(l);for(let h=0;h<3;h++){let u=new ut(this.blade,this.mat);u.rotation.z=h/3*Math.PI*2,u.castShadow=!0,c.add(u)}c.rotation.z=Math.random()*6,c.userData.speed=.9+Math.random()*.4,o.add(c),this.rotors.push(c),this.scene.add(o)}update(t){for(let e of this.rotors)e.rotation.z-=e.userData.speed*t}};function rM(){let s=2*Ut+1,t=new Uint16Array(s*s*4);for(let n=0;n<s;n++)for(let i=0;i<s;i++){let r=-Ut+i,o=-Ut+n,c=!(Math.max(Math.abs(r),Math.abs(o))>Ut-5)&&en(r,o)>.6&&wn(r,o)>.15?1:0,l=(n*s+i)*4;t[l]=nc.toHalfFloat(Te(r,o)),t[l+1]=nc.toHalfFloat(c),t[l+3]=nc.toHalfFloat(1)}let e=new pr(t,s,s,sn,Ge);return e.magFilter=e.minFilter=Ze,e.needsUpdate=!0,e}var Fp=null,Ro=class{constructor(t,{L:e=72,density:n=24,width:i=.055,seed:r=5150,fadeFrom:o=.34}={}){Fp??=rM();let a=Math.round(e*e*n);this.count=a;let c=new Ka;c.setAttribute("position",new Bt([-.5,0,0,.5,0,0,-.38,.45,0,.38,.45,0,-.18,.8,0,.18,.8,0,0,1,0],3)),c.setAttribute("normal",new Bt(new Array(21).fill(0).map((d,f)=>f%3===1?1:0),3)),c.setIndex([0,1,3,0,3,2,2,3,5,2,5,4,4,5,6]);let l=ne(r),h=new Float32Array(a*3);for(let d=0;d<a;d++)h[d*3]=l()*e,h[d*3+1]=l()*e,h[d*3+2]=l();c.setAttribute("aBlade",new vn(h,3)),c.instanceCount=a,this.geometry=c,this.uniforms={uCenter:{value:new K},uTime:{value:0},uGround:{value:Fp}};let u=new Ft({color:16777215,roughness:.85,side:pe});u.onBeforeCompile=d=>{Object.assign(d.uniforms,this.uniforms),d.vertexShader=d.vertexShader.replace("void main() {",`
          attribute vec3 aBlade;
          uniform vec2 uCenter;
          uniform float uTime;
          uniform sampler2D uGround;
          varying float vT;
          varying float vR;
          void main() {`).replace("#include <begin_vertex>",`
          vec2 wp = uCenter + mod(aBlade.xy - uCenter + ${(e/2).toFixed(1)}, ${e.toFixed(1)}) - ${(e/2).toFixed(1)};
          float r = aBlade.z;
          float fade = 1.0 - smoothstep(${(e*o).toFixed(1)}, ${(e*.49).toFixed(1)}, length(wp - uCenter));
          float h = -0.02, mask = 1.0;
          if (abs(wp.x) < ${Ut.toFixed(1)} && abs(wp.y) < ${Ut.toFixed(1)}) {
            vec4 g = texture2D(uGround, (wp + ${Ut.toFixed(1)} + 0.5) / ${(2*Ut+1).toFixed(1)});
            h = g.r; mask = g.g;
          } else if (max(abs(wp.x), abs(wp.y)) < ${Vn.toFixed(1)}) {
            mask = 0.0;
          }
          float tall = (0.28 + r * r * 0.5) * fade * step(0.5, mask);
          float ang = r * 43.98;
          vec2 dir = vec2(cos(ang), sin(ang));
          float bend = position.y * position.y;
          vec2 wind = vec2(sin(uTime * 1.7 + wp.x * 0.13 + wp.y * 0.07), cos(uTime * 1.2 + wp.y * 0.15)) * 0.18
                    + (vec2(fract(r * 7.3), fract(r * 13.1)) - 0.5) * 0.5;
          vec3 transformed;
          transformed.xz = wp + dir * position.x * ${i.toFixed(3)} + wind * bend * tall;
          transformed.y = h + position.y * tall;
          vT = position.y;
          vR = r;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);"),d.fragmentShader=d.fragmentShader.replace("void main() {",`varying float vT;
varying float vR;
void main() {`).replace("#include <color_fragment>",`
          vec3 root = vec3(0.07, 0.2, 0.03);
          vec3 tip = mix(vec3(0.34, 0.62, 0.12), vec3(0.55, 0.7, 0.2), fract(vR * 5.7));
          diffuseColor.rgb *= mix(root, tip, smoothstep(0.0, 1.0, vT)) * (0.85 + 0.3 * fract(vR * 17.0));`)},u.customProgramCacheKey=()=>"grass-blades-"+e,this.mesh=new ut(c,u),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,t.add(this.mesh)}setQuality(t){this.geometry.instanceCount=t?this.count:Math.round(this.count*.45)}update(t,e){this.uniforms.uTime.value=t,this.uniforms.uCenter.value.set(e.x,e.z)}};var vu=s=>new nt(s),Io=(s,t,e)=>new nt(s,t,e),Ss=Io(1,1,1),Op={x:0,z:-210},Po={x:0,z:-195},oM=["apartment","apartment","glass","glass","office","dark"],Co=vu(14015198),hn=vu(16054523);function aM(s,t,e,n,i){let r=e/2,o=n/2;return[[s-r+i,t+o],[s+r-i,t+o],[s+r,t+o-i],[s+r,t-o+i],[s+r-i,t-o],[s-r+i,t-o],[s-r,t-o+i],[s-r,t+o-i]]}function bc(s,t,e,n,i,r,o){let a=s.vert(t-i/2,e,n+r/2,0,1,0,0,0,o),c=s.vert(t+i/2,e,n+r/2,0,1,0,1,0,o),l=s.vert(t+i/2,e,n-r/2,0,1,0,1,1,o),h=s.vert(t-i/2,e,n-r/2,0,1,0,0,1,o);s.quad(a,c,l,h)}function Bp(s,{foliage:t,colliders:e,props:n}){let i=ne(4242),r=S=>S[Math.floor(i()*S.length)],o={glass:new te,apartment:new te,office:new te,dark:new te,trim:new te,roof:new te,slab:new te,lawn:new te,marks:new te,pool:new te},a=(S,y,T,L,U)=>{switch(S){case"round":return ys(y,T,L,U,Math.min(L,U)*.28,5);case"cyl":return vo(y,T,Math.min(L,U)/2,28);case"chamfer":return aM(y,T,L,U,Math.min(L,U)*.2);default:return mp(y,T,L,U)}};function c(S,y,T,L,U,N){let H=r(oM),O=N??H,J=o[O],V=.92+i()*.1,st=Io(V,V,V*(O==="apartment"?.99:1.02)),G=r(O==="glass"?["box","box","chamfer","cyl","round"]:["box","box","box","chamfer"]),Z=(tt,ct)=>a(G,S,y,tt,ct),dt={tileW:12,tileH:14,uOff:Math.floor(i()*8)/8,smooth:G==="cyl"||G==="round",roofBuilder:o.roof,roofColor:Co,yBase:he};tn(o.dark,Z(T+.6,L+.6),he,he+6,Io(.75,.8,.8),{...dt,roof:!1});let wt=U;if(U>70&&i()<.5){let tt=U*(.6+i()*.2);tn(J,Z(T,L),he+6,tt,st,dt);let ct=.72+i()*.12;tn(J,Z(T*ct,L*ct),tt,U,st,dt),T*=ct,L*=ct}else tn(J,Z(T,L),he+6,U,st,dt);tn(o.trim,Z(T+.4,L+.4),wt,wt+.9,hn,{roofBuilder:o.roof,roofColor:Co});let Y=i();if(Y<.4){tn(o.roof,Z(T*.55,L*.55),wt+.9,wt+5.5,Co,{});let tt=6+i()*5;for(let[ct,rt,At,bt]of[[0,L/2-.3,T,.5],[0,-L/2+.3,T,.5],[T/2-.3,0,.5,L],[-T/2+.3,0,.5,L]])cn(o.trim,S+ct,wt+.9+tt-.6,y+rt,At,1.2,bt,hn);for(let[ct,rt]of[[T/2-.3,L/2-.3],[-T/2+.3,L/2-.3],[T/2-.3,-L/2+.3],[-T/2+.3,-L/2+.3]])cn(o.trim,S+ct,wt+.9+tt/2,y+rt,.6,tt,.6,hn)}else if(Y<.7||G==="cyl"){for(let tt=0;tt<4;tt++)cn(o.roof,S+(i()-.5)*T*.45,wt+2,y+(i()-.5)*L*.45,3+i()*4,2.4+i()*2,3+i()*4,Co);U>110&&i()<.5&&Fe(o.trim,new w(S,wt+.9,y),new w(S,wt+18+i()*14,y),.45,.08,8,hn)}else tn(J,Z(T*.8,L*.8),wt+.9,wt+7,st,{...dt,yBase:he}),tn(o.trim,Z(T*.84,L*.84),wt+7,wt+7.8,hn,{roofBuilder:o.roof,roofColor:Co});G==="cyl"?e.addCircle(S,y,Math.min(T,L)/2+.3,U):e.addBox(S-T/2-.3,y-L/2-.3,S+T/2+.3,y+L/2+.3,U)}function l(S,y){let T=he,L=U=>new w(S,U,y);Fe(o.trim,L(T),L(T+12),7,5.5,20,hn),Fe(o.trim,L(T+12),L(T+150),4.6,2.7,20,hn),Fe(o.trim,L(T+138),L(T+144),3,9,28,hn),tn(o.glass,vo(S,y,9.6,28),T+144,T+152,Io(.75,.9,1),{tileW:8,tileH:16,smooth:!0,roof:!1}),Fe(o.trim,L(T+152),L(T+157),9.4,6,28,hn),Fe(o.trim,L(T+157),L(T+186),2.2,1.5,14,hn);for(let U=0;U<6;U++){let N=T+186+U*7,H=1.1-U*.14;Fe(o.trim,L(N),L(N+7),H,H-.14,10,U%2?hn:vu(14698303))}e.addCircle(S,y,7.2,230)}function h(S,y,T,L){cn(o.lawn,S,he+.02,y,T,.05,L,Ss,0,.25)}function u(S,y,T){h(S,y,Gn-9,Gn-9);for(let L=0;L<9;L++){let U=S+(i()-.5)*38,N=y+(i()-.5)*38;if(T&&Math.hypot(U-S,N-y)<11)continue;let H=Math.floor(i()*3),O=.75+i()*.3,J=t.addTree(U,he,N,O,H,i()*6.28,bo(i));e.addCircle(U,N,J.trunkR*O+.1,4,!1),e.addCanopy(U,he+J.canopyY*O,N,J.canopyR*O*.85)}for(let L=0;L<10;L++){let U=i()*6.28,N=13+i()*8;t.addBush(S+Math.cos(U)*N,he,y+Math.sin(U)*N,.8+i()*.5,i()*6.28,Io(1,1,1),i()<.4)}T&&(tn(o.trim,vo(S,y,7,36),he,he+.65,hn,{smooth:!0}),tn(o.pool,vo(S,y,6.4,36),he+.6,he+.67,Ss,{roof:!0}),Fe(o.trim,new w(S,he,y),new w(S,he+2.2,y),.9,.5,16,hn),Fe(o.trim,new w(S,he+2.2,y),new w(S,he+2.5,y),2.2,1.6,20,hn),e.addCircle(S,y,7.1,.7,!1))}for(let S of Ir)for(let y of Ir){if(xu(S,y))continue;cn(o.slab,S,he/2,y,Gn,he,Gn,Ss,0,.25);for(let[H,O,J]of[[0,-1,"x"],[0,1,"x"],[-1,0,"z"],[1,0,"z"]]){for(let V of[-18,0,18]){let st=J==="x"?S+V:S+H*(Gn/2-2.4),G=J==="x"?y+O*(Gn/2-2.4):y+V,Z=.85+i()*.3;if(Math.hypot(st-Po.x,G-Po.z)<14)continue;let dt=t.addTree(st,he,G,Z,3,i()*6.28,bo(i));e.addCircle(st,G,dt.trunkR*Z+.1,4,!1),e.addCanopy(st,he+dt.canopyY*Z,G,dt.canopyR*Z*.8)}for(let V of[-9,9]){let st=J==="x"?S+V:S+H*(Gn/2-1.2),G=J==="x"?y+O*(Gn/2-1.2):y+V;n.lamp(st,he,G),e.addCircle(st,G,.2,5,!1)}}let L=.55+.55*oe((-y-140)/210,0,1)+i()*.25;if(S===-70&&y===-350){u(S,y,!1),l(S,y);continue}if(S===Op.x&&y===Op.z){c(S,y-4,24,24,110,"apartment");continue}if(i()<.12){u(S,y,i()<.7);continue}let N=i();if(N<.3)c(S,y,20+i()*8,20+i()*8,(85+i()*75)*L),h(S,y+18,30,6);else if(N<.65){let H=i()<.5;for(let O of[-1,1]){let J=H?O*11:0,V=H?0:O*11,st=H?16:24,G=H?24:16;c(S+J+(i()-.5)*3,y+V+(i()-.5)*3,st,G,(60+i()*70)*L)}}else for(let[H,O]of[[-11,-11],[11,-11],[-11,11],[11,11]]){if(i()<.22){h(S+H,y+O,16,16);continue}c(S+H,y+O,13+i()*3,13+i()*3,(40+i()*60)*L)}}let d=[];for(let S=0;S<=11;S++)d.push(-385+Eo*S);let f=(S,y)=>Math.abs(S)<Ut&&Math.abs(y)<Ut||Math.abs(S)>Vn-2||Math.abs(y)>Vn-2,m=.015;for(let S of d){for(let y=0;y<d.length-1;y++){let T=d[y]+12,L=d[y+1]-12;if(!f(S,(T+L)/2))for(let U=T;U<L;U+=6)bc(o.marks,S,m,U+1.5,.2,3,Ss),bc(o.marks,U+1.5,m,S,3,.2,Ss)}for(let y of d)for(let T of[-1,1]){if(!f(S,y+T*9.5))for(let L=-5.25;L<=5.3;L+=1.5)bc(o.marks,S+L,m,y+T*9.5,.7,3,Ss);if(!f(y+T*9.5,S))for(let L=-5.25;L<=5.3;L+=1.5)bc(o.marks,y+T*9.5,m,S+L,3,.7,Ss)}}let x=(S,y,T)=>new Ft({map:gp(S,y),vertexColors:!0,metalness:T?.35:.05,roughness:T?.18:.6,envMapIntensity:T?1.1:.5}),g=x("glass",5,!0),p=new Ft({color:16777215,vertexColors:!0,roughness:.35,metalness:.1}),v=new Ft({color:16777215,vertexColors:!0,roughness:.85}),M=new Ft({map:xp(),roughness:.85}),_=fc(),P=new Ft({color:8836682,map:_,roughness:.95}),E=new Ft({color:15922936,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),R=new Ft({color:5230831,roughness:.04,metalness:.3,envMapIntensity:1.4}),C=(S,y,T=!0)=>{if(!S.count)return;let L=new ut(S.build(),y);L.castShadow=T,L.receiveShadow=!0,s.add(L)};return C(o.glass,g),C(o.apartment,x("apartment",6,!1)),C(o.office,x("office",7,!1)),C(o.dark,x("dark",8,!0)),C(o.trim,p),C(o.roof,v),C(o.slab,M,!1),C(o.lawn,P,!1),C(o.marks,E,!1),C(o.pool,R,!1),{materials:{glassMat:g}}}var Lo=new w;function Cn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Lo.copy(t),Lo[n]=0,Lo.normalize();let l=.5*o/(o+a),h=1-Lo.angleTo(s)/c;return Math.sign(Lo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Je=class extends Ve{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,c=new w,l=new w(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new w,x=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Cn(m,c,"z","y",r,n),d[p+1]=1-Cn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[p+0]=1-Cn(m,c,"z","y",r,n),d[p+1]=1-Cn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[p+0]=1-Cn(m,c,"x","z",r,t),d[p+1]=Cn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Cn(m,c,"x","z",r,t),d[p+1]=1-Cn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-Cn(m,c,"x","y",r,t),d[p+1]=1-Cn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[p+0]=Cn(m,c,"x","y",r,t),d[p+1]=1-Cn(m,c,"y","x",r,e);break}}};var Ec=class extends vi{constructor(){super();let t=new Ve;t.deleteAttribute("uv");let e=new Ft({side:Re}),n=new Ft,i=new ti(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ut(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ut(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new ut(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new ut(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new ut(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ut(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ut(t,Dr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ut(t,Dr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new ut(t,Dr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new ut(t,Dr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new ut(t,Dr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new ut(t,Dr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Dr(s){let t=new Me;return t.color.setScalar(s),t}var Qi=20,un=17,ni=4.8,Do=3,zp=1.7,bs=Math.PI*2;function Mu(){let s=new me,t=new ut(new Hn(1.05,48),new Me({color:3716863,transparent:!0,opacity:.55,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.03;let e=new ut(new kn(1.08,.07,12,64),new Ft({color:12577535,emissive:2795775,emissiveIntensity:2.2}));e.rotation.x=-Math.PI/2,e.position.y=.05;let n=document.createElement("canvas");n.width=4,n.height=128;let i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(120,210,255,0)"),r.addColorStop(1,"rgba(120,210,255,0.75)"),i.fillStyle=r,i.fillRect(0,0,4,128);let o=new ms(n);o.colorSpace=be;let a=new ut(new an(1.05,1.05,4.5,48,1,!0),new Me({map:o,transparent:!0,depthWrite:!1,side:pe,blending:zi}));a.position.y=2.25;let c=new ut(new kn(1.3,.04,8,64),e.material);c.rotation.x=-Math.PI/2;let l=new fr(new fs({map:Su(512,128,(h,u,d)=>{h.fillStyle="rgba(20,120,210,0.85)",h.beginPath(),h.roundRect(8,8,u-16,d-16,50),h.fill(),h.strokeStyle="#fff",h.lineWidth=6,h.stroke(),h.fillStyle="#fff",h.font="800 64px Nunito, sans-serif",h.textAlign="center",h.textBaseline="middle",h.fillText("Apartment",u/2,d/2+4)}),transparent:!0,depthWrite:!1}));return l.scale.set(3.2,.8,1),l.position.y=3.6,s.add(t,e,a,c,l),s.userData.update=h=>{let u=.5+.5*Math.sin(h*3);t.material.opacity=.4+.25*u,e.material.emissiveIntensity=1.6+1.2*u,a.scale.set(1+.04*u,1,1+.04*u),c.position.y=.2+h*.9%1*3.2,l.position.y=3.6+Math.sin(h*1.5)*.12},s}function Su(s,t,e){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let i=new ms(n);return i.colorSpace=be,i.anisotropy=8,i}function cM(){return Su(1024,1024,(s,t,e)=>{let n=ne(88),i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,"#2f8fe8"),i.addColorStop(.55,"#8fd2ff"),i.addColorStop(1,"#e8f7ff"),s.fillStyle=i,s.fillRect(0,0,t,e);for(let a=0;a<9;a++){let c=n()*t,l=120+n()*380,h=40+n()*70;s.fillStyle="rgba(255,255,255,0.85)";for(let u=0;u<6;u++)s.beginPath(),s.arc(c+(u-3)*h*.45,l-Math.sin(u/5*Math.PI)*h*.5,h*(.5+n()*.3),0,bs),s.fill()}let r=(a,c,l,h)=>{let u=s.createLinearGradient(a,0,a+c,0);u.addColorStop(0,h?"#cfe6f7":"#3f79b8"),u.addColorStop(1,h?"#8fb6d6":"#1f4f8a"),s.fillStyle=u,s.fillRect(a,l,c,e-l),s.fillStyle=h?"rgba(60,90,120,0.5)":"rgba(200,235,255,0.4)";for(let d=l+8;d<e;d+=14)for(let f=a+4;f<a+c-6;f+=9)s.fillRect(f,d,5,7)};for(let a=0;a<26;a++){let c=40+n()*80;r(n()*(t-c),c,380+n()*420,n()<.45)}for(let a=0;a<10;a++){let c=60+n()*90;r(n()*(t-c),c,150+n()*300,n()<.5)}let o=s.createLinearGradient(0,e*.7,0,e);o.addColorStop(0,"rgba(230,246,255,0)"),o.addColorStop(1,"rgba(230,246,255,0.75)"),s.fillStyle=o,s.fillRect(0,0,t,e)})}function lM(){return Su(512,384,(s,t,e)=>{let n=s.createLinearGradient(0,0,0,e);n.addColorStop(0,"#1d8fe8"),n.addColorStop(.6,"#8fe0ff"),n.addColorStop(1,"#d9fbd0"),s.fillStyle=n,s.fillRect(0,0,t,e),s.fillStyle="#5fcf3a",s.beginPath(),s.moveTo(0,e*.78),s.quadraticCurveTo(t*.5,e*.6,t,e*.8),s.lineTo(t,e),s.lineTo(0,e),s.fill();for(let i=0;i<9;i++){let r=40+i*97%(t-80),o=40+i*53%200,a=10+i%4*8,c=s.createRadialGradient(r-a*.3,o-a*.3,1,r,o,a);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(.6,"rgba(255,255,255,0.1)"),c.addColorStop(1,"rgba(255,255,255,0.7)"),s.fillStyle=c,s.beginPath(),s.arc(r,o,a,0,bs),s.fill()}s.fillStyle="rgba(255,255,255,0.75)",s.fillRect(150,90,230,150),s.fillStyle="rgba(40,140,220,0.85)",s.fillRect(150,90,230,22),s.fillStyle="rgba(10,60,110,0.75)",s.fillRect(0,e-26,t,26),s.fillStyle="#7ed321",s.beginPath(),s.arc(18,e-13,9,0,bs),s.fill()})}var Tc=class{constructor(){let t=this.scene=new vi;t.background=new nt(14478584),this.colliders=new wr,this.floorY=0,this.ceiling=ni,this.speedScale=.55,this.spawn={x:0,z:5.2,facing:Math.PI},this.exit=new w(-6.2,0,6.2),this.updaters=[];let e=this.mats={floor:new Se({color:15332089,roughness:.06,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.2}),wall:new Ft({color:14937589,roughness:.4,side:Re}),white:new Se({color:16317437,roughness:.18,clearcoat:1,clearcoatRoughness:.05}),blue:new Se({color:2854888,roughness:.12,clearcoat:1,clearcoatRoughness:.04,emissive:671626,emissiveIntensity:.25}),jelly:new Se({color:4696831,roughness:.08,clearcoat:1,transparent:!0,opacity:.78,emissive:741294,emissiveIntensity:.3,side:pe}),glass:new Se({color:15267839,roughness:.03,metalness:0,transparent:!0,opacity:.22,clearcoat:1,depthWrite:!1,side:pe}),glow:new Ft({color:14677247,emissive:7129343,emissiveIntensity:1.6}),warm:new Ft({color:16777215,emissive:16774108,emissiveIntensity:2.2}),chrome:new Ft({color:15134194,metalness:1,roughness:.12}),leaf:new Ft({color:4168236,roughness:.7}),book:new Ft({color:16777215,roughness:.6,vertexColors:!0})},n=(G,Z,dt=0,wt=0,Y=0,tt=!0)=>{let ct=new ut(G,Z);return ct.position.set(dt,wt,Y),ct.castShadow=tt,ct.receiveShadow=!0,t.add(ct),ct},i=new jn(ys(0,0,Qi,un,Do,8).map(([G,Z])=>new K(G,-Z))),r=n(new Wi(i,12),e.floor,0,0,0,!1);r.rotation.x=-Math.PI/2;let o=n(new Wi(i,12),e.wall,0,ni,0,!1);o.rotation.x=-Math.PI/2;let a=new te;tn(a,ys(0,0,Qi,un,Do,8),0,ni,new nt(1,1,1),{roof:!1,smooth:!0,tileW:4,tileH:4}),n(a.build(),new Ft({color:15134710,roughness:.4,side:Re,vertexColors:!0}),0,0,0,!1);let c=new te;tn(c,ys(0,0,Qi-.08,un-.08,Do-.04,8),.02,.1,new nt(1,1,1),{roof:!1,smooth:!0}),n(c.build(),new Ft({color:12577023,emissive:2792703,emissiveIntensity:1.4,side:Re}),0,0,0,!1);let l=new te,h=ys(0,0,Qi,un,Do,8),u=[...h,h[0]].map(([G,Z])=>new w(G,ni,Z));bn(l,u,u.map(()=>.9),16,new nt(1,1,1)),n(l.build(),new Ft({color:15266296,roughness:.4}),0,0,0,!1);let d=n(new Hn(2.4,64),e.warm,1.5,ni-.02,-2.6,!1);d.rotation.x=Math.PI/2;let f=n(new kn(2.8,.07,10,96),e.glow,1.5,ni-.05,-2.6,!1);f.rotation.x=Math.PI/2;let m=1.6,x=2.45,g=-un/2+.02,p=2.15;n(new Hn(p,64),new Me({map:cM(),toneMapped:!1}),m,x,g,!1),n(new kn(p,.09,14,96),e.white,m,x,g+.05),n(new kn(p+.32,.26,18,96),e.blue,m,x,g+.08),n(new Ve(.07,p*2,.07),e.white,m,x,g+.05);for(let G of[-.7,.7]){let Z=Math.sqrt(p*p-G*G);n(new Ve(Z*2,.07,.07),e.white,m,x+G,g+.05)}let v=new Zi(16774888,1.6);v.position.set(m+2,6,-12),v.target.position.set(0,0,1),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),Object.assign(v.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:30}),v.shadow.bias=-5e-4,t.add(v,v.target),t.add(new vr(15792383,9422066,.8));for(let[G,Z]of[[-7,-4],[5,-6],[0,4],[7.5,2.5],[6.5,6.5]]){let dt=new ti(5813503,9,12,2);dt.position.set(G,3.6,Z),t.add(dt)}let M=new ti(8177407,12,14,2);M.position.set(-7.5,2.6,-1.5),t.add(M);let _=-Qi/2+.2,P=(G,Z)=>{let dt=new jn;return dt.moveTo(-G/2,0),dt.lineTo(G/2,0),dt.lineTo(G/2,Z-G/2),dt.absarc(0,Z-G/2,G/2,0,Math.PI,!1),dt.lineTo(-G/2,0),new Va(dt,{depth:.36,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:4,curveSegments:40})},E=n(P(5.6,4.3),e.blue,_-.2,.15,-.8);E.rotation.y=Math.PI/2;let R=n(P(2.6,3.9),e.blue,-4.4,.15,-un/2+.05);for(let G of[1.1,1.9,2.7])n(new Je(2.2,.07,.5,2,.03),e.white,-4.4,G,-un/2+.55),n(new Ve(2.1,.025,.04),e.glow,-4.4,G-.05,-un/2+.8,!1),n(new ge(.13,20,14),e.glass,-4.9,G+.17,-un/2+.5,!1),n(new an(.09,.07,.16,16),e.white,-3.9,G+.12,-un/2+.5),n(new Qn(.14,1),e.leaf,-3.9,G+.28,-un/2+.5);this.colliders.addBox(-5.9,-un/2,-2.9,-un/2+.9,4);let C=ne(12);for(let G of[.95,1.75,2.55,3.35]){n(new Je(.52,.07,5,2,.03),e.white,_+.3,G,-.8),n(new Ve(.04,.025,4.9),e.glow,_+.52,G-.05,-.8,!1);for(let Z=-3;Z<1.4;Z+=.55+C()*.4){let dt=C();if(dt<.35)n(new an(.09,.07,.16,16),e.white,_+.32,G+.12,Z),n(new Qn(.14,1),e.leaf,_+.32,G+.28,Z);else if(dt<.7){let wt=new te,Y=Z-.12;for(let tt=0;tt<4+Math.floor(C()*3);tt++){let ct=.2+C()*.08,rt=.035+C()*.02,At=new nt().setHSL(.55+C()*.1,.5+C()*.4,.55+C()*.35),bt=new Ve(.22,ct,rt);bt.translate(_+.3,G+.035+ct/2,Y);let Ot=bt.attributes.position;for(let $=0;$<Ot.count;$++)wt.vert(Ot.getX($),Ot.getY($),Ot.getZ($),bt.attributes.normal.getX($),bt.attributes.normal.getY($),bt.attributes.normal.getZ($),0,0,At);let Jt=wt.count-Ot.count;for(let $=0;$<bt.index.count;$++)wt.idx.push(Jt+bt.index.getX($));Y+=rt+.005}n(wt.build(),e.book,0,0,0)}else n(new ge(.11,20,14),e.glass,_+.32,G+.15,Z,!1)}}this.colliders.addBox(-Qi/2,-3.7,_+.6,2.1,4);let S=new w(0,0,-1.6),y=[[2.25,0],[2.25,.42],[2.4,.47],[2.95,.48],[3,.92],[3.18,1],[3.35,.9],[3.4,.5],[3.38,0]].map(([G,Z])=>new K(G,Z)),T=-2.25,L=4.5,U=n(new Gi(new Vi(y).getPoints(32),96,T,L),e.jelly,S.x,0,S.z);U.castShadow=!0;let N=new jn(y);for(let G of[T,T+L]){let Z=n(new Wi(N),e.jelly,S.x,0,S.z);Z.rotation.y=G-Math.PI/2}let H=n(new Gi([new K(2.32,.42),new K(2.36,.52),new K(2.85,.53),new K(2.9,.47)],96,T+.05,L-.1),e.white,S.x,0,S.z);H.castShadow=!0;for(let G=T+.1;G<=T+L-.05;G+=.22)this.colliders.addCircle(S.x+Math.sin(G)*2.85,S.z+Math.cos(G)*2.85,.6,1.2,!1);let O=n(new Ga(3.6,3.72,96),e.glow,S.x,.005,S.z,!1);O.rotation.x=-Math.PI/2,n(new an(.95,.95,.36,64),e.white,0,.2,-1.6).scale.set(1.45,1,.9);let V=n(new kn(.9,.035,10,64),e.glow,0,.04,-1.6,!1);V.rotation.x=Math.PI/2,V.scale.set(1.45,.9,1),n(new ge(.22,24,16,0,bs,Math.PI*.35,Math.PI*.65),e.glass,.4,.55,-1.55,!1),n(new Qn(.13,1),e.leaf,.4,.5,-1.55),n(new Je(.34,.03,.24,2,.01),e.white,-.45,.4,-1.7),this.colliders.addCircle(0,-1.6,1.25,1,!1);for(let[G,Z,dt]of[[6,-5.8,.5],[7.8,-3.6,.9]]){let wt=new me;wt.position.set(G,1.15,Z),wt.rotation.y=dt+Math.PI;let Y=new ut(new ge(.72,40,28,.55,bs-1.1),e.glass),tt=new ut(new kn(.62,.035,10,48),e.chrome);tt.position.set(0,0,.38);let ct=new ut(new ge(.5,24,16),e.white);ct.scale.set(1,.32,.9),ct.position.y=-.38,wt.add(Y,tt,ct),t.add(wt),n(new an(.02,.02,ni-1.87,8),e.chrome,G,(ni+1.87)/2,Z,!1),this.colliders.addCircle(G,Z,.8,2,!1),this.updaters.push(rt=>{wt.rotation.z=Math.sin(rt*.7+G)*.03})}for(let[G,Z,dt]of[[-.7,-2.1,3],[.6,-1.4,3.3],[.1,-2.5,2.7],[-3.5,-5.2,3.1]])n(new an(.008,.008,ni-dt,6),e.chrome,G,(ni+dt)/2,Z,!1),n(new ge(.34,32,20),e.glass,G,dt-.34,Z,!1),n(new ge(.09,16,10),e.warm,G,dt-.34,Z,!1);let st=new ti(16773596,10,9,2);st.position.set(0,2.6,-2),t.add(st),n(new an(.32,.24,.6,28),e.white,-8.4,.3,-6.2);for(let G=0;G<7;G++){let Z=G/7*bs,dt=n(new ge(.3,16,10),e.leaf,-8.4+Math.cos(Z)*.22,1+G%3*.28,-6.2+Math.sin(Z)*.22);dt.scale.set(.6,1.4,.35),dt.rotation.set(Math.sin(Z)*.6,Z,Math.cos(Z)*.6)}this.colliders.addCircle(-8.4,-6.2,.5,2,!1),this.buildDesk(n),this.portal=Mu(),this.portal.position.copy(this.exit),t.add(this.portal),t.environment=null,this.envReady=!1}buildDesk(t){let e=this.mats,n=new Se({color:13496063,roughness:.02,transparent:!0,opacity:.42,clearcoat:1,depthWrite:!1,side:pe}),i=new Se({color:698810,roughness:.12,clearcoat:1,transparent:!0,opacity:.82,emissive:348250,emissiveIntensity:.25}),r=new Se({color:15265263,roughness:.2,clearcoat:1,transparent:!0,opacity:.95}),o=new Ft({color:2830902,roughness:.5}),a=Qi/2-1.4,c=2.2,l=new me;l.position.set(a,0,c),l.rotation.y=-Math.PI/2,l.scale.setScalar(zp),this.scene.add(l),this.desk=l;let h=(H,O,J,V,st,G=!0)=>{let Z=new ut(H,O);return Z.position.set(J,V,st),Z.castShadow=G,Z.receiveShadow=!0,l.add(Z),Z};h(new Je(1.8,.04,.8,2,.015),n,0,.76,0,!1);for(let H of[-.88,.88])h(new Je(.04,.76,.8,2,.015),n,H,.38,0,!1);for(let H of[-.39,.39])h(new Ve(1.8,.012,.012),e.glow,0,.78,H,!1);for(let H of[-.9,.9])h(new Ve(.012,.012,.8),e.glow,H,.78,0,!1);let u=new me;u.position.set(0,.78,-.12),l.add(u);let d=new Je(.4,.4,.42,4,.08),f=d.attributes.position;for(let H=0;H<f.count;H++){let O=f.getZ(H),J=O<0?1+O/.21*.38:1;f.setXYZ(H,f.getX(H)*J,f.getY(H)*J,O)}d.computeVertexNormals();let m=new ut(d,i);m.position.set(0,.215,-.08),m.castShadow=!0,u.add(m);let x=new ut(new Je(.42,.42,.08,4,.035),r);x.position.set(0,.215,.14),x.castShadow=!0,u.add(x);let g=new ut(new zn(.3,.225),new Me({map:lM(),toneMapped:!1}));g.position.set(0,.25,.181),u.add(g),this.screen=g;let p=new ut(new zn(.33,.255),new Ft({color:1712936,roughness:.2}));p.position.set(0,.25,.1805),u.add(p);let v=new ut(new Je(.42,.07,.085,3,.03),i);v.position.set(0,.065,.145),u.add(v);for(let H of[-.15,.15]){let O=new ut(new Hn(.022,20),new Ft({color:425096,roughness:.4}));O.position.set(H,.065,.189),u.add(O)}let M=new ut(new kn(.07,.014,10,24,Math.PI),i);M.position.set(0,.43,-.08),M.rotation.y=Math.PI/2,u.add(M);let _=new ut(new Je(.3,.025,.3,2,.01),r);_.position.set(0,.0125,0),u.add(_);let P=new me;P.position.set(0,.79,.2),l.add(P),P.add(new ut(new Je(.44,.022,.15,2,.008),i));let E=new Jn(new Je(.022,.012,.022,1,.004),o,15*5),R=0,C=new Nt;for(let H=0;H<5;H++)for(let O=0;O<15;O++)E.setMatrixAt(R++,C.makeTranslation(-.19+O*.027,.016,-.054+H*.027));P.add(E);let S=new ut(new an(.034,.034,.022,28),i);S.position.set(.33,.792,.2),l.add(S);let y=new ut(new ge(.03,20,10,0,bs,0,Math.PI/2),r);y.scale.y=.35,y.position.set(.33,.803,.2),l.add(y);let T=h(new Je(.5,.05,.48,2,.02),n,0,.47,.75,!1);T.castShadow=!1,h(new Je(.5,.5,.04,2,.02),n,0,.75,.98,!1);for(let H of[-.22,.22])for(let O of[.55,.95])h(new an(.015,.015,.46,8),n,H,.23,O,!1);let L=zp;this.colliders.addBox(a-.42*L,c-.92*L,a+.42*L,c+.92*L,1.2*L),this.scene.updateMatrixWorld(!0);let U=l.localToWorld(new w(0,.5,.78)),N=l.localToWorld(new w(0,.5,0)).sub(U);this.seat={pos:U,facing:Math.atan2(N.x,N.z)}}screenCorners(){let t=this.screen;return t.updateWorldMatrix(!0,!1),[[-.15,.1125],[.15,.1125],[.15,-.1125],[-.15,-.1125]].map(([e,n])=>t.localToWorld(new w(e,n,0)))}prepare(t){if(this.envReady)return;let e=new ki(t);this.scene.environment=e.fromScene(new Ec,.03).texture,this.scene.environmentIntensity=.45,e.dispose(),this.envReady=!0}inside(t,e,n=.3){let i=Qi/2-n,r=un/2-n,o=Do-n,a=Math.abs(t)-(i-o),c=Math.abs(e)-(r-o);return a<=0||c<=0?Math.abs(t)<=i&&Math.abs(e)<=r:Math.hypot(a,c)<=o}update(t){this.portal.userData.update(t);for(let e of this.updaters)e(t)}};var hM="554316635",ii={width:480,height:360,framerate:60,turbo:!1,interpolation:!1,highQualityPen:!1,maxClones:300,fencing:!0,miscLimits:!0,username:"player####"};function uM(s){return new Promise((t,e)=>{let n=document.createElement("script");n.src=s,n.onload=t,n.onerror=()=>e(new Error("Could not load "+s)),document.head.appendChild(n)})}async function dM(s){let t=await fetch(`https://trampoline.turbowarp.org/api/projects/${s}`);if(!t.ok)throw new Error(`project info: HTTP ${t.status}`);let{project_token:e}=await t.json(),n=await fetch(`https://projects.scratch.mit.edu/${s}?token=${e}`);if(!n.ok)throw new Error(`project: HTTP ${n.status}`);return n.arrayBuffer()}var wc=class{constructor(t){this.root=t,this.stage=t.querySelector(".pc-stage"),this.loading=t.querySelector(".pc-loading"),this.bar=t.querySelector(".pc-bar i"),this.message=t.querySelector(".pc-message"),this.state="idle"}async boot(){if(this.state==="idle"){this.state="loading",this.progress(.05);try{if(location.protocol==="file:")throw new Error("offline");window.Scaffolding||await uM("dist/scaffolding-min.js"),this.progress(.35);let t=this.scaffolding=new window.Scaffolding.Scaffolding;t.width=ii.width,t.height=ii.height,t.resizeMode="preserve-ratio",t.editableLists=!1,t.usePackagedRuntime=!0,t.setup(),t.appendTo(this.stage);let e=t.vm;e.setTurboMode(ii.turbo),e.setFramerate(ii.framerate),e.setInterpolation(ii.interpolation),e.renderer.setUseHighQualityRender(ii.highQualityPen),e.setRuntimeOptions({maxClones:ii.maxClones,fencing:ii.fencing,miscLimits:ii.miscLimits}),t.setUsername(ii.username.replace(/#+/,r=>String(Math.floor(Math.random()*10**r.length)).padStart(r.length,"0")));let n=t.storage;n.addWebStore([n.AssetType.ImageVector,n.AssetType.ImageBitmap,n.AssetType.Sound],r=>`https://assets.scratch.mit.edu/internalapi/asset/${r.assetId}.${r.dataFormat}/get/`),e.runtime.on("ASSET_PROGRESS",(r,o)=>{o&&this.progress(.55+.45*(r/o))});let i=await dM(hM);this.progress(.55),await t.loadProject(i),this.progress(1),this.state="ready",this.loading.classList.add("click-to-start"),this.message.textContent="Click to start"}catch(t){console.warn("Computer could not start the project:",t),this.state="error",this.message.textContent=location.protocol==="file:"?"This computer needs the internet: play the online version to use it.":"Could not reach Scratch to load the project. Check your connection.",this.loading.classList.add("error")}}}progress(t){this.bar.style.width=`${Math.round(t*100)}%`}click(){this.state==="ready"&&(this.state="running",this.loading.classList.add("hidden"),this.scaffolding.start())}place(t,e,n,i){let r=this.root.style;r.left=`${t}px`,r.top=`${e}px`,r.width=`${n}px`,r.height=`${i}px`,this.scaffolding&&(this._w!==Math.round(n)||this._h!==Math.round(i))&&(this._w=Math.round(n),this._h=Math.round(i),this.scaffolding.relayout())}show(t){this.root.classList.toggle("show",t),t&&this.boot()}};function Hp(s,t,e,n=.44){return s.onBeforeCompile=i=>{i.uniforms.detailMap={value:t},i.fragmentShader=i.fragmentShader.replace("void main() {",`uniform sampler2D detailMap;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
        float dtl = texture2D(detailMap, vMapUv * ${e.toFixed(1)}).r;
        diffuseColor.rgb *= ${(1-n/2).toFixed(3)} + ${n.toFixed(3)} * dtl;`)},s.customProgramCacheKey=()=>"detail"+e,s}function fM(s){let n=document.createElement("canvas");n.width=n.height=768;let i=n.getContext("2d"),r=i.createImageData(768,768),o=[122,176,66],a=[68,128,46],c=[150,162,104],l=[52,112,98],h=[222,220,212];for(let p=0;p<768;p++)for(let v=0;v<768;v++){let M=-Ut+(v+.5)/768*2*Ut,_=-Ut+(p+.5)/768*2*Ut,P=Te(M,_),E=en(M,_),R=_s(M*.018,_*.018,3),C=Ji(M*.15,_*.15),S=oe(.55+R*.9+P*.035+C*.06,0,1),y=[ke(a[0],o[0],S),ke(a[1],o[1],S),ke(a[2],o[2],S)];if(E<2.5){let L=oe((2.5-E)/3,0,1);y=y.map((U,N)=>ke(U,c[N],L))}if(E<-1){let L=oe((-1-E)/4,0,1);y=y.map((U,N)=>ke(U,l[N],L))}Math.max(Math.abs(M),Math.abs(_))>Ut-4.5&&(y=h.slice());let T=(p*768+v)*4;r.data[T]=y[0],r.data[T+1]=y[1],r.data[T+2]=y[2],r.data[T+3]=255}i.putImageData(r,0,0);let u=document.createElement("canvas");u.width=u.height=2048;let d=u.getContext("2d");d.imageSmoothingQuality="high",d.drawImage(n,0,0,2048,2048);let f=2048/(2*Ut),m=p=>(p+Ut)*f;for(let[p,v,M]of s){let _=d.createRadialGradient(m(p),m(v),0,m(p),m(v),M*f*1.1);_.addColorStop(0,"rgba(20,70,20,0.32)"),_.addColorStop(1,"rgba(20,70,20,0)"),d.fillStyle=_,d.beginPath(),d.arc(m(p),m(v),M*f*1.1,0,Math.PI*2),d.fill()}d.lineJoin="round",d.lineCap="round";let x=(p,v,M)=>{d.strokeStyle=M,d.lineWidth=v*f,d.beginPath(),p.pts.forEach(([_,P],E)=>E?d.lineTo(m(_),m(P)):d.moveTo(m(_),m(P))),p.closed&&d.closePath(),d.stroke()};for(let p of Ti)x(p,p.width+1.1,"rgba(96,120,64,0.45)");for(let p of Ti)x(p,p.width+.35,"rgb(205,198,178)");for(let p of Ti)x(p,p.width,p.kind==="promenade"?"rgb(218,215,206)":"rgb(214,206,184)");let g=Ti[0];d.strokeStyle="rgba(170,165,150,0.5)",d.lineWidth=.08*f;for(let p=0;p<g.pts.length;p+=1){let[v,M]=g.pts[p],[_,P]=g.pts[(p+1)%g.pts.length],E=_-v,R=P-M,C=Math.hypot(E,R)||1,S=-R/C,y=E/C,T=g.width/2;d.beginPath(),d.moveTo(m(v+S*T),m(M+y*T)),d.lineTo(m(v-S*T),m(M-y*T)),d.stroke()}return u}function kp(s,t){let e=fc(),n=256,i=new zn(2*Ut,2*Ut,n,n);i.rotateX(-Math.PI/2);let r=i.attributes.position;for(let _=0;_<r.count;_++)r.setY(_,Te(r.getX(_),r.getZ(_)));i.computeVertexNormals();let o=ln(fM(t),{repeat:!1}),a=Hp(new Ft({map:o,roughness:.95}),e,70,.9),c=new ut(i,a);c.receiveShadow=!0,s.add(c);let l=(_,P)=>{let E=new jn;E.moveTo(-_,-_),E.lineTo(_,-_),E.lineTo(_,_),E.lineTo(-_,_),E.closePath();let R=new gs;R.moveTo(-P,-P),R.lineTo(-P,P),R.lineTo(P,P),R.lineTo(P,-P),R.closePath(),E.holes.push(R);let C=new Wi(E);return C.rotateX(-Math.PI/2),C},h=_p();h.repeat.set(1/7,1/7);let u=new ut(l(Vn,Ut),new Ft({map:h,roughness:.92}));u.receiveShadow=!0,s.add(u);let d=document.createElement("canvas");d.width=d.height=256;let f=d.getContext("2d"),m=ne(3);f.fillStyle="#6fa944",f.fillRect(0,0,256,256);for(let _=0;_<400;_++)f.fillStyle=`rgba(${m()<.5?"150,215,80":"60,140,40"},${.15+m()*.2})`,f.beginPath(),f.arc(m()*256,m()*256,6+m()*20,0,Math.PI*2),f.fill();let x=ln(d);x.repeat.set(1/40,1/40);let g=new ut(l(4e3,Vn),Hp(new Ft({map:x,roughness:1}),e,13));g.position.y=-.02,g.receiveShadow=!0,s.add(g);let p=new Ft({color:8832874,roughness:1}),v=new ge(1,24,12,0,Math.PI*2,0,Math.PI/2),M=ne(8);for(let _=0;_<26;_++){let P=_/26*Math.PI*2+M()*.2,E=1150+M()*500,R=new ut(v,p);R.position.set(Math.cos(P)*E,-5,Math.sin(P)*E),R.scale.set(220+M()*260,60+M()*120,220+M()*260),s.add(R)}}var Ur={top:new nt(2462192),mid:new nt(6540799),horizon:new nt(14349823),ground:new nt(13495027)};function bu(s){return new ye({side:Re,depthWrite:!1,uniforms:{sunDir:{value:s},top:{value:Ur.top},mid:{value:Ur.mid},horizon:{value:Ur.horizon},ground:{value:Ur.ground}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 sunDir, top, mid, horizon, ground;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col;
        if (h > 0.0) {
          float t = pow(h, 0.5);
          col = mix(horizon, mid, smoothstep(0.0, 0.42, t));
          col = mix(col, top, smoothstep(0.38, 1.0, t));
        } else {
          col = mix(horizon, ground, smoothstep(0.0, -0.08, h));
        }
        float s = max(dot(d, normalize(sunDir)), 0.0);
        col += vec3(1.0, 0.98, 0.92) * (pow(s, 5.0) * 0.22 + pow(s, 48.0) * 0.55 + pow(s, 700.0) * 7.0);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}var Ac=class{constructor(t,e){this.sunDir=e,this.dome=new ut(new ge(3e3,48,24),bu(e)),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),this.clouds=new me;let n=[mc(37),mc(53),mc(71)],i=ne(5),r=(o,a,c,l)=>{let h=new fs({map:n[Math.floor(i()*3)],transparent:!0,depthWrite:!1,fog:!1,opacity:.96}),u=new fr(h);u.position.set(Math.cos(o)*a,c,Math.sin(o)*a),u.scale.set(l,l*.5,1),u.userData={azimuth:o,dist:a,speed:.002+i()*.003},this.clouds.add(u)};for(let o=0;o<44;o++)r(i()*Math.PI*2,700+i()*1200,160+i()*380,100+i()*150);for(let o=0;o<10;o++)r(-Math.PI/2+(i()-.5)*1.6,1200+i()*500,70+i()*90,190+i()*150);t.add(this.clouds)}update(t,e){this.dome.position.copy(e.position);for(let n of this.clouds.children){let i=n.userData;i.azimuth+=i.speed*t*.1,n.position.x=Math.cos(i.azimuth)*i.dist+e.position.x*.9,n.position.z=Math.sin(i.azimuth)*i.dist+e.position.z*.9}}},Rc=class{constructor(t,e){this.root=t,this.colliders=e,this.vis=0,this.burst=document.createElement("div"),this.burst.className="flare-burst",this.burst.style.backgroundImage=`url(${Ep()})`,t.appendChild(this.burst),this.ghosts=[[.35,.14,"ghost-green"],[.62,.05,"ghost-ring"],[.85,.08,"ghost-blue"],[1.18,.2,"ghost-rainbow"],[1.45,.04,"ghost-green"],[1.7,.11,"ghost-blue"]].map(([n,i,r])=>{let o=document.createElement("div");return o.className="flare-ghost "+r,t.appendChild(o),{el:o,t:n,size:i}}),this.veil=document.createElement("div"),this.veil.className="flare-veil",t.appendChild(this.veil),this._v=new w}update(t,e,n,i=!0){let r=window.innerWidth,o=window.innerHeight,a=this._v.copy(e.position).addScaledVector(n,1e3).project(e),l=!(a.z<1&&Math.abs(a.x)<1.25&&Math.abs(a.y)<1.25)||this.colliders.rayBlocked(e.position,n,1500),h=i&&!l?1:0;this.vis+=(h-this.vis)*(1-Math.exp(-t*8));let u=(a.x*.5+.5)*r,d=(-a.y*.5+.5)*o,f=oe(1.25-Math.max(Math.abs(a.x),Math.abs(a.y)),0,1),m=this.vis*Math.min(1,f*2.5);if(this.root.style.opacity=m.toFixed(3),m<.01)return;let x=o*.62;this.burst.style.transform=`translate(${u-x/2}px, ${d-x/2}px)`,this.burst.style.width=this.burst.style.height=x+"px";let g=r/2,p=o/2;for(let M of this.ghosts){let _=u+(g-u)*M.t*2,P=d+(p-d)*M.t*2,E=o*M.size*2;M.el.style.transform=`translate(${_-E/2}px, ${P-E/2}px)`,M.el.style.width=M.el.style.height=E+"px"}let v=oe(1-Math.hypot(a.x,a.y)/1.2,0,1);this.veil.style.opacity=(v*.35).toFixed(3)}};var Uo=class s extends ut{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Ce;let n=this,i=e.color!==void 0?new nt(e.color):new nt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||s.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,h=new Fn,u=new w,d=new w,f=new w,m=new Nt,x=new w(0,0,-1),g=new Qt,p=new w,v=new w,M=new Qt,_=new Nt,P=this.camera,E=new De(r,o,{samples:l,type:Ge}),R=new ye({name:c.name!==void 0?c.name:"unspecified",uniforms:ei.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=E.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(C,S,y){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(d,f),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),m.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(m),x.add(f),v.subVectors(d,x),v.reflect(u).negate(),v.add(d),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(m),P.up.reflect(u),P.lookAt(v),P.far=y.far,P.updateMatrixWorld(),P.projectionMatrix.copy(y.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(P.projectionMatrix),_.multiply(P.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(P.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let T=P.projectionMatrix;M.x=(Math.sign(g.x)+T.elements[8])/T.elements[0],M.y=(Math.sign(g.y)+T.elements[9])/T.elements[5],M.z=-1,M.w=(1+T.elements[10])/T.elements[14],g.multiplyScalar(2/g.dot(M)),T.elements[2]=g.x,T.elements[6]=g.y,T.elements[10]=g.z+1-a,T.elements[14]=g.w,n.visible=!1;let L=C.getRenderTarget(),U=C.xr.enabled,N=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(S,P),C.xr.enabled=U,C.shadowMap.autoUpdate=N,C.setRenderTarget(L);let H=y.viewport;H!==void 0&&C.state.viewport(H),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};Uo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var pM={name:"AeroWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},time:{value:0},sunDir:{value:new w(0,1,0)},deep:{value:new nt(2068392)}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform vec3 color;
    uniform vec3 deep;
    uniform vec3 sunDir;
    uniform sampler2D tDiffuse;
    uniform float time;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 p = vWorld.xz;
      vec2 w = vec2(
        sin(p.x * 0.55 + time * 1.1 + p.y * 0.25) + 0.5 * sin(p.x * 2.3 - time * 1.9 + p.y * 1.1) + 0.15 * sin(p.y * 4.7 + time * 2.6),
        cos(p.y * 0.6 - time * 0.9 + p.x * 0.2) + 0.5 * cos(p.y * 2.1 + time * 1.7 - p.x * 0.9) + 0.15 * cos(p.x * 5.1 - time * 2.4)
      );
      vec4 uv = vUv;
      uv.xy += w * 0.0032 * uv.w;
      vec3 refl = texture2DProj(tDiffuse, uv).rgb;
      vec3 V = normalize(cameraPosition - vWorld);
      float fres = 0.35 + 0.65 * pow(1.0 - max(V.y, 0.0), 3.0);
      vec3 base = mix(deep, color, 0.5 + 0.5 * V.y);
      vec3 col = mix(base, refl, clamp(fres * 0.9 + 0.12, 0.0, 1.0));
      vec3 n = normalize(vec3(-w.x * 0.06, 1.0, -w.y * 0.06));
      vec3 r = reflect(-V, n);
      float spec = pow(max(dot(r, normalize(sunDir)), 0.0), 240.0);
      col += vec3(1.0, 0.98, 0.9) * spec * 2.5;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`},Cc=class{constructor(t,e,n=.5){let i=new zn(Oe.rx*2+40,Oe.rz*2+40);this.scale=n,this.mirror=new Uo(i,{clipBias:.003,textureWidth:Math.max(256,window.innerWidth*n),textureHeight:Math.max(256,window.innerHeight*n),color:6279398,shader:pM,multisample:0}),this.mirror.rotation.x=-Math.PI/2,this.mirror.position.set(Oe.cx,Pr,Oe.cz),this.mirror.material.uniforms.sunDir.value=e;let r=this.mirror.onBeforeRender;this.mirror.onBeforeRender=function(o,...a){let c=o.shadowMap.autoUpdate;o.shadowMap.autoUpdate=!1,r.call(this,o,...a),o.shadowMap.autoUpdate=c},t.add(this.mirror),this.fountain=new Eu(t,new w(Oe.cx-30,Pr,Oe.cz-4))}setResolution(t){this.scale=t,this.resize()}resize(){this.mirror.getRenderTarget().setSize(Math.max(256,window.innerWidth*this.scale),Math.max(256,window.innerHeight*this.scale))}update(t,e){this.mirror.material.uniforms.time.value=e,this.fountain.update(t)}},Eu=class{constructor(t,e){this.origin=e,this.jets=[{x:0,z:0,up:15,spread:.6,share:.4}];for(let r=0;r<8;r++){let o=r/8*Math.PI*2;this.jets.push({x:Math.cos(o)*4,z:Math.sin(o)*4,up:7.5,spread:.35,out:[Math.cos(o)*1.2,Math.sin(o)*1.2],share:.075})}this.N=2e3,this.p=new Float32Array(this.N*3),this.v=new Float32Array(this.N*3),this.age=new Float32Array(this.N);for(let r=0;r<this.N;r++)this.reset(r,Math.random()*2.5);let n=new le;n.setAttribute("position",new Ie(this.p,3)),this.points=new gr(n,new ps({size:.8,map:du(),transparent:!0,depthWrite:!1,opacity:.85,color:16055807,sizeAttenuation:!0})),this.points.frustumCulled=!1,t.add(this.points);let i=new ut(new Hn(6.5,40),new Me({map:du(),transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.copy(e).add(new w(0,.03,0)),t.add(i)}reset(t,e=0){let n=Math.random(),i=this.jets[0];for(let o of this.jets){if(n<o.share){i=o;break}n-=o.share}let r=this.origin;this.p[t*3]=r.x+i.x,this.p[t*3+1]=r.y,this.p[t*3+2]=r.z+i.z,this.v[t*3]=(i.out?i.out[0]:0)+(Math.random()-.5)*i.spread,this.v[t*3+1]=i.up*(.85+Math.random()*.2),this.v[t*3+2]=(i.out?i.out[1]:0)+(Math.random()-.5)*i.spread,this.age[t]=0,e>0&&this.step(t,e)}step(t,e){this.v[t*3+1]-=9.8*e,this.p[t*3]+=this.v[t*3]*e,this.p[t*3+1]+=this.v[t*3+1]*e,this.p[t*3+2]+=this.v[t*3+2]*e,this.age[t]+=e}update(t){t=Math.min(t,.05);for(let e=0;e<this.N;e++)this.step(e,t),this.p[e*3+1]<this.origin.y&&this.reset(e);this.points.geometry.attributes.position.needsUpdate=!0}};var mM=`
  attribute float aAlpha;
  attribute float aHue;
  varying vec3 vN;
  varying vec3 vV;
  varying float vAlpha;
  varying float vHue;
  void main() {
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    vAlpha = aAlpha;
    vHue = aHue;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,gM=`
  uniform float time;
  uniform vec3 lightDir;
  varying vec3 vN;
  varying vec3 vV;
  varying float vAlpha;
  varying float vHue;
  vec3 hue(float h) {
    return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  }
  void main() {
    vec3 n = normalize(vN);
    vec3 v = normalize(vV);
    float f = 1.0 - abs(dot(n, v));
    float rim = pow(f, 2.2);
    vec3 irid = hue(f * 1.3 + vHue + time * 0.04);
    vec3 col = mix(vec3(0.9, 0.98, 1.0), irid, 0.5) * (rim * 1.5 + 0.08);
    vec3 h = normalize(normalize(lightDir) + v);
    float spec = pow(max(dot(n, h), 0.0), 90.0);
    float spec2 = pow(max(dot(n, normalize(vec3(-0.4, -0.3, 0.8) + v)), 0.0), 40.0) * 0.3;
    col += vec3(1.0) * (spec * 1.8 + spec2);
    float a = clamp(rim * 0.85 + spec + spec2 + 0.05, 0.0, 1.0) * vAlpha;
    gl_FragColor = vec4(col, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Ic=class{constructor(t,e,n=70){this.count=n;let i=new ge(1,28,18);this.alpha=new Float32Array(n).fill(1);let r=new Float32Array(n).map(()=>Math.random());i.setAttribute("aAlpha",new vn(this.alpha,1)),i.setAttribute("aHue",new vn(r,1)),this.material=new ye({vertexShader:mM,fragmentShader:gM,uniforms:{time:{value:0},lightDir:{value:e}},transparent:!0,depthWrite:!1}),this.mesh=new Jn(i,this.material,n),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,t.add(this.mesh),this.items=[],this.center=new w;for(let o=0;o<n;o++)this.items.push({pos:new w,r:.5,phase:0,rise:.5,pop:-1});this.radius=40,this.popped=0,this._m=new Nt,this._q=new ze,this._s=new w}spawn(t,e){let n=Math.random()*Math.PI*2,i=4+Math.sqrt(Math.random())*this.radius,r=this.center.x+Math.cos(n)*i,o=this.center.z+Math.sin(n)*i,a=_c(r,o);t.pos.set(r,a+(e?.6+Math.random()*14:.3+Math.random()*2),o),t.r=.3+Math.random()**2*1.1,t.phase=Math.random()*10,t.rise=.35+Math.random()*.6,t.pop=-1,t.ground=a}reset(t){this.center.copy(t);for(let e of this.items)this.spawn(e,!0)}update(t,e,n,i,r){this.center.copy(n),this.material.uniforms.time.value=e;for(let o=0;o<this.count;o++){let a=this.items[o],c=a.r,l=1;if(a.pop>=0){a.pop+=t;let u=a.pop/.22;c=a.r*(1+u*.6),l=Math.max(0,1-u),u>=1&&this.spawn(a,!1)}else{a.pos.y+=a.rise*t,a.pos.x+=Math.sin(e*.7+a.phase)*.35*t,a.pos.z+=Math.cos(e*.6+a.phase*1.3)*.35*t;let u=Math.hypot(a.pos.x-n.x,a.pos.z-n.z)>this.radius+15;(a.pos.y>a.ground+24||u)&&this.spawn(a,!1),l=Math.min(1,(a.pos.y-a.ground)/1.2,(a.ground+24-a.pos.y)/4),i&&a.pos.distanceTo(i)<a.r+.75&&(a.pop=0,this.popped++,r?.(a))}let h=1+Math.sin(e*3+a.phase)*.03;this._m.compose(a.pos,this._q,this._s.set(c*h,c/h,c*h)),this.mesh.setMatrixAt(o,this._m),this.alpha[o]=Math.max(0,l)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.geometry.attributes.aAlpha.needsUpdate=!0}};function Tu(s,t){if(t===Zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===xo||t===Qa){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===xo)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var Pc=class extends Ei{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Lu(e)}),this.register(function(e){return new Du(e)}),this.register(function(e){return new Vu(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new Nu(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new Ou(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new Pu(e)}),this.register(function(e){return new zu(e)}),this.register(function(e){return new Uu(e)}),this.register(function(e){return new ku(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new Cu(e)}),this.register(function(e){return new Xu(e)}),this.register(function(e){return new qu(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ki.extractUrlBase(t);o=Ki.resolveURL(l,this.path)}else o=Ki.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new po(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===qp){try{o[Kt.KHR_BINARY_GLTF]=new Yu(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Kt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new td(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:o[u]=new Iu;break;case Kt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Zu(r,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:o[u]=new Ku;break;case Kt.KHR_MESH_QUANTIZATION:o[u]=new $u;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function xM(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Cu=class{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new nt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],$e);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Zi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ti(h),l.distance=u;break;case"spot":l=new Za(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},Iu=class{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return Me}extendParams(t,e,n){let i=[];t.color=new nt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],$e),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,be))}return Promise.all(i)}},Pu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},Lu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new K(a,a)}return Promise.all(r)}},Du=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Uu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Nu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new nt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],$e)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,be)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Fu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ou=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new nt().setRGB(a[0],a[1],a[2],$e),Promise.all(r)}},Bu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},zu=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new nt().setRGB(a[0],a[1],a[2],$e),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,be)),Promise.all(r)}},Hu=class{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},ku=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Se}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Vu=class{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Gu=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Wu=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Xu=class{constructor(t){this.name=Kt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},qu=class{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let x=new Nt,g=new w,p=new ze,v=new w(1,1,1),M=new Jn(m.geometry,m.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),M.setMatrixAt(_,x.compose(g,p,v));for(let _ in c)if(_==="_COLOR_0"){let P=c[_];M.instanceColor=new vn(P.array,P.itemSize,P.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);ve.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},qp="glTF",No=12,Vp={JSON:1313821514,BIN:5130562},Yu=class{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,No),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-No,r=new DataView(t,No),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Vp.JSON){let l=new Uint8Array(t,No+o,a);this.content=n.decode(l)}else if(c===Vp.BIN){let l=No+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Zu=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ju[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=ju[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[t.attributes[h]],f=Nr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(f)},a,l,$e,d)})})}},Ku=class{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},$u=class{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}},Lc=class extends Xi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,x=m-l,g=-2*f+3*d,p=f-d,v=1-g,M=p-d+u;for(let _=0;_!==a;_++){let P=o[x+_+a],E=o[x+_+c]*h,R=o[m+_+a],C=o[m+_]*h;r[_]=v*P+M*E+g*R+p*C}return r}},_M=new ze,Ju=class extends Lc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return _M.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gp={9728:Ke,9729:Ze,9984:Jh,9985:Jr,9986:Xs,9987:Yn},Wp={33071:pi,33648:io,10497:xi},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ju={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},Au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),s.DefaultMaterial}function Es(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function wi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function MM(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function SM(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bM(s){let t,e=s.extensions&&s.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ru(e.attributes):t=s.indices+":"+Ru(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Ru(s.targets[n]);return t}function Ru(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Qu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var TM=new Nt,td=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new xM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ya(this.options.manager):this.textureLoader=new $a(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Es(r,a,i),wi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ki.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=wu[i.type],a=Nr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ie(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=wu[i.type],l=Nr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=e.cache.get(v);M||(x=new l(a,p*f,i.count*f/h),M=new dr(x,f/h),e.cache.add(v,M)),g=new ds(M,c,d%f/h,m)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),g=new Ie(x,c,m);if(i.sparse!==void 0){let p=wu.SCALAR,v=Nr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,P=new v(o[1],M,i.sparse.count*p),E=new l(o[2],_,i.sparse.count*c);a!==null&&(g=new Ie(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,C=P.length;R<C;R++){let S=P[R];if(g.setX(S,E[R*c]),c>=2&&g.setY(S,E[R*c+1]),c>=3&&g.setZ(S,E[R*c+2]),c>=4&&g.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Gp[d.magFilter]||Ze,h.minFilter=Gp[d.minFilter]||Yn,h.wrapS=Wp[d.wrapS]||xi,h.wrapT=Wp[d.wrapT]||xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ke&&h.minFilter!==Ze,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(x){let g=new He(x);g.needsUpdate=!0,d(g)}),e.load(Ki.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),wi(u,o),u.userData.mimeType=o.mimeType||EM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Kt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ps,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new co,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ft}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Kt.KHR_MATERIALS_UNLIT]){let u=i[Kt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new nt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],$e),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,be)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=pe);let h=r.alphaMode||Au.OPAQUE;if(h===Au.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Au.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Me&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new K(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Me&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Me){let u=r.emissiveFactor;a.emissive=new nt().setRGB(u[0],u[1],u[2],$e)}return r.emissiveTexture!==void 0&&o!==Me&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,be)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),wi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Es(i,u,r),u})}createUniqueName(t){let e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Xp(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=bM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Xp(new le,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?vM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=o[f],p,v=l[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new La(x,v):new ut(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===In.TRIANGLE_STRIP?p.geometry=Tu(p.geometry,Qa):g.mode===In.TRIANGLE_FAN&&(p.geometry=Tu(p.geometry,xo));else if(g.mode===In.LINES)p=new Fa(x,v);else if(g.mode===In.LINE_STRIP)p=new mr(x,v);else if(g.mode===In.LINE_LOOP)p=new Oa(x,v);else if(g.mode===In.POINTS)p=new gr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&SM(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),wi(p,r),g.extensions&&Es(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Es(i,u[0],r),u[0];let d=new me;r.extensions&&Es(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ce(ec.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Hi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),wi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Nt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Da(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let v=0,M=d.length;v<M;v++){let _=d[v],P=f[v],E=m[v],R=x[v],C=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,P,E,R,C);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new _r(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,TM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ao:l.length>1?h=new me:l.length===1?h=l[0]:h=new ve,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),wi(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let u=new Nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new me;n.name&&(r.name=i.createUniqueName(n.name)),wi(r,n),n.extensions&&Es(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof on||d instanceof He)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];ts[r.path]===ts.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ts[r.path]){case ts.weights:l=Mi;break;case ts.rotation:l=Si;break;case ts.position:case ts.scale:l=bi;break;default:switch(n.itemSize){case 1:l=Mi;break;case 2:case 3:default:l=bi;break}break}let h=i.interpolation!==void 0?yM[i.interpolation]:or,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+ts[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Qu(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Si?Ju:Lc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wM(s,t,e){let n=t.attributes,i=new rn;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let h=Qu(Nr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Qu(Nr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xp(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ju[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Zt.workingColorSpace!==$e&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`),wi(s,t),wM(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?MM(s,t.targets,e):s})}function AM(s){let t=new Se({color:s,roughness:.15,metalness:0,clearcoat:1,clearcoatRoughness:.03,emissive:24831,emissiveIntensity:.25});return t.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`
      // paint the icon gradient ourselves, keep only the light's shading and gloss
      float facing = clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
      vec3 jellyCol = mix(vec3(0.0, 0.025, 0.2), vec3(0.0, 0.2, 0.95), smoothstep(0.04, 0.42, facing));
      jellyCol = mix(jellyCol, vec3(0.08, 0.85, 1.0), pow(facing, 3.5) * 0.75);
      float lit = dot(totalDiffuse, vec3(0.333)) / max(dot(diffuseColor.rgb, vec3(0.333)), 0.001);
      vec3 gloss = totalSpecular;
      #ifdef USE_CLEARCOAT
        gloss += (clearcoatSpecularDirect + clearcoatSpecularIndirect) * material.clearcoat;
      #endif
      outgoingLight = jellyCol * clamp(lit * 0.35, 0.6, 1.15) + gloss * 0.7;
      #include <opaque_fragment>`)},t.customProgramCacheKey=()=>"aero-jelly",t}var ed={body:AM(683263)};function nd(s,t,e,n=0,i=0,r=0,o=1,a=1,c=1){let l=new ut(t,e);return l.position.set(n,i,r),l.scale.set(o,a,c),l.castShadow=!0,s.add(l),l}function Dc(s,t,e,n){let i=new me;return i.position.set(t,e,n),s.add(i),i}var Uc=class{constructor(){this.root=new me,this.state={speed:0,grounded:!0,vy:0,wave:!1},this.phase=0,this.amp=0,this.air=0,this.waveAmt=0,this.time=0,this.mixer=null,this.buildProcedural()}buildProcedural(){let t=this.model=new me;this.root.add(t);let e=this.hips=Dc(t,0,0,0),n=this.torso=Dc(e,0,0,0),i=[[0,0],[.4,0],[.47,.03],[.5,.1],[.5,.36],[.48,.58],[.42,.76],[.31,.89],[.16,.96],[0,.98]].map(([o,a])=>new K(o,a)),r=new Gi(new Vi(i).getPoints(40),48);nd(n,r,ed.body,0,0,0,1,1,.82),this.head=Dc(n,0,1,0),nd(this.head,new ge(.33,48,32),ed.body,0,.3,0),this.arms=[];for(let o of[1,-1]){let a=Dc(n,o*.43,.74,0),c=nd(a,new ka(.115,.34,10,20),ed.body,0,-.27,0,1,1,.85);c.rotation.z=o*.08,this.arms.push({shoulder:a,side:o})}}async tryLoadModel(t){if(location.protocol==="file:")return!1;try{if(!(await fetch(t,{method:"HEAD"})).ok)return!1;let n=await new Pc().loadAsync(t),i=n.scene,r=new rn().setFromObject(i),a=1.75/(r.getSize(new w).y||1);if(i.scale.setScalar(a),i.position.set(-((r.min.x+r.max.x)/2)*a,-r.min.y*a,-((r.min.z+r.max.z)/2)*a),i.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),this.root.remove(this.model),this.model=new me,this.model.add(i),this.root.add(this.model),this.hips=null,n.animations.length){this.mixer=new Ja(i);let c=l=>n.animations.find(h=>l.test(h.name));this.clips={idle:c(/idle|stand/i)??n.animations[0],walk:c(/walk/i),run:c(/run|jog/i)},this.actions={};for(let[l,h]of Object.entries(this.clips)){if(!h)continue;let u=this.mixer.clipAction(h);u.play(),u.setEffectiveWeight(l==="idle"?1:0),this.actions[l]=u}}return!0}catch{return!1}}update(t){this.time+=t;let e=this.state;if(!this.hips)return this.updateLoaded(t);let n=this.time,i=1-Math.exp(-t*10),r=oe((e.speed-4.5)/3.5,0,1);this.amp=ke(this.amp,e.grounded?oe(e.speed/4,0,1):0,i),this.air=ke(this.air,e.grounded?0:1,1-Math.exp(-t*12)),this.waveAmt=ke(this.waveAmt,e.wave?1:0,1-Math.exp(-t*5)),e.speed>.15&&e.grounded&&(this.phase+=t*(e.speed*2.3+1.5)/(1+r*.3));let o=this.amp,a=this.air,c=Math.sin(this.phase),l=Math.abs(c),h=Math.sin(n*2.2)*.015;this.hips.position.y=l*.13*o,this.hips.rotation.z=Math.cos(this.phase)*.09*o,this.torso.rotation.x=r*.18+o*.05-a*.08;let u=1+h+(1-l)*.07*o-a*.06*(e.vy>0?-1:1);this.torso.scale.set(1/Math.sqrt(u),u,1/Math.sqrt(u)),this.head.rotation.y=(1-o)*Math.sin(n*.45)*.25*(1-this.waveAmt),this.head.rotation.z=this.waveAmt*.12+Math.sin(n*1.1)*.03,this.head.position.y=1+Math.sin(n*2.2+.6)*.01;for(let d of this.arms){let f=d.side,m=f<0?this.waveAmt:0;d.shoulder.rotation.x=ke(c*f*o*.7,-.2,m),d.shoulder.rotation.z=ke(f*(.05+.04*Math.sin(n*1.3))+f*a*.9,-2.5+Math.sin(n*8)*.3,m)}}updateLoaded(t){if(!this.mixer){this.model.position.y=Math.abs(Math.sin(this.time*this.state.speed*1.5))*.05;return}let e=this.state.speed,n={idle:oe(1-e/2,0,1),walk:oe(1-Math.abs(e-3.5)/3,0,1),run:oe((e-4)/3,0,1)};this.actions.run||(n.walk=Math.max(n.walk,n.run)),this.actions.walk||(n.idle=1);let i=Object.keys(this.actions).reduce((r,o)=>r+n[o],0)||1;for(let[r,o]of Object.entries(this.actions))o.setEffectiveWeight(n[r]/i);this.mixer.update(t)}};var RM=6.6,CM=14.25,IM=6.4,PM=19,Yp=.36,LM=[0,.4,-.4,.8,-.8,1.2,-1.2],Nc=class{constructor(t){this.keys=new Set,this.dx=0,this.dy=0,this.wheel=0,this.jump=!1,this.el=t,addEventListener("keydown",e=>{this.keys.add(e.code),e.code==="Space"&&(this.jump=!0)}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{(document.pointerLockElement===t||this.dragging)&&(this.dx+=e.movementX,this.dy+=e.movementY)}),t.addEventListener("mousedown",e=>{e.button===2&&(this.dragging=!0)}),addEventListener("mouseup",()=>this.dragging=!1),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY)},{passive:!0})}down(...t){return t.some(e=>this.keys.has(e))}consume(){let t={dx:this.dx,dy:this.dy,wheel:this.wheel,jump:this.jump};return this.dx=this.dy=this.wheel=0,this.jump=!1,t}},Fc=class{constructor(t,e,n,i,r){this.character=t,this.camera=e,this.colliders=n,this.input=i,this.settings=r,this.pos=new w,this.vel=new w,this.facing=0,this.grounded=!0,this.camYaw=0,this.camPitch=.28,this.camDist=6.5,this.camPos=new w,this.target=new w,this.onJump=null}groundAt(t,e){return this.world?this.world.floorY:_c(t,e)}blockedAt(t,e){return this.world?!this.world.inside(t,e,Yp):Lp(t,e)}get cols(){return this.world?this.world.colliders:this.colliders}place(t,e,n){this.pos.set(t,this.groundAt(t,e),e),this.vel.set(0,0,0),this.facing=n,this.camYaw=n+Math.PI,this.syncCharacter()}syncCharacter(){this.character.root.position.copy(this.pos),this.character.root.rotation.y=this.facing}desiredCamera(t,e){let n=Math.cos(this.camPitch);return t.set(e.x+Math.sin(this.camYaw)*n*this.camDist,e.y+Math.sin(this.camPitch)*this.camDist,e.z+Math.cos(this.camYaw)*n*this.camDist),t}update(t,e){let n=e?this.input.consume():{dx:0,dy:0,wheel:0,jump:!1},i=.0025*this.settings.sensitivity;this.camYaw-=n.dx*i,this.camPitch=oe(this.camPitch+n.dy*i*(this.settings.invertY?-1:1),-.6,1.25),this.camDist=oe(this.camDist+n.wheel*.8,2.5,16);let r=0,o=0;if(e){let T=this.input;T.down("KeyW","ArrowUp")&&(o+=1),T.down("KeyS","ArrowDown")&&(o-=1),T.down("KeyA","ArrowLeft")&&(r-=1),T.down("KeyD","ArrowRight")&&(r+=1)}let a=-Math.sin(this.camYaw),c=-Math.cos(this.camYaw),l=Math.cos(this.camYaw),h=-Math.sin(this.camYaw),u=a*o+l*r,d=c*o+h*r,f=Math.hypot(u,d),x=(e&&this.input.down("ShiftLeft","ShiftRight")?CM:RM)*(this.world?.speedScale??1);f>0&&(u/=f,d/=f);let g=this.grounded?14:4,p=1-Math.exp(-g*t);this.vel.x=ke(this.vel.x,u*x,p),this.vel.z=ke(this.vel.z,d*x,p),n.jump&&this.grounded&&(this.vel.y=IM,this.grounded=!1,this.onJump?.()),this.vel.y-=PM*t;let v=this.pos,M=v.x,_=v.z,P=(T,L)=>!this.blockedAt(T,L)&&!(this.grounded&&this.groundAt(T,L)-v.y>.6),E=this.vel.x*t,R=this.vel.z*t;if(E*E+R*R>1e-10){let T=!1;for(let L of LM){let U=Math.cos(L),N=Math.sin(L),H=oe(v.x+(E*U-R*N)*U,-wo,wo),O=oe(v.z+(E*N+R*U)*U,-wo,wo);if(P(H,O)){v.x=H,v.z=O,T=!0;break}}T||(this.vel.x=this.vel.z=0)}this.cols.resolve(v,Yp),this.blockedAt(v.x,v.z)&&(v.x=M,v.z=_);let C=this.groundAt(v.x,v.z);v.y+=this.vel.y*t,v.y<=C||this.grounded&&v.y-C<.35&&this.vel.y<=0?(v.y=C,this.vel.y=0,this.grounded=!0):this.grounded=!1;let S=Math.hypot(this.vel.x,this.vel.z);if(f>0&&S>.3){let L=Math.atan2(this.vel.x,this.vel.z)-this.facing;L=Math.atan2(Math.sin(L),Math.cos(L)),this.facing+=L*(1-Math.exp(-t*12))}this.syncCharacter();let y=this.character.state;y.speed=S,y.grounded=this.grounded,y.vy=this.vel.y,y.wave=!1}updateCamera(t,e=!1){this.target.set(this.pos.x,this.pos.y+1.45,this.pos.z);let n=this.desiredCamera(new w,this.target),i=n.clone().sub(this.target),r=i.length();i.divideScalar(r);let o=r;for(let c=.6;c<=r;c+=.4){let l=this.target.x+i.x*c,h=this.target.y+i.y*c,u=this.target.z+i.z*c;if(this.world&&(!this.world.inside(l,u,.25)||h>this.world.ceiling-.3)||this.cols.solidAt(l,h,u,.35)){o=Math.max(.8,c-.5);break}}n.copy(this.target).addScaledVector(i,o);let a=this.groundAt(n.x,n.z)+.4;if(n.y<a){if(i.y<-.05){let c=Math.max(1,(this.target.y-a)/-i.y);n.copy(this.target).addScaledVector(i,Math.min(c,o))}n.y=Math.max(n.y,a)}e?this.camPos.copy(n):this.camPos.lerp(n,1-Math.exp(-t*14)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.target)}};var id=s=>440*2**((s-69)/12),Oc=class{constructor(t){this.settings=t,this.ctx=null,this.track=new Audio("assets/music.mp3"),this.track.loop=!0,this.track.preload="auto"}start(){if(this.applyVolumes(),this.track.paused&&this.track.play().catch(()=>{}),this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(e.destination),this.music=e.createGain(),this.sfx=e.createGain(),this.applyVolumes();let n=e.createConvolver();n.buffer=this.impulse(3.2);let i=e.createGain();i.gain.value=.55,n.connect(i).connect(this.master),this.music.connect(this.master),this.sfx.connect(this.master),this.sfx.connect(n)}applyVolumes(){this.track.volume=Math.min(1,.7*this.settings.music),this.ctx&&(this.music.gain.value=.22*this.settings.music,this.sfx.gain.value=.4*this.settings.sfx)}impulse(t){let e=this.ctx,n=Math.floor(e.sampleRate*t),i=e.createBuffer(2,n,e.sampleRate);for(let r=0;r<2;r++){let o=i.getChannelData(r);for(let a=0;a<n;a++)o[a]=(Math.random()*2-1)*(1-a/n)**2.6}return i}bell(t,e,n,i=this.music){let r=this.ctx,o=r.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+1.6);for(let[a,c]of[[1,1],[2.76,.3],[5.4,.12]]){let l=r.createOscillator(),h=r.createGain();h.gain.value=c,l.frequency.value=t*a,l.connect(h).connect(o),l.start(e),l.stop(e+1.7)}o.connect(i)}blip(t,e,n=.09,i=.25){if(!this.ctx)return;let r=this.ctx,o=r.currentTime,a=r.createOscillator(),c=r.createGain();a.type="sine",a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(e,o+n),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(1e-4,o+n+.08),a.connect(c).connect(this.sfx),a.start(o),a.stop(o+n+.1)}hover(){this.blip(1500,1900,.04,.08)}click(){this.ctx&&(this.bell(id(84),this.ctx.currentTime,.12,this.sfx),this.bell(id(91),this.ctx.currentTime+.07,.09,this.sfx))}pop(){this.blip(500+Math.random()*200,1700+Math.random()*500,.07,.3)}jump(){this.blip(380,760,.12,.12)}whoosh(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.impulse(1.2);let i=t.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(400,e),i.frequency.exponentialRampToValueAtTime(3e3,e+.9);let r=t.createGain();r.gain.value=.35,n.connect(i).connect(r).connect(this.sfx),n.start(e),[72,76,79,84].forEach((o,a)=>this.bell(id(o),e+.12+a*.09,.1,this.sfx))}};var we=s=>document.getElementById(s),Bc=class{constructor(t){this.game=t,this.screens=["loading","menu","hud","pause","goodbye"],this.current="loading",this.modal=null,this.focusIndex=0,document.addEventListener("click",n=>{let i=n.target.closest("[data-action]");if(i){t.audio.click(),this.action(i.dataset.action);return}(n.target.closest("[data-close]")||n.target.classList.contains("modal"))&&(t.audio.click(),this.closeModal())}),document.addEventListener("mouseover",n=>{let i=n.target.closest(".aero-btn");if(i&&i!==this.hovered){this.hovered=i,t.audio.hover();let o=this.focusables().indexOf(i);o>=0&&this.setFocus(o,!1)}i||(this.hovered=null)}),addEventListener("keydown",n=>this.key(n));let e=()=>t.audio.start();addEventListener("pointerdown",e),addEventListener("keydown",e),this.bindOptions(),this.tickClock(),setInterval(()=>this.tickClock(),1e3*15)}show(t){this.current=t;for(let e of this.screens)we(e).classList.toggle("show",e===t);this.setFocus(0,!1)}progress(t,e){we("load-fill").style.width=Math.round(t*100)+"%",e&&(we("load-text").textContent=e)}focusables(){let t=this.modal?we(this.modal):we(this.current);return t?[...t.querySelectorAll(".aero-btn")]:[]}setFocus(t,e=!0){let n=this.focusables();document.querySelectorAll(".aero-btn.focus").forEach(i=>i.classList.remove("focus")),n.length&&(this.focusIndex=(t+n.length)%n.length,n[this.focusIndex].classList.add("focus"),e&&this.game.audio.hover())}key(t){let e=this.game;if(t.code==="Escape")return this.modal?this.closeModal():e.seated?e.standUp():e.state==="playing"?e.pause():e.state==="paused"&&performance.now()-e.pausedAt>400?e.resume():void 0;if(this.modal||["menu","pause","goodbye"].includes(this.current)){if(t.code==="ArrowDown"||t.code==="ArrowUp")t.preventDefault(),this.setFocus(this.focusIndex+(t.code==="ArrowDown"?1:-1));else if(t.code==="Enter"||t.code==="Space"){t.preventDefault();let i=this.focusables()[this.focusIndex];i&&i.click()}}}action(t){let e=this.game;switch(t){case"play":return e.startPlay();case"options":return this.openModal("options");case"credits":return this.openModal("credits");case"quit":return e.quit();case"back":return e.toMenu();case"resume":return e.resume();case"menu":return e.toMenu()}}openModal(t){this.modal=t,we(t).classList.add("show"),this.syncOptions(),this.setFocus(0,!1)}closeModal(){this.modal&&(we(this.modal).classList.remove("show"),this.modal=null,this.setFocus(0,!1))}bindOptions(){let t=this.game.settings;we("options").querySelectorAll("[data-setting]").forEach(n=>{let i=n.dataset.setting;n.classList.contains("seg")?n.addEventListener("click",r=>{let o=r.target.closest("button");o&&(t[i]=o.dataset.value,this.syncOptions(),this.game.settingsChanged(i))}):n.addEventListener("input",()=>{t[i]=n.type==="checkbox"?n.checked:parseFloat(n.value),this.game.settingsChanged(i)})})}syncOptions(){let t=this.game.settings;we("options").querySelectorAll("[data-setting]").forEach(e=>{let n=t[e.dataset.setting];e.classList.contains("seg")?e.querySelectorAll("button").forEach(i=>i.classList.toggle("on",i.dataset.value===n)):e.type==="checkbox"?e.checked=!!n:e.value=n})}tickClock(){let t=new Date;we("g-time").textContent=t.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),we("g-date").textContent=t.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric"})}placeSpeech(t,e,n){let i=we("speech");i.style.transform=`translate(${Math.round(t)}px, ${Math.round(e-i.offsetHeight)}px)`,i.style.opacity=n?"1":"0"}setCount(t){we("hud-count").textContent=t;let e=we("hud-pill");e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")}setFps(t){we("hud-fps").textContent=t}prompt(t){let e=we("hud-prompt");e.textContent!==t&&(e.textContent=t)}guide(t,e){we("hud-guide").classList.toggle("hidden",t===null),t!==null&&(we("guide-arrow").style.transform=`rotate(${t}rad)`,we("guide-text").textContent!==e&&(we("guide-text").textContent=e))}hint(t){we("hud-hint").classList.toggle("hidden",!t)}helpFade(t){we("hud-help").classList.toggle("faded",t)}fade(t){we("fade").classList.toggle("on",t)}};var $p="frutiger-fun-settings",Zp={quality:"high",music:.6,sfx:.8,sensitivity:1,invertY:!1,showFps:!1};function DM(){try{return{...Zp,...JSON.parse(localStorage.getItem($p)||"{}")}}catch{return{...Zp}}}function UM(s){try{localStorage.setItem($p,JSON.stringify(s))}catch{}}var NM={name:"AeroGrade",uniforms:{tDiffuse:{value:null},saturation:{value:1},vignette:{value:.08}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation, vignette;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = max(mix(vec3(l), c.rgb, saturation), 0.0);
      float d = distance(vUv, vec2(0.5));
      c.rgb *= mix(1.0, 1.0 - vignette, smoothstep(0.42, 0.95, d));
      gl_FragColor = c;
    }`},FM=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0))),Kp=s=>s*s*(3-2*s),sd=class{constructor(){this.settings=DM(),this.audio=new Oc(this.settings),this.ui=new Bc(this),this.canvas=document.getElementById("scene");let t=this.renderer=new Ia({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});t.toneMapping=go,t.toneMappingExposure=1.25,t.shadowMap.enabled=!0,t.shadowMap.type=Xh,t.setSize(innerWidth,innerHeight,!1),this.scene=new vi,this.scene.fog=new Pa(Ur.horizon.clone(),450,2400),this.camera=new Ce(52,innerWidth/innerHeight,.15,8e3),this.sunDir=new w(-.5,.5,.56).normalize(),this.hemi=new vr(15005695,11721864,2.3),this.sun=new Zi(16775402,2.6),this.sun.castShadow=!0;let e=this.sun.shadow.camera;e.left=e.bottom=-75,e.right=e.top=75,e.near=1,e.far=600,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.hemi,this.sun,this.sun.target),this.state="loading",this.time=0,this.stateTime=0,this.clock=new Mr,this.fpsFrames=0,this.fpsTime=0,this.focus=new w,addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state==="playing"&&this.hadLock&&!this.seated&&this.pause(),this.hadLock=!!document.pointerLockElement,this.ui.hint(this.state==="playing"&&!this.seated&&!document.pointerLockElement)}),this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.seated&&!document.pointerLockElement&&this.canvas.requestPointerLock?.()})}async build(){let t=async(i,r)=>{this.ui.progress(i,r),await FM()};await t(.04,"Painting the sky\u2026"),this.colliders=new wr,this.foliage=new xc,this.props=new yc,this.sky=new Ac(this.scene,this.sunDir),this.windmills=new Sc(this.scene),await t(.14,"Planting the park\u2026");let e=Up(this);Np(this),await t(.32,"Raising the skyline\u2026"),Bp(this.scene,this),await t(.52,"Rolling out the hills\u2026"),kp(this.scene,e),await t(.68,"Building the boardwalk\u2026"),this.props.boardwalk(),this.props.build(this.scene),this.foliage.build(this.scene),this.grass=new Ro(this.scene),this.grassFar=new Ro(this.scene,{L:230,density:2.6,width:.16,seed:777,fadeFrom:.3}),await t(.78,"Filling the lake\u2026"),this.lake=new Cc(this.scene,this.sunDir,.5),this.bubbles=new Ic(this.scene,this.sunDir,70),this.character=new Uc,this.scene.add(this.character.root),this.apartment=new Tc,this.door=new w(Po.x,he,Po.z),this.doorPortal=Mu(),this.doorPortal.position.copy(this.door),this.scene.add(this.doorPortal),this.inside=!1,this.portalArmed=!0,this.seated=!1,this.computer=new wc(document.getElementById("pc-screen")),document.getElementById("pc-screen").addEventListener("mousedown",()=>this.computer.click()),addEventListener("keydown",i=>{i.code==="KeyE"&&this.state==="playing"&&!this.seated&&this.nearSeat()&&this.sit()});let n=new ut(new an(.6,1.1,90,24,1,!0),new Me({color:7129343,transparent:!0,opacity:.16,depthWrite:!1,side:pe,blending:zi}));n.position.set(this.door.x,45,this.door.z),this.scene.add(n),await this.character.tryLoadModel("assets/character.glb"),this.input=new Nc(this.canvas),this.player=new Fc(this.character,this.camera,this.colliders,this.input,this.settings),this.player.onJump=()=>this.audio.jump(),this.flare=new Rc(document.getElementById("flare"),this.colliders),await t(.88,"Polishing the glass\u2026"),this.buildEnvironment(),this.apartment.prepare(this.renderer),this.setupComposer(),this.applyQuality(),this.enterMenu(!0),this.renderer.compile(this.scene,this.camera),await t(1,"Ready!")}buildEnvironment(){let t=new vi;t.add(new ut(new ge(100,32,16),bu(this.sunDir)));let e=new ut(new Hn(95,32),new Me({color:8830836}));e.rotation.x=-Math.PI/2,e.position.y=-8,t.add(e);let n=new ki(this.renderer);this.scene.environment=n.fromScene(t,.02,.1,500).texture,this.scene.environmentIntensity=.75,n.dispose()}setupComposer(){let t=new De(innerWidth,innerHeight,{type:Ge,samples:4});this.composer=new ac(this.renderer,t),this.renderPass=new cc(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloom=new Er(new K(innerWidth,innerHeight),.24,.55,1.05),this.composer.addPass(this.bloom),this.composer.addPass(new br(NM)),this.composer.addPass(new lc)}applyQuality(){let t=this.settings.quality==="high",e=Math.min(devicePixelRatio||1,t?1.75:1);this.renderer.setPixelRatio(e),this.renderer.setSize(innerWidth,innerHeight,!1),this.composer.setPixelRatio(e),this.composer.setSize(innerWidth,innerHeight);let n=t?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.lake.setResolution(t?.5:.3),this.useComposer=t,this.grass.setQuality(t),this.grassFar.setQuality(t)}settingsChanged(t){UM(this.settings),t==="quality"&&this.applyQuality(),(t==="music"||t==="sfx")&&this.audio.applyVolumes(),t==="showFps"&&!this.settings.showFps&&this.ui.setFps("")}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.applyQuality(),this.lake.resize()}menuCamera(t,e,n){let{spot:i,f:r,right:o}=Rn,a=Math.sin(t*.09)*.5;e.copy(i).addScaledVector(r,-4.6).addScaledVector(o,-1.8+a),e.y=i.y+1.4+Math.sin(t*.13)*.08,n.copy(e).addScaledVector(r,100).addScaledVector(o,a*2),n.y+=8.5}enterApartment(){this.switching=!0,this.audio.whoosh(),this.ui.fade(!0),setTimeout(()=>{this.setInside(!0);let t=this.apartment.spawn;this.player.place(t.x,t.z,t.facing),this.player.camYaw=t.facing+Math.PI,this.player.camDist=3.4,this.player.camPitch=.32,this.player.updateCamera(0,!0),this.ui.fade(!1),this.switching=!1},420)}leaveApartment(){this.switching=!0,this.audio.whoosh(),this.ui.fade(!0),setTimeout(()=>{this.setInside(!1),this.player.place(this.door.x,this.door.z+4.5,0),this.player.camYaw=Math.PI,this.player.camDist=6.5,this.player.updateCamera(0,!0),this.ui.fade(!1),this.switching=!1},420)}setInside(t){this.inside=t,this.portalArmed=!1;let e=t?this.apartment.scene:this.scene;e.add(this.character.root),this.player.world=t?this.apartment:null,this.renderPass.scene=e}nearSeat(){if(!this.inside)return!1;let t=this.apartment.seat.pos,e=this.player.pos;return Math.hypot(e.x-t.x,e.z-t.z)<2.2}sit(){this.seated=!0,this.seatT=0,document.pointerLockElement&&document.exitPointerLock();let t=this.apartment.seat;this.player.place(t.pos.x,t.pos.z,t.facing),this.player.pos.y=t.pos.y-.05,this.player.syncCharacter(),this.character.state.speed=0,this.seatFrom={pos:this.camera.position.clone(),look:this.player.target.clone()},this.ui.hint(!1)}standUp(){this.seated=!1,this.computer.show(!1),this.input.consume(),this.ui.prompt("");let t=this.apartment.seat,e=new w(Math.sin(t.facing),0,Math.cos(t.facing)).multiplyScalar(-1.3);this.player.place(t.pos.x+e.x,t.pos.z+e.z,t.facing),this.player.updateCamera(0,!0)}screenView(){let t=this.apartment.screenCorners(),e=t[0].clone().add(t[2]).multiplyScalar(.5),n=new w().subVectors(t[1],t[0]).cross(new w().subVectors(t[3],t[0])).normalize();n.dot(new w().subVectors(this.player.pos,e))<0&&n.negate();let r=t[0].distanceTo(t[3])/(2*Math.tan(ec.degToRad(this.camera.fov/2))*.62);return{pos:e.clone().addScaledVector(n,r),look:e,corners:t}}updateSeated(t){this.seatT+=t;let e=Kp(oe(this.seatT/.8,0,1)),n=this.screenView();if(this.camera.position.lerpVectors(this.seatFrom.pos,n.pos,e),this.camera.lookAt(new w().lerpVectors(this.seatFrom.look,n.look,e)),this.camera.updateMatrixWorld(),e>=1){this.computer.show(!0);let i=n.corners.map(l=>l.clone().project(this.camera)),r=i.map(l=>(l.x*.5+.5)*innerWidth),o=i.map(l=>(-l.y*.5+.5)*innerHeight),a=Math.min(...r),c=Math.min(...o);this.computer.place(a,c,Math.max(...r)-a,Math.max(...o)-c),this.ui.prompt("Esc to stand up")}}updateGuide(){let t=this.state==="playing"&&!this.inside,e=new w(this.door.x-this.player.pos.x,0,this.door.z-this.player.pos.z),n=e.length();if(!t||n<6)return this.ui.guide(null);let i=this.player.camYaw,r=-(e.x*Math.sin(i)+e.z*Math.cos(i)),o=e.x*Math.cos(i)-e.z*Math.sin(i);this.ui.guide(Math.atan2(o,r),`Apartment \xB7 ${Math.round(n)} m`)}checkPortals(){let t=this.player.pos,e=this.inside?this.apartment.exit:this.door,n=Math.hypot(t.x-e.x,t.z-e.z);n>1.8&&(this.portalArmed=!0),n<.9&&this.portalArmed&&!this.switching&&(this.inside?this.leaveApartment():this.enterApartment())}enterMenu(t=!1){this.seated&&this.standUp(),this.inside&&this.setInside(!1),this.ui.prompt(""),this.ui.guide(null),this.state="menu",this.stateTime=0;let{spot:e,f:n,right:i}=Rn;this.player.place(e.x,e.z,0);let r=this.camera.position,o=this.menuLookNow??=new w;this.menuCamera(0,r,o),this.camera.lookAt(o);let a=new w(r.x-e.x,0,r.z-e.z).normalize().addScaledVector(i,-.35);this.player.facing=Math.atan2(a.x,a.z),this.player.syncCharacter(),this.character.state.speed=0,this.character.state.grounded=!0,this.bubbles.reset(e.clone().addScaledVector(n,10)),t||this.ui.show("menu")}startPlay(){if(this.state!=="menu")return;this.audio.whoosh(),this.state="intro",this.stateTime=0,this.introFrom={pos:this.camera.position.clone(),look:this.menuLookNow.clone()};let{along:t}=Rn;this.player.facing=Math.atan2(t.x,t.z),this.player.camYaw=this.player.facing+Math.PI,this.player.camPitch=.22,this.player.camDist=6.5,this.player.syncCharacter(),this.ui.show("hud"),this.ui.hint(!0),this.ui.helpFade(!1),clearTimeout(this.helpTimer),this.helpTimer=setTimeout(()=>this.ui.helpFade(!0),12e3),this.bubbles.popped=0,this.ui.setCount(0),this.canvas.requestPointerLock?.()}pause(){this.state==="playing"&&(this.state="paused",this.pausedAt=performance.now(),document.pointerLockElement&&document.exitPointerLock(),this.ui.show("pause"))}resume(){this.state==="paused"&&(this.state="playing",this.ui.show("hud"),this.canvas.requestPointerLock?.())}toMenu(){document.pointerLockElement&&document.exitPointerLock(),this.ui.fade(!0),setTimeout(()=>{this.enterMenu(),this.ui.fade(!1)},450)}quit(){this.ui.fade(!0),setTimeout(()=>{this.state="goodbye",this.ui.show("goodbye"),this.ui.fade(!1)},450)}frame(){let t=Math.min(this.clock.getDelta(),.05);this.time+=t,this.stateTime+=t,this.step(t),this.render(),this.settings.showFps&&(this.fpsFrames++,this.fpsTime+=t,this.fpsTime>.5&&(this.ui.setFps(Math.round(this.fpsFrames/this.fpsTime)+" fps"),this.fpsFrames=this.fpsTime=0))}step(t){let e=this.time,n=this.player,i=this.state;if(i==="menu"||i==="goodbye"){let c=this.camera.position,l=this.menuLookNow??=new w;this.menuCamera(this.stateTime,c,l),this.camera.lookAt(l),this.character.state.wave=i==="menu"&&this.stateTime%9>1.2&&this.stateTime%9<4.6,this.focus.copy(Rn.spot)}else if(i==="intro"){let c=Kp(oe(this.stateTime/1.4,0,1));n.update(t,!1),n.updateCamera(t,!0);let l=this.camera.position.clone(),h=n.target.clone();this.camera.position.lerpVectors(this.introFrom.pos,l,c),this.camera.lookAt(new w().lerpVectors(this.introFrom.look,h,c)),n.camPos.copy(l),c>=1&&(this.state="playing",this.input.consume()),this.focus.copy(n.pos)}else i==="playing"?(this.seated?this.updateSeated(t):(n.update(t,!0),n.updateCamera(t),this.checkPortals(),this.ui.prompt(this.nearSeat()?"Press E to sit at the computer":"")),this.updateGuide(),this.focus.copy(n.pos)):i==="paused"&&n.updateCamera(t);this.character.update(i==="paused"?0:t),this.foliage.update(e),this.windmills.update(i==="paused"?0:t);let r=i==="menu"||i==="goodbye"?this.camera.position.clone().addScaledVector(Rn.f,14):this.focus;this.grass.update(e,r),this.grassFar.update(e,r),this.sky.update(t,this.camera),this.lake.update(t,e),this.doorPortal.userData.update(e),this.inside&&this.apartment.update(e);let o=i==="playing"&&!this.inside?n.pos.clone().add(new w(0,1,0)):null;this.bubbles.update(i==="paused"?0:t,e,i==="menu"?Rn.spot.clone().addScaledVector(Rn.f,10):this.focus,o,()=>{this.audio.pop(),this.ui.setCount(this.bubbles.popped)});let a=this.sun;if(a.target.position.copy(this.focus),a.position.copy(this.focus).addScaledVector(this.sunDir,250),this.flare.update(t,this.camera,this.sunDir,i!=="loading"&&!this.inside),i==="menu"){let c=this.character.root.position.clone().add(new w(0,2.05,0)).project(this.camera),l=(c.x*.5+.5)*innerWidth,h=(-c.y*.5+.5)*innerHeight;this.ui.placeSpeech(l+10,h,this.character.state.wave)}}render(){this.useComposer?this.composer.render():this.renderer.render(this.inside?this.apartment.scene:this.scene,this.camera)}run(){this.running=!0;let t=()=>{this.running&&(this.frame(),requestAnimationFrame(t))};requestAnimationFrame(t)}freeze(){this.running=!1}advance(t,e=30,n=!0){let i=1/e;for(let r=0;r<t;r+=i)this.time+=i,this.stateTime+=i,this.step(i);n&&this.render()}};async function OM(){let s=new sd;window.frutigerFun=s,s.bridgeSamples=Tn.samples;try{await s.build()}catch(t){console.error(t),s.ui.progress(1,"Sorry, this browser could not start the game (WebGL 2 is needed).");return}s.ui.show("menu"),s.clock.getDelta(),s.run()}OM();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
