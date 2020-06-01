/*hash table */
var hash = (string, max)=>{
    var hash = 0;
    for(let i = 0; i < string.length; i++){
      hash += string.charCodeAt(i);

    }
  return hash % max;
};

let HashTable = function(){
  let storage = [];
  const storageLimit = 4;
  this.print = function(){
      console.log(storage)
  }
  this.add = function(key, value){
    var index = hash(key, storageLimit);
    if(storage[index]=== undefined){
      storage[index] = [
        [key, value]
      ];
    }else{
      var inserted = false;
      for(let i = 0; i < storage.length, i++){
        if(storage[index][i][0]=== key){
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if(inserted === false){
        storage[index].push([key,value])
      }
    }
  };

  this.remove = function(key){
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[0][0] === key){
      delete storage[index];
    } else {
      for(var i = 0; i < storage[index]; i++){
        if(storage[index][i][0]=== key){
          delete storage[index][i];
        }
      }
    }
  };

}