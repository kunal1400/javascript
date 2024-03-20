
/**
 * Normal functions have this
 **/
function a() {
    console.log(this.fname); // kunal
  }
  
  const b = {
      name: "bbb",
      console: function () {
          console.log(this.name) // bbb
      }
  }
  
  /**
   * Arrow functions don't have this
   **/
  const c = () => {
      console.log(this.fname) // undefined
  }
  
  const d = {
      name: "dddd",
      console: () => {
          console.log(this.name) // undefined
      }
  }
  
  /**
   * Assigning variable at bottom
   **/
  fname = "kunal"
  
  a();
  b.console();
  c();
  d.console();