function game6() {
                        const backgroundButtonEl = document.querySelector('#backgroundButton');
                        const newButton = document.createElement('button');
                        newButton.textContent = 'Нажми на кнопку - измени цвет фона, выход - ESC';
                        newButton.className = "minigames-card-content__a";
                        newButton.setAttribute('id', 'backGround');
                        newButton.style.width = '100vw';
                        newButton.style.width = '100%';
                        document.body.appendChild(newButton);
                        
                       
                        const backGroundEl = document.querySelector('#backGround')
                        
                        backGroundEl.addEventListener('click', function(){
                        let xRandom = (Math.random() * 255) + 1;
                        xRandom = Math.round(xRandom);
                        let yRandom = (Math.random() * 255) + 1;
                        yRandom = Math.round(yRandom);
                        let zRandom = (Math.random() * 255) + 1;
                        zRandom = Math.round(zRandom);
                        
                        
                        const mingamesEl1 = document.querySelector('.minigames');
                        const mingamesEl2 = document.querySelector('.minigames-mob');
                        mingamesEl1.style.backgroundColor = `rgb(${xRandom}, ${yRandom}, ${zRandom})`;
                        mingamesEl2.style.backgroundColor = `rgb(${xRandom}, ${yRandom}, ${zRandom})`;
                        });
                        document.addEventListener('keydown', Event => {
                           if (Event.key === "Escape") {
                              let xOrigin = 32;
                              let yOrigin = 32;
                              let zOrigin = 39;
                              const mingamesEl1 = document.querySelector('.minigames');
                              const mingamesEl2 = document.querySelector('.minigames-mob');
                              mingamesEl1.style.backgroundColor = `rgb(${xOrigin}, ${yOrigin}, ${zOrigin})`;
                              mingamesEl2.style.backgroundColor = `rgb(${xOrigin}, ${yOrigin}, ${zOrigin})`;
                              document.body.removeChild(newButton);
                              
                              return;
                           }

                        })
                     }
