'use strict';

//const data 
const colors = [ "#FF0000","#800080", "#FF8C00", "#FFD700", "#008000", "#00CED1", "#0000CD", "#FF66FF" ]; 

const table_width = 10, table_height = 20;
const layer = { width: 400, height: 640}

const empty_table = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];
let table = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

const blocks = [
    [
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
    ],
    [
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,0,3,0],
            [0,3,3,3],
            [0,0,0,0]
        ],
        [
            [0,0,3,0],
            [0,3,3,0],
            [0,0,3,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [3,3,3,0],
            [0,3,0,0],
            [0,0,0,0]
        ],
        [
            [0,3,0,0],
            [0,3,3,0],
            [0,3,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0]
        ],
        [
            [0,0,4,0],
            [0,4,4,0],
            [0,4,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,4,4,0],
            [4,4,0,0],
            [0,0,0,0]
        ],
        [
            [0,4,0,0],
            [0,4,4,0],
            [0,0,4,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,5,5,5],
            [0,5,0,0],
            [0,0,0,0] 
        ],
        [
            [0,5,0,0],
            [0,5,0,0],
            [0,5,5,0],
            [0,0,0,0] 
        ],
        [
            [0,0,0,0],
            [0,5,0,0],
            [0,5,5,5],
            [0,0,0,0] 
        ],
        [
            [0,0,5,0],
            [0,0,5,0],
            [0,5,5,0],
            [0,0,0,0] 
        ]  
    ],
    [
        [
            [0,0,0,0],
            [0,6,6,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,6,0,0],
            [0,6,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,6,6,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,6,0],
            [0,0,6,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [0,7,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,7,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,7,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],        
        [
            [0,0,0,0],
            [0,7,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [
        [
            [0,0,0,0],
            [8,8,8,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,8,0,0],
            [0,8,0,0],
            [0,8,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,8,8,8],
            [0,0,0,0]
        ],
        [
            [0,0,8,0],
            [0,0,8,0],
            [0,0,8,0],
            [0,0,0,0]
        ]
    ],
];

//@class declaration 
class Game {
    constructor(){
        this.size = 40;
        this.rotate = 0;
        this.x = 3;
        this.y = 0;
        this.fps = 0;
        this.shape = 0;
        this.color = 0;
        this.fps = 60;
        this.cfps = 0;
        this.block = blocks[this.shape];
        this.newBlock();
        this.points = 0;
    }
    newBlock = () =>{
        return(
            this.shape = Math.floor(Math.random()*blocks.length),
            this.rotate = 0,
            this.x = 3,
            this.y = 0,
            this.color = this.shape)
    }
    gameOver = () =>{
        let isGameOver = false;
        for(let i = 1; i < table_width + 1; i++){
			if(table[3][i] > 0) isGameOver = true;
		}
		return isGameOver;
	};
    removeCompleteRows = () =>{
        let completeRow;

		for(let i = 4; i < table_height; i++){
            completeRow = true;
			for(let j = 1; j <= table_width; j++){
				if(table[i][j] == 0) completeRow = false;
			}
			if(completeRow){
				for(let j = 1; j <= table_width; j++){
					table[i][j] = 0;
                }
                table.splice(i,1);
                table.unshift([1,0,0,0,0,0,0,0,0,0,0,1]);
                this.points++;
		    }
        }
    }
    rotateBlock = () =>{
        let rotate = 0;
        this.rotate < 3 ? rotate = this.rotate + 1 : rotate = 0;

        return this.collision(this.rotate, this.x, this.y) == false ? this.rotate = rotate : this.rotate += 0
    }
    collision = (rotate, x, y) =>{
        let res = false;

        for(let i = 0; i < 4; i++){
			for(let j = 0; j <= 4; j++){
				if(blocks[this.shape][rotate][i][j] > 0){
					if(table[y + i][x + j] > 0) res = true;
				}
			}
		}
		return res;
	}
    printBlock = () =>{
        for(let i = 0; i < blocks[this.shape].length; i++){
            for(let j = 0; j <= blocks[this.shape].length; j++){
                if(blocks[this.shape][this.rotate][i][j] > 0){
                    table[this.y + i][this.x + j] = blocks[this.shape][this.rotate][i][j];
                }
            }
        }
    }
    fallingBlock = count =>{
        if(this.cfps >= this.fps){
            this.cfps = 0;

            if(this.collision(this.rotate, this.x, this.y +1) == false){
                this.y = this.y + 1;
            }else{
                this.printBlock();
                this.newBlock();
                this.removeCompleteRows();
                count.innerHTML = this.points;
    
                if(this.gameOver()){
                    reloadTable();
                    count.innerHTML = 0;
                }
            }
        }else{
            this.cfps++;
        }
    }
    blockMovementInstruction = key => {
        switch (key) {
            case "ArrowUp":
                this.rotateBlock();
                break;
            case "ArrowDown":
                this.collision(this.rotate, this.x, this.y+1) == false ? this.y +=1 : this.y += 0;
                break;
            case "ArrowLeft":
                this.collision(this.rotate, this.x-1, this.y) == false ? this.x -=1 : this.x += 0;
                break;
            case "ArrowRight":
                this.collision(this.rotate, this.x+1, this.y) == false ? this.x +=1 : this.x += 0;
                break;
            default:
                break;
        }
    }
    drawBlock = ctx =>{
        for(let i = 0; i < blocks[this.shape].length; i++){
			for(let j = 0; j <= blocks[this.shape].length; j++){
                if(blocks[this.shape][this.rotate][i][j] > 0){
                    ctx.fillStyle = colors[this.color];
                    ctx.fillRect(((this.x + j - 1)*this.size),(((this.y - 4) + i)*this.size),this.size,this.size);
                }
            }
        }
    }
}

//@class instance
const __game = () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const cpoints = document.getElementById('points');
      
    document.getElementById('canvas').style.width = layer.width;
    document.getElementById('canvas').style.height = layer.height;

    const game = new Game();
    
    keyIdentifier(game);
    setInterval(() =>{
        refresh(canvas);
        drawTable(game, ctx);
        game.fallingBlock(cpoints);
        game.drawBlock(ctx);
    },1000/game.fps);
      
}

//function storage
function keyIdentifier(e){
    document.addEventListener('keydown', key => e.blockMovementInstruction(key.code) );
}
function reloadTable(){
	for(let i = 0 ;i < 21; i++){
		for(let j = 0; j < 12; j++){
			table[i][j] = empty_table[i][j];
		}
	}
}
function refresh(e){
    e.width = layer.width;
    e.height = layer.height;
}
function drawTable(e, ctx){
	for(let i = 4; i <= table_height; i++){
		for(let j = 1; j <= table_width; j++){
			if( table[i][j] > 0){
                switch (table[i][j]) {
                    case 1:
                        ctx.fillStyle = colors[0];
                        break;
                    case 2:
                        ctx.fillStyle = colors[1];
                        break;
                    case 3:
                        ctx.fillStyle = colors[2];
                        break;
                    case 4:
                        ctx.fillStyle = colors[3];
                        break;
                    case 5:
                        ctx.fillStyle = colors[4];
                        break;
                    case 6:
                        ctx.fillStyle = colors[5];
                        break;
                    case 7:
                        ctx.fillStyle = colors[6];
                        break;
                    case 8:
                        ctx.fillStyle = colors[7];
                        break;
                    default:
                        break;
                }
				ctx.fillRect(((j-1)*e.size),((i-4)*e.size),e.size,e.size);
			}
		}
	}
}
