uiClasses.factory("Hill", ['loaderSvc', function (loaderSvc) {
    function Hill(obj) {
        this.hill = new createjs.Bitmap(loaderSvc.getResult(obj.assetName));
        this.hill.setTransform(Math.random() * obj.width,
                               obj.height - this.hill.image.height * obj.scaleFactor - obj.groundHeight,
                               obj.scaleFactor, obj.scaleFactor);
    }
    Hill.prototype = {
        addToStage: function (stage) {
            stage.addChild(this.hill);
        },
        removeFromStage: function (stage) {
            stage.removeChild(this.hill);
        },
        setAlpha: function (val) {
            this.hill.alpha = val;
        },
        getImageWidth: function () {
            return this.hill.image.width;
        },
        getScaleX: function () {
            return this.hill.scaleX;
        },
        getX: function () {
            return this.hill.x;
        },
        getY: function () {
            return this.hill.y;
        },
        setX: function (val) {
            this.hill.x = val;
        },
        move: function (x, y) {
            this.hill.x = this.hill.x + x;
            this.hill.y = this.hill.y + y;
        }
    };
    return (Hill);
}
]);