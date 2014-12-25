uiClasses.factory("Sky", ['loaderSvc', function (loaderSvc) {
        function Sky(obj) {
            this.sky = new createjs.Shape();
            this.sky.graphics.beginBitmapFill(loaderSvc.getResult("sky")).drawRect(0, 0, obj.width, obj.height);
        }
        Sky.prototype = {
            addToStage: function (stage) {
                 stage.addChild(this.sky);
            },
            removeFromStage: function (stage) {
                stage.removeChild(this.sky);
            }
        };
        return (Sky);
    }
]);