let menu = {
  
  _courses: { // This property will ultimately contain a mapping between each course and the dishes available to order in that course.
    appetizers: [],
    mains: [], 
    desserts: [],
  }, //end of ._courses 




  //Getters & Setters

    //Getters & Setters: For each course type
    get appetizers(){
        return this._courses.appetizers
    },
    set appetizers(dishObj){
      this._courses.appetizers.push(dishObj)
    }, 
    get mains(){
       return this._courses.mains
    },
    set mains(dishObj){
      this._courses.mains.push(dishObj)
    },
    get desserts(){
       return this._courses.desserts
    }, 
    set desserts(dishObj){
      this._courses.desserts.push(dishObj)
   },

  
  
  //Getter: To return the full menu
  get courses() {
      const menuList = {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
    return  menuList
  },
  
  

  // This method will be used to add a new dish to the specified course on the menu.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      courseName,
      dishName,
      dishPrice,
    }

    if(courseName === 'appetizers') {
      this.appetizers = dish
    } else if(courseName === 'desserts') {
      this.desserts = dish
    } else if(courseName === 'mains') {
      this.mains = dish
    } else {'This is an invalid course option'}
  },

  
  
  // This method which will allow the user to get a random dish from a course on the menu, which will be necessary for generating a random meal.
  getRandomDishFromCourse(courseName) {
    if(Object.keys(this._courses).includes(courseName) === true) {
      const {length} = this[courseName]
     return this[courseName][Math.floor(Math.random()*length)]
    } else {'This is an invalid course option'}
  },


  
  
  //This method will automatically generate a three-course meal for us.
  generateRandomMeal() {
    let meal = Object.keys(this._courses).map((ele) => {return this.getRandomDishFromCourse(ele)})
    return meal;
  }
};



menu.addDishToCourse('appetizers', 'chicken wings', 10)
menu.addDishToCourse('mains', 'pasta', 10)
menu.addDishToCourse('desserts', 'cake', 10)
console.log(menu.generateRandomMeal())
console.log(menu.courses)
