var ArrayShuffle = require('../utils/array/Shuffle');

/**
 * [description]
 *
 * @function Phaser.Actions.Shuffle
 * @since 3.0.0
 * 
 * @param {array} items - An array of Game Objects. The contents of this array are updated by this Action.
 *
 * @return {array} The array of Game Objects that was passed to this Action.
 */
var Shuffle = function (items)
{
    return ArrayShuffle(items);
};

module.exports = Shuffle;
