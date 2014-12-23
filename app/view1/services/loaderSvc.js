angular.module('myApp.services', [])
.factory('loaderSvc', function () {
        var manifest = [
            {src: "spritesheet_grant.png", id: "grant"},
            {src: "sky.png", id: "sky"},
            {src: "ground.png", id: "ground"},
            {src: "hill1.png", id: "hill"},
            {src: "hill2.png", id: "hill2"}
        ], loader = new createjs.LoadQueue(false);
        return {
            getResult: function (asset) {
                return loader.getResult(asset);
            },
            getLoader: function () {
                return loader;
            },
            loadAssets: function () {
                loader.loadManifest(manifest, true, "/app/assets/");
            }
        }
    });

