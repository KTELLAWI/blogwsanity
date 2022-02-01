export interface Post {
  _id: String;
  title : String;
  _createdAt:datetime;
  author :{
  name :String;
  image:String;
};
body:[object];
description: String;
slug :{
    current:String;
},
comments:Comment[],
mainImage : {
    assets:{
        url:String;
    }
};

}
export interface Comment {
    approved:boolean,
    comment:string,
    email:string,
    name:string,
    post:{
        _ref:string,
        _type:string,
    },
    _creadtedAt:string,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:string,
  
  }