
class Game {
    constructor() {
        this.canvas = document.getElementById("game");
        this.canvas.width = 900;
        this.canvas.height = 900;
        this.ctx = this.canvas.getContext("2d");
        this.grass = new Image();
        this.sand = new Image();
        this.wall = new Image();
        this.blackHole = new Image();
        this.lives = 4;
        this.randomQuestion = null;
        this.brainPlayer = new Component(this, 70, 70, 45, 45);
        this.key = new Component(this, 760, 760, 65, 65);
        this.cols = 16;
        this.row = 16;
        this.tileW = this.canvas.width / this.cols
        this.tileH = this.canvas.height / this.row
        this.gameMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 2, 1, 1, 1, 1, 4, 1, 1, 2, 2, 1, 0],
            [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 1, 2, 1, 1, 0],
            [0, 1, 1, 4, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0],
            [0, 1, 2, 1, 1, 4, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0],
            [0, 1, 4, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 0, 0],
            [0, 0, 0, 1, 2, 1, 1, 4, 1, 2, 2, 2, 2, 1, 1, 0],
            [0, 0, 0, 1, 2, 1, 0, 0, 1, 2, 2, 1, 4, 1, 1, 0],
            [0, 0, 1, 1, 2, 1, 0, 0, 1, 4, 1, 1, 2, 2, 1, 0],
            [0, 1, 1, 2, 2, 1, 0, 0, 1, 2, 1, 2, 2, 2, 1, 0],
            [0, 2, 1, 4, 1, 1, 0, 0, 1, 2, 1, 1, 4, 1, 1, 0],
            [0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
            this.numberTile = undefined;

        this.state = {
            spiral: true,
            questions: true
        };

        this.quest = {
            1: "What comes next in the secuence? -2, 5, -4, 3, -6, ? ",
            2: "What comes next in the secuence? 1, 4, 9, 16, 25, ?",
            3: "What comes next in the secuence? 7, 21, 14, 42, 28, ?",
            5: "What comes next in the secuence? 30, 28, 25, 21, 16, ?",
            6: "What comes next in the secuence? 16, 22, 34, 58, 106, ?",
            7: "What comes next in the secuence? 17, 40,61, 8, 97, ?",
            8: "What comes next in the secuence? 55, 34, 21, 13, 8, ?"
        };

        this.solutions = {
            1: "1",
            2: "36",
            3: "84",
            4: "720",
            5: "10",
            6: "202",
            7: "112",
            8: "5"

        }
    }

    init() {
        this.start();
        document.querySelector(".btn-submit").addEventListener("click", () => { // Here Nick did the eventListener like that but when I compare my quention with my answer the rest of code its becoming crazy
            let answer = document.getElementById("response").value
            console.log('twice')
            if (answer === this.solutions[this.randomQuestion]) {
                // console.log(`???????? Q: ${this.solutions[randomQuestion]} A: ${answer}`)
                this.winToNext()
                
                // this.brainPlayer.positionPlayer()
                // console.log(`====================== you get it`)                
            }
            else {
                this.lostLive()
                // console.log(`?????????? Q: ${this.solutions[randomQuestion]} A: ${answer}`)
                // console.log(`++++++++++++++++ wrong answer`)
            }
        })
    }
    
    start() {
        this.drawBackground()
        this.grass.src = "./images/grass.png";
        this.sand.src = "./images/sand.png";
        this.wall.src = "./images/wall.png";
        this.blackHole.src = "./images/blackHole.png";
        // console.log(`====================================`)
        const interId = setInterval(() => {
            // this.clear()
            this.drawBackground()
            this.brainPlayer.move()
            this.brainPlayer.drawComponent("./images/brain.png");
            this.key.drawComponent("./images/goldKey.png");
            // this.checkAnswer()
            // this.brainPlayer.didCollide(this.blackHole)
            // clearInterval(interId)
        }, 500)
    }
    
    //   this.ctx.drawImage(this.wall, this.tileW*y/15, this.tileW*x/17, this.tileW/15, this.tileH/17);
    
    //                     this.ctx.drawImage(this.wall, this.tileW/15, this.tileH/17, this.tileW*y/15, this.tileW*x/17);
    
