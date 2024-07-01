
      document.getElementById('openModal').onclick = function(){
        document.getElementById('myModal').style.display = "block";
      }
      
      document.querySelector('.close-modal').onclick = function(){
        document.getElementById('myModal').style.display = "none";
      }
      
      window.onclick = function(event){
        var modal =  document.getElementById('myModal');
        if(event.target == modal){
          modal.style.display = "none";
        }
      }