uiClasses.factory("Ground", ['loaderSvc', function (loaderSvc) {
    function Ground(obj) {
        var groundImg = loaderSvc.getResult("ground");
        this.ground = new createjs.Shape();
        this.ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, obj.width + groundImg.width, groundImg.height);
        this.ground.tileW = groundImg.width;
        this.ground.y = obj.height - groundImg.height;
        this.height = groundImg.height;
    }
    Ground.prototype = {
        addToStage: function (stage) {
            stage.addChild(this.ground);
        },
        removeFromStage: function (stage) {
            stage.removeChild(this.ground);
        },
        getHeight: function () {
            return this.height;
        },
        getX: function () {
          return this.ground.x;
        },
        setX: function (val) {
          this.ground.x =  val;
        },
        getTileWidth: function () {
          return this.ground.tileW;
        },
        move: function (x, y) {
            this.ground.x = this.ground.x + x;
            this.ground.y = this.ground.y + y;
        }
    };
    return (Ground);
}
]);