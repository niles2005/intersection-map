var data = {
  graphs: [
    {
      type: "background",
      src: "images/intersection.png"
    },
    {
      type: "shape",
      fillStyle: "rgba(128,221,174,0.3)",
      strokeStyle: "#000000",
      lineWidth: 0.5,
      points:
        "25,374,364,374, c497,377,  515,290,515,0,764,0,764,292,  c792,376,   906,385,1279,385,1279,543,905,543,   c804,554,   788,630,788,906, 540,906,540,625,  c515,545,   403,532,25,532"
    },
    {
      type: "quadraticCurve1",
      points: "25,374,364,374, 497,377,  515,290,515,0"
    },
    {
      type: "quadraticCurve1",
      points: "764,0,764,292,  792,376,   906,385,1279,385"
    },
    {
      type: "quadraticCurve1",
      points: "1279,543,905,543,  804,554,   788,630,788,906"
    },
    {
      type: "quadraticCurve1",
      points: "540,906,540,625,  515,545,   403,532,25,532"
    },
    {
      type: "zebraLine",
      p1: { x: 521, y: 278.5 },
      p2: { x: 642, y: 278.5 },
      angle: Math.PI,
      num: 14,
      zebraWidth: 14
    },
    {
      type: "zebraLine",
      p1: { x: 661, y: 278 },
      p2: { x: 765, y: 278 },
      angle: Math.PI,
      num: 12,
      zebraWidth: 14
    },
    {
      type: "zebraLine",
      p1: { x: 373, y: 379 },
      p2: { x: 373, y: 444 },
      angle: Math.PI,
      num: 10,
      zebraWidth: 19
    },
    {
      type: "zebraLine",
      p1: { x: 373, y: 451 },
      p2: { x: 373, y: 533.5 },
      angle: Math.PI,
      num: 13,
      zebraWidth: 19
    },
    {
      type: "zebraLine",
      p1: { x: 924, y: 389.5 },
      p2: { x: 924, y: 473 },
      angle: Math.PI,
      num: 13,
      zebraWidth: 19
    },
    {
      type: "zebraLine",
      p1: { x: 924, y: 480 },
      p2: { x: 924, y: 544 },
      angle: Math.PI,
      num: 10,
      zebraWidth: 19
    },
    {
      type: "zebraLine",
      p1: { x: 548, y: 640.5 },
      p2: { x: 652, y: 640.5 },
      angle: Math.PI,
      num: 12,
      zebraWidth: 19
    },
    {
      type: "zebraLine",
      p1: { x: 671, y: 640 },
      p2: { x: 792, y: 640 },
      angle: Math.PI,
      num: 14,
      zebraWidth: 14
    },
    {
      type:"arrow",
      name:"direct-right",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:550.5,y:209}
    }
  ]
};
