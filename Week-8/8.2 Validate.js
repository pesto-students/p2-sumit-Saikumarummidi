function validate(root, min=null, max=null){
    if(root === null){
      return true; //when [] or when dealing with last node
    }
    if(min && root.val <= min.val){
      return false;
    }
    if(max && root.val >= max.val){
      return false;
    }
  
    return validate(root.left, min, root) && validate(root.right, root, max);
  }