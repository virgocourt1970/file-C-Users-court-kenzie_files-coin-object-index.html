console.log ("wonderful days")

let coin = {
    state: 0,
    flip: function() {

        if (Math.random () >.5) {
        this.state = 0 
        } else {
        
        this.state = 1

        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0) {
        return "heads"    
        } else {
        return "tails"    

        }
        

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 0) {
           image.src = "images\HEADS.jpg"
            } else {
           image.src = "images\TAILS.jpg"
              
            }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;

        
    }
}
display20flips()

function display20flips() {
    for (let i = 0; i < 20; i ++) {  
     coin.flip()
     coin.toString ()
     console.log (coin.toString())
     document.body.append(coin.toString())
     }


display20images() 

function display20images() {
    for (let i = 0; i < 20; i ++) {  
    coin.flip()
    coin.toHTML ()
    console.log (coin.toHTML())
    document.body.append(coin.toHTML())
    }



}


}