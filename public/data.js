var data = {
  graphs: [
    {
      type: "背景图",
      src: "images/intersection.png"
    },
    {
      type: "形状",
      fillStyle: "rgba(128,221,174,1)",
      strokeStyle: "#000000",
      lineWidth: 0.5,
      points:
        "25,374,364,374, c497,377,  515,290,515,0,764,0,764,292,  c792,376,   906,385,1279,385,1279,543,905,543,   c804,554,   788,630,788,906, 540,906,540,625,  c515,545,   403,532,25,532"
    },
    {
      type: "相交曲线1",
      points: "25,374,364,374, 497,377,  515,290,515,0"
    },
    {
      type: "相交曲线1",
      points: "764,0,764,292,  792,376,   906,385,1279,385"
    },
    {
      type: "相交曲线1",
      points: "1279,543,905,543,  804,554,   788,630,788,906"
    },
    {
      type: "相交曲线1",
      points: "540,906,540,625,  515,545,   403,532,25,532"
    },
    {
      type: "斑马线",
      p1: { x: 521, y: 278.5 },
      p2: { x: 642, y: 278.5 },
      angle: Math.PI,
      num: 14,
      zebraWidth: 14
    },
    {
      type: "斑马线",
      p1: { x: 661, y: 278 },
      p2: { x: 765, y: 278 },
      angle: Math.PI,
      num: 12,
      zebraWidth: 14
    },
    {
      type: "斑马线",
      p1: { x: 373, y: 379 },
      p2: { x: 373, y: 444 },
      angle: Math.PI,
      num: 10,
      zebraWidth: 19
    },
    {
      type: "斑马线",
      p1: { x: 373, y: 451 },
      p2: { x: 373, y: 533.5 },
      angle: Math.PI,
      num: 13,
      zebraWidth: 19
    },
    {
      type: "斑马线",
      p1: { x: 924, y: 389.5 },
      p2: { x: 924, y: 473 },
      angle: Math.PI,
      num: 13,
      zebraWidth: 19
    },
    {
      type: "斑马线",
      p1: { x: 924, y: 480 },
      p2: { x: 924, y: 544 },
      angle: Math.PI,
      num: 10,
      zebraWidth: 19
    },
    {
      type: "斑马线",
      p1: { x: 548, y: 640.5 },
      p2: { x: 652, y: 640.5 },
      angle: Math.PI,
      num: 12,
      zebraWidth: 14
    },
    {
      type: "斑马线",
      p1: { x: 671, y: 640 },
      p2: { x: 792, y: 640 },
      angle: Math.PI,
      num: 14,
      zebraWidth: 14
    },
    {
      type:"箭头",
      name:"direct-right",
      scale: {x:0.8,y:0.8},
      translate:{x:550.5,y:209}
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:575.5,y:209}
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:599.5,y:209}
    },

    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:626,y:210}
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:553,y:332}
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:578,y:331}
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:605,y:331}
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:632,y:334},
      angle:Math.PI * 1.95 
    },


    {
      type:"箭头",
      name:"direct-right",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:407},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:424},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:442},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:1008,y:462},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:406},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:424.5},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:852,y:447.5},
      angle:Math.PI / 2
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:848,y:469},
      angle:Math.PI / 2 * 0.95
    },


    {
      type:"箭头",
      name:"direct-right",
      scale: {x:0.8,y:0.8},
      translate:{x:752,y:704},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:728,y:704},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:703,y:704},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:677,y:703},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:754,y:575},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:729,y:576},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:695,y:576},
      angle:Math.PI
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:668,y:574},
      angle:Math.PI / 2 * 1.91
    },


    {
      type:"箭头",
      name:"direct-right",
      scale: {x:0.8,y:0.8},
      translate:{x:291,y:510},
      angle:-Math.PI/2 
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:492},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:474},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:292,y:455},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:511},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:493},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"direct",
      scale: {x:0.8,y:0.8},
      translate:{x:444,y:469},
      angle:-Math.PI/2
    },
    {
      type:"箭头",
      name:"left",
      scale: {x:0.8,y:0.8},
      translate:{x:446,y:453},
      angle:Math.PI / 2 * 0.91 + Math.PI
    },

    {
      type: "白实线",
      p1: { x: 516, y: 261 },
      p2: { x: 639, y: 261 }
    },
    {
      type: "白实线",
      p1: { x: 589, y: 26 },
      p2: { x: 589, y: 261 }
    },
    {
      type: "白实线",
      p1: { x: 614, y: 26 },
      p2: { x: 614, y: 261 }
    },
    {
      type: "黄实线",
      p1: { x: 540, y: 26 },
      p2: { x: 540, y: 261 }
    },
    {
      type: "黄实线",
      p1: { x: 564, y: 26 },
      p2: { x: 564, y: 261 }
    },
    {
      type: "黄实线",
      p1: { x: 638, y: 13 },
      p2: { x: 638, y: 304 }
    },
    {
      type: "黄实线",
      p1: { x: 653, y: 13 },
      p2: { x: 653, y: 304 }
    },
    {
      type: "黄虚线",
      p1: { x: 726, y: 261 },
      p2: { x: 726, y: -100 }
    },
    {
      type: "白虚线",
      p1: { x: 691, y: 261 },
      p2: { x: 691, y: -100 }
    },
    {
      type: "白虚线",
      p1: { x: 540, y: 386 },
      p2: { x: 540, y: 294 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 564, y: 386 },
      p2: { x: 564, y: 294 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 591, y: 386 },
      p2: { x: 591, y: 294 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 540, y: 386 },
      p2: { x: 598, y: 386 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 657, y: 386 },
      p2: { x: 607, y: 386 },
      dash:[18,16]
    },



    {
      type: "白实线",
      p1: { x: 945, y: 385 },
      p2: { x: 945, y: 470 }
    },
    {
      type: "白实线",
      p1: { x: 664, y: 657 },
      p2: { x: 788, y: 657 }
    },

    
    {
      type: "白实线",
      p1: { x: 352, y: 447 },
      p2: { x: 352, y: 532 }
    },
    {
      type: "白实线",
      p1: { x: 945, y: 436 },
      p2: { x: 1272, y: 436 }
    },
    {
      type: "白实线",
      p1: { x: 945, y: 454 },
      p2: { x: 1271, y: 454 }
    },
    {
      type: "黄实线",
      p1: { x: 945, y: 399 },
      p2: { x: 1271, y: 399 }
    },
    {
      type: "黄实线",
      p1: { x: 945, y: 417 },
      p2: { x: 1271, y: 417 }
    },
    {
      type: "黄实线",
      p1: { x: 892, y: 470 },
      p2: { x: 1271, y: 470 }
    },
    {
      type: "黄实线",
      p1: { x: 892, y: 475 },
      p2: { x: 1271, y: 475 }
    },
    {
      type: "黄虚线",
      p1: { x: 945, y: 519 },
      p2: { x: 1300, y: 519 }
    },
    {
      type: "白虚线",
      p1: { x: 945, y: 500 },
      p2: { x: 1300, y: 500 }
    },
    {
      type: "白虚线",
      p1: { x: 795, y: 397 },
      p2: { x: 904, y: 397 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 795, y: 416 },
      p2: { x: 904, y: 416 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 795, y: 435 },
      p2: { x: 904, y: 435 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 795, y: 397 },
      p2: { x: 795, y: 442 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 795, y: 484 },
      p2: { x: 795, y: 456 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 632, y: 386 },
      p2: { x: 614, y: 292 },
      px: { x: 617, y: 344 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 657, y: 386 },
      p2: { x: 640, y: 292 },
      px: { x: 641, y: 340 },
      dash:[18,16]
    },




    {
      type: "白实线",
      p1: { x: 689, y: 657 },
      p2: { x: 689, y: 906 }
    },
    {
      type: "白实线",
      p1: { x: 714, y: 657 },
      p2: { x: 714, y: 906 }
    },
    {
      type: "黄实线",
      p1: { x: 740, y: 657 },
      p2: { x: 740, y: 906 }
    },
    {
      type: "黄实线",
      p1: { x: 763, y: 657 },
      p2: { x: 763, y: 906 }
    },
    {
      type: "黄实线",
      p1: { x: 650, y: 617 },
      p2: { x: 650, y: 906 }
    },
    {
      type: "黄实线",
      p1: { x: 664, y: 617 },
      p2: { x: 664, y: 906 }
    },
    {
      type: "黄虚线",
      p1: { x: 578, y: 657 },
      p2: { x: 578, y: 935 }
    },
    {
      type: "白虚线",
      p1: { x: 612, y: 657 },
      p2: { x: 612, y: 935 }
    },
    {
      type: "白虚线",
      p1: { x: 764, y: 532 },
      p2: { x: 764, y: 626 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 739, y: 532 },
      p2: { x: 739, y: 626 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 714, y: 532 },
      p2: { x: 714, y: 626 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 764, y: 532 },
      p2: { x: 702, y: 532 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 685, y: 532 },
      p2: { x: 647, y: 532 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 795, y: 465 },
      p2: { x: 905, y: 452 },
      px: { x: 856, y: 453 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 795, y: 484 },
      p2: { x: 905, y: 471 },
      px: { x: 851, y: 471 },
      dash:[18,16]
    },


    {
      type: "白实线",
      p1: { x: 352, y: 465 },
      p2: { x: 35, y: 465 }
    },
    {
      type: "白实线",
      p1: { x: 352, y: 483 },
      p2: { x: 35, y: 483 }
    },
    {
      type: "黄实线",
      p1: { x: 352, y: 501 },
      p2: { x: 35, y: 501 }
    },
    {
      type: "黄实线",
      p1: { x: 352, y: 520 },
      p2: { x: 35, y: 520 }
    },
    {
      type: "黄实线",
      p1: { x: 36, y: 441 },
      p2: { x: 400, y: 441 }
    },
    {
      type: "黄实线",
      p1: { x: 36, y: 447 },
      p2: { x: 400, y: 447 }
    },
    {
      type: "黄虚线",
      p1: { x: 348, y: 399 },
      p2: { x: -100, y: 399 }
    },
    {
      type: "白虚线",
      p1: { x: 348, y: 419 },
      p2: { x: -100, y: 419 }
    },
    {
      type: "白虚线",
      p1: { x: 508, y: 484 },
      p2: { x: 391, y: 484 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 508, y: 502 },
      p2: { x: 391, y: 502 },
      dash:[18,16]
    },
    {
      type: "白虚线",
      p1: { x: 508, y: 520 },
      p2: { x: 391, y: 520 },
      dash:[18,16]
    },




    {
      type: "白实线",
      p1: { x: 508, y: 520 },
      p2: { x: 508, y: 475 },
      dash:[18,16]
    },
    {
      type: "白实线",
      p1: { x: 508, y: 434 },
      p2: { x: 508, y: 462 },
      dash:[18,16]
    },


    {
      type: "曲线",
      p1: { x: 672, y: 532 },
      p2: { x: 690, y: 627 },
      px: { x: 683, y: 561 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 647, y: 532 },
      p2: { x: 666, y: 626 },
      px: { x: 659, y: 564 },
      dash:[18,16]
    },

    {
      type: "曲线",
      p1: { x: 508, y: 452 },
      p2: { x: 390, y: 465 },
      px: { x: 465, y: 462 },
      dash:[18,16]
    },
    {
      type: "曲线",
      p1: { x: 508, y: 434 },
      p2: { x: 390, y: 447 },
      px: { x: 470, y: 443 },
      dash:[18,16]
    },

    {
      type: "路牌柱",
      px: { x: 516, y: 211 },
      angle: Math.PI/2
    },
    {
      type: "路牌柱",
      px: { x: 756, y: 243 },
      angle: -Math.PI/2
    },

    {
      type: "路牌柱",
      px: { x: 1019, y: 389 },
      angle: -Math.PI
    },
    {
      type: "路牌柱",
      px: { x: 979, y: 535 }
    },
    
    {
      type: "路牌柱",
      px: { x: 530, y: 679 },
      angle: -Math.PI/2
    },

    {
      type: "路牌柱",
      px: { x: 112, y: 365 }
    },
    {
      type: "路牌柱",
      px: { x: 273, y: 310 }
    },


    {
      type: "标志牌柱",
      px: { x: 496, y: 342 }
    },
    {
      type: "标志牌柱",
      px: { x: 643, y: 299 },
      angle: Math.PI / 2
    },
    {
      type: "标志牌柱",
      px: { x: 898, y: 473 }
    },
    {
      type: "标志牌柱",
      px: { x: 855, y: 578 }
    },
    {
      type: "标志牌柱",
      px: { x: 813, y: 624 }
    },
    {
      type: "标志牌柱",
      px: { x: 657, y: 624 },
      angle: Math.PI / 2
    },
    {
      type: "标志牌柱",
      px: { x: 392, y: 444 }
    },


    {
      type: "标志牌",
      px: { x: 673, y: 341 },
      angle: Math.PI * 3 / 4,
      scale: {x:0.13,y:0.13},
      src: "./images/直行.png"
    },
    {
      type: "标志牌",
      px: { x: 803, y: 511 },
      angle: Math.PI * 5 / 4,
      scale: {x:0.13,y:0.13},
      src: "./images/直行.png"
    },
    
    {
      type: "标志牌",
      px: { x: 602, y: 565 },
      angle: Math.PI * 7 / 4,
      scale: {x:0.13,y:0.13},
      src: "./images/直行.png"
    },
    {
      type: "标志牌",
      px: { x: 422, y: 408 },
      angle: Math.PI * 9 / 4,
      scale: {x:0.13,y:0.13},
      src: "./images/直行.png"
    },

    {
      type: "红黄绿灯",
      px: { x: 654, y: 304 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 665, y: 304 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 731, y: 307 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 742, y: 307 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 650, y: 606 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 661, y: 605 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 547, y: 605 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 558, y: 605 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 891, y: 519 },
      angle: Math.PI / 2,
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      angle: Math.PI / 2,
      px: { x: 891, y: 530 },
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      px: { x: 413, y: 435 },
      angle: Math.PI / 2,
      scale: {x:0.09,y:0.09}
    },
    {
      type: "红黄绿灯",
      angle: Math.PI / 2,
      px: { x: 413, y: 446 },
      scale: {x:0.09,y:0.09}
    },

    
    
    
    
    
  ]
};
