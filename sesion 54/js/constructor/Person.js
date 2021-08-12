class Person {
   constructor(name) {
      this.name = name;
      this.setTopic = this.setTopic.bind(this);
      this.setDescription = this.setDescription.bind(this);
      this.setPhoto = this.setPhoto.bind(this);
   }

   /**
    * @description - Adds favorite topic to the entity
    * @param {string} topic
    * @memberof Person
    */
   setTopic(topic) {
      this.handleParamType(topic);
      this.topic = topic;
   }

   /**
    * @description - Adds short description
    * @param {String} topic
    * @memberof Person
    */
   setDescription(desc) {
      this.handleParamType(desc);
      this.description = desc;
   }

   /**
    * @description - Adds photo from URL
    * @param {String} photo
    * @memberof Person
    */
   setPhoto(photo) {
      this.handleParamType(photo);
      this.photo = photo;
   }

   /**
    * @description - check if param is string
    * @param {String} param
    * @memberof Person
    */
   handleParamType(param) {
      if (typeof param !== "string") throw new Error("should be string");
   }
}

export default Person;
