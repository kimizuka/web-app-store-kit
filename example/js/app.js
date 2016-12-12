(function(win, doc) {

  "use strict";

  if (doc.body.dataset.app !== "true") {
    return;
  }

  /* アプリで実行したい内容を書く */

  /*
   * 継承用EventDispatcher
   */
  function EventDispatcher() {
    this._events = {};
  }

  EventDispatcher.prototype.hasEventListener    = hasEventListener;
  EventDispatcher.prototype.addEventListener    = addEventListener;
  EventDispatcher.prototype.removeEventListener = removeEventListener;
  EventDispatcher.prototype.dispatchEvent       = dispatchEvent;

  function hasEventListener(eventName) {
    return !!this._events[eventName] && !!this._events[eventName].length;
  }

  function addEventListener(eventName, callback) {
    if (this.hasEventListener(eventName)) {
      var events = this._events[eventName],
          length = events.length,
          i;
  
      for (i = 0; i < length; i++) {
        if (events[i] === callback) {
          return;
        }
      }
      events.push(callback);      
    } else {
      this._events[eventName] = [callback];
    }

    return this;
  }

  function removeEventListener(eventName, callback) {
    if (!this.hasEventListener(eventName)) {
      return;
    } else {
      var events = this._events[eventName],
               i = events.length,
          index;

      while (i--) {
        if (events[i] === callback) {
          index = i;
        }
      }

      events.splice(index, 1);
    }

    return this;
  }

  function dispatchEvent(eventName, opt_arg) {
    if (!this.hasEventListener(eventName)) {
      return;
    } else {
      var events     = this._events[eventName],
          copyEvents = [].slice.call(events),
          arg        = [].slice.call(arguments),
          length     = events.length,
          i;

      // eventNameを削除
      arg.splice(0, 1);

      for (i = 0; i < length; i++) {
        copyEvents[i].apply(this, arg);
      }
    }
  }



  /*
   * 蹴られると跳ねるボール
   */
  function Ball() {
    var instance    = new EventDispatcher(),
        elm         = doc.getElementById("ball"),
        isKickFlag  = false,
        progress    = 0,
        y           = 0,
        currentTime = 0,
        startTime   = 0,
        duration    = 0,
        max         = 0,
        BOTTOM      = 35,
        DURATION    = 1000,
        MAX         = 400;

    EventDispatcher.apply(Ball, arguments);

    function _isKickable() {
      return ((1 > progress && progress > 0.5) || progress === 0) && (100 > y);
    }

    function kick() {
      isKickFlag = true;
      startTime  = currentTime;
      duration   = DURATION * 0.8 + ((Math.random() * DURATION * 0.4) | 0);
      max        = MAX * Math.max(Math.random(), 0.8);
    }

    function update() {
      progress = Math.max(Math.min(1, ((currentTime - startTime) / duration)), 0);

      y = max * Math.sin(progress * Math.PI);

      if (progress === 1) {
        progress = 0;
        isKickFlag = false;
        instance.dispatchEvent("FAIL");
      }
    }

    function render(evt) {
      currentTime = evt;
      elm.style.bottom = y + BOTTOM + "px";

      if (isKickFlag) {
        update();
      }
    }

    function getPosition() {
      return {
        y          : y,
        progress   : progress,
        isKickable : _isKickable()
      };
    }

    instance.kick        = kick;
    instance.render      = render;
    instance.getPosition = getPosition;

    return instance;
  }


  /*
   * タップするとキックするキッカー
   */
  function Kicker() {
    var instance     = new EventDispatcher(),
        elm          = doc.getElementById("kicker"),
        index        = 0,
        currentTime  = 0,
        startTime    = 0,
        isKickFlag   = false,
        timer        = null,
        INTERVAL     = 100,
        PENALTY_TIME = 1000;

    function fail() {
      clearTimeout(timer);
      elm.dataset.index = index = 3;

      setTimeout(function() {
        elm.dataset.index = index = 0;
      }, PENALTY_TIME);
    }

    function kick(param) {
      if (!index) {
        clearTimeout(timer);

        if (param.isKickable) {
          instance.dispatchEvent("KICK");
        }

        elm.dataset.index = index = 1;
        isKickFlag = true;
        timer = setTimeout(function() {
          index = 2;
          timer = setTimeout(function() {
            index = 1;
            timer = setTimeout(function() {
              index = 0;
              isKickFlag = false;
            }, INTERVAL);
          }, INTERVAL);
        }, INTERVAL);
      }
    }

    function isKick() {
      return isKickFlag;
    }

    function render() {
      elm.dataset.index = index;
    }

    instance.fail   = fail;
    instance.kick   = kick;
    instance.isKick = isKick;
    instance.render = render;

    return instance;
  }


  /*
   * スコア
   */
  function Score() {
    var elm   = doc.getElementById("score"),
        score = -1;

    function reset() {
      score = -1;
    }

    function add() {
      ++score;
    }

    function render() {
      elm.innerText = Math.max(score, 0);
    }

    return {
      reset  : reset,
      add    : add,
      render : render
    };
  }


  /*
   * mainの処理
   */
  var ball   = new Ball(),
      kicker = new Kicker(),
      score  = new Score();

  ball.addEventListener("FAIL", function() {
    kicker.fail();
    score.reset();
  });

  kicker.addEventListener("KICK", function() {
    ball.kick();
    score.add();
  });

  doc.body.addEventListener("touchend", function(evt) {
    if (!isMenu(evt.target)) {
      kicker.kick(ball.getPosition());
    }
  }, false);

  requestAnimationFrame(tick);

  function tick(evt) {
    kicker.render(evt);
    ball.render(evt);
    score.render(evt);
    requestAnimationFrame(tick);
  }

  function isMenu(target) {
    if (target.id === "app-btnMenu" || target.id === "app-menu") {
      return true;
    } else {
      if (!target.parentNode) {
        return false;
      } else {
        return isMenu(target.parentNode);
      }
    }

  }


})(window, document);