    drawBackground() {
        for (let x = 0; x < this.gameMap.length; x++) {
            for (let y = 0; y < this.gameMap[x].length; y++) {
                // console.log(`===========${this.gameMap[y][x]}===============`)
                this.numberTile = this.gameMap[y][x]
                
                switch (this.numberTile) {
                    case 0:
                        this.ctx.drawImage(this.grass, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                        // console.log(`case 0 ${this.wall.src}=================`)
                        break;
                        case 1:
                            this.ctx.drawImage(this.sand, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                            // console.log(`case 1 ${this.wall}=================`)
                            break;
                            case 2:
                                this.ctx.drawImage(this.wall, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                                // console.log(`case 2 ${this.wall}=================`)
                                break;
                                default:
                                    this.ctx.drawImage(this.blackHole, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                                    // console.log(`case 3 ${this.wall}=================`)
                                }
                            }
                        }
                    }
                    
                    renderSpiral() { //move
                        let spiralImg = document.querySelector("#spiral")
                        let quest = document.querySelector("#questions") //this is a div witn id=questions
                        if (this.state.spiral && this.state.questions) {  //if true change this.state to false create a function to do it
                            spiralImg.style.visibility = "visible";
                            quest.style.visibility = "visible";
                            console.log('once')
                            
                            this.createQuestion()
                            ///////////////////////////////////////////////////////////////
                            // if(this.brainPlayer.direction === 0) {
                                //     this.brainPlayer.x += this.brainPlayer.width * 2;
                                //     this.brainPlayer.direction = null;
                                // console.log(this.brainPlayer.x)
                                // }
                                
                            }
                            else {
                                spiralImg.style.visibility = "hidden";
                                quest.style.visibility = "hidden";
                                this.state.spiral = false;
                                this.state.questions = false;
                            }
                        }
                        
                        createQuestion() {
                            console.log(`QUESTION HERE`)
                            let randomQuestion = Math.floor(Math.random() * 8) + 1
                            let newQuestion = document.getElementById("h3-quest");
                            newQuestion.innerHTML = this.quest[randomQuestion]
                            this.randomQuestion = randomQuestion;
                        }
                        
                        lostLive() {
                            let livesBrain = document.querySelectorAll(".brain-lives")
                            // let score = document.getElementsByClassName("score")[0];
                            // let allTheLives = [...Array(this.lives).keys()].map(life => {
                                //     return '<span class="brain-lives" >🧠</span>'
                                // })
                                // console.log(allTheLives, this.lives)
                                // score.innerHTML = 'Lives: ' + allTheLives.join(' ');
                                console.log(`======================= length array lives ${livesBrain.length}`)
                                let img = document.getElementById("spiral")
                                let question = document.getElementById("questions")
                                let message = document.createElement("h4")
                                let parentElement = document.getElementById("q-box")
                                
                                if (livesBrain.length <= 1) {
                                    img.style.visibility = "hidden"
                                    question.style.visibility = "hidden"
                                    let gameOver = document.createElement("h4")
                                    gameOver.innerHTML = "GAME OVER!"
                                    parentElement.appendChild(gameOver)
                                    livesBrain[livesBrain.length - 1].remove()
                                    
                                } else {
                                    message.innerHTML = "Wrong!! You lost your brain - 🧠!!"
                                    img.style.visibility = "hidden"
                                    question.style.visibility = "hidden"
                                    parentElement.appendChild(message);
                                    livesBrain[livesBrain.length - 1].remove()
                                    // this.lives--;
                                }
                            }
                            
                            winToNext() {
                                let img2 = document.getElementById("spiral")
                                let question2 = document.getElementById("questions")
                                let message2 = document.createElement("h4")
                                message2.innerHTML = "Yay!! Go to the next one..."
                                let parentElement2 = document.getElementById("q-box")
                                img2.style.visibility = "hidden"
                                question2.style.visibility = "hidden"
                                parentElement2.appendChild(message2)
                                
                                this.gameMap[this.brainPlayer.row][this.brainPlayer.col + 1] = 1;
                                // console.log(`ROW POSITION ${this.brainPlayer.row} COL POSITION ${this.brainPlayer.col} ELEMENT ${this.gameMap[4]}`)
                           
                            }
                            
                        }
                        