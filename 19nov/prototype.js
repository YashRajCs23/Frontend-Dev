let arr=["aakash","deepanshu"]
let object={
    name:"rajput",
    city:"jaipur",
    getIntro:function(){
        return this.name+" from "+this.city;
    }
}

let object2={
    name:"deepanshi",
}
object2._proto_=object;
object.getIntro();
// object2.getIntro();