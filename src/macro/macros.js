/*
 * Functions that return a set of properties and their values.
 */

/**
 *  Return rounded corner properties. Call with an optional side and a radius.
 *
 * roundedCorners(10);
 * roundedCorners('left', 8);
 * roundedCorners('tl', 6);
 *
 * @param side  tl, tr, bl, br, left, right, top or bottom or "all", the default
 * @param radius pixel measurement
 */
function roundedCorners(side, radius) {
  if (!radius) {
    radius = side;
    side = 'all';
  }
  if (side == 'all') {
    return {
        '-moz-border-radius': radius,
        'border-radius': radius
    }
  } else {
    var rules = {};
    if (side == 'tl' ||side == 'top' ||side == 'left') {
      rules['-moz-border-radius-topleft'] = radius;
      rules['border-top-left-radius'] = radius;
    }
    if (side == 'tr' ||side == 'top' ||side == 'right') {
      rules['-moz-border-radius-topright'] = radius;
      rules['border-top-right-radius'] = radius;
    }
    if (side == 'bl' ||side == 'bottom' ||side == 'left') {
      rules['-moz-border-radius-bottomleft'] = radius;
      rules['border-bottom-left-radius'] = radius;
    }
    if (side == 'br' ||side == 'bottom' ||side == 'right') {
      rules['-moz-border-radius-bottomright'] = radius;
      rules['border-bottom-right-radius'] = radius;
    }
    return rules;
  }
}
