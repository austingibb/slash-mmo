(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports={
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
}

},{}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
class ClientWorld {
    constructor(world_width, world_height, player_client_id) {
        this._world_width = world_width; 
        this._world_height = world_height;
        this._player_client_id = player_client_id;

        this._players = {};
        this._food = {};
    }

    updatePlayer(player_representation) {
        var player = {};

        for (var attrname in player_representation) { player[attrname] = player_representation[attrname] }

        this._players[player_representation.id] = player;
    }

    updateFood(food_representation) {
        var food = {};

        for (var attrname in food_representation) { food[attrname] = food_representation[attrname] }

        this._food[food_representation.id] = food;
    }

    removePlayer(player_id) {
        if (this._players[player_id]) {
            delete this._players[player_id];
        }
    }

    removeFood(food_id) {
        if (this._food[food_id]) {
            delete this._food[food_id];
        }
    }

    getWorldWidth() {
        return this._world_width;
    }

    getWorldHeight() {
        return this._world_height;
    }

    getPlayers() {
        return this._players;
    }

    getClientPlayer() {
        return this._players[this._player_client_id];
    }

    getFood() {
        return this._food;
    }
}

module.exports = ClientWorld;
},{}],5:[function(require,module,exports){
var World = require('./client-world.js');
var WorldRenderer = require('./world-renderer.js');

var $ = require('jquery');
var paper = require('paper');
var io = require('socket.io-client');

var socket = io("http://localhost:42069");

var canvas = document.getElementById('game-canvas');
paper.setup(canvas);

var client_id = -1;
var world_width = 0;
var world_height = 0;

var world;
var world_renderer;

socket.on('setupInfo', function (setup_object) {
    players = {};
    food_list = {};

    client_id = setup_object.client_id;
    world_width = setup_object.world_width;
    world_height = setup_object.world_height;

    world = new World(world_width, world_height, client_id);
    world_renderer = new WorldRenderer(paper, world);
});

socket.on('worldRepresentation', function (world_representation) {
    for (var player_id in world_representation.player_list) {
        world.updatePlayer(world_representation.player_list[player_id]);
    }

    for (var food_id in world_representation.food_list) {
        world.updateFood(world_representation.food_list[food_id]);
    }

    if (world) {
        world_renderer.renderAll(canvas.width, canvas.height);
    }
});

socket.on('removePlayer', function (player_id) {
    world.removePlayer(player_id);
    world_renderer.removePlayer(player_id);
});

socket.on('removeFood', function (food_ids) {
    food_ids.forEach(function (food_id) {
        world.removeFood(food_id);
        world_renderer.removeFood(food_id);
    });
});

canvas.addEventListener('click',
    function canvasClicked(event) {
        var click_x = event.offsetX;
        var click_y = event.offsetY;
        var position = {};
        position.x = world_renderer.canvasToWorldX(click_x);
        position.y = world_renderer.canvasToWorldY(click_y);
        socket.emit('slashto', position);
    },
    false
);

},{"./client-world.js":4,"./world-renderer.js":9,"jquery":37,"paper":39,"socket.io-client":42}],6:[function(require,module,exports){
module.exports.PlayerState = {
    EXTENDING: 0,
    EXTENDED: 1,
    RECOILING: 2,
    COOLDOWN: 3,
    IDLE: 4,
    DEAD: 5
};
},{}],7:[function(require,module,exports){
class FoodRenderer {
    constructor(paper, color) {
        this._paper = paper;
        this._color = color;
    }

    cleanup() {
        if (this._circle) this._circle.remove();
    }

    render(point, radius) {
        if (this._circle) {
            this._circle.remove();
        }

        this._circle = new this._paper.Path.Circle(point, radius);
        this._circle.fillColor = this._color;
    }
}

module.exports = FoodRenderer;

},{}],8:[function(require,module,exports){
var PlayerState = require('constants').PlayerState;

class PlayerRenderer {
    constructor(paper, color, debug) {
        this._paper = paper;
        this._color = color;

        this._debug = debug;

        if (debug) {
            this._control_circles = {};
        }
    }

    _drawControlCircle(paper, id, point, radius) {
        if (this._control_circles[id]) {
            this._control_circles[id].remove();
        }

        this._control_circles[id] = new this._paper.Path.Circle(point, radius);
        this._control_circles[id].fillColor = new this._paper.Color(0, 0, 0);
    }

    cleanup() {
        if (this._circle_one) this._circle_one.remove();
        if (this._circle_two) this._circle_two.remove();

        if (this._connected_shape) this._connected_shape.remove();
    }

    render(point_one, point_two, radius_one, radius_two) {
        var waist = radius_two;

        if (this._connected_shape) {
            this._connected_shape.remove();
        }

        if (this._circle_one) {
            this._circle_one.remove();
        }

        if (this._circle_two) {
            this._circle_two.remove();
        }

        this._connected_shape = new this._paper.Path();

        var diff_vec = point_two.clone();
        diff_vec = diff_vec.subtract(point_one);

        var diff_vec_radius_one = diff_vec.clone();
        diff_vec_radius_one = diff_vec_radius_one.normalize();
        diff_vec_radius_one = diff_vec_radius_one.multiply(radius_one);

        if(this._debug) this._drawControlCircle(this._paper, "dv_1", diff_vec_radius_one.add(point_one), 2);

        var diff_vec_radius_two = diff_vec.clone();
        diff_vec_radius_two = diff_vec_radius_two.multiply(-1);
        diff_vec_radius_two = diff_vec_radius_two.normalize();
        diff_vec_radius_two = diff_vec_radius_two.multiply(radius_two);

        if (this._debug) this._drawControlCircle(this._paper, "dv_2", point_two.add(diff_vec_radius_two), 2);

        var mid_point_relative = diff_vec.clone();
        mid_point_relative = mid_point_relative.subtract(diff_vec_radius_one);
        mid_point_relative = mid_point_relative.add(diff_vec_radius_two.multiply(.6));
        mid_point_relative = mid_point_relative.multiply(0.2);
        mid_point_relative = mid_point_relative.add(diff_vec_radius_one);

        var mid_point = mid_point_relative.add(point_one);

        if (this._debug) this._drawControlCircle(this._paper, "m_1", mid_point, 2);

        var diff_vec_waist = diff_vec.clone();
        diff_vec_waist = diff_vec_waist.normalize();
        diff_vec_waist = diff_vec_waist.multiply(waist);

        var angle_shift = 360 / 12;
        var angle_index;
        for (angle_index = 2; angle_index < 10; angle_index++) {
            var angle = angle_index * angle_shift + 0.5 * angle_shift;
            var rotated_diff_vec = diff_vec_radius_one.clone();
            rotated_diff_vec = rotated_diff_vec.rotate(angle);

            var rotated_diff_vec_added = rotated_diff_vec.add(point_one);

            this._connected_shape.add(rotated_diff_vec_added);

            if (this._debug) this._drawControlCircle(this._paper, "c_" + angle_index + "_1", rotated_diff_vec_added, 2);
        }

        var waist_point_one = diff_vec_waist.clone();
        waist_point_one = waist_point_one.rotate(-90);

        var waist_point_one_added = waist_point_one.add(mid_point);
        var dist_waist_point_one_circle_center = waist_point_one_added.getDistance(point_one);

        if (dist_waist_point_one_circle_center > radius_one) {
            this._connected_shape.add(waist_point_one_added);
            if (this._debug) this._drawControlCircle(this._paper, "w_1", waist_point_one_added, 2);
        }

        for (angle_index = 2; angle_index < 10; angle_index++) {
            var angle = angle_index * angle_shift + 0.5 * angle_shift;
            var rotated_diff_vec = diff_vec_radius_two.clone();
            rotated_diff_vec = rotated_diff_vec.rotate(angle);

            var rotated_diff_vec_added = rotated_diff_vec.add(point_two);

            var dist_rotated_diff_vec_circle_center = rotated_diff_vec_added.getDistance(point_one);

            if (dist_rotated_diff_vec_circle_center < radius_one) {
                var rotated_diff_vec_on_circle = rotated_diff_vec_added.subtract(point_one);
                rotated_diff_vec_on_circle = rotated_diff_vec_on_circle.normalize(radius_one);
                rotated_diff_vec_on_circle = rotated_diff_vec_on_circle.add(point_one);
                rotated_diff_vec_added = rotated_diff_vec_on_circle;
            }

            this._connected_shape.add(rotated_diff_vec_added);

            if (this._debug) this._drawControlCircle(this._paper, "c_" + angle_index + "_1", rotated_diff_vec_added, 2);
        }

        var waist_point_two = diff_vec_waist.clone();
        waist_point_two = waist_point_two.rotate(90);
        var waist_point_two_added = waist_point_two.add(mid_point);

        var dist_waist_point_two_circle_center = waist_point_two_added.getDistance(point_one);

        if (dist_waist_point_two_circle_center > radius_one) {
            this._connected_shape.add(waist_point_two_added);
            if (this._debug) this._drawControlCircle(this._paper, "w_2", waist_point_two_added, 2);
        }
        
        this._connected_shape.closed = true;
        this._connected_shape.smooth({
            type: 'catmull-rom'
        });
        this._connected_shape.fillColor = this._color;

        this._circle_one = new this._paper.Path.Circle(point_one, radius_one);
        this._circle_two = new this._paper.Path.Circle(point_two, radius_two);
        this._circle_one.fillColor = this._color;
        this._circle_two.fillColor = this._color;
    }
}

module.exports = PlayerRenderer;
},{"constants":2}],9:[function(require,module,exports){
var PlayerRenderer = require('./player-renderer.js');
var FoodRenderer = require('./food-renderer.js');
var Constants = require('./constants.js');
var PlayerState = Constants.PlayerState;

class WorldRenderer {
    constructor(paper, world) {
        this._paper = paper;
        this._world = world;

        this._player_renderers = {};
        this._food_renderers = {};
        this._grid_lines = {};
    }

    onResize(canvas_width, canvas_height) {
        this._calculateOffset(canvas_width, canvas_height);
        this._calculatePixelsPerWorldUnit(canvas_width, canvas_height);
    }

    _calculateOffset(canvas_width, canvas_height) {
        this._offset_x = 0;
        this._offset_y = 0;

        this._render_width = Math.min(canvas_width, canvas_height);

        if (this._render_width == canvas_width) {
            this._offset_y = (canvas_height - canvas_width) / 2;
        }
        else {
            this._offset_x = (canvas_width - canvas_height) / 2;
        }

    }

    _calculatePixelsPerWorldUnit(canvas_width, canvas_height) {
        var client_player = this._world.getClientPlayer();
        this._view_port_size = 3 * client_player.slash_radius;
        this._ppwu = this._render_width / this._view_port_size;
    }

    renderAll(canvas_width, canvas_height) {
        if (this._world.getClientPlayer()) {
            this.onResize(canvas_width, canvas_height);

            this.renderGrid();
            this.renderFood();
            this.renderPlayers();

            this._paper.view.draw();
        }
    }

    renderGrid() {
        var width_index = 0,
            height_index = 0;

        var zero_height = this.worldToCanvasY(0);
        var full_height = this.worldToCanvasY(this._world.getWorldHeight());
        var zero_width = this.worldToCanvasX(0);
        var full_width = this.worldToCanvasX(this._world.getWorldWidth());

        for (width_index = 0; width_index <= this._world.getWorldWidth(); width_index += 2) {
            var grid_index_name = 'grid_width_' + width_index;
            var width_pos = this.worldToCanvasX(width_index);

            if (!this._grid_lines[grid_index_name]) {
                var point_one = new this._paper.Point(width_pos, zero_height);
                var point_two = new this._paper.Point(width_pos, full_height);

                this._grid_lines[grid_index_name] = new this._paper.Path.Line(point_one, point_two);
                this._grid_lines[grid_index_name].strokeColor = 'black';
            }
            else {
                var point_one = new this._paper.Point(width_pos, zero_height);
                var point_two = new this._paper.Point(width_pos, full_height);

                this._grid_lines[grid_index_name].removeSegments();
                this._grid_lines[grid_index_name].add(point_one);
                this._grid_lines[grid_index_name].add(point_two);
            }
        }

        for (height_index = 0; height_index <= this._world.getWorldHeight(); height_index += 2) {
            var grid_index_name = 'grid_height_' + height_index;
            var height_pos = this.worldToCanvasY(height_index);

            if (!this._grid_lines[grid_index_name]) {
                var point_one = new this._paper.Point(zero_width, height_pos);
                var point_two = new this._paper.Point(full_width, height_pos);

                this._grid_lines[grid_index_name] = new this._paper.Path.Line(point_one, point_two);
                this._grid_lines[grid_index_name].strokeColor = 'black';
            }
            else {
                var point_one = new this._paper.Point(zero_width, height_pos);
                var point_two = new this._paper.Point(full_width, height_pos);

                this._grid_lines[grid_index_name].removeSegments();
                this._grid_lines[grid_index_name].add(point_one);
                this._grid_lines[grid_index_name].add(point_two);
            }
        }
    }

    renderFood() {
        var food_list = this._world.getFood();
        for (var food_id in food_list) {
            var food = food_list[food_id];

            var point = new this._paper.Point(this.worldToCanvasX(food.x), this.worldToCanvasY(food.y));
            var radius = food.radius * this.getPixelsPerWorldUnit();

            if (!this._food_renderers[food_id]) {
                var color = new this._paper.Color(WorldRenderer.FOOD_COLORS[food_id % WorldRenderer.FOOD_COLORS.length]);
                this._food_renderers[food_id] = new FoodRenderer(this._paper, color);
            }

            this._food_renderers[food_id].render(point, radius);
        }
    }

    renderPlayers() {
        var players = this._world.getPlayers();
        for (var player_id in players) {
            var player = players[player_id];

            var point_one;
            var point_two;

            var radius_one;
            var radius_two;

            if (player.state <= PlayerState.EXTENDED) {
                point_one = new this._paper.Point(this.worldToCanvasX(player.tail_x), this.worldToCanvasY(player.tail_y));
                point_two = new this._paper.Point(this.worldToCanvasX(player.head_x), this.worldToCanvasY(player.head_y));

                radius_one = player.tail_radius * this.getPixelsPerWorldUnit();
                radius_two = player.head_radius * this.getPixelsPerWorldUnit();
            } else {
                point_one = new this._paper.Point(this.worldToCanvasX(player.head_x), this.worldToCanvasY(player.head_y));
                point_two = new this._paper.Point(this.worldToCanvasX(player.tail_x), this.worldToCanvasY(player.tail_y));

                radius_one = player.head_radius * this.getPixelsPerWorldUnit();
                radius_two = player.tail_radius * this.getPixelsPerWorldUnit();
            }

            if (!this._player_renderers[player_id]) {
                var color = new this._paper.Color(WorldRenderer.PLAYER_COLORS[player_id % WorldRenderer.PLAYER_COLORS.length]);
                this._player_renderers[player_id] = new PlayerRenderer(this._paper, color, false);
            }

            this._player_renderers[player_id].render(point_one, point_two, radius_one, radius_two);
        }
    }

    renderBorders() {

    }

    renderVisionLimitation() {

    }

    removePlayer(player_id) {
        if (this._player_renderers[player_id]) {
            this._player_renderers[player_id].cleanup();
            delete this._player_renderers[player_id];
        }
    }

    removeFood(food_id) {
        if (this._food_renderers[food_id]) {
            this._food_renderers[food_id].cleanup();
            delete this._food_renderers[food_id];
        }
    }

    worldToCanvasX(coord) {
        var client_player = this._world.getClientPlayer();
        return this._worldToCanvas(coord, client_player.head_x);
    }

    worldToCanvasY(coord) {
        var client_player = this._world.getClientPlayer();
        return this._worldToCanvas(coord, client_player.head_y);
    }

    _worldToCanvas(coord, world_offset) {
        var canvas_coord = coord - world_offset + this._view_port_size / 2;
        canvas_coord *= this._ppwu;
        return canvas_coord;
    }

    canvasToWorldX(coord) {
        var client_player = this._world.getClientPlayer();
        return this._canvasToWorld(coord, client_player.head_x);
    }

    canvasToWorldY(coord) {
        var client_player = this._world.getClientPlayer();
        return this._canvasToWorld(coord, client_player.head_y);
    }

    _canvasToWorld(coord, world_offset) {
        var world_coord = coord / this.getPixelsPerWorldUnit();
        world_coord = world_coord + world_offset - this._view_port_size / 2;
        return world_coord;
    }

    getPixelsPerWorldUnit() {
        return this._ppwu;
    }
}

WorldRenderer.FOOD_COLORS = ["#011f4b", "#03396c", "#005b96", "#6497b1", "#b3cde0"];
WorldRenderer.PLAYER_COLORS = ["#966842", "#f44747", "#eedc31", "#7fdb6a"];

module.exports = WorldRenderer;
},{"./constants.js":6,"./food-renderer.js":7,"./player-renderer.js":8}],10:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.acorn = global.acorn || {})));
}(this, (function (exports) { 'use strict';

// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"

var keywords = {
  5: ecma5AndLessKeywords,
  6: ecma5AndLessKeywords + " const class extends export import super"
}

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ae\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab65\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d4-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d01-\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f"

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]")
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]")

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541]
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239]

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i]
    if (pos > code) return false
    pos += set[i + 1]
    if (pos >= code) return true
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) return code === 36
  if (code < 91) return true
  if (code < 97) return code === 95
  if (code < 123) return true
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code))
  if (astral === false) return false
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) return code === 36
  if (code < 58) return true
  if (code < 65) return false
  if (code < 91) return true
  if (code < 97) return code === 95
  if (code < 123) return true
  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code))
  if (astral === false) return false
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label
  this.keyword = conf.keyword
  this.beforeExpr = !!conf.beforeExpr
  this.startsExpr = !!conf.startsExpr
  this.isLoop = !!conf.isLoop
  this.isAssign = !!conf.isAssign
  this.prefix = !!conf.prefix
  this.postfix = !!conf.postfix
  this.binop = conf.binop || null
  this.updateContext = null
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true};
var startsExpr = {startsExpr: true};
// Map keyword names to token types.

var keywordTypes = {}

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name
  return keywordTypes[name] = new TokenType(name, options)
}

var tt = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("prefix", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=", 6),
  relational: binop("</>", 7),
  bitShift: binop("<</>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class"),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import"),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
}

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/
var lineBreakG = new RegExp(lineBreak.source, "g")

function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

// Checks if an object has a property.

function has(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName)
}

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line
  this.column = col
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start
  this.end = end
  if (p.sourceFile !== null) this.source = p.sourceFile
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur
    var match = lineBreakG.exec(input)
    if (match && match.index < offset) {
      ++line
      cur = match.index + match[0].length
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must
  // be either 3, 5, 6 (2015), 7 (2016), or 8 (2017). This influences support
  // for strict mode, the set of reserved words, and support for
  // new syntax features. The default is 7.
  ecmaVersion: 7,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // th position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false,
  plugins: {}
}

// Interpret and default an options object

function getOptions(opts) {
  var options = {}

  for (var opt in defaultOptions)
    options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]

  if (options.ecmaVersion >= 2015)
    options.ecmaVersion -= 2009

  if (options.allowReserved == null)
    options.allowReserved = options.ecmaVersion < 5

  if (isArray(options.onToken)) {
    var tokens = options.onToken
    options.onToken = function (token) { return tokens.push(token); }
  }
  if (isArray(options.onComment))
    options.onComment = pushComment(options, options.onComment)

  return options
}

function pushComment(options, array) {
  return function (block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? 'Block' : 'Line',
      value: text,
      start: start,
      end: end
    }
    if (options.locations)
      comment.loc = new SourceLocation(this, startLoc, endLoc)
    if (options.ranges)
      comment.range = [start, end]
    array.push(comment)
  }
}

// Registered plugins
var plugins = {}

function keywordRegexp(words) {
  return new RegExp("^(" + words.replace(/ /g, "|") + ")$")
}

var Parser = function Parser(options, input, startPos) {
  this.options = options = getOptions(options)
  this.sourceFile = options.sourceFile
  this.keywords = keywordRegexp(keywords[options.ecmaVersion >= 6 ? 6 : 5])
  var reserved = ""
  if (!options.allowReserved) {
    for (var v = options.ecmaVersion;; v--)
      if (reserved = reservedWords[v]) break
    if (options.sourceType == "module") reserved += " await"
  }
  this.reservedWords = keywordRegexp(reserved)
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict
  this.reservedWordsStrict = keywordRegexp(reservedStrict)
  this.reservedWordsStrictBind = keywordRegexp(reservedStrict + " " + reservedWords.strictBind)
  this.input = String(input)

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false

  // Load plugins
  this.loadPlugins(options.plugins)

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length
  } else {
    this.pos = this.lineStart = 0
    this.curLine = 1
  }

  // Properties of the current token:
  // Its type
  this.type = tt.eof
  // For tokens that include more information than their type, the value
  this.value = null
  // Its start and end offset
  this.start = this.end = this.pos
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition()

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null
  this.lastTokStart = this.lastTokEnd = this.pos

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext()
  this.exprAllowed = true

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module"
  this.strict = this.inModule || this.strictDirective(this.pos)

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1

  // Flags to track whether we are in a function, a generator, an async function.
  this.inFunction = this.inGenerator = this.inAsync = false
  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = 0
  // Labels in scope.
  this.labels = []

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === '#!')
    this.skipLineComment(2)
};

// DEPRECATED Kept for backwards compatibility until 3.0 in case a plugin uses them
Parser.prototype.isKeyword = function isKeyword (word) { return this.keywords.test(word) };
Parser.prototype.isReservedWord = function isReservedWord (word) { return this.reservedWords.test(word) };

Parser.prototype.extend = function extend (name, f) {
  this[name] = f(this[name])
};

Parser.prototype.loadPlugins = function loadPlugins (pluginConfigs) {
    var this$1 = this;

  for (var name in pluginConfigs) {
    var plugin = plugins[name]
    if (!plugin) throw new Error("Plugin '" + name + "' not found")
    plugin(this$1, pluginConfigs[name])
  }
};

Parser.prototype.parse = function parse () {
  var node = this.options.program || this.startNode()
  this.nextToken()
  return this.parseTopLevel(node)
};

var pp = Parser.prototype

// ## Parser utilities

var literal = /^(?:'((?:[^\']|\.)*)'|"((?:[^\"]|\.)*)"|;)/
pp.strictDirective = function(start) {
  var this$1 = this;

  for (;;) {
    skipWhiteSpace.lastIndex = start
    start += skipWhiteSpace.exec(this$1.input)[0].length
    var match = literal.exec(this$1.input.slice(start))
    if (!match) return false
    if ((match[1] || match[2]) == "use strict") return true
    start += match[0].length
  }
}

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next()
    return true
  } else {
    return false
  }
}

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === tt.name && this.value === name
}

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  return this.value === name && this.eat(tt.name)
}

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) this.unexpected()
}

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === tt.eof ||
    this.type === tt.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
}

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc)
    return true
  }
}

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(tt.semi) && !this.insertSemicolon()) this.unexpected()
}

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type == tokType) {
    if (this.options.onTrailingComma)
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc)
    if (!notNext)
      this.next()
    return true
  }
}

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected()
}

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token")
}

var DestructuringErrors = function DestructuringErrors() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = -1
};

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) return
  if (refDestructuringErrors.trailingComma > -1)
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element")
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind
  if (parens > -1) this.raiseRecoverable(parens, "Parenthesized pattern")
}

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  var pos = refDestructuringErrors ? refDestructuringErrors.shorthandAssign : -1
  if (!andThrow) return pos >= 0
  if (pos > -1) this.raise(pos, "Shorthand property assignments are valid only in destructuring patterns")
}

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    this.raise(this.yieldPos, "Yield expression cannot be a default value")
  if (this.awaitPos)
    this.raise(this.awaitPos, "Await expression cannot be a default value")
}

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    return this.isSimpleAssignTarget(expr.expression)
  return expr.type === "Identifier" || expr.type === "MemberExpression"
}

var pp$1 = Parser.prototype

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var this$1 = this;

  var exports = {}
  if (!node.body) node.body = []
  while (this.type !== tt.eof) {
    var stmt = this$1.parseStatement(true, true, exports)
    node.body.push(stmt)
  }
  this.next()
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType
  }
  return this.finishNode(node, "Program")
}

var loopLabel = {kind: "loop"};
var switchLabel = {kind: "switch"};
pp$1.isLet = function() {
  if (this.type !== tt.name || this.options.ecmaVersion < 6 || this.value != "let") return false
  skipWhiteSpace.lastIndex = this.pos
  var skip = skipWhiteSpace.exec(this.input)
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next)
  if (nextCh === 91 || nextCh == 123) return true // '{' and '['
  if (isIdentifierStart(nextCh, true)) {
    for (var pos = next + 1; isIdentifierChar(this.input.charCodeAt(pos), true); ++pos) {}
    var ident = this.input.slice(next, pos)
    if (!this.isKeyword(ident)) return true
  }
  return false
}

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.type !== tt.name || this.options.ecmaVersion < 8 || this.value != "async")
    return false

  skipWhiteSpace.lastIndex = this.pos
  var skip = skipWhiteSpace.exec(this.input)
  var next = this.pos + skip[0].length
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 == this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
}

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(declaration, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind

  if (this.isLet()) {
    starttype = tt._var
    kind = "let"
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case tt._break: case tt._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case tt._debugger: return this.parseDebuggerStatement(node)
  case tt._do: return this.parseDoStatement(node)
  case tt._for: return this.parseForStatement(node)
  case tt._function:
    if (!declaration && this.options.ecmaVersion >= 6) this.unexpected()
    return this.parseFunctionStatement(node, false)
  case tt._class:
    if (!declaration) this.unexpected()
    return this.parseClass(node, true)
  case tt._if: return this.parseIfStatement(node)
  case tt._return: return this.parseReturnStatement(node)
  case tt._switch: return this.parseSwitchStatement(node)
  case tt._throw: return this.parseThrowStatement(node)
  case tt._try: return this.parseTryStatement(node)
  case tt._const: case tt._var:
    kind = kind || this.value
    if (!declaration && kind != "var") this.unexpected()
    return this.parseVarStatement(node, kind)
  case tt._while: return this.parseWhileStatement(node)
  case tt._with: return this.parseWithStatement(node)
  case tt.braceL: return this.parseBlock()
  case tt.semi: return this.parseEmptyStatement(node)
  case tt._export:
  case tt._import:
    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        this.raise(this.start, "'import' and 'export' may only appear at the top level")
      if (!this.inModule)
        this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")
    }
    return starttype === tt._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction() && declaration) {
      this.next()
      return this.parseFunctionStatement(node, true)
    }

    var maybeName = this.value, expr = this.parseExpression()
    if (starttype === tt.name && expr.type === "Identifier" && this.eat(tt.colon))
      return this.parseLabeledStatement(node, maybeName, expr)
    else return this.parseExpressionStatement(node, expr)
  }
}

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var this$1 = this;

  var isBreak = keyword == "break"
  this.next()
  if (this.eat(tt.semi) || this.insertSemicolon()) node.label = null
  else if (this.type !== tt.name) this.unexpected()
  else {
    node.label = this.parseIdent()
    this.semicolon()
  }

  // Verify that there is an actual destination to break or
  // continue to.
  for (var i = 0; i < this.labels.length; ++i) {
    var lab = this$1.labels[i]
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) break
      if (node.label && isBreak) break
    }
  }
  if (i === this.labels.length) this.raise(node.start, "Unsyntactic " + keyword)
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
}

pp$1.parseDebuggerStatement = function(node) {
  this.next()
  this.semicolon()
  return this.finishNode(node, "DebuggerStatement")
}

pp$1.parseDoStatement = function(node) {
  this.next()
  this.labels.push(loopLabel)
  node.body = this.parseStatement(false)
  this.labels.pop()
  this.expect(tt._while)
  node.test = this.parseParenExpression()
  if (this.options.ecmaVersion >= 6)
    this.eat(tt.semi)
  else
    this.semicolon()
  return this.finishNode(node, "DoWhileStatement")
}

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next()
  this.labels.push(loopLabel)
  this.expect(tt.parenL)
  if (this.type === tt.semi) return this.parseFor(node, null)
  var isLet = this.isLet()
  if (this.type === tt._var || this.type === tt._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value
    this.next()
    this.parseVar(init$1, true, kind)
    this.finishNode(init$1, "VariableDeclaration")
    if ((this.type === tt._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1 &&
        !(kind !== "var" && init$1.declarations[0].init))
      return this.parseForIn(node, init$1)
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors
  var init = this.parseExpression(true, refDestructuringErrors)
  if (this.type === tt._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    this.toAssignable(init)
    this.checkLVal(init)
    this.checkPatternErrors(refDestructuringErrors, true)
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true)
  }
  return this.parseFor(node, init)
}

pp$1.parseFunctionStatement = function(node, isAsync) {
  this.next()
  return this.parseFunction(node, true, false, isAsync)
}

pp$1.isFunction = function() {
  return this.type === tt._function || this.isAsyncFunction()
}

pp$1.parseIfStatement = function(node) {
  this.next()
  node.test = this.parseParenExpression()
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement(!this.strict && this.isFunction())
  node.alternate = this.eat(tt._else) ? this.parseStatement(!this.strict && this.isFunction()) : null
  return this.finishNode(node, "IfStatement")
}

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    this.raise(this.start, "'return' outside of function")
  this.next()

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(tt.semi) || this.insertSemicolon()) node.argument = null
  else { node.argument = this.parseExpression(); this.semicolon() }
  return this.finishNode(node, "ReturnStatement")
}

pp$1.parseSwitchStatement = function(node) {
  var this$1 = this;

  this.next()
  node.discriminant = this.parseParenExpression()
  node.cases = []
  this.expect(tt.braceL)
  this.labels.push(switchLabel)

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  for (var cur, sawDefault = false; this.type != tt.braceR;) {
    if (this$1.type === tt._case || this$1.type === tt._default) {
      var isCase = this$1.type === tt._case
      if (cur) this$1.finishNode(cur, "SwitchCase")
      node.cases.push(cur = this$1.startNode())
      cur.consequent = []
      this$1.next()
      if (isCase) {
        cur.test = this$1.parseExpression()
      } else {
        if (sawDefault) this$1.raiseRecoverable(this$1.lastTokStart, "Multiple default clauses")
        sawDefault = true
        cur.test = null
      }
      this$1.expect(tt.colon)
    } else {
      if (!cur) this$1.unexpected()
      cur.consequent.push(this$1.parseStatement(true))
    }
  }
  if (cur) this.finishNode(cur, "SwitchCase")
  this.next() // Closing brace
  this.labels.pop()
  return this.finishNode(node, "SwitchStatement")
}

pp$1.parseThrowStatement = function(node) {
  this.next()
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    this.raise(this.lastTokEnd, "Illegal newline after throw")
  node.argument = this.parseExpression()
  this.semicolon()
  return this.finishNode(node, "ThrowStatement")
}

// Reused empty array added for node fields that are always empty.

var empty = []

pp$1.parseTryStatement = function(node) {
  this.next()
  node.block = this.parseBlock()
  node.handler = null
  if (this.type === tt._catch) {
    var clause = this.startNode()
    this.next()
    this.expect(tt.parenL)
    clause.param = this.parseBindingAtom()
    this.checkLVal(clause.param, true)
    this.expect(tt.parenR)
    clause.body = this.parseBlock()
    node.handler = this.finishNode(clause, "CatchClause")
  }
  node.finalizer = this.eat(tt._finally) ? this.parseBlock() : null
  if (!node.handler && !node.finalizer)
    this.raise(node.start, "Missing catch or finally clause")
  return this.finishNode(node, "TryStatement")
}

pp$1.parseVarStatement = function(node, kind) {
  this.next()
  this.parseVar(node, false, kind)
  this.semicolon()
  return this.finishNode(node, "VariableDeclaration")
}

pp$1.parseWhileStatement = function(node) {
  this.next()
  node.test = this.parseParenExpression()
  this.labels.push(loopLabel)
  node.body = this.parseStatement(false)
  this.labels.pop()
  return this.finishNode(node, "WhileStatement")
}

pp$1.parseWithStatement = function(node) {
  if (this.strict) this.raise(this.start, "'with' in strict mode")
  this.next()
  node.object = this.parseParenExpression()
  node.body = this.parseStatement(false)
  return this.finishNode(node, "WithStatement")
}

pp$1.parseEmptyStatement = function(node) {
  this.next()
  return this.finishNode(node, "EmptyStatement")
}

pp$1.parseLabeledStatement = function(node, maybeName, expr) {
  var this$1 = this;

  for (var i = 0; i < this.labels.length; ++i)
    if (this$1.labels[i].name === maybeName) this$1.raise(expr.start, "Label '" + maybeName + "' is already declared")
  var kind = this.type.isLoop ? "loop" : this.type === tt._switch ? "switch" : null
  for (var i$1 = this.labels.length - 1; i$1 >= 0; i$1--) {
    var label = this$1.labels[i$1]
    if (label.statementStart == node.start) {
      label.statementStart = this$1.start
      label.kind = kind
    } else break
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start})
  node.body = this.parseStatement(true)
  if (node.body.type == "ClassDeclaration" ||
      node.body.type == "VariableDeclaration" && (this.strict || node.body.kind != "var") ||
      node.body.type == "FunctionDeclaration" && (this.strict || node.body.generator))
    this.raiseRecoverable(node.body.start, "Invalid labeled declaration")
  this.labels.pop()
  node.label = expr
  return this.finishNode(node, "LabeledStatement")
}

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr
  this.semicolon()
  return this.finishNode(node, "ExpressionStatement")
}

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function() {
  var this$1 = this;

  var node = this.startNode()
  node.body = []
  this.expect(tt.braceL)
  while (!this.eat(tt.braceR)) {
    var stmt = this$1.parseStatement(true)
    node.body.push(stmt)
  }
  return this.finishNode(node, "BlockStatement")
}

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init
  this.expect(tt.semi)
  node.test = this.type === tt.semi ? null : this.parseExpression()
  this.expect(tt.semi)
  node.update = this.type === tt.parenR ? null : this.parseExpression()
  this.expect(tt.parenR)
  node.body = this.parseStatement(false)
  this.labels.pop()
  return this.finishNode(node, "ForStatement")
}

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var type = this.type === tt._in ? "ForInStatement" : "ForOfStatement"
  this.next()
  node.left = init
  node.right = this.parseExpression()
  this.expect(tt.parenR)
  node.body = this.parseStatement(false)
  this.labels.pop()
  return this.finishNode(node, type)
}

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  var this$1 = this;

  node.declarations = []
  node.kind = kind
  for (;;) {
    var decl = this$1.startNode()
    this$1.parseVarId(decl)
    if (this$1.eat(tt.eq)) {
      decl.init = this$1.parseMaybeAssign(isFor)
    } else if (kind === "const" && !(this$1.type === tt._in || (this$1.options.ecmaVersion >= 6 && this$1.isContextual("of")))) {
      this$1.unexpected()
    } else if (decl.id.type != "Identifier" && !(isFor && (this$1.type === tt._in || this$1.isContextual("of")))) {
      this$1.raise(this$1.lastTokEnd, "Complex binding patterns require an initialization value")
    } else {
      decl.init = null
    }
    node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"))
    if (!this$1.eat(tt.comma)) break
  }
  return node
}

pp$1.parseVarId = function(decl) {
  decl.id = this.parseBindingAtom()
  this.checkLVal(decl.id, true)
}

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseFunction = function(node, isStatement, allowExpressionBody, isAsync) {
  this.initFunction(node)
  if (this.options.ecmaVersion >= 6 && !isAsync)
    node.generator = this.eat(tt.star)
  if (this.options.ecmaVersion >= 8)
    node.async = !!isAsync

  if (isStatement == null)
    isStatement = this.type == tt.name
  if (isStatement)
    node.id = this.parseIdent()

  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction
  this.inGenerator = node.generator
  this.inAsync = node.async
  this.yieldPos = 0
  this.awaitPos = 0
  this.inFunction = true

  if (!isStatement && this.type === tt.name)
    node.id = this.parseIdent()
  this.parseFunctionParams(node)
  this.parseFunctionBody(node, allowExpressionBody)

  this.inGenerator = oldInGen
  this.inAsync = oldInAsync
  this.yieldPos = oldYieldPos
  this.awaitPos = oldAwaitPos
  this.inFunction = oldInFunc
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression")
}

pp$1.parseFunctionParams = function(node) {
  this.expect(tt.parenL)
  node.params = this.parseBindingList(tt.parenR, false, this.options.ecmaVersion >= 8, true)
  this.checkYieldAwaitInDefaultParams()
}

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  var this$1 = this;

  this.next()
  if (isStatement == null) isStatement = this.type === tt.name
  this.parseClassId(node, isStatement)
  this.parseClassSuper(node)
  var classBody = this.startNode()
  var hadConstructor = false
  classBody.body = []
  this.expect(tt.braceL)
  while (!this.eat(tt.braceR)) {
    if (this$1.eat(tt.semi)) continue
    var method = this$1.startNode()
    var isGenerator = this$1.eat(tt.star)
    var isAsync = false
    var isMaybeStatic = this$1.type === tt.name && this$1.value === "static"
    this$1.parsePropertyName(method)
    method.static = isMaybeStatic && this$1.type !== tt.parenL
    if (method.static) {
      if (isGenerator) this$1.unexpected()
      isGenerator = this$1.eat(tt.star)
      this$1.parsePropertyName(method)
    }
    if (this$1.options.ecmaVersion >= 8 && !isGenerator && !method.computed &&
        method.key.type === "Identifier" && method.key.name === "async" && this$1.type !== tt.parenL &&
        !this$1.canInsertSemicolon()) {
      isAsync = true
      this$1.parsePropertyName(method)
    }
    method.kind = "method"
    var isGetSet = false
    if (!method.computed) {
      var key = method.key;
      if (!isGenerator && !isAsync && key.type === "Identifier" && this$1.type !== tt.parenL && (key.name === "get" || key.name === "set")) {
        isGetSet = true
        method.kind = key.name
        key = this$1.parsePropertyName(method)
      }
      if (!method.static && (key.type === "Identifier" && key.name === "constructor" ||
          key.type === "Literal" && key.value === "constructor")) {
        if (hadConstructor) this$1.raise(key.start, "Duplicate constructor in the same class")
        if (isGetSet) this$1.raise(key.start, "Constructor can't have get/set modifier")
        if (isGenerator) this$1.raise(key.start, "Constructor can't be a generator")
        if (isAsync) this$1.raise(key.start, "Constructor can't be an async method")
        method.kind = "constructor"
        hadConstructor = true
      }
    }
    this$1.parseClassMethod(classBody, method, isGenerator, isAsync)
    if (isGetSet) {
      var paramCount = method.kind === "get" ? 0 : 1
      if (method.value.params.length !== paramCount) {
        var start = method.value.start
        if (method.kind === "get")
          this$1.raiseRecoverable(start, "getter should have no params")
        else
          this$1.raiseRecoverable(start, "setter should have exactly one param")
      } else {
        if (method.kind === "set" && method.value.params[0].type === "RestElement")
          this$1.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params")
      }
    }
  }
  node.body = this.finishNode(classBody, "ClassBody")
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
}

pp$1.parseClassMethod = function(classBody, method, isGenerator, isAsync) {
  method.value = this.parseMethod(isGenerator, isAsync)
  classBody.body.push(this.finishNode(method, "MethodDefinition"))
}

pp$1.parseClassId = function(node, isStatement) {
  node.id = this.type === tt.name ? this.parseIdent() : isStatement ? this.unexpected() : null
}

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(tt._extends) ? this.parseExprSubscripts() : null
}

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  var this$1 = this;

  this.next()
  // export * from '...'
  if (this.eat(tt.star)) {
    this.expectContextual("from")
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected()
    this.semicolon()
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(tt._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart)
    var isAsync
    if (this.type === tt._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode()
      this.next()
      if (isAsync) this.next()
      node.declaration = this.parseFunction(fNode, null, false, isAsync)
    } else if (this.type === tt._class) {
      var cNode = this.startNode()
      node.declaration = this.parseClass(cNode, null)
    } else {
      node.declaration = this.parseMaybeAssign()
      this.semicolon()
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(true)
    if (node.declaration.type === "VariableDeclaration")
      this.checkVariableExport(exports, node.declaration.declarations)
    else
      this.checkExport(exports, node.declaration.id.name, node.declaration.id.start)
    node.specifiers = []
    node.source = null
  } else { // export { x, y as z } [from '...']
    node.declaration = null
    node.specifiers = this.parseExportSpecifiers(exports)
    if (this.eatContextual("from")) {
      node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected()
    } else {
      // check for keywords used as local names
      for (var i = 0; i < node.specifiers.length; i++) {
        if (this$1.keywords.test(node.specifiers[i].local.name) || this$1.reservedWords.test(node.specifiers[i].local.name)) {
          this$1.unexpected(node.specifiers[i].local.start)
        }
      }

      node.source = null
    }
    this.semicolon()
  }
  return this.finishNode(node, "ExportNamedDeclaration")
}

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) return
  if (Object.prototype.hasOwnProperty.call(exports, name))
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'")
  exports[name] = true
}

pp$1.checkPatternExport = function(exports, pat) {
  var this$1 = this;

  var type = pat.type
  if (type == "Identifier")
    this.checkExport(exports, pat.name, pat.start)
  else if (type == "ObjectPattern")
    for (var i = 0; i < pat.properties.length; ++i)
      this$1.checkPatternExport(exports, pat.properties[i].value)
  else if (type == "ArrayPattern")
    for (var i$1 = 0; i$1 < pat.elements.length; ++i$1) {
      var elt = pat.elements[i$1]
      if (elt) this$1.checkPatternExport(exports, elt)
    }
  else if (type == "AssignmentPattern")
    this.checkPatternExport(exports, pat.left)
  else if (type == "ParenthesizedExpression")
    this.checkPatternExport(exports, pat.expression)
}

pp$1.checkVariableExport = function(exports, decls) {
  var this$1 = this;

  if (!exports) return
  for (var i = 0; i < decls.length; i++)
    this$1.checkPatternExport(exports, decls[i].id)
}

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var"
    || this.type.keyword === "const"
    || this.type.keyword === "class"
    || this.type.keyword === "function"
    || this.isLet()
    || this.isAsyncFunction()
}

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var this$1 = this;

  var nodes = [], first = true
  // export { x, y as z } [from '...']
  this.expect(tt.braceL)
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this$1.expect(tt.comma)
      if (this$1.afterTrailingComma(tt.braceR)) break
    } else first = false

    var node = this$1.startNode()
    node.local = this$1.parseIdent(true)
    node.exported = this$1.eatContextual("as") ? this$1.parseIdent(true) : node.local
    this$1.checkExport(exports, node.exported.name, node.exported.start)
    nodes.push(this$1.finishNode(node, "ExportSpecifier"))
  }
  return nodes
}

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next()
  // import '...'
  if (this.type === tt.string) {
    node.specifiers = empty
    node.source = this.parseExprAtom()
  } else {
    node.specifiers = this.parseImportSpecifiers()
    this.expectContextual("from")
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected()
  }
  this.semicolon()
  return this.finishNode(node, "ImportDeclaration")
}

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var this$1 = this;

  var nodes = [], first = true
  if (this.type === tt.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode()
    node.local = this.parseIdent()
    this.checkLVal(node.local, true)
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"))
    if (!this.eat(tt.comma)) return nodes
  }
  if (this.type === tt.star) {
    var node$1 = this.startNode()
    this.next()
    this.expectContextual("as")
    node$1.local = this.parseIdent()
    this.checkLVal(node$1.local, true)
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"))
    return nodes
  }
  this.expect(tt.braceL)
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this$1.expect(tt.comma)
      if (this$1.afterTrailingComma(tt.braceR)) break
    } else first = false

    var node$2 = this$1.startNode()
    node$2.imported = this$1.parseIdent(true)
    if (this$1.eatContextual("as")) {
      node$2.local = this$1.parseIdent()
    } else {
      node$2.local = node$2.imported
      if (this$1.isKeyword(node$2.local.name)) this$1.unexpected(node$2.local.start)
      if (this$1.reservedWordsStrict.test(node$2.local.name)) this$1.raiseRecoverable(node$2.local.start, "The keyword '" + node$2.local.name + "' is reserved")
    }
    this$1.checkLVal(node$2.local, true)
    nodes.push(this$1.finishNode(node$2, "ImportSpecifier"))
  }
  return nodes
}

var pp$2 = Parser.prototype

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding) {
  var this$1 = this;

  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
      if (this.inAsync && node.name === "await")
        this.raise(node.start, "Can not use 'await' as identifier inside an async function")
      break

    case "ObjectPattern":
    case "ArrayPattern":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern"
      for (var i = 0; i < node.properties.length; i++) {
        var prop = node.properties[i]
        if (prop.kind !== "init") this$1.raise(prop.key.start, "Object pattern can't contain getter or setter")
        this$1.toAssignable(prop.value, isBinding)
      }
      break

    case "ArrayExpression":
      node.type = "ArrayPattern"
      this.toAssignableList(node.elements, isBinding)
      break

    case "AssignmentExpression":
      if (node.operator === "=") {
        node.type = "AssignmentPattern"
        delete node.operator
        this.toAssignable(node.left, isBinding)
        // falls through to AssignmentPattern
      } else {
        this.raise(node.left.end, "Only '=' operator can be used for specifying default value.")
        break
      }

    case "AssignmentPattern":
      break

    case "ParenthesizedExpression":
      node.expression = this.toAssignable(node.expression, isBinding)
      break

    case "MemberExpression":
      if (!isBinding) break

    default:
      this.raise(node.start, "Assigning to rvalue")
    }
  }
  return node
}

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var this$1 = this;

  var end = exprList.length
  if (end) {
    var last = exprList[end - 1]
    if (last && last.type == "RestElement") {
      --end
    } else if (last && last.type == "SpreadElement") {
      last.type = "RestElement"
      var arg = last.argument
      this.toAssignable(arg, isBinding)
      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern")
        this.unexpected(arg.start)
      --end
    }

    if (isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      this.unexpected(last.argument.start)
  }
  for (var i = 0; i < end; i++) {
    var elt = exprList[i]
    if (elt) this$1.toAssignable(elt, isBinding)
  }
  return exprList
}

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode()
  this.next()
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors)
  return this.finishNode(node, "SpreadElement")
}

pp$2.parseRest = function(allowNonIdent) {
  var node = this.startNode()
  this.next()

  // RestElement inside of a function parameter must be an identifier
  if (allowNonIdent) node.argument = this.type === tt.name ? this.parseIdent() : this.unexpected()
  else node.argument = this.type === tt.name || this.type === tt.bracketL ? this.parseBindingAtom() : this.unexpected()

  return this.finishNode(node, "RestElement")
}

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion < 6) return this.parseIdent()
  switch (this.type) {
  case tt.name:
    return this.parseIdent()

  case tt.bracketL:
    var node = this.startNode()
    this.next()
    node.elements = this.parseBindingList(tt.bracketR, true, true)
    return this.finishNode(node, "ArrayPattern")

  case tt.braceL:
    return this.parseObj(true)

  default:
    this.unexpected()
  }
}

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowNonIdent) {
  var this$1 = this;

  var elts = [], first = true
  while (!this.eat(close)) {
    if (first) first = false
    else this$1.expect(tt.comma)
    if (allowEmpty && this$1.type === tt.comma) {
      elts.push(null)
    } else if (allowTrailingComma && this$1.afterTrailingComma(close)) {
      break
    } else if (this$1.type === tt.ellipsis) {
      var rest = this$1.parseRest(allowNonIdent)
      this$1.parseBindingListItem(rest)
      elts.push(rest)
      if (this$1.type === tt.comma) this$1.raise(this$1.start, "Comma is not permitted after the rest element")
      this$1.expect(close)
      break
    } else {
      var elem = this$1.parseMaybeDefault(this$1.start, this$1.startLoc)
      this$1.parseBindingListItem(elem)
      elts.push(elem)
    }
  }
  return elts
}

pp$2.parseBindingListItem = function(param) {
  return param
}

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom()
  if (this.options.ecmaVersion < 6 || !this.eat(tt.eq)) return left
  var node = this.startNodeAt(startPos, startLoc)
  node.left = left
  node.right = this.parseMaybeAssign()
  return this.finishNode(node, "AssignmentPattern")
}

// Verify that a node is an lval — something that can be assigned
// to.

pp$2.checkLVal = function(expr, isBinding, checkClashes) {
  var this$1 = this;

  switch (expr.type) {
  case "Identifier":
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      this.raiseRecoverable(expr.start, (isBinding ? "Binding " : "Assigning to ") + expr.name + " in strict mode")
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        this.raiseRecoverable(expr.start, "Argument name clash")
      checkClashes[expr.name] = true
    }
    break

  case "MemberExpression":
    if (isBinding) this.raiseRecoverable(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression")
    break

  case "ObjectPattern":
    for (var i = 0; i < expr.properties.length; i++)
      this$1.checkLVal(expr.properties[i].value, isBinding, checkClashes)
    break

  case "ArrayPattern":
    for (var i$1 = 0; i$1 < expr.elements.length; i$1++) {
      var elem = expr.elements[i$1]
      if (elem) this$1.checkLVal(elem, isBinding, checkClashes)
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, isBinding, checkClashes)
    break

  case "RestElement":
    this.checkLVal(expr.argument, isBinding, checkClashes)
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, isBinding, checkClashes)
    break

  default:
    this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " rvalue")
  }
}

// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

var pp$3 = Parser.prototype

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash) {
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    return
  var key = prop.key;
  var name
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) this.raiseRecoverable(key.start, "Redefinition of __proto__ property")
      propHash.proto = true
    }
    return
  }
  name = "$" + name
  var other = propHash[name]
  if (other) {
    var isGetSet = kind !== "init"
    if ((this.strict || isGetSet) && other[kind] || !(isGetSet ^ other.init))
      this.raiseRecoverable(key.start, "Redefinition of property")
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    }
  }
  other[kind] = true
}

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors)
  if (this.type === tt.comma) {
    var node = this.startNodeAt(startPos, startLoc)
    node.expressions = [expr]
    while (this.eat(tt.comma)) node.expressions.push(this$1.parseMaybeAssign(noIn, refDestructuringErrors))
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
}

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.inGenerator && this.isContextual("yield")) return this.parseYield()

  var ownDestructuringErrors = false, oldParenAssign = -1
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign
    refDestructuringErrors.parenthesizedAssign = -1
  } else {
    refDestructuringErrors = new DestructuringErrors
    ownDestructuringErrors = true
  }

  var startPos = this.start, startLoc = this.startLoc
  if (this.type == tt.parenL || this.type == tt.name)
    this.potentialArrowAt = this.start
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors)
  if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc)
  if (this.type.isAssign) {
    this.checkPatternErrors(refDestructuringErrors, true)
    if (!ownDestructuringErrors) DestructuringErrors.call(refDestructuringErrors)
    var node = this.startNodeAt(startPos, startLoc)
    node.operator = this.value
    node.left = this.type === tt.eq ? this.toAssignable(left) : left
    refDestructuringErrors.shorthandAssign = -1 // reset because shorthand default was used correctly
    this.checkLVal(left)
    this.next()
    node.right = this.parseMaybeAssign(noIn)
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) this.checkExpressionErrors(refDestructuringErrors, true)
  }
  if (oldParenAssign > -1) refDestructuringErrors.parenthesizedAssign = oldParenAssign
  return left
}

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc
  var expr = this.parseExprOps(noIn, refDestructuringErrors)
  if (this.checkExpressionErrors(refDestructuringErrors)) return expr
  if (this.eat(tt.question)) {
    var node = this.startNodeAt(startPos, startLoc)
    node.test = expr
    node.consequent = this.parseMaybeAssign()
    this.expect(tt.colon)
    node.alternate = this.parseMaybeAssign(noIn)
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
}

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc
  var expr = this.parseMaybeUnary(refDestructuringErrors, false)
  if (this.checkExpressionErrors(refDestructuringErrors)) return expr
  return this.parseExprOp(expr, startPos, startLoc, -1, noIn)
}

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop
  if (prec != null && (!noIn || this.type !== tt._in)) {
    if (prec > minPrec) {
      var logical = this.type === tt.logicalOR || this.type === tt.logicalAND
      var op = this.value
      this.next()
      var startPos = this.start, startLoc = this.startLoc
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn)
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical)
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
}

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc)
  node.left = left
  node.operator = op
  node.right = right
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
}

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, expr
  if (this.inAsync && this.isContextual("await")) {
    expr = this.parseAwait(refDestructuringErrors)
    sawUnary = true
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === tt.incDec
    node.operator = this.value
    node.prefix = true
    this.next()
    node.argument = this.parseMaybeUnary(null, true)
    this.checkExpressionErrors(refDestructuringErrors, true)
    if (update) this.checkLVal(node.argument)
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode")
    else sawUnary = true
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression")
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors)
    if (this.checkExpressionErrors(refDestructuringErrors)) return expr
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this$1.startNodeAt(startPos, startLoc)
      node$1.operator = this$1.value
      node$1.prefix = false
      node$1.argument = expr
      this$1.checkLVal(expr)
      this$1.next()
      expr = this$1.finishNode(node$1, "UpdateExpression")
    }
  }

  if (!sawUnary && this.eat(tt.starstar))
    return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false)
  else
    return expr
}

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc
  var expr = this.parseExprAtom(refDestructuringErrors)
  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) return expr
  var result = this.parseSubscripts(expr, startPos, startLoc)
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) refDestructuringErrors.parenthesizedAssign = -1
    if (refDestructuringErrors.parenthesizedBind >= result.start) refDestructuringErrors.parenthesizedBind = -1
  }
  return result
}

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var this$1 = this;

  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd == base.end && !this.canInsertSemicolon()
  for (var computed;;) {
    if ((computed = this$1.eat(tt.bracketL)) || this$1.eat(tt.dot)) {
      var node = this$1.startNodeAt(startPos, startLoc)
      node.object = base
      node.property = computed ? this$1.parseExpression() : this$1.parseIdent(true)
      node.computed = !!computed
      if (computed) this$1.expect(tt.bracketR)
      base = this$1.finishNode(node, "MemberExpression")
    } else if (!noCalls && this$1.eat(tt.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this$1.yieldPos, oldAwaitPos = this$1.awaitPos
      this$1.yieldPos = 0
      this$1.awaitPos = 0
      var exprList = this$1.parseExprList(tt.parenR, this$1.options.ecmaVersion >= 8, false, refDestructuringErrors)
      if (maybeAsyncArrow && !this$1.canInsertSemicolon() && this$1.eat(tt.arrow)) {
        this$1.checkPatternErrors(refDestructuringErrors, false)
        this$1.checkYieldAwaitInDefaultParams()
        this$1.yieldPos = oldYieldPos
        this$1.awaitPos = oldAwaitPos
        return this$1.parseArrowExpression(this$1.startNodeAt(startPos, startLoc), exprList, true)
      }
      this$1.checkExpressionErrors(refDestructuringErrors, true)
      this$1.yieldPos = oldYieldPos || this$1.yieldPos
      this$1.awaitPos = oldAwaitPos || this$1.awaitPos
      var node$1 = this$1.startNodeAt(startPos, startLoc)
      node$1.callee = base
      node$1.arguments = exprList
      base = this$1.finishNode(node$1, "CallExpression")
    } else if (this$1.type === tt.backQuote) {
      var node$2 = this$1.startNodeAt(startPos, startLoc)
      node$2.tag = base
      node$2.quasi = this$1.parseTemplate()
      base = this$1.finishNode(node$2, "TaggedTemplateExpression")
    } else {
      return base
    }
  }
}

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  var node, canBeArrow = this.potentialArrowAt == this.start
  switch (this.type) {
  case tt._super:
    if (!this.inFunction)
      this.raise(this.start, "'super' outside of function or class")

  case tt._this:
    var type = this.type === tt._this ? "ThisExpression" : "Super"
    node = this.startNode()
    this.next()
    return this.finishNode(node, type)

  case tt.name:
    var startPos = this.start, startLoc = this.startLoc
    var id = this.parseIdent(this.type !== tt.name)
    if (this.options.ecmaVersion >= 8 && id.name === "async" && !this.canInsertSemicolon() && this.eat(tt._function))
      return this.parseFunction(this.startNodeAt(startPos, startLoc), false, false, true)
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(tt.arrow))
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false)
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === tt.name) {
        id = this.parseIdent()
        if (this.canInsertSemicolon() || !this.eat(tt.arrow))
          this.unexpected()
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case tt.regexp:
    var value = this.value
    node = this.parseLiteral(value.value)
    node.regex = {pattern: value.pattern, flags: value.flags}
    return node

  case tt.num: case tt.string:
    return this.parseLiteral(this.value)

  case tt._null: case tt._true: case tt._false:
    node = this.startNode()
    node.value = this.type === tt._null ? null : this.type === tt._true
    node.raw = this.type.keyword
    this.next()
    return this.finishNode(node, "Literal")

  case tt.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow)
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        refDestructuringErrors.parenthesizedAssign = start
      if (refDestructuringErrors.parenthesizedBind < 0)
        refDestructuringErrors.parenthesizedBind = start
    }
    return expr

  case tt.bracketL:
    node = this.startNode()
    this.next()
    node.elements = this.parseExprList(tt.bracketR, true, true, refDestructuringErrors)
    return this.finishNode(node, "ArrayExpression")

  case tt.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case tt._function:
    node = this.startNode()
    this.next()
    return this.parseFunction(node, false)

  case tt._class:
    return this.parseClass(this.startNode(), false)

  case tt._new:
    return this.parseNew()

  case tt.backQuote:
    return this.parseTemplate()

  default:
    this.unexpected()
  }
}

pp$3.parseLiteral = function(value) {
  var node = this.startNode()
  node.value = value
  node.raw = this.input.slice(this.start, this.end)
  this.next()
  return this.finishNode(node, "Literal")
}

pp$3.parseParenExpression = function() {
  this.expect(tt.parenL)
  var val = this.parseExpression()
  this.expect(tt.parenR)
  return val
}

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var this$1 = this;

  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8
  if (this.options.ecmaVersion >= 6) {
    this.next()

    var innerStartPos = this.start, innerStartLoc = this.startLoc
    var exprList = [], first = true, lastIsComma = false
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart, innerParenStart
    this.yieldPos = 0
    this.awaitPos = 0
    while (this.type !== tt.parenR) {
      first ? first = false : this$1.expect(tt.comma)
      if (allowTrailingComma && this$1.afterTrailingComma(tt.parenR, true)) {
        lastIsComma = true
        break
      } else if (this$1.type === tt.ellipsis) {
        spreadStart = this$1.start
        exprList.push(this$1.parseParenItem(this$1.parseRest()))
        if (this$1.type === tt.comma) this$1.raise(this$1.start, "Comma is not permitted after the rest element")
        break
      } else {
        if (this$1.type === tt.parenL && !innerParenStart) {
          innerParenStart = this$1.start
        }
        exprList.push(this$1.parseMaybeAssign(false, refDestructuringErrors, this$1.parseParenItem))
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc
    this.expect(tt.parenR)

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(tt.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false)
      this.checkYieldAwaitInDefaultParams()
      if (innerParenStart) this.unexpected(innerParenStart)
      this.yieldPos = oldYieldPos
      this.awaitPos = oldAwaitPos
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) this.unexpected(this.lastTokStart)
    if (spreadStart) this.unexpected(spreadStart)
    this.checkExpressionErrors(refDestructuringErrors, true)
    this.yieldPos = oldYieldPos || this.yieldPos
    this.awaitPos = oldAwaitPos || this.awaitPos

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc)
      val.expressions = exprList
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc)
    } else {
      val = exprList[0]
    }
  } else {
    val = this.parseParenExpression()
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc)
    par.expression = val
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
}

pp$3.parseParenItem = function(item) {
  return item
}

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
}

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = []

pp$3.parseNew = function() {
  var node = this.startNode()
  var meta = this.parseIdent(true)
  if (this.options.ecmaVersion >= 6 && this.eat(tt.dot)) {
    node.meta = meta
    node.property = this.parseIdent(true)
    if (node.property.name !== "target")
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target")
    if (!this.inFunction)
      this.raiseRecoverable(node.start, "new.target can only be used in functions")
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true)
  if (this.eat(tt.parenL)) node.arguments = this.parseExprList(tt.parenR, this.options.ecmaVersion >= 8, false)
  else node.arguments = empty$1
  return this.finishNode(node, "NewExpression")
}

// Parse template expression.

pp$3.parseTemplateElement = function() {
  var elem = this.startNode()
  elem.value = {
    raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, '\n'),
    cooked: this.value
  }
  this.next()
  elem.tail = this.type === tt.backQuote
  return this.finishNode(elem, "TemplateElement")
}

pp$3.parseTemplate = function() {
  var this$1 = this;

  var node = this.startNode()
  this.next()
  node.expressions = []
  var curElt = this.parseTemplateElement()
  node.quasis = [curElt]
  while (!curElt.tail) {
    this$1.expect(tt.dollarBraceL)
    node.expressions.push(this$1.parseExpression())
    this$1.expect(tt.braceR)
    node.quasis.push(curElt = this$1.parseTemplateElement())
  }
  this.next()
  return this.finishNode(node, "TemplateLiteral")
}

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var this$1 = this;

  var node = this.startNode(), first = true, propHash = {}
  node.properties = []
  this.next()
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this$1.expect(tt.comma)
      if (this$1.afterTrailingComma(tt.braceR)) break
    } else first = false

    var prop = this$1.startNode(), isGenerator, isAsync, startPos, startLoc
    if (this$1.options.ecmaVersion >= 6) {
      prop.method = false
      prop.shorthand = false
      if (isPattern || refDestructuringErrors) {
        startPos = this$1.start
        startLoc = this$1.startLoc
      }
      if (!isPattern)
        isGenerator = this$1.eat(tt.star)
    }
    this$1.parsePropertyName(prop)
    if (!isPattern && this$1.options.ecmaVersion >= 8 && !isGenerator && !prop.computed &&
        prop.key.type === "Identifier" && prop.key.name === "async" && this$1.type !== tt.parenL &&
        this$1.type !== tt.colon && !this$1.canInsertSemicolon()) {
      isAsync = true
      this$1.parsePropertyName(prop, refDestructuringErrors)
    } else {
      isAsync = false
    }
    this$1.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors)
    this$1.checkPropClash(prop, propHash)
    node.properties.push(this$1.finishNode(prop, "Property"))
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
}

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors) {
  if ((isGenerator || isAsync) && this.type === tt.colon)
    this.unexpected()

  if (this.eat(tt.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors)
    prop.kind = "init"
  } else if (this.options.ecmaVersion >= 6 && this.type === tt.parenL) {
    if (isPattern) this.unexpected()
    prop.kind = "init"
    prop.method = true
    prop.value = this.parseMethod(isGenerator, isAsync)
  } else if (this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type != tt.comma && this.type != tt.braceR)) {
    if (isGenerator || isAsync || isPattern) this.unexpected()
    prop.kind = prop.key.name
    this.parsePropertyName(prop)
    prop.value = this.parseMethod(false)
    var paramCount = prop.kind === "get" ? 0 : 1
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start
      if (prop.kind === "get")
        this.raiseRecoverable(start, "getter should have no params")
      else
        this.raiseRecoverable(start, "setter should have exactly one param")
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params")
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (this.keywords.test(prop.key.name) ||
        (this.strict ? this.reservedWordsStrict : this.reservedWords).test(prop.key.name) ||
        (this.inGenerator && prop.key.name == "yield") ||
        (this.inAsync && prop.key.name == "await"))
      this.raiseRecoverable(prop.key.start, "'" + prop.key.name + "' can not be used as shorthand property")
    prop.kind = "init"
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key)
    } else if (this.type === tt.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        refDestructuringErrors.shorthandAssign = this.start
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key)
    } else {
      prop.value = prop.key
    }
    prop.shorthand = true
  } else this.unexpected()
}

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(tt.bracketL)) {
      prop.computed = true
      prop.key = this.parseMaybeAssign()
      this.expect(tt.bracketR)
      return prop.key
    } else {
      prop.computed = false
    }
  }
  return prop.key = this.type === tt.num || this.type === tt.string ? this.parseExprAtom() : this.parseIdent(true)
}

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null
  if (this.options.ecmaVersion >= 6) {
    node.generator = false
    node.expression = false
  }
  if (this.options.ecmaVersion >= 8)
    node.async = false
}

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction

  this.initFunction(node)
  if (this.options.ecmaVersion >= 6)
    node.generator = isGenerator
  if (this.options.ecmaVersion >= 8)
    node.async = !!isAsync

  this.inGenerator = node.generator
  this.inAsync = node.async
  this.yieldPos = 0
  this.awaitPos = 0
  this.inFunction = true

  this.expect(tt.parenL)
  node.params = this.parseBindingList(tt.parenR, false, this.options.ecmaVersion >= 8)
  this.checkYieldAwaitInDefaultParams()
  this.parseFunctionBody(node, false)

  this.inGenerator = oldInGen
  this.inAsync = oldInAsync
  this.yieldPos = oldYieldPos
  this.awaitPos = oldAwaitPos
  this.inFunction = oldInFunc
  return this.finishNode(node, "FunctionExpression")
}

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldInGen = this.inGenerator, oldInAsync = this.inAsync,
      oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldInFunc = this.inFunction

  this.initFunction(node)
  if (this.options.ecmaVersion >= 8)
    node.async = !!isAsync

  this.inGenerator = false
  this.inAsync = node.async
  this.yieldPos = 0
  this.awaitPos = 0
  this.inFunction = true

  node.params = this.toAssignableList(params, true)
  this.parseFunctionBody(node, true)

  this.inGenerator = oldInGen
  this.inAsync = oldInAsync
  this.yieldPos = oldYieldPos
  this.awaitPos = oldAwaitPos
  this.inFunction = oldInFunc
  return this.finishNode(node, "ArrowFunctionExpression")
}

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction) {
  var isExpression = isArrowFunction && this.type !== tt.braceL
  var oldStrict = this.strict, useStrict = false

  if (isExpression) {
    node.body = this.parseMaybeAssign()
    node.expression = true
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params)
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end)
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list")
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels
    this.labels = []
    if (useStrict) this.strict = true
    node.body = this.parseBlock(true)
    node.expression = false
    this.labels = oldLabels
  }

  if (oldStrict || useStrict) {
    this.strict = true
    if (node.id)
      this.checkLVal(node.id, true)
    this.checkParams(node)
    this.strict = oldStrict
  } else if (isArrowFunction || !this.isSimpleParamList(node.params)) {
    this.checkParams(node)
  }
}

pp$3.isSimpleParamList = function(params) {
  for (var i = 0; i < params.length; i++)
    if (params[i].type !== "Identifier") return false
  return true
}

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node) {
  var this$1 = this;

  var nameHash = {}
  for (var i = 0; i < node.params.length; i++) this$1.checkLVal(node.params[i], true, nameHash)
}

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var this$1 = this;

  var elts = [], first = true
  while (!this.eat(close)) {
    if (!first) {
      this$1.expect(tt.comma)
      if (allowTrailingComma && this$1.afterTrailingComma(close)) break
    } else first = false

    var elt
    if (allowEmpty && this$1.type === tt.comma)
      elt = null
    else if (this$1.type === tt.ellipsis) {
      elt = this$1.parseSpread(refDestructuringErrors)
      if (refDestructuringErrors && this$1.type === tt.comma && refDestructuringErrors.trailingComma < 0)
        refDestructuringErrors.trailingComma = this$1.start
    } else {
      elt = this$1.parseMaybeAssign(false, refDestructuringErrors)
    }
    elts.push(elt)
  }
  return elts
}

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal) {
  var node = this.startNode()
  if (liberal && this.options.allowReserved == "never") liberal = false
  if (this.type === tt.name) {
    if (!liberal && (this.strict ? this.reservedWordsStrict : this.reservedWords).test(this.value) &&
        (this.options.ecmaVersion >= 6 ||
         this.input.slice(this.start, this.end).indexOf("\\") == -1))
      this.raiseRecoverable(this.start, "The keyword '" + this.value + "' is reserved")
    if (this.inGenerator && this.value === "yield")
      this.raiseRecoverable(this.start, "Can not use 'yield' as identifier inside a generator")
    if (this.inAsync && this.value === "await")
      this.raiseRecoverable(this.start, "Can not use 'await' as identifier inside an async function")
    node.name = this.value
  } else if (liberal && this.type.keyword) {
    node.name = this.type.keyword
  } else {
    this.unexpected()
  }
  this.next()
  return this.finishNode(node, "Identifier")
}

// Parses yield expression inside generator.

pp$3.parseYield = function() {
  if (!this.yieldPos) this.yieldPos = this.start

  var node = this.startNode()
  this.next()
  if (this.type == tt.semi || this.canInsertSemicolon() || (this.type != tt.star && !this.type.startsExpr)) {
    node.delegate = false
    node.argument = null
  } else {
    node.delegate = this.eat(tt.star)
    node.argument = this.parseMaybeAssign()
  }
  return this.finishNode(node, "YieldExpression")
}

pp$3.parseAwait = function() {
  if (!this.awaitPos) this.awaitPos = this.start

  var node = this.startNode()
  this.next()
  node.argument = this.parseMaybeUnary(null, true)
  return this.finishNode(node, "AwaitExpression")
}

var pp$4 = Parser.prototype

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos)
  message += " (" + loc.line + ":" + loc.column + ")"
  var err = new SyntaxError(message)
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos
  throw err
}

pp$4.raiseRecoverable = pp$4.raise

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
}

var Node = function Node(parser, pos, loc) {
  this.type = ""
  this.start = pos
  this.end = 0
  if (parser.options.locations)
    this.loc = new SourceLocation(parser, loc)
  if (parser.options.directSourceFile)
    this.sourceFile = parser.options.directSourceFile
  if (parser.options.ranges)
    this.range = [pos, 0]
};

// Start an AST node, attaching a start offset.

var pp$5 = Parser.prototype

pp$5.startNode = function() {
  return new Node(this, this.start, this.startLoc)
}

pp$5.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
}

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type
  node.end = pos
  if (this.options.locations)
    node.loc.end = loc
  if (this.options.ranges)
    node.range[1] = pos
  return node
}

pp$5.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
}

// Finish node at given position

pp$5.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
}

// The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var TokContext = function TokContext(token, isExpr, preserveSpace, override) {
  this.token = token
  this.isExpr = !!isExpr
  this.preserveSpace = !!preserveSpace
  this.override = override
};

var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", true),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.readTmplToken(); }),
  f_expr: new TokContext("function", true)
}

var pp$6 = Parser.prototype

pp$6.initialContext = function() {
  return [types.b_stat]
}

pp$6.braceIsBlock = function(prevType) {
  if (prevType === tt.colon) {
    var parent = this.curContext()
    if (parent === types.b_stat || parent === types.b_expr)
      return !parent.isExpr
  }
  if (prevType === tt._return)
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  if (prevType === tt._else || prevType === tt.semi || prevType === tt.eof || prevType === tt.parenR)
    return true
  if (prevType == tt.braceL)
    return this.curContext() === types.b_stat
  return !this.exprAllowed
}

pp$6.updateContext = function(prevType) {
  var update, type = this.type
  if (type.keyword && prevType == tt.dot)
    this.exprAllowed = false
  else if (update = type.updateContext)
    update.call(this, prevType)
  else
    this.exprAllowed = type.beforeExpr
}

// Token-specific context update code

tt.parenR.updateContext = tt.braceR.updateContext = function() {
  if (this.context.length == 1) {
    this.exprAllowed = true
    return
  }
  var out = this.context.pop()
  if (out === types.b_stat && this.curContext() === types.f_expr) {
    this.context.pop()
    this.exprAllowed = false
  } else if (out === types.b_tmpl) {
    this.exprAllowed = true
  } else {
    this.exprAllowed = !out.isExpr
  }
}

tt.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr)
  this.exprAllowed = true
}

tt.dollarBraceL.updateContext = function() {
  this.context.push(types.b_tmpl)
  this.exprAllowed = true
}

tt.parenL.updateContext = function(prevType) {
  var statementParens = prevType === tt._if || prevType === tt._for || prevType === tt._with || prevType === tt._while
  this.context.push(statementParens ? types.p_stat : types.p_expr)
  this.exprAllowed = true
}

tt.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
}

tt._function.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== tt.semi && prevType !== tt._else &&
      !((prevType === tt.colon || prevType === tt.braceL) && this.curContext() === types.b_stat))
    this.context.push(types.f_expr)
  this.exprAllowed = false
}

tt.backQuote.updateContext = function() {
  if (this.curContext() === types.q_tmpl)
    this.context.pop()
  else
    this.context.push(types.q_tmpl)
  this.exprAllowed = false
}

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type
  this.value = p.value
  this.start = p.start
  this.end = p.end
  if (p.options.locations)
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc)
  if (p.options.ranges)
    this.range = [p.start, p.end]
};

// ## Tokenizer

var pp$7 = Parser.prototype

// Are we running under Rhino?
var isRhino = typeof Packages == "object" && Object.prototype.toString.call(Packages) == "[object JavaPackage]"

// Move to the next token

pp$7.next = function() {
  if (this.options.onToken)
    this.options.onToken(new Token(this))

  this.lastTokEnd = this.end
  this.lastTokStart = this.start
  this.lastTokEndLoc = this.endLoc
  this.lastTokStartLoc = this.startLoc
  this.nextToken()
}

pp$7.getToken = function() {
  this.next()
  return new Token(this)
}

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  pp$7[Symbol.iterator] = function () {
    var self = this
    return {next: function () {
      var token = self.getToken()
      return {
        done: token.type === tt.eof,
        value: token
      }
    }}
  }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$7.curContext = function() {
  return this.context[this.context.length - 1]
}

// Read a single token, updating the parser object's token-related
// properties.

pp$7.nextToken = function() {
  var curContext = this.curContext()
  if (!curContext || !curContext.preserveSpace) this.skipSpace()

  this.start = this.pos
  if (this.options.locations) this.startLoc = this.curPosition()
  if (this.pos >= this.input.length) return this.finishToken(tt.eof)

  if (curContext.override) return curContext.override(this)
  else this.readToken(this.fullCharCodeAtPos())
}

pp$7.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    return this.readWord()

  return this.getTokenFromCode(code)
}

pp$7.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos)
  if (code <= 0xd7ff || code >= 0xe000) return code
  var next = this.input.charCodeAt(this.pos + 1)
  return (code << 10) + next - 0x35fdc00
}

pp$7.skipBlockComment = function() {
  var this$1 = this;

  var startLoc = this.options.onComment && this.curPosition()
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2)
  if (end === -1) this.raise(this.pos - 2, "Unterminated comment")
  this.pos = end + 2
  if (this.options.locations) {
    lineBreakG.lastIndex = start
    var match
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this$1.curLine
      this$1.lineStart = match.index + match[0].length
    }
  }
  if (this.options.onComment)
    this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition())
}

pp$7.skipLineComment = function(startSkip) {
  var this$1 = this;

  var start = this.pos
  var startLoc = this.options.onComment && this.curPosition()
  var ch = this.input.charCodeAt(this.pos+=startSkip)
  while (this.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
    ++this$1.pos
    ch = this$1.input.charCodeAt(this$1.pos)
  }
  if (this.options.onComment)
    this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition())
}

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$7.skipSpace = function() {
  var this$1 = this;

  loop: while (this.pos < this.input.length) {
    var ch = this$1.input.charCodeAt(this$1.pos)
    switch (ch) {
      case 32: case 160: // ' '
        ++this$1.pos
        break
      case 13:
        if (this$1.input.charCodeAt(this$1.pos + 1) === 10) {
          ++this$1.pos
        }
      case 10: case 8232: case 8233:
        ++this$1.pos
        if (this$1.options.locations) {
          ++this$1.curLine
          this$1.lineStart = this$1.pos
        }
        break
      case 47: // '/'
        switch (this$1.input.charCodeAt(this$1.pos + 1)) {
          case 42: // '*'
            this$1.skipBlockComment()
            break
          case 47:
            this$1.skipLineComment(2)
            break
          default:
            break loop
        }
        break
      default:
        if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
          ++this$1.pos
        } else {
          break loop
        }
    }
  }
}

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$7.finishToken = function(type, val) {
  this.end = this.pos
  if (this.options.locations) this.endLoc = this.curPosition()
  var prevType = this.type
  this.type = type
  this.value = val

  this.updateContext(prevType)
}

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$7.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1)
  if (next >= 48 && next <= 57) return this.readNumber(true)
  var next2 = this.input.charCodeAt(this.pos + 2)
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3
    return this.finishToken(tt.ellipsis)
  } else {
    ++this.pos
    return this.finishToken(tt.dot)
  }
}

pp$7.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1)
  if (this.exprAllowed) {++this.pos; return this.readRegexp()}
  if (next === 61) return this.finishOp(tt.assign, 2)
  return this.finishOp(tt.slash, 1)
}

pp$7.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1)
  var size = 1
  var tokentype = code === 42 ? tt.star : tt.modulo

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && next === 42) {
    ++size
    tokentype = tt.starstar
    next = this.input.charCodeAt(this.pos + 2)
  }

  if (next === 61) return this.finishOp(tt.assign, size + 1)
  return this.finishOp(tokentype, size)
}

pp$7.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1)
  if (next === code) return this.finishOp(code === 124 ? tt.logicalOR : tt.logicalAND, 2)
  if (next === 61) return this.finishOp(tt.assign, 2)
  return this.finishOp(code === 124 ? tt.bitwiseOR : tt.bitwiseAND, 1)
}

pp$7.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1)
  if (next === 61) return this.finishOp(tt.assign, 2)
  return this.finishOp(tt.bitwiseXOR, 1)
}

pp$7.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1)
  if (next === code) {
    if (next == 45 && this.input.charCodeAt(this.pos + 2) == 62 &&
        lineBreak.test(this.input.slice(this.lastTokEnd, this.pos))) {
      // A `-->` line comment
      this.skipLineComment(3)
      this.skipSpace()
      return this.nextToken()
    }
    return this.finishOp(tt.incDec, 2)
  }
  if (next === 61) return this.finishOp(tt.assign, 2)
  return this.finishOp(tt.plusMin, 1)
}

pp$7.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1)
  var size = 1
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2
    if (this.input.charCodeAt(this.pos + size) === 61) return this.finishOp(tt.assign, size + 1)
    return this.finishOp(tt.bitShift, size)
  }
  if (next == 33 && code == 60 && this.input.charCodeAt(this.pos + 2) == 45 &&
      this.input.charCodeAt(this.pos + 3) == 45) {
    if (this.inModule) this.unexpected()
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4)
    this.skipSpace()
    return this.nextToken()
  }
  if (next === 61) size = 2
  return this.finishOp(tt.relational, size)
}

pp$7.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1)
  if (next === 61) return this.finishOp(tt.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2
    return this.finishToken(tt.arrow)
  }
  return this.finishOp(code === 61 ? tt.eq : tt.prefix, 1)
}

pp$7.getTokenFromCode = function(code) {
  switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

    // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(tt.parenL)
  case 41: ++this.pos; return this.finishToken(tt.parenR)
  case 59: ++this.pos; return this.finishToken(tt.semi)
  case 44: ++this.pos; return this.finishToken(tt.comma)
  case 91: ++this.pos; return this.finishToken(tt.bracketL)
  case 93: ++this.pos; return this.finishToken(tt.bracketR)
  case 123: ++this.pos; return this.finishToken(tt.braceL)
  case 125: ++this.pos; return this.finishToken(tt.braceR)
  case 58: ++this.pos; return this.finishToken(tt.colon)
  case 63: ++this.pos; return this.finishToken(tt.question)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) break
    ++this.pos
    return this.finishToken(tt.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1)
    if (next === 120 || next === 88) return this.readRadixNumber(16) // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) return this.readRadixNumber(8) // '0o', '0O' - octal number
      if (next === 98 || next === 66) return this.readRadixNumber(2) // '0b', '0B' - binary number
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

    // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 126: // '~'
    return this.finishOp(tt.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'")
}

pp$7.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size)
  this.pos += size
  return this.finishToken(type, str)
}

// Parse a regular expression. Some context-awareness is necessary,
// since a '/' inside a '[]' set does not end the expression.

function tryCreateRegexp(src, flags, throwErrorAt, parser) {
  try {
    return new RegExp(src, flags)
  } catch (e) {
    if (throwErrorAt !== undefined) {
      if (e instanceof SyntaxError) parser.raise(throwErrorAt, "Error parsing regular expression: " + e.message)
      throw e
    }
  }
}

var regexpUnicodeSupport = !!tryCreateRegexp("\uffff", "u")

pp$7.readRegexp = function() {
  var this$1 = this;

  var escaped, inClass, start = this.pos
  for (;;) {
    if (this$1.pos >= this$1.input.length) this$1.raise(start, "Unterminated regular expression")
    var ch = this$1.input.charAt(this$1.pos)
    if (lineBreak.test(ch)) this$1.raise(start, "Unterminated regular expression")
    if (!escaped) {
      if (ch === "[") inClass = true
      else if (ch === "]" && inClass) inClass = false
      else if (ch === "/" && !inClass) break
      escaped = ch === "\\"
    } else escaped = false
    ++this$1.pos
  }
  var content = this.input.slice(start, this.pos)
  ++this.pos
  // Need to use `readWord1` because '\uXXXX' sequences are allowed
  // here (don't ask).
  var mods = this.readWord1()
  var tmp = content, tmpFlags = ""
  if (mods) {
    var validFlags = /^[gim]*$/
    if (this.options.ecmaVersion >= 6) validFlags = /^[gimuy]*$/
    if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag")
    if (mods.indexOf("u") >= 0) {
      if (regexpUnicodeSupport) {
        tmpFlags = "u"
      } else {
        // Replace each astral symbol and every Unicode escape sequence that
        // possibly represents an astral symbol or a paired surrogate with a
        // single ASCII symbol to avoid throwing on regular expressions that
        // are only valid in combination with the `/u` flag.
        // Note: replacing with the ASCII symbol `x` might cause false
        // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
        // perfectly valid pattern that is equivalent to `[a-b]`, but it would
        // be replaced by `[x-b]` which throws an error.
        tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}/g, function (_match, code, offset) {
          code = Number("0x" + code)
          if (code > 0x10FFFF) this$1.raise(start + offset + 3, "Code point out of bounds")
          return "x"
        })
        tmp = tmp.replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x")
        tmpFlags = tmpFlags.replace("u", "")
      }
    }
  }
  // Detect invalid regular expressions.
  var value = null
  // Rhino's regular expression parser is flaky and throws uncatchable exceptions,
  // so don't do detection if we are running under Rhino
  if (!isRhino) {
    tryCreateRegexp(tmp, tmpFlags, start, this)
    // Get a regular expression object for this pattern-flag pair, or `null` in
    // case the current environment doesn't support the flags it uses.
    value = tryCreateRegexp(content, mods)
  }
  return this.finishToken(tt.regexp, {pattern: content, flags: mods, value: value})
}

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$7.readInt = function(radix, len) {
  var this$1 = this;

  var start = this.pos, total = 0
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code = this$1.input.charCodeAt(this$1.pos), val
    if (code >= 97) val = code - 97 + 10 // a
    else if (code >= 65) val = code - 65 + 10 // A
    else if (code >= 48 && code <= 57) val = code - 48 // 0-9
    else val = Infinity
    if (val >= radix) break
    ++this$1.pos
    total = total * radix + val
  }
  if (this.pos === start || len != null && this.pos - start !== len) return null

  return total
}

pp$7.readRadixNumber = function(radix) {
  this.pos += 2 // 0x
  var val = this.readInt(radix)
  if (val == null) this.raise(this.start + 2, "Expected number in radix " + radix)
  if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number")
  return this.finishToken(tt.num, val)
}

// Read an integer, octal integer, or floating-point number.

pp$7.readNumber = function(startsWithDot) {
  var start = this.pos, isFloat = false, octal = this.input.charCodeAt(this.pos) === 48
  if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number")
  if (octal && this.pos == start + 1) octal = false
  var next = this.input.charCodeAt(this.pos)
  if (next === 46 && !octal) { // '.'
    ++this.pos
    this.readInt(10)
    isFloat = true
    next = this.input.charCodeAt(this.pos)
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos)
    if (next === 43 || next === 45) ++this.pos // '+-'
    if (this.readInt(10) === null) this.raise(start, "Invalid number")
    isFloat = true
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number")

  var str = this.input.slice(start, this.pos), val
  if (isFloat) val = parseFloat(str)
  else if (!octal || str.length === 1) val = parseInt(str, 10)
  else if (/[89]/.test(str) || this.strict) this.raise(start, "Invalid number")
  else val = parseInt(str, 8)
  return this.finishToken(tt.num, val)
}

// Read a string value, interpreting backslash-escapes.

pp$7.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code

  if (ch === 123) {
    if (this.options.ecmaVersion < 6) this.unexpected()
    var codePos = ++this.pos
    code = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)
    ++this.pos
    if (code > 0x10FFFF) this.raise(codePos, "Code point out of bounds")
  } else {
    code = this.readHexChar(4)
  }
  return code
}

function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) return String.fromCharCode(code)
  code -= 0x10000
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$7.readString = function(quote) {
  var this$1 = this;

  var out = "", chunkStart = ++this.pos
  for (;;) {
    if (this$1.pos >= this$1.input.length) this$1.raise(this$1.start, "Unterminated string constant")
    var ch = this$1.input.charCodeAt(this$1.pos)
    if (ch === quote) break
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos)
      out += this$1.readEscapedChar(false)
      chunkStart = this$1.pos
    } else {
      if (isNewLine(ch)) this$1.raise(this$1.start, "Unterminated string constant")
      ++this$1.pos
    }
  }
  out += this.input.slice(chunkStart, this.pos++)
  return this.finishToken(tt.string, out)
}

// Reads template string tokens.

pp$7.readTmplToken = function() {
  var this$1 = this;

  var out = "", chunkStart = this.pos
  for (;;) {
    if (this$1.pos >= this$1.input.length) this$1.raise(this$1.start, "Unterminated template")
    var ch = this$1.input.charCodeAt(this$1.pos)
    if (ch === 96 || ch === 36 && this$1.input.charCodeAt(this$1.pos + 1) === 123) { // '`', '${'
      if (this$1.pos === this$1.start && this$1.type === tt.template) {
        if (ch === 36) {
          this$1.pos += 2
          return this$1.finishToken(tt.dollarBraceL)
        } else {
          ++this$1.pos
          return this$1.finishToken(tt.backQuote)
        }
      }
      out += this$1.input.slice(chunkStart, this$1.pos)
      return this$1.finishToken(tt.template, out)
    }
    if (ch === 92) { // '\'
      out += this$1.input.slice(chunkStart, this$1.pos)
      out += this$1.readEscapedChar(true)
      chunkStart = this$1.pos
    } else if (isNewLine(ch)) {
      out += this$1.input.slice(chunkStart, this$1.pos)
      ++this$1.pos
      switch (ch) {
        case 13:
          if (this$1.input.charCodeAt(this$1.pos) === 10) ++this$1.pos
        case 10:
          out += "\n"
          break
        default:
          out += String.fromCharCode(ch)
          break
      }
      if (this$1.options.locations) {
        ++this$1.curLine
        this$1.lineStart = this$1.pos
      }
      chunkStart = this$1.pos
    } else {
      ++this$1.pos
    }
  }
}

// Used to read escaped characters

pp$7.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos)
  ++this.pos
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) ++this.pos // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine }
    return ""
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0]
      var octal = parseInt(octalStr, 8)
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1)
        octal = parseInt(octalStr, 8)
      }
      if (octalStr !== "0" && (this.strict || inTemplate)) {
        this.raise(this.pos - 2, "Octal literal in strict mode")
      }
      this.pos += octalStr.length - 1
      return String.fromCharCode(octal)
    }
    return String.fromCharCode(ch)
  }
}

// Used to read character escape sequences ('\x', '\u', '\U').

pp$7.readHexChar = function(len) {
  var codePos = this.pos
  var n = this.readInt(16, len)
  if (n === null) this.raise(codePos, "Bad character escape sequence")
  return n
}

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$7.readWord1 = function() {
  var this$1 = this;

  this.containsEsc = false
  var word = "", first = true, chunkStart = this.pos
  var astral = this.options.ecmaVersion >= 6
  while (this.pos < this.input.length) {
    var ch = this$1.fullCharCodeAtPos()
    if (isIdentifierChar(ch, astral)) {
      this$1.pos += ch <= 0xffff ? 1 : 2
    } else if (ch === 92) { // "\"
      this$1.containsEsc = true
      word += this$1.input.slice(chunkStart, this$1.pos)
      var escStart = this$1.pos
      if (this$1.input.charCodeAt(++this$1.pos) != 117) // "u"
        this$1.raise(this$1.pos, "Expecting Unicode escape sequence \\uXXXX")
      ++this$1.pos
      var esc = this$1.readCodePoint()
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        this$1.raise(escStart, "Invalid Unicode escape")
      word += codePointToString(esc)
      chunkStart = this$1.pos
    } else {
      break
    }
    first = false
  }
  return word + this.input.slice(chunkStart, this.pos)
}

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$7.readWord = function() {
  var word = this.readWord1()
  var type = tt.name
  if (this.keywords.test(word)) {
    if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword " + word)
    type = keywordTypes[word]
  }
  return this.finishToken(type, word)
}

// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/ternjs/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/ternjs/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

var version = "4.0.11"

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse(input, options) {
  return new Parser(options, input).parse()
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

function parseExpressionAt(input, pos, options) {
  var p = new Parser(options, input, pos)
  p.nextToken()
  return p.parseExpression()
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

function tokenizer(input, options) {
  return new Parser(options, input)
}

// This is a terrible kludge to support the existing, pre-ES6
// interface where the loose parser module retroactively adds exports
// to this module.
function addLooseExports(parse, Parser, plugins) {
  exports.parse_dammit = parse
  exports.LooseParser = Parser
  exports.pluginsLoose = plugins
}

exports.version = version;
exports.parse = parse;
exports.parseExpressionAt = parseExpressionAt;
exports.tokenizer = tokenizer;
exports.addLooseExports = addLooseExports;
exports.Parser = Parser;
exports.plugins = plugins;
exports.defaultOptions = defaultOptions;
exports.Position = Position;
exports.SourceLocation = SourceLocation;
exports.getLineInfo = getLineInfo;
exports.Node = Node;
exports.TokenType = TokenType;
exports.tokTypes = tt;
exports.keywordTypes = keywordTypes;
exports.TokContext = TokContext;
exports.tokContexts = types;
exports.isIdentifierChar = isIdentifierChar;
exports.isIdentifierStart = isIdentifierStart;
exports.Token = Token;
exports.isNewLine = isNewLine;
exports.lineBreak = lineBreak;
exports.lineBreakG = lineBreakG;

Object.defineProperty(exports, '__esModule', { value: true });

})));
},{}],11:[function(require,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],12:[function(require,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],13:[function(require,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],14:[function(require,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();

},{}],15:[function(require,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],17:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],18:[function(require,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],19:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))
},{"./debug":20,"_process":3}],20:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":38}],21:[function(require,module,exports){

module.exports = require('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = require('engine.io-parser');

},{"./socket":22,"engine.io-parser":30}],22:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = require('./transports/index');
var Emitter = require('component-emitter');
var debug = require('debug')('engine.io-client:socket');
var index = require('indexof');
var parser = require('engine.io-parser');
var parseuri = require('parseuri');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = require('./transport');
Socket.transports = require('./transports/index');
Socket.parser = require('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./transport":23,"./transports/index":24,"component-emitter":17,"debug":19,"engine.io-parser":30,"indexof":35,"parseqs":40,"parseuri":41}],23:[function(require,module,exports){
/**
 * Module dependencies.
 */

var parser = require('engine.io-parser');
var Emitter = require('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":17,"engine.io-parser":30}],24:[function(require,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var XHR = require('./polling-xhr');
var JSONP = require('./polling-jsonp');
var websocket = require('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling-jsonp":25,"./polling-xhr":26,"./websocket":28,"xmlhttprequest-ssl":29}],25:[function(require,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = require('./polling');
var inherit = require('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":27,"component-inherit":18}],26:[function(require,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var Polling = require('./polling');
var Emitter = require('component-emitter');
var inherit = require('component-inherit');
var debug = require('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":27,"component-emitter":17,"component-inherit":18,"debug":19,"xmlhttprequest-ssl":29}],27:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parseqs = require('parseqs');
var parser = require('engine.io-parser');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = require('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":23,"component-inherit":18,"debug":19,"engine.io-parser":30,"parseqs":40,"xmlhttprequest-ssl":29,"yeast":51}],28:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parser = require('engine.io-parser');
var parseqs = require('parseqs');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = require('ws');
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../transport":23,"component-inherit":18,"debug":19,"engine.io-parser":30,"parseqs":40,"ws":1,"yeast":51}],29:[function(require,module,exports){
(function (global){
// browser shim for xmlhttprequest module

var hasCORS = require('has-cors');

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"has-cors":34}],30:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = require('./keys');
var hasBinary = require('has-binary2');
var sliceBuffer = require('arraybuffer.slice');
var after = require('after');
var utf8 = require('./utf8');

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = require('base64-arraybuffer');
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = require('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":31,"./utf8":32,"after":11,"arraybuffer.slice":12,"base64-arraybuffer":14,"blob":15,"has-binary2":33}],31:[function(require,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],32:[function(require,module,exports){
(function (global){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],33:[function(require,module,exports){
(function (global){
/* global Blob File */

/*
 * Module requirements.
 */

var isArray = require('isarray');

var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":36}],34:[function(require,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],35:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],36:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],37:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}],38:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],39:[function(require,module,exports){
/*!
 * Paper.js v0.11.5 - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2016, Juerg Lehni & Jonathan Puckey
 * http://scratchdisk.com/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Thu Oct 5 16:16:29 2017 +0200
 *
 ***
 *
 * Straps.js - Class inheritance library with support for bean-style accessors
 *
 * Copyright (c) 2006 - 2016 Juerg Lehni
 * http://scratchdisk.com/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Acorn.js
 * http://marijnhaverbeke.nl/acorn/
 *
 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
 * created by Marijn Haverbeke and released under an MIT license.
 *
 */

var paper = function(self, undefined) {

self = self || require('./node/self.js');
var window = self.window,
	document = self.document;

var Base = new function() {
	var hidden = /^(statics|enumerable|beans|preserve)$/,
		array = [],
		slice = array.slice,
		create = Object.create,
		describe = Object.getOwnPropertyDescriptor,
		define = Object.defineProperty,

		forEach = array.forEach || function(iter, bind) {
			for (var i = 0, l = this.length; i < l; i++) {
				iter.call(bind, this[i], i, this);
			}
		},

		forIn = function(iter, bind) {
			for (var i in this) {
				if (this.hasOwnProperty(i))
					iter.call(bind, this[i], i, this);
			}
		},

		set = Object.assign || function(dst) {
			for (var i = 1, l = arguments.length; i < l; i++) {
				var src = arguments[i];
				for (var key in src) {
					if (src.hasOwnProperty(key))
						dst[key] = src[key];
				}
			}
			return dst;
		},

		each = function(obj, iter, bind) {
			if (obj) {
				var desc = describe(obj, 'length');
				(desc && typeof desc.value === 'number' ? forEach : forIn)
					.call(obj, iter, bind = bind || obj);
			}
			return bind;
		};

	function inject(dest, src, enumerable, beans, preserve) {
		var beansNames = {};

		function field(name, val) {
			val = val || (val = describe(src, name))
					&& (val.get ? val : val.value);
			if (typeof val === 'string' && val[0] === '#')
				val = dest[val.substring(1)] || val;
			var isFunc = typeof val === 'function',
				res = val,
				prev = preserve || isFunc && !val.base
						? (val && val.get ? name in dest : dest[name])
						: null,
				bean;
			if (!preserve || !prev) {
				if (isFunc && prev)
					val.base = prev;
				if (isFunc && beans !== false
						&& (bean = name.match(/^([gs]et|is)(([A-Z])(.*))$/)))
					beansNames[bean[3].toLowerCase() + bean[4]] = bean[2];
				if (!res || isFunc || !res.get || typeof res.get !== 'function'
						|| !Base.isPlainObject(res)) {
					res = { value: res, writable: true };
				}
				if ((describe(dest, name)
						|| { configurable: true }).configurable) {
					res.configurable = true;
					res.enumerable = enumerable != null ? enumerable : !bean;
				}
				define(dest, name, res);
			}
		}
		if (src) {
			for (var name in src) {
				if (src.hasOwnProperty(name) && !hidden.test(name))
					field(name);
			}
			for (var name in beansNames) {
				var part = beansNames[name],
					set = dest['set' + part],
					get = dest['get' + part] || set && dest['is' + part];
				if (get && (beans === true || get.length === 0))
					field(name, { get: get, set: set });
			}
		}
		return dest;
	}

	function Base() {
		for (var i = 0, l = arguments.length; i < l; i++) {
			var src = arguments[i];
			if (src)
				set(this, src);
		}
		return this;
	}

	return inject(Base, {
		inject: function(src) {
			if (src) {
				var statics = src.statics === true ? src : src.statics,
					beans = src.beans,
					preserve = src.preserve;
				if (statics !== src)
					inject(this.prototype, src, src.enumerable, beans, preserve);
				inject(this, statics, null, beans, preserve);
			}
			for (var i = 1, l = arguments.length; i < l; i++)
				this.inject(arguments[i]);
			return this;
		},

		extend: function() {
			var base = this,
				ctor,
				proto;
			for (var i = 0, obj, l = arguments.length;
					i < l && !(ctor && proto); i++) {
				obj = arguments[i];
				ctor = ctor || obj.initialize;
				proto = proto || obj.prototype;
			}
			ctor = ctor || function() {
				base.apply(this, arguments);
			};
			proto = ctor.prototype = proto || create(this.prototype);
			define(proto, 'constructor',
					{ value: ctor, writable: true, configurable: true });
			inject(ctor, this);
			if (arguments.length)
				this.inject.apply(ctor, arguments);
			ctor.base = base;
			return ctor;
		}
	}).inject({
		enumerable: false,

		initialize: Base,

		set: Base,

		inject: function() {
			for (var i = 0, l = arguments.length; i < l; i++) {
				var src = arguments[i];
				if (src) {
					inject(this, src, src.enumerable, src.beans, src.preserve);
				}
			}
			return this;
		},

		extend: function() {
			var res = create(this);
			return res.inject.apply(res, arguments);
		},

		each: function(iter, bind) {
			return each(this, iter, bind);
		},

		clone: function() {
			return new this.constructor(this);
		},

		statics: {
			set: set,
			each: each,
			create: create,
			define: define,
			describe: describe,

			clone: function(obj) {
				return set(new obj.constructor(), obj);
			},

			isPlainObject: function(obj) {
				var ctor = obj != null && obj.constructor;
				return ctor && (ctor === Object || ctor === Base
						|| ctor.name === 'Object');
			},

			pick: function(a, b) {
				return a !== undefined ? a : b;
			},

			slice: function(list, begin, end) {
				return slice.call(list, begin, end);
			}
		}
	});
};

if (typeof module !== 'undefined')
	module.exports = Base;

Base.inject({
	enumerable: false,

	toString: function() {
		return this._id != null
			?  (this._class || 'Object') + (this._name
				? " '" + this._name + "'"
				: ' @' + this._id)
			: '{ ' + Base.each(this, function(value, key) {
				if (!/^_/.test(key)) {
					var type = typeof value;
					this.push(key + ': ' + (type === 'number'
							? Formatter.instance.number(value)
							: type === 'string' ? "'" + value + "'" : value));
				}
			}, []).join(', ') + ' }';
	},

	getClassName: function() {
		return this._class || '';
	},

	importJSON: function(json) {
		return Base.importJSON(json, this);
	},

	exportJSON: function(options) {
		return Base.exportJSON(this, options);
	},

	toJSON: function() {
		return Base.serialize(this);
	},

	set: function(props, exclude) {
		if (props)
			Base.filter(this, props, exclude, this._prioritize);
		return this;
	}
}, {

beans: false,
statics: {
	exports: {},

	extend: function extend() {
		var res = extend.base.apply(this, arguments),
			name = res.prototype._class;
		if (name && !Base.exports[name])
			Base.exports[name] = res;
		return res;
	},

	equals: function(obj1, obj2) {
		if (obj1 === obj2)
			return true;
		if (obj1 && obj1.equals)
			return obj1.equals(obj2);
		if (obj2 && obj2.equals)
			return obj2.equals(obj1);
		if (obj1 && obj2
				&& typeof obj1 === 'object' && typeof obj2 === 'object') {
			if (Array.isArray(obj1) && Array.isArray(obj2)) {
				var length = obj1.length;
				if (length !== obj2.length)
					return false;
				while (length--) {
					if (!Base.equals(obj1[length], obj2[length]))
						return false;
				}
			} else {
				var keys = Object.keys(obj1),
					length = keys.length;
				if (length !== Object.keys(obj2).length)
					return false;
				while (length--) {
					var key = keys[length];
					if (!(obj2.hasOwnProperty(key)
							&& Base.equals(obj1[key], obj2[key])))
						return false;
				}
			}
			return true;
		}
		return false;
	},

	read: function(list, start, options, amount) {
		if (this === Base) {
			var value = this.peek(list, start);
			list.__index++;
			return value;
		}
		var proto = this.prototype,
			readIndex = proto._readIndex,
			begin = start || readIndex && list.__index || 0,
			length = list.length,
			obj = list[begin];
		amount = amount || length - begin;
		if (obj instanceof this
			|| options && options.readNull && obj == null && amount <= 1) {
			if (readIndex)
				list.__index = begin + 1;
			return obj && options && options.clone ? obj.clone() : obj;
		}
		obj = Base.create(proto);
		if (readIndex)
			obj.__read = true;
		obj = obj.initialize.apply(obj, begin > 0 || begin + amount < length
				? Base.slice(list, begin, begin + amount)
				: list) || obj;
		if (readIndex) {
			list.__index = begin + obj.__read;
			var filtered = obj.__filtered;
			if (filtered) {
				list.__filtered = filtered;
				obj.__filtered = undefined;
			}
			obj.__read = undefined;
		}
		return obj;
	},

	peek: function(list, start) {
		return list[list.__index = start || list.__index || 0];
	},

	remain: function(list) {
		return list.length - (list.__index || 0);
	},

	readList: function(list, start, options, amount) {
		var res = [],
			entry,
			begin = start || 0,
			end = amount ? begin + amount : list.length;
		for (var i = begin; i < end; i++) {
			res.push(Array.isArray(entry = list[i])
					? this.read(entry, 0, options)
					: this.read(list, i, options, 1));
		}
		return res;
	},

	readNamed: function(list, name, start, options, amount) {
		var value = this.getNamed(list, name),
			hasObject = value !== undefined;
		if (hasObject) {
			var filtered = list.__filtered;
			if (!filtered) {
				filtered = list.__filtered = Base.create(list[0]);
				filtered.__unfiltered = list[0];
			}
			filtered[name] = undefined;
		}
		var l = hasObject ? [value] : list,
			res = this.read(l, start, options, amount);
		return res;
	},

	getNamed: function(list, name) {
		var arg = list[0];
		if (list._hasObject === undefined)
			list._hasObject = list.length === 1 && Base.isPlainObject(arg);
		if (list._hasObject)
			return name ? arg[name] : list.__filtered || arg;
	},

	hasNamed: function(list, name) {
		return !!this.getNamed(list, name);
	},

	filter: function(dest, source, exclude, prioritize) {
		var processed;

		function handleKey(key) {
			if (!(exclude && key in exclude) &&
				!(processed && key in processed)) {
				var value = source[key];
				if (value !== undefined)
					dest[key] = value;
			}
		}

		if (prioritize) {
			var keys = {};
			for (var i = 0, key, l = prioritize.length; i < l; i++) {
				if ((key = prioritize[i]) in source) {
					handleKey(key);
					keys[key] = true;
				}
			}
			processed = keys;
		}

		Object.keys(source.__unfiltered || source).forEach(handleKey);
		return dest;
	},

	isPlainValue: function(obj, asString) {
		return Base.isPlainObject(obj) || Array.isArray(obj)
				|| asString && typeof obj === 'string';
	},

	serialize: function(obj, options, compact, dictionary) {
		options = options || {};

		var isRoot = !dictionary,
			res;
		if (isRoot) {
			options.formatter = new Formatter(options.precision);
			dictionary = {
				length: 0,
				definitions: {},
				references: {},
				add: function(item, create) {
					var id = '#' + item._id,
						ref = this.references[id];
					if (!ref) {
						this.length++;
						var res = create.call(item),
							name = item._class;
						if (name && res[0] !== name)
							res.unshift(name);
						this.definitions[id] = res;
						ref = this.references[id] = [id];
					}
					return ref;
				}
			};
		}
		if (obj && obj._serialize) {
			res = obj._serialize(options, dictionary);
			var name = obj._class;
			if (name && !obj._compactSerialize && (isRoot || !compact)
					&& res[0] !== name) {
				res.unshift(name);
			}
		} else if (Array.isArray(obj)) {
			res = [];
			for (var i = 0, l = obj.length; i < l; i++)
				res[i] = Base.serialize(obj[i], options, compact, dictionary);
		} else if (Base.isPlainObject(obj)) {
			res = {};
			var keys = Object.keys(obj);
			for (var i = 0, l = keys.length; i < l; i++) {
				var key = keys[i];
				res[key] = Base.serialize(obj[key], options, compact,
						dictionary);
			}
		} else if (typeof obj === 'number') {
			res = options.formatter.number(obj, options.precision);
		} else {
			res = obj;
		}
		return isRoot && dictionary.length > 0
				? [['dictionary', dictionary.definitions], res]
				: res;
	},

	deserialize: function(json, create, _data, _setDictionary, _isRoot) {
		var res = json,
			isFirst = !_data,
			hasDictionary = isFirst && json && json.length
				&& json[0][0] === 'dictionary';
		_data = _data || {};
		if (Array.isArray(json)) {
			var type = json[0],
				isDictionary = type === 'dictionary';
			if (json.length == 1 && /^#/.test(type)) {
				return _data.dictionary[type];
			}
			type = Base.exports[type];
			res = [];
			for (var i = type ? 1 : 0, l = json.length; i < l; i++) {
				res.push(Base.deserialize(json[i], create, _data,
						isDictionary, hasDictionary));
			}
			if (type) {
				var args = res;
				if (create) {
					res = create(type, args, isFirst || _isRoot);
				} else {
					res = Base.create(type.prototype);
					type.apply(res, args);
				}
			}
		} else if (Base.isPlainObject(json)) {
			res = {};
			if (_setDictionary)
				_data.dictionary = res;
			for (var key in json)
				res[key] = Base.deserialize(json[key], create, _data);
		}
		return hasDictionary ? res[1] : res;
	},

	exportJSON: function(obj, options) {
		var json = Base.serialize(obj, options);
		return options && options.asString == false
				? json
				: JSON.stringify(json);
	},

	importJSON: function(json, target) {
		return Base.deserialize(
				typeof json === 'string' ? JSON.parse(json) : json,
				function(ctor, args, isRoot) {
					var useTarget = isRoot && target
							&& target.constructor === ctor,
						obj = useTarget ? target
							: Base.create(ctor.prototype);
					if (args.length === 1 && obj instanceof Item
							&& (useTarget || !(obj instanceof Layer))) {
						var arg = args[0];
						if (Base.isPlainObject(arg))
							arg.insert = false;
					}
					(useTarget ? obj.set : ctor).apply(obj, args);
					if (useTarget)
						target = null;
					return obj;
				});
	},

	splice: function(list, items, index, remove) {
		var amount = items && items.length,
			append = index === undefined;
		index = append ? list.length : index;
		if (index > list.length)
			index = list.length;
		for (var i = 0; i < amount; i++)
			items[i]._index = index + i;
		if (append) {
			list.push.apply(list, items);
			return [];
		} else {
			var args = [index, remove];
			if (items)
				args.push.apply(args, items);
			var removed = list.splice.apply(list, args);
			for (var i = 0, l = removed.length; i < l; i++)
				removed[i]._index = undefined;
			for (var i = index + amount, l = list.length; i < l; i++)
				list[i]._index = i;
			return removed;
		}
	},

	capitalize: function(str) {
		return str.replace(/\b[a-z]/g, function(match) {
			return match.toUpperCase();
		});
	},

	camelize: function(str) {
		return str.replace(/-(.)/g, function(match, chr) {
			return chr.toUpperCase();
		});
	},

	hyphenate: function(str) {
		return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}
}});

var Emitter = {
	on: function(type, func) {
		if (typeof type !== 'string') {
			Base.each(type, function(value, key) {
				this.on(key, value);
			}, this);
		} else {
			var types = this._eventTypes,
				entry = types && types[type],
				handlers = this._callbacks = this._callbacks || {};
			handlers = handlers[type] = handlers[type] || [];
			if (handlers.indexOf(func) === -1) {
				handlers.push(func);
				if (entry && entry.install && handlers.length === 1)
					entry.install.call(this, type);
			}
		}
		return this;
	},

	off: function(type, func) {
		if (typeof type !== 'string') {
			Base.each(type, function(value, key) {
				this.off(key, value);
			}, this);
			return;
		}
		var types = this._eventTypes,
			entry = types && types[type],
			handlers = this._callbacks && this._callbacks[type],
			index;
		if (handlers) {
			if (!func || (index = handlers.indexOf(func)) !== -1
					&& handlers.length === 1) {
				if (entry && entry.uninstall)
					entry.uninstall.call(this, type);
				delete this._callbacks[type];
			} else if (index !== -1) {
				handlers.splice(index, 1);
			}
		}
		return this;
	},

	once: function(type, func) {
		return this.on(type, function() {
			func.apply(this, arguments);
			this.off(type, func);
		});
	},

	emit: function(type, event) {
		var handlers = this._callbacks && this._callbacks[type];
		if (!handlers)
			return false;
		var args = Base.slice(arguments, 1),
			setTarget = event && event.target && !event.currentTarget;
		handlers = handlers.slice();
		if (setTarget)
			event.currentTarget = this;
		for (var i = 0, l = handlers.length; i < l; i++) {
			if (handlers[i].apply(this, args) == false) {
				if (event && event.stop)
					event.stop();
				break;
		   }
		}
		if (setTarget)
			delete event.currentTarget;
		return true;
	},

	responds: function(type) {
		return !!(this._callbacks && this._callbacks[type]);
	},

	attach: '#on',
	detach: '#off',
	fire: '#emit',

	_installEvents: function(install) {
		var types = this._eventTypes,
			handlers = this._callbacks,
			key = install ? 'install' : 'uninstall';
		if (types) {
			for (var type in handlers) {
				if (handlers[type].length > 0) {
					var entry = types[type],
						func = entry && entry[key];
					if (func)
						func.call(this, type);
				}
			}
		}
	},

	statics: {
		inject: function inject(src) {
			var events = src._events;
			if (events) {
				var types = {};
				Base.each(events, function(entry, key) {
					var isString = typeof entry === 'string',
						name = isString ? entry : key,
						part = Base.capitalize(name),
						type = name.substring(2).toLowerCase();
					types[type] = isString ? {} : entry;
					name = '_' + name;
					src['get' + part] = function() {
						return this[name];
					};
					src['set' + part] = function(func) {
						var prev = this[name];
						if (prev)
							this.off(type, prev);
						if (func)
							this.on(type, func);
						this[name] = func;
					};
				});
				src._eventTypes = types;
			}
			return inject.base.apply(this, arguments);
		}
	}
};

var PaperScope = Base.extend({
	_class: 'PaperScope',

	initialize: function PaperScope() {
		paper = this;
		this.settings = new Base({
			applyMatrix: true,
			insertItems: true,
			handleSize: 4,
			hitTolerance: 0
		});
		this.project = null;
		this.projects = [];
		this.tools = [];
		this._id = PaperScope._id++;
		PaperScope._scopes[this._id] = this;
		var proto = PaperScope.prototype;
		if (!this.support) {
			var ctx = CanvasProvider.getContext(1, 1) || {};
			proto.support = {
				nativeDash: 'setLineDash' in ctx || 'mozDash' in ctx,
				nativeBlendModes: BlendMode.nativeModes
			};
			CanvasProvider.release(ctx);
		}
		if (!this.agent) {
			var user = self.navigator.userAgent.toLowerCase(),
				os = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(user)||[])[0],
				platform = os === 'darwin' ? 'mac' : os,
				agent = proto.agent = proto.browser = { platform: platform };
			if (platform)
				agent[platform] = true;
			user.replace(
				/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
				function(match, n, v1, v2, rv) {
					if (!agent.chrome) {
						var v = n === 'opera' ? v2 :
								/^(node|trident)$/.test(n) ? rv : v1;
						agent.version = v;
						agent.versionNumber = parseFloat(v);
						n = n === 'trident' ? 'msie' : n;
						agent.name = n;
						agent[n] = true;
					}
				}
			);
			if (agent.chrome)
				delete agent.webkit;
			if (agent.atom)
				delete agent.chrome;
		}
	},

	version: "0.11.5",

	getView: function() {
		var project = this.project;
		return project && project._view;
	},

	getPaper: function() {
		return this;
	},

	execute: function(code, options) {
		paper.PaperScript.execute(code, this, options);
		View.updateFocus();
	},

	install: function(scope) {
		var that = this;
		Base.each(['project', 'view', 'tool'], function(key) {
			Base.define(scope, key, {
				configurable: true,
				get: function() {
					return that[key];
				}
			});
		});
		for (var key in this)
			if (!/^_/.test(key) && this[key])
				scope[key] = this[key];
	},

	setup: function(element) {
		paper = this;
		this.project = new Project(element);
		return this;
	},

	createCanvas: function(width, height) {
		return CanvasProvider.getCanvas(width, height);
	},

	activate: function() {
		paper = this;
	},

	clear: function() {
		var projects = this.projects,
			tools = this.tools;
		for (var i = projects.length - 1; i >= 0; i--)
			projects[i].remove();
		for (var i = tools.length - 1; i >= 0; i--)
			tools[i].remove();
	},

	remove: function() {
		this.clear();
		delete PaperScope._scopes[this._id];
	},

	statics: new function() {
		function handleAttribute(name) {
			name += 'Attribute';
			return function(el, attr) {
				return el[name](attr) || el[name]('data-paper-' + attr);
			};
		}

		return {
			_scopes: {},
			_id: 0,

			get: function(id) {
				return this._scopes[id] || null;
			},

			getAttribute: handleAttribute('get'),
			hasAttribute: handleAttribute('has')
		};
	}
});

var PaperScopeItem = Base.extend(Emitter, {

	initialize: function(activate) {
		this._scope = paper;
		this._index = this._scope[this._list].push(this) - 1;
		if (activate || !this._scope[this._reference])
			this.activate();
	},

	activate: function() {
		if (!this._scope)
			return false;
		var prev = this._scope[this._reference];
		if (prev && prev !== this)
			prev.emit('deactivate');
		this._scope[this._reference] = this;
		this.emit('activate', prev);
		return true;
	},

	isActive: function() {
		return this._scope[this._reference] === this;
	},

	remove: function() {
		if (this._index == null)
			return false;
		Base.splice(this._scope[this._list], null, this._index, 1);
		if (this._scope[this._reference] == this)
			this._scope[this._reference] = null;
		this._scope = null;
		return true;
	},

	getView: function() {
		return this._scope.getView();
	}
});

var Formatter = Base.extend({
	initialize: function(precision) {
		this.precision = Base.pick(precision, 5);
		this.multiplier = Math.pow(10, this.precision);
	},

	number: function(val) {
		return this.precision < 16
				? Math.round(val * this.multiplier) / this.multiplier : val;
	},

	pair: function(val1, val2, separator) {
		return this.number(val1) + (separator || ',') + this.number(val2);
	},

	point: function(val, separator) {
		return this.number(val.x) + (separator || ',') + this.number(val.y);
	},

	size: function(val, separator) {
		return this.number(val.width) + (separator || ',')
				+ this.number(val.height);
	},

	rectangle: function(val, separator) {
		return this.point(val, separator) + (separator || ',')
				+ this.size(val, separator);
	}
});

Formatter.instance = new Formatter();

var Numerical = new function() {

	var abscissas = [
		[  0.5773502691896257645091488],
		[0,0.7745966692414833770358531],
		[  0.3399810435848562648026658,0.8611363115940525752239465],
		[0,0.5384693101056830910363144,0.9061798459386639927976269],
		[  0.2386191860831969086305017,0.6612093864662645136613996,0.9324695142031520278123016],
		[0,0.4058451513773971669066064,0.7415311855993944398638648,0.9491079123427585245261897],
		[  0.1834346424956498049394761,0.5255324099163289858177390,0.7966664774136267395915539,0.9602898564975362316835609],
		[0,0.3242534234038089290385380,0.6133714327005903973087020,0.8360311073266357942994298,0.9681602395076260898355762],
		[  0.1488743389816312108848260,0.4333953941292471907992659,0.6794095682990244062343274,0.8650633666889845107320967,0.9739065285171717200779640],
		[0,0.2695431559523449723315320,0.5190961292068118159257257,0.7301520055740493240934163,0.8870625997680952990751578,0.9782286581460569928039380],
		[  0.1252334085114689154724414,0.3678314989981801937526915,0.5873179542866174472967024,0.7699026741943046870368938,0.9041172563704748566784659,0.9815606342467192506905491],
		[0,0.2304583159551347940655281,0.4484927510364468528779129,0.6423493394403402206439846,0.8015780907333099127942065,0.9175983992229779652065478,0.9841830547185881494728294],
		[  0.1080549487073436620662447,0.3191123689278897604356718,0.5152486363581540919652907,0.6872929048116854701480198,0.8272013150697649931897947,0.9284348836635735173363911,0.9862838086968123388415973],
		[0,0.2011940939974345223006283,0.3941513470775633698972074,0.5709721726085388475372267,0.7244177313601700474161861,0.8482065834104272162006483,0.9372733924007059043077589,0.9879925180204854284895657],
		[  0.0950125098376374401853193,0.2816035507792589132304605,0.4580167776572273863424194,0.6178762444026437484466718,0.7554044083550030338951012,0.8656312023878317438804679,0.9445750230732325760779884,0.9894009349916499325961542]
	];

	var weights = [
		[1],
		[0.8888888888888888888888889,0.5555555555555555555555556],
		[0.6521451548625461426269361,0.3478548451374538573730639],
		[0.5688888888888888888888889,0.4786286704993664680412915,0.2369268850561890875142640],
		[0.4679139345726910473898703,0.3607615730481386075698335,0.1713244923791703450402961],
		[0.4179591836734693877551020,0.3818300505051189449503698,0.2797053914892766679014678,0.1294849661688696932706114],
		[0.3626837833783619829651504,0.3137066458778872873379622,0.2223810344533744705443560,0.1012285362903762591525314],
		[0.3302393550012597631645251,0.3123470770400028400686304,0.2606106964029354623187429,0.1806481606948574040584720,0.0812743883615744119718922],
		[0.2955242247147528701738930,0.2692667193099963550912269,0.2190863625159820439955349,0.1494513491505805931457763,0.0666713443086881375935688],
		[0.2729250867779006307144835,0.2628045445102466621806889,0.2331937645919904799185237,0.1862902109277342514260976,0.1255803694649046246346943,0.0556685671161736664827537],
		[0.2491470458134027850005624,0.2334925365383548087608499,0.2031674267230659217490645,0.1600783285433462263346525,0.1069393259953184309602547,0.0471753363865118271946160],
		[0.2325515532308739101945895,0.2262831802628972384120902,0.2078160475368885023125232,0.1781459807619457382800467,0.1388735102197872384636018,0.0921214998377284479144218,0.0404840047653158795200216],
		[0.2152638534631577901958764,0.2051984637212956039659241,0.1855383974779378137417166,0.1572031671581935345696019,0.1215185706879031846894148,0.0801580871597602098056333,0.0351194603317518630318329],
		[0.2025782419255612728806202,0.1984314853271115764561183,0.1861610000155622110268006,0.1662692058169939335532009,0.1395706779261543144478048,0.1071592204671719350118695,0.0703660474881081247092674,0.0307532419961172683546284],
		[0.1894506104550684962853967,0.1826034150449235888667637,0.1691565193950025381893121,0.1495959888165767320815017,0.1246289712555338720524763,0.0951585116824927848099251,0.0622535239386478928628438,0.0271524594117540948517806]
	];

	var abs = Math.abs,
		sqrt = Math.sqrt,
		pow = Math.pow,
		log2 = Math.log2 || function(x) {
			return Math.log(x) * Math.LOG2E;
		},
		EPSILON = 1e-12,
		MACHINE_EPSILON = 1.12e-16;

	function clamp(value, min, max) {
		return value < min ? min : value > max ? max : value;
	}

	function getDiscriminant(a, b, c) {
		function split(v) {
			var x = v * 134217729,
				y = v - x,
				hi = y + x,
				lo = v - hi;
			return [hi, lo];
		}

		var D = b * b - a * c,
			E = b * b + a * c;
		if (abs(D) * 3 < E) {
			var ad = split(a),
				bd = split(b),
				cd = split(c),
				p = b * b,
				dp = (bd[0] * bd[0] - p + 2 * bd[0] * bd[1]) + bd[1] * bd[1],
				q = a * c,
				dq = (ad[0] * cd[0] - q + ad[0] * cd[1] + ad[1] * cd[0])
						+ ad[1] * cd[1];
			D = (p - q) + (dp - dq);
		}
		return D;
	}

	function getNormalizationFactor() {
		var norm = Math.max.apply(Math, arguments);
		return norm && (norm < 1e-8 || norm > 1e8)
				? pow(2, -Math.round(log2(norm)))
				: 0;
	}

	return {
		EPSILON: EPSILON,
		MACHINE_EPSILON: MACHINE_EPSILON,
		CURVETIME_EPSILON: 1e-8,
		GEOMETRIC_EPSILON: 1e-7,
		TRIGONOMETRIC_EPSILON: 1e-8,
		KAPPA: 4 * (sqrt(2) - 1) / 3,

		isZero: function(val) {
			return val >= -EPSILON && val <= EPSILON;
		},

		clamp: clamp,

		integrate: function(f, a, b, n) {
			var x = abscissas[n - 2],
				w = weights[n - 2],
				A = (b - a) * 0.5,
				B = A + a,
				i = 0,
				m = (n + 1) >> 1,
				sum = n & 1 ? w[i++] * f(B) : 0;
			while (i < m) {
				var Ax = A * x[i];
				sum += w[i++] * (f(B + Ax) + f(B - Ax));
			}
			return A * sum;
		},

		findRoot: function(f, df, x, a, b, n, tolerance) {
			for (var i = 0; i < n; i++) {
				var fx = f(x),
					dx = fx / df(x),
					nx = x - dx;
				if (abs(dx) < tolerance) {
					x = nx;
					break;
				}
				if (fx > 0) {
					b = x;
					x = nx <= a ? (a + b) * 0.5 : nx;
				} else {
					a = x;
					x = nx >= b ? (a + b) * 0.5 : nx;
				}
			}
			return clamp(x, a, b);
		},

		solveQuadratic: function(a, b, c, roots, min, max) {
			var x1, x2 = Infinity;
			if (abs(a) < EPSILON) {
				if (abs(b) < EPSILON)
					return abs(c) < EPSILON ? -1 : 0;
				x1 = -c / b;
			} else {
				b *= -0.5;
				var D = getDiscriminant(a, b, c);
				if (D && abs(D) < MACHINE_EPSILON) {
					var f = getNormalizationFactor(abs(a), abs(b), abs(c));
					if (f) {
						a *= f;
						b *= f;
						c *= f;
						D = getDiscriminant(a, b, c);
					}
				}
				if (D >= -MACHINE_EPSILON) {
					var Q = D < 0 ? 0 : sqrt(D),
						R = b + (b < 0 ? -Q : Q);
					if (R === 0) {
						x1 = c / a;
						x2 = -x1;
					} else {
						x1 = R / a;
						x2 = c / R;
					}
				}
			}
			var count = 0,
				boundless = min == null,
				minB = min - EPSILON,
				maxB = max + EPSILON;
			if (isFinite(x1) && (boundless || x1 > minB && x1 < maxB))
				roots[count++] = boundless ? x1 : clamp(x1, min, max);
			if (x2 !== x1
					&& isFinite(x2) && (boundless || x2 > minB && x2 < maxB))
				roots[count++] = boundless ? x2 : clamp(x2, min, max);
			return count;
		},

		solveCubic: function(a, b, c, d, roots, min, max) {
			var f = getNormalizationFactor(abs(a), abs(b), abs(c), abs(d)),
				x, b1, c2, qd, q;
			if (f) {
				a *= f;
				b *= f;
				c *= f;
				d *= f;
			}

			function evaluate(x0) {
				x = x0;
				var tmp = a * x;
				b1 = tmp + b;
				c2 = b1 * x + c;
				qd = (tmp + b1) * x + c2;
				q = c2 * x + d;
			}

			if (abs(a) < EPSILON) {
				a = b;
				b1 = c;
				c2 = d;
				x = Infinity;
			} else if (abs(d) < EPSILON) {
				b1 = b;
				c2 = c;
				x = 0;
			} else {
				evaluate(-(b / a) / 3);
				var t = q / a,
					r = pow(abs(t), 1/3),
					s = t < 0 ? -1 : 1,
					td = -qd / a,
					rd = td > 0 ? 1.324717957244746 * Math.max(r, sqrt(td)) : r,
					x0 = x - s * rd;
				if (x0 !== x) {
					do {
						evaluate(x0);
						x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
					} while (s * x0 > s * x);
					if (abs(a) * x * x > abs(d / x)) {
						c2 = -d / x;
						b1 = (c2 - c) / x;
					}
				}
			}
			var count = Numerical.solveQuadratic(a, b1, c2, roots, min, max),
				boundless = min == null;
			if (isFinite(x) && (count === 0
					|| count > 0 && x !== roots[0] && x !== roots[1])
					&& (boundless || x > min - EPSILON && x < max + EPSILON))
				roots[count++] = boundless ? x : clamp(x, min, max);
			return count;
		}
	};
};

var UID = {
	_id: 1,
	_pools: {},

	get: function(name) {
		if (name) {
			var pool = this._pools[name];
			if (!pool)
				pool = this._pools[name] = { _id: 1 };
			return pool._id++;
		} else {
			return this._id++;
		}
	}
};

var Point = Base.extend({
	_class: 'Point',
	_readIndex: true,

	initialize: function Point(arg0, arg1) {
		var type = typeof arg0,
			reading = this.__read,
			read = 0;
		if (type === 'number') {
			var hasY = typeof arg1 === 'number';
			this._set(arg0, hasY ? arg1 : arg0);
			if (reading)
				read = hasY ? 2 : 1;
		} else if (type === 'undefined' || arg0 === null) {
			this._set(0, 0);
			if (reading)
				read = arg0 === null ? 1 : 0;
		} else {
			var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
			read = 1;
			if (Array.isArray(obj)) {
				this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
			} else if ('x' in obj) {
				this._set(obj.x || 0, obj.y || 0);
			} else if ('width' in obj) {
				this._set(obj.width || 0, obj.height || 0);
			} else if ('angle' in obj) {
				this._set(obj.length || 0, 0);
				this.setAngle(obj.angle || 0);
			} else {
				this._set(0, 0);
				read = 0;
			}
		}
		if (reading)
			this.__read = read;
		return this;
	},

	set: '#initialize',

	_set: function(x, y) {
		this.x = x;
		this.y = y;
		return this;
	},

	equals: function(point) {
		return this === point || point
				&& (this.x === point.x && this.y === point.y
					|| Array.isArray(point)
						&& this.x === point[0] && this.y === point[1])
				|| false;
	},

	clone: function() {
		return new Point(this.x, this.y);
	},

	toString: function() {
		var f = Formatter.instance;
		return '{ x: ' + f.number(this.x) + ', y: ' + f.number(this.y) + ' }';
	},

	_serialize: function(options) {
		var f = options.formatter;
		return [f.number(this.x), f.number(this.y)];
	},

	getLength: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	setLength: function(length) {
		if (this.isZero()) {
			var angle = this._angle || 0;
			this._set(
				Math.cos(angle) * length,
				Math.sin(angle) * length
			);
		} else {
			var scale = length / this.getLength();
			if (Numerical.isZero(scale))
				this.getAngle();
			this._set(
				this.x * scale,
				this.y * scale
			);
		}
	},
	getAngle: function() {
		return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI;
	},

	setAngle: function(angle) {
		this.setAngleInRadians.call(this, angle * Math.PI / 180);
	},

	getAngleInDegrees: '#getAngle',
	setAngleInDegrees: '#setAngle',

	getAngleInRadians: function() {
		if (!arguments.length) {
			return this.isZero()
					? this._angle || 0
					: this._angle = Math.atan2(this.y, this.x);
		} else {
			var point = Point.read(arguments),
				div = this.getLength() * point.getLength();
			if (Numerical.isZero(div)) {
				return NaN;
			} else {
				var a = this.dot(point) / div;
				return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
			}
		}
	},

	setAngleInRadians: function(angle) {
		this._angle = angle;
		if (!this.isZero()) {
			var length = this.getLength();
			this._set(
				Math.cos(angle) * length,
				Math.sin(angle) * length
			);
		}
	},

	getQuadrant: function() {
		return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
	}
}, {
	beans: false,

	getDirectedAngle: function() {
		var point = Point.read(arguments);
		return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
	},

	getDistance: function() {
		var point = Point.read(arguments),
			x = point.x - this.x,
			y = point.y - this.y,
			d = x * x + y * y,
			squared = Base.read(arguments);
		return squared ? d : Math.sqrt(d);
	},

	normalize: function(length) {
		if (length === undefined)
			length = 1;
		var current = this.getLength(),
			scale = current !== 0 ? length / current : 0,
			point = new Point(this.x * scale, this.y * scale);
		if (scale >= 0)
			point._angle = this._angle;
		return point;
	},

	rotate: function(angle, center) {
		if (angle === 0)
			return this.clone();
		angle = angle * Math.PI / 180;
		var point = center ? this.subtract(center) : this,
			sin = Math.sin(angle),
			cos = Math.cos(angle);
		point = new Point(
			point.x * cos - point.y * sin,
			point.x * sin + point.y * cos
		);
		return center ? point.add(center) : point;
	},

	transform: function(matrix) {
		return matrix ? matrix._transformPoint(this) : this;
	},

	add: function() {
		var point = Point.read(arguments);
		return new Point(this.x + point.x, this.y + point.y);
	},

	subtract: function() {
		var point = Point.read(arguments);
		return new Point(this.x - point.x, this.y - point.y);
	},

	multiply: function() {
		var point = Point.read(arguments);
		return new Point(this.x * point.x, this.y * point.y);
	},

	divide: function() {
		var point = Point.read(arguments);
		return new Point(this.x / point.x, this.y / point.y);
	},

	modulo: function() {
		var point = Point.read(arguments);
		return new Point(this.x % point.x, this.y % point.y);
	},

	negate: function() {
		return new Point(-this.x, -this.y);
	},

	isInside: function() {
		return Rectangle.read(arguments).contains(this);
	},

	isClose: function() {
		var point = Point.read(arguments),
			tolerance = Base.read(arguments);
		return this.getDistance(point) <= tolerance;
	},

	isCollinear: function() {
		var point = Point.read(arguments);
		return Point.isCollinear(this.x, this.y, point.x, point.y);
	},

	isColinear: '#isCollinear',

	isOrthogonal: function() {
		var point = Point.read(arguments);
		return Point.isOrthogonal(this.x, this.y, point.x, point.y);
	},

	isZero: function() {
		var isZero = Numerical.isZero;
		return isZero(this.x) && isZero(this.y);
	},

	isNaN: function() {
		return isNaN(this.x) || isNaN(this.y);
	},

	isInQuadrant: function(q) {
		return this.x * (q > 1 && q < 4 ? -1 : 1) >= 0
			&& this.y * (q > 2 ? -1 : 1) >= 0;
	},

	dot: function() {
		var point = Point.read(arguments);
		return this.x * point.x + this.y * point.y;
	},

	cross: function() {
		var point = Point.read(arguments);
		return this.x * point.y - this.y * point.x;
	},

	project: function() {
		var point = Point.read(arguments),
			scale = point.isZero() ? 0 : this.dot(point) / point.dot(point);
		return new Point(
			point.x * scale,
			point.y * scale
		);
	},

	statics: {
		min: function() {
			var point1 = Point.read(arguments),
				point2 = Point.read(arguments);
			return new Point(
				Math.min(point1.x, point2.x),
				Math.min(point1.y, point2.y)
			);
		},

		max: function() {
			var point1 = Point.read(arguments),
				point2 = Point.read(arguments);
			return new Point(
				Math.max(point1.x, point2.x),
				Math.max(point1.y, point2.y)
			);
		},

		random: function() {
			return new Point(Math.random(), Math.random());
		},

		isCollinear: function(x1, y1, x2, y2) {
			return Math.abs(x1 * y2 - y1 * x2)
					<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
						* 1e-8;
		},

		isOrthogonal: function(x1, y1, x2, y2) {
			return Math.abs(x1 * x2 + y1 * y2)
					<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
						* 1e-8;
		}
	}
}, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
	var op = Math[key];
	this[key] = function() {
		return new Point(op(this.x), op(this.y));
	};
}, {}));

var LinkedPoint = Point.extend({
	initialize: function Point(x, y, owner, setter) {
		this._x = x;
		this._y = y;
		this._owner = owner;
		this._setter = setter;
	},

	_set: function(x, y, _dontNotify) {
		this._x = x;
		this._y = y;
		if (!_dontNotify)
			this._owner[this._setter](this);
		return this;
	},

	getX: function() {
		return this._x;
	},

	setX: function(x) {
		this._x = x;
		this._owner[this._setter](this);
	},

	getY: function() {
		return this._y;
	},

	setY: function(y) {
		this._y = y;
		this._owner[this._setter](this);
	},

	isSelected: function() {
		return !!(this._owner._selection & this._getSelection());
	},

	setSelected: function(selected) {
		this._owner._changeSelection(this._getSelection(), selected);
	},

	_getSelection: function() {
		return this._setter === 'setPosition' ? 4 : 0;
	}
});

var Size = Base.extend({
	_class: 'Size',
	_readIndex: true,

	initialize: function Size(arg0, arg1) {
		var type = typeof arg0,
			reading = this.__read,
			read = 0;
		if (type === 'number') {
			var hasHeight = typeof arg1 === 'number';
			this._set(arg0, hasHeight ? arg1 : arg0);
			if (reading)
				read = hasHeight ? 2 : 1;
		} else if (type === 'undefined' || arg0 === null) {
			this._set(0, 0);
			if (reading)
				read = arg0 === null ? 1 : 0;
		} else {
			var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
			read = 1;
			if (Array.isArray(obj)) {
				this._set(+obj[0], +(obj.length > 1 ? obj[1] : obj[0]));
			} else if ('width' in obj) {
				this._set(obj.width || 0, obj.height || 0);
			} else if ('x' in obj) {
				this._set(obj.x || 0, obj.y || 0);
			} else {
				this._set(0, 0);
				read = 0;
			}
		}
		if (reading)
			this.__read = read;
		return this;
	},

	set: '#initialize',

	_set: function(width, height) {
		this.width = width;
		this.height = height;
		return this;
	},

	equals: function(size) {
		return size === this || size && (this.width === size.width
				&& this.height === size.height
				|| Array.isArray(size) && this.width === size[0]
					&& this.height === size[1]) || false;
	},

	clone: function() {
		return new Size(this.width, this.height);
	},

	toString: function() {
		var f = Formatter.instance;
		return '{ width: ' + f.number(this.width)
				+ ', height: ' + f.number(this.height) + ' }';
	},

	_serialize: function(options) {
		var f = options.formatter;
		return [f.number(this.width),
				f.number(this.height)];
	},

	add: function() {
		var size = Size.read(arguments);
		return new Size(this.width + size.width, this.height + size.height);
	},

	subtract: function() {
		var size = Size.read(arguments);
		return new Size(this.width - size.width, this.height - size.height);
	},

	multiply: function() {
		var size = Size.read(arguments);
		return new Size(this.width * size.width, this.height * size.height);
	},

	divide: function() {
		var size = Size.read(arguments);
		return new Size(this.width / size.width, this.height / size.height);
	},

	modulo: function() {
		var size = Size.read(arguments);
		return new Size(this.width % size.width, this.height % size.height);
	},

	negate: function() {
		return new Size(-this.width, -this.height);
	},

	isZero: function() {
		var isZero = Numerical.isZero;
		return isZero(this.width) && isZero(this.height);
	},

	isNaN: function() {
		return isNaN(this.width) || isNaN(this.height);
	},

	statics: {
		min: function(size1, size2) {
			return new Size(
				Math.min(size1.width, size2.width),
				Math.min(size1.height, size2.height));
		},

		max: function(size1, size2) {
			return new Size(
				Math.max(size1.width, size2.width),
				Math.max(size1.height, size2.height));
		},

		random: function() {
			return new Size(Math.random(), Math.random());
		}
	}
}, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
	var op = Math[key];
	this[key] = function() {
		return new Size(op(this.width), op(this.height));
	};
}, {}));

var LinkedSize = Size.extend({
	initialize: function Size(width, height, owner, setter) {
		this._width = width;
		this._height = height;
		this._owner = owner;
		this._setter = setter;
	},

	_set: function(width, height, _dontNotify) {
		this._width = width;
		this._height = height;
		if (!_dontNotify)
			this._owner[this._setter](this);
		return this;
	},

	getWidth: function() {
		return this._width;
	},

	setWidth: function(width) {
		this._width = width;
		this._owner[this._setter](this);
	},

	getHeight: function() {
		return this._height;
	},

	setHeight: function(height) {
		this._height = height;
		this._owner[this._setter](this);
	}
});

var Rectangle = Base.extend({
	_class: 'Rectangle',
	_readIndex: true,
	beans: true,

	initialize: function Rectangle(arg0, arg1, arg2, arg3) {
		var type = typeof arg0,
			read;
		if (type === 'number') {
			this._set(arg0, arg1, arg2, arg3);
			read = 4;
		} else if (type === 'undefined' || arg0 === null) {
			this._set(0, 0, 0, 0);
			read = arg0 === null ? 1 : 0;
		} else if (arguments.length === 1) {
			if (Array.isArray(arg0)) {
				this._set.apply(this, arg0);
				read = 1;
			} else if (arg0.x !== undefined || arg0.width !== undefined) {
				this._set(arg0.x || 0, arg0.y || 0,
						arg0.width || 0, arg0.height || 0);
				read = 1;
			} else if (arg0.from === undefined && arg0.to === undefined) {
				this._set(0, 0, 0, 0);
				Base.filter(this, arg0);
				read = 1;
			}
		}
		if (read === undefined) {
			var frm = Point.readNamed(arguments, 'from'),
				next = Base.peek(arguments),
				x = frm.x,
				y = frm.y,
				width,
				height;
			if (next && next.x !== undefined
					|| Base.hasNamed(arguments, 'to')) {
				var to = Point.readNamed(arguments, 'to');
				width = to.x - x;
				height = to.y - y;
				if (width < 0) {
					x = to.x;
					width = -width;
				}
				if (height < 0) {
					y = to.y;
					height = -height;
				}
			} else {
				var size = Size.read(arguments);
				width = size.width;
				height = size.height;
			}
			this._set(x, y, width, height);
			read = arguments.__index;
			var filtered = arguments.__filtered;
			if (filtered)
				this.__filtered = filtered;
		}
		if (this.__read)
			this.__read = read;
		return this;
	},

	set: '#initialize',

	_set: function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		return this;
	},

	clone: function() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	},

	equals: function(rect) {
		var rt = Base.isPlainValue(rect)
				? Rectangle.read(arguments)
				: rect;
		return rt === this
				|| rt && this.x === rt.x && this.y === rt.y
					&& this.width === rt.width && this.height === rt.height
				|| false;
	},

	toString: function() {
		var f = Formatter.instance;
		return '{ x: ' + f.number(this.x)
				+ ', y: ' + f.number(this.y)
				+ ', width: ' + f.number(this.width)
				+ ', height: ' + f.number(this.height)
				+ ' }';
	},

	_serialize: function(options) {
		var f = options.formatter;
		return [f.number(this.x),
				f.number(this.y),
				f.number(this.width),
				f.number(this.height)];
	},

	getPoint: function(_dontLink) {
		var ctor = _dontLink ? Point : LinkedPoint;
		return new ctor(this.x, this.y, this, 'setPoint');
	},

	setPoint: function() {
		var point = Point.read(arguments);
		this.x = point.x;
		this.y = point.y;
	},

	getSize: function(_dontLink) {
		var ctor = _dontLink ? Size : LinkedSize;
		return new ctor(this.width, this.height, this, 'setSize');
	},

	_fw: 1,
	_fh: 1,

	setSize: function() {
		var size = Size.read(arguments),
			sx = this._sx,
			sy = this._sy,
			w = size.width,
			h = size.height;
		if (sx) {
			this.x += (this.width - w) * sx;
		}
		if (sy) {
			this.y += (this.height - h) * sy;
		}
		this.width = w;
		this.height = h;
		this._fw = this._fh = 1;
	},

	getLeft: function() {
		return this.x;
	},

	setLeft: function(left) {
		if (!this._fw) {
			var amount = left - this.x;
			this.width -= this._sx === 0.5 ? amount * 2 : amount;
		}
		this.x = left;
		this._sx = this._fw = 0;
	},

	getTop: function() {
		return this.y;
	},

	setTop: function(top) {
		if (!this._fh) {
			var amount = top - this.y;
			this.height -= this._sy === 0.5 ? amount * 2 : amount;
		}
		this.y = top;
		this._sy = this._fh = 0;
	},

	getRight: function() {
		return this.x + this.width;
	},

	setRight: function(right) {
		if (!this._fw) {
			var amount = right - this.x;
			this.width = this._sx === 0.5 ? amount * 2 : amount;
		}
		this.x = right - this.width;
		this._sx = 1;
		this._fw = 0;
	},

	getBottom: function() {
		return this.y + this.height;
	},

	setBottom: function(bottom) {
		if (!this._fh) {
			var amount = bottom - this.y;
			this.height = this._sy === 0.5 ? amount * 2 : amount;
		}
		this.y = bottom - this.height;
		this._sy = 1;
		this._fh = 0;
	},

	getCenterX: function() {
		return this.x + this.width / 2;
	},

	setCenterX: function(x) {
		if (this._fw || this._sx === 0.5) {
			this.x = x - this.width / 2;
		} else {
			if (this._sx) {
				this.x += (x - this.x) * 2 * this._sx;
			}
			this.width = (x - this.x) * 2;
		}
		this._sx = 0.5;
		this._fw = 0;
	},

	getCenterY: function() {
		return this.y + this.height / 2;
	},

	setCenterY: function(y) {
		if (this._fh || this._sy === 0.5) {
			this.y = y - this.height / 2;
		} else {
			if (this._sy) {
				this.y += (y - this.y) * 2 * this._sy;
			}
			this.height = (y - this.y) * 2;
		}
		this._sy = 0.5;
		this._fh = 0;
	},

	getCenter: function(_dontLink) {
		var ctor = _dontLink ? Point : LinkedPoint;
		return new ctor(this.getCenterX(), this.getCenterY(), this, 'setCenter');
	},

	setCenter: function() {
		var point = Point.read(arguments);
		this.setCenterX(point.x);
		this.setCenterY(point.y);
		return this;
	},

	getArea: function() {
		return this.width * this.height;
	},

	isEmpty: function() {
		return this.width === 0 || this.height === 0;
	},

	contains: function(arg) {
		return arg && arg.width !== undefined
				|| (Array.isArray(arg) ? arg : arguments).length === 4
				? this._containsRectangle(Rectangle.read(arguments))
				: this._containsPoint(Point.read(arguments));
	},

	_containsPoint: function(point) {
		var x = point.x,
			y = point.y;
		return x >= this.x && y >= this.y
				&& x <= this.x + this.width
				&& y <= this.y + this.height;
	},

	_containsRectangle: function(rect) {
		var x = rect.x,
			y = rect.y;
		return x >= this.x && y >= this.y
				&& x + rect.width <= this.x + this.width
				&& y + rect.height <= this.y + this.height;
	},

	intersects: function() {
		var rect = Rectangle.read(arguments),
			epsilon = Base.read(arguments) || 0;
		return rect.x + rect.width > this.x - epsilon
				&& rect.y + rect.height > this.y - epsilon
				&& rect.x < this.x + this.width + epsilon
				&& rect.y < this.y + this.height + epsilon;
	},

	intersect: function() {
		var rect = Rectangle.read(arguments),
			x1 = Math.max(this.x, rect.x),
			y1 = Math.max(this.y, rect.y),
			x2 = Math.min(this.x + this.width, rect.x + rect.width),
			y2 = Math.min(this.y + this.height, rect.y + rect.height);
		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
	},

	unite: function() {
		var rect = Rectangle.read(arguments),
			x1 = Math.min(this.x, rect.x),
			y1 = Math.min(this.y, rect.y),
			x2 = Math.max(this.x + this.width, rect.x + rect.width),
			y2 = Math.max(this.y + this.height, rect.y + rect.height);
		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
	},

	include: function() {
		var point = Point.read(arguments);
		var x1 = Math.min(this.x, point.x),
			y1 = Math.min(this.y, point.y),
			x2 = Math.max(this.x + this.width, point.x),
			y2 = Math.max(this.y + this.height, point.y);
		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
	},

	expand: function() {
		var amount = Size.read(arguments),
			hor = amount.width,
			ver = amount.height;
		return new Rectangle(this.x - hor / 2, this.y - ver / 2,
				this.width + hor, this.height + ver);
	},

	scale: function(hor, ver) {
		return this.expand(this.width * hor - this.width,
				this.height * (ver === undefined ? hor : ver) - this.height);
	}
}, Base.each([
		['Top', 'Left'], ['Top', 'Right'],
		['Bottom', 'Left'], ['Bottom', 'Right'],
		['Left', 'Center'], ['Top', 'Center'],
		['Right', 'Center'], ['Bottom', 'Center']
	],
	function(parts, index) {
		var part = parts.join(''),
			xFirst = /^[RL]/.test(part);
		if (index >= 4)
			parts[1] += xFirst ? 'Y' : 'X';
		var x = parts[xFirst ? 0 : 1],
			y = parts[xFirst ? 1 : 0],
			getX = 'get' + x,
			getY = 'get' + y,
			setX = 'set' + x,
			setY = 'set' + y,
			get = 'get' + part,
			set = 'set' + part;
		this[get] = function(_dontLink) {
			var ctor = _dontLink ? Point : LinkedPoint;
			return new ctor(this[getX](), this[getY](), this, set);
		};
		this[set] = function() {
			var point = Point.read(arguments);
			this[setX](point.x);
			this[setY](point.y);
		};
	}, {
		beans: true
	}
));

var LinkedRectangle = Rectangle.extend({
	initialize: function Rectangle(x, y, width, height, owner, setter) {
		this._set(x, y, width, height, true);
		this._owner = owner;
		this._setter = setter;
	},

	_set: function(x, y, width, height, _dontNotify) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		if (!_dontNotify)
			this._owner[this._setter](this);
		return this;
	}
},
new function() {
	var proto = Rectangle.prototype;

	return Base.each(['x', 'y', 'width', 'height'], function(key) {
		var part = Base.capitalize(key),
			internal = '_' + key;
		this['get' + part] = function() {
			return this[internal];
		};

		this['set' + part] = function(value) {
			this[internal] = value;
			if (!this._dontNotify)
				this._owner[this._setter](this);
		};
	}, Base.each(['Point', 'Size', 'Center',
			'Left', 'Top', 'Right', 'Bottom', 'CenterX', 'CenterY',
			'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
			'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'],
		function(key) {
			var name = 'set' + key;
			this[name] = function() {
				this._dontNotify = true;
				proto[name].apply(this, arguments);
				this._dontNotify = false;
				this._owner[this._setter](this);
			};
		}, {
			isSelected: function() {
				return !!(this._owner._selection & 2);
			},

			setSelected: function(selected) {
				var owner = this._owner;
				if (owner._changeSelection) {
					owner._changeSelection(2, selected);
				}
			}
		})
	);
});

var Matrix = Base.extend({
	_class: 'Matrix',

	initialize: function Matrix(arg, _dontNotify) {
		var count = arguments.length,
			ok = true;
		if (count >= 6) {
			this._set.apply(this, arguments);
		} else if (count === 1 || count === 2) {
			if (arg instanceof Matrix) {
				this._set(arg._a, arg._b, arg._c, arg._d, arg._tx, arg._ty,
						_dontNotify);
			} else if (Array.isArray(arg)) {
				this._set.apply(this,
						_dontNotify ? arg.concat([_dontNotify]) : arg);
			} else {
				ok = false;
			}
		} else if (!count) {
			this.reset();
		} else {
			ok = false;
		}
		if (!ok) {
			throw new Error('Unsupported matrix parameters');
		}
		return this;
	},

	set: '#initialize',

	_set: function(a, b, c, d, tx, ty, _dontNotify) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
		this._tx = tx;
		this._ty = ty;
		if (!_dontNotify)
			this._changed();
		return this;
	},

	_serialize: function(options, dictionary) {
		return Base.serialize(this.getValues(), options, true, dictionary);
	},

	_changed: function() {
		var owner = this._owner;
		if (owner) {
			if (owner._applyMatrix) {
				owner.transform(null, true);
			} else {
				owner._changed(9);
			}
		}
	},

	clone: function() {
		return new Matrix(this._a, this._b, this._c, this._d,
				this._tx, this._ty);
	},

	equals: function(mx) {
		return mx === this || mx && this._a === mx._a && this._b === mx._b
				&& this._c === mx._c && this._d === mx._d
				&& this._tx === mx._tx && this._ty === mx._ty;
	},

	toString: function() {
		var f = Formatter.instance;
		return '[[' + [f.number(this._a), f.number(this._c),
					f.number(this._tx)].join(', ') + '], ['
				+ [f.number(this._b), f.number(this._d),
					f.number(this._ty)].join(', ') + ']]';
	},

	reset: function(_dontNotify) {
		this._a = this._d = 1;
		this._b = this._c = this._tx = this._ty = 0;
		if (!_dontNotify)
			this._changed();
		return this;
	},

	apply: function(recursively, _setApplyMatrix) {
		var owner = this._owner;
		if (owner) {
			owner.transform(null, true, Base.pick(recursively, true),
					_setApplyMatrix);
			return this.isIdentity();
		}
		return false;
	},

	translate: function() {
		var point = Point.read(arguments),
			x = point.x,
			y = point.y;
		this._tx += x * this._a + y * this._c;
		this._ty += x * this._b + y * this._d;
		this._changed();
		return this;
	},

	scale: function() {
		var scale = Point.read(arguments),
			center = Point.read(arguments, 0, { readNull: true });
		if (center)
			this.translate(center);
		this._a *= scale.x;
		this._b *= scale.x;
		this._c *= scale.y;
		this._d *= scale.y;
		if (center)
			this.translate(center.negate());
		this._changed();
		return this;
	},

	rotate: function(angle ) {
		angle *= Math.PI / 180;
		var center = Point.read(arguments, 1),
			x = center.x,
			y = center.y,
			cos = Math.cos(angle),
			sin = Math.sin(angle),
			tx = x - x * cos + y * sin,
			ty = y - x * sin - y * cos,
			a = this._a,
			b = this._b,
			c = this._c,
			d = this._d;
		this._a = cos * a + sin * c;
		this._b = cos * b + sin * d;
		this._c = -sin * a + cos * c;
		this._d = -sin * b + cos * d;
		this._tx += tx * a + ty * c;
		this._ty += tx * b + ty * d;
		this._changed();
		return this;
	},

	shear: function() {
		var shear = Point.read(arguments),
			center = Point.read(arguments, 0, { readNull: true });
		if (center)
			this.translate(center);
		var a = this._a,
			b = this._b;
		this._a += shear.y * this._c;
		this._b += shear.y * this._d;
		this._c += shear.x * a;
		this._d += shear.x * b;
		if (center)
			this.translate(center.negate());
		this._changed();
		return this;
	},

	skew: function() {
		var skew = Point.read(arguments),
			center = Point.read(arguments, 0, { readNull: true }),
			toRadians = Math.PI / 180,
			shear = new Point(Math.tan(skew.x * toRadians),
				Math.tan(skew.y * toRadians));
		return this.shear(shear, center);
	},

	append: function(mx, _dontNotify) {
		if (mx) {
			var a1 = this._a,
				b1 = this._b,
				c1 = this._c,
				d1 = this._d,
				a2 = mx._a,
				b2 = mx._c,
				c2 = mx._b,
				d2 = mx._d,
				tx2 = mx._tx,
				ty2 = mx._ty;
			this._a = a2 * a1 + c2 * c1;
			this._c = b2 * a1 + d2 * c1;
			this._b = a2 * b1 + c2 * d1;
			this._d = b2 * b1 + d2 * d1;
			this._tx += tx2 * a1 + ty2 * c1;
			this._ty += tx2 * b1 + ty2 * d1;
			if (!_dontNotify)
				this._changed();
		}
		return this;
	},

	prepend: function(mx, _dontNotify) {
		if (mx) {
			var a1 = this._a,
				b1 = this._b,
				c1 = this._c,
				d1 = this._d,
				tx1 = this._tx,
				ty1 = this._ty,
				a2 = mx._a,
				b2 = mx._c,
				c2 = mx._b,
				d2 = mx._d,
				tx2 = mx._tx,
				ty2 = mx._ty;
			this._a = a2 * a1 + b2 * b1;
			this._c = a2 * c1 + b2 * d1;
			this._b = c2 * a1 + d2 * b1;
			this._d = c2 * c1 + d2 * d1;
			this._tx = a2 * tx1 + b2 * ty1 + tx2;
			this._ty = c2 * tx1 + d2 * ty1 + ty2;
			if (!_dontNotify)
				this._changed();
		}
		return this;
	},

	appended: function(mx) {
		return this.clone().append(mx);
	},

	prepended: function(mx) {
		return this.clone().prepend(mx);
	},

	invert: function() {
		var a = this._a,
			b = this._b,
			c = this._c,
			d = this._d,
			tx = this._tx,
			ty = this._ty,
			det = a * d - b * c,
			res = null;
		if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
			this._a = d / det;
			this._b = -b / det;
			this._c = -c / det;
			this._d = a / det;
			this._tx = (c * ty - d * tx) / det;
			this._ty = (b * tx - a * ty) / det;
			res = this;
		}
		return res;
	},

	inverted: function() {
		return this.clone().invert();
	},

	concatenate: '#append',
	preConcatenate: '#prepend',
	chain: '#appended',

	_shiftless: function() {
		return new Matrix(this._a, this._b, this._c, this._d, 0, 0);
	},

	_orNullIfIdentity: function() {
		return this.isIdentity() ? null : this;
	},

	isIdentity: function() {
		return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1
				&& this._tx === 0 && this._ty === 0;
	},

	isInvertible: function() {
		var det = this._a * this._d - this._c * this._b;
		return det && !isNaN(det) && isFinite(this._tx) && isFinite(this._ty);
	},

	isSingular: function() {
		return !this.isInvertible();
	},

	transform: function( src, dst, count) {
		return arguments.length < 3
			? this._transformPoint(Point.read(arguments))
			: this._transformCoordinates(src, dst, count);
	},

	_transformPoint: function(point, dest, _dontNotify) {
		var x = point.x,
			y = point.y;
		if (!dest)
			dest = new Point();
		return dest._set(
				x * this._a + y * this._c + this._tx,
				x * this._b + y * this._d + this._ty,
				_dontNotify);
	},

	_transformCoordinates: function(src, dst, count) {
		for (var i = 0, max = 2 * count; i < max; i += 2) {
			var x = src[i],
				y = src[i + 1];
			dst[i] = x * this._a + y * this._c + this._tx;
			dst[i + 1] = x * this._b + y * this._d + this._ty;
		}
		return dst;
	},

	_transformCorners: function(rect) {
		var x1 = rect.x,
			y1 = rect.y,
			x2 = x1 + rect.width,
			y2 = y1 + rect.height,
			coords = [ x1, y1, x2, y1, x2, y2, x1, y2 ];
		return this._transformCoordinates(coords, coords, 4);
	},

	_transformBounds: function(bounds, dest, _dontNotify) {
		var coords = this._transformCorners(bounds),
			min = coords.slice(0, 2),
			max = min.slice();
		for (var i = 2; i < 8; i++) {
			var val = coords[i],
				j = i & 1;
			if (val < min[j]) {
				min[j] = val;
			} else if (val > max[j]) {
				max[j] = val;
			}
		}
		if (!dest)
			dest = new Rectangle();
		return dest._set(min[0], min[1], max[0] - min[0], max[1] - min[1],
				_dontNotify);
	},

	inverseTransform: function() {
		return this._inverseTransform(Point.read(arguments));
	},

	_inverseTransform: function(point, dest, _dontNotify) {
		var a = this._a,
			b = this._b,
			c = this._c,
			d = this._d,
			tx = this._tx,
			ty = this._ty,
			det = a * d - b * c,
			res = null;
		if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
			var x = point.x - this._tx,
				y = point.y - this._ty;
			if (!dest)
				dest = new Point();
			res = dest._set(
					(x * d - y * c) / det,
					(y * a - x * b) / det,
					_dontNotify);
		}
		return res;
	},

	decompose: function() {
		var a = this._a,
			b = this._b,
			c = this._c,
			d = this._d,
			det = a * d - b * c,
			sqrt = Math.sqrt,
			atan2 = Math.atan2,
			degrees = 180 / Math.PI,
			rotate,
			scale,
			skew;
		if (a !== 0 || b !== 0) {
			var r = sqrt(a * a + b * b);
			rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
			scale = [r, det / r];
			skew = [atan2(a * c + b * d, r * r), 0];
		} else if (c !== 0 || d !== 0) {
			var s = sqrt(c * c + d * d);
			rotate = Math.asin(c / s)  * (d > 0 ? 1 : -1);
			scale = [det / s, s];
			skew = [0, atan2(a * c + b * d, s * s)];
		} else {
			rotate = 0;
			skew = scale = [0, 0];
		}
		return {
			translation: this.getTranslation(),
			rotation: rotate * degrees,
			scaling: new Point(scale),
			skewing: new Point(skew[0] * degrees, skew[1] * degrees)
		};
	},

	getValues: function() {
		return [ this._a, this._b, this._c, this._d, this._tx, this._ty ];
	},

	getTranslation: function() {
		return new Point(this._tx, this._ty);
	},

	getScaling: function() {
		return (this.decompose() || {}).scaling;
	},

	getRotation: function() {
		return (this.decompose() || {}).rotation;
	},

	applyToContext: function(ctx) {
		if (!this.isIdentity()) {
			ctx.transform(this._a, this._b, this._c, this._d,
					this._tx, this._ty);
		}
	}
}, Base.each(['a', 'b', 'c', 'd', 'tx', 'ty'], function(key) {
	var part = Base.capitalize(key),
		prop = '_' + key;
	this['get' + part] = function() {
		return this[prop];
	};
	this['set' + part] = function(value) {
		this[prop] = value;
		this._changed();
	};
}, {}));

var Line = Base.extend({
	_class: 'Line',

	initialize: function Line(arg0, arg1, arg2, arg3, arg4) {
		var asVector = false;
		if (arguments.length >= 4) {
			this._px = arg0;
			this._py = arg1;
			this._vx = arg2;
			this._vy = arg3;
			asVector = arg4;
		} else {
			this._px = arg0.x;
			this._py = arg0.y;
			this._vx = arg1.x;
			this._vy = arg1.y;
			asVector = arg2;
		}
		if (!asVector) {
			this._vx -= this._px;
			this._vy -= this._py;
		}
	},

	getPoint: function() {
		return new Point(this._px, this._py);
	},

	getVector: function() {
		return new Point(this._vx, this._vy);
	},

	getLength: function() {
		return this.getVector().getLength();
	},

	intersect: function(line, isInfinite) {
		return Line.intersect(
				this._px, this._py, this._vx, this._vy,
				line._px, line._py, line._vx, line._vy,
				true, isInfinite);
	},

	getSide: function(point, isInfinite) {
		return Line.getSide(
				this._px, this._py, this._vx, this._vy,
				point.x, point.y, true, isInfinite);
	},

	getDistance: function(point) {
		return Math.abs(this.getSignedDistance(point));
	},

	getSignedDistance: function(point) {
		return Line.getSignedDistance(this._px, this._py, this._vx, this._vy,
				point.x, point.y, true);
	},

	isCollinear: function(line) {
		return Point.isCollinear(this._vx, this._vy, line._vx, line._vy);
	},

	isOrthogonal: function(line) {
		return Point.isOrthogonal(this._vx, this._vy, line._vx, line._vy);
	},

	statics: {
		intersect: function(p1x, p1y, v1x, v1y, p2x, p2y, v2x, v2y, asVector,
				isInfinite) {
			if (!asVector) {
				v1x -= p1x;
				v1y -= p1y;
				v2x -= p2x;
				v2y -= p2y;
			}
			var cross = v1x * v2y - v1y * v2x;
			if (!Numerical.isZero(cross)) {
				var dx = p1x - p2x,
					dy = p1y - p2y,
					u1 = (v2x * dy - v2y * dx) / cross,
					u2 = (v1x * dy - v1y * dx) / cross,
					epsilon = 1e-12,
					uMin = -epsilon,
					uMax = 1 + epsilon;
				if (isInfinite
						|| uMin < u1 && u1 < uMax && uMin < u2 && u2 < uMax) {
					if (!isInfinite) {
						u1 = u1 <= 0 ? 0 : u1 >= 1 ? 1 : u1;
					}
					return new Point(
							p1x + u1 * v1x,
							p1y + u1 * v1y);
				}
			}
		},

		getSide: function(px, py, vx, vy, x, y, asVector, isInfinite) {
			if (!asVector) {
				vx -= px;
				vy -= py;
			}
			var v2x = x - px,
				v2y = y - py,
				ccw = v2x * vy - v2y * vx;
			if (!isInfinite && Numerical.isZero(ccw)) {
				ccw = (v2x * vx + v2x * vx) / (vx * vx + vy * vy);
				if (ccw >= 0 && ccw <= 1)
					ccw = 0;
			}
			return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
		},

		getSignedDistance: function(px, py, vx, vy, x, y, asVector) {
			if (!asVector) {
				vx -= px;
				vy -= py;
			}
			return vx === 0 ? vy > 0 ? x - px : px - x
				 : vy === 0 ? vx < 0 ? y - py : py - y
				 : ((x-px) * vy - (y-py) * vx) / Math.sqrt(vx * vx + vy * vy);
		},

		getDistance: function(px, py, vx, vy, x, y, asVector) {
			return Math.abs(
					Line.getSignedDistance(px, py, vx, vy, x, y, asVector));
		}
	}
});

var Project = PaperScopeItem.extend({
	_class: 'Project',
	_list: 'projects',
	_reference: 'project',
	_compactSerialize: true,

	initialize: function Project(element) {
		PaperScopeItem.call(this, true);
		this._children = [];
		this._namedChildren = {};
		this._activeLayer = null;
		this._currentStyle = new Style(null, null, this);
		this._view = View.create(this,
				element || CanvasProvider.getCanvas(1, 1));
		this._selectionItems = {};
		this._selectionCount = 0;
		this._updateVersion = 0;
	},

	_serialize: function(options, dictionary) {
		return Base.serialize(this._children, options, true, dictionary);
	},

	_changed: function(flags, item) {
		if (flags & 1) {
			var view = this._view;
			if (view) {
				view._needsUpdate = true;
				if (!view._requested && view._autoUpdate)
					view.requestUpdate();
			}
		}
		var changes = this._changes;
		if (changes && item) {
			var changesById = this._changesById,
				id = item._id,
				entry = changesById[id];
			if (entry) {
				entry.flags |= flags;
			} else {
				changes.push(changesById[id] = { item: item, flags: flags });
			}
		}
	},

	clear: function() {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; i--)
			children[i].remove();
	},

	isEmpty: function() {
		return !this._children.length;
	},

	remove: function remove() {
		if (!remove.base.call(this))
			return false;
		if (this._view)
			this._view.remove();
		return true;
	},

	getView: function() {
		return this._view;
	},

	getCurrentStyle: function() {
		return this._currentStyle;
	},

	setCurrentStyle: function(style) {
		this._currentStyle.set(style);
	},

	getIndex: function() {
		return this._index;
	},

	getOptions: function() {
		return this._scope.settings;
	},

	getLayers: function() {
		return this._children;
	},

	getActiveLayer: function() {
		return this._activeLayer || new Layer({ project: this, insert: true });
	},

	getSymbolDefinitions: function() {
		var definitions = [],
			ids = {};
		this.getItems({
			class: SymbolItem,
			match: function(item) {
				var definition = item._definition,
					id = definition._id;
				if (!ids[id]) {
					ids[id] = true;
					definitions.push(definition);
				}
				return false;
			}
		});
		return definitions;
	},

	getSymbols: 'getSymbolDefinitions',

	getSelectedItems: function() {
		var selectionItems = this._selectionItems,
			items = [];
		for (var id in selectionItems) {
			var item = selectionItems[id],
				selection = item._selection;
			if ((selection & 1) && item.isInserted()) {
				items.push(item);
			} else if (!selection) {
				this._updateSelection(item);
			}
		}
		return items;
	},

	_updateSelection: function(item) {
		var id = item._id,
			selectionItems = this._selectionItems;
		if (item._selection) {
			if (selectionItems[id] !== item) {
				this._selectionCount++;
				selectionItems[id] = item;
			}
		} else if (selectionItems[id] === item) {
			this._selectionCount--;
			delete selectionItems[id];
		}
	},

	selectAll: function() {
		var children = this._children;
		for (var i = 0, l = children.length; i < l; i++)
			children[i].setFullySelected(true);
	},

	deselectAll: function() {
		var selectionItems = this._selectionItems;
		for (var i in selectionItems)
			selectionItems[i].setFullySelected(false);
	},

	addLayer: function(layer) {
		return this.insertLayer(undefined, layer);
	},

	insertLayer: function(index, layer) {
		if (layer instanceof Layer) {
			layer._remove(false, true);
			Base.splice(this._children, [layer], index, 0);
			layer._setProject(this, true);
			var name = layer._name;
			if (name)
				layer.setName(name);
			if (this._changes)
				layer._changed(5);
			if (!this._activeLayer)
				this._activeLayer = layer;
		} else {
			layer = null;
		}
		return layer;
	},

	_insertItem: function(index, item, _created) {
		item = this.insertLayer(index, item)
				|| (this._activeLayer || this._insertItem(undefined,
						new Layer(Item.NO_INSERT), true))
						.insertChild(index, item);
		if (_created && item.activate)
			item.activate();
		return item;
	},

	getItems: function(options) {
		return Item._getItems(this, options);
	},

	getItem: function(options) {
		return Item._getItems(this, options, null, null, true)[0] || null;
	},

	importJSON: function(json) {
		this.activate();
		var layer = this._activeLayer;
		return Base.importJSON(json, layer && layer.isEmpty() && layer);
	},

	removeOn: function(type) {
		var sets = this._removeSets;
		if (sets) {
			if (type === 'mouseup')
				sets.mousedrag = null;
			var set = sets[type];
			if (set) {
				for (var id in set) {
					var item = set[id];
					for (var key in sets) {
						var other = sets[key];
						if (other && other != set)
							delete other[item._id];
					}
					item.remove();
				}
				sets[type] = null;
			}
		}
	},

	draw: function(ctx, matrix, pixelRatio) {
		this._updateVersion++;
		ctx.save();
		matrix.applyToContext(ctx);
		var children = this._children,
			param = new Base({
				offset: new Point(0, 0),
				pixelRatio: pixelRatio,
				viewMatrix: matrix.isIdentity() ? null : matrix,
				matrices: [new Matrix()],
				updateMatrix: true
			});
		for (var i = 0, l = children.length; i < l; i++) {
			children[i].draw(ctx, param);
		}
		ctx.restore();

		if (this._selectionCount > 0) {
			ctx.save();
			ctx.strokeWidth = 1;
			var items = this._selectionItems,
				size = this._scope.settings.handleSize,
				version = this._updateVersion;
			for (var id in items) {
				items[id]._drawSelection(ctx, matrix, size, items, version);
			}
			ctx.restore();
		}
	}
});

var Item = Base.extend(Emitter, {
	statics: {
		extend: function extend(src) {
			if (src._serializeFields)
				src._serializeFields = Base.set({},
					this.prototype._serializeFields, src._serializeFields);
			return extend.base.apply(this, arguments);
		},

		NO_INSERT: { insert: false }
	},

	_class: 'Item',
	_name: null,
	_applyMatrix: true,
	_canApplyMatrix: true,
	_canScaleStroke: false,
	_pivot: null,
	_visible: true,
	_blendMode: 'normal',
	_opacity: 1,
	_locked: false,
	_guide: false,
	_clipMask: false,
	_selection: 0,
	_selectBounds: true,
	_selectChildren: false,
	_serializeFields: {
		name: null,
		applyMatrix: null,
		matrix: new Matrix(),
		pivot: null,
		visible: true,
		blendMode: 'normal',
		opacity: 1,
		locked: false,
		guide: false,
		clipMask: false,
		selected: false,
		data: {}
	},
	_prioritize: ['applyMatrix']
},
new function() {
	var handlers = ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onClick',
			'onDoubleClick', 'onMouseMove', 'onMouseEnter', 'onMouseLeave'];
	return Base.each(handlers,
		function(name) {
			this._events[name] = {
				install: function(type) {
					this.getView()._countItemEvent(type, 1);
				},

				uninstall: function(type) {
					this.getView()._countItemEvent(type, -1);
				}
			};
		}, {
			_events: {
				onFrame: {
					install: function() {
						this.getView()._animateItem(this, true);
					},

					uninstall: function() {
						this.getView()._animateItem(this, false);
					}
				},

				onLoad: {},
				onError: {}
			},
			statics: {
				_itemHandlers: handlers
			}
		}
	);
}, {
	initialize: function Item() {
	},

	_initialize: function(props, point) {
		var hasProps = props && Base.isPlainObject(props),
			internal = hasProps && props.internal === true,
			matrix = this._matrix = new Matrix(),
			project = hasProps && props.project || paper.project,
			settings = paper.settings;
		this._id = internal ? null : UID.get();
		this._parent = this._index = null;
		this._applyMatrix = this._canApplyMatrix && settings.applyMatrix;
		if (point)
			matrix.translate(point);
		matrix._owner = this;
		this._style = new Style(project._currentStyle, this, project);
		if (internal || hasProps && props.insert == false
			|| !settings.insertItems && !(hasProps && props.insert === true)) {
			this._setProject(project);
		} else {
			(hasProps && props.parent || project)
					._insertItem(undefined, this, true);
		}
		if (hasProps && props !== Item.NO_INSERT) {
			this.set(props, {
				internal: true, insert: true, project: true, parent: true
			});
		}
		return hasProps;
	},

	_serialize: function(options, dictionary) {
		var props = {},
			that = this;

		function serialize(fields) {
			for (var key in fields) {
				var value = that[key];
				if (!Base.equals(value, key === 'leading'
						? fields.fontSize * 1.2 : fields[key])) {
					props[key] = Base.serialize(value, options,
							key !== 'data', dictionary);
				}
			}
		}

		serialize(this._serializeFields);
		if (!(this instanceof Group))
			serialize(this._style._defaults);
		return [ this._class, props ];
	},

	_changed: function(flags) {
		var symbol = this._symbol,
			cacheParent = this._parent || symbol,
			project = this._project;
		if (flags & 8) {
			this._bounds = this._position = this._decomposed =
					this._globalMatrix = undefined;
		}
		if (cacheParent
				&& (flags & 40)) {
			Item._clearBoundsCache(cacheParent);
		}
		if (flags & 2) {
			Item._clearBoundsCache(this);
		}
		if (project)
			project._changed(flags, this);
		if (symbol)
			symbol._changed(flags);
	},

	getId: function() {
		return this._id;
	},

	getName: function() {
		return this._name;
	},

	setName: function(name) {

		if (this._name)
			this._removeNamed();
		if (name === (+name) + '')
			throw new Error(
					'Names consisting only of numbers are not supported.');
		var owner = this._getOwner();
		if (name && owner) {
			var children = owner._children,
				namedChildren = owner._namedChildren;
			(namedChildren[name] = namedChildren[name] || []).push(this);
			if (!(name in children))
				children[name] = this;
		}
		this._name = name || undefined;
		this._changed(128);
	},

	getStyle: function() {
		return this._style;
	},

	setStyle: function(style) {
		this.getStyle().set(style);
	}
}, Base.each(['locked', 'visible', 'blendMode', 'opacity', 'guide'],
	function(name) {
		var part = Base.capitalize(name),
			key = '_' + name,
			flags = {
				locked: 128,
				visible: 137
			};
		this['get' + part] = function() {
			return this[key];
		};
		this['set' + part] = function(value) {
			if (value != this[key]) {
				this[key] = value;
				this._changed(flags[name] || 129);
			}
		};
	},
{}), {
	beans: true,

	getSelection: function() {
		return this._selection;
	},

	setSelection: function(selection) {
		if (selection !== this._selection) {
			this._selection = selection;
			var project = this._project;
			if (project) {
				project._updateSelection(this);
				this._changed(129);
			}
		}
	},

	_changeSelection: function(flag, selected) {
		var selection = this._selection;
		this.setSelection(selected ? selection | flag : selection & ~flag);
	},

	isSelected: function() {
		if (this._selectChildren) {
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++)
				if (children[i].isSelected())
					return true;
		}
		return !!(this._selection & 1);
	},

	setSelected: function(selected) {
		if (this._selectChildren) {
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++)
				children[i].setSelected(selected);
		}
		this._changeSelection(1, selected);
	},

	isFullySelected: function() {
		var children = this._children,
			selected = !!(this._selection & 1);
		if (children && selected) {
			for (var i = 0, l = children.length; i < l; i++)
				if (!children[i].isFullySelected())
					return false;
			return true;
		}
		return selected;
	},

	setFullySelected: function(selected) {
		var children = this._children;
		if (children) {
			for (var i = 0, l = children.length; i < l; i++)
				children[i].setFullySelected(selected);
		}
		this._changeSelection(1, selected);
	},

	isClipMask: function() {
		return this._clipMask;
	},

	setClipMask: function(clipMask) {
		if (this._clipMask != (clipMask = !!clipMask)) {
			this._clipMask = clipMask;
			if (clipMask) {
				this.setFillColor(null);
				this.setStrokeColor(null);
			}
			this._changed(129);
			if (this._parent)
				this._parent._changed(1024);
		}
	},

	getData: function() {
		if (!this._data)
			this._data = {};
		return this._data;
	},

	setData: function(data) {
		this._data = data;
	},

	getPosition: function(_dontLink) {
		var position = this._position,
			ctor = _dontLink ? Point : LinkedPoint;
		if (!position) {
			var pivot = this._pivot;
			position = this._position = pivot
					? this._matrix._transformPoint(pivot)
					: this.getBounds().getCenter(true);
		}
		return new ctor(position.x, position.y, this, 'setPosition');
	},

	setPosition: function() {
		this.translate(Point.read(arguments).subtract(this.getPosition(true)));
	},

	getPivot: function() {
		var pivot = this._pivot;
		return pivot
				? new LinkedPoint(pivot.x, pivot.y, this, 'setPivot')
				: null;
	},

	setPivot: function() {
		this._pivot = Point.read(arguments, 0, { clone: true, readNull: true });
		this._position = undefined;
	}
}, Base.each({
		getStrokeBounds: { stroke: true },
		getHandleBounds: { handle: true },
		getInternalBounds: { internal: true }
	},
	function(options, key) {
		this[key] = function(matrix) {
			return this.getBounds(matrix, options);
		};
	},
{
	beans: true,

	getBounds: function(matrix, options) {
		var hasMatrix = options || matrix instanceof Matrix,
			opts = Base.set({}, hasMatrix ? options : matrix,
					this._boundsOptions);
		if (!opts.stroke || this.getStrokeScaling())
			opts.cacheItem = this;
		var rect = this._getCachedBounds(hasMatrix && matrix, opts).rect;
		return !arguments.length
				? new LinkedRectangle(rect.x, rect.y, rect.width, rect.height,
					this, 'setBounds')
				: rect;
	},

	setBounds: function() {
		var rect = Rectangle.read(arguments),
			bounds = this.getBounds(),
			_matrix = this._matrix,
			matrix = new Matrix(),
			center = rect.getCenter();
		matrix.translate(center);
		if (rect.width != bounds.width || rect.height != bounds.height) {
			if (!_matrix.isInvertible()) {
				_matrix.set(_matrix._backup
						|| new Matrix().translate(_matrix.getTranslation()));
				bounds = this.getBounds();
			}
			matrix.scale(
					bounds.width !== 0 ? rect.width / bounds.width : 0,
					bounds.height !== 0 ? rect.height / bounds.height : 0);
		}
		center = bounds.getCenter();
		matrix.translate(-center.x, -center.y);
		this.transform(matrix);
	},

	_getBounds: function(matrix, options) {
		var children = this._children;
		if (!children || !children.length)
			return new Rectangle();
		Item._updateBoundsCache(this, options.cacheItem);
		return Item._getBounds(children, matrix, options);
	},

	_getBoundsCacheKey: function(options, internal) {
		return [
			options.stroke ? 1 : 0,
			options.handle ? 1 : 0,
			internal ? 1 : 0
		].join('');
	},

	_getCachedBounds: function(matrix, options, noInternal) {
		matrix = matrix && matrix._orNullIfIdentity();
		var internal = options.internal && !noInternal,
			cacheItem = options.cacheItem,
			_matrix = internal ? null : this._matrix._orNullIfIdentity(),
			cacheKey = cacheItem && (!matrix || matrix.equals(_matrix))
				&& this._getBoundsCacheKey(options, internal),
			bounds = this._bounds;
		Item._updateBoundsCache(this._parent || this._symbol, cacheItem);
		if (cacheKey && bounds && cacheKey in bounds) {
			var cached = bounds[cacheKey];
			return {
				rect: cached.rect.clone(),
				nonscaling: cached.nonscaling
			};
		}
		var res = this._getBounds(matrix || _matrix, options),
			rect = res.rect || res,
			style = this._style,
			nonscaling = res.nonscaling || style.hasStroke()
				&& !style.getStrokeScaling();
		if (cacheKey) {
			if (!bounds) {
				this._bounds = bounds = {};
			}
			var cached = bounds[cacheKey] = {
				rect: rect.clone(),
				nonscaling: nonscaling,
				internal: internal
			};
		}
		return {
			rect: rect,
			nonscaling: nonscaling
		};
	},

	_getStrokeMatrix: function(matrix, options) {
		var parent = this.getStrokeScaling() ? null
				: options && options.internal ? this
					: this._parent || this._symbol && this._symbol._item,
			mx = parent ? parent.getViewMatrix().invert() : matrix;
		return mx && mx._shiftless();
	},

	statics: {
		_updateBoundsCache: function(parent, item) {
			if (parent && item) {
				var id = item._id,
					ref = parent._boundsCache = parent._boundsCache || {
						ids: {},
						list: []
					};
				if (!ref.ids[id]) {
					ref.list.push(item);
					ref.ids[id] = item;
				}
			}
		},

		_clearBoundsCache: function(item) {
			var cache = item._boundsCache;
			if (cache) {
				item._bounds = item._position = item._boundsCache = undefined;
				for (var i = 0, list = cache.list, l = list.length; i < l; i++){
					var other = list[i];
					if (other !== item) {
						other._bounds = other._position = undefined;
						if (other._boundsCache)
							Item._clearBoundsCache(other);
					}
				}
			}
		},

		_getBounds: function(items, matrix, options) {
			var x1 = Infinity,
				x2 = -x1,
				y1 = x1,
				y2 = x2,
				nonscaling = false;
			options = options || {};
			for (var i = 0, l = items.length; i < l; i++) {
				var item = items[i];
				if (item._visible && !item.isEmpty()) {
					var bounds = item._getCachedBounds(
						matrix && matrix.appended(item._matrix), options, true),
						rect = bounds.rect;
					x1 = Math.min(rect.x, x1);
					y1 = Math.min(rect.y, y1);
					x2 = Math.max(rect.x + rect.width, x2);
					y2 = Math.max(rect.y + rect.height, y2);
					if (bounds.nonscaling)
						nonscaling = true;
				}
			}
			return {
				rect: isFinite(x1)
					? new Rectangle(x1, y1, x2 - x1, y2 - y1)
					: new Rectangle(),
				nonscaling: nonscaling
			};
		}
	}

}), {
	beans: true,

	_decompose: function() {
		return this._applyMatrix
			? null
			: this._decomposed || (this._decomposed = this._matrix.decompose());
	},

	getRotation: function() {
		var decomposed = this._decompose();
		return decomposed ? decomposed.rotation : 0;
	},

	setRotation: function(rotation) {
		var current = this.getRotation();
		if (current != null && rotation != null) {
			var decomposed = this._decomposed;
			this.rotate(rotation - current);
			if (decomposed) {
				decomposed.rotation = rotation;
				this._decomposed = decomposed;
			}
		}
	},

	getScaling: function() {
		var decomposed = this._decompose(),
			s = decomposed && decomposed.scaling;
		return new LinkedPoint(s ? s.x : 1, s ? s.y : 1, this, 'setScaling');
	},

	setScaling: function() {
		var current = this.getScaling(),
			scaling = Point.read(arguments, 0, { clone: true, readNull: true });
		if (current && scaling && !current.equals(scaling)) {
			var rotation = this.getRotation(),
				decomposed = this._decomposed,
				matrix = new Matrix(),
				center = this.getPosition(true);
			matrix.translate(center);
			if (rotation)
				matrix.rotate(rotation);
			matrix.scale(scaling.x / current.x, scaling.y / current.y);
			if (rotation)
				matrix.rotate(-rotation);
			matrix.translate(center.negate());
			this.transform(matrix);
			if (decomposed) {
				decomposed.scaling = scaling;
				this._decomposed = decomposed;
			}
		}
	},

	getMatrix: function() {
		return this._matrix;
	},

	setMatrix: function() {
		var matrix = this._matrix;
		matrix.initialize.apply(matrix, arguments);
	},

	getGlobalMatrix: function(_dontClone) {
		var matrix = this._globalMatrix,
			updateVersion = this._project._updateVersion;
		if (matrix && matrix._updateVersion !== updateVersion)
			matrix = null;
		if (!matrix) {
			matrix = this._globalMatrix = this._matrix.clone();
			var parent = this._parent;
			if (parent)
				matrix.prepend(parent.getGlobalMatrix(true));
			matrix._updateVersion = updateVersion;
		}
		return _dontClone ? matrix : matrix.clone();
	},

	getViewMatrix: function() {
		return this.getGlobalMatrix().prepend(this.getView()._matrix);
	},

	getApplyMatrix: function() {
		return this._applyMatrix;
	},

	setApplyMatrix: function(apply) {
		if (this._applyMatrix = this._canApplyMatrix && !!apply)
			this.transform(null, true);
	},

	getTransformContent: '#getApplyMatrix',
	setTransformContent: '#setApplyMatrix',
}, {
	getProject: function() {
		return this._project;
	},

	_setProject: function(project, installEvents) {
		if (this._project !== project) {
			if (this._project)
				this._installEvents(false);
			this._project = project;
			var children = this._children;
			for (var i = 0, l = children && children.length; i < l; i++)
				children[i]._setProject(project);
			installEvents = true;
		}
		if (installEvents)
			this._installEvents(true);
	},

	getView: function() {
		return this._project._view;
	},

	_installEvents: function _installEvents(install) {
		_installEvents.base.call(this, install);
		var children = this._children;
		for (var i = 0, l = children && children.length; i < l; i++)
			children[i]._installEvents(install);
	},

	getLayer: function() {
		var parent = this;
		while (parent = parent._parent) {
			if (parent instanceof Layer)
				return parent;
		}
		return null;
	},

	getParent: function() {
		return this._parent;
	},

	setParent: function(item) {
		return item.addChild(this);
	},

	_getOwner: '#getParent',

	getChildren: function() {
		return this._children;
	},

	setChildren: function(items) {
		this.removeChildren();
		this.addChildren(items);
	},

	getFirstChild: function() {
		return this._children && this._children[0] || null;
	},

	getLastChild: function() {
		return this._children && this._children[this._children.length - 1]
				|| null;
	},

	getNextSibling: function() {
		var owner = this._getOwner();
		return owner && owner._children[this._index + 1] || null;
	},

	getPreviousSibling: function() {
		var owner = this._getOwner();
		return owner && owner._children[this._index - 1] || null;
	},

	getIndex: function() {
		return this._index;
	},

	equals: function(item) {
		return item === this || item && this._class === item._class
				&& this._style.equals(item._style)
				&& this._matrix.equals(item._matrix)
				&& this._locked === item._locked
				&& this._visible === item._visible
				&& this._blendMode === item._blendMode
				&& this._opacity === item._opacity
				&& this._clipMask === item._clipMask
				&& this._guide === item._guide
				&& this._equals(item)
				|| false;
	},

	_equals: function(item) {
		return Base.equals(this._children, item._children);
	},

	clone: function(options) {
		var copy = new this.constructor(Item.NO_INSERT),
			children = this._children,
			insert = Base.pick(options ? options.insert : undefined,
					options === undefined || options === true),
			deep = Base.pick(options ? options.deep : undefined, true);
		if (children)
			copy.copyAttributes(this);
		if (!children || deep)
			copy.copyContent(this);
		if (!children)
			copy.copyAttributes(this);
		if (insert)
			copy.insertAbove(this);
		var name = this._name,
			parent = this._parent;
		if (name && parent) {
			var children = parent._children,
				orig = name,
				i = 1;
			while (children[name])
				name = orig + ' ' + (i++);
			if (name !== orig)
				copy.setName(name);
		}
		return copy;
	},

	copyContent: function(source) {
		var children = source._children;
		for (var i = 0, l = children && children.length; i < l; i++) {
			this.addChild(children[i].clone(false), true);
		}
	},

	copyAttributes: function(source, excludeMatrix) {
		this.setStyle(source._style);
		var keys = ['_locked', '_visible', '_blendMode', '_opacity',
				'_clipMask', '_guide'];
		for (var i = 0, l = keys.length; i < l; i++) {
			var key = keys[i];
			if (source.hasOwnProperty(key))
				this[key] = source[key];
		}
		if (!excludeMatrix)
			this._matrix.set(source._matrix, true);
		this.setApplyMatrix(source._applyMatrix);
		this.setPivot(source._pivot);
		this.setSelection(source._selection);
		var data = source._data,
			name = source._name;
		this._data = data ? Base.clone(data) : null;
		if (name)
			this.setName(name);
	},

	rasterize: function(resolution, insert) {
		var bounds = this.getStrokeBounds(),
			scale = (resolution || this.getView().getResolution()) / 72,
			topLeft = bounds.getTopLeft().floor(),
			bottomRight = bounds.getBottomRight().ceil(),
			size = new Size(bottomRight.subtract(topLeft)),
			raster = new Raster(Item.NO_INSERT);
		if (!size.isZero()) {
			var canvas = CanvasProvider.getCanvas(size.multiply(scale)),
				ctx = canvas.getContext('2d'),
				matrix = new Matrix().scale(scale).translate(topLeft.negate());
			ctx.save();
			matrix.applyToContext(ctx);
			this.draw(ctx, new Base({ matrices: [matrix] }));
			ctx.restore();
			raster.setCanvas(canvas);
		}
		raster.transform(new Matrix().translate(topLeft.add(size.divide(2)))
				.scale(1 / scale));
		if (insert === undefined || insert)
			raster.insertAbove(this);
		return raster;
	},

	contains: function() {
		return !!this._contains(
				this._matrix._inverseTransform(Point.read(arguments)));
	},

	_contains: function(point) {
		var children = this._children;
		if (children) {
			for (var i = children.length - 1; i >= 0; i--) {
				if (children[i].contains(point))
					return true;
			}
			return false;
		}
		return point.isInside(this.getInternalBounds());
	},

	isInside: function() {
		return Rectangle.read(arguments).contains(this.getBounds());
	},

	_asPathItem: function() {
		return new Path.Rectangle({
			rectangle: this.getInternalBounds(),
			matrix: this._matrix,
			insert: false,
		});
	},

	intersects: function(item, _matrix) {
		if (!(item instanceof Item))
			return false;
		return this._asPathItem().getIntersections(item._asPathItem(), null,
				_matrix, true).length > 0;
	}
},
new function() {
	function hitTest() {
		return this._hitTest(
				Point.read(arguments),
				HitResult.getOptions(arguments));
	}

	function hitTestAll() {
		var point = Point.read(arguments),
			options = HitResult.getOptions(arguments),
			all = [];
		this._hitTest(point, Base.set({ all: all }, options));
		return all;
	}

	function hitTestChildren(point, options, viewMatrix, _exclude) {
		var children = this._children;
		if (children) {
			for (var i = children.length - 1; i >= 0; i--) {
				var child = children[i];
				var res = child !== _exclude && child._hitTest(point, options,
						viewMatrix);
				if (res && !options.all)
					return res;
			}
		}
		return null;
	}

	Project.inject({
		hitTest: hitTest,
		hitTestAll: hitTestAll,
		_hitTest: hitTestChildren
	});

	return {
		hitTest: hitTest,
		hitTestAll: hitTestAll,
		_hitTestChildren: hitTestChildren,
	};
}, {

	_hitTest: function(point, options, parentViewMatrix) {
		if (this._locked || !this._visible || this._guide && !options.guides
				|| this.isEmpty()) {
			return null;
		}

		var matrix = this._matrix,
			viewMatrix = parentViewMatrix
					? parentViewMatrix.appended(matrix)
					: this.getGlobalMatrix().prepend(this.getView()._matrix),
			tolerance = Math.max(options.tolerance, 1e-12),
			tolerancePadding = options._tolerancePadding = new Size(
					Path._getStrokePadding(tolerance,
						matrix._shiftless().invert()));
		point = matrix._inverseTransform(point);
		if (!point || !this._children &&
			!this.getBounds({ internal: true, stroke: true, handle: true })
				.expand(tolerancePadding.multiply(2))._containsPoint(point)) {
			return null;
		}

		var checkSelf = !(options.guides && !this._guide
				|| options.selected && !this.isSelected()
				|| options.type && options.type !== Base.hyphenate(this._class)
				|| options.class && !(this instanceof options.class)),
			match = options.match,
			that = this,
			bounds,
			res;

		function filter(hit) {
			if (hit && match && !match(hit))
				hit = null;
			if (hit && options.all)
				options.all.push(hit);
			return hit;
		}

		function checkPoint(type, part) {
			var pt = part ? bounds['get' + part]() : that.getPosition();
			if (point.subtract(pt).divide(tolerancePadding).length <= 1) {
				return new HitResult(type, that, {
					name: part ? Base.hyphenate(part) : type,
					point: pt
				});
			}
		}

		var checkPosition = options.position,
			checkCenter = options.center,
			checkBounds = options.bounds;
		if (checkSelf && this._parent
				&& (checkPosition || checkCenter || checkBounds)) {
			if (checkCenter || checkBounds) {
				bounds = this.getInternalBounds();
			}
			res = checkPosition && checkPoint('position') ||
					checkCenter && checkPoint('center', 'Center');
			if (!res && checkBounds) {
				var points = [
					'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
					'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'
				];
				for (var i = 0; i < 8 && !res; i++) {
					res = checkPoint('bounds', points[i]);
				}
			}
			res = filter(res);
		}

		if (!res) {
			res = this._hitTestChildren(point, options, viewMatrix)
				|| checkSelf
					&& filter(this._hitTestSelf(point, options, viewMatrix,
						this.getStrokeScaling() ? null
							: viewMatrix._shiftless().invert()))
				|| null;
		}
		if (res && res.point) {
			res.point = matrix.transform(res.point);
		}
		return res;
	},

	_hitTestSelf: function(point, options) {
		if (options.fill && this.hasFill() && this._contains(point))
			return new HitResult('fill', this);
	},

	matches: function(name, compare) {
		function matchObject(obj1, obj2) {
			for (var i in obj1) {
				if (obj1.hasOwnProperty(i)) {
					var val1 = obj1[i],
						val2 = obj2[i];
					if (Base.isPlainObject(val1) && Base.isPlainObject(val2)) {
						if (!matchObject(val1, val2))
							return false;
					} else if (!Base.equals(val1, val2)) {
						return false;
					}
				}
			}
			return true;
		}
		var type = typeof name;
		if (type === 'object') {
			for (var key in name) {
				if (name.hasOwnProperty(key) && !this.matches(key, name[key]))
					return false;
			}
			return true;
		} else if (type === 'function') {
			return name(this);
		} else if (name === 'match') {
			return compare(this);
		} else {
			var value = /^(empty|editable)$/.test(name)
					? this['is' + Base.capitalize(name)]()
					: name === 'type'
						? Base.hyphenate(this._class)
						: this[name];
			if (name === 'class') {
				if (typeof compare === 'function')
					return this instanceof compare;
				value = this._class;
			}
			if (typeof compare === 'function') {
				return !!compare(value);
			} else if (compare) {
				if (compare.test) {
					return compare.test(value);
				} else if (Base.isPlainObject(compare)) {
					return matchObject(compare, value);
				}
			}
			return Base.equals(value, compare);
		}
	},

	getItems: function(options) {
		return Item._getItems(this, options, this._matrix);
	},

	getItem: function(options) {
		return Item._getItems(this, options, this._matrix, null, true)[0]
				|| null;
	},

	statics: {
		_getItems: function _getItems(item, options, matrix, param, firstOnly) {
			if (!param) {
				var obj = typeof options === 'object' && options,
					overlapping = obj && obj.overlapping,
					inside = obj && obj.inside,
					bounds = overlapping || inside,
					rect = bounds && Rectangle.read([bounds]);
				param = {
					items: [],
					recursive: obj && obj.recursive !== false,
					inside: !!inside,
					overlapping: !!overlapping,
					rect: rect,
					path: overlapping && new Path.Rectangle({
						rectangle: rect,
						insert: false
					})
				};
				if (obj) {
					options = Base.filter({}, options, {
						recursive: true, inside: true, overlapping: true
					});
				}
			}
			var children = item._children,
				items = param.items,
				rect = param.rect;
			matrix = rect && (matrix || new Matrix());
			for (var i = 0, l = children && children.length; i < l; i++) {
				var child = children[i],
					childMatrix = matrix && matrix.appended(child._matrix),
					add = true;
				if (rect) {
					var bounds = child.getBounds(childMatrix);
					if (!rect.intersects(bounds))
						continue;
					if (!(rect.contains(bounds)
							|| param.overlapping && (bounds.contains(rect)
								|| param.path.intersects(child, childMatrix))))
						add = false;
				}
				if (add && child.matches(options)) {
					items.push(child);
					if (firstOnly)
						break;
				}
				if (param.recursive !== false) {
					_getItems(child, options, childMatrix, param, firstOnly);
				}
				if (firstOnly && items.length > 0)
					break;
			}
			return items;
		}
	}
}, {

	importJSON: function(json) {
		var res = Base.importJSON(json, this);
		return res !== this ? this.addChild(res) : res;
	},

	addChild: function(item) {
		return this.insertChild(undefined, item);
	},

	insertChild: function(index, item) {
		var res = item ? this.insertChildren(index, [item]) : null;
		return res && res[0];
	},

	addChildren: function(items) {
		return this.insertChildren(this._children.length, items);
	},

	insertChildren: function(index, items) {
		var children = this._children;
		if (children && items && items.length > 0) {
			items = Base.slice(items);
			var inserted = {};
			for (var i = items.length - 1; i >= 0; i--) {
				var item = items[i],
					id = item && item._id;
				if (!item || inserted[id]) {
					items.splice(i, 1);
				} else {
					item._remove(false, true);
					inserted[id] = true;
				}
			}
			Base.splice(children, items, index, 0);
			var project = this._project,
				notifySelf = project._changes;
			for (var i = 0, l = items.length; i < l; i++) {
				var item = items[i],
					name = item._name;
				item._parent = this;
				item._setProject(project, true);
				if (name)
					item.setName(name);
				if (notifySelf)
					item._changed(5);
			}
			this._changed(11);
		} else {
			items = null;
		}
		return items;
	},

	_insertItem: '#insertChild',

	_insertAt: function(item, offset) {
		var owner = item && item._getOwner(),
			res = item !== this && owner ? this : null;
		if (res) {
			res._remove(false, true);
			owner._insertItem(item._index + offset, res);
		}
		return res;
	},

	insertAbove: function(item) {
		return this._insertAt(item, 1);
	},

	insertBelow: function(item) {
		return this._insertAt(item, 0);
	},

	sendToBack: function() {
		var owner = this._getOwner();
		return owner ? owner._insertItem(0, this) : null;
	},

	bringToFront: function() {
		var owner = this._getOwner();
		return owner ? owner._insertItem(undefined, this) : null;
	},

	appendTop: '#addChild',

	appendBottom: function(item) {
		return this.insertChild(0, item);
	},

	moveAbove: '#insertAbove',

	moveBelow: '#insertBelow',

	addTo: function(owner) {
		return owner._insertItem(undefined, this);
	},

	copyTo: function(owner) {
		return this.clone(false).addTo(owner);
	},

	reduce: function(options) {
		var children = this._children;
		if (children && children.length === 1) {
			var child = children[0].reduce(options);
			if (this._parent) {
				child.insertAbove(this);
				this.remove();
			} else {
				child.remove();
			}
			return child;
		}
		return this;
	},

	_removeNamed: function() {
		var owner = this._getOwner();
		if (owner) {
			var children = owner._children,
				namedChildren = owner._namedChildren,
				name = this._name,
				namedArray = namedChildren[name],
				index = namedArray ? namedArray.indexOf(this) : -1;
			if (index !== -1) {
				if (children[name] == this)
					delete children[name];
				namedArray.splice(index, 1);
				if (namedArray.length) {
					children[name] = namedArray[0];
				} else {
					delete namedChildren[name];
				}
			}
		}
	},

	_remove: function(notifySelf, notifyParent) {
		var owner = this._getOwner(),
			project = this._project,
			index = this._index;
		if (owner) {
			if (this._name)
				this._removeNamed();
			if (index != null) {
				if (project._activeLayer === this)
					project._activeLayer = this.getNextSibling()
							|| this.getPreviousSibling();
				Base.splice(owner._children, null, index, 1);
			}
			this._installEvents(false);
			if (notifySelf && project._changes)
				this._changed(5);
			if (notifyParent)
				owner._changed(11, this);
			this._parent = null;
			return true;
		}
		return false;
	},

	remove: function() {
		return this._remove(true, true);
	},

	replaceWith: function(item) {
		var ok = item && item.insertBelow(this);
		if (ok)
			this.remove();
		return ok;
	},

	removeChildren: function(start, end) {
		if (!this._children)
			return null;
		start = start || 0;
		end = Base.pick(end, this._children.length);
		var removed = Base.splice(this._children, null, start, end - start);
		for (var i = removed.length - 1; i >= 0; i--) {
			removed[i]._remove(true, false);
		}
		if (removed.length > 0)
			this._changed(11);
		return removed;
	},

	clear: '#removeChildren',

	reverseChildren: function() {
		if (this._children) {
			this._children.reverse();
			for (var i = 0, l = this._children.length; i < l; i++)
				this._children[i]._index = i;
			this._changed(11);
		}
	},

	isEmpty: function() {
		var children = this._children;
		return !children || !children.length;
	},

	isEditable: function() {
		var item = this;
		while (item) {
			if (!item._visible || item._locked)
				return false;
			item = item._parent;
		}
		return true;
	},

	hasFill: function() {
		return this.getStyle().hasFill();
	},

	hasStroke: function() {
		return this.getStyle().hasStroke();
	},

	hasShadow: function() {
		return this.getStyle().hasShadow();
	},

	_getOrder: function(item) {
		function getList(item) {
			var list = [];
			do {
				list.unshift(item);
			} while (item = item._parent);
			return list;
		}
		var list1 = getList(this),
			list2 = getList(item);
		for (var i = 0, l = Math.min(list1.length, list2.length); i < l; i++) {
			if (list1[i] != list2[i]) {
				return list1[i]._index < list2[i]._index ? 1 : -1;
			}
		}
		return 0;
	},

	hasChildren: function() {
		return this._children && this._children.length > 0;
	},

	isInserted: function() {
		return this._parent ? this._parent.isInserted() : false;
	},

	isAbove: function(item) {
		return this._getOrder(item) === -1;
	},

	isBelow: function(item) {
		return this._getOrder(item) === 1;
	},

	isParent: function(item) {
		return this._parent === item;
	},

	isChild: function(item) {
		return item && item._parent === this;
	},

	isDescendant: function(item) {
		var parent = this;
		while (parent = parent._parent) {
			if (parent === item)
				return true;
		}
		return false;
	},

	isAncestor: function(item) {
		return item ? item.isDescendant(this) : false;
	},

	isSibling: function(item) {
		return this._parent === item._parent;
	},

	isGroupedWith: function(item) {
		var parent = this._parent;
		while (parent) {
			if (parent._parent
				&& /^(Group|Layer|CompoundPath)$/.test(parent._class)
				&& item.isDescendant(parent))
					return true;
			parent = parent._parent;
		}
		return false;
	},

}, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
	var rotate = key === 'rotate';
	this[key] = function() {
		var value = (rotate ? Base : Point).read(arguments),
			center = Point.read(arguments, 0, { readNull: true });
		return this.transform(new Matrix()[key](value,
				center || this.getPosition(true)));
	};
}, {
	translate: function() {
		var mx = new Matrix();
		return this.transform(mx.translate.apply(mx, arguments));
	},

	transform: function(matrix, _applyMatrix, _applyRecursively,
			_setApplyMatrix) {
		var _matrix = this._matrix,
			transform = matrix && !matrix.isIdentity(),
			applyMatrix = (_applyMatrix || this._applyMatrix)
					&& ((!_matrix.isIdentity() || transform)
						|| _applyMatrix && _applyRecursively && this._children);
		if (!transform && !applyMatrix)
			return this;
		if (transform) {
			if (!matrix.isInvertible() && _matrix.isInvertible())
				_matrix._backup = _matrix.getValues();
			_matrix.prepend(matrix, true);
			var style = this._style,
				fillColor = style.getFillColor(true),
				strokeColor = style.getStrokeColor(true);
			if (fillColor)
				fillColor.transform(matrix);
			if (strokeColor)
				strokeColor.transform(matrix);
		}
		if (applyMatrix && (applyMatrix = this._transformContent(_matrix,
				_applyRecursively, _setApplyMatrix))) {
			var pivot = this._pivot;
			if (pivot)
				_matrix._transformPoint(pivot, pivot, true);
			_matrix.reset(true);
			if (_setApplyMatrix && this._canApplyMatrix)
				this._applyMatrix = true;
		}
		var bounds = this._bounds,
			position = this._position;
		if (transform || applyMatrix) {
			this._changed(9);
		}
		var decomp = transform && bounds && matrix.decompose();
		if (decomp && decomp.skewing.isZero() && decomp.rotation % 90 === 0) {
			for (var key in bounds) {
				var cache = bounds[key];
				if (cache.nonscaling) {
					delete bounds[key];
				} else if (applyMatrix || !cache.internal) {
					var rect = cache.rect;
					matrix._transformBounds(rect, rect);
				}
			}
			this._bounds = bounds;
			var cached = bounds[this._getBoundsCacheKey(
					this._boundsOptions || {})];
			if (cached) {
				this._position = cached.rect.getCenter(true);
			}
		} else if (transform && position && this._pivot) {
			this._position = matrix._transformPoint(position, position);
		}
		return this;
	},

	_transformContent: function(matrix, applyRecursively, setApplyMatrix) {
		var children = this._children;
		if (children) {
			for (var i = 0, l = children.length; i < l; i++)
				children[i].transform(matrix, true, applyRecursively,
						setApplyMatrix);
			return true;
		}
	},

	globalToLocal: function() {
		return this.getGlobalMatrix(true)._inverseTransform(
				Point.read(arguments));
	},

	localToGlobal: function() {
		return this.getGlobalMatrix(true)._transformPoint(
				Point.read(arguments));
	},

	parentToLocal: function() {
		return this._matrix._inverseTransform(Point.read(arguments));
	},

	localToParent: function() {
		return this._matrix._transformPoint(Point.read(arguments));
	},

	fitBounds: function(rectangle, fill) {
		rectangle = Rectangle.read(arguments);
		var bounds = this.getBounds(),
			itemRatio = bounds.height / bounds.width,
			rectRatio = rectangle.height / rectangle.width,
			scale = (fill ? itemRatio > rectRatio : itemRatio < rectRatio)
					? rectangle.width / bounds.width
					: rectangle.height / bounds.height,
			newBounds = new Rectangle(new Point(),
					new Size(bounds.width * scale, bounds.height * scale));
		newBounds.setCenter(rectangle.getCenter());
		this.setBounds(newBounds);
	}
}), {

	_setStyles: function(ctx, param, viewMatrix) {
		var style = this._style,
			matrix = this._matrix;
		if (style.hasFill()) {
			ctx.fillStyle = style.getFillColor().toCanvasStyle(ctx, matrix);
		}
		if (style.hasStroke()) {
			ctx.strokeStyle = style.getStrokeColor().toCanvasStyle(ctx, matrix);
			ctx.lineWidth = style.getStrokeWidth();
			var strokeJoin = style.getStrokeJoin(),
				strokeCap = style.getStrokeCap(),
				miterLimit = style.getMiterLimit();
			if (strokeJoin)
				ctx.lineJoin = strokeJoin;
			if (strokeCap)
				ctx.lineCap = strokeCap;
			if (miterLimit)
				ctx.miterLimit = miterLimit;
			if (paper.support.nativeDash) {
				var dashArray = style.getDashArray(),
					dashOffset = style.getDashOffset();
				if (dashArray && dashArray.length) {
					if ('setLineDash' in ctx) {
						ctx.setLineDash(dashArray);
						ctx.lineDashOffset = dashOffset;
					} else {
						ctx.mozDash = dashArray;
						ctx.mozDashOffset = dashOffset;
					}
				}
			}
		}
		if (style.hasShadow()) {
			var pixelRatio = param.pixelRatio || 1,
				mx = viewMatrix._shiftless().prepend(
					new Matrix().scale(pixelRatio, pixelRatio)),
				blur = mx.transform(new Point(style.getShadowBlur(), 0)),
				offset = mx.transform(this.getShadowOffset());
			ctx.shadowColor = style.getShadowColor().toCanvasStyle(ctx);
			ctx.shadowBlur = blur.getLength();
			ctx.shadowOffsetX = offset.x;
			ctx.shadowOffsetY = offset.y;
		}
	},

	draw: function(ctx, param, parentStrokeMatrix) {
		var updateVersion = this._updateVersion = this._project._updateVersion;
		if (!this._visible || this._opacity === 0)
			return;
		var matrices = param.matrices,
			viewMatrix = param.viewMatrix,
			matrix = this._matrix,
			globalMatrix = matrices[matrices.length - 1].appended(matrix);
		if (!globalMatrix.isInvertible())
			return;

		viewMatrix = viewMatrix ? viewMatrix.appended(globalMatrix)
				: globalMatrix;

		matrices.push(globalMatrix);
		if (param.updateMatrix) {
			globalMatrix._updateVersion = updateVersion;
			this._globalMatrix = globalMatrix;
		}

		var blendMode = this._blendMode,
			opacity = this._opacity,
			normalBlend = blendMode === 'normal',
			nativeBlend = BlendMode.nativeModes[blendMode],
			direct = normalBlend && opacity === 1
					|| param.dontStart
					|| param.clip
					|| (nativeBlend || normalBlend && opacity < 1)
						&& this._canComposite(),
			pixelRatio = param.pixelRatio || 1,
			mainCtx, itemOffset, prevOffset;
		if (!direct) {
			var bounds = this.getStrokeBounds(viewMatrix);
			if (!bounds.width || !bounds.height)
				return;
			prevOffset = param.offset;
			itemOffset = param.offset = bounds.getTopLeft().floor();
			mainCtx = ctx;
			ctx = CanvasProvider.getContext(bounds.getSize().ceil().add(1)
					.multiply(pixelRatio));
			if (pixelRatio !== 1)
				ctx.scale(pixelRatio, pixelRatio);
		}
		ctx.save();
		var strokeMatrix = parentStrokeMatrix
				? parentStrokeMatrix.appended(matrix)
				: this._canScaleStroke && !this.getStrokeScaling(true)
					&& viewMatrix,
			clip = !direct && param.clipItem,
			transform = !strokeMatrix || clip;
		if (direct) {
			ctx.globalAlpha = opacity;
			if (nativeBlend)
				ctx.globalCompositeOperation = blendMode;
		} else if (transform) {
			ctx.translate(-itemOffset.x, -itemOffset.y);
		}
		if (transform) {
			(direct ? matrix : viewMatrix).applyToContext(ctx);
		}
		if (clip) {
			param.clipItem.draw(ctx, param.extend({ clip: true }));
		}
		if (strokeMatrix) {
			ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
			var offset = param.offset;
			if (offset)
				ctx.translate(-offset.x, -offset.y);
		}
		this._draw(ctx, param, viewMatrix, strokeMatrix);
		ctx.restore();
		matrices.pop();
		if (param.clip && !param.dontFinish)
			ctx.clip();
		if (!direct) {
			BlendMode.process(blendMode, ctx, mainCtx, opacity,
					itemOffset.subtract(prevOffset).multiply(pixelRatio));
			CanvasProvider.release(ctx);
			param.offset = prevOffset;
		}
	},

	_isUpdated: function(updateVersion) {
		var parent = this._parent;
		if (parent instanceof CompoundPath)
			return parent._isUpdated(updateVersion);
		var updated = this._updateVersion === updateVersion;
		if (!updated && parent && parent._visible
				&& parent._isUpdated(updateVersion)) {
			this._updateVersion = updateVersion;
			updated = true;
		}
		return updated;
	},

	_drawSelection: function(ctx, matrix, size, selectionItems, updateVersion) {
		var selection = this._selection,
			itemSelected = selection & 1,
			boundsSelected = selection & 2
					|| itemSelected && this._selectBounds,
			positionSelected = selection & 4;
		if (!this._drawSelected)
			itemSelected = false;
		if ((itemSelected || boundsSelected || positionSelected)
				&& this._isUpdated(updateVersion)) {
			var layer,
				color = this.getSelectedColor(true) || (layer = this.getLayer())
					&& layer.getSelectedColor(true),
				mx = matrix.appended(this.getGlobalMatrix(true)),
				half = size / 2;
			ctx.strokeStyle = ctx.fillStyle = color
					? color.toCanvasStyle(ctx) : '#009dec';
			if (itemSelected)
				this._drawSelected(ctx, mx, selectionItems);
			if (positionSelected) {
				var point = this.getPosition(true),
					x = point.x,
					y = point.y;
				ctx.beginPath();
				ctx.arc(x, y, half, 0, Math.PI * 2, true);
				ctx.stroke();
				var deltas = [[0, -1], [1, 0], [0, 1], [-1, 0]],
					start = half,
					end = size + 1;
				for (var i = 0; i < 4; i++) {
					var delta = deltas[i],
						dx = delta[0],
						dy = delta[1];
					ctx.moveTo(x + dx * start, y + dy * start);
					ctx.lineTo(x + dx * end, y + dy * end);
					ctx.stroke();
				}
			}
			if (boundsSelected) {
				var coords = mx._transformCorners(this.getInternalBounds());
				ctx.beginPath();
				for (var i = 0; i < 8; i++) {
					ctx[!i ? 'moveTo' : 'lineTo'](coords[i], coords[++i]);
				}
				ctx.closePath();
				ctx.stroke();
				for (var i = 0; i < 8; i++) {
					ctx.fillRect(coords[i] - half, coords[++i] - half,
							size, size);
				}
			}
		}
	},

	_canComposite: function() {
		return false;
	}
}, Base.each(['down', 'drag', 'up', 'move'], function(key) {
	this['removeOn' + Base.capitalize(key)] = function() {
		var hash = {};
		hash[key] = true;
		return this.removeOn(hash);
	};
}, {

	removeOn: function(obj) {
		for (var name in obj) {
			if (obj[name]) {
				var key = 'mouse' + name,
					project = this._project,
					sets = project._removeSets = project._removeSets || {};
				sets[key] = sets[key] || {};
				sets[key][this._id] = this;
			}
		}
		return this;
	}
}));

var Group = Item.extend({
	_class: 'Group',
	_selectBounds: false,
	_selectChildren: true,
	_serializeFields: {
		children: []
	},

	initialize: function Group(arg) {
		this._children = [];
		this._namedChildren = {};
		if (!this._initialize(arg))
			this.addChildren(Array.isArray(arg) ? arg : arguments);
	},

	_changed: function _changed(flags) {
		_changed.base.call(this, flags);
		if (flags & 1026) {
			this._clipItem = undefined;
		}
	},

	_getClipItem: function() {
		var clipItem = this._clipItem;
		if (clipItem === undefined) {
			clipItem = null;
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++) {
				if (children[i]._clipMask) {
					clipItem = children[i];
					break;
				}
			}
			this._clipItem = clipItem;
		}
		return clipItem;
	},

	isClipped: function() {
		return !!this._getClipItem();
	},

	setClipped: function(clipped) {
		var child = this.getFirstChild();
		if (child)
			child.setClipMask(clipped);
	},

	_getBounds: function _getBounds(matrix, options) {
		var clipItem = this._getClipItem();
		return clipItem
			? clipItem._getCachedBounds(
				matrix && matrix.appended(clipItem._matrix),
				Base.set({}, options, { stroke: false }))
			: _getBounds.base.call(this, matrix, options);
	},

	_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
		var clipItem = this._getClipItem();
		return (!clipItem || clipItem.contains(point))
				&& _hitTestChildren.base.call(this, point, options, viewMatrix,
					clipItem);
	},

	_draw: function(ctx, param) {
		var clip = param.clip,
			clipItem = !clip && this._getClipItem();
		param = param.extend({ clipItem: clipItem, clip: false });
		if (clip) {
			ctx.beginPath();
			param.dontStart = param.dontFinish = true;
		} else if (clipItem) {
			clipItem.draw(ctx, param.extend({ clip: true }));
		}
		var children = this._children;
		for (var i = 0, l = children.length; i < l; i++) {
			var item = children[i];
			if (item !== clipItem)
				item.draw(ctx, param);
		}
	}
});

var Layer = Group.extend({
	_class: 'Layer',

	initialize: function Layer() {
		Group.apply(this, arguments);
	},

	_getOwner: function() {
		return this._parent || this._index != null && this._project;
	},

	isInserted: function isInserted() {
		return this._parent ? isInserted.base.call(this) : this._index != null;
	},

	activate: function() {
		this._project._activeLayer = this;
	},

	_hitTestSelf: function() {
	}
});

var Shape = Item.extend({
	_class: 'Shape',
	_applyMatrix: false,
	_canApplyMatrix: false,
	_canScaleStroke: true,
	_serializeFields: {
		type: null,
		size: null,
		radius: null
	},

	initialize: function Shape(props, point) {
		this._initialize(props, point);
	},

	_equals: function(item) {
		return this._type === item._type
			&& this._size.equals(item._size)
			&& Base.equals(this._radius, item._radius);
	},

	copyContent: function(source) {
		this.setType(source._type);
		this.setSize(source._size);
		this.setRadius(source._radius);
	},

	getType: function() {
		return this._type;
	},

	setType: function(type) {
		this._type = type;
	},

	getShape: '#getType',
	setShape: '#setType',

	getSize: function() {
		var size = this._size;
		return new LinkedSize(size.width, size.height, this, 'setSize');
	},

	setSize: function() {
		var size = Size.read(arguments);
		if (!this._size) {
			this._size = size.clone();
		} else if (!this._size.equals(size)) {
			var type = this._type,
				width = size.width,
				height = size.height;
			if (type === 'rectangle') {
				this._radius.set(Size.min(this._radius, size.divide(2)));
			} else if (type === 'circle') {
				width = height = (width + height) / 2;
				this._radius = width / 2;
			} else if (type === 'ellipse') {
				this._radius._set(width / 2, height / 2);
			}
			this._size._set(width, height);
			this._changed(9);
		}
	},

	getRadius: function() {
		var rad = this._radius;
		return this._type === 'circle'
				? rad
				: new LinkedSize(rad.width, rad.height, this, 'setRadius');
	},

	setRadius: function(radius) {
		var type = this._type;
		if (type === 'circle') {
			if (radius === this._radius)
				return;
			var size = radius * 2;
			this._radius = radius;
			this._size._set(size, size);
		} else {
			radius = Size.read(arguments);
			if (!this._radius) {
				this._radius = radius.clone();
			} else {
				if (this._radius.equals(radius))
					return;
				this._radius.set(radius);
				if (type === 'rectangle') {
					var size = Size.max(this._size, radius.multiply(2));
					this._size.set(size);
				} else if (type === 'ellipse') {
					this._size._set(radius.width * 2, radius.height * 2);
				}
			}
		}
		this._changed(9);
	},

	isEmpty: function() {
		return false;
	},

	toPath: function(insert) {
		var path = new Path[Base.capitalize(this._type)]({
			center: new Point(),
			size: this._size,
			radius: this._radius,
			insert: false
		});
		path.copyAttributes(this);
		if (paper.settings.applyMatrix)
			path.setApplyMatrix(true);
		if (insert === undefined || insert)
			path.insertAbove(this);
		return path;
	},

	toShape: '#clone',

	_asPathItem: function() {
		return this.toPath(false);
	},

	_draw: function(ctx, param, viewMatrix, strokeMatrix) {
		var style = this._style,
			hasFill = style.hasFill(),
			hasStroke = style.hasStroke(),
			dontPaint = param.dontFinish || param.clip,
			untransformed = !strokeMatrix;
		if (hasFill || hasStroke || dontPaint) {
			var type = this._type,
				radius = this._radius,
				isCircle = type === 'circle';
			if (!param.dontStart)
				ctx.beginPath();
			if (untransformed && isCircle) {
				ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
			} else {
				var rx = isCircle ? radius : radius.width,
					ry = isCircle ? radius : radius.height,
					size = this._size,
					width = size.width,
					height = size.height;
				if (untransformed && type === 'rectangle' && rx === 0 && ry === 0) {
					ctx.rect(-width / 2, -height / 2, width, height);
				} else {
					var x = width / 2,
						y = height / 2,
						kappa = 1 - 0.5522847498307936,
						cx = rx * kappa,
						cy = ry * kappa,
						c = [
							-x, -y + ry,
							-x, -y + cy,
							-x + cx, -y,
							-x + rx, -y,
							x - rx, -y,
							x - cx, -y,
							x, -y + cy,
							x, -y + ry,
							x, y - ry,
							x, y - cy,
							x - cx, y,
							x - rx, y,
							-x + rx, y,
							-x + cx, y,
							-x, y - cy,
							-x, y - ry
						];
					if (strokeMatrix)
						strokeMatrix.transform(c, c, 32);
					ctx.moveTo(c[0], c[1]);
					ctx.bezierCurveTo(c[2], c[3], c[4], c[5], c[6], c[7]);
					if (x !== rx)
						ctx.lineTo(c[8], c[9]);
					ctx.bezierCurveTo(c[10], c[11], c[12], c[13], c[14], c[15]);
					if (y !== ry)
						ctx.lineTo(c[16], c[17]);
					ctx.bezierCurveTo(c[18], c[19], c[20], c[21], c[22], c[23]);
					if (x !== rx)
						ctx.lineTo(c[24], c[25]);
					ctx.bezierCurveTo(c[26], c[27], c[28], c[29], c[30], c[31]);
				}
			}
			ctx.closePath();
		}
		if (!dontPaint && (hasFill || hasStroke)) {
			this._setStyles(ctx, param, viewMatrix);
			if (hasFill) {
				ctx.fill(style.getFillRule());
				ctx.shadowColor = 'rgba(0,0,0,0)';
			}
			if (hasStroke)
				ctx.stroke();
		}
	},

	_canComposite: function() {
		return !(this.hasFill() && this.hasStroke());
	},

	_getBounds: function(matrix, options) {
		var rect = new Rectangle(this._size).setCenter(0, 0),
			style = this._style,
			strokeWidth = options.stroke && style.hasStroke()
					&& style.getStrokeWidth();
		if (matrix)
			rect = matrix._transformBounds(rect);
		return strokeWidth
				? rect.expand(Path._getStrokePadding(strokeWidth,
					this._getStrokeMatrix(matrix, options)))
				: rect;
	}
},
new function() {
	function getCornerCenter(that, point, expand) {
		var radius = that._radius;
		if (!radius.isZero()) {
			var halfSize = that._size.divide(2);
			for (var q = 1; q <= 4; q++) {
				var dir = new Point(q > 1 && q < 4 ? -1 : 1, q > 2 ? -1 : 1),
					corner = dir.multiply(halfSize),
					center = corner.subtract(dir.multiply(radius)),
					rect = new Rectangle(
							expand ? corner.add(dir.multiply(expand)) : corner,
							center);
				if (rect.contains(point))
					return { point: center, quadrant: q };
			}
		}
	}

	function isOnEllipseStroke(point, radius, padding, quadrant) {
		var vector = point.divide(radius);
		return (!quadrant || vector.isInQuadrant(quadrant)) &&
				vector.subtract(vector.normalize()).multiply(radius)
					.divide(padding).length <= 1;
	}

	return {
		_contains: function _contains(point) {
			if (this._type === 'rectangle') {
				var center = getCornerCenter(this, point);
				return center
						? point.subtract(center.point).divide(this._radius)
							.getLength() <= 1
						: _contains.base.call(this, point);
			} else {
				return point.divide(this.size).getLength() <= 0.5;
			}
		},

		_hitTestSelf: function _hitTestSelf(point, options, viewMatrix,
				strokeMatrix) {
			var hit = false,
				style = this._style,
				hitStroke = options.stroke && style.hasStroke(),
				hitFill = options.fill && style.hasFill();
			if (hitStroke || hitFill) {
				var type = this._type,
					radius = this._radius,
					strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : 0,
					strokePadding = options._tolerancePadding.add(
						Path._getStrokePadding(strokeRadius,
							!style.getStrokeScaling() && strokeMatrix));
				if (type === 'rectangle') {
					var padding = strokePadding.multiply(2),
						center = getCornerCenter(this, point, padding);
					if (center) {
						hit = isOnEllipseStroke(point.subtract(center.point),
								radius, strokePadding, center.quadrant);
					} else {
						var rect = new Rectangle(this._size).setCenter(0, 0),
							outer = rect.expand(padding),
							inner = rect.expand(padding.negate());
						hit = outer._containsPoint(point)
								&& !inner._containsPoint(point);
					}
				} else {
					hit = isOnEllipseStroke(point, radius, strokePadding);
				}
			}
			return hit ? new HitResult(hitStroke ? 'stroke' : 'fill', this)
					: _hitTestSelf.base.apply(this, arguments);
		}
	};
}, {

statics: new function() {
	function createShape(type, point, size, radius, args) {
		var item = new Shape(Base.getNamed(args), point);
		item._type = type;
		item._size = size;
		item._radius = radius;
		return item;
	}

	return {
		Circle: function() {
			var center = Point.readNamed(arguments, 'center'),
				radius = Base.readNamed(arguments, 'radius');
			return createShape('circle', center, new Size(radius * 2), radius,
					arguments);
		},

		Rectangle: function() {
			var rect = Rectangle.readNamed(arguments, 'rectangle'),
				radius = Size.min(Size.readNamed(arguments, 'radius'),
						rect.getSize(true).divide(2));
			return createShape('rectangle', rect.getCenter(true),
					rect.getSize(true), radius, arguments);
		},

		Ellipse: function() {
			var ellipse = Shape._readEllipse(arguments),
				radius = ellipse.radius;
			return createShape('ellipse', ellipse.center, radius.multiply(2),
					radius, arguments);
		},

		_readEllipse: function(args) {
			var center,
				radius;
			if (Base.hasNamed(args, 'radius')) {
				center = Point.readNamed(args, 'center');
				radius = Size.readNamed(args, 'radius');
			} else {
				var rect = Rectangle.readNamed(args, 'rectangle');
				center = rect.getCenter(true);
				radius = rect.getSize(true).divide(2);
			}
			return { center: center, radius: radius };
		}
	};
}});

var Raster = Item.extend({
	_class: 'Raster',
	_applyMatrix: false,
	_canApplyMatrix: false,
	_boundsOptions: { stroke: false, handle: false },
	_serializeFields: {
		crossOrigin: null,
		source: null
	},
	_prioritize: ['crossOrigin'],

	initialize: function Raster(object, position) {
		if (!this._initialize(object,
				position !== undefined && Point.read(arguments, 1))) {
			var image = typeof object === 'string'
					? document.getElementById(object) : object;
			if (image) {
				this.setImage(image);
			} else {
				this.setSource(object);
			}
		}
		if (!this._size) {
			this._size = new Size();
			this._loaded = false;
		}
	},

	_equals: function(item) {
		return this.getSource() === item.getSource();
	},

	copyContent: function(source) {
		var image = source._image,
			canvas = source._canvas;
		if (image) {
			this._setImage(image);
		} else if (canvas) {
			var copyCanvas = CanvasProvider.getCanvas(source._size);
			copyCanvas.getContext('2d').drawImage(canvas, 0, 0);
			this._setImage(copyCanvas);
		}
		this._crossOrigin = source._crossOrigin;
	},

	getSize: function() {
		var size = this._size;
		return new LinkedSize(size ? size.width : 0, size ? size.height : 0,
				this, 'setSize');
	},

	setSize: function() {
		var size = Size.read(arguments);
		if (!size.equals(this._size)) {
			if (size.width > 0 && size.height > 0) {
				var element = this.getElement();
				this._setImage(CanvasProvider.getCanvas(size));
				if (element)
					this.getContext(true).drawImage(element, 0, 0,
							size.width, size.height);
			} else {
				if (this._canvas)
					CanvasProvider.release(this._canvas);
				this._size = size.clone();
			}
		}
	},

	getWidth: function() {
		return this._size ? this._size.width : 0;
	},

	setWidth: function(width) {
		this.setSize(width, this.getHeight());
	},

	getHeight: function() {
		return this._size ? this._size.height : 0;
	},

	setHeight: function(height) {
		this.setSize(this.getWidth(), height);
	},

	getLoaded: function() {
		return this._loaded;
	},

	isEmpty: function() {
		var size = this._size;
		return !size || size.width === 0 && size.height === 0;
	},

	getResolution: function() {
		var matrix = this._matrix,
			orig = new Point(0, 0).transform(matrix),
			u = new Point(1, 0).transform(matrix).subtract(orig),
			v = new Point(0, 1).transform(matrix).subtract(orig);
		return new Size(
			72 / u.getLength(),
			72 / v.getLength()
		);
	},

	getPpi: '#getResolution',

	getImage: function() {
		return this._image;
	},

	setImage: function(image) {
		var that = this;

		function emit(event) {
			var view = that.getView(),
				type = event && event.type || 'load';
			if (view && that.responds(type)) {
				paper = view._scope;
				that.emit(type, new Event(event));
			}
		}

		this._setImage(image);
		if (this._loaded) {
			setTimeout(emit, 0);
		} else if (image) {
			DomEvent.add(image, {
				load: function(event) {
					that._setImage(image);
					emit(event);
				},
				error: emit
			});
		}
	},

	_setImage: function(image) {
		if (this._canvas)
			CanvasProvider.release(this._canvas);
		if (image && image.getContext) {
			this._image = null;
			this._canvas = image;
			this._loaded = true;
		} else {
			this._image = image;
			this._canvas = null;
			this._loaded = !!(image && image.src && image.complete);
		}
		this._size = new Size(
				image ? image.naturalWidth || image.width : 0,
				image ? image.naturalHeight || image.height : 0);
		this._context = null;
		this._changed(521);
	},

	getCanvas: function() {
		if (!this._canvas) {
			var ctx = CanvasProvider.getContext(this._size);
			try {
				if (this._image)
					ctx.drawImage(this._image, 0, 0);
				this._canvas = ctx.canvas;
			} catch (e) {
				CanvasProvider.release(ctx);
			}
		}
		return this._canvas;
	},

	setCanvas: '#setImage',

	getContext: function(modify) {
		if (!this._context)
			this._context = this.getCanvas().getContext('2d');
		if (modify) {
			this._image = null;
			this._changed(513);
		}
		return this._context;
	},

	setContext: function(context) {
		this._context = context;
	},

	getSource: function() {
		var image = this._image;
		return image && image.src || this.toDataURL();
	},

	setSource: function(src) {
		var image = new self.Image(),
			crossOrigin = this._crossOrigin;
		if (crossOrigin)
			image.crossOrigin = crossOrigin;
		image.src = src;
		this.setImage(image);
	},

	getCrossOrigin: function() {
		var image = this._image;
		return image && image.crossOrigin || this._crossOrigin || '';
	},

	setCrossOrigin: function(crossOrigin) {
		this._crossOrigin = crossOrigin;
		var image = this._image;
		if (image)
			image.crossOrigin = crossOrigin;
	},

	getElement: function() {
		return this._canvas || this._loaded && this._image;
	}
}, {
	beans: false,

	getSubCanvas: function() {
		var rect = Rectangle.read(arguments),
			ctx = CanvasProvider.getContext(rect.getSize());
		ctx.drawImage(this.getCanvas(), rect.x, rect.y,
				rect.width, rect.height, 0, 0, rect.width, rect.height);
		return ctx.canvas;
	},

	getSubRaster: function() {
		var rect = Rectangle.read(arguments),
			raster = new Raster(Item.NO_INSERT);
		raster._setImage(this.getSubCanvas(rect));
		raster.translate(rect.getCenter().subtract(this.getSize().divide(2)));
		raster._matrix.prepend(this._matrix);
		raster.insertAbove(this);
		return raster;
	},

	toDataURL: function() {
		var image = this._image,
			src = image && image.src;
		if (/^data:/.test(src))
			return src;
		var canvas = this.getCanvas();
		return canvas ? canvas.toDataURL.apply(canvas, arguments) : null;
	},

	drawImage: function(image ) {
		var point = Point.read(arguments, 1);
		this.getContext(true).drawImage(image, point.x, point.y);
	},

	getAverageColor: function(object) {
		var bounds, path;
		if (!object) {
			bounds = this.getBounds();
		} else if (object instanceof PathItem) {
			path = object;
			bounds = object.getBounds();
		} else if (typeof object === 'object') {
			if ('width' in object) {
				bounds = new Rectangle(object);
			} else if ('x' in object) {
				bounds = new Rectangle(object.x - 0.5, object.y - 0.5, 1, 1);
			}
		}
		if (!bounds)
			return null;
		var sampleSize = 32,
			width = Math.min(bounds.width, sampleSize),
			height = Math.min(bounds.height, sampleSize);
		var ctx = Raster._sampleContext;
		if (!ctx) {
			ctx = Raster._sampleContext = CanvasProvider.getContext(
					new Size(sampleSize));
		} else {
			ctx.clearRect(0, 0, sampleSize + 1, sampleSize + 1);
		}
		ctx.save();
		var matrix = new Matrix()
				.scale(width / bounds.width, height / bounds.height)
				.translate(-bounds.x, -bounds.y);
		matrix.applyToContext(ctx);
		if (path)
			path.draw(ctx, new Base({ clip: true, matrices: [matrix] }));
		this._matrix.applyToContext(ctx);
		var element = this.getElement(),
			size = this._size;
		if (element)
			ctx.drawImage(element, -size.width / 2, -size.height / 2);
		ctx.restore();
		var pixels = ctx.getImageData(0.5, 0.5, Math.ceil(width),
				Math.ceil(height)).data,
			channels = [0, 0, 0],
			total = 0;
		for (var i = 0, l = pixels.length; i < l; i += 4) {
			var alpha = pixels[i + 3];
			total += alpha;
			alpha /= 255;
			channels[0] += pixels[i] * alpha;
			channels[1] += pixels[i + 1] * alpha;
			channels[2] += pixels[i + 2] * alpha;
		}
		for (var i = 0; i < 3; i++)
			channels[i] /= total;
		return total ? Color.read(channels) : null;
	},

	getPixel: function() {
		var point = Point.read(arguments);
		var data = this.getContext().getImageData(point.x, point.y, 1, 1).data;
		return new Color('rgb', [data[0] / 255, data[1] / 255, data[2] / 255],
				data[3] / 255);
	},

	setPixel: function() {
		var point = Point.read(arguments),
			color = Color.read(arguments),
			components = color._convert('rgb'),
			alpha = color._alpha,
			ctx = this.getContext(true),
			imageData = ctx.createImageData(1, 1),
			data = imageData.data;
		data[0] = components[0] * 255;
		data[1] = components[1] * 255;
		data[2] = components[2] * 255;
		data[3] = alpha != null ? alpha * 255 : 255;
		ctx.putImageData(imageData, point.x, point.y);
	},

	createImageData: function() {
		var size = Size.read(arguments);
		return this.getContext().createImageData(size.width, size.height);
	},

	getImageData: function() {
		var rect = Rectangle.read(arguments);
		if (rect.isEmpty())
			rect = new Rectangle(this._size);
		return this.getContext().getImageData(rect.x, rect.y,
				rect.width, rect.height);
	},

	setImageData: function(data ) {
		var point = Point.read(arguments, 1);
		this.getContext(true).putImageData(data, point.x, point.y);
	},

	_getBounds: function(matrix, options) {
		var rect = new Rectangle(this._size).setCenter(0, 0);
		return matrix ? matrix._transformBounds(rect) : rect;
	},

	_hitTestSelf: function(point) {
		if (this._contains(point)) {
			var that = this;
			return new HitResult('pixel', that, {
				offset: point.add(that._size.divide(2)).round(),
				color: {
					get: function() {
						return that.getPixel(this.offset);
					}
				}
			});
		}
	},

	_draw: function(ctx) {
		var element = this.getElement();
		if (element) {
			ctx.globalAlpha = this._opacity;
			ctx.drawImage(element,
					-this._size.width / 2, -this._size.height / 2);
		}
	},

	_canComposite: function() {
		return true;
	}
});

var SymbolItem = Item.extend({
	_class: 'SymbolItem',
	_applyMatrix: false,
	_canApplyMatrix: false,
	_boundsOptions: { stroke: true },
	_serializeFields: {
		symbol: null
	},

	initialize: function SymbolItem(arg0, arg1) {
		if (!this._initialize(arg0,
				arg1 !== undefined && Point.read(arguments, 1)))
			this.setDefinition(arg0 instanceof SymbolDefinition ?
					arg0 : new SymbolDefinition(arg0));
	},

	_equals: function(item) {
		return this._definition === item._definition;
	},

	copyContent: function(source) {
		this.setDefinition(source._definition);
	},

	getDefinition: function() {
		return this._definition;
	},

	setDefinition: function(definition) {
		this._definition = definition;
		this._changed(9);
	},

	getSymbol: '#getDefinition',
	setSymbol: '#setDefinition',

	isEmpty: function() {
		return this._definition._item.isEmpty();
	},

	_getBounds: function(matrix, options) {
		var item = this._definition._item;
		return item._getCachedBounds(item._matrix.prepended(matrix), options);
	},

	_hitTestSelf: function(point, options, viewMatrix) {
		var res = this._definition._item._hitTest(point, options, viewMatrix);
		if (res)
			res.item = this;
		return res;
	},

	_draw: function(ctx, param) {
		this._definition._item.draw(ctx, param);
	}

});

var SymbolDefinition = Base.extend({
	_class: 'SymbolDefinition',

	initialize: function SymbolDefinition(item, dontCenter) {
		this._id = UID.get();
		this.project = paper.project;
		if (item)
			this.setItem(item, dontCenter);
	},

	_serialize: function(options, dictionary) {
		return dictionary.add(this, function() {
			return Base.serialize([this._class, this._item],
					options, false, dictionary);
		});
	},

	_changed: function(flags) {
		if (flags & 8)
			Item._clearBoundsCache(this);
		if (flags & 1)
			this.project._changed(flags);
	},

	getItem: function() {
		return this._item;
	},

	setItem: function(item, _dontCenter) {
		if (item._symbol)
			item = item.clone();
		if (this._item)
			this._item._symbol = null;
		this._item = item;
		item.remove();
		item.setSelected(false);
		if (!_dontCenter)
			item.setPosition(new Point());
		item._symbol = this;
		this._changed(9);
	},

	getDefinition: '#getItem',
	setDefinition: '#setItem',

	place: function(position) {
		return new SymbolItem(this, position);
	},

	clone: function() {
		return new SymbolDefinition(this._item.clone(false));
	},

	equals: function(symbol) {
		return symbol === this
				|| symbol && this._item.equals(symbol._item)
				|| false;
	}
});

var HitResult = Base.extend({
	_class: 'HitResult',

	initialize: function HitResult(type, item, values) {
		this.type = type;
		this.item = item;
		if (values)
			this.inject(values);
	},

	statics: {
		getOptions: function(args) {
			var options = args && Base.read(args);
			return Base.set({
				type: null,
				tolerance: paper.settings.hitTolerance,
				fill: !options,
				stroke: !options,
				segments: !options,
				handles: false,
				ends: false,
				position: false,
				center: false,
				bounds: false,
				guides: false,
				selected: false
			}, options);
		}
	}
});

var Segment = Base.extend({
	_class: 'Segment',
	beans: true,
	_selection: 0,

	initialize: function Segment(arg0, arg1, arg2, arg3, arg4, arg5) {
		var count = arguments.length,
			point, handleIn, handleOut, selection;
		if (count > 0) {
			if (arg0 == null || typeof arg0 === 'object') {
				if (count === 1 && arg0 && 'point' in arg0) {
					point = arg0.point;
					handleIn = arg0.handleIn;
					handleOut = arg0.handleOut;
					selection = arg0.selection;
				} else {
					point = arg0;
					handleIn = arg1;
					handleOut = arg2;
					selection = arg3;
				}
			} else {
				point = [ arg0, arg1 ];
				handleIn = arg2 !== undefined ? [ arg2, arg3 ] : null;
				handleOut = arg4 !== undefined ? [ arg4, arg5 ] : null;
			}
		}
		new SegmentPoint(point, this, '_point');
		new SegmentPoint(handleIn, this, '_handleIn');
		new SegmentPoint(handleOut, this, '_handleOut');
		if (selection)
			this.setSelection(selection);
	},

	_serialize: function(options, dictionary) {
		var point = this._point,
			selection = this._selection,
			obj = selection || this.hasHandles()
					? [point, this._handleIn, this._handleOut]
					: point;
		if (selection)
			obj.push(selection);
		return Base.serialize(obj, options, true, dictionary);
	},

	_changed: function(point) {
		var path = this._path;
		if (!path)
			return;
		var curves = path._curves,
			index = this._index,
			curve;
		if (curves) {
			if ((!point || point === this._point || point === this._handleIn)
					&& (curve = index > 0 ? curves[index - 1] : path._closed
						? curves[curves.length - 1] : null))
				curve._changed();
			if ((!point || point === this._point || point === this._handleOut)
					&& (curve = curves[index]))
				curve._changed();
		}
		path._changed(25);
	},

	getPoint: function() {
		return this._point;
	},

	setPoint: function() {
		this._point.set(Point.read(arguments));
	},

	getHandleIn: function() {
		return this._handleIn;
	},

	setHandleIn: function() {
		this._handleIn.set(Point.read(arguments));
	},

	getHandleOut: function() {
		return this._handleOut;
	},

	setHandleOut: function() {
		this._handleOut.set(Point.read(arguments));
	},

	hasHandles: function() {
		return !this._handleIn.isZero() || !this._handleOut.isZero();
	},

	isSmooth: function() {
		var handleIn = this._handleIn,
			handleOut = this._handleOut;
		return !handleIn.isZero() && !handleOut.isZero()
				&& handleIn.isCollinear(handleOut);
	},

	clearHandles: function() {
		this._handleIn._set(0, 0);
		this._handleOut._set(0, 0);
	},

	getSelection: function() {
		return this._selection;
	},

	setSelection: function(selection) {
		var oldSelection = this._selection,
			path = this._path;
		this._selection = selection = selection || 0;
		if (path && selection !== oldSelection) {
			path._updateSelection(this, oldSelection, selection);
			path._changed(129);
		}
	},

	_changeSelection: function(flag, selected) {
		var selection = this._selection;
		this.setSelection(selected ? selection | flag : selection & ~flag);
	},

	isSelected: function() {
		return !!(this._selection & 7);
	},

	setSelected: function(selected) {
		this._changeSelection(7, selected);
	},

	getIndex: function() {
		return this._index !== undefined ? this._index : null;
	},

	getPath: function() {
		return this._path || null;
	},

	getCurve: function() {
		var path = this._path,
			index = this._index;
		if (path) {
			if (index > 0 && !path._closed
					&& index === path._segments.length - 1)
				index--;
			return path.getCurves()[index] || null;
		}
		return null;
	},

	getLocation: function() {
		var curve = this.getCurve();
		return curve
				? new CurveLocation(curve, this === curve._segment1 ? 0 : 1)
				: null;
	},

	getNext: function() {
		var segments = this._path && this._path._segments;
		return segments && (segments[this._index + 1]
				|| this._path._closed && segments[0]) || null;
	},

	smooth: function(options, _first, _last) {
		var opts = options || {},
			type = opts.type,
			factor = opts.factor,
			prev = this.getPrevious(),
			next = this.getNext(),
			p0 = (prev || this)._point,
			p1 = this._point,
			p2 = (next || this)._point,
			d1 = p0.getDistance(p1),
			d2 = p1.getDistance(p2);
		if (!type || type === 'catmull-rom') {
			var a = factor === undefined ? 0.5 : factor,
				d1_a = Math.pow(d1, a),
				d1_2a = d1_a * d1_a,
				d2_a = Math.pow(d2, a),
				d2_2a = d2_a * d2_a;
			if (!_first && prev) {
				var A = 2 * d2_2a + 3 * d2_a * d1_a + d1_2a,
					N = 3 * d2_a * (d2_a + d1_a);
				this.setHandleIn(N !== 0
					? new Point(
						(d2_2a * p0._x + A * p1._x - d1_2a * p2._x) / N - p1._x,
						(d2_2a * p0._y + A * p1._y - d1_2a * p2._y) / N - p1._y)
					: new Point());
			}
			if (!_last && next) {
				var A = 2 * d1_2a + 3 * d1_a * d2_a + d2_2a,
					N = 3 * d1_a * (d1_a + d2_a);
				this.setHandleOut(N !== 0
					? new Point(
						(d1_2a * p2._x + A * p1._x - d2_2a * p0._x) / N - p1._x,
						(d1_2a * p2._y + A * p1._y - d2_2a * p0._y) / N - p1._y)
					: new Point());
			}
		} else if (type === 'geometric') {
			if (prev && next) {
				var vector = p0.subtract(p2),
					t = factor === undefined ? 0.4 : factor,
					k = t * d1 / (d1 + d2);
				if (!_first)
					this.setHandleIn(vector.multiply(k));
				if (!_last)
					this.setHandleOut(vector.multiply(k - t));
			}
		} else {
			throw new Error('Smoothing method \'' + type + '\' not supported.');
		}
	},

	getPrevious: function() {
		var segments = this._path && this._path._segments;
		return segments && (segments[this._index - 1]
				|| this._path._closed && segments[segments.length - 1]) || null;
	},

	isFirst: function() {
		return !this._index;
	},

	isLast: function() {
		var path = this._path;
		return path && this._index === path._segments.length - 1 || false;
	},

	reverse: function() {
		var handleIn = this._handleIn,
			handleOut = this._handleOut,
			tmp = handleIn.clone();
		handleIn.set(handleOut);
		handleOut.set(tmp);
	},

	reversed: function() {
		return new Segment(this._point, this._handleOut, this._handleIn);
	},

	remove: function() {
		return this._path ? !!this._path.removeSegment(this._index) : false;
	},

	clone: function() {
		return new Segment(this._point, this._handleIn, this._handleOut);
	},

	equals: function(segment) {
		return segment === this || segment && this._class === segment._class
				&& this._point.equals(segment._point)
				&& this._handleIn.equals(segment._handleIn)
				&& this._handleOut.equals(segment._handleOut)
				|| false;
	},

	toString: function() {
		var parts = [ 'point: ' + this._point ];
		if (!this._handleIn.isZero())
			parts.push('handleIn: ' + this._handleIn);
		if (!this._handleOut.isZero())
			parts.push('handleOut: ' + this._handleOut);
		return '{ ' + parts.join(', ') + ' }';
	},

	transform: function(matrix) {
		this._transformCoordinates(matrix, new Array(6), true);
		this._changed();
	},

	interpolate: function(from, to, factor) {
		var u = 1 - factor,
			v = factor,
			point1 = from._point,
			point2 = to._point,
			handleIn1 = from._handleIn,
			handleIn2 = to._handleIn,
			handleOut2 = to._handleOut,
			handleOut1 = from._handleOut;
		this._point._set(
				u * point1._x + v * point2._x,
				u * point1._y + v * point2._y, true);
		this._handleIn._set(
				u * handleIn1._x + v * handleIn2._x,
				u * handleIn1._y + v * handleIn2._y, true);
		this._handleOut._set(
				u * handleOut1._x + v * handleOut2._x,
				u * handleOut1._y + v * handleOut2._y, true);
		this._changed();
	},

	_transformCoordinates: function(matrix, coords, change) {
		var point = this._point,
			handleIn = !change || !this._handleIn.isZero()
					? this._handleIn : null,
			handleOut = !change || !this._handleOut.isZero()
					? this._handleOut : null,
			x = point._x,
			y = point._y,
			i = 2;
		coords[0] = x;
		coords[1] = y;
		if (handleIn) {
			coords[i++] = handleIn._x + x;
			coords[i++] = handleIn._y + y;
		}
		if (handleOut) {
			coords[i++] = handleOut._x + x;
			coords[i++] = handleOut._y + y;
		}
		if (matrix) {
			matrix._transformCoordinates(coords, coords, i / 2);
			x = coords[0];
			y = coords[1];
			if (change) {
				point._x = x;
				point._y = y;
				i = 2;
				if (handleIn) {
					handleIn._x = coords[i++] - x;
					handleIn._y = coords[i++] - y;
				}
				if (handleOut) {
					handleOut._x = coords[i++] - x;
					handleOut._y = coords[i++] - y;
				}
			} else {
				if (!handleIn) {
					coords[i++] = x;
					coords[i++] = y;
				}
				if (!handleOut) {
					coords[i++] = x;
					coords[i++] = y;
				}
			}
		}
		return coords;
	}
});

var SegmentPoint = Point.extend({
	initialize: function SegmentPoint(point, owner, key) {
		var x, y,
			selected;
		if (!point) {
			x = y = 0;
		} else if ((x = point[0]) !== undefined) {
			y = point[1];
		} else {
			var pt = point;
			if ((x = pt.x) === undefined) {
				pt = Point.read(arguments);
				x = pt.x;
			}
			y = pt.y;
			selected = pt.selected;
		}
		this._x = x;
		this._y = y;
		this._owner = owner;
		owner[key] = this;
		if (selected)
			this.setSelected(true);
	},

	_set: function(x, y) {
		this._x = x;
		this._y = y;
		this._owner._changed(this);
		return this;
	},

	getX: function() {
		return this._x;
	},

	setX: function(x) {
		this._x = x;
		this._owner._changed(this);
	},

	getY: function() {
		return this._y;
	},

	setY: function(y) {
		this._y = y;
		this._owner._changed(this);
	},

	isZero: function() {
		var isZero = Numerical.isZero;
		return isZero(this._x) && isZero(this._y);
	},

	isSelected: function() {
		return !!(this._owner._selection & this._getSelection());
	},

	setSelected: function(selected) {
		this._owner._changeSelection(this._getSelection(), selected);
	},

	_getSelection: function() {
		var owner = this._owner;
		return this === owner._point ? 1
			: this === owner._handleIn ? 2
			: this === owner._handleOut ? 4
			: 0;
	}
});

var Curve = Base.extend({
	_class: 'Curve',
	beans: true,

	initialize: function Curve(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
		var count = arguments.length,
			seg1, seg2,
			point1, point2,
			handle1, handle2;
		if (count === 3) {
			this._path = arg0;
			seg1 = arg1;
			seg2 = arg2;
		} else if (!count) {
			seg1 = new Segment();
			seg2 = new Segment();
		} else if (count === 1) {
			if ('segment1' in arg0) {
				seg1 = new Segment(arg0.segment1);
				seg2 = new Segment(arg0.segment2);
			} else if ('point1' in arg0) {
				point1 = arg0.point1;
				handle1 = arg0.handle1;
				handle2 = arg0.handle2;
				point2 = arg0.point2;
			} else if (Array.isArray(arg0)) {
				point1 = [arg0[0], arg0[1]];
				point2 = [arg0[6], arg0[7]];
				handle1 = [arg0[2] - arg0[0], arg0[3] - arg0[1]];
				handle2 = [arg0[4] - arg0[6], arg0[5] - arg0[7]];
			}
		} else if (count === 2) {
			seg1 = new Segment(arg0);
			seg2 = new Segment(arg1);
		} else if (count === 4) {
			point1 = arg0;
			handle1 = arg1;
			handle2 = arg2;
			point2 = arg3;
		} else if (count === 8) {
			point1 = [arg0, arg1];
			point2 = [arg6, arg7];
			handle1 = [arg2 - arg0, arg3 - arg1];
			handle2 = [arg4 - arg6, arg5 - arg7];
		}
		this._segment1 = seg1 || new Segment(point1, null, handle1);
		this._segment2 = seg2 || new Segment(point2, handle2, null);
	},

	_serialize: function(options, dictionary) {
		return Base.serialize(this.hasHandles()
				? [this.getPoint1(), this.getHandle1(), this.getHandle2(),
					this.getPoint2()]
				: [this.getPoint1(), this.getPoint2()],
				options, true, dictionary);
	},

	_changed: function() {
		this._length = this._bounds = undefined;
	},

	clone: function() {
		return new Curve(this._segment1, this._segment2);
	},

	toString: function() {
		var parts = [ 'point1: ' + this._segment1._point ];
		if (!this._segment1._handleOut.isZero())
			parts.push('handle1: ' + this._segment1._handleOut);
		if (!this._segment2._handleIn.isZero())
			parts.push('handle2: ' + this._segment2._handleIn);
		parts.push('point2: ' + this._segment2._point);
		return '{ ' + parts.join(', ') + ' }';
	},

	classify: function() {
		return Curve.classify(this.getValues());
	},

	remove: function() {
		var removed = false;
		if (this._path) {
			var segment2 = this._segment2,
				handleOut = segment2._handleOut;
			removed = segment2.remove();
			if (removed)
				this._segment1._handleOut.set(handleOut);
		}
		return removed;
	},

	getPoint1: function() {
		return this._segment1._point;
	},

	setPoint1: function() {
		this._segment1._point.set(Point.read(arguments));
	},

	getPoint2: function() {
		return this._segment2._point;
	},

	setPoint2: function() {
		this._segment2._point.set(Point.read(arguments));
	},

	getHandle1: function() {
		return this._segment1._handleOut;
	},

	setHandle1: function() {
		this._segment1._handleOut.set(Point.read(arguments));
	},

	getHandle2: function() {
		return this._segment2._handleIn;
	},

	setHandle2: function() {
		this._segment2._handleIn.set(Point.read(arguments));
	},

	getSegment1: function() {
		return this._segment1;
	},

	getSegment2: function() {
		return this._segment2;
	},

	getPath: function() {
		return this._path;
	},

	getIndex: function() {
		return this._segment1._index;
	},

	getNext: function() {
		var curves = this._path && this._path._curves;
		return curves && (curves[this._segment1._index + 1]
				|| this._path._closed && curves[0]) || null;
	},

	getPrevious: function() {
		var curves = this._path && this._path._curves;
		return curves && (curves[this._segment1._index - 1]
				|| this._path._closed && curves[curves.length - 1]) || null;
	},

	isFirst: function() {
		return !this._segment1._index;
	},

	isLast: function() {
		var path = this._path;
		return path && this._segment1._index === path._curves.length - 1
				|| false;
	},

	isSelected: function() {
		return this.getPoint1().isSelected()
				&& this.getHandle1().isSelected()
				&& this.getHandle2().isSelected()
				&& this.getPoint2().isSelected();
	},

	setSelected: function(selected) {
		this.getPoint1().setSelected(selected);
		this.getHandle1().setSelected(selected);
		this.getHandle2().setSelected(selected);
		this.getPoint2().setSelected(selected);
	},

	getValues: function(matrix) {
		return Curve.getValues(this._segment1, this._segment2, matrix);
	},

	getPoints: function() {
		var coords = this.getValues(),
			points = [];
		for (var i = 0; i < 8; i += 2)
			points.push(new Point(coords[i], coords[i + 1]));
		return points;
	}
}, {
	getLength: function() {
		if (this._length == null)
			this._length = Curve.getLength(this.getValues(), 0, 1);
		return this._length;
	},

	getArea: function() {
		return Curve.getArea(this.getValues());
	},

	getLine: function() {
		return new Line(this._segment1._point, this._segment2._point);
	},

	getPart: function(from, to) {
		return new Curve(Curve.getPart(this.getValues(), from, to));
	},

	getPartLength: function(from, to) {
		return Curve.getLength(this.getValues(), from, to);
	},

	divideAt: function(location) {
		return this.divideAtTime(location && location.curve === this
				? location.time : this.getTimeAt(location));
	},

	divideAtTime: function(time, _setHandles) {
		var tMin = 1e-8,
			tMax = 1 - tMin,
			res = null;
		if (time >= tMin && time <= tMax) {
			var parts = Curve.subdivide(this.getValues(), time),
				left = parts[0],
				right = parts[1],
				setHandles = _setHandles || this.hasHandles(),
				seg1 = this._segment1,
				seg2 = this._segment2,
				path = this._path;
			if (setHandles) {
				seg1._handleOut._set(left[2] - left[0], left[3] - left[1]);
				seg2._handleIn._set(right[4] - right[6],right[5] - right[7]);
			}
			var x = left[6], y = left[7],
				segment = new Segment(new Point(x, y),
						setHandles && new Point(left[4] - x, left[5] - y),
						setHandles && new Point(right[2] - x, right[3] - y));
			if (path) {
				path.insert(seg1._index + 1, segment);
				res = this.getNext();
			} else {
				this._segment2 = segment;
				this._changed();
				res = new Curve(segment, seg2);
			}
		}
		return res;
	},

	splitAt: function(location) {
		var path = this._path;
		return path ? path.splitAt(location) : null;
	},

	splitAtTime: function(time) {
		return this.splitAt(this.getLocationAtTime(time));
	},

	divide: function(offset, isTime) {
		return this.divideAtTime(offset === undefined ? 0.5 : isTime ? offset
				: this.getTimeAt(offset));
	},

	split: function(offset, isTime) {
		return this.splitAtTime(offset === undefined ? 0.5 : isTime ? offset
				: this.getTimeAt(offset));
	},

	reversed: function() {
		return new Curve(this._segment2.reversed(), this._segment1.reversed());
	},

	clearHandles: function() {
		this._segment1._handleOut._set(0, 0);
		this._segment2._handleIn._set(0, 0);
	},

statics: {
	getValues: function(segment1, segment2, matrix, straight) {
		var p1 = segment1._point,
			h1 = segment1._handleOut,
			h2 = segment2._handleIn,
			p2 = segment2._point,
			x1 = p1.x, y1 = p1.y,
			x2 = p2.x, y2 = p2.y,
			values = straight
				? [ x1, y1, x1, y1, x2, y2, x2, y2 ]
				: [
					x1, y1,
					x1 + h1._x, y1 + h1._y,
					x2 + h2._x, y2 + h2._y,
					x2, y2
				];
		if (matrix)
			matrix._transformCoordinates(values, values, 4);
		return values;
	},

	subdivide: function(v, t) {
		var x0 = v[0], y0 = v[1],
			x1 = v[2], y1 = v[3],
			x2 = v[4], y2 = v[5],
			x3 = v[6], y3 = v[7];
		if (t === undefined)
			t = 0.5;
		var u = 1 - t,
			x4 = u * x0 + t * x1, y4 = u * y0 + t * y1,
			x5 = u * x1 + t * x2, y5 = u * y1 + t * y2,
			x6 = u * x2 + t * x3, y6 = u * y2 + t * y3,
			x7 = u * x4 + t * x5, y7 = u * y4 + t * y5,
			x8 = u * x5 + t * x6, y8 = u * y5 + t * y6,
			x9 = u * x7 + t * x8, y9 = u * y7 + t * y8;
		return [
			[x0, y0, x4, y4, x7, y7, x9, y9],
			[x9, y9, x8, y8, x6, y6, x3, y3]
		];
	},

	getMonoCurves: function(v, dir) {
		var curves = [],
			io = dir ? 0 : 1,
			o0 = v[io + 0],
			o1 = v[io + 2],
			o2 = v[io + 4],
			o3 = v[io + 6];
		if ((o0 >= o1) === (o1 >= o2) && (o1 >= o2) === (o2 >= o3)
				|| Curve.isStraight(v)) {
			curves.push(v);
		} else {
			var a = 3 * (o1 - o2) - o0 + o3,
				b = 2 * (o0 + o2) - 4 * o1,
				c = o1 - o0,
				tMin = 1e-8,
				tMax = 1 - tMin,
				roots = [],
				n = Numerical.solveQuadratic(a, b, c, roots, tMin, tMax);
			if (!n) {
				curves.push(v);
			} else {
				roots.sort();
				var t = roots[0],
					parts = Curve.subdivide(v, t);
				curves.push(parts[0]);
				if (n > 1) {
					t = (roots[1] - t) / (1 - t);
					parts = Curve.subdivide(parts[1], t);
					curves.push(parts[0]);
				}
				curves.push(parts[1]);
			}
		}
		return curves;
	},

	solveCubic: function (v, coord, val, roots, min, max) {
		var v0 = v[coord],
			v1 = v[coord + 2],
			v2 = v[coord + 4],
			v3 = v[coord + 6],
			res = 0;
		if (  !(v0 < val && v3 < val && v1 < val && v2 < val ||
				v0 > val && v3 > val && v1 > val && v2 > val)) {
			var c = 3 * (v1 - v0),
				b = 3 * (v2 - v1) - c,
				a = v3 - v0 - c - b;
			res = Numerical.solveCubic(a, b, c, v0 - val, roots, min, max);
		}
		return res;
	},

	getTimeOf: function(v, point) {
		var p0 = new Point(v[0], v[1]),
			p3 = new Point(v[6], v[7]),
			epsilon = 1e-12,
			geomEpsilon = 1e-7,
			t = point.isClose(p0, epsilon) ? 0
			  : point.isClose(p3, epsilon) ? 1
			  : null;
		if (t === null) {
			var coords = [point.x, point.y],
				roots = [];
			for (var c = 0; c < 2; c++) {
				var count = Curve.solveCubic(v, c, coords[c], roots, 0, 1);
				for (var i = 0; i < count; i++) {
					var u = roots[i];
					if (point.isClose(Curve.getPoint(v, u), geomEpsilon))
						return u;
				}
			}
		}
		return point.isClose(p0, geomEpsilon) ? 0
			 : point.isClose(p3, geomEpsilon) ? 1
			 : null;
	},

	getNearestTime: function(v, point) {
		if (Curve.isStraight(v)) {
			var x0 = v[0], y0 = v[1],
				x3 = v[6], y3 = v[7],
				vx = x3 - x0, vy = y3 - y0,
				det = vx * vx + vy * vy;
			if (det === 0)
				return 0;
			var u = ((point.x - x0) * vx + (point.y - y0) * vy) / det;
			return u < 1e-12 ? 0
				 : u > 0.999999999999 ? 1
				 : Curve.getTimeOf(v,
					new Point(x0 + u * vx, y0 + u * vy));
		}

		var count = 100,
			minDist = Infinity,
			minT = 0;

		function refine(t) {
			if (t >= 0 && t <= 1) {
				var dist = point.getDistance(Curve.getPoint(v, t), true);
				if (dist < minDist) {
					minDist = dist;
					minT = t;
					return true;
				}
			}
		}

		for (var i = 0; i <= count; i++)
			refine(i / count);

		var step = 1 / (count * 2);
		while (step > 1e-8) {
			if (!refine(minT - step) && !refine(minT + step))
				step /= 2;
		}
		return minT;
	},

	getPart: function(v, from, to) {
		var flip = from > to;
		if (flip) {
			var tmp = from;
			from = to;
			to = tmp;
		}
		if (from > 0)
			v = Curve.subdivide(v, from)[1];
		if (to < 1)
			v = Curve.subdivide(v, (to - from) / (1 - from))[0];
		return flip
				? [v[6], v[7], v[4], v[5], v[2], v[3], v[0], v[1]]
				: v;
	},

	isFlatEnough: function(v, flatness) {
		var x0 = v[0], y0 = v[1],
			x1 = v[2], y1 = v[3],
			x2 = v[4], y2 = v[5],
			x3 = v[6], y3 = v[7],
			ux = 3 * x1 - 2 * x0 - x3,
			uy = 3 * y1 - 2 * y0 - y3,
			vx = 3 * x2 - 2 * x3 - x0,
			vy = 3 * y2 - 2 * y3 - y0;
		return Math.max(ux * ux, vx * vx) + Math.max(uy * uy, vy * vy)
				<= 16 * flatness * flatness;
	},

	getArea: function(v) {
		var x0 = v[0], y0 = v[1],
			x1 = v[2], y1 = v[3],
			x2 = v[4], y2 = v[5],
			x3 = v[6], y3 = v[7];
		return 3 * ((y3 - y0) * (x1 + x2) - (x3 - x0) * (y1 + y2)
				+ y1 * (x0 - x2) - x1 * (y0 - y2)
				+ y3 * (x2 + x0 / 3) - x3 * (y2 + y0 / 3)) / 20;
	},

	getBounds: function(v) {
		var min = v.slice(0, 2),
			max = min.slice(),
			roots = [0, 0];
		for (var i = 0; i < 2; i++)
			Curve._addBounds(v[i], v[i + 2], v[i + 4], v[i + 6],
					i, 0, min, max, roots);
		return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
	},

	_addBounds: function(v0, v1, v2, v3, coord, padding, min, max, roots) {
		function add(value, padding) {
			var left = value - padding,
				right = value + padding;
			if (left < min[coord])
				min[coord] = left;
			if (right > max[coord])
				max[coord] = right;
		}

		padding /= 2;
		var minPad = min[coord] - padding,
			maxPad = max[coord] + padding;
		if (    v0 < minPad || v1 < minPad || v2 < minPad || v3 < minPad ||
				v0 > maxPad || v1 > maxPad || v2 > maxPad || v3 > maxPad) {
			if (v1 < v0 != v1 < v3 && v2 < v0 != v2 < v3) {
				add(v0, padding);
				add(v3, padding);
			} else {
				var a = 3 * (v1 - v2) - v0 + v3,
					b = 2 * (v0 + v2) - 4 * v1,
					c = v1 - v0,
					count = Numerical.solveQuadratic(a, b, c, roots),
					tMin = 1e-8,
					tMax = 1 - tMin;
				add(v3, 0);
				for (var i = 0; i < count; i++) {
					var t = roots[i],
						u = 1 - t;
					if (tMin <= t && t <= tMax)
						add(u * u * u * v0
							+ 3 * u * u * t * v1
							+ 3 * u * t * t * v2
							+ t * t * t * v3,
							padding);
				}
			}
		}
	}
}}, Base.each(
	['getBounds', 'getStrokeBounds', 'getHandleBounds'],
	function(name) {
		this[name] = function() {
			if (!this._bounds)
				this._bounds = {};
			var bounds = this._bounds[name];
			if (!bounds) {
				bounds = this._bounds[name] = Path[name](
						[this._segment1, this._segment2], false, this._path);
			}
			return bounds.clone();
		};
	},
{

}), Base.each({
	isStraight: function(p1, h1, h2, p2) {
		if (h1.isZero() && h2.isZero()) {
			return true;
		} else {
			var v = p2.subtract(p1);
			if (v.isZero()) {
				return false;
			} else if (v.isCollinear(h1) && v.isCollinear(h2)) {
				var l = new Line(p1, p2),
					epsilon = 1e-7;
				if (l.getDistance(p1.add(h1)) < epsilon &&
					l.getDistance(p2.add(h2)) < epsilon) {
					var div = v.dot(v),
						s1 = v.dot(h1) / div,
						s2 = v.dot(h2) / div;
					return s1 >= 0 && s1 <= 1 && s2 <= 0 && s2 >= -1;
				}
			}
		}
		return false;
	},

	isLinear: function(p1, h1, h2, p2) {
		var third = p2.subtract(p1).divide(3);
		return h1.equals(third) && h2.negate().equals(third);
	}
}, function(test, name) {
	this[name] = function(epsilon) {
		var seg1 = this._segment1,
			seg2 = this._segment2;
		return test(seg1._point, seg1._handleOut, seg2._handleIn, seg2._point,
				epsilon);
	};

	this.statics[name] = function(v, epsilon) {
		var x0 = v[0], y0 = v[1],
			x3 = v[6], y3 = v[7];
		return test(
				new Point(x0, y0),
				new Point(v[2] - x0, v[3] - y0),
				new Point(v[4] - x3, v[5] - y3),
				new Point(x3, y3), epsilon);
	};
}, {
	statics: {},

	hasHandles: function() {
		return !this._segment1._handleOut.isZero()
				|| !this._segment2._handleIn.isZero();
	},

	hasLength: function(epsilon) {
		return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles())
				&& this.getLength() > (epsilon || 0);
	},

	isCollinear: function(curve) {
		return curve && this.isStraight() && curve.isStraight()
				&& this.getLine().isCollinear(curve.getLine());
	},

	isHorizontal: function() {
		return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).y)
				< 1e-8;
	},

	isVertical: function() {
		return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).x)
				< 1e-8;
	}
}), {
	beans: false,

	getLocationAt: function(offset, _isTime) {
		return this.getLocationAtTime(
				_isTime ? offset : this.getTimeAt(offset));
	},

	getLocationAtTime: function(t) {
		return t != null && t >= 0 && t <= 1
				? new CurveLocation(this, t)
				: null;
	},

	getTimeAt: function(offset, start) {
		return Curve.getTimeAt(this.getValues(), offset, start);
	},

	getParameterAt: '#getTimeAt',

	getOffsetAtTime: function(t) {
		return this.getPartLength(0, t);
	},

	getLocationOf: function() {
		return this.getLocationAtTime(this.getTimeOf(Point.read(arguments)));
	},

	getOffsetOf: function() {
		var loc = this.getLocationOf.apply(this, arguments);
		return loc ? loc.getOffset() : null;
	},

	getTimeOf: function() {
		return Curve.getTimeOf(this.getValues(), Point.read(arguments));
	},

	getParameterOf: '#getTimeOf',

	getNearestLocation: function() {
		var point = Point.read(arguments),
			values = this.getValues(),
			t = Curve.getNearestTime(values, point),
			pt = Curve.getPoint(values, t);
		return new CurveLocation(this, t, pt, null, point.getDistance(pt));
	},

	getNearestPoint: function() {
		var loc = this.getNearestLocation.apply(this, arguments);
		return loc ? loc.getPoint() : loc;
	}

},
new function() {
	var methods = ['getPoint', 'getTangent', 'getNormal', 'getWeightedTangent',
		'getWeightedNormal', 'getCurvature'];
	return Base.each(methods,
		function(name) {
			this[name + 'At'] = function(location, _isTime) {
				var values = this.getValues();
				return Curve[name](values, _isTime ? location
						: Curve.getTimeAt(values, location));
			};

			this[name + 'AtTime'] = function(time) {
				return Curve[name](this.getValues(), time);
			};
		}, {
			statics: {
				_evaluateMethods: methods
			}
		}
	);
},
new function() {

	function getLengthIntegrand(v) {
		var x0 = v[0], y0 = v[1],
			x1 = v[2], y1 = v[3],
			x2 = v[4], y2 = v[5],
			x3 = v[6], y3 = v[7],

			ax = 9 * (x1 - x2) + 3 * (x3 - x0),
			bx = 6 * (x0 + x2) - 12 * x1,
			cx = 3 * (x1 - x0),

			ay = 9 * (y1 - y2) + 3 * (y3 - y0),
			by = 6 * (y0 + y2) - 12 * y1,
			cy = 3 * (y1 - y0);

		return function(t) {
			var dx = (ax * t + bx) * t + cx,
				dy = (ay * t + by) * t + cy;
			return Math.sqrt(dx * dx + dy * dy);
		};
	}

	function getIterations(a, b) {
		return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
	}

	function evaluate(v, t, type, normalized) {
		if (t == null || t < 0 || t > 1)
			return null;
		var x0 = v[0], y0 = v[1],
			x1 = v[2], y1 = v[3],
			x2 = v[4], y2 = v[5],
			x3 = v[6], y3 = v[7],
			isZero = Numerical.isZero;
		if (isZero(x1 - x0) && isZero(y1 - y0)) {
			x1 = x0;
			y1 = y0;
		}
		if (isZero(x2 - x3) && isZero(y2 - y3)) {
			x2 = x3;
			y2 = y3;
		}
		var cx = 3 * (x1 - x0),
			bx = 3 * (x2 - x1) - cx,
			ax = x3 - x0 - cx - bx,
			cy = 3 * (y1 - y0),
			by = 3 * (y2 - y1) - cy,
			ay = y3 - y0 - cy - by,
			x, y;
		if (type === 0) {
			x = t === 0 ? x0 : t === 1 ? x3
					: ((ax * t + bx) * t + cx) * t + x0;
			y = t === 0 ? y0 : t === 1 ? y3
					: ((ay * t + by) * t + cy) * t + y0;
		} else {
			var tMin = 1e-8,
				tMax = 1 - tMin;
			if (t < tMin) {
				x = cx;
				y = cy;
			} else if (t > tMax) {
				x = 3 * (x3 - x2);
				y = 3 * (y3 - y2);
			} else {
				x = (3 * ax * t + 2 * bx) * t + cx;
				y = (3 * ay * t + 2 * by) * t + cy;
			}
			if (normalized) {
				if (x === 0 && y === 0 && (t < tMin || t > tMax)) {
					x = x2 - x1;
					y = y2 - y1;
				}
				var len = Math.sqrt(x * x + y * y);
				if (len) {
					x /= len;
					y /= len;
				}
			}
			if (type === 3) {
				var x2 = 6 * ax * t + 2 * bx,
					y2 = 6 * ay * t + 2 * by,
					d = Math.pow(x * x + y * y, 3 / 2);
				x = d !== 0 ? (x * y2 - y * x2) / d : 0;
				y = 0;
			}
		}
		return type === 2 ? new Point(y, -x) : new Point(x, y);
	}

	return { statics: {

		classify: function(v) {

			var x0 = v[0], y0 = v[1],
				x1 = v[2], y1 = v[3],
				x2 = v[4], y2 = v[5],
				x3 = v[6], y3 = v[7],
				a1 = x0 * (y3 - y2) + y0 * (x2 - x3) + x3 * y2 - y3 * x2,
				a2 = x1 * (y0 - y3) + y1 * (x3 - x0) + x0 * y3 - y0 * x3,
				a3 = x2 * (y1 - y0) + y2 * (x0 - x1) + x1 * y0 - y1 * x0,
				d3 = 3 * a3,
				d2 = d3 - a2,
				d1 = d2 - a2 + a1,
				l = Math.sqrt(d1 * d1 + d2 * d2 + d3 * d3),
				s = l !== 0 ? 1 / l : 0,
				isZero = Numerical.isZero,
				serpentine = 'serpentine';
			d1 *= s;
			d2 *= s;
			d3 *= s;

			function type(type, t1, t2) {
				var hasRoots = t1 !== undefined,
					t1Ok = hasRoots && t1 > 0 && t1 < 1,
					t2Ok = hasRoots && t2 > 0 && t2 < 1;
				if (hasRoots && (!(t1Ok || t2Ok)
						|| type === 'loop' && !(t1Ok && t2Ok))) {
					type = 'arch';
					t1Ok = t2Ok = false;
				}
				return {
					type: type,
					roots: t1Ok || t2Ok
							? t1Ok && t2Ok
								? t1 < t2 ? [t1, t2] : [t2, t1]
								: [t1Ok ? t1 : t2]
							: null
				};
			}

			if (isZero(d1)) {
				return isZero(d2)
						? type(isZero(d3) ? 'line' : 'quadratic')
						: type(serpentine, d3 / (3 * d2));
			}
			var d = 3 * d2 * d2 - 4 * d1 * d3;
			if (isZero(d)) {
				return type('cusp', d2 / (2 * d1));
			}
			var f1 = d > 0 ? Math.sqrt(d / 3) : Math.sqrt(-d),
				f2 = 2 * d1;
			return type(d > 0 ? serpentine : 'loop',
					(d2 + f1) / f2,
					(d2 - f1) / f2);
		},

		getLength: function(v, a, b, ds) {
			if (a === undefined)
				a = 0;
			if (b === undefined)
				b = 1;
			if (Curve.isStraight(v)) {
				var c = v;
				if (b < 1) {
					c = Curve.subdivide(c, b)[0];
					a /= b;
				}
				if (a > 0) {
					c = Curve.subdivide(c, a)[1];
				}
				var dx = c[6] - c[0],
					dy = c[7] - c[1];
				return Math.sqrt(dx * dx + dy * dy);
			}
			return Numerical.integrate(ds || getLengthIntegrand(v), a, b,
					getIterations(a, b));
		},

		getTimeAt: function(v, offset, start) {
			if (start === undefined)
				start = offset < 0 ? 1 : 0;
			if (offset === 0)
				return start;
			var abs = Math.abs,
				epsilon = 1e-12,
				forward = offset > 0,
				a = forward ? start : 0,
				b = forward ? 1 : start,
				ds = getLengthIntegrand(v),
				rangeLength = Curve.getLength(v, a, b, ds),
				diff = abs(offset) - rangeLength;
			if (abs(diff) < epsilon) {
				return forward ? b : a;
			} else if (diff > epsilon) {
				return null;
			}
			var guess = offset / rangeLength,
				length = 0;
			function f(t) {
				length += Numerical.integrate(ds, start, t,
						getIterations(start, t));
				start = t;
				return length - offset;
			}
			return Numerical.findRoot(f, ds, start + guess, a, b, 32,
					1e-12);
		},

		getPoint: function(v, t) {
			return evaluate(v, t, 0, false);
		},

		getTangent: function(v, t) {
			return evaluate(v, t, 1, true);
		},

		getWeightedTangent: function(v, t) {
			return evaluate(v, t, 1, false);
		},

		getNormal: function(v, t) {
			return evaluate(v, t, 2, true);
		},

		getWeightedNormal: function(v, t) {
			return evaluate(v, t, 2, false);
		},

		getCurvature: function(v, t) {
			return evaluate(v, t, 3, false).x;
		},

		getPeaks: function(v) {
			var x0 = v[0], y0 = v[1],
				x1 = v[2], y1 = v[3],
				x2 = v[4], y2 = v[5],
				x3 = v[6], y3 = v[7],
				ax =     -x0 + 3 * x1 - 3 * x2 + x3,
				bx =  3 * x0 - 6 * x1 + 3 * x2,
				cx = -3 * x0 + 3 * x1,
				ay =     -y0 + 3 * y1 - 3 * y2 + y3,
				by =  3 * y0 - 6 * y1 + 3 * y2,
				cy = -3 * y0 + 3 * y1,
				tMin = 1e-8,
				tMax = 1 - tMin,
				roots = [];
			Numerical.solveCubic(
					9 * (ax * ax + ay * ay),
					9 * (ax * bx + by * ay),
					2 * (bx * bx + by * by) + 3 * (cx * ax + cy * ay),
					(cx * bx + by * cy),
					roots, tMin, tMax);
			return roots.sort();
		}
	}};
},
new function() {

	function addLocation(locations, include, c1, t1, c2, t2, overlap) {
		var excludeStart = !overlap && c1.getPrevious() === c2,
			excludeEnd = !overlap && c1 !== c2 && c1.getNext() === c2,
			tMin = 1e-8,
			tMax = 1 - tMin;
		if (t1 !== null && t1 >= (excludeStart ? tMin : 0) &&
			t1 <= (excludeEnd ? tMax : 1)) {
			if (t2 !== null && t2 >= (excludeEnd ? tMin : 0) &&
				t2 <= (excludeStart ? tMax : 1)) {
				var loc1 = new CurveLocation(c1, t1, null, overlap),
					loc2 = new CurveLocation(c2, t2, null, overlap);
				loc1._intersection = loc2;
				loc2._intersection = loc1;
				if (!include || include(loc1)) {
					CurveLocation.insert(locations, loc1, true);
				}
			}
		}
	}

	function addCurveIntersections(v1, v2, c1, c2, locations, include, flip,
			recursion, calls, tMin, tMax, uMin, uMax) {
		if (++calls >= 4096 || ++recursion >= 40)
			return calls;
		var fatLineEpsilon = 1e-9,
			q0x = v2[0], q0y = v2[1], q3x = v2[6], q3y = v2[7],
			getSignedDistance = Line.getSignedDistance,
			d1 = getSignedDistance(q0x, q0y, q3x, q3y, v2[2], v2[3]),
			d2 = getSignedDistance(q0x, q0y, q3x, q3y, v2[4], v2[5]),
			factor = d1 * d2 > 0 ? 3 / 4 : 4 / 9,
			dMin = factor * Math.min(0, d1, d2),
			dMax = factor * Math.max(0, d1, d2),
			dp0 = getSignedDistance(q0x, q0y, q3x, q3y, v1[0], v1[1]),
			dp1 = getSignedDistance(q0x, q0y, q3x, q3y, v1[2], v1[3]),
			dp2 = getSignedDistance(q0x, q0y, q3x, q3y, v1[4], v1[5]),
			dp3 = getSignedDistance(q0x, q0y, q3x, q3y, v1[6], v1[7]),
			hull = getConvexHull(dp0, dp1, dp2, dp3),
			top = hull[0],
			bottom = hull[1],
			tMinClip,
			tMaxClip;
		if (d1 === 0 && d2 === 0
				&& dp0 === 0 && dp1 === 0 && dp2 === 0 && dp3 === 0
			|| (tMinClip = clipConvexHull(top, bottom, dMin, dMax)) == null
			|| (tMaxClip = clipConvexHull(top.reverse(), bottom.reverse(),
				dMin, dMax)) == null)
			return calls;
		var tMinNew = tMin + (tMax - tMin) * tMinClip,
			tMaxNew = tMin + (tMax - tMin) * tMaxClip;
		if (Math.max(uMax - uMin, tMaxNew - tMinNew) < fatLineEpsilon) {
			var t = (tMinNew + tMaxNew) / 2,
				u = (uMin + uMax) / 2;
			addLocation(locations, include,
					flip ? c2 : c1, flip ? u : t,
					flip ? c1 : c2, flip ? t : u);
		} else {
			v1 = Curve.getPart(v1, tMinClip, tMaxClip);
			if (tMaxClip - tMinClip > 0.8) {
				if (tMaxNew - tMinNew > uMax - uMin) {
					var parts = Curve.subdivide(v1, 0.5),
						t = (tMinNew + tMaxNew) / 2;
					calls = addCurveIntersections(
							v2, parts[0], c2, c1, locations, include, !flip,
							recursion, calls, uMin, uMax, tMinNew, t);
					calls = addCurveIntersections(
							v2, parts[1], c2, c1, locations, include, !flip,
							recursion, calls, uMin, uMax, t, tMaxNew);
				} else {
					var parts = Curve.subdivide(v2, 0.5),
						u = (uMin + uMax) / 2;
					calls = addCurveIntersections(
							parts[0], v1, c2, c1, locations, include, !flip,
							recursion, calls, uMin, u, tMinNew, tMaxNew);
					calls = addCurveIntersections(
							parts[1], v1, c2, c1, locations, include, !flip,
							recursion, calls, u, uMax, tMinNew, tMaxNew);
				}
			} else {
				if (uMax - uMin >= fatLineEpsilon) {
					calls = addCurveIntersections(
							v2, v1, c2, c1, locations, include, !flip,
							recursion, calls, uMin, uMax, tMinNew, tMaxNew);
				} else {
					calls = addCurveIntersections(
							v1, v2, c1, c2, locations, include, flip,
							recursion, calls, tMinNew, tMaxNew, uMin, uMax);
				}
			}
		}
		return calls;
	}

	function getConvexHull(dq0, dq1, dq2, dq3) {
		var p0 = [ 0, dq0 ],
			p1 = [ 1 / 3, dq1 ],
			p2 = [ 2 / 3, dq2 ],
			p3 = [ 1, dq3 ],
			dist1 = dq1 - (2 * dq0 + dq3) / 3,
			dist2 = dq2 - (dq0 + 2 * dq3) / 3,
			hull;
		if (dist1 * dist2 < 0) {
			hull = [[p0, p1, p3], [p0, p2, p3]];
		} else {
			var distRatio = dist1 / dist2;
			hull = [
				distRatio >= 2 ? [p0, p1, p3]
				: distRatio <= 0.5 ? [p0, p2, p3]
				: [p0, p1, p2, p3],
				[p0, p3]
			];
		}
		return (dist1 || dist2) < 0 ? hull.reverse() : hull;
	}

	function clipConvexHull(hullTop, hullBottom, dMin, dMax) {
		if (hullTop[0][1] < dMin) {
			return clipConvexHullPart(hullTop, true, dMin);
		} else if (hullBottom[0][1] > dMax) {
			return clipConvexHullPart(hullBottom, false, dMax);
		} else {
			return hullTop[0][0];
		}
	}

	function clipConvexHullPart(part, top, threshold) {
		var px = part[0][0],
			py = part[0][1];
		for (var i = 1, l = part.length; i < l; i++) {
			var qx = part[i][0],
				qy = part[i][1];
			if (top ? qy >= threshold : qy <= threshold) {
				return qy === threshold ? qx
						: px + (threshold - py) * (qx - px) / (qy - py);
			}
			px = qx;
			py = qy;
		}
		return null;
	}

	function getCurveLineIntersections(v, px, py, vx, vy) {
		var isZero = Numerical.isZero;
		if (isZero(vx) && isZero(vy)) {
			var t = Curve.getTimeOf(v, new Point(px, py));
			return t === null ? [] : [t];
		}
		var angle = Math.atan2(-vy, vx),
			sin = Math.sin(angle),
			cos = Math.cos(angle),
			rv = [],
			roots = [];
		for (var i = 0; i < 8; i += 2) {
			var x = v[i] - px,
				y = v[i + 1] - py;
			rv.push(
				x * cos - y * sin,
				x * sin + y * cos);
		}
		Curve.solveCubic(rv, 1, 0, roots, 0, 1);
		return roots;
	}

	function addCurveLineIntersections(v1, v2, c1, c2, locations, include,
			flip) {
		var x1 = v2[0], y1 = v2[1],
			x2 = v2[6], y2 = v2[7],
			roots = getCurveLineIntersections(v1, x1, y1, x2 - x1, y2 - y1);
		for (var i = 0, l = roots.length; i < l; i++) {
			var t1 = roots[i],
				p1 = Curve.getPoint(v1, t1),
				t2 = Curve.getTimeOf(v2, p1);
			if (t2 !== null) {
				addLocation(locations, include,
						flip ? c2 : c1, flip ? t2 : t1,
						flip ? c1 : c2, flip ? t1 : t2);
			}
		}
	}

	function addLineIntersection(v1, v2, c1, c2, locations, include) {
		var pt = Line.intersect(
				v1[0], v1[1], v1[6], v1[7],
				v2[0], v2[1], v2[6], v2[7]);
		if (pt) {
			addLocation(locations, include,
					c1, Curve.getTimeOf(v1, pt),
					c2, Curve.getTimeOf(v2, pt));
		}
	}

	function getCurveIntersections(v1, v2, c1, c2, locations, include) {
		var epsilon = 1e-12,
			min = Math.min,
			max = Math.max;

		if (max(v1[0], v1[2], v1[4], v1[6]) + epsilon >
			min(v2[0], v2[2], v2[4], v2[6]) &&
			min(v1[0], v1[2], v1[4], v1[6]) - epsilon <
			max(v2[0], v2[2], v2[4], v2[6]) &&
			max(v1[1], v1[3], v1[5], v1[7]) + epsilon >
			min(v2[1], v2[3], v2[5], v2[7]) &&
			min(v1[1], v1[3], v1[5], v1[7]) - epsilon <
			max(v2[1], v2[3], v2[5], v2[7])) {
			var overlaps = getOverlaps(v1, v2);
			if (overlaps) {
				for (var i = 0; i < 2; i++) {
					var overlap = overlaps[i];
					addLocation(locations, include,
							c1, overlap[0],
							c2, overlap[1], true);
				}
			} else {
				var straight1 = Curve.isStraight(v1),
					straight2 = Curve.isStraight(v2),
					straight = straight1 && straight2,
					flip = straight1 && !straight2,
					before = locations.length;
				(straight
					? addLineIntersection
					: straight1 || straight2
						? addCurveLineIntersections
						: addCurveIntersections)(
							flip ? v2 : v1, flip ? v1 : v2,
							flip ? c2 : c1, flip ? c1 : c2,
							locations, include, flip,
							0, 0, 0, 1, 0, 1);
				if (!straight || locations.length === before) {
					for (var i = 0; i < 4; i++) {
						var t1 = i >> 1,
							t2 = i & 1,
							i1 = t1 * 6,
							i2 = t2 * 6,
							p1 = new Point(v1[i1], v1[i1 + 1]),
							p2 = new Point(v2[i2], v2[i2 + 1]);
						if (p1.isClose(p2, epsilon)) {
							addLocation(locations, include,
									c1, t1,
									c2, t2);
						}
					}
				}
			}
		}
		return locations;
	}

	function getLoopIntersection(v1, c1, locations, include) {
		var info = Curve.classify(v1);
		if (info.type === 'loop') {
			var roots = info.roots;
			addLocation(locations, include,
					c1, roots[0],
					c1, roots[1]);
		}
	  return locations;
	}

	function getIntersections(curves1, curves2, include, matrix1, matrix2,
			_returnFirst) {
		var self = !curves2;
		if (self)
			curves2 = curves1;
		var length1 = curves1.length,
			length2 = curves2.length,
			values2 = [],
			arrays = [],
			locations,
			current;
		for (var i = 0; i < length2; i++)
			values2[i] = curves2[i].getValues(matrix2);
		for (var i = 0; i < length1; i++) {
			var curve1 = curves1[i],
				values1 = self ? values2[i] : curve1.getValues(matrix1),
				path1 = curve1.getPath();
			if (path1 !== current) {
				current = path1;
				locations = [];
				arrays.push(locations);
			}
			if (self) {
				getLoopIntersection(values1, curve1, locations, include);
			}
			for (var j = self ? i + 1 : 0; j < length2; j++) {
				if (_returnFirst && locations.length)
					return locations;
				getCurveIntersections(values1, values2[j], curve1, curves2[j],
						locations, include);
			}
		}
		locations = [];
		for (var i = 0, l = arrays.length; i < l; i++) {
			locations.push.apply(locations, arrays[i]);
		}
		return locations;
	}

	function getOverlaps(v1, v2) {

		function getSquaredLineLength(v) {
			var x = v[6] - v[0],
				y = v[7] - v[1];
			return x * x + y * y;
		}

		var abs = Math.abs,
			getDistance = Line.getDistance,
			timeEpsilon = 1e-8,
			geomEpsilon = 1e-7,
			straight1 = Curve.isStraight(v1),
			straight2 = Curve.isStraight(v2),
			straightBoth = straight1 && straight2,
			flip = getSquaredLineLength(v1) < getSquaredLineLength(v2),
			l1 = flip ? v2 : v1,
			l2 = flip ? v1 : v2,
			px = l1[0], py = l1[1],
			vx = l1[6] - px, vy = l1[7] - py;
		if (getDistance(px, py, vx, vy, l2[0], l2[1], true) < geomEpsilon &&
			getDistance(px, py, vx, vy, l2[6], l2[7], true) < geomEpsilon) {
			if (!straightBoth &&
				getDistance(px, py, vx, vy, l1[2], l1[3], true) < geomEpsilon &&
				getDistance(px, py, vx, vy, l1[4], l1[5], true) < geomEpsilon &&
				getDistance(px, py, vx, vy, l2[2], l2[3], true) < geomEpsilon &&
				getDistance(px, py, vx, vy, l2[4], l2[5], true) < geomEpsilon) {
				straight1 = straight2 = straightBoth = true;
			}
		} else if (straightBoth) {
			return null;
		}
		if (straight1 ^ straight2) {
			return null;
		}

		var v = [v1, v2],
			pairs = [];
		for (var i = 0; i < 4 && pairs.length < 2; i++) {
			var i1 = i & 1,
				i2 = i1 ^ 1,
				t1 = i >> 1,
				t2 = Curve.getTimeOf(v[i1], new Point(
					v[i2][t1 ? 6 : 0],
					v[i2][t1 ? 7 : 1]));
			if (t2 != null) {
				var pair = i1 ? [t1, t2] : [t2, t1];
				if (!pairs.length ||
					abs(pair[0] - pairs[0][0]) > timeEpsilon &&
					abs(pair[1] - pairs[0][1]) > timeEpsilon) {
					pairs.push(pair);
				}
			}
			if (i > 2 && !pairs.length)
				break;
		}
		if (pairs.length !== 2) {
			pairs = null;
		} else if (!straightBoth) {
			var o1 = Curve.getPart(v1, pairs[0][0], pairs[1][0]),
				o2 = Curve.getPart(v2, pairs[0][1], pairs[1][1]);
			if (abs(o2[2] - o1[2]) > geomEpsilon ||
				abs(o2[3] - o1[3]) > geomEpsilon ||
				abs(o2[4] - o1[4]) > geomEpsilon ||
				abs(o2[5] - o1[5]) > geomEpsilon)
				pairs = null;
		}
		return pairs;
	}

	return {
		getIntersections: function(curve) {
			var v1 = this.getValues(),
				v2 = curve && curve !== this && curve.getValues();
			return v2 ? getCurveIntersections(v1, v2, this, curve, [])
					  : getLoopIntersection(v1, this, []);
		},

		statics: {
			getOverlaps: getOverlaps,
			getIntersections: getIntersections,
			getCurveLineIntersections: getCurveLineIntersections
		}
	};
});

var CurveLocation = Base.extend({
	_class: 'CurveLocation',

	initialize: function CurveLocation(curve, time, point, _overlap, _distance) {
		if (time >= 0.99999999) {
			var next = curve.getNext();
			if (next) {
				time = 0;
				curve = next;
			}
		}
		this._setCurve(curve);
		this._time = time;
		this._point = point || curve.getPointAtTime(time);
		this._overlap = _overlap;
		this._distance = _distance;
		this._intersection = this._next = this._previous = null;
	},

	_setCurve: function(curve) {
		var path = curve._path;
		this._path = path;
		this._version = path ? path._version : 0;
		this._curve = curve;
		this._segment = null;
		this._segment1 = curve._segment1;
		this._segment2 = curve._segment2;
	},

	_setSegment: function(segment) {
		this._setCurve(segment.getCurve());
		this._segment = segment;
		this._time = segment === this._segment1 ? 0 : 1;
		this._point = segment._point.clone();
	},

	getSegment: function() {
		var segment = this._segment;
		if (!segment) {
			var curve = this.getCurve(),
				time = this.getTime();
			if (time === 0) {
				segment = curve._segment1;
			} else if (time === 1) {
				segment = curve._segment2;
			} else if (time != null) {
				segment = curve.getPartLength(0, time)
					< curve.getPartLength(time, 1)
						? curve._segment1
						: curve._segment2;
			}
			this._segment = segment;
		}
		return segment;
	},

	getCurve: function() {
		var path = this._path,
			that = this;
		if (path && path._version !== this._version) {
			this._time = this._offset = this._curveOffset = this._curve = null;
		}

		function trySegment(segment) {
			var curve = segment && segment.getCurve();
			if (curve && (that._time = curve.getTimeOf(that._point)) != null) {
				that._setCurve(curve);
				return curve;
			}
		}

		return this._curve
			|| trySegment(this._segment)
			|| trySegment(this._segment1)
			|| trySegment(this._segment2.getPrevious());
	},

	getPath: function() {
		var curve = this.getCurve();
		return curve && curve._path;
	},

	getIndex: function() {
		var curve = this.getCurve();
		return curve && curve.getIndex();
	},

	getTime: function() {
		var curve = this.getCurve(),
			time = this._time;
		return curve && time == null
			? this._time = curve.getTimeOf(this._point)
			: time;
	},

	getParameter: '#getTime',

	getPoint: function() {
		return this._point;
	},

	getOffset: function() {
		var offset = this._offset;
		if (offset == null) {
			offset = 0;
			var path = this.getPath(),
				index = this.getIndex();
			if (path && index != null) {
				var curves = path.getCurves();
				for (var i = 0; i < index; i++)
					offset += curves[i].getLength();
			}
			this._offset = offset += this.getCurveOffset();
		}
		return offset;
	},

	getCurveOffset: function() {
		var offset = this._curveOffset;
		if (offset == null) {
			var curve = this.getCurve(),
				time = this.getTime();
			this._curveOffset = offset = time != null && curve
					&& curve.getPartLength(0, time);
		}
		return offset;
	},

	getIntersection: function() {
		return this._intersection;
	},

	getDistance: function() {
		return this._distance;
	},

	divide: function() {
		var curve = this.getCurve(),
			res = curve && curve.divideAtTime(this.getTime());
		if (res) {
			this._setSegment(res._segment1);
		}
		return res;
	},

	split: function() {
		var curve = this.getCurve(),
			path = curve._path,
			res = curve && curve.splitAtTime(this.getTime());
		if (res) {
			this._setSegment(path.getLastSegment());
		}
		return  res;
	},

	equals: function(loc, _ignoreOther) {
		var res = this === loc;
		if (!res && loc instanceof CurveLocation) {
			var c1 = this.getCurve(),
				c2 = loc.getCurve(),
				p1 = c1._path,
				p2 = c2._path;
			if (p1 === p2) {
				var abs = Math.abs,
					epsilon = 1e-7,
					diff = abs(this.getOffset() - loc.getOffset()),
					i1 = !_ignoreOther && this._intersection,
					i2 = !_ignoreOther && loc._intersection;
				res = (diff < epsilon
						|| p1 && abs(p1.getLength() - diff) < epsilon)
					&& (!i1 && !i2 || i1 && i2 && i1.equals(i2, true));
			}
		}
		return res;
	},

	toString: function() {
		var parts = [],
			point = this.getPoint(),
			f = Formatter.instance;
		if (point)
			parts.push('point: ' + point);
		var index = this.getIndex();
		if (index != null)
			parts.push('index: ' + index);
		var time = this.getTime();
		if (time != null)
			parts.push('time: ' + f.number(time));
		if (this._distance != null)
			parts.push('distance: ' + f.number(this._distance));
		return '{ ' + parts.join(', ') + ' }';
	},

	isTouching: function() {
		var inter = this._intersection;
		if (inter && this.getTangent().isCollinear(inter.getTangent())) {
			var curve1 = this.getCurve(),
				curve2 = inter.getCurve();
			return !(curve1.isStraight() && curve2.isStraight()
					&& curve1.getLine().intersect(curve2.getLine()));
		}
		return false;
	},

	isCrossing: function() {
		var inter = this._intersection;
		if (!inter)
			return false;
		var t1 = this.getTime(),
			t2 = inter.getTime(),
			tMin = 1e-8,
			tMax = 1 - tMin,
			t1Inside = t1 >= tMin && t1 <= tMax,
			t2Inside = t2 >= tMin && t2 <= tMax;
		if (t1Inside && t2Inside)
			return !this.isTouching();
		var c2 = this.getCurve(),
			c1 = t1 < tMin ? c2.getPrevious() : c2,
			c4 = inter.getCurve(),
			c3 = t2 < tMin ? c4.getPrevious() : c4;
		if (t1 > tMax)
			c2 = c2.getNext();
		if (t2 > tMax)
			c4 = c4.getNext();
		if (!c1 || !c2 || !c3 || !c4)
			return false;

		var offsets = [];

		function addOffsets(curve, end) {
			var v = curve.getValues(),
				roots = Curve.classify(v).roots || Curve.getPeaks(v),
				count = roots.length,
				t = end && count > 1 ? roots[count - 1]
						: count > 0 ? roots[0]
						: 0.5;
			offsets.push(Curve.getLength(v, end ? t : 0, end ? 1 : t) / 2);
		}

		function isInRange(angle, min, max) {
			return min < max
					? angle > min && angle < max
					: angle > min || angle < max;
		}

		if (!t1Inside) {
			addOffsets(c1, true);
			addOffsets(c2, false);
		}
		if (!t2Inside) {
			addOffsets(c3, true);
			addOffsets(c4, false);
		}
		var pt = this.getPoint(),
			offset = Math.min.apply(Math, offsets),
			v2 = t1Inside ? c2.getTangentAtTime(t1)
					: c2.getPointAt(offset).subtract(pt),
			v1 = t1Inside ? v2.negate()
					: c1.getPointAt(-offset).subtract(pt),
			v4 = t2Inside ? c4.getTangentAtTime(t2)
					: c4.getPointAt(offset).subtract(pt),
			v3 = t2Inside ? v4.negate()
					: c3.getPointAt(-offset).subtract(pt),
			a1 = v1.getAngle(),
			a2 = v2.getAngle(),
			a3 = v3.getAngle(),
			a4 = v4.getAngle();
		return !!(t1Inside
				? (isInRange(a1, a3, a4) ^ isInRange(a2, a3, a4)) &&
				  (isInRange(a1, a4, a3) ^ isInRange(a2, a4, a3))
				: (isInRange(a3, a1, a2) ^ isInRange(a4, a1, a2)) &&
				  (isInRange(a3, a2, a1) ^ isInRange(a4, a2, a1)));
	},

	hasOverlap: function() {
		return !!this._overlap;
	}
}, Base.each(Curve._evaluateMethods, function(name) {
	var get = name + 'At';
	this[name] = function() {
		var curve = this.getCurve(),
			time = this.getTime();
		return time != null && curve && curve[get](time, true);
	};
}, {
	preserve: true
}),
new function() {

	function insert(locations, loc, merge) {
		var length = locations.length,
			l = 0,
			r = length - 1;

		function search(index, dir) {
			for (var i = index + dir; i >= -1 && i <= length; i += dir) {
				var loc2 = locations[((i % length) + length) % length];
				if (!loc.getPoint().isClose(loc2.getPoint(),
						1e-7))
					break;
				if (loc.equals(loc2))
					return loc2;
			}
			return null;
		}

		while (l <= r) {
			var m = (l + r) >>> 1,
				loc2 = locations[m],
				found;
			if (merge && (found = loc.equals(loc2) ? loc2
					: (search(m, -1) || search(m, 1)))) {
				if (loc._overlap) {
					found._overlap = found._intersection._overlap = true;
				}
				return found;
			}
		var path1 = loc.getPath(),
			path2 = loc2.getPath(),
			diff = path1 !== path2
				? path1._id - path2._id
				: (loc.getIndex() + loc.getTime())
				- (loc2.getIndex() + loc2.getTime());
			if (diff < 0) {
				r = m - 1;
			} else {
				l = m + 1;
			}
		}
		locations.splice(l, 0, loc);
		return loc;
	}

	return { statics: {
		insert: insert,

		expand: function(locations) {
			var expanded = locations.slice();
			for (var i = locations.length - 1; i >= 0; i--) {
				insert(expanded, locations[i]._intersection, false);
			}
			return expanded;
		}
	}};
});

var PathItem = Item.extend({
	_class: 'PathItem',
	_selectBounds: false,
	_canScaleStroke: true,
	beans: true,

	initialize: function PathItem() {
	},

	statics: {
		create: function(arg) {
			var data,
				segments,
				compound;
			if (Base.isPlainObject(arg)) {
				segments = arg.segments;
				data = arg.pathData;
			} else if (Array.isArray(arg)) {
				segments = arg;
			} else if (typeof arg === 'string') {
				data = arg;
			}
			if (segments) {
				var first = segments[0];
				compound = first && Array.isArray(first[0]);
			} else if (data) {
				compound = (data.match(/m/gi) || []).length > 1
						|| /z\s*\S+/i.test(data);
			}
			var ctor = compound ? CompoundPath : Path;
			return new ctor(arg);
		}
	},

	_asPathItem: function() {
		return this;
	},

	isClockwise: function() {
		return this.getArea() >= 0;
	},

	setClockwise: function(clockwise) {
		if (this.isClockwise() != (clockwise = !!clockwise))
			this.reverse();
	},

	setPathData: function(data) {

		var parts = data && data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig),
			coords,
			relative = false,
			previous,
			control,
			current = new Point(),
			start = new Point();

		function getCoord(index, coord) {
			var val = +coords[index];
			if (relative)
				val += current[coord];
			return val;
		}

		function getPoint(index) {
			return new Point(
				getCoord(index, 'x'),
				getCoord(index + 1, 'y')
			);
		}

		this.clear();

		for (var i = 0, l = parts && parts.length; i < l; i++) {
			var part = parts[i],
				command = part[0],
				lower = command.toLowerCase();
			coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
			var length = coords && coords.length;
			relative = command === lower;
			if (previous === 'z' && !/[mz]/.test(lower))
				this.moveTo(current);
			switch (lower) {
			case 'm':
			case 'l':
				var move = lower === 'm';
				for (var j = 0; j < length; j += 2) {
					this[move ? 'moveTo' : 'lineTo'](current = getPoint(j));
					if (move) {
						start = current;
						move = false;
					}
				}
				control = current;
				break;
			case 'h':
			case 'v':
				var coord = lower === 'h' ? 'x' : 'y';
				current = current.clone();
				for (var j = 0; j < length; j++) {
					current[coord] = getCoord(j, coord);
					this.lineTo(current);
				}
				control = current;
				break;
			case 'c':
				for (var j = 0; j < length; j += 6) {
					this.cubicCurveTo(
							getPoint(j),
							control = getPoint(j + 2),
							current = getPoint(j + 4));
				}
				break;
			case 's':
				for (var j = 0; j < length; j += 4) {
					this.cubicCurveTo(
							/[cs]/.test(previous)
									? current.multiply(2).subtract(control)
									: current,
							control = getPoint(j),
							current = getPoint(j + 2));
					previous = lower;
				}
				break;
			case 'q':
				for (var j = 0; j < length; j += 4) {
					this.quadraticCurveTo(
							control = getPoint(j),
							current = getPoint(j + 2));
				}
				break;
			case 't':
				for (var j = 0; j < length; j += 2) {
					this.quadraticCurveTo(
							control = (/[qt]/.test(previous)
									? current.multiply(2).subtract(control)
									: current),
							current = getPoint(j));
					previous = lower;
				}
				break;
			case 'a':
				for (var j = 0; j < length; j += 7) {
					this.arcTo(current = getPoint(j + 5),
							new Size(+coords[j], +coords[j + 1]),
							+coords[j + 2], +coords[j + 4], +coords[j + 3]);
				}
				break;
			case 'z':
				this.closePath(1e-12);
				current = start;
				break;
			}
			previous = lower;
		}
	},

	_canComposite: function() {
		return !(this.hasFill() && this.hasStroke());
	},

	_contains: function(point) {
		var winding = point.isInside(
				this.getBounds({ internal: true, handle: true }))
					? this._getWinding(point)
					: {};
		return winding.onPath || !!(this.getFillRule() === 'evenodd'
				? winding.windingL & 1 || winding.windingR & 1
				: winding.winding);
	},

	getIntersections: function(path, include, _matrix, _returnFirst) {
		var self = this === path || !path,
			matrix1 = this._matrix._orNullIfIdentity(),
			matrix2 = self ? matrix1
				: (_matrix || path._matrix)._orNullIfIdentity();
		return self || this.getBounds(matrix1).intersects(
				path.getBounds(matrix2), 1e-12)
				? Curve.getIntersections(
						this.getCurves(), !self && path.getCurves(), include,
						matrix1, matrix2, _returnFirst)
				: [];
	},

	getCrossings: function(path) {
		return this.getIntersections(path, function(inter) {
			return inter.hasOverlap() || inter.isCrossing();
		});
	},

	getNearestLocation: function() {
		var point = Point.read(arguments),
			curves = this.getCurves(),
			minDist = Infinity,
			minLoc = null;
		for (var i = 0, l = curves.length; i < l; i++) {
			var loc = curves[i].getNearestLocation(point);
			if (loc._distance < minDist) {
				minDist = loc._distance;
				minLoc = loc;
			}
		}
		return minLoc;
	},

	getNearestPoint: function() {
		var loc = this.getNearestLocation.apply(this, arguments);
		return loc ? loc.getPoint() : loc;
	},

	interpolate: function(from, to, factor) {
		var isPath = !this._children,
			name = isPath ? '_segments' : '_children',
			itemsFrom = from[name],
			itemsTo = to[name],
			items = this[name];
		if (!itemsFrom || !itemsTo || itemsFrom.length !== itemsTo.length) {
			throw new Error('Invalid operands in interpolate() call: ' +
					from + ', ' + to);
		}
		var current = items.length,
			length = itemsTo.length;
		if (current < length) {
			var ctor = isPath ? Segment : Path;
			for (var i = current; i < length; i++) {
				this.add(new ctor());
			}
		} else if (current > length) {
			this[isPath ? 'removeSegments' : 'removeChildren'](length, current);
		}
		for (var i = 0; i < length; i++) {
			items[i].interpolate(itemsFrom[i], itemsTo[i], factor);
		}
		if (isPath) {
			this.setClosed(from._closed);
			this._changed(9);
		}
	},

	compare: function(path) {
		var ok = false;
		if (path) {
			var paths1 = this._children || [this],
				paths2 = path._children ? path._children.slice() : [path],
				length1 = paths1.length,
				length2 = paths2.length,
				matched = [],
				count = 0;
			ok = true;
			for (var i1 = length1 - 1; i1 >= 0 && ok; i1--) {
				var path1 = paths1[i1];
				ok = false;
				for (var i2 = length2 - 1; i2 >= 0 && !ok; i2--) {
					if (path1.compare(paths2[i2])) {
						if (!matched[i2]) {
							matched[i2] = true;
							count++;
						}
						ok = true;
					}
				}
			}
			ok = ok && count === length2;
		}
		return ok;
	},

});

var Path = PathItem.extend({
	_class: 'Path',
	_serializeFields: {
		segments: [],
		closed: false
	},

	initialize: function Path(arg) {
		this._closed = false;
		this._segments = [];
		this._version = 0;
		var segments = Array.isArray(arg)
			? typeof arg[0] === 'object'
				? arg
				: arguments
			: arg && (arg.size === undefined && (arg.x !== undefined
					|| arg.point !== undefined))
				? arguments
				: null;
		if (segments && segments.length > 0) {
			this.setSegments(segments);
		} else {
			this._curves = undefined;
			this._segmentSelection = 0;
			if (!segments && typeof arg === 'string') {
				this.setPathData(arg);
				arg = null;
			}
		}
		this._initialize(!segments && arg);
	},

	_equals: function(item) {
		return this._closed === item._closed
				&& Base.equals(this._segments, item._segments);
	},

	copyContent: function(source) {
		this.setSegments(source._segments);
		this._closed = source._closed;
	},

	_changed: function _changed(flags) {
		_changed.base.call(this, flags);
		if (flags & 8) {
			this._length = this._area = undefined;
			if (flags & 16) {
				this._version++;
			} else if (this._curves) {
			   for (var i = 0, l = this._curves.length; i < l; i++)
					this._curves[i]._changed();
			}
		} else if (flags & 32) {
			this._bounds = undefined;
		}
	},

	getStyle: function() {
		var parent = this._parent;
		return (parent instanceof CompoundPath ? parent : this)._style;
	},

	getSegments: function() {
		return this._segments;
	},

	setSegments: function(segments) {
		var fullySelected = this.isFullySelected(),
			length = segments && segments.length;
		this._segments.length = 0;
		this._segmentSelection = 0;
		this._curves = undefined;
		if (length) {
			var last = segments[length - 1];
			if (typeof last === 'boolean') {
				this.setClosed(last);
				length--;
			}
			this._add(Segment.readList(segments, 0, {}, length));
		}
		if (fullySelected)
			this.setFullySelected(true);
	},

	getFirstSegment: function() {
		return this._segments[0];
	},

	getLastSegment: function() {
		return this._segments[this._segments.length - 1];
	},

	getCurves: function() {
		var curves = this._curves,
			segments = this._segments;
		if (!curves) {
			var length = this._countCurves();
			curves = this._curves = new Array(length);
			for (var i = 0; i < length; i++)
				curves[i] = new Curve(this, segments[i],
					segments[i + 1] || segments[0]);
		}
		return curves;
	},

	getFirstCurve: function() {
		return this.getCurves()[0];
	},

	getLastCurve: function() {
		var curves = this.getCurves();
		return curves[curves.length - 1];
	},

	isClosed: function() {
		return this._closed;
	},

	setClosed: function(closed) {
		if (this._closed != (closed = !!closed)) {
			this._closed = closed;
			if (this._curves) {
				var length = this._curves.length = this._countCurves();
				if (closed)
					this._curves[length - 1] = new Curve(this,
						this._segments[length - 1], this._segments[0]);
			}
			this._changed(25);
		}
	}
}, {
	beans: true,

	getPathData: function(_matrix, _precision) {
		var segments = this._segments,
			length = segments.length,
			f = new Formatter(_precision),
			coords = new Array(6),
			first = true,
			curX, curY,
			prevX, prevY,
			inX, inY,
			outX, outY,
			parts = [];

		function addSegment(segment, skipLine) {
			segment._transformCoordinates(_matrix, coords);
			curX = coords[0];
			curY = coords[1];
			if (first) {
				parts.push('M' + f.pair(curX, curY));
				first = false;
			} else {
				inX = coords[2];
				inY = coords[3];
				if (inX === curX && inY === curY
						&& outX === prevX && outY === prevY) {
					if (!skipLine) {
						var dx = curX - prevX,
							dy = curY - prevY;
						parts.push(
							  dx === 0 ? 'v' + f.number(dy)
							: dy === 0 ? 'h' + f.number(dx)
							: 'l' + f.pair(dx, dy));
					}
				} else {
					parts.push('c' + f.pair(outX - prevX, outY - prevY)
							 + ' ' + f.pair( inX - prevX,  inY - prevY)
							 + ' ' + f.pair(curX - prevX, curY - prevY));
				}
			}
			prevX = curX;
			prevY = curY;
			outX = coords[4];
			outY = coords[5];
		}

		if (!length)
			return '';

		for (var i = 0; i < length; i++)
			addSegment(segments[i]);
		if (this._closed && length > 0) {
			addSegment(segments[0], true);
			parts.push('z');
		}
		return parts.join('');
	},

	isEmpty: function() {
		return !this._segments.length;
	},

	_transformContent: function(matrix) {
		var segments = this._segments,
			coords = new Array(6);
		for (var i = 0, l = segments.length; i < l; i++)
			segments[i]._transformCoordinates(matrix, coords, true);
		return true;
	},

	_add: function(segs, index) {
		var segments = this._segments,
			curves = this._curves,
			amount = segs.length,
			append = index == null,
			index = append ? segments.length : index;
		for (var i = 0; i < amount; i++) {
			var segment = segs[i];
			if (segment._path)
				segment = segs[i] = segment.clone();
			segment._path = this;
			segment._index = index + i;
			if (segment._selection)
				this._updateSelection(segment, 0, segment._selection);
		}
		if (append) {
			segments.push.apply(segments, segs);
		} else {
			segments.splice.apply(segments, [index, 0].concat(segs));
			for (var i = index + amount, l = segments.length; i < l; i++)
				segments[i]._index = i;
		}
		if (curves) {
			var total = this._countCurves(),
				start = index > 0 && index + amount - 1 === total ? index - 1
					: index,
				insert = start,
				end = Math.min(start + amount, total);
			if (segs._curves) {
				curves.splice.apply(curves, [start, 0].concat(segs._curves));
				insert += segs._curves.length;
			}
			for (var i = insert; i < end; i++)
				curves.splice(i, 0, new Curve(this, null, null));
			this._adjustCurves(start, end);
		}
		this._changed(25);
		return segs;
	},

	_adjustCurves: function(start, end) {
		var segments = this._segments,
			curves = this._curves,
			curve;
		for (var i = start; i < end; i++) {
			curve = curves[i];
			curve._path = this;
			curve._segment1 = segments[i];
			curve._segment2 = segments[i + 1] || segments[0];
			curve._changed();
		}
		if (curve = curves[this._closed && !start ? segments.length - 1
				: start - 1]) {
			curve._segment2 = segments[start] || segments[0];
			curve._changed();
		}
		if (curve = curves[end]) {
			curve._segment1 = segments[end];
			curve._changed();
		}
	},

	_countCurves: function() {
		var length = this._segments.length;
		return !this._closed && length > 0 ? length - 1 : length;
	},

	add: function(segment1 ) {
		return arguments.length > 1 && typeof segment1 !== 'number'
			? this._add(Segment.readList(arguments))
			: this._add([ Segment.read(arguments) ])[0];
	},

	insert: function(index, segment1 ) {
		return arguments.length > 2 && typeof segment1 !== 'number'
			? this._add(Segment.readList(arguments, 1), index)
			: this._add([ Segment.read(arguments, 1) ], index)[0];
	},

	addSegment: function() {
		return this._add([ Segment.read(arguments) ])[0];
	},

	insertSegment: function(index ) {
		return this._add([ Segment.read(arguments, 1) ], index)[0];
	},

	addSegments: function(segments) {
		return this._add(Segment.readList(segments));
	},

	insertSegments: function(index, segments) {
		return this._add(Segment.readList(segments), index);
	},

	removeSegment: function(index) {
		return this.removeSegments(index, index + 1)[0] || null;
	},

	removeSegments: function(start, end, _includeCurves) {
		start = start || 0;
		end = Base.pick(end, this._segments.length);
		var segments = this._segments,
			curves = this._curves,
			count = segments.length,
			removed = segments.splice(start, end - start),
			amount = removed.length;
		if (!amount)
			return removed;
		for (var i = 0; i < amount; i++) {
			var segment = removed[i];
			if (segment._selection)
				this._updateSelection(segment, segment._selection, 0);
			segment._index = segment._path = null;
		}
		for (var i = start, l = segments.length; i < l; i++)
			segments[i]._index = i;
		if (curves) {
			var index = start > 0 && end === count + (this._closed ? 1 : 0)
					? start - 1
					: start,
				curves = curves.splice(index, amount);
			for (var i = curves.length - 1; i >= 0; i--)
				curves[i]._path = null;
			if (_includeCurves)
				removed._curves = curves.slice(1);
			this._adjustCurves(index, index);
		}
		this._changed(25);
		return removed;
	},

	clear: '#removeSegments',

	hasHandles: function() {
		var segments = this._segments;
		for (var i = 0, l = segments.length; i < l; i++) {
			if (segments[i].hasHandles())
				return true;
		}
		return false;
	},

	clearHandles: function() {
		var segments = this._segments;
		for (var i = 0, l = segments.length; i < l; i++)
			segments[i].clearHandles();
	},

	getLength: function() {
		if (this._length == null) {
			var curves = this.getCurves(),
				length = 0;
			for (var i = 0, l = curves.length; i < l; i++)
				length += curves[i].getLength();
			this._length = length;
		}
		return this._length;
	},

	getArea: function() {
		var area = this._area;
		if (area == null) {
			var segments = this._segments,
				closed = this._closed;
			area = 0;
			for (var i = 0, l = segments.length; i < l; i++) {
				var last = i + 1 === l;
				area += Curve.getArea(Curve.getValues(
						segments[i], segments[last ? 0 : i + 1],
						null, last && !closed));
			}
			this._area = area;
		}
		return area;
	},

	isFullySelected: function() {
		var length = this._segments.length;
		return this.isSelected() && length > 0 && this._segmentSelection
				=== length * 7;
	},

	setFullySelected: function(selected) {
		if (selected)
			this._selectSegments(true);
		this.setSelected(selected);
	},

	setSelection: function setSelection(selection) {
		if (!(selection & 1))
			this._selectSegments(false);
		setSelection.base.call(this, selection);
	},

	_selectSegments: function(selected) {
		var segments = this._segments,
			length = segments.length,
			selection = selected ? 7 : 0;
		this._segmentSelection = selection * length;
		for (var i = 0; i < length; i++)
			segments[i]._selection = selection;
	},

	_updateSelection: function(segment, oldSelection, newSelection) {
		segment._selection = newSelection;
		var selection = this._segmentSelection += newSelection - oldSelection;
		if (selection > 0)
			this.setSelected(true);
	},

	divideAt: function(location) {
		var loc = this.getLocationAt(location),
			curve;
		return loc && (curve = loc.getCurve().divideAt(loc.getCurveOffset()))
				? curve._segment1
				: null;
	},

	splitAt: function(location) {
		var loc = this.getLocationAt(location),
			index = loc && loc.index,
			time = loc && loc.time,
			tMin = 1e-8,
			tMax = 1 - tMin;
		if (time > tMax) {
			index++;
			time = 0;
		}
		var curves = this.getCurves();
		if (index >= 0 && index < curves.length) {
			if (time >= tMin) {
				curves[index++].divideAtTime(time);
			}
			var segs = this.removeSegments(index, this._segments.length, true),
				path;
			if (this._closed) {
				this.setClosed(false);
				path = this;
			} else {
				path = new Path(Item.NO_INSERT);
				path.insertAbove(this);
				path.copyAttributes(this);
			}
			path._add(segs, 0);
			this.addSegment(segs[0]);
			return path;
		}
		return null;
	},

	split: function(index, time) {
		var curve,
			location = time === undefined ? index
				: (curve = this.getCurves()[index])
					&& curve.getLocationAtTime(time);
		return location != null ? this.splitAt(location) : null;
	},

	join: function(path, tolerance) {
		var epsilon = tolerance || 0;
		if (path && path !== this) {
			var segments = path._segments,
				last1 = this.getLastSegment(),
				last2 = path.getLastSegment();
			if (!last2)
				return this;
			if (last1 && last1._point.isClose(last2._point, epsilon))
				path.reverse();
			var first2 = path.getFirstSegment();
			if (last1 && last1._point.isClose(first2._point, epsilon)) {
				last1.setHandleOut(first2._handleOut);
				this._add(segments.slice(1));
			} else {
				var first1 = this.getFirstSegment();
				if (first1 && first1._point.isClose(first2._point, epsilon))
					path.reverse();
				last2 = path.getLastSegment();
				if (first1 && first1._point.isClose(last2._point, epsilon)) {
					first1.setHandleIn(last2._handleIn);
					this._add(segments.slice(0, segments.length - 1), 0);
				} else {
					this._add(segments.slice());
				}
			}
			if (path._closed)
				this._add([segments[0]]);
			path.remove();
		}
		var first = this.getFirstSegment(),
			last = this.getLastSegment();
		if (first !== last && first._point.isClose(last._point, epsilon)) {
			first.setHandleIn(last._handleIn);
			last.remove();
			this.setClosed(true);
		}
		return this;
	},

	reduce: function(options) {
		var curves = this.getCurves(),
			simplify = options && options.simplify,
			tolerance = simplify ? 1e-7 : 0;
		for (var i = curves.length - 1; i >= 0; i--) {
			var curve = curves[i];
			if (!curve.hasHandles() && (!curve.hasLength(tolerance)
					|| simplify && curve.isCollinear(curve.getNext())))
				curve.remove();
		}
		return this;
	},

	reverse: function() {
		this._segments.reverse();
		for (var i = 0, l = this._segments.length; i < l; i++) {
			var segment = this._segments[i];
			var handleIn = segment._handleIn;
			segment._handleIn = segment._handleOut;
			segment._handleOut = handleIn;
			segment._index = i;
		}
		this._curves = null;
		this._changed(9);
	},

	flatten: function(flatness) {
		var flattener = new PathFlattener(this, flatness || 0.25, 256, true),
			parts = flattener.parts,
			length = parts.length,
			segments = [];
		for (var i = 0; i < length; i++) {
			segments.push(new Segment(parts[i].curve.slice(0, 2)));
		}
		if (!this._closed && length > 0) {
			segments.push(new Segment(parts[length - 1].curve.slice(6)));
		}
		this.setSegments(segments);
	},

	simplify: function(tolerance) {
		var segments = new PathFitter(this).fit(tolerance || 2.5);
		if (segments)
			this.setSegments(segments);
		return !!segments;
	},

	smooth: function(options) {
		var that = this,
			opts = options || {},
			type = opts.type || 'asymmetric',
			segments = this._segments,
			length = segments.length,
			closed = this._closed;

		function getIndex(value, _default) {
			var index = value && value.index;
			if (index != null) {
				var path = value.path;
				if (path && path !== that)
					throw new Error(value._class + ' ' + index + ' of ' + path
							+ ' is not part of ' + that);
				if (_default && value instanceof Curve)
					index++;
			} else {
				index = typeof value === 'number' ? value : _default;
			}
			return Math.min(index < 0 && closed
					? index % length
					: index < 0 ? index + length : index, length - 1);
		}

		var loop = closed && opts.from === undefined && opts.to === undefined,
			from = getIndex(opts.from, 0),
			to = getIndex(opts.to, length - 1);

		if (from > to) {
			if (closed) {
				from -= length;
			} else {
				var tmp = from;
				from = to;
				to = tmp;
			}
		}
		if (/^(?:asymmetric|continuous)$/.test(type)) {
			var asymmetric = type === 'asymmetric',
				min = Math.min,
				amount = to - from + 1,
				n = amount - 1,
				padding = loop ? min(amount, 4) : 1,
				paddingLeft = padding,
				paddingRight = padding,
				knots = [];
			if (!closed) {
				paddingLeft = min(1, from);
				paddingRight = min(1, length - to - 1);
			}
			n += paddingLeft + paddingRight;
			if (n <= 1)
				return;
			for (var i = 0, j = from - paddingLeft; i <= n; i++, j++) {
				knots[i] = segments[(j < 0 ? j + length : j) % length]._point;
			}

			var x = knots[0]._x + 2 * knots[1]._x,
				y = knots[0]._y + 2 * knots[1]._y,
				f = 2,
				n_1 = n - 1,
				rx = [x],
				ry = [y],
				rf = [f],
				px = [],
				py = [];
			for (var i = 1; i < n; i++) {
				var internal = i < n_1,
					a = internal ? 1 : asymmetric ? 1 : 2,
					b = internal ? 4 : asymmetric ? 2 : 7,
					u = internal ? 4 : asymmetric ? 3 : 8,
					v = internal ? 2 : asymmetric ? 0 : 1,
					m = a / f;
				f = rf[i] = b - m;
				x = rx[i] = u * knots[i]._x + v * knots[i + 1]._x - m * x;
				y = ry[i] = u * knots[i]._y + v * knots[i + 1]._y - m * y;
			}

			px[n_1] = rx[n_1] / rf[n_1];
			py[n_1] = ry[n_1] / rf[n_1];
			for (var i = n - 2; i >= 0; i--) {
				px[i] = (rx[i] - px[i + 1]) / rf[i];
				py[i] = (ry[i] - py[i + 1]) / rf[i];
			}
			px[n] = (3 * knots[n]._x - px[n_1]) / 2;
			py[n] = (3 * knots[n]._y - py[n_1]) / 2;

			for (var i = paddingLeft, max = n - paddingRight, j = from;
					i <= max; i++, j++) {
				var segment = segments[j < 0 ? j + length : j],
					pt = segment._point,
					hx = px[i] - pt._x,
					hy = py[i] - pt._y;
				if (loop || i < max)
					segment.setHandleOut(hx, hy);
				if (loop || i > paddingLeft)
					segment.setHandleIn(-hx, -hy);
			}
		} else {
			for (var i = from; i <= to; i++) {
				segments[i < 0 ? i + length : i].smooth(opts,
						!loop && i === from, !loop && i === to);
			}
		}
	},

	toShape: function(insert) {
		if (!this._closed)
			return null;

		var segments = this._segments,
			type,
			size,
			radius,
			topCenter;

		function isCollinear(i, j) {
			var seg1 = segments[i],
				seg2 = seg1.getNext(),
				seg3 = segments[j],
				seg4 = seg3.getNext();
			return seg1._handleOut.isZero() && seg2._handleIn.isZero()
					&& seg3._handleOut.isZero() && seg4._handleIn.isZero()
					&& seg2._point.subtract(seg1._point).isCollinear(
						seg4._point.subtract(seg3._point));
		}

		function isOrthogonal(i) {
			var seg2 = segments[i],
				seg1 = seg2.getPrevious(),
				seg3 = seg2.getNext();
			return seg1._handleOut.isZero() && seg2._handleIn.isZero()
					&& seg2._handleOut.isZero() && seg3._handleIn.isZero()
					&& seg2._point.subtract(seg1._point).isOrthogonal(
						seg3._point.subtract(seg2._point));
		}

		function isArc(i) {
			var seg1 = segments[i],
				seg2 = seg1.getNext(),
				handle1 = seg1._handleOut,
				handle2 = seg2._handleIn,
				kappa = 0.5522847498307936;
			if (handle1.isOrthogonal(handle2)) {
				var pt1 = seg1._point,
					pt2 = seg2._point,
					corner = new Line(pt1, handle1, true).intersect(
							new Line(pt2, handle2, true), true);
				return corner && Numerical.isZero(handle1.getLength() /
						corner.subtract(pt1).getLength() - kappa)
					&& Numerical.isZero(handle2.getLength() /
						corner.subtract(pt2).getLength() - kappa);
			}
			return false;
		}

		function getDistance(i, j) {
			return segments[i]._point.getDistance(segments[j]._point);
		}

		if (!this.hasHandles() && segments.length === 4
				&& isCollinear(0, 2) && isCollinear(1, 3) && isOrthogonal(1)) {
			type = Shape.Rectangle;
			size = new Size(getDistance(0, 3), getDistance(0, 1));
			topCenter = segments[1]._point.add(segments[2]._point).divide(2);
		} else if (segments.length === 8 && isArc(0) && isArc(2) && isArc(4)
				&& isArc(6) && isCollinear(1, 5) && isCollinear(3, 7)) {
			type = Shape.Rectangle;
			size = new Size(getDistance(1, 6), getDistance(0, 3));
			radius = size.subtract(new Size(getDistance(0, 7),
					getDistance(1, 2))).divide(2);
			topCenter = segments[3]._point.add(segments[4]._point).divide(2);
		} else if (segments.length === 4
				&& isArc(0) && isArc(1) && isArc(2) && isArc(3)) {
			if (Numerical.isZero(getDistance(0, 2) - getDistance(1, 3))) {
				type = Shape.Circle;
				radius = getDistance(0, 2) / 2;
			} else {
				type = Shape.Ellipse;
				radius = new Size(getDistance(2, 0) / 2, getDistance(3, 1) / 2);
			}
			topCenter = segments[1]._point;
		}

		if (type) {
			var center = this.getPosition(true),
				shape = new type({
					center: center,
					size: size,
					radius: radius,
					insert: false
				});
			shape.copyAttributes(this, true);
			shape._matrix.prepend(this._matrix);
			shape.rotate(topCenter.subtract(center).getAngle() + 90);
			if (insert === undefined || insert)
				shape.insertAbove(this);
			return shape;
		}
		return null;
	},

	toPath: '#clone',

	compare: function compare(path) {
		if (!path || path instanceof CompoundPath)
			return compare.base.call(this, path);
		var curves1 = this.getCurves(),
			curves2 = path.getCurves(),
			length1 = curves1.length,
			length2 = curves2.length;
		if (!length1 || !length2) {
			return length1 == length2;
		}
		var v1 = curves1[0].getValues(),
			values2 = [],
			pos1 = 0, pos2,
			end1 = 0, end2;
		for (var i = 0; i < length2; i++) {
			var v2 = curves2[i].getValues();
			values2.push(v2);
			var overlaps = Curve.getOverlaps(v1, v2);
			if (overlaps) {
				pos2 = !i && overlaps[0][0] > 0 ? length2 - 1 : i;
				end2 = overlaps[0][1];
				break;
			}
		}
		var abs = Math.abs,
			epsilon = 1e-8,
			v2 = values2[pos2],
			start2;
		while (v1 && v2) {
			var overlaps = Curve.getOverlaps(v1, v2);
			if (overlaps) {
				var t1 = overlaps[0][0];
				if (abs(t1 - end1) < epsilon) {
					end1 = overlaps[1][0];
					if (end1 === 1) {
						v1 = ++pos1 < length1 ? curves1[pos1].getValues() : null;
						end1 = 0;
					}
					var t2 = overlaps[0][1];
					if (abs(t2 - end2) < epsilon) {
						if (!start2)
							start2 = [pos2, t2];
						end2 = overlaps[1][1];
						if (end2 === 1) {
							if (++pos2 >= length2)
								pos2 = 0;
							v2 = values2[pos2] || curves2[pos2].getValues();
							end2 = 0;
						}
						if (!v1) {
							return start2[0] === pos2 && start2[1] === end2;
						}
						continue;
					}
				}
			}
			break;
		}
		return false;
	},

	_hitTestSelf: function(point, options, viewMatrix, strokeMatrix) {
		var that = this,
			style = this.getStyle(),
			segments = this._segments,
			numSegments = segments.length,
			closed = this._closed,
			tolerancePadding = options._tolerancePadding,
			strokePadding = tolerancePadding,
			join, cap, miterLimit,
			area, loc, res,
			hitStroke = options.stroke && style.hasStroke(),
			hitFill = options.fill && style.hasFill(),
			hitCurves = options.curves,
			strokeRadius = hitStroke
					? style.getStrokeWidth() / 2
					: hitFill && options.tolerance > 0 || hitCurves
						? 0 : null;
		if (strokeRadius !== null) {
			if (strokeRadius > 0) {
				join = style.getStrokeJoin();
				cap = style.getStrokeCap();
				miterLimit = style.getMiterLimit();
				strokePadding = strokePadding.add(
					Path._getStrokePadding(strokeRadius, strokeMatrix));
			} else {
				join = cap = 'round';
			}
		}

		function isCloseEnough(pt, padding) {
			return point.subtract(pt).divide(padding).length <= 1;
		}

		function checkSegmentPoint(seg, pt, name) {
			if (!options.selected || pt.isSelected()) {
				var anchor = seg._point;
				if (pt !== anchor)
					pt = pt.add(anchor);
				if (isCloseEnough(pt, strokePadding)) {
					return new HitResult(name, that, {
						segment: seg,
						point: pt
					});
				}
			}
		}

		function checkSegmentPoints(seg, ends) {
			return (ends || options.segments)
				&& checkSegmentPoint(seg, seg._point, 'segment')
				|| (!ends && options.handles) && (
					checkSegmentPoint(seg, seg._handleIn, 'handle-in') ||
					checkSegmentPoint(seg, seg._handleOut, 'handle-out'));
		}

		function addToArea(point) {
			area.add(point);
		}

		function checkSegmentStroke(segment) {
			var isJoin = closed || segment._index > 0
					&& segment._index < numSegments - 1;
			if ((isJoin ? join : cap) === 'round') {
				return isCloseEnough(segment._point, strokePadding);
			} else {
				area = new Path({ internal: true, closed: true });
				if (isJoin) {
					if (!segment.isSmooth()) {
						Path._addBevelJoin(segment, join, strokeRadius,
							   miterLimit, null, strokeMatrix, addToArea, true);
					}
				} else if (cap === 'square') {
					Path._addSquareCap(segment, cap, strokeRadius, null,
							strokeMatrix, addToArea, true);
				}
				if (!area.isEmpty()) {
					var loc;
					return area.contains(point)
						|| (loc = area.getNearestLocation(point))
							&& isCloseEnough(loc.getPoint(), tolerancePadding);
				}
			}
		}

		if (options.ends && !options.segments && !closed) {
			if (res = checkSegmentPoints(segments[0], true)
					|| checkSegmentPoints(segments[numSegments - 1], true))
				return res;
		} else if (options.segments || options.handles) {
			for (var i = 0; i < numSegments; i++)
				if (res = checkSegmentPoints(segments[i]))
					return res;
		}
		if (strokeRadius !== null) {
			loc = this.getNearestLocation(point);
			if (loc) {
				var time = loc.getTime();
				if (time === 0 || time === 1 && numSegments > 1) {
					if (!checkSegmentStroke(loc.getSegment()))
						loc = null;
				} else if (!isCloseEnough(loc.getPoint(), strokePadding)) {
					loc = null;
				}
			}
			if (!loc && join === 'miter' && numSegments > 1) {
				for (var i = 0; i < numSegments; i++) {
					var segment = segments[i];
					if (point.getDistance(segment._point)
							<= miterLimit * strokeRadius
							&& checkSegmentStroke(segment)) {
						loc = segment.getLocation();
						break;
					}
				}
			}
		}
		return !loc && hitFill && this._contains(point)
				|| loc && !hitStroke && !hitCurves
					? new HitResult('fill', this)
					: loc
						? new HitResult(hitStroke ? 'stroke' : 'curve', this, {
							location: loc,
							point: loc.getPoint()
						})
						: null;
	}

}, Base.each(Curve._evaluateMethods,
	function(name) {
		this[name + 'At'] = function(offset) {
			var loc = this.getLocationAt(offset);
			return loc && loc[name]();
		};
	},
{
	beans: false,

	getLocationOf: function() {
		var point = Point.read(arguments),
			curves = this.getCurves();
		for (var i = 0, l = curves.length; i < l; i++) {
			var loc = curves[i].getLocationOf(point);
			if (loc)
				return loc;
		}
		return null;
	},

	getOffsetOf: function() {
		var loc = this.getLocationOf.apply(this, arguments);
		return loc ? loc.getOffset() : null;
	},

	getLocationAt: function(offset) {
		if (typeof offset === 'number') {
			var curves = this.getCurves(),
				length = 0;
			for (var i = 0, l = curves.length; i < l; i++) {
				var start = length,
					curve = curves[i];
				length += curve.getLength();
				if (length > offset) {
					return curve.getLocationAt(offset - start);
				}
			}
			if (curves.length > 0 && offset <= this.getLength()) {
				return new CurveLocation(curves[curves.length - 1], 1);
			}
		} else if (offset && offset.getPath && offset.getPath() === this) {
			return offset;
		}
		return null;
	}

}),
new function() {

	function drawHandles(ctx, segments, matrix, size) {
		var half = size / 2,
			coords = new Array(6),
			pX, pY;

		function drawHandle(index) {
			var hX = coords[index],
				hY = coords[index + 1];
			if (pX != hX || pY != hY) {
				ctx.beginPath();
				ctx.moveTo(pX, pY);
				ctx.lineTo(hX, hY);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(hX, hY, half, 0, Math.PI * 2, true);
				ctx.fill();
			}
		}

		for (var i = 0, l = segments.length; i < l; i++) {
			var segment = segments[i],
				selection = segment._selection;
			segment._transformCoordinates(matrix, coords);
			pX = coords[0];
			pY = coords[1];
			if (selection & 2)
				drawHandle(2);
			if (selection & 4)
				drawHandle(4);
			ctx.fillRect(pX - half, pY - half, size, size);
			if (!(selection & 1)) {
				var fillStyle = ctx.fillStyle;
				ctx.fillStyle = '#ffffff';
				ctx.fillRect(pX - half + 1, pY - half + 1, size - 2, size - 2);
				ctx.fillStyle = fillStyle;
			}
		}
	}

	function drawSegments(ctx, path, matrix) {
		var segments = path._segments,
			length = segments.length,
			coords = new Array(6),
			first = true,
			curX, curY,
			prevX, prevY,
			inX, inY,
			outX, outY;

		function drawSegment(segment) {
			if (matrix) {
				segment._transformCoordinates(matrix, coords);
				curX = coords[0];
				curY = coords[1];
			} else {
				var point = segment._point;
				curX = point._x;
				curY = point._y;
			}
			if (first) {
				ctx.moveTo(curX, curY);
				first = false;
			} else {
				if (matrix) {
					inX = coords[2];
					inY = coords[3];
				} else {
					var handle = segment._handleIn;
					inX = curX + handle._x;
					inY = curY + handle._y;
				}
				if (inX === curX && inY === curY
						&& outX === prevX && outY === prevY) {
					ctx.lineTo(curX, curY);
				} else {
					ctx.bezierCurveTo(outX, outY, inX, inY, curX, curY);
				}
			}
			prevX = curX;
			prevY = curY;
			if (matrix) {
				outX = coords[4];
				outY = coords[5];
			} else {
				var handle = segment._handleOut;
				outX = prevX + handle._x;
				outY = prevY + handle._y;
			}
		}

		for (var i = 0; i < length; i++)
			drawSegment(segments[i]);
		if (path._closed && length > 0)
			drawSegment(segments[0]);
	}

	return {
		_draw: function(ctx, param, viewMatrix, strokeMatrix) {
			var dontStart = param.dontStart,
				dontPaint = param.dontFinish || param.clip,
				style = this.getStyle(),
				hasFill = style.hasFill(),
				hasStroke = style.hasStroke(),
				dashArray = style.getDashArray(),
				dashLength = !paper.support.nativeDash && hasStroke
						&& dashArray && dashArray.length;

			if (!dontStart)
				ctx.beginPath();

			if (hasFill || hasStroke && !dashLength || dontPaint) {
				drawSegments(ctx, this, strokeMatrix);
				if (this._closed)
					ctx.closePath();
			}

			function getOffset(i) {
				return dashArray[((i % dashLength) + dashLength) % dashLength];
			}

			if (!dontPaint && (hasFill || hasStroke)) {
				this._setStyles(ctx, param, viewMatrix);
				if (hasFill) {
					ctx.fill(style.getFillRule());
					ctx.shadowColor = 'rgba(0,0,0,0)';
				}
				if (hasStroke) {
					if (dashLength) {
						if (!dontStart)
							ctx.beginPath();
						var flattener = new PathFlattener(this, 0.25, 32, false,
								strokeMatrix),
							length = flattener.length,
							from = -style.getDashOffset(), to,
							i = 0;
						from = from % length;
						while (from > 0) {
							from -= getOffset(i--) + getOffset(i--);
						}
						while (from < length) {
							to = from + getOffset(i++);
							if (from > 0 || to > 0)
								flattener.drawPart(ctx,
										Math.max(from, 0), Math.max(to, 0));
							from = to + getOffset(i++);
						}
					}
					ctx.stroke();
				}
			}
		},

		_drawSelected: function(ctx, matrix) {
			ctx.beginPath();
			drawSegments(ctx, this, matrix);
			ctx.stroke();
			drawHandles(ctx, this._segments, matrix, paper.settings.handleSize);
		}
	};
},
new function() {
	function getCurrentSegment(that) {
		var segments = that._segments;
		if (!segments.length)
			throw new Error('Use a moveTo() command first');
		return segments[segments.length - 1];
	}

	return {
		moveTo: function() {
			var segments = this._segments;
			if (segments.length === 1)
				this.removeSegment(0);
			if (!segments.length)
				this._add([ new Segment(Point.read(arguments)) ]);
		},

		moveBy: function() {
			throw new Error('moveBy() is unsupported on Path items.');
		},

		lineTo: function() {
			this._add([ new Segment(Point.read(arguments)) ]);
		},

		cubicCurveTo: function() {
			var handle1 = Point.read(arguments),
				handle2 = Point.read(arguments),
				to = Point.read(arguments),
				current = getCurrentSegment(this);
			current.setHandleOut(handle1.subtract(current._point));
			this._add([ new Segment(to, handle2.subtract(to)) ]);
		},

		quadraticCurveTo: function() {
			var handle = Point.read(arguments),
				to = Point.read(arguments),
				current = getCurrentSegment(this)._point;
			this.cubicCurveTo(
				handle.add(current.subtract(handle).multiply(1 / 3)),
				handle.add(to.subtract(handle).multiply(1 / 3)),
				to
			);
		},

		curveTo: function() {
			var through = Point.read(arguments),
				to = Point.read(arguments),
				t = Base.pick(Base.read(arguments), 0.5),
				t1 = 1 - t,
				current = getCurrentSegment(this)._point,
				handle = through.subtract(current.multiply(t1 * t1))
					.subtract(to.multiply(t * t)).divide(2 * t * t1);
			if (handle.isNaN())
				throw new Error(
					'Cannot put a curve through points with parameter = ' + t);
			this.quadraticCurveTo(handle, to);
		},

		arcTo: function() {
			var abs = Math.abs,
				sqrt = Math.sqrt,
				current = getCurrentSegment(this),
				from = current._point,
				to = Point.read(arguments),
				through,
				peek = Base.peek(arguments),
				clockwise = Base.pick(peek, true),
				center, extent, vector, matrix;
			if (typeof clockwise === 'boolean') {
				var middle = from.add(to).divide(2),
				through = middle.add(middle.subtract(from).rotate(
						clockwise ? -90 : 90));
			} else if (Base.remain(arguments) <= 2) {
				through = to;
				to = Point.read(arguments);
			} else {
				var radius = Size.read(arguments),
					isZero = Numerical.isZero;
				if (isZero(radius.width) || isZero(radius.height))
					return this.lineTo(to);
				var rotation = Base.read(arguments),
					clockwise = !!Base.read(arguments),
					large = !!Base.read(arguments),
					middle = from.add(to).divide(2),
					pt = from.subtract(middle).rotate(-rotation),
					x = pt.x,
					y = pt.y,
					rx = abs(radius.width),
					ry = abs(radius.height),
					rxSq = rx * rx,
					rySq = ry * ry,
					xSq = x * x,
					ySq = y * y;
				var factor = sqrt(xSq / rxSq + ySq / rySq);
				if (factor > 1) {
					rx *= factor;
					ry *= factor;
					rxSq = rx * rx;
					rySq = ry * ry;
				}
				factor = (rxSq * rySq - rxSq * ySq - rySq * xSq) /
						(rxSq * ySq + rySq * xSq);
				if (abs(factor) < 1e-12)
					factor = 0;
				if (factor < 0)
					throw new Error(
							'Cannot create an arc with the given arguments');
				center = new Point(rx * y / ry, -ry * x / rx)
						.multiply((large === clockwise ? -1 : 1) * sqrt(factor))
						.rotate(rotation).add(middle);
				matrix = new Matrix().translate(center).rotate(rotation)
						.scale(rx, ry);
				vector = matrix._inverseTransform(from);
				extent = vector.getDirectedAngle(matrix._inverseTransform(to));
				if (!clockwise && extent > 0)
					extent -= 360;
				else if (clockwise && extent < 0)
					extent += 360;
			}
			if (through) {
				var l1 = new Line(from.add(through).divide(2),
							through.subtract(from).rotate(90), true),
					l2 = new Line(through.add(to).divide(2),
							to.subtract(through).rotate(90), true),
					line = new Line(from, to),
					throughSide = line.getSide(through);
				center = l1.intersect(l2, true);
				if (!center) {
					if (!throughSide)
						return this.lineTo(to);
					throw new Error(
							'Cannot create an arc with the given arguments');
				}
				vector = from.subtract(center);
				extent = vector.getDirectedAngle(to.subtract(center));
				var centerSide = line.getSide(center);
				if (centerSide === 0) {
					extent = throughSide * abs(extent);
				} else if (throughSide === centerSide) {
					extent += extent < 0 ? 360 : -360;
				}
			}
			var epsilon = 1e-7,
				ext = abs(extent),
				count = ext >= 360 ? 4 : Math.ceil((ext - epsilon) / 90),
				inc = extent / count,
				half = inc * Math.PI / 360,
				z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)),
				segments = [];
			for (var i = 0; i <= count; i++) {
				var pt = to,
					out = null;
				if (i < count) {
					out = vector.rotate(90).multiply(z);
					if (matrix) {
						pt = matrix._transformPoint(vector);
						out = matrix._transformPoint(vector.add(out))
								.subtract(pt);
					} else {
						pt = center.add(vector);
					}
				}
				if (!i) {
					current.setHandleOut(out);
				} else {
					var _in = vector.rotate(-90).multiply(z);
					if (matrix) {
						_in = matrix._transformPoint(vector.add(_in))
								.subtract(pt);
					}
					segments.push(new Segment(pt, _in, out));
				}
				vector = vector.rotate(inc);
			}
			this._add(segments);
		},

		lineBy: function() {
			var to = Point.read(arguments),
				current = getCurrentSegment(this)._point;
			this.lineTo(current.add(to));
		},

		curveBy: function() {
			var through = Point.read(arguments),
				to = Point.read(arguments),
				parameter = Base.read(arguments),
				current = getCurrentSegment(this)._point;
			this.curveTo(current.add(through), current.add(to), parameter);
		},

		cubicCurveBy: function() {
			var handle1 = Point.read(arguments),
				handle2 = Point.read(arguments),
				to = Point.read(arguments),
				current = getCurrentSegment(this)._point;
			this.cubicCurveTo(current.add(handle1), current.add(handle2),
					current.add(to));
		},

		quadraticCurveBy: function() {
			var handle = Point.read(arguments),
				to = Point.read(arguments),
				current = getCurrentSegment(this)._point;
			this.quadraticCurveTo(current.add(handle), current.add(to));
		},

		arcBy: function() {
			var current = getCurrentSegment(this)._point,
				point = current.add(Point.read(arguments)),
				clockwise = Base.pick(Base.peek(arguments), true);
			if (typeof clockwise === 'boolean') {
				this.arcTo(point, clockwise);
			} else {
				this.arcTo(point, current.add(Point.read(arguments)));
			}
		},

		closePath: function(tolerance) {
			this.setClosed(true);
			this.join(this, tolerance);
		}
	};
}, {

	_getBounds: function(matrix, options) {
		var method = options.handle
				? 'getHandleBounds'
				: options.stroke
				? 'getStrokeBounds'
				: 'getBounds';
		return Path[method](this._segments, this._closed, this, matrix, options);
	},

statics: {
	getBounds: function(segments, closed, path, matrix, options, strokePadding) {
		var first = segments[0];
		if (!first)
			return new Rectangle();
		var coords = new Array(6),
			prevCoords = first._transformCoordinates(matrix, new Array(6)),
			min = prevCoords.slice(0, 2),
			max = min.slice(),
			roots = new Array(2);

		function processSegment(segment) {
			segment._transformCoordinates(matrix, coords);
			for (var i = 0; i < 2; i++) {
				Curve._addBounds(
					prevCoords[i],
					prevCoords[i + 4],
					coords[i + 2],
					coords[i],
					i, strokePadding ? strokePadding[i] : 0, min, max, roots);
			}
			var tmp = prevCoords;
			prevCoords = coords;
			coords = tmp;
		}

		for (var i = 1, l = segments.length; i < l; i++)
			processSegment(segments[i]);
		if (closed)
			processSegment(first);
		return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
	},

	getStrokeBounds: function(segments, closed, path, matrix, options) {
		var style = path.getStyle(),
			stroke = style.hasStroke(),
			strokeWidth = style.getStrokeWidth(),
			strokeMatrix = stroke && path._getStrokeMatrix(matrix, options),
			strokePadding = stroke && Path._getStrokePadding(strokeWidth,
				strokeMatrix),
			bounds = Path.getBounds(segments, closed, path, matrix, options,
				strokePadding);
		if (!stroke)
			return bounds;
		var strokeRadius = strokeWidth / 2,
			join = style.getStrokeJoin(),
			cap = style.getStrokeCap(),
			miterLimit = style.getMiterLimit(),
			joinBounds = new Rectangle(new Size(strokePadding));

		function addPoint(point) {
			bounds = bounds.include(point);
		}

		function addRound(segment) {
			bounds = bounds.unite(
					joinBounds.setCenter(segment._point.transform(matrix)));
		}

		function addJoin(segment, join) {
			if (join === 'round' || segment.isSmooth()) {
				addRound(segment);
			} else {
				Path._addBevelJoin(segment, join, strokeRadius, miterLimit,
						matrix, strokeMatrix, addPoint);
			}
		}

		function addCap(segment, cap) {
			if (cap === 'round') {
				addRound(segment);
			} else {
				Path._addSquareCap(segment, cap, strokeRadius, matrix,
						strokeMatrix, addPoint);
			}
		}

		var length = segments.length - (closed ? 0 : 1);
		for (var i = 1; i < length; i++)
			addJoin(segments[i], join);
		if (closed) {
			addJoin(segments[0], join);
		} else if (length > 0) {
			addCap(segments[0], cap);
			addCap(segments[segments.length - 1], cap);
		}
		return bounds;
	},

	_getStrokePadding: function(radius, matrix) {
		if (!matrix)
			return [radius, radius];
		var hor = new Point(radius, 0).transform(matrix),
			ver = new Point(0, radius).transform(matrix),
			phi = hor.getAngleInRadians(),
			a = hor.getLength(),
			b = ver.getLength();
		var sin = Math.sin(phi),
			cos = Math.cos(phi),
			tan = Math.tan(phi),
			tx = Math.atan2(b * tan, a),
			ty = Math.atan2(b, tan * a);
		return [Math.abs(a * Math.cos(tx) * cos + b * Math.sin(tx) * sin),
				Math.abs(b * Math.sin(ty) * cos + a * Math.cos(ty) * sin)];
	},

	_addBevelJoin: function(segment, join, radius, miterLimit, matrix,
			strokeMatrix, addPoint, isArea) {
		var curve2 = segment.getCurve(),
			curve1 = curve2.getPrevious(),
			point = curve2.getPoint1().transform(matrix),
			normal1 = curve1.getNormalAtTime(1).multiply(radius)
				.transform(strokeMatrix),
			normal2 = curve2.getNormalAtTime(0).multiply(radius)
				.transform(strokeMatrix);
		if (normal1.getDirectedAngle(normal2) < 0) {
			normal1 = normal1.negate();
			normal2 = normal2.negate();
		}
		if (isArea)
			addPoint(point);
		addPoint(point.add(normal1));
		if (join === 'miter') {
			var corner = new Line(point.add(normal1),
					new Point(-normal1.y, normal1.x), true
				).intersect(new Line(point.add(normal2),
					new Point(-normal2.y, normal2.x), true
				), true);
			if (corner && point.getDistance(corner) <= miterLimit * radius) {
				addPoint(corner);
			}
		}
		addPoint(point.add(normal2));
	},

	_addSquareCap: function(segment, cap, radius, matrix, strokeMatrix,
			addPoint, isArea) {
		var point = segment._point.transform(matrix),
			loc = segment.getLocation(),
			normal = loc.getNormal()
					.multiply(loc.getTime() === 0 ? radius : -radius)
					.transform(strokeMatrix);
		if (cap === 'square') {
			if (isArea) {
				addPoint(point.subtract(normal));
				addPoint(point.add(normal));
			}
			point = point.add(normal.rotate(-90));
		}
		addPoint(point.add(normal));
		addPoint(point.subtract(normal));
	},

	getHandleBounds: function(segments, closed, path, matrix, options) {
		var style = path.getStyle(),
			stroke = options.stroke && style.hasStroke(),
			strokePadding,
			joinPadding;
		if (stroke) {
			var strokeMatrix = path._getStrokeMatrix(matrix, options),
				strokeRadius = style.getStrokeWidth() / 2,
				joinRadius = strokeRadius;
			if (style.getStrokeJoin() === 'miter')
				joinRadius = strokeRadius * style.getMiterLimit();
			if (style.getStrokeCap() === 'square')
				joinRadius = Math.max(joinRadius, strokeRadius * Math.SQRT2);
			strokePadding = Path._getStrokePadding(strokeRadius, strokeMatrix);
			joinPadding = Path._getStrokePadding(joinRadius, strokeMatrix);
		}
		var coords = new Array(6),
			x1 = Infinity,
			x2 = -x1,
			y1 = x1,
			y2 = x2;
		for (var i = 0, l = segments.length; i < l; i++) {
			var segment = segments[i];
			segment._transformCoordinates(matrix, coords);
			for (var j = 0; j < 6; j += 2) {
				var padding = !j ? joinPadding : strokePadding,
					paddingX = padding ? padding[0] : 0,
					paddingY = padding ? padding[1] : 0,
					x = coords[j],
					y = coords[j + 1],
					xn = x - paddingX,
					xx = x + paddingX,
					yn = y - paddingY,
					yx = y + paddingY;
				if (xn < x1) x1 = xn;
				if (xx > x2) x2 = xx;
				if (yn < y1) y1 = yn;
				if (yx > y2) y2 = yx;
			}
		}
		return new Rectangle(x1, y1, x2 - x1, y2 - y1);
	}
}});

Path.inject({ statics: new function() {

	var kappa = 0.5522847498307936,
		ellipseSegments = [
			new Segment([-1, 0], [0, kappa ], [0, -kappa]),
			new Segment([0, -1], [-kappa, 0], [kappa, 0 ]),
			new Segment([1, 0], [0, -kappa], [0, kappa ]),
			new Segment([0, 1], [kappa, 0 ], [-kappa, 0])
		];

	function createPath(segments, closed, args) {
		var props = Base.getNamed(args),
			path = new Path(props && props.insert == false && Item.NO_INSERT);
		path._add(segments);
		path._closed = closed;
		return path.set(props, { insert: true });
	}

	function createEllipse(center, radius, args) {
		var segments = new Array(4);
		for (var i = 0; i < 4; i++) {
			var segment = ellipseSegments[i];
			segments[i] = new Segment(
				segment._point.multiply(radius).add(center),
				segment._handleIn.multiply(radius),
				segment._handleOut.multiply(radius)
			);
		}
		return createPath(segments, true, args);
	}

	return {
		Line: function() {
			return createPath([
				new Segment(Point.readNamed(arguments, 'from')),
				new Segment(Point.readNamed(arguments, 'to'))
			], false, arguments);
		},

		Circle: function() {
			var center = Point.readNamed(arguments, 'center'),
				radius = Base.readNamed(arguments, 'radius');
			return createEllipse(center, new Size(radius), arguments);
		},

		Rectangle: function() {
			var rect = Rectangle.readNamed(arguments, 'rectangle'),
				radius = Size.readNamed(arguments, 'radius', 0,
						{ readNull: true }),
				bl = rect.getBottomLeft(true),
				tl = rect.getTopLeft(true),
				tr = rect.getTopRight(true),
				br = rect.getBottomRight(true),
				segments;
			if (!radius || radius.isZero()) {
				segments = [
					new Segment(bl),
					new Segment(tl),
					new Segment(tr),
					new Segment(br)
				];
			} else {
				radius = Size.min(radius, rect.getSize(true).divide(2));
				var rx = radius.width,
					ry = radius.height,
					hx = rx * kappa,
					hy = ry * kappa;
				segments = [
					new Segment(bl.add(rx, 0), null, [-hx, 0]),
					new Segment(bl.subtract(0, ry), [0, hy]),
					new Segment(tl.add(0, ry), null, [0, -hy]),
					new Segment(tl.add(rx, 0), [-hx, 0], null),
					new Segment(tr.subtract(rx, 0), null, [hx, 0]),
					new Segment(tr.add(0, ry), [0, -hy], null),
					new Segment(br.subtract(0, ry), null, [0, hy]),
					new Segment(br.subtract(rx, 0), [hx, 0])
				];
			}
			return createPath(segments, true, arguments);
		},

		RoundRectangle: '#Rectangle',

		Ellipse: function() {
			var ellipse = Shape._readEllipse(arguments);
			return createEllipse(ellipse.center, ellipse.radius, arguments);
		},

		Oval: '#Ellipse',

		Arc: function() {
			var from = Point.readNamed(arguments, 'from'),
				through = Point.readNamed(arguments, 'through'),
				to = Point.readNamed(arguments, 'to'),
				props = Base.getNamed(arguments),
				path = new Path(props && props.insert == false
						&& Item.NO_INSERT);
			path.moveTo(from);
			path.arcTo(through, to);
			return path.set(props);
		},

		RegularPolygon: function() {
			var center = Point.readNamed(arguments, 'center'),
				sides = Base.readNamed(arguments, 'sides'),
				radius = Base.readNamed(arguments, 'radius'),
				step = 360 / sides,
				three = sides % 3 === 0,
				vector = new Point(0, three ? -radius : radius),
				offset = three ? -1 : 0.5,
				segments = new Array(sides);
			for (var i = 0; i < sides; i++)
				segments[i] = new Segment(center.add(
					vector.rotate((i + offset) * step)));
			return createPath(segments, true, arguments);
		},

		Star: function() {
			var center = Point.readNamed(arguments, 'center'),
				points = Base.readNamed(arguments, 'points') * 2,
				radius1 = Base.readNamed(arguments, 'radius1'),
				radius2 = Base.readNamed(arguments, 'radius2'),
				step = 360 / points,
				vector = new Point(0, -1),
				segments = new Array(points);
			for (var i = 0; i < points; i++)
				segments[i] = new Segment(center.add(vector.rotate(step * i)
						.multiply(i % 2 ? radius2 : radius1)));
			return createPath(segments, true, arguments);
		}
	};
}});

var CompoundPath = PathItem.extend({
	_class: 'CompoundPath',
	_serializeFields: {
		children: []
	},
	beans: true,

	initialize: function CompoundPath(arg) {
		this._children = [];
		this._namedChildren = {};
		if (!this._initialize(arg)) {
			if (typeof arg === 'string') {
				this.setPathData(arg);
			} else {
				this.addChildren(Array.isArray(arg) ? arg : arguments);
			}
		}
	},

	insertChildren: function insertChildren(index, items) {
		var list = items,
			first = list[0];
		if (first && typeof first[0] === 'number')
			list = [list];
		for (var i = items.length - 1; i >= 0; i--) {
			var item = list[i];
			if (list === items && !(item instanceof Path))
				list = Base.slice(list);
			if (Array.isArray(item)) {
				list[i] = new Path({ segments: item, insert: false });
			} else if (item instanceof CompoundPath) {
				list.splice.apply(list, [i, 1].concat(item.removeChildren()));
				item.remove();
			}
		}
		return insertChildren.base.call(this, index, list);
	},

	reduce: function reduce(options) {
		var children = this._children;
		for (var i = children.length - 1; i >= 0; i--) {
			var path = children[i].reduce(options);
			if (path.isEmpty())
				path.remove();
		}
		if (!children.length) {
			var path = new Path(Item.NO_INSERT);
			path.copyAttributes(this);
			path.insertAbove(this);
			this.remove();
			return path;
		}
		return reduce.base.call(this);
	},

	isClosed: function() {
		var children = this._children;
		for (var i = 0, l = children.length; i < l; i++) {
			if (!children[i]._closed)
				return false;
		}
		return true;
	},

	setClosed: function(closed) {
		var children = this._children;
		for (var i = 0, l = children.length; i < l; i++) {
			children[i].setClosed(closed);
		}
	},

	getFirstSegment: function() {
		var first = this.getFirstChild();
		return first && first.getFirstSegment();
	},

	getLastSegment: function() {
		var last = this.getLastChild();
		return last && last.getLastSegment();
	},

	getCurves: function() {
		var children = this._children,
			curves = [];
		for (var i = 0, l = children.length; i < l; i++)
			curves.push.apply(curves, children[i].getCurves());
		return curves;
	},

	getFirstCurve: function() {
		var first = this.getFirstChild();
		return first && first.getFirstCurve();
	},

	getLastCurve: function() {
		var last = this.getLastChild();
		return last && last.getLastCurve();
	},

	getArea: function() {
		var children = this._children,
			area = 0;
		for (var i = 0, l = children.length; i < l; i++)
			area += children[i].getArea();
		return area;
	},

	getLength: function() {
		var children = this._children,
			length = 0;
		for (var i = 0, l = children.length; i < l; i++)
			length += children[i].getLength();
		return length;
	},

	getPathData: function(_matrix, _precision) {
		var children = this._children,
			paths = [];
		for (var i = 0, l = children.length; i < l; i++) {
			var child = children[i],
				mx = child._matrix;
			paths.push(child.getPathData(_matrix && !mx.isIdentity()
					? _matrix.appended(mx) : _matrix, _precision));
		}
		return paths.join('');
	},

	_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
		return _hitTestChildren.base.call(this, point,
				options.class === Path || options.type === 'path' ? options
					: Base.set({}, options, { fill: false }),
				viewMatrix);
	},

	_draw: function(ctx, param, viewMatrix, strokeMatrix) {
		var children = this._children;
		if (!children.length)
			return;

		param = param.extend({ dontStart: true, dontFinish: true });
		ctx.beginPath();
		for (var i = 0, l = children.length; i < l; i++)
			children[i].draw(ctx, param, strokeMatrix);

		if (!param.clip) {
			this._setStyles(ctx, param, viewMatrix);
			var style = this._style;
			if (style.hasFill()) {
				ctx.fill(style.getFillRule());
				ctx.shadowColor = 'rgba(0,0,0,0)';
			}
			if (style.hasStroke())
				ctx.stroke();
		}
	},

	_drawSelected: function(ctx, matrix, selectionItems) {
		var children = this._children;
		for (var i = 0, l = children.length; i < l; i++) {
			var child = children[i],
				mx = child._matrix;
			if (!selectionItems[child._id]) {
				child._drawSelected(ctx, mx.isIdentity() ? matrix
						: matrix.appended(mx));
			}
		}
	}
},
new function() {
	function getCurrentPath(that, check) {
		var children = that._children;
		if (check && !children.length)
			throw new Error('Use a moveTo() command first');
		return children[children.length - 1];
	}

	return Base.each(['lineTo', 'cubicCurveTo', 'quadraticCurveTo', 'curveTo',
			'arcTo', 'lineBy', 'cubicCurveBy', 'quadraticCurveBy', 'curveBy',
			'arcBy'],
		function(key) {
			this[key] = function() {
				var path = getCurrentPath(this, true);
				path[key].apply(path, arguments);
			};
		}, {
			moveTo: function() {
				var current = getCurrentPath(this),
					path = current && current.isEmpty() ? current
							: new Path(Item.NO_INSERT);
				if (path !== current)
					this.addChild(path);
				path.moveTo.apply(path, arguments);
			},

			moveBy: function() {
				var current = getCurrentPath(this, true),
					last = current && current.getLastSegment(),
					point = Point.read(arguments);
				this.moveTo(last ? point.add(last._point) : point);
			},

			closePath: function(tolerance) {
				getCurrentPath(this, true).closePath(tolerance);
			}
		}
	);
}, Base.each(['reverse', 'flatten', 'simplify', 'smooth'], function(key) {
	this[key] = function(param) {
		var children = this._children,
			res;
		for (var i = 0, l = children.length; i < l; i++) {
			res = children[i][key](param) || res;
		}
		return res;
	};
}, {}));

PathItem.inject(new function() {
	var min = Math.min,
		max = Math.max,
		abs = Math.abs,
		operators = {
			unite:     { '1': true, '2': true },
			intersect: { '2': true },
			subtract:  { '1': true },
			exclude:   { '1': true, '-1': true }
		};

	function preparePath(path, resolve) {
		var res = path.clone(false).reduce({ simplify: true })
				.transform(null, true, true);
		return resolve
				? res.resolveCrossings().reorient(
					res.getFillRule() === 'nonzero', true)
				: res;
	}

	function createResult(paths, simplify, path1, path2, options) {
		var result = new CompoundPath(Item.NO_INSERT);
		result.addChildren(paths, true);
		result = result.reduce({ simplify: simplify });
		if (!(options && options.insert == false)) {
			result.insertAbove(path2 && path1.isSibling(path2)
					&& path1.getIndex() < path2.getIndex() ? path2 : path1);
		}
		result.copyAttributes(path1, true);
		return result;
	}

	function traceBoolean(path1, path2, operation, options) {
		if (options && (options.trace == false || options.stroke) &&
				/^(subtract|intersect)$/.test(operation))
			return splitBoolean(path1, path2, operation);
		var _path1 = preparePath(path1, true),
			_path2 = path2 && path1 !== path2 && preparePath(path2, true),
			operator = operators[operation];
		operator[operation] = true;
		if (_path2 && (operator.subtract || operator.exclude)
				^ (_path2.isClockwise() ^ _path1.isClockwise()))
			_path2.reverse();
		var crossings = divideLocations(
				CurveLocation.expand(_path1.getCrossings(_path2))),
			paths1 = _path1._children || [_path1],
			paths2 = _path2 && (_path2._children || [_path2]),
			segments = [],
			curves = [],
			paths;

		function collect(paths) {
			for (var i = 0, l = paths.length; i < l; i++) {
				var path = paths[i];
				segments.push.apply(segments, path._segments);
				curves.push.apply(curves, path.getCurves());
				path._overlapsOnly = true;
			}
		}

		if (crossings.length) {
			collect(paths1);
			if (paths2)
				collect(paths2);
			for (var i = 0, l = crossings.length; i < l; i++) {
				propagateWinding(crossings[i]._segment, _path1, _path2, curves,
						operator);
			}
			for (var i = 0, l = segments.length; i < l; i++) {
				var segment = segments[i],
					inter = segment._intersection;
				if (!segment._winding) {
					propagateWinding(segment, _path1, _path2, curves, operator);
				}
				if (!(inter && inter._overlap))
					segment._path._overlapsOnly = false;
			}
			paths = tracePaths(segments, operator);
		} else {
			paths = reorientPaths(
					paths2 ? paths1.concat(paths2) : paths1.slice(),
					function(w) {
						return !!operator[w];
					});
		}

		return createResult(paths, true, path1, path2, options);
	}

	function splitBoolean(path1, path2, operation) {
		var _path1 = preparePath(path1),
			_path2 = preparePath(path2),
			crossings = _path1.getCrossings(_path2),
			subtract = operation === 'subtract',
			divide = operation === 'divide',
			added = {},
			paths = [];

		function addPath(path) {
			if (!added[path._id] && (divide ||
					_path2.contains(path.getPointAt(path.getLength() / 2))
						^ subtract)) {
				paths.unshift(path);
				return added[path._id] = true;
			}
		}

		for (var i = crossings.length - 1; i >= 0; i--) {
			var path = crossings[i].split();
			if (path) {
				if (addPath(path))
					path.getFirstSegment().setHandleIn(0, 0);
				_path1.getLastSegment().setHandleOut(0, 0);
			}
		}
		addPath(_path1);
		return createResult(paths, false, path1, path2);
	}

	function linkIntersections(from, to) {
		var prev = from;
		while (prev) {
			if (prev === to)
				return;
			prev = prev._previous;
		}
		while (from._next && from._next !== to)
			from = from._next;
		if (!from._next) {
			while (to._previous)
				to = to._previous;
			from._next = to;
			to._previous = from;
		}
	}

	function clearCurveHandles(curves) {
		for (var i = curves.length - 1; i >= 0; i--)
			curves[i].clearHandles();
	}

	function reorientPaths(paths, isInside, clockwise) {
		var length = paths && paths.length;
		if (length) {
			var lookup = Base.each(paths, function (path, i) {
					this[path._id] = {
						container: null,
						winding: path.isClockwise() ? 1 : -1,
						index: i
					};
				}, {}),
				sorted = paths.slice().sort(function (a, b) {
					return abs(b.getArea()) - abs(a.getArea());
				}),
				first = sorted[0];
			if (clockwise == null)
				clockwise = first.isClockwise();
			for (var i = 0; i < length; i++) {
				var path1 = sorted[i],
					entry1 = lookup[path1._id],
					point = path1.getInteriorPoint(),
					containerWinding = 0;
				for (var j = i - 1; j >= 0; j--) {
					var path2 = sorted[j];
					if (path2.contains(point)) {
						var entry2 = lookup[path2._id];
						containerWinding = entry2.winding;
						entry1.winding += containerWinding;
						entry1.container = entry2.exclude ? entry2.container
								: path2;
						break;
					}
				}
				if (isInside(entry1.winding) === isInside(containerWinding)) {
					entry1.exclude = true;
					paths[entry1.index] = null;
				} else {
					var container = entry1.container;
					path1.setClockwise(container ? !container.isClockwise()
							: clockwise);
				}
			}
		}
		return paths;
	}

	function divideLocations(locations, include, clearLater) {
		var results = include && [],
			tMin = 1e-8,
			tMax = 1 - tMin,
			clearHandles = false,
			clearCurves = clearLater || [],
			clearLookup = clearLater && {},
			renormalizeLocs,
			prevCurve,
			prevTime;

		function getId(curve) {
			return curve._path._id + '.' + curve._segment1._index;
		}

		for (var i = (clearLater && clearLater.length) - 1; i >= 0; i--) {
			var curve = clearLater[i];
			if (curve._path)
				clearLookup[getId(curve)] = true;
		}

		for (var i = locations.length - 1; i >= 0; i--) {
			var loc = locations[i],
				time = loc._time,
				origTime = time,
				exclude = include && !include(loc),
				curve = loc._curve,
				segment;
			if (curve) {
				if (curve !== prevCurve) {
					clearHandles = !curve.hasHandles()
							|| clearLookup && clearLookup[getId(curve)];
					renormalizeLocs = [];
					prevTime = null;
					prevCurve = curve;
				} else if (prevTime >= tMin) {
					time /= prevTime;
				}
			}
			if (exclude) {
				if (renormalizeLocs)
					renormalizeLocs.push(loc);
				continue;
			} else if (include) {
				results.unshift(loc);
			}
			prevTime = origTime;
			if (time < tMin) {
				segment = curve._segment1;
			} else if (time > tMax) {
				segment = curve._segment2;
			} else {
				var newCurve = curve.divideAtTime(time, true);
				if (clearHandles)
					clearCurves.push(curve, newCurve);
				segment = newCurve._segment1;
				for (var j = renormalizeLocs.length - 1; j >= 0; j--) {
					var l = renormalizeLocs[j];
					l._time = (l._time - time) / (1 - time);
				}
			}
			loc._setSegment(segment);
			var inter = segment._intersection,
				dest = loc._intersection;
			if (inter) {
				linkIntersections(inter, dest);
				var other = inter;
				while (other) {
					linkIntersections(other._intersection, inter);
					other = other._next;
				}
			} else {
				segment._intersection = dest;
			}
		}
		if (!clearLater)
			clearCurveHandles(clearCurves);
		return results || locations;
	}

	function getWinding(point, curves, dir, closed, dontFlip) {
		var ia = dir ? 1 : 0,
			io = ia ^ 1,
			pv = [point.x, point.y],
			pa = pv[ia],
			po = pv[io],
			windingEpsilon = 1e-9,
			qualityEpsilon = 1e-6,
			paL = pa - windingEpsilon,
			paR = pa + windingEpsilon,
			windingL = 0,
			windingR = 0,
			pathWindingL = 0,
			pathWindingR = 0,
			onPath = false,
			onAnyPath = false,
			quality = 1,
			roots = [],
			vPrev,
			vClose;

		function addWinding(v) {
			var o0 = v[io + 0],
				o3 = v[io + 6];
			if (po < min(o0, o3) || po > max(o0, o3)) {
				return;
			}
			var a0 = v[ia + 0],
				a1 = v[ia + 2],
				a2 = v[ia + 4],
				a3 = v[ia + 6];
			if (o0 === o3) {
				if (a0 < paR && a3 > paL || a3 < paR && a0 > paL) {
					onPath = true;
				}
				return;
			}
			var t =   po === o0 ? 0
					: po === o3 ? 1
					: paL > max(a0, a1, a2, a3) || paR < min(a0, a1, a2, a3)
					? 1
					: Curve.solveCubic(v, io, po, roots, 0, 1) > 0
						? roots[0]
						: 1,
				a =   t === 0 ? a0
					: t === 1 ? a3
					: Curve.getPoint(v, t)[dir ? 'y' : 'x'],
				winding = o0 > o3 ? 1 : -1,
				windingPrev = vPrev[io] > vPrev[io + 6] ? 1 : -1,
				a3Prev = vPrev[ia + 6];
			if (po !== o0) {
				if (a < paL) {
					pathWindingL += winding;
				} else if (a > paR) {
					pathWindingR += winding;
				} else {
					onPath = true;
				}
				if (a > pa - qualityEpsilon && a < pa + qualityEpsilon)
					quality /= 2;
			} else {
				if (winding !== windingPrev) {
					if (a0 < paL) {
						pathWindingL += winding;
					} else if (a0 > paR) {
						pathWindingR += winding;
					}
				} else if (a0 != a3Prev) {
					if (a3Prev < paR && a > paR) {
						pathWindingR += winding;
						onPath = true;
					} else if (a3Prev > paL && a < paL) {
						pathWindingL += winding;
						onPath = true;
					}
				}
				quality = 0;
			}
			vPrev = v;
			return !dontFlip && a > paL && a < paR
					&& Curve.getTangent(v, t)[dir ? 'x' : 'y'] === 0
					&& getWinding(point, curves, !dir, closed, true);
		}

		function handleCurve(v) {
			var o0 = v[io + 0],
				o1 = v[io + 2],
				o2 = v[io + 4],
				o3 = v[io + 6];
			if (po <= max(o0, o1, o2, o3) && po >= min(o0, o1, o2, o3)) {
				var a0 = v[ia + 0],
					a1 = v[ia + 2],
					a2 = v[ia + 4],
					a3 = v[ia + 6],
					monoCurves = paL > max(a0, a1, a2, a3) ||
								 paR < min(a0, a1, a2, a3)
							? [v] : Curve.getMonoCurves(v, dir),
					res;
				for (var i = 0, l = monoCurves.length; i < l; i++) {
					if (res = addWinding(monoCurves[i]))
						return res;
				}
			}
		}

		for (var i = 0, l = curves.length; i < l; i++) {
			var curve = curves[i],
				path = curve._path,
				v = curve.getValues(),
				res;
			if (!i || curves[i - 1]._path !== path) {
				vPrev = null;
				if (!path._closed) {
					vClose = Curve.getValues(
							path.getLastCurve().getSegment2(),
							curve.getSegment1(),
							null, !closed);
					if (vClose[io] !== vClose[io + 6]) {
						vPrev = vClose;
					}
				}

				if (!vPrev) {
					vPrev = v;
					var prev = path.getLastCurve();
					while (prev && prev !== curve) {
						var v2 = prev.getValues();
						if (v2[io] !== v2[io + 6]) {
							vPrev = v2;
							break;
						}
						prev = prev.getPrevious();
					}
				}
			}

			if (res = handleCurve(v))
				return res;

			if (i + 1 === l || curves[i + 1]._path !== path) {
				if (vClose && (res = handleCurve(vClose)))
					return res;
				if (onPath && !pathWindingL && !pathWindingR) {
					pathWindingL = pathWindingR = path.isClockwise(closed) ^ dir
							? 1 : -1;
				}
				windingL += pathWindingL;
				windingR += pathWindingR;
				pathWindingL = pathWindingR = 0;
				if (onPath) {
					onAnyPath = true;
					onPath = false;
				}
				vClose = null;
			}
		}
		windingL = abs(windingL);
		windingR = abs(windingR);
		return {
			winding: max(windingL, windingR),
			windingL: windingL,
			windingR: windingR,
			quality: quality,
			onPath: onAnyPath
		};
	}

	function propagateWinding(segment, path1, path2, curves, operator) {
		var chain = [],
			start = segment,
			totalLength = 0,
			winding;
		do {
			var curve = segment.getCurve(),
				length = curve.getLength();
			chain.push({ segment: segment, curve: curve, length: length });
			totalLength += length;
			segment = segment.getNext();
		} while (segment && !segment._intersection && segment !== start);
		var offsets = [0.5, 0.25, 0.75],
			winding = { winding: 0, quality: -1 },
			tMin = 1e-8,
			tMax = 1 - tMin;
		for (var i = 0; i < offsets.length && winding.quality < 0.5; i++) {
			var length = totalLength * offsets[i];
			for (var j = 0, l = chain.length; j < l; j++) {
				var entry = chain[j],
					curveLength = entry.length;
				if (length <= curveLength) {
					var curve = entry.curve,
						path = curve._path,
						parent = path._parent,
						operand = parent instanceof CompoundPath ? parent : path,
						t = Numerical.clamp(curve.getTimeAt(length), tMin, tMax),
						pt = curve.getPointAtTime(t),
						dir = abs(curve.getTangentAtTime(t).y) < Math.SQRT1_2;
					var wind = !(operator.subtract && path2 && (
							operand === path1 &&
								path2._getWinding(pt, dir, true).winding ||
							operand === path2 &&
								!path1._getWinding(pt, dir, true).winding))
							? getWinding(pt, curves, dir, true)
							: { winding: 0, quality: 1 };
					if (wind.quality > winding.quality)
						winding = wind;
					break;
				}
				length -= curveLength;
			}
		}
		for (var j = chain.length - 1; j >= 0; j--) {
			chain[j].segment._winding = winding;
		}
	}

	function tracePaths(segments, operator) {
		var paths = [],
			starts;

		function isValid(seg) {
			var winding;
			return !!(seg && !seg._visited && (!operator
					|| operator[(winding = seg._winding || {}).winding]
						&& !(operator.unite && winding.winding === 2
							&& winding.windingL && winding.windingR)));
		}

		function isStart(seg) {
			if (seg) {
				for (var i = 0, l = starts.length; i < l; i++) {
					if (seg === starts[i])
						return true;
				}
			}
			return false;
		}

		function visitPath(path) {
			var segments = path._segments;
			for (var i = 0, l = segments.length; i < l; i++) {
				segments[i]._visited = true;
			}
		}

		function getCrossingSegments(segment, collectStarts) {
			var inter = segment._intersection,
				start = inter,
				crossings = [];
			if (collectStarts)
				starts = [segment];

			function collect(inter, end) {
				while (inter && inter !== end) {
					var other = inter._segment,
						path = other && other._path;
					if (path) {
						var next = other.getNext() || path.getFirstSegment(),
							nextInter = next._intersection;
						if (other !== segment && (isStart(other)
							|| isStart(next)
							|| next && (isValid(other) && (isValid(next)
								|| nextInter && isValid(nextInter._segment))))
						) {
							crossings.push(other);
						}
						if (collectStarts)
							starts.push(other);
					}
					inter = inter._next;
				}
			}

			if (inter) {
				collect(inter);
				while (inter && inter._prev)
					inter = inter._prev;
				collect(inter, start);
			}
			return crossings;
		}

		segments.sort(function(seg1, seg2) {
			var inter1 = seg1._intersection,
				inter2 = seg2._intersection,
				over1 = !!(inter1 && inter1._overlap),
				over2 = !!(inter2 && inter2._overlap),
				path1 = seg1._path,
				path2 = seg2._path;
			return over1 ^ over2
					? over1 ? 1 : -1
					: !inter1 ^ !inter2
						? inter1 ? 1 : -1
						: path1 !== path2
							? path1._id - path2._id
							: seg1._index - seg2._index;
		});

		for (var i = 0, l = segments.length; i < l; i++) {
			var seg = segments[i],
				valid = isValid(seg),
				path = null,
				finished = false,
				closed = true,
				branches = [],
				branch,
				visited,
				handleIn;
			if (valid && seg._path._overlapsOnly) {
				var path1 = seg._path,
					path2 = seg._intersection._segment._path;
				if (path1.compare(path2)) {
					if (path1.getArea())
						paths.push(path1.clone(false));
					visitPath(path1);
					visitPath(path2);
					valid = false;
				}
			}
			while (valid) {
				var first = !path,
					crossings = getCrossingSegments(seg, first),
					other = crossings.shift(),
					finished = !first && (isStart(seg) || isStart(other)),
					cross = !finished && other;
				if (first) {
					path = new Path(Item.NO_INSERT);
					branch = null;
				}
				if (finished) {
					if (seg.isFirst() || seg.isLast())
						closed = seg._path._closed;
					seg._visited = true;
					break;
				}
				if (cross && branch) {
					branches.push(branch);
					branch = null;
				}
				if (!branch) {
					if (cross)
						crossings.push(seg);
					branch = {
						start: path._segments.length,
						crossings: crossings,
						visited: visited = [],
						handleIn: handleIn
					};
				}
				if (cross)
					seg = other;
				if (!isValid(seg)) {
					path.removeSegments(branch.start);
					for (var j = 0, k = visited.length; j < k; j++) {
						visited[j]._visited = false;
					}
					visited.length = 0;
					do {
						seg = branch && branch.crossings.shift();
						if (!seg || !seg._path) {
							seg = null;
							branch = branches.pop();
							if (branch) {
								visited = branch.visited;
								handleIn = branch.handleIn;
							}
						}
					} while (branch && !isValid(seg));
					if (!seg)
						break;
				}
				var next = seg.getNext();
				path.add(new Segment(seg._point, handleIn,
						next && seg._handleOut));
				seg._visited = true;
				visited.push(seg);
				seg = next || seg._path.getFirstSegment();
				handleIn = next && next._handleIn;
			}
			if (finished) {
				if (closed) {
					path.getFirstSegment().setHandleIn(handleIn);
					path.setClosed(closed);
				}
				if (path.getArea() !== 0) {
					paths.push(path);
				}
			}
		}
		return paths;
	}

	return {
		_getWinding: function(point, dir, closed) {
			return getWinding(point, this.getCurves(), dir, closed);
		},

		unite: function(path, options) {
			return traceBoolean(this, path, 'unite', options);
		},

		intersect: function(path, options) {
			return traceBoolean(this, path, 'intersect', options);
		},

		subtract: function(path, options) {
			return traceBoolean(this, path, 'subtract', options);
		},

		exclude: function(path, options) {
			return traceBoolean(this, path, 'exclude', options);
		},

		divide: function(path, options) {
			return options && (options.trace == false || options.stroke)
					? splitBoolean(this, path, 'divide')
					: createResult([
						this.subtract(path, options),
						this.intersect(path, options)
					], true, this, path, options);
		},

		resolveCrossings: function() {
			var children = this._children,
				paths = children || [this];

			function hasOverlap(seg, path) {
				var inter = seg && seg._intersection;
				return inter && inter._overlap && inter._path === path;
			}

			var hasOverlaps = false,
				hasCrossings = false,
				intersections = this.getIntersections(null, function(inter) {
					return inter.hasOverlap() && (hasOverlaps = true) ||
							inter.isCrossing() && (hasCrossings = true);
				}),
				clearCurves = hasOverlaps && hasCrossings && [];
			intersections = CurveLocation.expand(intersections);
			if (hasOverlaps) {
				var overlaps = divideLocations(intersections, function(inter) {
					return inter.hasOverlap();
				}, clearCurves);
				for (var i = overlaps.length - 1; i >= 0; i--) {
					var overlap = overlaps[i],
						path = overlap._path,
						seg = overlap._segment,
						prev = seg.getPrevious(),
						next = seg.getNext();
					if (hasOverlap(prev, path) && hasOverlap(next, path)) {
						seg.remove();
						prev._handleOut._set(0, 0);
						next._handleIn._set(0, 0);
						if (prev !== seg && !prev.getCurve().hasLength()) {
							next._handleIn.set(prev._handleIn);
							prev.remove();
						}
					}
				}
			}
			if (hasCrossings) {
				divideLocations(intersections, hasOverlaps && function(inter) {
					var curve1 = inter.getCurve(),
						seg1 = inter.getSegment(),
						other = inter._intersection,
						curve2 = other._curve,
						seg2 = other._segment;
					if (curve1 && curve2 && curve1._path && curve2._path)
						return true;
					if (seg1)
						seg1._intersection = null;
					if (seg2)
						seg2._intersection = null;
				}, clearCurves);
				if (clearCurves)
					clearCurveHandles(clearCurves);
				paths = tracePaths(Base.each(paths, function(path) {
					this.push.apply(this, path._segments);
				}, []));
			}
			var length = paths.length,
				item;
			if (length > 1 && children) {
				if (paths !== children)
					this.setChildren(paths);
				item = this;
			} else if (length === 1 && !children) {
				if (paths[0] !== this)
					this.setSegments(paths[0].removeSegments());
				item = this;
			}
			if (!item) {
				item = new CompoundPath(Item.NO_INSERT);
				item.addChildren(paths);
				item = item.reduce();
				item.copyAttributes(this);
				this.replaceWith(item);
			}
			return item;
		},

		reorient: function(nonZero, clockwise) {
			var children = this._children;
			if (children && children.length) {
				this.setChildren(reorientPaths(this.removeChildren(),
						function(w) {
							return !!(nonZero ? w : w & 1);
						},
						clockwise));
			} else if (clockwise !== undefined) {
				this.setClockwise(clockwise);
			}
			return this;
		},

		getInteriorPoint: function() {
			var bounds = this.getBounds(),
				point = bounds.getCenter(true);
			if (!this.contains(point)) {
				var curves = this.getCurves(),
					y = point.y,
					intercepts = [],
					roots = [];
				for (var i = 0, l = curves.length; i < l; i++) {
					var v = curves[i].getValues(),
						o0 = v[1],
						o1 = v[3],
						o2 = v[5],
						o3 = v[7];
					if (y >= min(o0, o1, o2, o3) && y <= max(o0, o1, o2, o3)) {
						var monoCurves = Curve.getMonoCurves(v);
						for (var j = 0, m = monoCurves.length; j < m; j++) {
							var mv = monoCurves[j],
								mo0 = mv[1],
								mo3 = mv[7];
							if ((mo0 !== mo3) &&
								(y >= mo0 && y <= mo3 || y >= mo3 && y <= mo0)){
								var x = y === mo0 ? mv[0]
									: y === mo3 ? mv[6]
									: Curve.solveCubic(mv, 1, y, roots, 0, 1)
										=== 1
										? Curve.getPoint(mv, roots[0]).x
										: (mv[0] + mv[6]) / 2;
								intercepts.push(x);
							}
						}
					}
				}
				if (intercepts.length > 1) {
					intercepts.sort(function(a, b) { return a - b; });
					point.x = (intercepts[0] + intercepts[1]) / 2;
				}
			}
			return point;
		}
	};
});

var PathFlattener = Base.extend({
	_class: 'PathFlattener',

	initialize: function(path, flatness, maxRecursion, ignoreStraight, matrix) {
		var curves = [],
			parts = [],
			length = 0,
			minSpan = 1 / (maxRecursion || 32),
			segments = path._segments,
			segment1 = segments[0],
			segment2;

		function addCurve(segment1, segment2) {
			var curve = Curve.getValues(segment1, segment2, matrix);
			curves.push(curve);
			computeParts(curve, segment1._index, 0, 1);
		}

		function computeParts(curve, index, t1, t2) {
			if ((t2 - t1) > minSpan
					&& !(ignoreStraight && Curve.isStraight(curve))
					&& !Curve.isFlatEnough(curve, flatness || 0.25)) {
				var halves = Curve.subdivide(curve, 0.5),
					tMid = (t1 + t2) / 2;
				computeParts(halves[0], index, t1, tMid);
				computeParts(halves[1], index, tMid, t2);
			} else {
				var dx = curve[6] - curve[0],
					dy = curve[7] - curve[1],
					dist = Math.sqrt(dx * dx + dy * dy);
				if (dist > 0) {
					length += dist;
					parts.push({
						offset: length,
						curve: curve,
						index: index,
						time: t2,
					});
				}
			}
		}

		for (var i = 1, l = segments.length; i < l; i++) {
			segment2 = segments[i];
			addCurve(segment1, segment2);
			segment1 = segment2;
		}
		if (path._closed)
			addCurve(segment2, segments[0]);
		this.curves = curves;
		this.parts = parts;
		this.length = length;
		this.index = 0;
	},

	_get: function(offset) {
		var parts = this.parts,
			length = parts.length,
			start,
			i, j = this.index;
		for (;;) {
			i = j;
			if (!j || parts[--j].offset < offset)
				break;
		}
		for (; i < length; i++) {
			var part = parts[i];
			if (part.offset >= offset) {
				this.index = i;
				var prev = parts[i - 1],
					prevTime = prev && prev.index === part.index ? prev.time : 0,
					prevOffset = prev ? prev.offset : 0;
				return {
					index: part.index,
					time: prevTime + (part.time - prevTime)
						* (offset - prevOffset) / (part.offset - prevOffset)
				};
			}
		}
		return {
			index: parts[length - 1].index,
			time: 1
		};
	},

	drawPart: function(ctx, from, to) {
		var start = this._get(from),
			end = this._get(to);
		for (var i = start.index, l = end.index; i <= l; i++) {
			var curve = Curve.getPart(this.curves[i],
					i === start.index ? start.time : 0,
					i === end.index ? end.time : 1);
			if (i === start.index)
				ctx.moveTo(curve[0], curve[1]);
			ctx.bezierCurveTo.apply(ctx, curve.slice(2));
		}
	}
}, Base.each(Curve._evaluateMethods,
	function(name) {
		this[name + 'At'] = function(offset) {
			var param = this._get(offset);
			return Curve[name](this.curves[param.index], param.time);
		};
	}, {})
);

var PathFitter = Base.extend({
	initialize: function(path) {
		var points = this.points = [],
			segments = path._segments,
			closed = path._closed;
		for (var i = 0, prev, l = segments.length; i < l; i++) {
			var point = segments[i].point;
			if (!prev || !prev.equals(point)) {
				points.push(prev = point.clone());
			}
		}
		if (closed) {
			points.unshift(points[points.length - 1]);
			points.push(points[1]);
		}
		this.closed = closed;
	},

	fit: function(error) {
		var points = this.points,
			length = points.length,
			segments = null;
		if (length > 0) {
			segments = [new Segment(points[0])];
			if (length > 1) {
				this.fitCubic(segments, error, 0, length - 1,
						points[1].subtract(points[0]),
						points[length - 2].subtract(points[length - 1]));
				if (this.closed) {
					segments.shift();
					segments.pop();
				}
			}
		}
		return segments;
	},

	fitCubic: function(segments, error, first, last, tan1, tan2) {
		var points = this.points;
		if (last - first === 1) {
			var pt1 = points[first],
				pt2 = points[last],
				dist = pt1.getDistance(pt2) / 3;
			this.addCurve(segments, [pt1, pt1.add(tan1.normalize(dist)),
					pt2.add(tan2.normalize(dist)), pt2]);
			return;
		}
		var uPrime = this.chordLengthParameterize(first, last),
			maxError = Math.max(error, error * error),
			split,
			parametersInOrder = true;
		for (var i = 0; i <= 4; i++) {
			var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
			var max = this.findMaxError(first, last, curve, uPrime);
			if (max.error < error && parametersInOrder) {
				this.addCurve(segments, curve);
				return;
			}
			split = max.index;
			if (max.error >= maxError)
				break;
			parametersInOrder = this.reparameterize(first, last, uPrime, curve);
			maxError = max.error;
		}
		var tanCenter = points[split - 1].subtract(points[split + 1]);
		this.fitCubic(segments, error, first, split, tan1, tanCenter);
		this.fitCubic(segments, error, split, last, tanCenter.negate(), tan2);
	},

	addCurve: function(segments, curve) {
		var prev = segments[segments.length - 1];
		prev.setHandleOut(curve[1].subtract(curve[0]));
		segments.push(new Segment(curve[3], curve[2].subtract(curve[3])));
	},

	generateBezier: function(first, last, uPrime, tan1, tan2) {
		var epsilon = 1e-12,
			abs = Math.abs,
			points = this.points,
			pt1 = points[first],
			pt2 = points[last],
			C = [[0, 0], [0, 0]],
			X = [0, 0];

		for (var i = 0, l = last - first + 1; i < l; i++) {
			var u = uPrime[i],
				t = 1 - u,
				b = 3 * u * t,
				b0 = t * t * t,
				b1 = b * t,
				b2 = b * u,
				b3 = u * u * u,
				a1 = tan1.normalize(b1),
				a2 = tan2.normalize(b2),
				tmp = points[first + i]
					.subtract(pt1.multiply(b0 + b1))
					.subtract(pt2.multiply(b2 + b3));
			C[0][0] += a1.dot(a1);
			C[0][1] += a1.dot(a2);
			C[1][0] = C[0][1];
			C[1][1] += a2.dot(a2);
			X[0] += a1.dot(tmp);
			X[1] += a2.dot(tmp);
		}

		var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
			alpha1,
			alpha2;
		if (abs(detC0C1) > epsilon) {
			var detC0X = C[0][0] * X[1]    - C[1][0] * X[0],
				detXC1 = X[0]    * C[1][1] - X[1]    * C[0][1];
			alpha1 = detXC1 / detC0C1;
			alpha2 = detC0X / detC0C1;
		} else {
			var c0 = C[0][0] + C[0][1],
				c1 = C[1][0] + C[1][1];
			alpha1 = alpha2 = abs(c0) > epsilon ? X[0] / c0
							: abs(c1) > epsilon ? X[1] / c1
							: 0;
		}

		var segLength = pt2.getDistance(pt1),
			eps = epsilon * segLength,
			handle1,
			handle2;
		if (alpha1 < eps || alpha2 < eps) {
			alpha1 = alpha2 = segLength / 3;
		} else {
			var line = pt2.subtract(pt1);
			handle1 = tan1.normalize(alpha1);
			handle2 = tan2.normalize(alpha2);
			if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
				alpha1 = alpha2 = segLength / 3;
				handle1 = handle2 = null;
			}
		}

		return [pt1,
				pt1.add(handle1 || tan1.normalize(alpha1)),
				pt2.add(handle2 || tan2.normalize(alpha2)),
				pt2];
	},

	reparameterize: function(first, last, u, curve) {
		for (var i = first; i <= last; i++) {
			u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
		}
		for (var i = 1, l = u.length; i < l; i++) {
			if (u[i] <= u[i - 1])
				return false;
		}
		return true;
	},

	findRoot: function(curve, point, u) {
		var curve1 = [],
			curve2 = [];
		for (var i = 0; i <= 2; i++) {
			curve1[i] = curve[i + 1].subtract(curve[i]).multiply(3);
		}
		for (var i = 0; i <= 1; i++) {
			curve2[i] = curve1[i + 1].subtract(curve1[i]).multiply(2);
		}
		var pt = this.evaluate(3, curve, u),
			pt1 = this.evaluate(2, curve1, u),
			pt2 = this.evaluate(1, curve2, u),
			diff = pt.subtract(point),
			df = pt1.dot(pt1) + diff.dot(pt2);
		return Numerical.isZero(df) ? u : u - diff.dot(pt1) / df;
	},

	evaluate: function(degree, curve, t) {
		var tmp = curve.slice();
		for (var i = 1; i <= degree; i++) {
			for (var j = 0; j <= degree - i; j++) {
				tmp[j] = tmp[j].multiply(1 - t).add(tmp[j + 1].multiply(t));
			}
		}
		return tmp[0];
	},

	chordLengthParameterize: function(first, last) {
		var u = [0];
		for (var i = first + 1; i <= last; i++) {
			u[i - first] = u[i - first - 1]
					+ this.points[i].getDistance(this.points[i - 1]);
		}
		for (var i = 1, m = last - first; i <= m; i++) {
			u[i] /= u[m];
		}
		return u;
	},

	findMaxError: function(first, last, curve, u) {
		var index = Math.floor((last - first + 1) / 2),
			maxDist = 0;
		for (var i = first + 1; i < last; i++) {
			var P = this.evaluate(3, curve, u[i - first]);
			var v = P.subtract(this.points[i]);
			var dist = v.x * v.x + v.y * v.y;
			if (dist >= maxDist) {
				maxDist = dist;
				index = i;
			}
		}
		return {
			error: maxDist,
			index: index
		};
	}
});

var TextItem = Item.extend({
	_class: 'TextItem',
	_applyMatrix: false,
	_canApplyMatrix: false,
	_serializeFields: {
		content: null
	},
	_boundsOptions: { stroke: false, handle: false },

	initialize: function TextItem(arg) {
		this._content = '';
		this._lines = [];
		var hasProps = arg && Base.isPlainObject(arg)
				&& arg.x === undefined && arg.y === undefined;
		this._initialize(hasProps && arg, !hasProps && Point.read(arguments));
	},

	_equals: function(item) {
		return this._content === item._content;
	},

	copyContent: function(source) {
		this.setContent(source._content);
	},

	getContent: function() {
		return this._content;
	},

	setContent: function(content) {
		this._content = '' + content;
		this._lines = this._content.split(/\r\n|\n|\r/mg);
		this._changed(265);
	},

	isEmpty: function() {
		return !this._content;
	},

	getCharacterStyle: '#getStyle',
	setCharacterStyle: '#setStyle',

	getParagraphStyle: '#getStyle',
	setParagraphStyle: '#setStyle'
});

var PointText = TextItem.extend({
	_class: 'PointText',

	initialize: function PointText() {
		TextItem.apply(this, arguments);
	},

	getPoint: function() {
		var point = this._matrix.getTranslation();
		return new LinkedPoint(point.x, point.y, this, 'setPoint');
	},

	setPoint: function() {
		var point = Point.read(arguments);
		this.translate(point.subtract(this._matrix.getTranslation()));
	},

	_draw: function(ctx, param, viewMatrix) {
		if (!this._content)
			return;
		this._setStyles(ctx, param, viewMatrix);
		var lines = this._lines,
			style = this._style,
			hasFill = style.hasFill(),
			hasStroke = style.hasStroke(),
			leading = style.getLeading(),
			shadowColor = ctx.shadowColor;
		ctx.font = style.getFontStyle();
		ctx.textAlign = style.getJustification();
		for (var i = 0, l = lines.length; i < l; i++) {
			ctx.shadowColor = shadowColor;
			var line = lines[i];
			if (hasFill) {
				ctx.fillText(line, 0, 0);
				ctx.shadowColor = 'rgba(0,0,0,0)';
			}
			if (hasStroke)
				ctx.strokeText(line, 0, 0);
			ctx.translate(0, leading);
		}
	},

	_getBounds: function(matrix, options) {
		var style = this._style,
			lines = this._lines,
			numLines = lines.length,
			justification = style.getJustification(),
			leading = style.getLeading(),
			width = this.getView().getTextWidth(style.getFontStyle(), lines),
			x = 0;
		if (justification !== 'left')
			x -= width / (justification === 'center' ? 2: 1);
		var rect = new Rectangle(x,
					numLines ? - 0.75 * leading : 0,
					width, numLines * leading);
		return matrix ? matrix._transformBounds(rect, rect) : rect;
	}
});

var Color = Base.extend(new function() {
	var types = {
		gray: ['gray'],
		rgb: ['red', 'green', 'blue'],
		hsb: ['hue', 'saturation', 'brightness'],
		hsl: ['hue', 'saturation', 'lightness'],
		gradient: ['gradient', 'origin', 'destination', 'highlight']
	};

	var componentParsers = {},
		colorCache = {},
		colorCtx;

	function fromCSS(string) {
		var match = string.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/),
			components;
		if (match) {
			components = [0, 0, 0];
			for (var i = 0; i < 3; i++) {
				var value = match[i + 1];
				components[i] = parseInt(value.length == 1
						? value + value : value, 16) / 255;
			}
		} else if (match = string.match(/^rgba?\((.*)\)$/)) {
			components = match[1].split(',');
			for (var i = 0, l = components.length; i < l; i++) {
				var value = +components[i];
				components[i] = i < 3 ? value / 255 : value;
			}
		} else if (window) {
			var cached = colorCache[string];
			if (!cached) {
				if (!colorCtx) {
					colorCtx = CanvasProvider.getContext(1, 1);
					colorCtx.globalCompositeOperation = 'copy';
				}
				colorCtx.fillStyle = 'rgba(0,0,0,0)';
				colorCtx.fillStyle = string;
				colorCtx.fillRect(0, 0, 1, 1);
				var data = colorCtx.getImageData(0, 0, 1, 1).data;
				cached = colorCache[string] = [
					data[0] / 255,
					data[1] / 255,
					data[2] / 255
				];
			}
			components = cached.slice();
		} else {
			components = [0, 0, 0];
		}
		return components;
	}

	var hsbIndices = [
		[0, 3, 1],
		[2, 0, 1],
		[1, 0, 3],
		[1, 2, 0],
		[3, 1, 0],
		[0, 1, 2]
	];

	var converters = {
		'rgb-hsb': function(r, g, b) {
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b),
				delta = max - min,
				h = delta === 0 ? 0
					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
						: max == g ? (b - r) / delta + 2
						:            (r - g) / delta + 4) * 60;
			return [h, max === 0 ? 0 : delta / max, max];
		},

		'hsb-rgb': function(h, s, b) {
			h = (((h / 60) % 6) + 6) % 6;
			var i = Math.floor(h),
				f = h - i,
				i = hsbIndices[i],
				v = [
					b,
					b * (1 - s),
					b * (1 - s * f),
					b * (1 - s * (1 - f))
				];
			return [v[i[0]], v[i[1]], v[i[2]]];
		},

		'rgb-hsl': function(r, g, b) {
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b),
				delta = max - min,
				achromatic = delta === 0,
				h = achromatic ? 0
					:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
						: max == g ? (b - r) / delta + 2
						:            (r - g) / delta + 4) * 60,
				l = (max + min) / 2,
				s = achromatic ? 0 : l < 0.5
						? delta / (max + min)
						: delta / (2 - max - min);
			return [h, s, l];
		},

		'hsl-rgb': function(h, s, l) {
			h = (((h / 360) % 1) + 1) % 1;
			if (s === 0)
				return [l, l, l];
			var t3s = [ h + 1 / 3, h, h - 1 / 3 ],
				t2 = l < 0.5 ? l * (1 + s) : l + s - l * s,
				t1 = 2 * l - t2,
				c = [];
			for (var i = 0; i < 3; i++) {
				var t3 = t3s[i];
				if (t3 < 0) t3 += 1;
				if (t3 > 1) t3 -= 1;
				c[i] = 6 * t3 < 1
					? t1 + (t2 - t1) * 6 * t3
					: 2 * t3 < 1
						? t2
						: 3 * t3 < 2
							? t1 + (t2 - t1) * ((2 / 3) - t3) * 6
							: t1;
			}
			return c;
		},

		'rgb-gray': function(r, g, b) {
			return [r * 0.2989 + g * 0.587 + b * 0.114];
		},

		'gray-rgb': function(g) {
			return [g, g, g];
		},

		'gray-hsb': function(g) {
			return [0, 0, g];
		},

		'gray-hsl': function(g) {
			return [0, 0, g];
		},

		'gradient-rgb': function() {
			return [];
		},

		'rgb-gradient': function() {
			return [];
		}

	};

	return Base.each(types, function(properties, type) {
		componentParsers[type] = [];
		Base.each(properties, function(name, index) {
			var part = Base.capitalize(name),
				hasOverlap = /^(hue|saturation)$/.test(name),
				parser = componentParsers[type][index] = name === 'gradient'
					? function(value) {
						var current = this._components[0];
						value = Gradient.read(Array.isArray(value) ? value
								: arguments, 0, { readNull: true });
						if (current !== value) {
							if (current)
								current._removeOwner(this);
							if (value)
								value._addOwner(this);
						}
						return value;
					}
					: type === 'gradient'
						? function() {
							return Point.read(arguments, 0, {
									readNull: name === 'highlight',
									clone: true
							});
						}
						: function(value) {
							return value == null || isNaN(value) ? 0 : value;
						};

			this['get' + part] = function() {
				return this._type === type
					|| hasOverlap && /^hs[bl]$/.test(this._type)
						? this._components[index]
						: this._convert(type)[index];
			};

			this['set' + part] = function(value) {
				if (this._type !== type
						&& !(hasOverlap && /^hs[bl]$/.test(this._type))) {
					this._components = this._convert(type);
					this._properties = types[type];
					this._type = type;
				}
				this._components[index] = parser.call(this, value);
				this._changed();
			};
		}, this);
	}, {
		_class: 'Color',
		_readIndex: true,

		initialize: function Color(arg) {
			var args = arguments,
				reading = this.__read,
				read = 0,
				type,
				components,
				alpha,
				values;
			if (Array.isArray(arg)) {
				args = arg;
				arg = args[0];
			}
			var argType = arg != null && typeof arg;
			if (argType === 'string' && arg in types) {
				type = arg;
				arg = args[1];
				if (Array.isArray(arg)) {
					components = arg;
					alpha = args[2];
				} else {
					if (reading)
						read = 1;
					args = Base.slice(args, 1);
					argType = typeof arg;
				}
			}
			if (!components) {
				values = argType === 'number'
						? args
						: argType === 'object' && arg.length != null
							? arg
							: null;
				if (values) {
					if (!type)
						type = values.length >= 3
								? 'rgb'
								: 'gray';
					var length = types[type].length;
					alpha = values[length];
					if (reading) {
						read += values === arguments
							? length + (alpha != null ? 1 : 0)
							: 1;
					}
					if (values.length > length)
						values = Base.slice(values, 0, length);
				} else if (argType === 'string') {
					type = 'rgb';
					components = fromCSS(arg);
					if (components.length === 4) {
						alpha = components[3];
						components.length--;
					}
				} else if (argType === 'object') {
					if (arg.constructor === Color) {
						type = arg._type;
						components = arg._components.slice();
						alpha = arg._alpha;
						if (type === 'gradient') {
							for (var i = 1, l = components.length; i < l; i++) {
								var point = components[i];
								if (point)
									components[i] = point.clone();
							}
						}
					} else if (arg.constructor === Gradient) {
						type = 'gradient';
						values = args;
					} else {
						type = 'hue' in arg
							? 'lightness' in arg
								? 'hsl'
								: 'hsb'
							: 'gradient' in arg || 'stops' in arg
									|| 'radial' in arg
								? 'gradient'
								: 'gray' in arg
									? 'gray'
									: 'rgb';
						var properties = types[type],
							parsers = componentParsers[type];
						this._components = components = [];
						for (var i = 0, l = properties.length; i < l; i++) {
							var value = arg[properties[i]];
							if (value == null && !i && type === 'gradient'
									&& 'stops' in arg) {
								value = {
									stops: arg.stops,
									radial: arg.radial
								};
							}
							value = parsers[i].call(this, value);
							if (value != null)
								components[i] = value;
						}
						alpha = arg.alpha;
					}
				}
				if (reading && type)
					read = 1;
			}
			this._type = type || 'rgb';
			if (!components) {
				this._components = components = [];
				var parsers = componentParsers[this._type];
				for (var i = 0, l = parsers.length; i < l; i++) {
					var value = parsers[i].call(this, values && values[i]);
					if (value != null)
						components[i] = value;
				}
			}
			this._components = components;
			this._properties = types[this._type];
			this._alpha = alpha;
			if (reading)
				this.__read = read;
			return this;
		},

		set: '#initialize',

		_serialize: function(options, dictionary) {
			var components = this.getComponents();
			return Base.serialize(
					/^(gray|rgb)$/.test(this._type)
						? components
						: [this._type].concat(components),
					options, true, dictionary);
		},

		_changed: function() {
			this._canvasStyle = null;
			if (this._owner)
				this._owner._changed(65);
		},

		_convert: function(type) {
			var converter;
			return this._type === type
					? this._components.slice()
					: (converter = converters[this._type + '-' + type])
						? converter.apply(this, this._components)
						: converters['rgb-' + type].apply(this,
							converters[this._type + '-rgb'].apply(this,
								this._components));
		},

		convert: function(type) {
			return new Color(type, this._convert(type), this._alpha);
		},

		getType: function() {
			return this._type;
		},

		setType: function(type) {
			this._components = this._convert(type);
			this._properties = types[type];
			this._type = type;
		},

		getComponents: function() {
			var components = this._components.slice();
			if (this._alpha != null)
				components.push(this._alpha);
			return components;
		},

		getAlpha: function() {
			return this._alpha != null ? this._alpha : 1;
		},

		setAlpha: function(alpha) {
			this._alpha = alpha == null ? null : Math.min(Math.max(alpha, 0), 1);
			this._changed();
		},

		hasAlpha: function() {
			return this._alpha != null;
		},

		equals: function(color) {
			var col = Base.isPlainValue(color, true)
					? Color.read(arguments)
					: color;
			return col === this || col && this._class === col._class
					&& this._type === col._type
					&& this.getAlpha() === col.getAlpha()
					&& Base.equals(this._components, col._components)
					|| false;
		},

		toString: function() {
			var properties = this._properties,
				parts = [],
				isGradient = this._type === 'gradient',
				f = Formatter.instance;
			for (var i = 0, l = properties.length; i < l; i++) {
				var value = this._components[i];
				if (value != null)
					parts.push(properties[i] + ': '
							+ (isGradient ? value : f.number(value)));
			}
			if (this._alpha != null)
				parts.push('alpha: ' + f.number(this._alpha));
			return '{ ' + parts.join(', ') + ' }';
		},

		toCSS: function(hex) {
			var components = this._convert('rgb'),
				alpha = hex || this._alpha == null ? 1 : this._alpha;
			function convert(val) {
				return Math.round((val < 0 ? 0 : val > 1 ? 1 : val) * 255);
			}
			components = [
				convert(components[0]),
				convert(components[1]),
				convert(components[2])
			];
			if (alpha < 1)
				components.push(alpha < 0 ? 0 : alpha);
			return hex
					? '#' + ((1 << 24) + (components[0] << 16)
						+ (components[1] << 8)
						+ components[2]).toString(16).slice(1)
					: (components.length == 4 ? 'rgba(' : 'rgb(')
						+ components.join(',') + ')';
		},

		toCanvasStyle: function(ctx, matrix) {
			if (this._canvasStyle)
				return this._canvasStyle;
			if (this._type !== 'gradient')
				return this._canvasStyle = this.toCSS();
			var components = this._components,
				gradient = components[0],
				stops = gradient._stops,
				origin = components[1],
				destination = components[2],
				highlight = components[3],
				inverse = matrix && matrix.inverted(),
				canvasGradient;
			if (inverse) {
				origin = inverse._transformPoint(origin);
				destination = inverse._transformPoint(destination);
				if (highlight)
					highlight = inverse._transformPoint(highlight);
			}
			if (gradient._radial) {
				var radius = destination.getDistance(origin);
				if (highlight) {
					var vector = highlight.subtract(origin);
					if (vector.getLength() > radius)
						highlight = origin.add(vector.normalize(radius - 0.1));
				}
				var start = highlight || origin;
				canvasGradient = ctx.createRadialGradient(start.x, start.y,
						0, origin.x, origin.y, radius);
			} else {
				canvasGradient = ctx.createLinearGradient(origin.x, origin.y,
						destination.x, destination.y);
			}
			for (var i = 0, l = stops.length; i < l; i++) {
				var stop = stops[i],
					offset = stop._offset;
				canvasGradient.addColorStop(
						offset == null ? i / (l - 1) : offset,
						stop._color.toCanvasStyle());
			}
			return this._canvasStyle = canvasGradient;
		},

		transform: function(matrix) {
			if (this._type === 'gradient') {
				var components = this._components;
				for (var i = 1, l = components.length; i < l; i++) {
					var point = components[i];
					matrix._transformPoint(point, point, true);
				}
				this._changed();
			}
		},

		statics: {
			_types: types,

			random: function() {
				var random = Math.random;
				return new Color(random(), random(), random());
			}
		}
	});
},
new function() {
	var operators = {
		add: function(a, b) {
			return a + b;
		},

		subtract: function(a, b) {
			return a - b;
		},

		multiply: function(a, b) {
			return a * b;
		},

		divide: function(a, b) {
			return a / b;
		}
	};

	return Base.each(operators, function(operator, name) {
		this[name] = function(color) {
			color = Color.read(arguments);
			var type = this._type,
				components1 = this._components,
				components2 = color._convert(type);
			for (var i = 0, l = components1.length; i < l; i++)
				components2[i] = operator(components1[i], components2[i]);
			return new Color(type, components2,
					this._alpha != null
							? operator(this._alpha, color.getAlpha())
							: null);
		};
	}, {
	});
});

var Gradient = Base.extend({
	_class: 'Gradient',

	initialize: function Gradient(stops, radial) {
		this._id = UID.get();
		if (stops && Base.isPlainObject(stops)) {
			this.set(stops);
			stops = radial = null;
		}
		if (this._stops == null) {
			this.setStops(stops || ['white', 'black']);
		}
		if (this._radial == null) {
			this.setRadial(typeof radial === 'string' && radial === 'radial'
					|| radial || false);
		}
	},

	_serialize: function(options, dictionary) {
		return dictionary.add(this, function() {
			return Base.serialize([this._stops, this._radial],
					options, true, dictionary);
		});
	},

	_changed: function() {
		for (var i = 0, l = this._owners && this._owners.length; i < l; i++) {
			this._owners[i]._changed();
		}
	},

	_addOwner: function(color) {
		if (!this._owners)
			this._owners = [];
		this._owners.push(color);
	},

	_removeOwner: function(color) {
		var index = this._owners ? this._owners.indexOf(color) : -1;
		if (index != -1) {
			this._owners.splice(index, 1);
			if (!this._owners.length)
				this._owners = undefined;
		}
	},

	clone: function() {
		var stops = [];
		for (var i = 0, l = this._stops.length; i < l; i++) {
			stops[i] = this._stops[i].clone();
		}
		return new Gradient(stops, this._radial);
	},

	getStops: function() {
		return this._stops;
	},

	setStops: function(stops) {
		if (stops.length < 2) {
			throw new Error(
					'Gradient stop list needs to contain at least two stops.');
		}
		var _stops = this._stops;
		if (_stops) {
			for (var i = 0, l = _stops.length; i < l; i++)
				_stops[i]._owner = undefined;
		}
		_stops = this._stops = GradientStop.readList(stops, 0, { clone: true });
		for (var i = 0, l = _stops.length; i < l; i++)
			_stops[i]._owner = this;
		this._changed();
	},

	getRadial: function() {
		return this._radial;
	},

	setRadial: function(radial) {
		this._radial = radial;
		this._changed();
	},

	equals: function(gradient) {
		if (gradient === this)
			return true;
		if (gradient && this._class === gradient._class) {
			var stops1 = this._stops,
				stops2 = gradient._stops,
				length = stops1.length;
			if (length === stops2.length) {
				for (var i = 0; i < length; i++) {
					if (!stops1[i].equals(stops2[i]))
						return false;
				}
				return true;
			}
		}
		return false;
	}
});

var GradientStop = Base.extend({
	_class: 'GradientStop',

	initialize: function GradientStop(arg0, arg1) {
		var color = arg0,
			offset = arg1;
		if (typeof arg0 === 'object' && arg1 === undefined) {
			if (Array.isArray(arg0) && typeof arg0[0] !== 'number') {
				color = arg0[0];
				offset = arg0[1];
			} else if ('color' in arg0 || 'offset' in arg0
					|| 'rampPoint' in arg0) {
				color = arg0.color;
				offset = arg0.offset || arg0.rampPoint || 0;
			}
		}
		this.setColor(color);
		this.setOffset(offset);
	},

	clone: function() {
		return new GradientStop(this._color.clone(), this._offset);
	},

	_serialize: function(options, dictionary) {
		var color = this._color,
			offset = this._offset;
		return Base.serialize(offset == null ? [color] : [color, offset],
				options, true, dictionary);
	},

	_changed: function() {
		if (this._owner)
			this._owner._changed(65);
	},

	getOffset: function() {
		return this._offset;
	},

	setOffset: function(offset) {
		this._offset = offset;
		this._changed();
	},

	getRampPoint: '#getOffset',
	setRampPoint: '#setOffset',

	getColor: function() {
		return this._color;
	},

	setColor: function() {
		var color = Color.read(arguments, 0, { clone: true });
		if (color)
			color._owner = this;
		this._color = color;
		this._changed();
	},

	equals: function(stop) {
		return stop === this || stop && this._class === stop._class
				&& this._color.equals(stop._color)
				&& this._offset == stop._offset
				|| false;
	}
});

var Style = Base.extend(new function() {
	var itemDefaults = {
		fillColor: null,
		fillRule: 'nonzero',
		strokeColor: null,
		strokeWidth: 1,
		strokeCap: 'butt',
		strokeJoin: 'miter',
		strokeScaling: true,
		miterLimit: 10,
		dashOffset: 0,
		dashArray: [],
		shadowColor: null,
		shadowBlur: 0,
		shadowOffset: new Point(),
		selectedColor: null
	},
	groupDefaults = Base.set({}, itemDefaults, {
		fontFamily: 'sans-serif',
		fontWeight: 'normal',
		fontSize: 12,
		leading: null,
		justification: 'left'
	}),
	textDefaults = Base.set({}, groupDefaults, {
		fillColor: new Color()
	}),
	flags = {
		strokeWidth: 97,
		strokeCap: 97,
		strokeJoin: 97,
		strokeScaling: 105,
		miterLimit: 97,
		fontFamily: 9,
		fontWeight: 9,
		fontSize: 9,
		font: 9,
		leading: 9,
		justification: 9
	},
	item = {
		beans: true
	},
	fields = {
		_class: 'Style',
		beans: true,

		initialize: function Style(style, _owner, _project) {
			this._values = {};
			this._owner = _owner;
			this._project = _owner && _owner._project || _project
					|| paper.project;
			this._defaults = !_owner || _owner instanceof Group ? groupDefaults
					: _owner instanceof TextItem ? textDefaults
					: itemDefaults;
			if (style)
				this.set(style);
		}
	};

	Base.each(groupDefaults, function(value, key) {
		var isColor = /Color$/.test(key),
			isPoint = key === 'shadowOffset',
			part = Base.capitalize(key),
			flag = flags[key],
			set = 'set' + part,
			get = 'get' + part;

		fields[set] = function(value) {
			var owner = this._owner,
				children = owner && owner._children;
			if (children && children.length > 0
					&& !(owner instanceof CompoundPath)) {
				for (var i = 0, l = children.length; i < l; i++)
					children[i]._style[set](value);
			} else if (key in this._defaults) {
				var old = this._values[key];
				if (old !== value) {
					if (isColor) {
						if (old && old._owner !== undefined)
							old._owner = undefined;
						if (value && value.constructor === Color) {
							if (value._owner)
								value = value.clone();
							value._owner = owner;
						}
					}
					this._values[key] = value;
					if (owner)
						owner._changed(flag || 65);
				}
			}
		};

		fields[get] = function(_dontMerge) {
			var owner = this._owner,
				children = owner && owner._children,
				value;
			if (key in this._defaults && (!children || !children.length
					|| _dontMerge || owner instanceof CompoundPath)) {
				var value = this._values[key];
				if (value === undefined) {
					value = this._defaults[key];
					if (value && value.clone)
						value = value.clone();
				} else {
					var ctor = isColor ? Color : isPoint ? Point : null;
					if (ctor && !(value && value.constructor === ctor)) {
						this._values[key] = value = ctor.read([value], 0,
								{ readNull: true, clone: true });
						if (value && isColor)
							value._owner = owner;
					}
				}
			} else if (children) {
				for (var i = 0, l = children.length; i < l; i++) {
					var childValue = children[i]._style[get]();
					if (!i) {
						value = childValue;
					} else if (!Base.equals(value, childValue)) {
						return undefined;
					}
				}
			}
			return value;
		};

		item[get] = function(_dontMerge) {
			return this._style[get](_dontMerge);
		};

		item[set] = function(value) {
			this._style[set](value);
		};
	});

	Base.each({
		Font: 'FontFamily',
		WindingRule: 'FillRule'
	}, function(value, key) {
		var get = 'get' + key,
			set = 'set' + key;
		fields[get] = item[get] = '#get' + value;
		fields[set] = item[set] = '#set' + value;
	});

	Item.inject(item);
	return fields;
}, {
	set: function(style) {
		var isStyle = style instanceof Style,
			values = isStyle ? style._values : style;
		if (values) {
			for (var key in values) {
				if (key in this._defaults) {
					var value = values[key];
					this[key] = value && isStyle && value.clone
							? value.clone() : value;
				}
			}
		}
	},

	equals: function(style) {
		function compare(style1, style2, secondary) {
			var values1 = style1._values,
				values2 = style2._values,
				defaults2 = style2._defaults;
			for (var key in values1) {
				var value1 = values1[key],
					value2 = values2[key];
				if (!(secondary && key in values2) && !Base.equals(value1,
						value2 === undefined ? defaults2[key] : value2))
					return false;
			}
			return true;
		}

		return style === this || style && this._class === style._class
				&& compare(this, style)
				&& compare(style, this, true)
				|| false;
	},

	hasFill: function() {
		var color = this.getFillColor();
		return !!color && color.alpha > 0;
	},

	hasStroke: function() {
		var color = this.getStrokeColor();
		return !!color && color.alpha > 0 && this.getStrokeWidth() > 0;
	},

	hasShadow: function() {
		var color = this.getShadowColor();
		return !!color && color.alpha > 0 && (this.getShadowBlur() > 0
				|| !this.getShadowOffset().isZero());
	},

	getView: function() {
		return this._project._view;
	},

	getFontStyle: function() {
		var fontSize = this.getFontSize();
		return this.getFontWeight()
				+ ' ' + fontSize + (/[a-z]/i.test(fontSize + '') ? ' ' : 'px ')
				+ this.getFontFamily();
	},

	getFont: '#getFontFamily',
	setFont: '#setFontFamily',

	getLeading: function getLeading() {
		var leading = getLeading.base.call(this),
			fontSize = this.getFontSize();
		if (/pt|em|%|px/.test(fontSize))
			fontSize = this.getView().getPixelSize(fontSize);
		return leading != null ? leading : fontSize * 1.2;
	}

});

var DomElement = new function() {
	function handlePrefix(el, name, set, value) {
		var prefixes = ['', 'webkit', 'moz', 'Moz', 'ms', 'o'],
			suffix = name[0].toUpperCase() + name.substring(1);
		for (var i = 0; i < 6; i++) {
			var prefix = prefixes[i],
				key = prefix ? prefix + suffix : name;
			if (key in el) {
				if (set) {
					el[key] = value;
				} else {
					return el[key];
				}
				break;
			}
		}
	}

	return {
		getStyles: function(el) {
			var doc = el && el.nodeType !== 9 ? el.ownerDocument : el,
				view = doc && doc.defaultView;
			return view && view.getComputedStyle(el, '');
		},

		getBounds: function(el, viewport) {
			var doc = el.ownerDocument,
				body = doc.body,
				html = doc.documentElement,
				rect;
			try {
				rect = el.getBoundingClientRect();
			} catch (e) {
				rect = { left: 0, top: 0, width: 0, height: 0 };
			}
			var x = rect.left - (html.clientLeft || body.clientLeft || 0),
				y = rect.top - (html.clientTop || body.clientTop || 0);
			if (!viewport) {
				var view = doc.defaultView;
				x += view.pageXOffset || html.scrollLeft || body.scrollLeft;
				y += view.pageYOffset || html.scrollTop || body.scrollTop;
			}
			return new Rectangle(x, y, rect.width, rect.height);
		},

		getViewportBounds: function(el) {
			var doc = el.ownerDocument,
				view = doc.defaultView,
				html = doc.documentElement;
			return new Rectangle(0, 0,
				view.innerWidth || html.clientWidth,
				view.innerHeight || html.clientHeight
			);
		},

		getOffset: function(el, viewport) {
			return DomElement.getBounds(el, viewport).getPoint();
		},

		getSize: function(el) {
			return DomElement.getBounds(el, true).getSize();
		},

		isInvisible: function(el) {
			return DomElement.getSize(el).equals(new Size(0, 0));
		},

		isInView: function(el) {
			return !DomElement.isInvisible(el)
					&& DomElement.getViewportBounds(el).intersects(
						DomElement.getBounds(el, true));
		},

		isInserted: function(el) {
			return document.body.contains(el);
		},

		getPrefixed: function(el, name) {
			return el && handlePrefix(el, name);
		},

		setPrefixed: function(el, name, value) {
			if (typeof name === 'object') {
				for (var key in name)
					handlePrefix(el, key, true, name[key]);
			} else {
				handlePrefix(el, name, true, value);
			}
		}
	};
};

var DomEvent = {
	add: function(el, events) {
		if (el) {
			for (var type in events) {
				var func = events[type],
					parts = type.split(/[\s,]+/g);
				for (var i = 0, l = parts.length; i < l; i++)
					el.addEventListener(parts[i], func, false);
			}
		}
	},

	remove: function(el, events) {
		if (el) {
			for (var type in events) {
				var func = events[type],
					parts = type.split(/[\s,]+/g);
				for (var i = 0, l = parts.length; i < l; i++)
					el.removeEventListener(parts[i], func, false);
			}
		}
	},

	getPoint: function(event) {
		var pos = event.targetTouches
				? event.targetTouches.length
					? event.targetTouches[0]
					: event.changedTouches[0]
				: event;
		return new Point(
			pos.pageX || pos.clientX + document.documentElement.scrollLeft,
			pos.pageY || pos.clientY + document.documentElement.scrollTop
		);
	},

	getTarget: function(event) {
		return event.target || event.srcElement;
	},

	getRelatedTarget: function(event) {
		return event.relatedTarget || event.toElement;
	},

	getOffset: function(event, target) {
		return DomEvent.getPoint(event).subtract(DomElement.getOffset(
				target || DomEvent.getTarget(event)));
	}
};

DomEvent.requestAnimationFrame = new function() {
	var nativeRequest = DomElement.getPrefixed(window, 'requestAnimationFrame'),
		requested = false,
		callbacks = [],
		timer;

	function handleCallbacks() {
		var functions = callbacks;
		callbacks = [];
		for (var i = 0, l = functions.length; i < l; i++)
			functions[i]();
		requested = nativeRequest && callbacks.length;
		if (requested)
			nativeRequest(handleCallbacks);
	}

	return function(callback) {
		callbacks.push(callback);
		if (nativeRequest) {
			if (!requested) {
				nativeRequest(handleCallbacks);
				requested = true;
			}
		} else if (!timer) {
			timer = setInterval(handleCallbacks, 1000 / 60);
		}
	};
};

var View = Base.extend(Emitter, {
	_class: 'View',

	initialize: function View(project, element) {

		function getSize(name) {
			return element[name] || parseInt(element.getAttribute(name), 10);
		}

		function getCanvasSize() {
			var size = DomElement.getSize(element);
			return size.isNaN() || size.isZero()
					? new Size(getSize('width'), getSize('height'))
					: size;
		}

		var size;
		if (window && element) {
			this._id = element.getAttribute('id');
			if (this._id == null)
				element.setAttribute('id', this._id = 'view-' + View._id++);
			DomEvent.add(element, this._viewEvents);
			var none = 'none';
			DomElement.setPrefixed(element.style, {
				userDrag: none,
				userSelect: none,
				touchCallout: none,
				contentZooming: none,
				tapHighlightColor: 'rgba(0,0,0,0)'
			});

			if (PaperScope.hasAttribute(element, 'resize')) {
				var that = this;
				DomEvent.add(window, this._windowEvents = {
					resize: function() {
						that.setViewSize(getCanvasSize());
					}
				});
			}

			size = getCanvasSize();

			if (PaperScope.hasAttribute(element, 'stats')
					&& typeof Stats !== 'undefined') {
				this._stats = new Stats();
				var stats = this._stats.domElement,
					style = stats.style,
					offset = DomElement.getOffset(element);
				style.position = 'absolute';
				style.left = offset.x + 'px';
				style.top = offset.y + 'px';
				document.body.appendChild(stats);
			}
		} else {
			size = new Size(element);
			element = null;
		}
		this._project = project;
		this._scope = project._scope;
		this._element = element;
		if (!this._pixelRatio)
			this._pixelRatio = window && window.devicePixelRatio || 1;
		this._setElementSize(size.width, size.height);
		this._viewSize = size;
		View._views.push(this);
		View._viewsById[this._id] = this;
		(this._matrix = new Matrix())._owner = this;
		if (!View._focused)
			View._focused = this;
		this._frameItems = {};
		this._frameItemCount = 0;
		this._itemEvents = { native: {}, virtual: {} };
		this._autoUpdate = !paper.agent.node;
		this._needsUpdate = false;
	},

	remove: function() {
		if (!this._project)
			return false;
		if (View._focused === this)
			View._focused = null;
		View._views.splice(View._views.indexOf(this), 1);
		delete View._viewsById[this._id];
		var project = this._project;
		if (project._view === this)
			project._view = null;
		DomEvent.remove(this._element, this._viewEvents);
		DomEvent.remove(window, this._windowEvents);
		this._element = this._project = null;
		this.off('frame');
		this._animate = false;
		this._frameItems = {};
		return true;
	},

	_events: Base.each(
		Item._itemHandlers.concat(['onResize', 'onKeyDown', 'onKeyUp']),
		function(name) {
			this[name] = {};
		}, {
			onFrame: {
				install: function() {
					this.play();
				},

				uninstall: function() {
					this.pause();
				}
			}
		}
	),

	_animate: false,
	_time: 0,
	_count: 0,

	getAutoUpdate: function() {
		return this._autoUpdate;
	},

	setAutoUpdate: function(autoUpdate) {
		this._autoUpdate = autoUpdate;
		if (autoUpdate)
			this.requestUpdate();
	},

	update: function() {
	},

	draw: function() {
		this.update();
	},

	requestUpdate: function() {
		if (!this._requested) {
			var that = this;
			DomEvent.requestAnimationFrame(function() {
				that._requested = false;
				if (that._animate) {
					that.requestUpdate();
					var element = that._element;
					if ((!DomElement.getPrefixed(document, 'hidden')
							|| PaperScope.getAttribute(element, 'keepalive')
								=== 'true') && DomElement.isInView(element)) {
						that._handleFrame();
					}
				}
				if (that._autoUpdate)
					that.update();
			});
			this._requested = true;
		}
	},

	play: function() {
		this._animate = true;
		this.requestUpdate();
	},

	pause: function() {
		this._animate = false;
	},

	_handleFrame: function() {
		paper = this._scope;
		var now = Date.now() / 1000,
			delta = this._last ? now - this._last : 0;
		this._last = now;
		this.emit('frame', new Base({
			delta: delta,
			time: this._time += delta,
			count: this._count++
		}));
		if (this._stats)
			this._stats.update();
	},

	_animateItem: function(item, animate) {
		var items = this._frameItems;
		if (animate) {
			items[item._id] = {
				item: item,
				time: 0,
				count: 0
			};
			if (++this._frameItemCount === 1)
				this.on('frame', this._handleFrameItems);
		} else {
			delete items[item._id];
			if (--this._frameItemCount === 0) {
				this.off('frame', this._handleFrameItems);
			}
		}
	},

	_handleFrameItems: function(event) {
		for (var i in this._frameItems) {
			var entry = this._frameItems[i];
			entry.item.emit('frame', new Base(event, {
				time: entry.time += event.delta,
				count: entry.count++
			}));
		}
	},

	_changed: function() {
		this._project._changed(2049);
		this._bounds = this._decomposed = undefined;
	},

	getElement: function() {
		return this._element;
	},

	getPixelRatio: function() {
		return this._pixelRatio;
	},

	getResolution: function() {
		return this._pixelRatio * 72;
	},

	getViewSize: function() {
		var size = this._viewSize;
		return new LinkedSize(size.width, size.height, this, 'setViewSize');
	},

	setViewSize: function() {
		var size = Size.read(arguments),
			delta = size.subtract(this._viewSize);
		if (delta.isZero())
			return;
		this._setElementSize(size.width, size.height);
		this._viewSize.set(size);
		this._changed();
		this.emit('resize', { size: size, delta: delta });
		if (this._autoUpdate) {
			this.update();
		}
	},

	_setElementSize: function(width, height) {
		var element = this._element;
		if (element) {
			if (element.width !== width)
				element.width = width;
			if (element.height !== height)
				element.height = height;
		}
	},

	getBounds: function() {
		if (!this._bounds)
			this._bounds = this._matrix.inverted()._transformBounds(
					new Rectangle(new Point(), this._viewSize));
		return this._bounds;
	},

	getSize: function() {
		return this.getBounds().getSize();
	},

	isVisible: function() {
		return DomElement.isInView(this._element);
	},

	isInserted: function() {
		return DomElement.isInserted(this._element);
	},

	getPixelSize: function(size) {
		var element = this._element,
			pixels;
		if (element) {
			var parent = element.parentNode,
				temp = document.createElement('div');
			temp.style.fontSize = size;
			parent.appendChild(temp);
			pixels = parseFloat(DomElement.getStyles(temp).fontSize);
			parent.removeChild(temp);
		} else {
			pixels = parseFloat(pixels);
		}
		return pixels;
	},

	getTextWidth: function(font, lines) {
		return 0;
	}
}, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
	var rotate = key === 'rotate';
	this[key] = function() {
		var value = (rotate ? Base : Point).read(arguments),
			center = Point.read(arguments, 0, { readNull: true });
		return this.transform(new Matrix()[key](value,
				center || this.getCenter(true)));
	};
}, {
	_decompose: function() {
		return this._decomposed || (this._decomposed = this._matrix.decompose());
	},

	translate: function() {
		var mx = new Matrix();
		return this.transform(mx.translate.apply(mx, arguments));
	},

	getCenter: function() {
		return this.getBounds().getCenter();
	},

	setCenter: function() {
		var center = Point.read(arguments);
		this.translate(this.getCenter().subtract(center));
	},

	getZoom: function() {
		var decomposed = this._decompose(),
			scaling = decomposed && decomposed.scaling;
		return scaling ? (scaling.x + scaling.y) / 2 : 0;
	},

	setZoom: function(zoom) {
		this.transform(new Matrix().scale(zoom / this.getZoom(),
			this.getCenter()));
	},

	getRotation: function() {
		var decomposed = this._decompose();
		return decomposed && decomposed.rotation;
	},

	setRotation: function(rotation) {
		var current = this.getRotation();
		if (current != null && rotation != null) {
			this.rotate(rotation - current);
		}
	},

	getScaling: function() {
		var decomposed = this._decompose(),
			scaling = decomposed && decomposed.scaling;
		return scaling
				? new LinkedPoint(scaling.x, scaling.y, this, 'setScaling')
				: undefined;
	},

	setScaling: function() {
		var current = this.getScaling(),
			scaling = Point.read(arguments, 0, { clone: true, readNull: true });
		if (current && scaling) {
			this.scale(scaling.x / current.x, scaling.y / current.y);
		}
	},

	getMatrix: function() {
		return this._matrix;
	},

	setMatrix: function() {
		var matrix = this._matrix;
		matrix.initialize.apply(matrix, arguments);
	},

	transform: function(matrix) {
		this._matrix.append(matrix);
	},

	scrollBy: function() {
		this.translate(Point.read(arguments).negate());
	}
}), {

	projectToView: function() {
		return this._matrix._transformPoint(Point.read(arguments));
	},

	viewToProject: function() {
		return this._matrix._inverseTransform(Point.read(arguments));
	},

	getEventPoint: function(event) {
		return this.viewToProject(DomEvent.getOffset(event, this._element));
	},

}, {
	statics: {
		_views: [],
		_viewsById: {},
		_id: 0,

		create: function(project, element) {
			if (document && typeof element === 'string')
				element = document.getElementById(element);
			var ctor = window ? CanvasView : View;
			return new ctor(project, element);
		}
	}
},
new function() {
	if (!window)
		return;
	var prevFocus,
		tempFocus,
		dragging = false,
		mouseDown = false;

	function getView(event) {
		var target = DomEvent.getTarget(event);
		return target.getAttribute && View._viewsById[
				target.getAttribute('id')];
	}

	function updateFocus() {
		var view = View._focused;
		if (!view || !view.isVisible()) {
			for (var i = 0, l = View._views.length; i < l; i++) {
				if ((view = View._views[i]).isVisible()) {
					View._focused = tempFocus = view;
					break;
				}
			}
		}
	}

	function handleMouseMove(view, event, point) {
		view._handleMouseEvent('mousemove', event, point);
	}

	var navigator = window.navigator,
		mousedown, mousemove, mouseup;
	if (navigator.pointerEnabled || navigator.msPointerEnabled) {
		mousedown = 'pointerdown MSPointerDown';
		mousemove = 'pointermove MSPointerMove';
		mouseup = 'pointerup pointercancel MSPointerUp MSPointerCancel';
	} else {
		mousedown = 'touchstart';
		mousemove = 'touchmove';
		mouseup = 'touchend touchcancel';
		if (!('ontouchstart' in window && navigator.userAgent.match(
				/mobile|tablet|ip(ad|hone|od)|android|silk/i))) {
			mousedown += ' mousedown';
			mousemove += ' mousemove';
			mouseup += ' mouseup';
		}
	}

	var viewEvents = {},
		docEvents = {
			mouseout: function(event) {
				var view = View._focused,
					target = DomEvent.getRelatedTarget(event);
				if (view && (!target || target.nodeName === 'HTML')) {
					var offset = DomEvent.getOffset(event, view._element),
						x = offset.x,
						abs = Math.abs,
						ax = abs(x),
						max = 1 << 25,
						diff = ax - max;
					offset.x = abs(diff) < ax ? diff * (x < 0 ? -1 : 1) : x;
					handleMouseMove(view, event, view.viewToProject(offset));
				}
			},

			scroll: updateFocus
		};

	viewEvents[mousedown] = function(event) {
		var view = View._focused = getView(event);
		if (!dragging) {
			dragging = true;
			view._handleMouseEvent('mousedown', event);
		}
	};

	docEvents[mousemove] = function(event) {
		var view = View._focused;
		if (!mouseDown) {
			var target = getView(event);
			if (target) {
				if (view !== target) {
					if (view)
						handleMouseMove(view, event);
					if (!prevFocus)
						prevFocus = view;
					view = View._focused = tempFocus = target;
				}
			} else if (tempFocus && tempFocus === view) {
				if (prevFocus && !prevFocus.isInserted())
					prevFocus = null;
				view = View._focused = prevFocus;
				prevFocus = null;
				updateFocus();
			}
		}
		if (view)
			handleMouseMove(view, event);
	};

	docEvents[mousedown] = function() {
		mouseDown = true;
	};

	docEvents[mouseup] = function(event) {
		var view = View._focused;
		if (view && dragging)
			view._handleMouseEvent('mouseup', event);
		mouseDown = dragging = false;
	};

	DomEvent.add(document, docEvents);

	DomEvent.add(window, {
		load: updateFocus
	});

	var called = false,
		prevented = false,
		fallbacks = {
			doubleclick: 'click',
			mousedrag: 'mousemove'
		},
		wasInView = false,
		overView,
		downPoint,
		lastPoint,
		downItem,
		overItem,
		dragItem,
		clickItem,
		clickTime,
		dblClick;

	function emitMouseEvent(obj, target, type, event, point, prevPoint,
			stopItem) {
		var stopped = false,
			mouseEvent;

		function emit(obj, type) {
			if (obj.responds(type)) {
				if (!mouseEvent) {
					mouseEvent = new MouseEvent(type, event, point,
							target || obj,
							prevPoint ? point.subtract(prevPoint) : null);
				}
				if (obj.emit(type, mouseEvent)) {
					called = true;
					if (mouseEvent.prevented)
						prevented = true;
					if (mouseEvent.stopped)
						return stopped = true;
				}
			} else {
				var fallback = fallbacks[type];
				if (fallback)
					return emit(obj, fallback);
			}
		}

		while (obj && obj !== stopItem) {
			if (emit(obj, type))
				break;
			obj = obj._parent;
		}
		return stopped;
	}

	function emitMouseEvents(view, hitItem, type, event, point, prevPoint) {
		view._project.removeOn(type);
		prevented = called = false;
		return (dragItem && emitMouseEvent(dragItem, null, type, event,
					point, prevPoint)
			|| hitItem && hitItem !== dragItem
				&& !hitItem.isDescendant(dragItem)
				&& emitMouseEvent(hitItem, null, type, event, point, prevPoint,
					dragItem)
			|| emitMouseEvent(view, dragItem || hitItem || view, type, event,
					point, prevPoint));
	}

	var itemEventsMap = {
		mousedown: {
			mousedown: 1,
			mousedrag: 1,
			click: 1,
			doubleclick: 1
		},
		mouseup: {
			mouseup: 1,
			mousedrag: 1,
			click: 1,
			doubleclick: 1
		},
		mousemove: {
			mousedrag: 1,
			mousemove: 1,
			mouseenter: 1,
			mouseleave: 1
		}
	};

	return {
		_viewEvents: viewEvents,

		_handleMouseEvent: function(type, event, point) {
			var itemEvents = this._itemEvents,
				hitItems = itemEvents.native[type],
				nativeMove = type === 'mousemove',
				tool = this._scope.tool,
				view = this;

			function responds(type) {
				return itemEvents.virtual[type] || view.responds(type)
						|| tool && tool.responds(type);
			}

			if (nativeMove && dragging && responds('mousedrag'))
				type = 'mousedrag';
			if (!point)
				point = this.getEventPoint(event);

			var inView = this.getBounds().contains(point),
				hit = hitItems && inView && view._project.hitTest(point, {
					tolerance: 0,
					fill: true,
					stroke: true
				}),
				hitItem = hit && hit.item || null,
				handle = false,
				mouse = {};
			mouse[type.substr(5)] = true;

			if (hitItems && hitItem !== overItem) {
				if (overItem) {
					emitMouseEvent(overItem, null, 'mouseleave', event, point);
				}
				if (hitItem) {
					emitMouseEvent(hitItem, null, 'mouseenter', event, point);
				}
				overItem = hitItem;
			}
			if (wasInView ^ inView) {
				emitMouseEvent(this, null, inView ? 'mouseenter' : 'mouseleave',
						event, point);
				overView = inView ? this : null;
				handle = true;
			}
			if ((inView || mouse.drag) && !point.equals(lastPoint)) {
				emitMouseEvents(this, hitItem, nativeMove ? type : 'mousemove',
						event, point, lastPoint);
				handle = true;
			}
			wasInView = inView;
			if (mouse.down && inView || mouse.up && downPoint) {
				emitMouseEvents(this, hitItem, type, event, point, downPoint);
				if (mouse.down) {
					dblClick = hitItem === clickItem
						&& (Date.now() - clickTime < 300);
					downItem = clickItem = hitItem;
					if (!prevented && hitItem) {
						var item = hitItem;
						while (item && !item.responds('mousedrag'))
							item = item._parent;
						if (item)
							dragItem = hitItem;
					}
					downPoint = point;
				} else if (mouse.up) {
					if (!prevented && hitItem === downItem) {
						clickTime = Date.now();
						emitMouseEvents(this, hitItem, dblClick ? 'doubleclick'
								: 'click', event, point, downPoint);
						dblClick = false;
					}
					downItem = dragItem = null;
				}
				wasInView = false;
				handle = true;
			}
			lastPoint = point;
			if (handle && tool) {
				called = tool._handleMouseEvent(type, event, point, mouse)
					|| called;
			}

			if (called && !mouse.move || mouse.down && responds('mouseup'))
				event.preventDefault();
		},

		_handleKeyEvent: function(type, event, key, character) {
			var scope = this._scope,
				tool = scope.tool,
				keyEvent;

			function emit(obj) {
				if (obj.responds(type)) {
					paper = scope;
					obj.emit(type, keyEvent = keyEvent
							|| new KeyEvent(type, event, key, character));
				}
			}

			if (this.isVisible()) {
				emit(this);
				if (tool && tool.responds(type))
					emit(tool);
			}
		},

		_countItemEvent: function(type, sign) {
			var itemEvents = this._itemEvents,
				native = itemEvents.native,
				virtual = itemEvents.virtual;
			for (var key in itemEventsMap) {
				native[key] = (native[key] || 0)
						+ (itemEventsMap[key][type] || 0) * sign;
			}
			virtual[type] = (virtual[type] || 0) + sign;
		},

		statics: {
			updateFocus: updateFocus
		}
	};
});

var CanvasView = View.extend({
	_class: 'CanvasView',

	initialize: function CanvasView(project, canvas) {
		if (!(canvas instanceof window.HTMLCanvasElement)) {
			var size = Size.read(arguments, 1);
			if (size.isZero())
				throw new Error(
						'Cannot create CanvasView with the provided argument: '
						+ Base.slice(arguments, 1));
			canvas = CanvasProvider.getCanvas(size);
		}
		var ctx = this._context = canvas.getContext('2d');
		ctx.save();
		this._pixelRatio = 1;
		if (!/^off|false$/.test(PaperScope.getAttribute(canvas, 'hidpi'))) {
			var deviceRatio = window.devicePixelRatio || 1,
				backingStoreRatio = DomElement.getPrefixed(ctx,
						'backingStorePixelRatio') || 1;
			this._pixelRatio = deviceRatio / backingStoreRatio;
		}
		View.call(this, project, canvas);
		this._needsUpdate = true;
	},

	remove: function remove() {
		this._context.restore();
		return remove.base.call(this);
	},

	_setElementSize: function _setElementSize(width, height) {
		var pixelRatio = this._pixelRatio;
		_setElementSize.base.call(this, width * pixelRatio, height * pixelRatio);
		if (pixelRatio !== 1) {
			var element = this._element,
				ctx = this._context;
			if (!PaperScope.hasAttribute(element, 'resize')) {
				var style = element.style;
				style.width = width + 'px';
				style.height = height + 'px';
			}
			ctx.restore();
			ctx.save();
			ctx.scale(pixelRatio, pixelRatio);
		}
	},

	getPixelSize: function getPixelSize(size) {
		var agent = paper.agent,
			pixels;
		if (agent && agent.firefox) {
			pixels = getPixelSize.base.call(this, size);
		} else {
			var ctx = this._context,
				prevFont = ctx.font;
			ctx.font = size + ' serif';
			pixels = parseFloat(ctx.font);
			ctx.font = prevFont;
		}
		return pixels;
	},

	getTextWidth: function(font, lines) {
		var ctx = this._context,
			prevFont = ctx.font,
			width = 0;
		ctx.font = font;
		for (var i = 0, l = lines.length; i < l; i++)
			width = Math.max(width, ctx.measureText(lines[i]).width);
		ctx.font = prevFont;
		return width;
	},

	update: function() {
		if (!this._needsUpdate)
			return false;
		var project = this._project,
			ctx = this._context,
			size = this._viewSize;
		ctx.clearRect(0, 0, size.width + 1, size.height + 1);
		if (project)
			project.draw(ctx, this._matrix, this._pixelRatio);
		this._needsUpdate = false;
		return true;
	}
});

var Event = Base.extend({
	_class: 'Event',

	initialize: function Event(event) {
		this.event = event;
		this.type = event && event.type;
	},

	prevented: false,
	stopped: false,

	preventDefault: function() {
		this.prevented = true;
		this.event.preventDefault();
	},

	stopPropagation: function() {
		this.stopped = true;
		this.event.stopPropagation();
	},

	stop: function() {
		this.stopPropagation();
		this.preventDefault();
	},

	getTimeStamp: function() {
		return this.event.timeStamp;
	},

	getModifiers: function() {
		return Key.modifiers;
	}
});

var KeyEvent = Event.extend({
	_class: 'KeyEvent',

	initialize: function KeyEvent(type, event, key, character) {
		this.type = type;
		this.event = event;
		this.key = key;
		this.character = character;
	},

	toString: function() {
		return "{ type: '" + this.type
				+ "', key: '" + this.key
				+ "', character: '" + this.character
				+ "', modifiers: " + this.getModifiers()
				+ " }";
	}
});

var Key = new function() {
	var keyLookup = {
			'\t': 'tab',
			' ': 'space',
			'\b': 'backspace',
			'\x7f': 'delete',
			'Spacebar': 'space',
			'Del': 'delete',
			'Win': 'meta',
			'Esc': 'escape'
		},

		charLookup = {
			'tab': '\t',
			'space': ' ',
			'enter': '\r'
		},

		keyMap = {},
		charMap = {},
		metaFixMap,
		downKey,

		modifiers = new Base({
			shift: false,
			control: false,
			alt: false,
			meta: false,
			capsLock: false,
			space: false
		}).inject({
			option: {
				get: function() {
					return this.alt;
				}
			},

			command: {
				get: function() {
					var agent = paper && paper.agent;
					return agent && agent.mac ? this.meta : this.control;
				}
			}
		});

	function getKey(event) {
		var key = event.key || event.keyIdentifier;
		key = /^U\+/.test(key)
				? String.fromCharCode(parseInt(key.substr(2), 16))
				: /^Arrow[A-Z]/.test(key) ? key.substr(5)
				: key === 'Unidentified'  || key === undefined
					? String.fromCharCode(event.keyCode)
					: key;
		return keyLookup[key] ||
				(key.length > 1 ? Base.hyphenate(key) : key.toLowerCase());
	}

	function handleKey(down, key, character, event) {
		var type = down ? 'keydown' : 'keyup',
			view = View._focused,
			name;
		keyMap[key] = down;
		if (down) {
			charMap[key] = character;
		} else {
			delete charMap[key];
		}
		if (key.length > 1 && (name = Base.camelize(key)) in modifiers) {
			modifiers[name] = down;
			var agent = paper && paper.agent;
			if (name === 'meta' && agent && agent.mac) {
				if (down) {
					metaFixMap = {};
				} else {
					for (var k in metaFixMap) {
						if (k in charMap)
							handleKey(false, k, metaFixMap[k], event);
					}
					metaFixMap = null;
				}
			}
		} else if (down && metaFixMap) {
			metaFixMap[key] = character;
		}
		if (view) {
			view._handleKeyEvent(down ? 'keydown' : 'keyup', event, key,
					character);
		}
	}

	DomEvent.add(document, {
		keydown: function(event) {
			var key = getKey(event),
				agent = paper && paper.agent;
			if (key.length > 1 || agent && (agent.chrome && (event.altKey
						|| agent.mac && event.metaKey
						|| !agent.mac && event.ctrlKey))) {
				handleKey(true, key,
						charLookup[key] || (key.length > 1 ? '' : key), event);
			} else {
				downKey = key;
			}
		},

		keypress: function(event) {
			if (downKey) {
				var key = getKey(event),
					code = event.charCode,
					character = code >= 32 ? String.fromCharCode(code)
						: key.length > 1 ? '' : key;
				if (key !== downKey) {
					key = character.toLowerCase();
				}
				handleKey(true, key, character, event);
				downKey = null;
			}
		},

		keyup: function(event) {
			var key = getKey(event);
			if (key in charMap)
				handleKey(false, key, charMap[key], event);
		}
	});

	DomEvent.add(window, {
		blur: function(event) {
			for (var key in charMap)
				handleKey(false, key, charMap[key], event);
		}
	});

	return {
		modifiers: modifiers,

		isDown: function(key) {
			return !!keyMap[key];
		}
	};
};

var MouseEvent = Event.extend({
	_class: 'MouseEvent',

	initialize: function MouseEvent(type, event, point, target, delta) {
		this.type = type;
		this.event = event;
		this.point = point;
		this.target = target;
		this.delta = delta;
	},

	toString: function() {
		return "{ type: '" + this.type
				+ "', point: " + this.point
				+ ', target: ' + this.target
				+ (this.delta ? ', delta: ' + this.delta : '')
				+ ', modifiers: ' + this.getModifiers()
				+ ' }';
	}
});

var ToolEvent = Event.extend({
	_class: 'ToolEvent',
	_item: null,

	initialize: function ToolEvent(tool, type, event) {
		this.tool = tool;
		this.type = type;
		this.event = event;
	},

	_choosePoint: function(point, toolPoint) {
		return point ? point : toolPoint ? toolPoint.clone() : null;
	},

	getPoint: function() {
		return this._choosePoint(this._point, this.tool._point);
	},

	setPoint: function(point) {
		this._point = point;
	},

	getLastPoint: function() {
		return this._choosePoint(this._lastPoint, this.tool._lastPoint);
	},

	setLastPoint: function(lastPoint) {
		this._lastPoint = lastPoint;
	},

	getDownPoint: function() {
		return this._choosePoint(this._downPoint, this.tool._downPoint);
	},

	setDownPoint: function(downPoint) {
		this._downPoint = downPoint;
	},

	getMiddlePoint: function() {
		if (!this._middlePoint && this.tool._lastPoint) {
			return this.tool._point.add(this.tool._lastPoint).divide(2);
		}
		return this._middlePoint;
	},

	setMiddlePoint: function(middlePoint) {
		this._middlePoint = middlePoint;
	},

	getDelta: function() {
		return !this._delta && this.tool._lastPoint
				? this.tool._point.subtract(this.tool._lastPoint)
				: this._delta;
	},

	setDelta: function(delta) {
		this._delta = delta;
	},

	getCount: function() {
		return this.tool[/^mouse(down|up)$/.test(this.type)
				? '_downCount' : '_moveCount'];
	},

	setCount: function(count) {
		this.tool[/^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count']
			= count;
	},

	getItem: function() {
		if (!this._item) {
			var result = this.tool._scope.project.hitTest(this.getPoint());
			if (result) {
				var item = result.item,
					parent = item._parent;
				while (/^(Group|CompoundPath)$/.test(parent._class)) {
					item = parent;
					parent = parent._parent;
				}
				this._item = item;
			}
		}
		return this._item;
	},

	setItem: function(item) {
		this._item = item;
	},

	toString: function() {
		return '{ type: ' + this.type
				+ ', point: ' + this.getPoint()
				+ ', count: ' + this.getCount()
				+ ', modifiers: ' + this.getModifiers()
				+ ' }';
	}
});

var Tool = PaperScopeItem.extend({
	_class: 'Tool',
	_list: 'tools',
	_reference: 'tool',
	_events: ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onMouseMove',
			'onActivate', 'onDeactivate', 'onEditOptions', 'onKeyDown',
			'onKeyUp'],

	initialize: function Tool(props) {
		PaperScopeItem.call(this);
		this._moveCount = -1;
		this._downCount = -1;
		this.set(props);
	},

	getMinDistance: function() {
		return this._minDistance;
	},

	setMinDistance: function(minDistance) {
		this._minDistance = minDistance;
		if (minDistance != null && this._maxDistance != null
				&& minDistance > this._maxDistance) {
			this._maxDistance = minDistance;
		}
	},

	getMaxDistance: function() {
		return this._maxDistance;
	},

	setMaxDistance: function(maxDistance) {
		this._maxDistance = maxDistance;
		if (this._minDistance != null && maxDistance != null
				&& maxDistance < this._minDistance) {
			this._minDistance = maxDistance;
		}
	},

	getFixedDistance: function() {
		return this._minDistance == this._maxDistance
			? this._minDistance : null;
	},

	setFixedDistance: function(distance) {
		this._minDistance = this._maxDistance = distance;
	},

	_handleMouseEvent: function(type, event, point, mouse) {
		paper = this._scope;
		if (mouse.drag && !this.responds(type))
			type = 'mousemove';
		var move = mouse.move || mouse.drag,
			responds = this.responds(type),
			minDistance = this.minDistance,
			maxDistance = this.maxDistance,
			called = false,
			tool = this;
		function update(minDistance, maxDistance) {
			var pt = point,
				toolPoint = move ? tool._point : (tool._downPoint || pt);
			if (move) {
				if (tool._moveCount && pt.equals(toolPoint)) {
					return false;
				}
				if (toolPoint && (minDistance != null || maxDistance != null)) {
					var vector = pt.subtract(toolPoint),
						distance = vector.getLength();
					if (distance < (minDistance || 0))
						return false;
					if (maxDistance) {
						pt = toolPoint.add(vector.normalize(
								Math.min(distance, maxDistance)));
					}
				}
				tool._moveCount++;
			}
			tool._point = pt;
			tool._lastPoint = toolPoint || pt;
			if (mouse.down) {
				tool._moveCount = -1;
				tool._downPoint = pt;
				tool._downCount++;
			}
			return true;
		}

		function emit() {
			if (responds) {
				called = tool.emit(type, new ToolEvent(tool, type, event))
						|| called;
			}
		}

		if (mouse.down) {
			update();
			emit();
		} else if (mouse.up) {
			update(null, maxDistance);
			emit();
		} else if (responds) {
			while (update(minDistance, maxDistance))
				emit();
		}
		return called;
	}

});

var Http = {
	request: function(options) {
		var xhr = new self.XMLHttpRequest();
		xhr.open((options.method || 'get').toUpperCase(), options.url,
				Base.pick(options.async, true));
		if (options.mimeType)
			xhr.overrideMimeType(options.mimeType);
		xhr.onload = function() {
			var status = xhr.status;
			if (status === 0 || status === 200) {
				if (options.onLoad) {
					options.onLoad.call(xhr, xhr.responseText);
				}
			} else {
				xhr.onerror();
			}
		};
		xhr.onerror = function() {
			var status = xhr.status,
				message = 'Could not load "' + options.url + '" (Status: '
						+ status + ')';
			if (options.onError) {
				options.onError(message, status);
			} else {
				throw new Error(message);
			}
		};
		return xhr.send(null);
	}
};

var CanvasProvider = {
	canvases: [],

	getCanvas: function(width, height) {
		if (!window)
			return null;
		var canvas,
			clear = true;
		if (typeof width === 'object') {
			height = width.height;
			width = width.width;
		}
		if (this.canvases.length) {
			canvas = this.canvases.pop();
		} else {
			canvas = document.createElement('canvas');
			clear = false;
		}
		var ctx = canvas.getContext('2d');
		if (!ctx) {
			throw new Error('Canvas ' + canvas +
					' is unable to provide a 2D context.');
		}
		if (canvas.width === width && canvas.height === height) {
			if (clear)
				ctx.clearRect(0, 0, width + 1, height + 1);
		} else {
			canvas.width = width;
			canvas.height = height;
		}
		ctx.save();
		return canvas;
	},

	getContext: function(width, height) {
		var canvas = this.getCanvas(width, height);
		return canvas ? canvas.getContext('2d') : null;
	},

	release: function(obj) {
		var canvas = obj && obj.canvas ? obj.canvas : obj;
		if (canvas && canvas.getContext) {
			canvas.getContext('2d').restore();
			this.canvases.push(canvas);
		}
	}
};

var BlendMode = new function() {
	var min = Math.min,
		max = Math.max,
		abs = Math.abs,
		sr, sg, sb, sa,
		br, bg, bb, ba,
		dr, dg, db;

	function getLum(r, g, b) {
		return 0.2989 * r + 0.587 * g + 0.114 * b;
	}

	function setLum(r, g, b, l) {
		var d = l - getLum(r, g, b);
		dr = r + d;
		dg = g + d;
		db = b + d;
		var l = getLum(dr, dg, db),
			mn = min(dr, dg, db),
			mx = max(dr, dg, db);
		if (mn < 0) {
			var lmn = l - mn;
			dr = l + (dr - l) * l / lmn;
			dg = l + (dg - l) * l / lmn;
			db = l + (db - l) * l / lmn;
		}
		if (mx > 255) {
			var ln = 255 - l,
				mxl = mx - l;
			dr = l + (dr - l) * ln / mxl;
			dg = l + (dg - l) * ln / mxl;
			db = l + (db - l) * ln / mxl;
		}
	}

	function getSat(r, g, b) {
		return max(r, g, b) - min(r, g, b);
	}

	function setSat(r, g, b, s) {
		var col = [r, g, b],
			mx = max(r, g, b),
			mn = min(r, g, b),
			md;
		mn = mn === r ? 0 : mn === g ? 1 : 2;
		mx = mx === r ? 0 : mx === g ? 1 : 2;
		md = min(mn, mx) === 0 ? max(mn, mx) === 1 ? 2 : 1 : 0;
		if (col[mx] > col[mn]) {
			col[md] = (col[md] - col[mn]) * s / (col[mx] - col[mn]);
			col[mx] = s;
		} else {
			col[md] = col[mx] = 0;
		}
		col[mn] = 0;
		dr = col[0];
		dg = col[1];
		db = col[2];
	}

	var modes = {
		multiply: function() {
			dr = br * sr / 255;
			dg = bg * sg / 255;
			db = bb * sb / 255;
		},

		screen: function() {
			dr = br + sr - (br * sr / 255);
			dg = bg + sg - (bg * sg / 255);
			db = bb + sb - (bb * sb / 255);
		},

		overlay: function() {
			dr = br < 128 ? 2 * br * sr / 255 : 255 - 2 * (255 - br) * (255 - sr) / 255;
			dg = bg < 128 ? 2 * bg * sg / 255 : 255 - 2 * (255 - bg) * (255 - sg) / 255;
			db = bb < 128 ? 2 * bb * sb / 255 : 255 - 2 * (255 - bb) * (255 - sb) / 255;
		},

		'soft-light': function() {
			var t = sr * br / 255;
			dr = t + br * (255 - (255 - br) * (255 - sr) / 255 - t) / 255;
			t = sg * bg / 255;
			dg = t + bg * (255 - (255 - bg) * (255 - sg) / 255 - t) / 255;
			t = sb * bb / 255;
			db = t + bb * (255 - (255 - bb) * (255 - sb) / 255 - t) / 255;
		},

		'hard-light': function() {
			dr = sr < 128 ? 2 * sr * br / 255 : 255 - 2 * (255 - sr) * (255 - br) / 255;
			dg = sg < 128 ? 2 * sg * bg / 255 : 255 - 2 * (255 - sg) * (255 - bg) / 255;
			db = sb < 128 ? 2 * sb * bb / 255 : 255 - 2 * (255 - sb) * (255 - bb) / 255;
		},

		'color-dodge': function() {
			dr = br === 0 ? 0 : sr === 255 ? 255 : min(255, 255 * br / (255 - sr));
			dg = bg === 0 ? 0 : sg === 255 ? 255 : min(255, 255 * bg / (255 - sg));
			db = bb === 0 ? 0 : sb === 255 ? 255 : min(255, 255 * bb / (255 - sb));
		},

		'color-burn': function() {
			dr = br === 255 ? 255 : sr === 0 ? 0 : max(0, 255 - (255 - br) * 255 / sr);
			dg = bg === 255 ? 255 : sg === 0 ? 0 : max(0, 255 - (255 - bg) * 255 / sg);
			db = bb === 255 ? 255 : sb === 0 ? 0 : max(0, 255 - (255 - bb) * 255 / sb);
		},

		darken: function() {
			dr = br < sr ? br : sr;
			dg = bg < sg ? bg : sg;
			db = bb < sb ? bb : sb;
		},

		lighten: function() {
			dr = br > sr ? br : sr;
			dg = bg > sg ? bg : sg;
			db = bb > sb ? bb : sb;
		},

		difference: function() {
			dr = br - sr;
			if (dr < 0)
				dr = -dr;
			dg = bg - sg;
			if (dg < 0)
				dg = -dg;
			db = bb - sb;
			if (db < 0)
				db = -db;
		},

		exclusion: function() {
			dr = br + sr * (255 - br - br) / 255;
			dg = bg + sg * (255 - bg - bg) / 255;
			db = bb + sb * (255 - bb - bb) / 255;
		},

		hue: function() {
			setSat(sr, sg, sb, getSat(br, bg, bb));
			setLum(dr, dg, db, getLum(br, bg, bb));
		},

		saturation: function() {
			setSat(br, bg, bb, getSat(sr, sg, sb));
			setLum(dr, dg, db, getLum(br, bg, bb));
		},

		luminosity: function() {
			setLum(br, bg, bb, getLum(sr, sg, sb));
		},

		color: function() {
			setLum(sr, sg, sb, getLum(br, bg, bb));
		},

		add: function() {
			dr = min(br + sr, 255);
			dg = min(bg + sg, 255);
			db = min(bb + sb, 255);
		},

		subtract: function() {
			dr = max(br - sr, 0);
			dg = max(bg - sg, 0);
			db = max(bb - sb, 0);
		},

		average: function() {
			dr = (br + sr) / 2;
			dg = (bg + sg) / 2;
			db = (bb + sb) / 2;
		},

		negation: function() {
			dr = 255 - abs(255 - sr - br);
			dg = 255 - abs(255 - sg - bg);
			db = 255 - abs(255 - sb - bb);
		}
	};

	var nativeModes = this.nativeModes = Base.each([
		'source-over', 'source-in', 'source-out', 'source-atop',
		'destination-over', 'destination-in', 'destination-out',
		'destination-atop', 'lighter', 'darker', 'copy', 'xor'
	], function(mode) {
		this[mode] = true;
	}, {});

	var ctx = CanvasProvider.getContext(1, 1);
	if (ctx) {
		Base.each(modes, function(func, mode) {
			var darken = mode === 'darken',
				ok = false;
			ctx.save();
			try {
				ctx.fillStyle = darken ? '#300' : '#a00';
				ctx.fillRect(0, 0, 1, 1);
				ctx.globalCompositeOperation = mode;
				if (ctx.globalCompositeOperation === mode) {
					ctx.fillStyle = darken ? '#a00' : '#300';
					ctx.fillRect(0, 0, 1, 1);
					ok = ctx.getImageData(0, 0, 1, 1).data[0] !== darken
							? 170 : 51;
				}
			} catch (e) {}
			ctx.restore();
			nativeModes[mode] = ok;
		});
		CanvasProvider.release(ctx);
	}

	this.process = function(mode, srcContext, dstContext, alpha, offset) {
		var srcCanvas = srcContext.canvas,
			normal = mode === 'normal';
		if (normal || nativeModes[mode]) {
			dstContext.save();
			dstContext.setTransform(1, 0, 0, 1, 0, 0);
			dstContext.globalAlpha = alpha;
			if (!normal)
				dstContext.globalCompositeOperation = mode;
			dstContext.drawImage(srcCanvas, offset.x, offset.y);
			dstContext.restore();
		} else {
			var process = modes[mode];
			if (!process)
				return;
			var dstData = dstContext.getImageData(offset.x, offset.y,
					srcCanvas.width, srcCanvas.height),
				dst = dstData.data,
				src = srcContext.getImageData(0, 0,
					srcCanvas.width, srcCanvas.height).data;
			for (var i = 0, l = dst.length; i < l; i += 4) {
				sr = src[i];
				br = dst[i];
				sg = src[i + 1];
				bg = dst[i + 1];
				sb = src[i + 2];
				bb = dst[i + 2];
				sa = src[i + 3];
				ba = dst[i + 3];
				process();
				var a1 = sa * alpha / 255,
					a2 = 1 - a1;
				dst[i] = a1 * dr + a2 * br;
				dst[i + 1] = a1 * dg + a2 * bg;
				dst[i + 2] = a1 * db + a2 * bb;
				dst[i + 3] = sa * alpha + a2 * ba;
			}
			dstContext.putImageData(dstData, offset.x, offset.y);
		}
	};
};

var SvgElement = new function() {
	var svg = 'http://www.w3.org/2000/svg',
		xmlns = 'http://www.w3.org/2000/xmlns',
		xlink = 'http://www.w3.org/1999/xlink',
		attributeNamespace = {
			href: xlink,
			xlink: xmlns,
			xmlns: xmlns + '/',
			'xmlns:xlink': xmlns + '/'
		};

	function create(tag, attributes, formatter) {
		return set(document.createElementNS(svg, tag), attributes, formatter);
	}

	function get(node, name) {
		var namespace = attributeNamespace[name],
			value = namespace
				? node.getAttributeNS(namespace, name)
				: node.getAttribute(name);
		return value === 'null' ? null : value;
	}

	function set(node, attributes, formatter) {
		for (var name in attributes) {
			var value = attributes[name],
				namespace = attributeNamespace[name];
			if (typeof value === 'number' && formatter)
				value = formatter.number(value);
			if (namespace) {
				node.setAttributeNS(namespace, name, value);
			} else {
				node.setAttribute(name, value);
			}
		}
		return node;
	}

	return {
		svg: svg,
		xmlns: xmlns,
		xlink: xlink,

		create: create,
		get: get,
		set: set
	};
};

var SvgStyles = Base.each({
	fillColor: ['fill', 'color'],
	fillRule: ['fill-rule', 'string'],
	strokeColor: ['stroke', 'color'],
	strokeWidth: ['stroke-width', 'number'],
	strokeCap: ['stroke-linecap', 'string'],
	strokeJoin: ['stroke-linejoin', 'string'],
	strokeScaling: ['vector-effect', 'lookup', {
		true: 'none',
		false: 'non-scaling-stroke'
	}, function(item, value) {
		return !value
				&& (item instanceof PathItem
					|| item instanceof Shape
					|| item instanceof TextItem);
	}],
	miterLimit: ['stroke-miterlimit', 'number'],
	dashArray: ['stroke-dasharray', 'array'],
	dashOffset: ['stroke-dashoffset', 'number'],
	fontFamily: ['font-family', 'string'],
	fontWeight: ['font-weight', 'string'],
	fontSize: ['font-size', 'number'],
	justification: ['text-anchor', 'lookup', {
		left: 'start',
		center: 'middle',
		right: 'end'
	}],
	opacity: ['opacity', 'number'],
	blendMode: ['mix-blend-mode', 'style']
}, function(entry, key) {
	var part = Base.capitalize(key),
		lookup = entry[2];
	this[key] = {
		type: entry[1],
		property: key,
		attribute: entry[0],
		toSVG: lookup,
		fromSVG: lookup && Base.each(lookup, function(value, name) {
			this[value] = name;
		}, {}),
		exportFilter: entry[3],
		get: 'get' + part,
		set: 'set' + part
	};
}, {});

new function() {
	var formatter;

	function getTransform(matrix, coordinates, center) {
		var attrs = new Base(),
			trans = matrix.getTranslation();
		if (coordinates) {
			matrix = matrix._shiftless();
			var point = matrix._inverseTransform(trans);
			attrs[center ? 'cx' : 'x'] = point.x;
			attrs[center ? 'cy' : 'y'] = point.y;
			trans = null;
		}
		if (!matrix.isIdentity()) {
			var decomposed = matrix.decompose();
			if (decomposed) {
				var parts = [],
					angle = decomposed.rotation,
					scale = decomposed.scaling,
					skew = decomposed.skewing;
				if (trans && !trans.isZero())
					parts.push('translate(' + formatter.point(trans) + ')');
				if (angle)
					parts.push('rotate(' + formatter.number(angle) + ')');
				if (!Numerical.isZero(scale.x - 1)
						|| !Numerical.isZero(scale.y - 1))
					parts.push('scale(' + formatter.point(scale) +')');
				if (skew.x)
					parts.push('skewX(' + formatter.number(skew.x) + ')');
				if (skew.y)
					parts.push('skewY(' + formatter.number(skew.y) + ')');
				attrs.transform = parts.join(' ');
			} else {
				attrs.transform = 'matrix(' + matrix.getValues().join(',') + ')';
			}
		}
		return attrs;
	}

	function exportGroup(item, options) {
		var attrs = getTransform(item._matrix),
			children = item._children;
		var node = SvgElement.create('g', attrs, formatter);
		for (var i = 0, l = children.length; i < l; i++) {
			var child = children[i];
			var childNode = exportSVG(child, options);
			if (childNode) {
				if (child.isClipMask()) {
					var clip = SvgElement.create('clipPath');
					clip.appendChild(childNode);
					setDefinition(child, clip, 'clip');
					SvgElement.set(node, {
						'clip-path': 'url(#' + clip.id + ')'
					});
				} else {
					node.appendChild(childNode);
				}
			}
		}
		return node;
	}

	function exportRaster(item, options) {
		var attrs = getTransform(item._matrix, true),
			size = item.getSize(),
			image = item.getImage();
		attrs.x -= size.width / 2;
		attrs.y -= size.height / 2;
		attrs.width = size.width;
		attrs.height = size.height;
		attrs.href = options.embedImages == false && image && image.src
				|| item.toDataURL();
		return SvgElement.create('image', attrs, formatter);
	}

	function exportPath(item, options) {
		var matchShapes = options.matchShapes;
		if (matchShapes) {
			var shape = item.toShape(false);
			if (shape)
				return exportShape(shape, options);
		}
		var segments = item._segments,
			length = segments.length,
			type,
			attrs = getTransform(item._matrix);
		if (matchShapes && length >= 2 && !item.hasHandles()) {
			if (length > 2) {
				type = item._closed ? 'polygon' : 'polyline';
				var parts = [];
				for (var i = 0; i < length; i++) {
					parts.push(formatter.point(segments[i]._point));
				}
				attrs.points = parts.join(' ');
			} else {
				type = 'line';
				var start = segments[0]._point,
					end = segments[1]._point;
				attrs.set({
					x1: start.x,
					y1: start.y,
					x2: end.x,
					y2: end.y
				});
			}
		} else {
			type = 'path';
			attrs.d = item.getPathData(null, options.precision);
		}
		return SvgElement.create(type, attrs, formatter);
	}

	function exportShape(item) {
		var type = item._type,
			radius = item._radius,
			attrs = getTransform(item._matrix, true, type !== 'rectangle');
		if (type === 'rectangle') {
			type = 'rect';
			var size = item._size,
				width = size.width,
				height = size.height;
			attrs.x -= width / 2;
			attrs.y -= height / 2;
			attrs.width = width;
			attrs.height = height;
			if (radius.isZero())
				radius = null;
		}
		if (radius) {
			if (type === 'circle') {
				attrs.r = radius;
			} else {
				attrs.rx = radius.width;
				attrs.ry = radius.height;
			}
		}
		return SvgElement.create(type, attrs, formatter);
	}

	function exportCompoundPath(item, options) {
		var attrs = getTransform(item._matrix);
		var data = item.getPathData(null, options.precision);
		if (data)
			attrs.d = data;
		return SvgElement.create('path', attrs, formatter);
	}

	function exportSymbolItem(item, options) {
		var attrs = getTransform(item._matrix, true),
			definition = item._definition,
			node = getDefinition(definition, 'symbol'),
			definitionItem = definition._item,
			bounds = definitionItem.getBounds();
		if (!node) {
			node = SvgElement.create('symbol', {
				viewBox: formatter.rectangle(bounds)
			});
			node.appendChild(exportSVG(definitionItem, options));
			setDefinition(definition, node, 'symbol');
		}
		attrs.href = '#' + node.id;
		attrs.x += bounds.x;
		attrs.y += bounds.y;
		attrs.width = bounds.width;
		attrs.height = bounds.height;
		attrs.overflow = 'visible';
		return SvgElement.create('use', attrs, formatter);
	}

	function exportGradient(color) {
		var gradientNode = getDefinition(color, 'color');
		if (!gradientNode) {
			var gradient = color.getGradient(),
				radial = gradient._radial,
				origin = color.getOrigin(),
				destination = color.getDestination(),
				attrs;
			if (radial) {
				attrs = {
					cx: origin.x,
					cy: origin.y,
					r: origin.getDistance(destination)
				};
				var highlight = color.getHighlight();
				if (highlight) {
					attrs.fx = highlight.x;
					attrs.fy = highlight.y;
				}
			} else {
				attrs = {
					x1: origin.x,
					y1: origin.y,
					x2: destination.x,
					y2: destination.y
				};
			}
			attrs.gradientUnits = 'userSpaceOnUse';
			gradientNode = SvgElement.create((radial ? 'radial' : 'linear')
					+ 'Gradient', attrs, formatter);
			var stops = gradient._stops;
			for (var i = 0, l = stops.length; i < l; i++) {
				var stop = stops[i],
					stopColor = stop._color,
					alpha = stopColor.getAlpha(),
					offset = stop._offset;
				attrs = {
					offset: offset == null ? i / (l - 1) : offset
				};
				if (stopColor)
					attrs['stop-color'] = stopColor.toCSS(true);
				if (alpha < 1)
					attrs['stop-opacity'] = alpha;
				gradientNode.appendChild(
						SvgElement.create('stop', attrs, formatter));
			}
			setDefinition(color, gradientNode, 'color');
		}
		return 'url(#' + gradientNode.id + ')';
	}

	function exportText(item) {
		var node = SvgElement.create('text', getTransform(item._matrix, true),
				formatter);
		node.textContent = item._content;
		return node;
	}

	var exporters = {
		Group: exportGroup,
		Layer: exportGroup,
		Raster: exportRaster,
		Path: exportPath,
		Shape: exportShape,
		CompoundPath: exportCompoundPath,
		SymbolItem: exportSymbolItem,
		PointText: exportText
	};

	function applyStyle(item, node, isRoot) {
		var attrs = {},
			parent = !isRoot && item.getParent(),
			style = [];

		if (item._name != null)
			attrs.id = item._name;

		Base.each(SvgStyles, function(entry) {
			var get = entry.get,
				type = entry.type,
				value = item[get]();
			if (entry.exportFilter
					? entry.exportFilter(item, value)
					: !parent || !Base.equals(parent[get](), value)) {
				if (type === 'color' && value != null) {
					var alpha = value.getAlpha();
					if (alpha < 1)
						attrs[entry.attribute + '-opacity'] = alpha;
				}
				if (type === 'style') {
					style.push(entry.attribute + ': ' + value);
				} else {
					attrs[entry.attribute] = value == null ? 'none'
							: type === 'color' ? value.gradient
								? exportGradient(value, item)
								: value.toCSS(true)
							: type === 'array' ? value.join(',')
							: type === 'lookup' ? entry.toSVG[value]
							: value;
				}
			}
		});

		if (style.length)
			attrs.style = style.join(';');

		if (attrs.opacity === 1)
			delete attrs.opacity;

		if (!item._visible)
			attrs.visibility = 'hidden';

		return SvgElement.set(node, attrs, formatter);
	}

	var definitions;
	function getDefinition(item, type) {
		if (!definitions)
			definitions = { ids: {}, svgs: {} };
		return item && definitions.svgs[type + '-'
				+ (item._id || item.__id || (item.__id = UID.get('svg')))];
	}

	function setDefinition(item, node, type) {
		if (!definitions)
			getDefinition();
		var typeId = definitions.ids[type] = (definitions.ids[type] || 0) + 1;
		node.id = type + '-' + typeId;
		definitions.svgs[type + '-' + (item._id || item.__id)] = node;
	}

	function exportDefinitions(node, options) {
		var svg = node,
			defs = null;
		if (definitions) {
			svg = node.nodeName.toLowerCase() === 'svg' && node;
			for (var i in definitions.svgs) {
				if (!defs) {
					if (!svg) {
						svg = SvgElement.create('svg');
						svg.appendChild(node);
					}
					defs = svg.insertBefore(SvgElement.create('defs'),
							svg.firstChild);
				}
				defs.appendChild(definitions.svgs[i]);
			}
			definitions = null;
		}
		return options.asString
				? new self.XMLSerializer().serializeToString(svg)
				: svg;
	}

	function exportSVG(item, options, isRoot) {
		var exporter = exporters[item._class],
			node = exporter && exporter(item, options);
		if (node) {
			var onExport = options.onExport;
			if (onExport)
				node = onExport(item, node, options) || node;
			var data = JSON.stringify(item._data);
			if (data && data !== '{}' && data !== 'null')
				node.setAttribute('data-paper-data', data);
		}
		return node && applyStyle(item, node, isRoot);
	}

	function setOptions(options) {
		if (!options)
			options = {};
		formatter = new Formatter(options.precision);
		return options;
	}

	Item.inject({
		exportSVG: function(options) {
			options = setOptions(options);
			return exportDefinitions(exportSVG(this, options, true), options);
		}
	});

	Project.inject({
		exportSVG: function(options) {
			options = setOptions(options);
			var children = this._children,
				view = this.getView(),
				bounds = Base.pick(options.bounds, 'view'),
				mx = options.matrix || bounds === 'view' && view._matrix,
				matrix = mx && Matrix.read([mx]),
				rect = bounds === 'view'
					? new Rectangle([0, 0], view.getViewSize())
					: bounds === 'content'
						? Item._getBounds(children, matrix, { stroke: true })
							.rect
						: Rectangle.read([bounds], 0, { readNull: true }),
				attrs = {
					version: '1.1',
					xmlns: SvgElement.svg,
					'xmlns:xlink': SvgElement.xlink,
				};
			if (rect) {
				attrs.width = rect.width;
				attrs.height = rect.height;
				if (rect.x || rect.y)
					attrs.viewBox = formatter.rectangle(rect);
			}
			var node = SvgElement.create('svg', attrs, formatter),
				parent = node;
			if (matrix && !matrix.isIdentity()) {
				parent = node.appendChild(SvgElement.create('g',
						getTransform(matrix), formatter));
			}
			for (var i = 0, l = children.length; i < l; i++) {
				parent.appendChild(exportSVG(children[i], options, true));
			}
			return exportDefinitions(node, options);
		}
	});
};

new function() {

	var definitions = {},
		rootSize;

	function getValue(node, name, isString, allowNull, allowPercent) {
		var value = SvgElement.get(node, name),
			res = value == null
				? allowNull
					? null
					: isString ? '' : 0
				: isString
					? value
					: parseFloat(value);
		return /%\s*$/.test(value)
			? (res / 100) * (allowPercent ? 1
				: rootSize[/x|^width/.test(name) ? 'width' : 'height'])
			: res;
	}

	function getPoint(node, x, y, allowNull, allowPercent) {
		x = getValue(node, x || 'x', false, allowNull, allowPercent);
		y = getValue(node, y || 'y', false, allowNull, allowPercent);
		return allowNull && (x == null || y == null) ? null
				: new Point(x, y);
	}

	function getSize(node, w, h, allowNull, allowPercent) {
		w = getValue(node, w || 'width', false, allowNull, allowPercent);
		h = getValue(node, h || 'height', false, allowNull, allowPercent);
		return allowNull && (w == null || h == null) ? null
				: new Size(w, h);
	}

	function convertValue(value, type, lookup) {
		return value === 'none' ? null
				: type === 'number' ? parseFloat(value)
				: type === 'array' ?
					value ? value.split(/[\s,]+/g).map(parseFloat) : []
				: type === 'color' ? getDefinition(value) || value
				: type === 'lookup' ? lookup[value]
				: value;
	}

	function importGroup(node, type, options, isRoot) {
		var nodes = node.childNodes,
			isClip = type === 'clippath',
			isDefs = type === 'defs',
			item = new Group(),
			project = item._project,
			currentStyle = project._currentStyle,
			children = [];
		if (!isClip && !isDefs) {
			item = applyAttributes(item, node, isRoot);
			project._currentStyle = item._style.clone();
		}
		if (isRoot) {
			var defs = node.querySelectorAll('defs');
			for (var i = 0, l = defs.length; i < l; i++) {
				importNode(defs[i], options, false);
			}
		}
		for (var i = 0, l = nodes.length; i < l; i++) {
			var childNode = nodes[i],
				child;
			if (childNode.nodeType === 1
					&& !/^defs$/i.test(childNode.nodeName)
					&& (child = importNode(childNode, options, false))
					&& !(child instanceof SymbolDefinition))
				children.push(child);
		}
		item.addChildren(children);
		if (isClip)
			item = applyAttributes(item.reduce(), node, isRoot);
		project._currentStyle = currentStyle;
		if (isClip || isDefs) {
			item.remove();
			item = null;
		}
		return item;
	}

	function importPoly(node, type) {
		var coords = node.getAttribute('points').match(
					/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
			points = [];
		for (var i = 0, l = coords.length; i < l; i += 2)
			points.push(new Point(
					parseFloat(coords[i]),
					parseFloat(coords[i + 1])));
		var path = new Path(points);
		if (type === 'polygon')
			path.closePath();
		return path;
	}

	function importPath(node) {
		return PathItem.create(node.getAttribute('d'));
	}

	function importGradient(node, type) {
		var id = (getValue(node, 'href', true) || '').substring(1),
			radial = type === 'radialgradient',
			gradient;
		if (id) {
			gradient = definitions[id].getGradient();
			if (gradient._radial ^ radial) {
				gradient = gradient.clone();
				gradient._radial = radial;
			}
		} else {
			var nodes = node.childNodes,
				stops = [];
			for (var i = 0, l = nodes.length; i < l; i++) {
				var child = nodes[i];
				if (child.nodeType === 1)
					stops.push(applyAttributes(new GradientStop(), child));
			}
			gradient = new Gradient(stops, radial);
		}
		var origin, destination, highlight,
			scaleToBounds = getValue(node, 'gradientUnits', true) !==
				'userSpaceOnUse';
		if (radial) {
			origin = getPoint(node, 'cx', 'cy', false, scaleToBounds);
			destination = origin.add(
					getValue(node, 'r', false, false, scaleToBounds), 0);
			highlight = getPoint(node, 'fx', 'fy', true, scaleToBounds);
		} else {
			origin = getPoint(node, 'x1', 'y1', false, scaleToBounds);
			destination = getPoint(node, 'x2', 'y2', false, scaleToBounds);
		}
		var color = applyAttributes(
				new Color(gradient, origin, destination, highlight), node);
		color._scaleToBounds = scaleToBounds;
		return null;
	}

	var importers = {
		'#document': function (node, type, options, isRoot) {
			var nodes = node.childNodes;
			for (var i = 0, l = nodes.length; i < l; i++) {
				var child = nodes[i];
				if (child.nodeType === 1)
					return importNode(child, options, isRoot);
			}
		},
		g: importGroup,
		svg: importGroup,
		clippath: importGroup,
		polygon: importPoly,
		polyline: importPoly,
		path: importPath,
		lineargradient: importGradient,
		radialgradient: importGradient,

		image: function (node) {
			var raster = new Raster(getValue(node, 'href', true));
			raster.on('load', function() {
				var size = getSize(node);
				this.setSize(size);
				var center = this._matrix._transformPoint(
						getPoint(node).add(size.divide(2)));
				this.translate(center);
			});
			return raster;
		},

		symbol: function(node, type, options, isRoot) {
			return new SymbolDefinition(
					importGroup(node, type, options, isRoot), true);
		},

		defs: importGroup,

		use: function(node) {
			var id = (getValue(node, 'href', true) || '').substring(1),
				definition = definitions[id],
				point = getPoint(node);
			return definition
					? definition instanceof SymbolDefinition
						? definition.place(point)
						: definition.clone().translate(point)
					: null;
		},

		circle: function(node) {
			return new Shape.Circle(
					getPoint(node, 'cx', 'cy'),
					getValue(node, 'r'));
		},

		ellipse: function(node) {
			return new Shape.Ellipse({
				center: getPoint(node, 'cx', 'cy'),
				radius: getSize(node, 'rx', 'ry')
			});
		},

		rect: function(node) {
			return new Shape.Rectangle(new Rectangle(
						getPoint(node),
						getSize(node)
					), getSize(node, 'rx', 'ry'));
			},

		line: function(node) {
			return new Path.Line(
					getPoint(node, 'x1', 'y1'),
					getPoint(node, 'x2', 'y2'));
		},

		text: function(node) {
			var text = new PointText(getPoint(node).add(
					getPoint(node, 'dx', 'dy')));
			text.setContent(node.textContent.trim() || '');
			return text;
		}
	};

	function applyTransform(item, value, name, node) {
		if (item.transform) {
			var transforms = (node.getAttribute(name) || '').split(/\)\s*/g),
				matrix = new Matrix();
			for (var i = 0, l = transforms.length; i < l; i++) {
				var transform = transforms[i];
				if (!transform)
					break;
				var parts = transform.split(/\(\s*/),
					command = parts[0],
					v = parts[1].split(/[\s,]+/g);
				for (var j = 0, m = v.length; j < m; j++)
					v[j] = parseFloat(v[j]);
				switch (command) {
				case 'matrix':
					matrix.append(
							new Matrix(v[0], v[1], v[2], v[3], v[4], v[5]));
					break;
				case 'rotate':
					matrix.rotate(v[0], v[1], v[2]);
					break;
				case 'translate':
					matrix.translate(v[0], v[1]);
					break;
				case 'scale':
					matrix.scale(v);
					break;
				case 'skewX':
					matrix.skew(v[0], 0);
					break;
				case 'skewY':
					matrix.skew(0, v[0]);
					break;
				}
			}
			item.transform(matrix);
		}
	}

	function applyOpacity(item, value, name) {
		var key = name === 'fill-opacity' ? 'getFillColor' : 'getStrokeColor',
			color = item[key] && item[key]();
		if (color)
			color.setAlpha(parseFloat(value));
	}

	var attributes = Base.set(Base.each(SvgStyles, function(entry) {
		this[entry.attribute] = function(item, value) {
			if (item[entry.set]) {
				item[entry.set](convertValue(value, entry.type, entry.fromSVG));
				if (entry.type === 'color') {
					var color = item[entry.get]();
					if (color) {
						if (color._scaleToBounds) {
							var bounds = item.getBounds();
							color.transform(new Matrix()
								.translate(bounds.getPoint())
								.scale(bounds.getSize()));
						}
					}
				}
			}
		};
	}, {}), {
		id: function(item, value) {
			definitions[value] = item;
			if (item.setName)
				item.setName(value);
		},

		'clip-path': function(item, value) {
			var clip = getDefinition(value);
			if (clip) {
				clip = clip.clone();
				clip.setClipMask(true);
				if (item instanceof Group) {
					item.insertChild(0, clip);
				} else {
					return new Group(clip, item);
				}
			}
		},

		gradientTransform: applyTransform,
		transform: applyTransform,

		'fill-opacity': applyOpacity,
		'stroke-opacity': applyOpacity,

		visibility: function(item, value) {
			if (item.setVisible)
				item.setVisible(value === 'visible');
		},

		display: function(item, value) {
			if (item.setVisible)
				item.setVisible(value !== null);
		},

		'stop-color': function(item, value) {
			if (item.setColor)
				item.setColor(value);
		},

		'stop-opacity': function(item, value) {
			if (item._color)
				item._color.setAlpha(parseFloat(value));
		},

		offset: function(item, value) {
			if (item.setOffset) {
				var percent = value.match(/(.*)%$/);
				item.setOffset(percent ? percent[1] / 100 : parseFloat(value));
			}
		},

		viewBox: function(item, value, name, node, styles) {
			var rect = new Rectangle(convertValue(value, 'array')),
				size = getSize(node, null, null, true),
				group,
				matrix;
			if (item instanceof Group) {
				var scale = size ? size.divide(rect.getSize()) : 1,
				matrix = new Matrix().scale(scale)
						.translate(rect.getPoint().negate());
				group = item;
			} else if (item instanceof SymbolDefinition) {
				if (size)
					rect.setSize(size);
				group = item._item;
			}
			if (group)  {
				if (getAttribute(node, 'overflow', styles) !== 'visible') {
					var clip = new Shape.Rectangle(rect);
					clip.setClipMask(true);
					group.addChild(clip);
				}
				if (matrix)
					group.transform(matrix);
			}
		}
	});

	function getAttribute(node, name, styles) {
		var attr = node.attributes[name],
			value = attr && attr.value;
		if (!value) {
			var style = Base.camelize(name);
			value = node.style[style];
			if (!value && styles.node[style] !== styles.parent[style])
				value = styles.node[style];
		}
		return !value ? undefined
				: value === 'none' ? null
				: value;
	}

	function applyAttributes(item, node, isRoot) {
		if (node.style) {
			var parent = node.parentNode,
				styles = {
					node: DomElement.getStyles(node) || {},
					parent: !isRoot && !/^defs$/i.test(parent.tagName)
							&& DomElement.getStyles(parent) || {}
				};
			Base.each(attributes, function(apply, name) {
				var value = getAttribute(node, name, styles);
				item = value !== undefined
						&& apply(item, value, name, node, styles) || item;
			});
		}
		return item;
	}

	function getDefinition(value) {
		var match = value && value.match(/\((?:["'#]*)([^"')]+)/),
			name = match && match[1],
			res = name && definitions[window
					? name.replace(window.location.href.split('#')[0] + '#', '')
					: name];
		if (res && res._scaleToBounds) {
			res = res.clone();
			res._scaleToBounds = true;
		}
		return res;
	}

	function importNode(node, options, isRoot) {
		var type = node.nodeName.toLowerCase(),
			isElement = type !== '#document',
			body = document.body,
			container,
			parent,
			next;
		if (isRoot && isElement) {
			rootSize = paper.getView().getSize();
			rootSize = getSize(node, null, null, true) || rootSize;
			container = SvgElement.create('svg', {
				style: 'stroke-width: 1px; stroke-miterlimit: 10'
			});
			parent = node.parentNode;
			next = node.nextSibling;
			container.appendChild(node);
			body.appendChild(container);
		}
		var settings = paper.settings,
			applyMatrix = settings.applyMatrix,
			insertItems = settings.insertItems;
		settings.applyMatrix = false;
		settings.insertItems = false;
		var importer = importers[type],
			item = importer && importer(node, type, options, isRoot) || null;
		settings.insertItems = insertItems;
		settings.applyMatrix = applyMatrix;
		if (item) {
			if (isElement && !(item instanceof Group))
				item = applyAttributes(item, node, isRoot);
			var onImport = options.onImport,
				data = isElement && node.getAttribute('data-paper-data');
			if (onImport)
				item = onImport(node, item, options) || item;
			if (options.expandShapes && item instanceof Shape) {
				item.remove();
				item = item.toPath();
			}
			if (data)
				item._data = JSON.parse(data);
		}
		if (container) {
			body.removeChild(container);
			if (parent) {
				if (next) {
					parent.insertBefore(node, next);
				} else {
					parent.appendChild(node);
				}
			}
		}
		if (isRoot) {
			definitions = {};
			if (item && Base.pick(options.applyMatrix, applyMatrix))
				item.matrix.apply(true, true);
		}
		return item;
	}

	function importSVG(source, options, owner) {
		if (!source)
			return null;
		options = typeof options === 'function' ? { onLoad: options }
				: options || {};
		var scope = paper,
			item = null;

		function onLoad(svg) {
			try {
				var node = typeof svg === 'object' ? svg : new self.DOMParser()
						.parseFromString(svg, 'image/svg+xml');
				if (!node.nodeName) {
					node = null;
					throw new Error('Unsupported SVG source: ' + source);
				}
				paper = scope;
				item = importNode(node, options, true);
				if (!options || options.insert !== false) {
					owner._insertItem(undefined, item);
				}
				var onLoad = options.onLoad;
				if (onLoad)
					onLoad(item, svg);
			} catch (e) {
				onError(e);
			}
		}

		function onError(message, status) {
			var onError = options.onError;
			if (onError) {
				onError(message, status);
			} else {
				throw new Error(message);
			}
		}

		if (typeof source === 'string' && !/^.*</.test(source)) {
			var node = document.getElementById(source);
			if (node) {
				onLoad(node);
			} else {
				Http.request({
					url: source,
					async: true,
					onLoad: onLoad,
					onError: onError
				});
			}
		} else if (typeof File !== 'undefined' && source instanceof File) {
			var reader = new FileReader();
			reader.onload = function() {
				onLoad(reader.result);
			};
			reader.onerror = function() {
				onError(reader.error);
			};
			return reader.readAsText(source);
		} else {
			onLoad(source);
		}

		return item;
	}

	Item.inject({
		importSVG: function(node, options) {
			return importSVG(node, options, this);
		}
	});

	Project.inject({
		importSVG: function(node, options) {
			this.activate();
			return importSVG(node, options, this);
		}
	});
};

Base.exports.PaperScript = function() {
	var global = this,
		acorn = global.acorn;
	if (!acorn && typeof require !== 'undefined') {
		try { acorn = require('acorn'); } catch(e) {}
	}
	if (!acorn) {
		var exports, module;
		acorn = exports = module = {};

(function(root, mod) {
  if (typeof exports == "object" && typeof module == "object") return mod(exports);
  if (typeof define == "function" && define.amd) return define(["exports"], mod);
  mod(root.acorn || (root.acorn = {}));
})(this, function(exports) {
  "use strict";

  exports.version = "0.5.0";

  var options, input, inputLen, sourceFile;

  exports.parse = function(inpt, opts) {
	input = String(inpt); inputLen = input.length;
	setOptions(opts);
	initTokenState();
	return parseTopLevel(options.program);
  };

  var defaultOptions = exports.defaultOptions = {
	ecmaVersion: 5,
	strictSemicolons: false,
	allowTrailingCommas: true,
	forbidReserved: false,
	allowReturnOutsideFunction: false,
	locations: false,
	onComment: null,
	ranges: false,
	program: null,
	sourceFile: null,
	directSourceFile: null
  };

  function setOptions(opts) {
	options = opts || {};
	for (var opt in defaultOptions) if (!Object.prototype.hasOwnProperty.call(options, opt))
	  options[opt] = defaultOptions[opt];
	sourceFile = options.sourceFile || null;
  }

  var getLineInfo = exports.getLineInfo = function(input, offset) {
	for (var line = 1, cur = 0;;) {
	  lineBreak.lastIndex = cur;
	  var match = lineBreak.exec(input);
	  if (match && match.index < offset) {
		++line;
		cur = match.index + match[0].length;
	  } else break;
	}
	return {line: line, column: offset - cur};
  };

  exports.tokenize = function(inpt, opts) {
	input = String(inpt); inputLen = input.length;
	setOptions(opts);
	initTokenState();

	var t = {};
	function getToken(forceRegexp) {
	  lastEnd = tokEnd;
	  readToken(forceRegexp);
	  t.start = tokStart; t.end = tokEnd;
	  t.startLoc = tokStartLoc; t.endLoc = tokEndLoc;
	  t.type = tokType; t.value = tokVal;
	  return t;
	}
	getToken.jumpTo = function(pos, reAllowed) {
	  tokPos = pos;
	  if (options.locations) {
		tokCurLine = 1;
		tokLineStart = lineBreak.lastIndex = 0;
		var match;
		while ((match = lineBreak.exec(input)) && match.index < pos) {
		  ++tokCurLine;
		  tokLineStart = match.index + match[0].length;
		}
	  }
	  tokRegexpAllowed = reAllowed;
	  skipSpace();
	};
	return getToken;
  };

  var tokPos;

  var tokStart, tokEnd;

  var tokStartLoc, tokEndLoc;

  var tokType, tokVal;

  var tokRegexpAllowed;

  var tokCurLine, tokLineStart;

  var lastStart, lastEnd, lastEndLoc;

  var inFunction, labels, strict;

  function raise(pos, message) {
	var loc = getLineInfo(input, pos);
	message += " (" + loc.line + ":" + loc.column + ")";
	var err = new SyntaxError(message);
	err.pos = pos; err.loc = loc; err.raisedAt = tokPos;
	throw err;
  }

  var empty = [];

  var _num = {type: "num"}, _regexp = {type: "regexp"}, _string = {type: "string"};
  var _name = {type: "name"}, _eof = {type: "eof"};

  var _break = {keyword: "break"}, _case = {keyword: "case", beforeExpr: true}, _catch = {keyword: "catch"};
  var _continue = {keyword: "continue"}, _debugger = {keyword: "debugger"}, _default = {keyword: "default"};
  var _do = {keyword: "do", isLoop: true}, _else = {keyword: "else", beforeExpr: true};
  var _finally = {keyword: "finally"}, _for = {keyword: "for", isLoop: true}, _function = {keyword: "function"};
  var _if = {keyword: "if"}, _return = {keyword: "return", beforeExpr: true}, _switch = {keyword: "switch"};
  var _throw = {keyword: "throw", beforeExpr: true}, _try = {keyword: "try"}, _var = {keyword: "var"};
  var _while = {keyword: "while", isLoop: true}, _with = {keyword: "with"}, _new = {keyword: "new", beforeExpr: true};
  var _this = {keyword: "this"};

  var _null = {keyword: "null", atomValue: null}, _true = {keyword: "true", atomValue: true};
  var _false = {keyword: "false", atomValue: false};

  var _in = {keyword: "in", binop: 7, beforeExpr: true};

  var keywordTypes = {"break": _break, "case": _case, "catch": _catch,
					  "continue": _continue, "debugger": _debugger, "default": _default,
					  "do": _do, "else": _else, "finally": _finally, "for": _for,
					  "function": _function, "if": _if, "return": _return, "switch": _switch,
					  "throw": _throw, "try": _try, "var": _var, "while": _while, "with": _with,
					  "null": _null, "true": _true, "false": _false, "new": _new, "in": _in,
					  "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: true}, "this": _this,
					  "typeof": {keyword: "typeof", prefix: true, beforeExpr: true},
					  "void": {keyword: "void", prefix: true, beforeExpr: true},
					  "delete": {keyword: "delete", prefix: true, beforeExpr: true}};

  var _bracketL = {type: "[", beforeExpr: true}, _bracketR = {type: "]"}, _braceL = {type: "{", beforeExpr: true};
  var _braceR = {type: "}"}, _parenL = {type: "(", beforeExpr: true}, _parenR = {type: ")"};
  var _comma = {type: ",", beforeExpr: true}, _semi = {type: ";", beforeExpr: true};
  var _colon = {type: ":", beforeExpr: true}, _dot = {type: "."}, _question = {type: "?", beforeExpr: true};

  var _slash = {binop: 10, beforeExpr: true}, _eq = {isAssign: true, beforeExpr: true};
  var _assign = {isAssign: true, beforeExpr: true};
  var _incDec = {postfix: true, prefix: true, isUpdate: true}, _prefix = {prefix: true, beforeExpr: true};
  var _logicalOR = {binop: 1, beforeExpr: true};
  var _logicalAND = {binop: 2, beforeExpr: true};
  var _bitwiseOR = {binop: 3, beforeExpr: true};
  var _bitwiseXOR = {binop: 4, beforeExpr: true};
  var _bitwiseAND = {binop: 5, beforeExpr: true};
  var _equality = {binop: 6, beforeExpr: true};
  var _relational = {binop: 7, beforeExpr: true};
  var _bitShift = {binop: 8, beforeExpr: true};
  var _plusMin = {binop: 9, prefix: true, beforeExpr: true};
  var _multiplyModulo = {binop: 10, beforeExpr: true};

  exports.tokTypes = {bracketL: _bracketL, bracketR: _bracketR, braceL: _braceL, braceR: _braceR,
					  parenL: _parenL, parenR: _parenR, comma: _comma, semi: _semi, colon: _colon,
					  dot: _dot, question: _question, slash: _slash, eq: _eq, name: _name, eof: _eof,
					  num: _num, regexp: _regexp, string: _string};
  for (var kw in keywordTypes) exports.tokTypes["_" + kw] = keywordTypes[kw];

  function makePredicate(words) {
	words = words.split(" ");
	var f = "", cats = [];
	out: for (var i = 0; i < words.length; ++i) {
	  for (var j = 0; j < cats.length; ++j)
		if (cats[j][0].length == words[i].length) {
		  cats[j].push(words[i]);
		  continue out;
		}
	  cats.push([words[i]]);
	}
	function compareTo(arr) {
	  if (arr.length == 1) return f += "return str === " + JSON.stringify(arr[0]) + ";";
	  f += "switch(str){";
	  for (var i = 0; i < arr.length; ++i) f += "case " + JSON.stringify(arr[i]) + ":";
	  f += "return true}return false;";
	}

	if (cats.length > 3) {
	  cats.sort(function(a, b) {return b.length - a.length;});
	  f += "switch(str.length){";
	  for (var i = 0; i < cats.length; ++i) {
		var cat = cats[i];
		f += "case " + cat[0].length + ":";
		compareTo(cat);
	  }
	  f += "}";

	} else {
	  compareTo(words);
	}
	return new Function("str", f);
  }

  var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");

  var isReservedWord5 = makePredicate("class enum extends super const export import");

  var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");

  var isStrictBadIdWord = makePredicate("eval arguments");

  var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");

  var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
  var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  var newline = /[\n\r\u2028\u2029]/;

  var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

  var isIdentifierStart = exports.isIdentifierStart = function(code) {
	if (code < 65) return code === 36;
	if (code < 91) return true;
	if (code < 97) return code === 95;
	if (code < 123)return true;
	return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  };

  var isIdentifierChar = exports.isIdentifierChar = function(code) {
	if (code < 48) return code === 36;
	if (code < 58) return true;
	if (code < 65) return false;
	if (code < 91) return true;
	if (code < 97) return code === 95;
	if (code < 123)return true;
	return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  };

  function line_loc_t() {
	this.line = tokCurLine;
	this.column = tokPos - tokLineStart;
  }

  function initTokenState() {
	tokCurLine = 1;
	tokPos = tokLineStart = 0;
	tokRegexpAllowed = true;
	skipSpace();
  }

  function finishToken(type, val) {
	tokEnd = tokPos;
	if (options.locations) tokEndLoc = new line_loc_t;
	tokType = type;
	skipSpace();
	tokVal = val;
	tokRegexpAllowed = type.beforeExpr;
  }

  function skipBlockComment() {
	var startLoc = options.onComment && options.locations && new line_loc_t;
	var start = tokPos, end = input.indexOf("*/", tokPos += 2);
	if (end === -1) raise(tokPos - 2, "Unterminated comment");
	tokPos = end + 2;
	if (options.locations) {
	  lineBreak.lastIndex = start;
	  var match;
	  while ((match = lineBreak.exec(input)) && match.index < tokPos) {
		++tokCurLine;
		tokLineStart = match.index + match[0].length;
	  }
	}
	if (options.onComment)
	  options.onComment(true, input.slice(start + 2, end), start, tokPos,
						startLoc, options.locations && new line_loc_t);
  }

  function skipLineComment() {
	var start = tokPos;
	var startLoc = options.onComment && options.locations && new line_loc_t;
	var ch = input.charCodeAt(tokPos+=2);
	while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
	  ++tokPos;
	  ch = input.charCodeAt(tokPos);
	}
	if (options.onComment)
	  options.onComment(false, input.slice(start + 2, tokPos), start, tokPos,
						startLoc, options.locations && new line_loc_t);
  }

  function skipSpace() {
	while (tokPos < inputLen) {
	  var ch = input.charCodeAt(tokPos);
	  if (ch === 32) {
		++tokPos;
	  } else if (ch === 13) {
		++tokPos;
		var next = input.charCodeAt(tokPos);
		if (next === 10) {
		  ++tokPos;
		}
		if (options.locations) {
		  ++tokCurLine;
		  tokLineStart = tokPos;
		}
	  } else if (ch === 10 || ch === 8232 || ch === 8233) {
		++tokPos;
		if (options.locations) {
		  ++tokCurLine;
		  tokLineStart = tokPos;
		}
	  } else if (ch > 8 && ch < 14) {
		++tokPos;
	  } else if (ch === 47) {
		var next = input.charCodeAt(tokPos + 1);
		if (next === 42) {
		  skipBlockComment();
		} else if (next === 47) {
		  skipLineComment();
		} else break;
	  } else if (ch === 160) {
		++tokPos;
	  } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
		++tokPos;
	  } else {
		break;
	  }
	}
  }

  function readToken_dot() {
	var next = input.charCodeAt(tokPos + 1);
	if (next >= 48 && next <= 57) return readNumber(true);
	++tokPos;
	return finishToken(_dot);
  }

  function readToken_slash() {
	var next = input.charCodeAt(tokPos + 1);
	if (tokRegexpAllowed) {++tokPos; return readRegexp();}
	if (next === 61) return finishOp(_assign, 2);
	return finishOp(_slash, 1);
  }

  function readToken_mult_modulo() {
	var next = input.charCodeAt(tokPos + 1);
	if (next === 61) return finishOp(_assign, 2);
	return finishOp(_multiplyModulo, 1);
  }

  function readToken_pipe_amp(code) {
	var next = input.charCodeAt(tokPos + 1);
	if (next === code) return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
	if (next === 61) return finishOp(_assign, 2);
	return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
  }

  function readToken_caret() {
	var next = input.charCodeAt(tokPos + 1);
	if (next === 61) return finishOp(_assign, 2);
	return finishOp(_bitwiseXOR, 1);
  }

  function readToken_plus_min(code) {
	var next = input.charCodeAt(tokPos + 1);
	if (next === code) {
	  if (next == 45 && input.charCodeAt(tokPos + 2) == 62 &&
		  newline.test(input.slice(lastEnd, tokPos))) {
		tokPos += 3;
		skipLineComment();
		skipSpace();
		return readToken();
	  }
	  return finishOp(_incDec, 2);
	}
	if (next === 61) return finishOp(_assign, 2);
	return finishOp(_plusMin, 1);
  }

  function readToken_lt_gt(code) {
	var next = input.charCodeAt(tokPos + 1);
	var size = 1;
	if (next === code) {
	  size = code === 62 && input.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
	  if (input.charCodeAt(tokPos + size) === 61) return finishOp(_assign, size + 1);
	  return finishOp(_bitShift, size);
	}
	if (next == 33 && code == 60 && input.charCodeAt(tokPos + 2) == 45 &&
		input.charCodeAt(tokPos + 3) == 45) {
	  tokPos += 4;
	  skipLineComment();
	  skipSpace();
	  return readToken();
	}
	if (next === 61)
	  size = input.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
	return finishOp(_relational, size);
  }

  function readToken_eq_excl(code) {
	var next = input.charCodeAt(tokPos + 1);
	if (next === 61) return finishOp(_equality, input.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
	return finishOp(code === 61 ? _eq : _prefix, 1);
  }

  function getTokenFromCode(code) {
	switch(code) {
	case 46:
	  return readToken_dot();

	case 40: ++tokPos; return finishToken(_parenL);
	case 41: ++tokPos; return finishToken(_parenR);
	case 59: ++tokPos; return finishToken(_semi);
	case 44: ++tokPos; return finishToken(_comma);
	case 91: ++tokPos; return finishToken(_bracketL);
	case 93: ++tokPos; return finishToken(_bracketR);
	case 123: ++tokPos; return finishToken(_braceL);
	case 125: ++tokPos; return finishToken(_braceR);
	case 58: ++tokPos; return finishToken(_colon);
	case 63: ++tokPos; return finishToken(_question);

	case 48:
	  var next = input.charCodeAt(tokPos + 1);
	  if (next === 120 || next === 88) return readHexNumber();
	case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
	  return readNumber(false);

	case 34: case 39:
	  return readString(code);

	case 47:
	  return readToken_slash(code);

	case 37: case 42:
	  return readToken_mult_modulo();

	case 124: case 38:
	  return readToken_pipe_amp(code);

	case 94:
	  return readToken_caret();

	case 43: case 45:
	  return readToken_plus_min(code);

	case 60: case 62:
	  return readToken_lt_gt(code);

	case 61: case 33:
	  return readToken_eq_excl(code);

	case 126:
	  return finishOp(_prefix, 1);
	}

	return false;
  }

  function readToken(forceRegexp) {
	if (!forceRegexp) tokStart = tokPos;
	else tokPos = tokStart + 1;
	if (options.locations) tokStartLoc = new line_loc_t;
	if (forceRegexp) return readRegexp();
	if (tokPos >= inputLen) return finishToken(_eof);

	var code = input.charCodeAt(tokPos);
	if (isIdentifierStart(code) || code === 92 ) return readWord();

	var tok = getTokenFromCode(code);

	if (tok === false) {
	  var ch = String.fromCharCode(code);
	  if (ch === "\\" || nonASCIIidentifierStart.test(ch)) return readWord();
	  raise(tokPos, "Unexpected character '" + ch + "'");
	}
	return tok;
  }

  function finishOp(type, size) {
	var str = input.slice(tokPos, tokPos + size);
	tokPos += size;
	finishToken(type, str);
  }

  function readRegexp() {
	var content = "", escaped, inClass, start = tokPos;
	for (;;) {
	  if (tokPos >= inputLen) raise(start, "Unterminated regular expression");
	  var ch = input.charAt(tokPos);
	  if (newline.test(ch)) raise(start, "Unterminated regular expression");
	  if (!escaped) {
		if (ch === "[") inClass = true;
		else if (ch === "]" && inClass) inClass = false;
		else if (ch === "/" && !inClass) break;
		escaped = ch === "\\";
	  } else escaped = false;
	  ++tokPos;
	}
	var content = input.slice(start, tokPos);
	++tokPos;
	var mods = readWord1();
	if (mods && !/^[gmsiy]*$/.test(mods)) raise(start, "Invalid regexp flag");
	try {
	  var value = new RegExp(content, mods);
	} catch (e) {
	  if (e instanceof SyntaxError) raise(start, e.message);
	  raise(e);
	}
	return finishToken(_regexp, value);
  }

  function readInt(radix, len) {
	var start = tokPos, total = 0;
	for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	  var code = input.charCodeAt(tokPos), val;
	  if (code >= 97) val = code - 97 + 10;
	  else if (code >= 65) val = code - 65 + 10;
	  else if (code >= 48 && code <= 57) val = code - 48;
	  else val = Infinity;
	  if (val >= radix) break;
	  ++tokPos;
	  total = total * radix + val;
	}
	if (tokPos === start || len != null && tokPos - start !== len) return null;

	return total;
  }

  function readHexNumber() {
	tokPos += 2;
	var val = readInt(16);
	if (val == null) raise(tokStart + 2, "Expected hexadecimal number");
	if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
	return finishToken(_num, val);
  }

  function readNumber(startsWithDot) {
	var start = tokPos, isFloat = false, octal = input.charCodeAt(tokPos) === 48;
	if (!startsWithDot && readInt(10) === null) raise(start, "Invalid number");
	if (input.charCodeAt(tokPos) === 46) {
	  ++tokPos;
	  readInt(10);
	  isFloat = true;
	}
	var next = input.charCodeAt(tokPos);
	if (next === 69 || next === 101) {
	  next = input.charCodeAt(++tokPos);
	  if (next === 43 || next === 45) ++tokPos;
	  if (readInt(10) === null) raise(start, "Invalid number");
	  isFloat = true;
	}
	if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");

	var str = input.slice(start, tokPos), val;
	if (isFloat) val = parseFloat(str);
	else if (!octal || str.length === 1) val = parseInt(str, 10);
	else if (/[89]/.test(str) || strict) raise(start, "Invalid number");
	else val = parseInt(str, 8);
	return finishToken(_num, val);
  }

  function readString(quote) {
	tokPos++;
	var out = "";
	for (;;) {
	  if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
	  var ch = input.charCodeAt(tokPos);
	  if (ch === quote) {
		++tokPos;
		return finishToken(_string, out);
	  }
	  if (ch === 92) {
		ch = input.charCodeAt(++tokPos);
		var octal = /^[0-7]+/.exec(input.slice(tokPos, tokPos + 3));
		if (octal) octal = octal[0];
		while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
		if (octal === "0") octal = null;
		++tokPos;
		if (octal) {
		  if (strict) raise(tokPos - 2, "Octal literal in strict mode");
		  out += String.fromCharCode(parseInt(octal, 8));
		  tokPos += octal.length - 1;
		} else {
		  switch (ch) {
		  case 110: out += "\n"; break;
		  case 114: out += "\r"; break;
		  case 120: out += String.fromCharCode(readHexChar(2)); break;
		  case 117: out += String.fromCharCode(readHexChar(4)); break;
		  case 85: out += String.fromCharCode(readHexChar(8)); break;
		  case 116: out += "\t"; break;
		  case 98: out += "\b"; break;
		  case 118: out += "\u000b"; break;
		  case 102: out += "\f"; break;
		  case 48: out += "\0"; break;
		  case 13: if (input.charCodeAt(tokPos) === 10) ++tokPos;
		  case 10:
			if (options.locations) { tokLineStart = tokPos; ++tokCurLine; }
			break;
		  default: out += String.fromCharCode(ch); break;
		  }
		}
	  } else {
		if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) raise(tokStart, "Unterminated string constant");
		out += String.fromCharCode(ch);
		++tokPos;
	  }
	}
  }

  function readHexChar(len) {
	var n = readInt(16, len);
	if (n === null) raise(tokStart, "Bad character escape sequence");
	return n;
  }

  var containsEsc;

  function readWord1() {
	containsEsc = false;
	var word, first = true, start = tokPos;
	for (;;) {
	  var ch = input.charCodeAt(tokPos);
	  if (isIdentifierChar(ch)) {
		if (containsEsc) word += input.charAt(tokPos);
		++tokPos;
	  } else if (ch === 92) {
		if (!containsEsc) word = input.slice(start, tokPos);
		containsEsc = true;
		if (input.charCodeAt(++tokPos) != 117)
		  raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
		++tokPos;
		var esc = readHexChar(4);
		var escStr = String.fromCharCode(esc);
		if (!escStr) raise(tokPos - 1, "Invalid Unicode escape");
		if (!(first ? isIdentifierStart(esc) : isIdentifierChar(esc)))
		  raise(tokPos - 4, "Invalid Unicode escape");
		word += escStr;
	  } else {
		break;
	  }
	  first = false;
	}
	return containsEsc ? word : input.slice(start, tokPos);
  }

  function readWord() {
	var word = readWord1();
	var type = _name;
	if (!containsEsc && isKeyword(word))
	  type = keywordTypes[word];
	return finishToken(type, word);
  }

  function next() {
	lastStart = tokStart;
	lastEnd = tokEnd;
	lastEndLoc = tokEndLoc;
	readToken();
  }

  function setStrict(strct) {
	strict = strct;
	tokPos = tokStart;
	if (options.locations) {
	  while (tokPos < tokLineStart) {
		tokLineStart = input.lastIndexOf("\n", tokLineStart - 2) + 1;
		--tokCurLine;
	  }
	}
	skipSpace();
	readToken();
  }

  function node_t() {
	this.type = null;
	this.start = tokStart;
	this.end = null;
  }

  function node_loc_t() {
	this.start = tokStartLoc;
	this.end = null;
	if (sourceFile !== null) this.source = sourceFile;
  }

  function startNode() {
	var node = new node_t();
	if (options.locations)
	  node.loc = new node_loc_t();
	if (options.directSourceFile)
	  node.sourceFile = options.directSourceFile;
	if (options.ranges)
	  node.range = [tokStart, 0];
	return node;
  }

  function startNodeFrom(other) {
	var node = new node_t();
	node.start = other.start;
	if (options.locations) {
	  node.loc = new node_loc_t();
	  node.loc.start = other.loc.start;
	}
	if (options.ranges)
	  node.range = [other.range[0], 0];

	return node;
  }

  function finishNode(node, type) {
	node.type = type;
	node.end = lastEnd;
	if (options.locations)
	  node.loc.end = lastEndLoc;
	if (options.ranges)
	  node.range[1] = lastEnd;
	return node;
  }

  function isUseStrict(stmt) {
	return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" &&
	  stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
  }

  function eat(type) {
	if (tokType === type) {
	  next();
	  return true;
	}
  }

  function canInsertSemicolon() {
	return !options.strictSemicolons &&
	  (tokType === _eof || tokType === _braceR || newline.test(input.slice(lastEnd, tokStart)));
  }

  function semicolon() {
	if (!eat(_semi) && !canInsertSemicolon()) unexpected();
  }

  function expect(type) {
	if (tokType === type) next();
	else unexpected();
  }

  function unexpected() {
	raise(tokStart, "Unexpected token");
  }

  function checkLVal(expr) {
	if (expr.type !== "Identifier" && expr.type !== "MemberExpression")
	  raise(expr.start, "Assigning to rvalue");
	if (strict && expr.type === "Identifier" && isStrictBadIdWord(expr.name))
	  raise(expr.start, "Assigning to " + expr.name + " in strict mode");
  }

  function parseTopLevel(program) {
	lastStart = lastEnd = tokPos;
	if (options.locations) lastEndLoc = new line_loc_t;
	inFunction = strict = null;
	labels = [];
	readToken();

	var node = program || startNode(), first = true;
	if (!program) node.body = [];
	while (tokType !== _eof) {
	  var stmt = parseStatement();
	  node.body.push(stmt);
	  if (first && isUseStrict(stmt)) setStrict(true);
	  first = false;
	}
	return finishNode(node, "Program");
  }

  var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

  function parseStatement() {
	if (tokType === _slash || tokType === _assign && tokVal == "/=")
	  readToken(true);

	var starttype = tokType, node = startNode();

	switch (starttype) {
	case _break: case _continue:
	  next();
	  var isBreak = starttype === _break;
	  if (eat(_semi) || canInsertSemicolon()) node.label = null;
	  else if (tokType !== _name) unexpected();
	  else {
		node.label = parseIdent();
		semicolon();
	  }

	  for (var i = 0; i < labels.length; ++i) {
		var lab = labels[i];
		if (node.label == null || lab.name === node.label.name) {
		  if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
		  if (node.label && isBreak) break;
		}
	  }
	  if (i === labels.length) raise(node.start, "Unsyntactic " + starttype.keyword);
	  return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");

	case _debugger:
	  next();
	  semicolon();
	  return finishNode(node, "DebuggerStatement");

	case _do:
	  next();
	  labels.push(loopLabel);
	  node.body = parseStatement();
	  labels.pop();
	  expect(_while);
	  node.test = parseParenExpression();
	  semicolon();
	  return finishNode(node, "DoWhileStatement");

	case _for:
	  next();
	  labels.push(loopLabel);
	  expect(_parenL);
	  if (tokType === _semi) return parseFor(node, null);
	  if (tokType === _var) {
		var init = startNode();
		next();
		parseVar(init, true);
		finishNode(init, "VariableDeclaration");
		if (init.declarations.length === 1 && eat(_in))
		  return parseForIn(node, init);
		return parseFor(node, init);
	  }
	  var init = parseExpression(false, true);
	  if (eat(_in)) {checkLVal(init); return parseForIn(node, init);}
	  return parseFor(node, init);

	case _function:
	  next();
	  return parseFunction(node, true);

	case _if:
	  next();
	  node.test = parseParenExpression();
	  node.consequent = parseStatement();
	  node.alternate = eat(_else) ? parseStatement() : null;
	  return finishNode(node, "IfStatement");

	case _return:
	  if (!inFunction && !options.allowReturnOutsideFunction)
		raise(tokStart, "'return' outside of function");
	  next();

	  if (eat(_semi) || canInsertSemicolon()) node.argument = null;
	  else { node.argument = parseExpression(); semicolon(); }
	  return finishNode(node, "ReturnStatement");

	case _switch:
	  next();
	  node.discriminant = parseParenExpression();
	  node.cases = [];
	  expect(_braceL);
	  labels.push(switchLabel);

	  for (var cur, sawDefault; tokType != _braceR;) {
		if (tokType === _case || tokType === _default) {
		  var isCase = tokType === _case;
		  if (cur) finishNode(cur, "SwitchCase");
		  node.cases.push(cur = startNode());
		  cur.consequent = [];
		  next();
		  if (isCase) cur.test = parseExpression();
		  else {
			if (sawDefault) raise(lastStart, "Multiple default clauses"); sawDefault = true;
			cur.test = null;
		  }
		  expect(_colon);
		} else {
		  if (!cur) unexpected();
		  cur.consequent.push(parseStatement());
		}
	  }
	  if (cur) finishNode(cur, "SwitchCase");
	  next();
	  labels.pop();
	  return finishNode(node, "SwitchStatement");

	case _throw:
	  next();
	  if (newline.test(input.slice(lastEnd, tokStart)))
		raise(lastEnd, "Illegal newline after throw");
	  node.argument = parseExpression();
	  semicolon();
	  return finishNode(node, "ThrowStatement");

	case _try:
	  next();
	  node.block = parseBlock();
	  node.handler = null;
	  if (tokType === _catch) {
		var clause = startNode();
		next();
		expect(_parenL);
		clause.param = parseIdent();
		if (strict && isStrictBadIdWord(clause.param.name))
		  raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
		expect(_parenR);
		clause.guard = null;
		clause.body = parseBlock();
		node.handler = finishNode(clause, "CatchClause");
	  }
	  node.guardedHandlers = empty;
	  node.finalizer = eat(_finally) ? parseBlock() : null;
	  if (!node.handler && !node.finalizer)
		raise(node.start, "Missing catch or finally clause");
	  return finishNode(node, "TryStatement");

	case _var:
	  next();
	  parseVar(node);
	  semicolon();
	  return finishNode(node, "VariableDeclaration");

	case _while:
	  next();
	  node.test = parseParenExpression();
	  labels.push(loopLabel);
	  node.body = parseStatement();
	  labels.pop();
	  return finishNode(node, "WhileStatement");

	case _with:
	  if (strict) raise(tokStart, "'with' in strict mode");
	  next();
	  node.object = parseParenExpression();
	  node.body = parseStatement();
	  return finishNode(node, "WithStatement");

	case _braceL:
	  return parseBlock();

	case _semi:
	  next();
	  return finishNode(node, "EmptyStatement");

	default:
	  var maybeName = tokVal, expr = parseExpression();
	  if (starttype === _name && expr.type === "Identifier" && eat(_colon)) {
		for (var i = 0; i < labels.length; ++i)
		  if (labels[i].name === maybeName) raise(expr.start, "Label '" + maybeName + "' is already declared");
		var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
		labels.push({name: maybeName, kind: kind});
		node.body = parseStatement();
		labels.pop();
		node.label = expr;
		return finishNode(node, "LabeledStatement");
	  } else {
		node.expression = expr;
		semicolon();
		return finishNode(node, "ExpressionStatement");
	  }
	}
  }

  function parseParenExpression() {
	expect(_parenL);
	var val = parseExpression();
	expect(_parenR);
	return val;
  }

  function parseBlock(allowStrict) {
	var node = startNode(), first = true, strict = false, oldStrict;
	node.body = [];
	expect(_braceL);
	while (!eat(_braceR)) {
	  var stmt = parseStatement();
	  node.body.push(stmt);
	  if (first && allowStrict && isUseStrict(stmt)) {
		oldStrict = strict;
		setStrict(strict = true);
	  }
	  first = false;
	}
	if (strict && !oldStrict) setStrict(false);
	return finishNode(node, "BlockStatement");
  }

  function parseFor(node, init) {
	node.init = init;
	expect(_semi);
	node.test = tokType === _semi ? null : parseExpression();
	expect(_semi);
	node.update = tokType === _parenR ? null : parseExpression();
	expect(_parenR);
	node.body = parseStatement();
	labels.pop();
	return finishNode(node, "ForStatement");
  }

  function parseForIn(node, init) {
	node.left = init;
	node.right = parseExpression();
	expect(_parenR);
	node.body = parseStatement();
	labels.pop();
	return finishNode(node, "ForInStatement");
  }

  function parseVar(node, noIn) {
	node.declarations = [];
	node.kind = "var";
	for (;;) {
	  var decl = startNode();
	  decl.id = parseIdent();
	  if (strict && isStrictBadIdWord(decl.id.name))
		raise(decl.id.start, "Binding " + decl.id.name + " in strict mode");
	  decl.init = eat(_eq) ? parseExpression(true, noIn) : null;
	  node.declarations.push(finishNode(decl, "VariableDeclarator"));
	  if (!eat(_comma)) break;
	}
	return node;
  }

  function parseExpression(noComma, noIn) {
	var expr = parseMaybeAssign(noIn);
	if (!noComma && tokType === _comma) {
	  var node = startNodeFrom(expr);
	  node.expressions = [expr];
	  while (eat(_comma)) node.expressions.push(parseMaybeAssign(noIn));
	  return finishNode(node, "SequenceExpression");
	}
	return expr;
  }

  function parseMaybeAssign(noIn) {
	var left = parseMaybeConditional(noIn);
	if (tokType.isAssign) {
	  var node = startNodeFrom(left);
	  node.operator = tokVal;
	  node.left = left;
	  next();
	  node.right = parseMaybeAssign(noIn);
	  checkLVal(left);
	  return finishNode(node, "AssignmentExpression");
	}
	return left;
  }

  function parseMaybeConditional(noIn) {
	var expr = parseExprOps(noIn);
	if (eat(_question)) {
	  var node = startNodeFrom(expr);
	  node.test = expr;
	  node.consequent = parseExpression(true);
	  expect(_colon);
	  node.alternate = parseExpression(true, noIn);
	  return finishNode(node, "ConditionalExpression");
	}
	return expr;
  }

  function parseExprOps(noIn) {
	return parseExprOp(parseMaybeUnary(), -1, noIn);
  }

  function parseExprOp(left, minPrec, noIn) {
	var prec = tokType.binop;
	if (prec != null && (!noIn || tokType !== _in)) {
	  if (prec > minPrec) {
		var node = startNodeFrom(left);
		node.left = left;
		node.operator = tokVal;
		var op = tokType;
		next();
		node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
		var exprNode = finishNode(node, (op === _logicalOR || op === _logicalAND) ? "LogicalExpression" : "BinaryExpression");
		return parseExprOp(exprNode, minPrec, noIn);
	  }
	}
	return left;
  }

  function parseMaybeUnary() {
	if (tokType.prefix) {
	  var node = startNode(), update = tokType.isUpdate;
	  node.operator = tokVal;
	  node.prefix = true;
	  tokRegexpAllowed = true;
	  next();
	  node.argument = parseMaybeUnary();
	  if (update) checkLVal(node.argument);
	  else if (strict && node.operator === "delete" &&
			   node.argument.type === "Identifier")
		raise(node.start, "Deleting local variable in strict mode");
	  return finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
	}
	var expr = parseExprSubscripts();
	while (tokType.postfix && !canInsertSemicolon()) {
	  var node = startNodeFrom(expr);
	  node.operator = tokVal;
	  node.prefix = false;
	  node.argument = expr;
	  checkLVal(expr);
	  next();
	  expr = finishNode(node, "UpdateExpression");
	}
	return expr;
  }

  function parseExprSubscripts() {
	return parseSubscripts(parseExprAtom());
  }

  function parseSubscripts(base, noCalls) {
	if (eat(_dot)) {
	  var node = startNodeFrom(base);
	  node.object = base;
	  node.property = parseIdent(true);
	  node.computed = false;
	  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
	} else if (eat(_bracketL)) {
	  var node = startNodeFrom(base);
	  node.object = base;
	  node.property = parseExpression();
	  node.computed = true;
	  expect(_bracketR);
	  return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
	} else if (!noCalls && eat(_parenL)) {
	  var node = startNodeFrom(base);
	  node.callee = base;
	  node.arguments = parseExprList(_parenR, false);
	  return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
	} else return base;
  }

  function parseExprAtom() {
	switch (tokType) {
	case _this:
	  var node = startNode();
	  next();
	  return finishNode(node, "ThisExpression");
	case _name:
	  return parseIdent();
	case _num: case _string: case _regexp:
	  var node = startNode();
	  node.value = tokVal;
	  node.raw = input.slice(tokStart, tokEnd);
	  next();
	  return finishNode(node, "Literal");

	case _null: case _true: case _false:
	  var node = startNode();
	  node.value = tokType.atomValue;
	  node.raw = tokType.keyword;
	  next();
	  return finishNode(node, "Literal");

	case _parenL:
	  var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart;
	  next();
	  var val = parseExpression();
	  val.start = tokStart1;
	  val.end = tokEnd;
	  if (options.locations) {
		val.loc.start = tokStartLoc1;
		val.loc.end = tokEndLoc;
	  }
	  if (options.ranges)
		val.range = [tokStart1, tokEnd];
	  expect(_parenR);
	  return val;

	case _bracketL:
	  var node = startNode();
	  next();
	  node.elements = parseExprList(_bracketR, true, true);
	  return finishNode(node, "ArrayExpression");

	case _braceL:
	  return parseObj();

	case _function:
	  var node = startNode();
	  next();
	  return parseFunction(node, false);

	case _new:
	  return parseNew();

	default:
	  unexpected();
	}
  }

  function parseNew() {
	var node = startNode();
	next();
	node.callee = parseSubscripts(parseExprAtom(), true);
	if (eat(_parenL)) node.arguments = parseExprList(_parenR, false);
	else node.arguments = empty;
	return finishNode(node, "NewExpression");
  }

  function parseObj() {
	var node = startNode(), first = true, sawGetSet = false;
	node.properties = [];
	next();
	while (!eat(_braceR)) {
	  if (!first) {
		expect(_comma);
		if (options.allowTrailingCommas && eat(_braceR)) break;
	  } else first = false;

	  var prop = {key: parsePropertyName()}, isGetSet = false, kind;
	  if (eat(_colon)) {
		prop.value = parseExpression(true);
		kind = prop.kind = "init";
	  } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" &&
				 (prop.key.name === "get" || prop.key.name === "set")) {
		isGetSet = sawGetSet = true;
		kind = prop.kind = prop.key.name;
		prop.key = parsePropertyName();
		if (tokType !== _parenL) unexpected();
		prop.value = parseFunction(startNode(), false);
	  } else unexpected();

	  if (prop.key.type === "Identifier" && (strict || sawGetSet)) {
		for (var i = 0; i < node.properties.length; ++i) {
		  var other = node.properties[i];
		  if (other.key.name === prop.key.name) {
			var conflict = kind == other.kind || isGetSet && other.kind === "init" ||
			  kind === "init" && (other.kind === "get" || other.kind === "set");
			if (conflict && !strict && kind === "init" && other.kind === "init") conflict = false;
			if (conflict) raise(prop.key.start, "Redefinition of property");
		  }
		}
	  }
	  node.properties.push(prop);
	}
	return finishNode(node, "ObjectExpression");
  }

  function parsePropertyName() {
	if (tokType === _num || tokType === _string) return parseExprAtom();
	return parseIdent(true);
  }

  function parseFunction(node, isStatement) {
	if (tokType === _name) node.id = parseIdent();
	else if (isStatement) unexpected();
	else node.id = null;
	node.params = [];
	var first = true;
	expect(_parenL);
	while (!eat(_parenR)) {
	  if (!first) expect(_comma); else first = false;
	  node.params.push(parseIdent());
	}

	var oldInFunc = inFunction, oldLabels = labels;
	inFunction = true; labels = [];
	node.body = parseBlock(true);
	inFunction = oldInFunc; labels = oldLabels;

	if (strict || node.body.body.length && isUseStrict(node.body.body[0])) {
	  for (var i = node.id ? -1 : 0; i < node.params.length; ++i) {
		var id = i < 0 ? node.id : node.params[i];
		if (isStrictReservedWord(id.name) || isStrictBadIdWord(id.name))
		  raise(id.start, "Defining '" + id.name + "' in strict mode");
		if (i >= 0) for (var j = 0; j < i; ++j) if (id.name === node.params[j].name)
		  raise(id.start, "Argument name clash in strict mode");
	  }
	}

	return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
  }

  function parseExprList(close, allowTrailingComma, allowEmpty) {
	var elts = [], first = true;
	while (!eat(close)) {
	  if (!first) {
		expect(_comma);
		if (allowTrailingComma && options.allowTrailingCommas && eat(close)) break;
	  } else first = false;

	  if (allowEmpty && tokType === _comma) elts.push(null);
	  else elts.push(parseExpression(true));
	}
	return elts;
  }

  function parseIdent(liberal) {
	var node = startNode();
	if (liberal && options.forbidReserved == "everywhere") liberal = false;
	if (tokType === _name) {
	  if (!liberal &&
		  (options.forbidReserved &&
		   (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(tokVal) ||
		   strict && isStrictReservedWord(tokVal)) &&
		  input.slice(tokStart, tokEnd).indexOf("\\") == -1)
		raise(tokStart, "The keyword '" + tokVal + "' is reserved");
	  node.name = tokVal;
	} else if (liberal && tokType.keyword) {
	  node.name = tokType.keyword;
	} else {
	  unexpected();
	}
	tokRegexpAllowed = false;
	next();
	return finishNode(node, "Identifier");
  }

});

		if (!acorn.version)
			acorn = null;
	}

	function parse(code, options) {
		return (global.acorn || acorn).parse(code, options);
	}

	var binaryOperators = {
		'+': '__add',
		'-': '__subtract',
		'*': '__multiply',
		'/': '__divide',
		'%': '__modulo',
		'==': '__equals',
		'!=': '__equals'
	};

	var unaryOperators = {
		'-': '__negate',
		'+': '__self'
	};

	var fields = Base.each(
		['add', 'subtract', 'multiply', 'divide', 'modulo', 'equals', 'negate'],
		function(name) {
			this['__' + name] = '#' + name;
		},
		{
			__self: function() {
				return this;
			}
		}
	);
	Point.inject(fields);
	Size.inject(fields);
	Color.inject(fields);

	function __$__(left, operator, right) {
		var handler = binaryOperators[operator];
		if (left && left[handler]) {
			var res = left[handler](right);
			return operator === '!=' ? !res : res;
		}
		switch (operator) {
		case '+': return left + right;
		case '-': return left - right;
		case '*': return left * right;
		case '/': return left / right;
		case '%': return left % right;
		case '==': return left == right;
		case '!=': return left != right;
		}
	}

	function $__(operator, value) {
		var handler = unaryOperators[operator];
		if (value && value[handler])
			return value[handler]();
		switch (operator) {
		case '+': return +value;
		case '-': return -value;
		}
	}

	function compile(code, options) {
		if (!code)
			return '';
		options = options || {};

		var insertions = [];

		function getOffset(offset) {
			for (var i = 0, l = insertions.length; i < l; i++) {
				var insertion = insertions[i];
				if (insertion[0] >= offset)
					break;
				offset += insertion[1];
			}
			return offset;
		}

		function getCode(node) {
			return code.substring(getOffset(node.range[0]),
					getOffset(node.range[1]));
		}

		function getBetween(left, right) {
			return code.substring(getOffset(left.range[1]),
					getOffset(right.range[0]));
		}

		function replaceCode(node, str) {
			var start = getOffset(node.range[0]),
				end = getOffset(node.range[1]),
				insert = 0;
			for (var i = insertions.length - 1; i >= 0; i--) {
				if (start > insertions[i][0]) {
					insert = i + 1;
					break;
				}
			}
			insertions.splice(insert, 0, [start, str.length - end + start]);
			code = code.substring(0, start) + str + code.substring(end);
		}

		function walkAST(node, parent) {
			if (!node)
				return;
			for (var key in node) {
				if (key === 'range' || key === 'loc')
					continue;
				var value = node[key];
				if (Array.isArray(value)) {
					for (var i = 0, l = value.length; i < l; i++)
						walkAST(value[i], node);
				} else if (value && typeof value === 'object') {
					walkAST(value, node);
				}
			}
			switch (node.type) {
			case 'UnaryExpression':
				if (node.operator in unaryOperators
						&& node.argument.type !== 'Literal') {
					var arg = getCode(node.argument);
					replaceCode(node, '$__("' + node.operator + '", '
							+ arg + ')');
				}
				break;
			case 'BinaryExpression':
				if (node.operator in binaryOperators
						&& node.left.type !== 'Literal') {
					var left = getCode(node.left),
						right = getCode(node.right),
						between = getBetween(node.left, node.right),
						operator = node.operator;
					replaceCode(node, '__$__(' + left + ','
							+ between.replace(new RegExp('\\' + operator),
								'"' + operator + '"')
							+ ', ' + right + ')');
				}
				break;
			case 'UpdateExpression':
			case 'AssignmentExpression':
				var parentType = parent && parent.type;
				if (!(
						parentType === 'ForStatement'
						|| parentType === 'BinaryExpression'
							&& /^[=!<>]/.test(parent.operator)
						|| parentType === 'MemberExpression' && parent.computed
				)) {
					if (node.type === 'UpdateExpression') {
						var arg = getCode(node.argument),
							exp = '__$__(' + arg + ', "' + node.operator[0]
									+ '", 1)',
							str = arg + ' = ' + exp;
						if (!node.prefix
								&& (parentType === 'AssignmentExpression'
									|| parentType === 'VariableDeclarator')) {
							if (getCode(parent.left || parent.id) === arg)
								str = exp;
							str = arg + '; ' + str;
						}
						replaceCode(node, str);
					} else {
						if (/^.=$/.test(node.operator)
								&& node.left.type !== 'Literal') {
							var left = getCode(node.left),
								right = getCode(node.right),
								exp = left + ' = __$__(' + left + ', "'
									+ node.operator[0] + '", ' + right + ')';
							replaceCode(node, /^\(.*\)$/.test(getCode(node))
									? '(' + exp + ')' : exp);
						}
					}
				}
				break;
			}
		}

		function encodeVLQ(value) {
			var res = '',
				base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
			value = (Math.abs(value) << 1) + (value < 0 ? 1 : 0);
			while (value || !res) {
				var next = value & (32 - 1);
				value >>= 5;
				if (value)
					next |= 32;
				res += base64[next];
			}
			return res;
		}

		var url = options.url || '',
			agent = paper.agent,
			version = agent.versionNumber,
			offsetCode = false,
			sourceMaps = options.sourceMaps,
			source = options.source || code,
			lineBreaks = /\r\n|\n|\r/mg,
			offset = options.offset || 0,
			map;
		if (sourceMaps && (agent.chrome && version >= 30
				|| agent.webkit && version >= 537.76
				|| agent.firefox && version >= 23
				|| agent.node)) {
			if (agent.node) {
				offset -= 2;
			} else if (window && url && !window.location.href.indexOf(url)) {
				var html = document.getElementsByTagName('html')[0].innerHTML;
				offset = html.substr(0, html.indexOf(code) + 1).match(
						lineBreaks).length + 1;
			}
			offsetCode = offset > 0 && !(
					agent.chrome && version >= 36 ||
					agent.safari && version >= 600 ||
					agent.firefox && version >= 40 ||
					agent.node);
			var mappings = ['AA' + encodeVLQ(offsetCode ? 0 : offset) + 'A'];
			mappings.length = (code.match(lineBreaks) || []).length + 1
					+ (offsetCode ? offset : 0);
			map = {
				version: 3,
				file: url,
				names:[],
				mappings: mappings.join(';AACA'),
				sourceRoot: '',
				sources: [url],
				sourcesContent: [source]
			};
		}
		walkAST(parse(code, { ranges: true, preserveParens: true }));
		if (map) {
			if (offsetCode) {
				code = new Array(offset + 1).join('\n') + code;
			}
			if (/^(inline|both)$/.test(sourceMaps)) {
				code += "\n//# sourceMappingURL=data:application/json;base64,"
						+ self.btoa(unescape(encodeURIComponent(
							JSON.stringify(map))));
			}
			code += "\n//# sourceURL=" + (url || 'paperscript');
		}
		return {
			url: url,
			source: source,
			code: code,
			map: map
		};
	}

	function execute(code, scope, options) {
		paper = scope;
		var view = scope.getView(),
			tool = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/
					.test(code) && !/\bnew\s+Tool\b/.test(code)
						? new Tool() : null,
			toolHandlers = tool ? tool._events : [],
			handlers = ['onFrame', 'onResize'].concat(toolHandlers),
			params = [],
			args = [],
			func,
			compiled = typeof code === 'object' ? code : compile(code, options);
		code = compiled.code;
		function expose(scope, hidden) {
			for (var key in scope) {
				if ((hidden || !/^_/.test(key)) && new RegExp('([\\b\\s\\W]|^)'
						+ key.replace(/\$/g, '\\$') + '\\b').test(code)) {
					params.push(key);
					args.push(scope[key]);
				}
			}
		}
		expose({ __$__: __$__, $__: $__, paper: scope, view: view, tool: tool },
				true);
		expose(scope);
		handlers = Base.each(handlers, function(key) {
			if (new RegExp('\\s+' + key + '\\b').test(code)) {
				params.push(key);
				this.push(key + ': ' + key);
			}
		}, []).join(', ');
		if (handlers)
			code += '\nreturn { ' + handlers + ' };';
		var agent = paper.agent;
		if (document && (agent.chrome
				|| agent.firefox && agent.versionNumber < 40)) {
			var script = document.createElement('script'),
				head = document.head || document.getElementsByTagName('head')[0];
			if (agent.firefox)
				code = '\n' + code;
			script.appendChild(document.createTextNode(
				'paper._execute = function(' + params + ') {' + code + '\n}'
			));
			head.appendChild(script);
			func = paper._execute;
			delete paper._execute;
			head.removeChild(script);
		} else {
			func = Function(params, code);
		}
		var res = func.apply(scope, args) || {};
		Base.each(toolHandlers, function(key) {
			var value = res[key];
			if (value)
				tool[key] = value;
		});
		if (view) {
			if (res.onResize)
				view.setOnResize(res.onResize);
			view.emit('resize', {
				size: view.size,
				delta: new Point()
			});
			if (res.onFrame)
				view.setOnFrame(res.onFrame);
			view.requestUpdate();
		}
		return compiled;
	}

	function loadScript(script) {
		if (/^text\/(?:x-|)paperscript$/.test(script.type)
				&& PaperScope.getAttribute(script, 'ignore') !== 'true') {
			var canvasId = PaperScope.getAttribute(script, 'canvas'),
				canvas = document.getElementById(canvasId),
				src = script.src || script.getAttribute('data-src'),
				async = PaperScope.hasAttribute(script, 'async'),
				scopeAttribute = 'data-paper-scope';
			if (!canvas)
				throw new Error('Unable to find canvas with id "'
						+ canvasId + '"');
			var scope = PaperScope.get(canvas.getAttribute(scopeAttribute))
						|| new PaperScope().setup(canvas);
			canvas.setAttribute(scopeAttribute, scope._id);
			if (src) {
				Http.request({
					url: src,
					async: async,
					mimeType: 'text/plain',
					onLoad: function(code) {
						execute(code, scope, src);
					}
				});
			} else {
				execute(script.innerHTML, scope, script.baseURI);
			}
			script.setAttribute('data-paper-ignore', 'true');
			return scope;
		}
	}

	function loadAll() {
		Base.each(document && document.getElementsByTagName('script'),
				loadScript);
	}

	function load(script) {
		return script ? loadScript(script) : loadAll();
	}

	if (window) {
		if (document.readyState === 'complete') {
			setTimeout(loadAll);
		} else {
			DomEvent.add(window, { load: loadAll });
		}
	}

	return {
		compile: compile,
		execute: execute,
		load: load,
		parse: parse
	};

}.call(this);

paper = new (PaperScope.inject(Base.exports, {
	Base: Base,
	Numerical: Numerical,
	Key: Key,
	DomEvent: DomEvent,
	DomElement: DomElement,
	document: document,
	window: window,
	Symbol: SymbolDefinition,
	PlacedSymbol: SymbolItem
}))();

if (paper.agent.node) {
	require('./node/extend.js')(paper);
}

if (typeof define === 'function' && define.amd) {
	define('paper', paper);
} else if (typeof module === 'object' && module) {
	module.exports = paper;
}

return paper;
}.call(this, typeof self === 'object' ? self : null);

},{"./node/extend.js":1,"./node/self.js":1,"acorn":10}],40:[function(require,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],41:[function(require,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],42:[function(require,module,exports){

/**
 * Module dependencies.
 */

var url = require('./url');
var parser = require('socket.io-parser');
var Manager = require('./manager');
var debug = require('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = require('./manager');
exports.Socket = require('./socket');

},{"./manager":43,"./socket":45,"./url":46,"debug":19,"socket.io-parser":48}],43:[function(require,module,exports){

/**
 * Module dependencies.
 */

var eio = require('engine.io-client');
var Socket = require('./socket');
var Emitter = require('component-emitter');
var parser = require('socket.io-parser');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:manager');
var indexOf = require('indexof');
var Backoff = require('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":44,"./socket":45,"backo2":13,"component-bind":16,"component-emitter":17,"debug":19,"engine.io-client":21,"indexof":35,"socket.io-parser":48}],44:[function(require,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

},{}],45:[function(require,module,exports){

/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var Emitter = require('component-emitter');
var toArray = require('to-array');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:socket');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};

},{"./on":44,"component-bind":16,"component-emitter":17,"debug":19,"parseqs":40,"socket.io-parser":48,"to-array":50}],46:[function(require,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = require('parseuri');
var debug = require('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"debug":19,"parseuri":41}],47:[function(require,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = require('isarray');
var isBuf = require('./is-buffer');
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./is-buffer":49,"isarray":36}],48:[function(require,module,exports){

/**
 * Module dependencies.
 */

var debug = require('debug')('socket.io-parser');
var Emitter = require('component-emitter');
var hasBin = require('has-binary2');
var binary = require('./binary');
var isBuf = require('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
  }

  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch(e){
    return error();
  }
  return p; 
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":47,"./is-buffer":49,"component-emitter":17,"debug":19,"has-binary2":33}],49:[function(require,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],51:[function(require,module,exports){
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}]},{},[5]);
