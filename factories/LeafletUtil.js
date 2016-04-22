var LeafletUtil = function(){}

LeafletUtil.prototype.randomNumber = function (min,max) {
    return Math.random() * (max - min) + min;
}

app.service('LeafletUtil', LeafletUtil);
