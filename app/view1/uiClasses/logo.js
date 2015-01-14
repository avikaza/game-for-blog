uiClasses.factory("Logo", ['loaderSvc', function (loaderSvc) {
    function Logo(obj) {
        this.logo = new createjs.Bitmap(loaderSvc.getResult("logo"));
        if(typeof obj.scaleX !== "undefined" && obj.scaleX !== null) {this.logo.scaleX = obj.scaleX;}
        if(typeof obj.scaleY !== "undefined" && obj.scaleY !== null) {this.logo.scaleY = obj.scaleY;}
        if(typeof obj.alpha !== "undefined" && obj.alpha !== null) {this.logo.alpha = obj.alpha;}
        if(typeof obj.y !== "undefined" && obj.y !== null) {this.logo.y = obj.y;}
    }
    Logo.prototype = {
        addToStage: function (stage) {
            stage.addChild(this.logo);
        },
        removeFromStage: function (stage) {
            stage.removeChild(this.logo);
        },
        setHorizontalCenterAt: function (c) {
            this.logo.x = c - this.logo.getBounds().width / 2;
        }
    };
    return (Logo);
}
]);