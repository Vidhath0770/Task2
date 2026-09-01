function changeStar(type) {
    const star = document.getElementById("star");

    if (type === "redDwarf") {
        star.style.width = "80px";
        star.style.height = "80px";
        star.style.backgroundColor = "red";
        star.style.boxShadow = "0 0 30px red";
    }

    else if (type === "yellowDwarf") {
        star.style.width = "150px";
        star.style.height = "150px";
        star.style.backgroundColor = "yellow";
        star.style.boxShadow = "0 0 40px yellow";
    }

    else if (type === "blueGiant") {
        star.style.width = "220px";
        star.style.height = "220px";
        star.style.backgroundColor = "cyan";
        star.style.boxShadow = "0 0 60px cyan";
    }

    else if (type === "redGiant") {
        star.style.width = "300px";
        star.style.height = "300px";
        star.style.backgroundColor = "orange";
        star.style.boxShadow = "0 0 80px orange";
    }
}
