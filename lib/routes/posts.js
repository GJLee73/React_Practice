'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    //res.send('posts');
    res.sendFile(_path2.default.resolve('../react_server/public/post.html'));
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading post ' + req.params.id);
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(router, 'router', 'server/routes/posts.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'server/routes/posts.js');
}();

;