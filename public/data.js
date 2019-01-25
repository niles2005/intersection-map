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
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:575.5,y:209}
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:599.5,y:209}
    },

    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:626,y:210}
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:553,y:332}
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:578,y:331}
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:605,y:331}
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:632,y:334},
      angle:Math.PI * 1.95 
    },


    {
      type:"arrow",
      name:"direct-right",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:407},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:424},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:442},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:462},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:406},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:424.5},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:447.5},
      angle:Math.PI / 2
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:848,y:469},
      angle:Math.PI / 2 * 0.95
    },


    {
      type:"arrow",
      name:"direct-right",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:752,y:704},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:728,y:704},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:703,y:704},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:677,y:703},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:754,y:575},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:729,y:576},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:695,y:576},
      angle:Math.PI
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:668,y:574},
      angle:Math.PI / 2 * 1.91
    },


    {
      type:"arrow",
      name:"direct-right",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:291,y:510},
      angle:-Math.PI/2 
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:492},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:474},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:455},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:511},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:493},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"direct",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:469},
      angle:-Math.PI/2
    },
    {
      type:"arrow",
      name:"left",
      fillStyle:"red",
      scale: {x:0.8,y:0.8},
      translate:{x:446,y:453},
      angle:Math.PI / 2 * 0.91 + Math.PI
    },

    {
      type: "line",
      p1: { x: 516, y: 261 },
      p2: { x: 639, y: 261 },
      strokeStyle:"red"
    },
    {
      type: "line",
      p1: { x: 589, y: 26 },
      p2: { x: 589, y: 261 },
      strokeStyle:"red"
    },
    {
      type: "line",
      p1: { x: 614, y: 26 },
      p2: { x: 614, y: 261 },
      strokeStyle:"red"
    },
  ]
};
