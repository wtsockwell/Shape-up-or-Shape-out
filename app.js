let circleBtn = $("#circleBtn")
let triangleBtn = $("#triangleBtn")
let rectangleBtn = $("#rectangleBtn")
let squareBtn = $("#squareBtn")


circleBtn.click((e) => {
    let circle = new Circle($("#circle").val(), $("#circle").val())
    e.preventDefault()
    circle
})
triangleBtn.click((e) => {
    let triangle = new Triangle($("#triangle-height").val(), $("#triangle-base").val())
    e.preventDefault()
    triangle
})
rectangleBtn.click((e) => {
    let rectangle = new Rectangle($("#rectangle-height").val(), $("#rectangle-width").val())
    e.preventDefault()
    rectangle
})
squareBtn.click((e) => {
    let square = new Square($("#square").val(), $("#square").val())
    e.preventDefault()
    square
})

class Shape {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}

class Circle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div = $("<div class='circle'></div>");
        this.create()
        this.describe()
        this.remove()
    }
    create() {
        $(this.div).css({
            "height": `${this.height}px`,
            "width": `${this.width}px`,
            "border-radius": "50%",
            "opacity": ".75",
            "left": `${(Math.floor(Math.random() * 600) % (600 - this.width))}px`,
            "top": `${(Math.floor(Math.random() * 600) % (600 - this.height))}px`
        })
        $("#shape-Container").append(this.div)
    }
    describe() {
        this.area = (3.1415) * (this.height * this.width)
        this.perim = 2 * (3.1415) * (this.height)
        $(this.div).click(() => {
            $("#shapeName").html("Circle")
            $("#shapeWidth").html("N/a")
            $("#shapeHeight").html("N/a")
            $("#shapeRadius").html(this.height)
            $("#shapeArea").html(this.area)
            $("#shapePerimiter").html(this.perim)
        })
    }
    remove() {
        $(this.div).dblclick(() => {
            $(this.div).remove()
        })
    }
}

class Triangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div = $("<div class='triangle'></div>");
        this.create()
        this.describe()
        this.remove()
    }
    create() {
        $(this.div).css({
            "height": "0",
            "width": "0",
            "opacity": ".75",
            "border-right": `${this.width}px solid transparent`,
            "border-bottom": `${this.height}px solid yellow`,
            "left": `${(Math.floor(Math.random() * 600) % (600 - this.width))}px`,
            "top": `${(Math.floor(Math.random() * 600) % (600 - this.height))}px`
        })
        $("#shape-Container").append(this.div)
    }
    describe() {
        this.area = .5 * ((this.width) * this.height)
        this.perim = 2 * this.height + (Math.sqrt(2)) * this.height
        $(this.div).click(() => {
            $("#shapeName").html("Triangle")
            $("#shapeWidth").html(this.width)
            $("#shapeHeight").html(this.height)
            $("#shapeRadius").html("N/a")
            $("#shapeArea").html(this.area)
            $("#shapePerimiter").html(this.perim)
        })
    }
    remove() {
        $(this.div).dblclick(() => {
            $(this.div).remove()
        })
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div = $("<div class='rectangle'></div>");
        this.create()
        this.describe()
        this.remove()
    }
    create() {
        $(this.div).css({
            "height": `${this.height}px`,
            "width": `${this.width}px`,
            "opacity": ".75",
            "left": `${(Math.floor(Math.random() * 600) % (600 - this.width))}px`,
            "top": `${(Math.floor(Math.random() * 600) % (600 - this.height))}px`
        })
        $("#shape-Container").append(this.div)
    }
    describe() {
        this.area = this.height * this.width
        this.perim = (this.height * 2) + (this.width * 2)
        $(this.div).click(() => {
            $("#shapeName").html("Square")
            $("#shapeWidth").html(this.width)
            $("#shapeHeight").html(this.height)
            $("#shapeRadius").html("N/a")
            $("#shapeArea").html(this.area)
            $("#shapePerimiter").html(this.perim)
        })
    }
    remove() {
        $(this.div).dblclick(() => {
            $(this.div).remove()
        })
    }
}

class Square extends Shape {
    constructor(height, width) {
        super(height, width)
        this.div = $("<div class='square'></div>");
        this.create()
        this.describe()
        this.remove()
    }
    create() {
        $(this.div).css({
            "height": `${this.height}px`,
            "width": `${this.width}px`,
            "opacity": ".75",
            "left": `${(Math.floor(Math.random() * 600) % (600 - this.width))}px`,
            "top": `${(Math.floor(Math.random() * 600) % (600 - this.height))}px`
        })
        $("#shape-Container").append(this.div)
    }
    describe() {
        this.area = this.height * this.width
        this.perim = (this.height * 2) + (this.width * 2)
        $(this.div).click(() => {
            $("#shapeName").html("Square")
            $("#shapeWidth").html(this.width)
            $("#shapeHeight").html(this.height)
            $("#shapeRadius").html("N/a")
            $("#shapeArea").html(this.area)
            $("#shapePerimiter").html(this.perim)
        })
    }
    remove() {
        $(this.div).dblclick(() => {
            $(this.div).remove()
        })
    }
}
