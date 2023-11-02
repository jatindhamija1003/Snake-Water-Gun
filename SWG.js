function getElement() {
    let n = document.getElementById('Number').value
    let i = 0;
    while (i < n) {
        let ran = Math.floor((Math.random() * 3) + 1)
        console.log("ran : " + ran)
        let Choice = prompt("Enter Value")

        if ((ran == 1 && Choice == 1) ||
            (ran == 2 && Choice == 2) ||
            (ran == 3 && Choice == 3)) {
            alert("Draw")

        } else if (Choice == 1) {
            if (ran == 2) {
                alert("You Win")
            } else if (ran == 3) {
                alert("You Loose")
            }
        } else if (Choice == 2) {
            if (ran == 3) {
                alert("You Win")
            } else if (ran == 1) {
                alert("You Loose")
            }
        } else if (Choice == 3) {
            if (ran == 1) {
                alert("You Win")
            } else if (ran == 2) {
                alert("You Loose")
            }
        }
        i++
    }
}