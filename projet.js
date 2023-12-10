window.addEventListener("load",function() {

    var Map={ 
        init :function(grid, numeroMap,pos){

            this.numeroMap = 0;

            this.grid= tabGrilles[this.numeroMap];

            this.pos=[0,0]; 

        } ,

        premierePos : function(){
            for (var y = 0; y < this.grid.length; y++) {
                for (var x = 0; x < this.grid[y].length; x++){
                    if(this.grid[y][x] ==="in"){
                        this.pos = [x,y];
                    }
                }
            }
        },

        display : function(){
            for (var y = 0; y < this.grid.length; y++) {
                var row="<tr>";
                    for (var x = 0; x < this.grid[y].length; x++) {
                        
                      if (x === this.pos[0] && y === this.pos[1]) {
                          if(this.grid[y][x]===0 || this.grid[y][x] ==="in" || this.grid[y][x]==="out"){
                            row +=
                              '<td class="sol"><img class = "avatare" src = "image/avatar.png"></td>';
                          }

                        }
                       else if (x === this.pos[0] && y === this.pos[1] && this.grid[y][x]===6) {
                            row +=
                              '<td class="cobweb"><img class = "avatare" src = "image/avatar.png"></td>';
                            
                        }
                       
                        else if(this.grid[y][x]===0){
                            row+="<td class='sol'></td>";
                        }
                        else if(this.grid[y][x]===1){
                            row+="<td class='mur'></td>";
                        }
                        else if(this.grid[y][x]===6){
                            
                            row+="<td class='cobweb'></td>";

                        }
                        else if(this.grid[y][x]===3){
                            
                            row+="<td class='rock'></td>";

                        }
                        else if(this.grid[y][x] ==="in" || this.grid[y][x]==="out"){
                            row+='<td class="sol"></td>';
                        }
                        else if(this.grid[y][x]===7){

                            row+="<td class='sol'><img class='bat' src='image/bat.gif'></td>"

                        }
                        else if(this.grid[y][x]===8){

                            row+="<td class='sol'><img class='bat' src='image/bat2.gif'></td>"

                        }
                    }

            
                    document
                     .getElementById("labyrinthe")
                     .insertAdjacentHTML("beforeend", row);

            }


        },

        check: function(x, y) {

            if ( x < 0 || y < 0 || x > this.grid[0].length - 1 || y > this.grid.length - 1) {
                $(function() {
                  $(".errors")
                    .html("Déplacement impossible !")
                    .fadeOut(2000, function() {
                      $(this)
                        .html("")
                        .fadeIn();
                    });
                });
        
                return [this.pos[0], this.pos[1]];
              }
              else if (this.grid[y][x]===1){
                $(function() {
                    $(".errors")
                      .fadeOut(2000, function() {
                        $(this)
                          
                          .fadeIn();
                      });
                  });
                  return [this.pos[0], this.pos[1]];
                }
                else if (this.grid[y][x]===0){
                    $(function() {
                        $(".success")
                          .fadeOut(2000, function() {
                            $(this)
                              
                              .fadeIn();
                          });
                      });
                      return [x, y];
                    }
                    else if (this.grid[y][x]===3){
                        $(function() {
                            $(".errors")
                              .fadeOut(2000, function() {
                                $(this)
                                
                                  .fadeIn();
                              });
                          });
                          this.grid[y][x]=0;
                          return [this.pos[0], this.pos[1]];
                    } 
                    else if (this.grid[y][x]===7){
                        $(function() {
                            $(".errors")
                              .fadeOut(2000, function() {
                                $(this)
                                
                                  .fadeIn();
                              });
                          });
                          this.grid[y][x]=8;
                          return [this.pos[0], this.pos[1]];
                        }
                        else if (this.grid[y][x]===8){
                            $(function() {
                                $(".errors")
                                  .fadeOut(2000, function() {
                                    $(this)
                                    
                                      .fadeIn();
                                  });
                              });
                              this.grid[y][x]=0;
                              return [this.pos[0], this.pos[1]];
                            }
                    else if(this.grid[y][x] == "out"){
                        this.numeroMap +=1;
                        this.grid = tabGrilles[this.numeroMap]
                        labyrinthe.premierePos()
                        return[this.pos[0],this.pos[1]];
                    }      
        }
    };
    
    function deplacement(e) {
        var touche = e.keyCode;
        switch (touche) {
            case 90: //entrée de la touche "Z" qui fait monter le joueur
                move = labyrinthe.check(labyrinthe.pos[0], labyrinthe.pos[1] - 1);     
                labyrinthe.pos[0]=move[0];//aucun changement en x
                labyrinthe.pos[1]=move[1]; //on ajoute 1 au y
                document.getElementById("labyrinthe").innerHTML = "";
                labyrinthe.display();
                console.log(touche);
                break; 
            case 81: //entrée de la touche "Q" qui déplace vers la gauche
                move = labyrinthe.check(labyrinthe.pos[0] - 1, labyrinthe.pos[1]);
                labyrinthe.pos[0] =move[0]; //-1 au x
                labyrinthe.pos[1]=move[1];//aucun changement en y
                document.getElementById("labyrinthe").innerHTML = "";
                labyrinthe.display();
                console.log(touche);
                break;
            case 83: //entrée de la touche "S" qui déplace vers le bas
                move = labyrinthe.check(labyrinthe.pos[0], labyrinthe.pos[1] + 1);
                labyrinthe.pos[0]=move[0];//aucun changement en x
                labyrinthe.pos[1]=move[1];//+1 sur y
                document.getElementById("labyrinthe").innerHTML = "";
                labyrinthe.display();
                console.log(touche);
                break;
            case 68: //entrée de la touche "D" qui déplace vers la dorite
                move = labyrinthe.check(labyrinthe.pos[0] + 1, labyrinthe.pos[1]);
                labyrinthe.pos[0]=move[0]; // +1 en x
                labyrinthe.pos[1]=move[1]; // aucun changement en y
               
                document.getElementById("labyrinthe").innerHTML = "";
                labyrinthe.display();
                console.log(touche);
                break;
            case 82 : //entrée de la touche "R" qui reload la page pour reset la map
                console.log(touche);
                location.reload();
                break;
            default:
                console.log("touche inconnue");
        }
      }
      var tabGrilles = [
    
        [
            [1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,'in',1,1],
            [1,1,0,0,3,0,0,1,1],      
            [1,1,0,3,0,3,1,1,1],
            [1,0,0,1,1,1,1,1,1],
            [1,0,6,0,0,6,0,1,1],
            [1,0,6,0,6,0,0,'out',1],
            [1,1,1,1,1,1,1,1,1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 3, 1, 6, 6, 0, 0, 1],
            [1, 0, 6, 1, 1, 6, 6, 6, 1],
            [1, 0, 0, 1, 1, 1, 6, 0, 1],
            [1, 'in', 0, 1, 1, 0, 3, 0, 1],
            [1, 1, 1, 1, 1,  'out', 0, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            [1, 1, 1, 0, 7, 6, 0, 0, 'in' ,1],
            [1, 1, 1, 0, 1, 6, 1, 0, 0 ,1],
            [1, 1, 1, 0, 3, 7, 6, 0, 1 ,1],
            [1, 'out', 1, 3, 1, 3, 1, 6, 1 ,1],
            [1, 0, 0, 0, 0, 6, 3, 6, 1 ,1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            [1, 'in', 1, 0, 0, 3, 1, 1, 1 ,1],
            [1, 0, 3, 3, 3, 0, 7, 0, 1 ,1],
            [1, 3, 0, 3, 0, 3, 3, 0, 'out' ,1],
            [1, 0, 3, 0, 3, 6, 3, 3, 1 ,1],
            [1, 1, 6, 3, 0, 3, 0, 1, 1 ,1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 'out', 1],
            [1, 1, 1, 1, 6, 3, 1],
            [1, 'in', 1, 1, 0, 3, 1],
            [1, 0, 1, 0, 6, 0, 1],
            [1, 3, 1, 3, 3, 3, 1],
            [1, 6, 0, 6, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ],
        [
    
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 7, 'in', 0, 4, 7, 3, 4, 1],
            [1, 3, 3, 3, 1, 1, 1, 7, 1],
            [1, 0, 0, 0, 3, 0, 1, 4, 1],
            [1, 3, 4, 0, 3, 3, 1, 7, 1],
            [1, 3, 1, 3, 3, 3, 1, 4, 1],
            [1, 0, 4, 3, 0, 3, 1, 3, 1],
            [1, 1, 1, 1, 0, 0, 0, 'out', 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 'out', 1, 1, 1],
            [1, 1, 0, 1, 7, 3, 1, 1],
            [1, 0, 0, 1, 3, 7, 1, 1],
            [1, 3, 1, 3, 7, 3, 0, 1],
            [1, 0, 1, 1, 0, 0, 'in', 1],
            [1, 3, 1, 1, 6, 1, 1, 1],
            [1, 6, 3, 6, 3, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 3, 'out', 6, 0, 0, 1],
            [1, 0, 7, 3, 7, 3, 7, 0, 1],
            [1, 0, 3, 3, 7, 6, 7, 0, 1],
            [1, 0, 7, 3, 7, 3, 6, 0, 1],
            [1, 0, 3, 3, 7, 6, 6, 0, 1],
            [1, 0, 3, 3, 7, 3, 7, 0, 1],
            [1, 0, 7, 3, 7, 6, 6, 0, 1],
            [1, 0, 0, 0, 'in', 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 'out', 0, 1, 1, 1],
            [1, 1, 1, 6, 6, 6, 1, 1, 1],
            [1, 1, 1, 3, 3, 3, 1, 1, 1],
            [1, 1, 1, 6, 6, 6, 1, 1, 1],
            [1, 1, 1, 3, 3, 3, 1, 1, 1],
            [1, 1, 1, 6, 6, 6, 1, 1, 1],
            [1, 1, 1, 0,'in', 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1,'out', 6, 3, 6, 3, 6, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 6, 1],
            [1, 1, 1, 1, 1, 1, 1, 3, 1],
            [1, 1, 6, 3, 6, 1, 1, 6, 1],
            [1, 1, 6, 1,'in', 1, 1, 3, 1],
            [1, 1, 3, 1, 1, 1, 3, 6, 1],
            [1, 1, 6, 3, 6, 3, 6, 3, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]
        
    ]
    var labyrinthe = Object.create(Map);
    labyrinthe.init();
    labyrinthe.premierePos();
    labyrinthe.display();
    document.addEventListener("keydown", deplacement);
});