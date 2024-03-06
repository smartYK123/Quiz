import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    username : { type : String },
    title : { type : String },
    dept : { type : String },
    kingsId : { type : String },
    staffId : { type : String },
    num : { type : Number },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})
// if (!result || result.length === 0 || !username || !title || !dept || !kingsId || !num || !kingsId)

export default mongoose.model('result', resultModel);

// ref={titleRef}
// className="title"
// type="text"
// placeholder="title*"
// />

// <input
// ref={inputRef}
// className="userid"
// type="text"
// placeholder="Username*"
// />
// <input
// ref={deptRef}
// className="dept"
// type="text"
// placeholder="Department*"
// />
// <input
// ref={kingsIdRef}
// className="kingsId"
// type="text"
// placeholder="KingsChatID*"
// />
// <input
// ref={staffIdRef}
// className="staffId"
// type="text"
// placeholder="StaffID*"
// />
// <input ref={numRef} className="num" type="text" placeholder="Number*" />