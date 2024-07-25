        var btn = document.getElementById("btn");
        var inputEle = document.getElementById("input");
        var pEle = document.getElementById("p");

        // Load saved ideas from localStorage
        window.onload = function() {
            var savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
            savedIdeas.forEach(function(idea) {
                addIdea(idea);
            });
        };

        // Save ideas to localStorage
        function saveIdea(idea) {
            var savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
            savedIdeas.push(idea);
            localStorage.setItem("ideas", JSON.stringify(savedIdeas));
        }

        // Delete idea from localStorage
        function deleteIdea(idea) {
            var savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
            savedIdeas = savedIdeas.filter(function(savedIdea) {
                return savedIdea !== idea;
            });
            localStorage.setItem("ideas", JSON.stringify(savedIdeas));
        }

        // Function to add an idea to the DOM
        function addIdea(idea) {
            var newline = document.createElement("div");
            newline.className = "line";

            var span = document.createElement("span");
            span.textContent = idea;

            var deletebtn = document.createElement("button");
            deletebtn.textContent = "delete";
            deletebtn.classList.add('deletebtn');
            deletebtn.addEventListener('click', function() {
                pEle.removeChild(newline);
                deleteIdea(idea);
            });

            newline.appendChild(span);
            newline.appendChild(deletebtn);
            pEle.appendChild(newline);
        }

        btn.addEventListener('click', function() {
            if (inputEle.value !== "") {
                var idea = inputEle.value;
                addIdea(idea);
                saveIdea(idea);
                inputEle.value = "";
            }
        });

        var bttnEle = document.getElementById("bttn");
        var containerEle = document.getElementsByClassName("container")[0];
        var colors = ["white", "black"];
        var i = 0;

        bttnEle.onclick = function() {
            containerEle.style.backgroundColor = colors[i];
            i++;

            if (i == 2) {
                i = 0;
            }
        };
