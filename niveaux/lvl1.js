window.addEventListener("load",function() {

    var Map={ 
        init :function(grid,pos){

            this.grid=[

                [1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,0,2,1,1],
                [1,1,0,0,3,0,0,1,1],      
                [1,1,0,3,0,3,1,1,1],
                [1,0,0,1,1,1,1,1,1],
                [1,0,4,0,0,4,0,1,1],
                [1,0,4,0,4,0,0,5,1],
                [1,1,1,1,1,1,1,1,1],
                
            ];

            /*0 : case vide
             *1 : block incassable
             *2 : Joueur (endroit d'apparition (case vide))
             *3 : rocher cassable
             *4 : Cobweb
             *5 : sortie
             *6 : Mob
             *7 : trésor (fin du jeux)
             */

            this.pos=[1,0];

        } ,

        display : function(){
            for (var y = 0; y < this.grid.length; y++) {
                var row="<tr>";
                
                    for (var x = 0; x < this.grid[y].length; x++) {

                        
                        if(this.grid[y][x]===0){
                            
                            row+="<td class='sol'></td>";

                        }
                        else {


                            row+="<td class='mur'></td>";

                        }




                    }

                    
            
                    document
                     .getElementById("labyrinthe")
                     .insertAdjacentHTML("beforeend", row);

            }



        },



    };
    var labyrinthe = Object.create(Map);
    labyrinthe.init();
    labyrinthe.display();
});
