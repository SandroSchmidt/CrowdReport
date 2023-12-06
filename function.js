
a = new Date("2022-12-03 14:00:00")
b = new Date("2022-12-04 04:00:00")
var gr_layout = {
hovermode: "x",
  //title: 'Basic Time Series',
   margin: {l: 50,
  r: 50,b: 20,t: 5,
  pad: 4}, 
  xaxis: {range: [a, b]},
   };

function polystrtoco (d){
  ///                                       --------------- mit dieser funktion werden die polygon strings in coordinaten umgewandelt
  d = d.slice(8)
  d = d.slice(0,-1)
  d = d.split(", ")
    for (i=0;i<d.length;i++){
    d[i] = d[i].split(" ")
   }
  for (i=0;i<d.length;i++){
    d[i]=[
    d[i][1]*xauslpp +46.49160088116361
    ,
      d[i][0]*yauslpp +25.0074
      ]
   }
  return d
  }
  function svgcordtolat (d){
 ///                                       --------------- mit dieser funktion werden die polygon strings in coordinaten umgewandelt
       k=[
        d[1]*yauslpp +25.0074,
        d[0]*xauslpp +46.49160088116361
       
        
         ]
     
     return k
  }

zones_arr=[["FOH East","blue","polygon(385.269 258.112, 382.730 262.389, 391.550 264.393, 393.421 268.803, 387.942 270.139, 389.545 275.886, 394.891 274.817, 395.292 279.360, 393.421 286.042, 388.075 293.392, 380.993 298.871, 374.712 301.009, 373.776 294.995, 365.625 296.465, 363.754 307.156, 367.362 307.290, 371.237 306.221, 380.057 304.484, 389.412 305.553, 395.960 309.428, 405.982 318.248, 417.341 326.400, 427.364 331.077, 439.257 334.551, 450.526 338.222, 448.161 343.638, 458.080 346.692, 459.683 341.903, 470.264 345.241, 478.677 348.370, 492.665 350.932, 498.999 351.226, 499.401 353.709, 504.056 352.695, 507.199 347.997, 508.014 343.569, 505.617 339.235, 501.525 337.051, 497.789 335.888, 496.453 327.469, 501.130 326.400, 507.269 317.030, 513.292 317.272, 513.692 312.648, 507.241 312.133, 507.542 306.099, 514.599 304.978, 513.907 297.290, 506.696 298.107, 506.202 293.669, 508.478 291.933, 510.424 289.773, 509.965 286.825, 507.654 284.999, 505.116 284.598, 502.206 286.131, 504.739 289.116, 505.273 289.784, 504.070 309.161, 492.310 312.101, 481.620 312.234, 479.214 319.985, 471.196 326.266, 464.247 328.404, 456.496 327.736, 447.276 323.593, 442.064 317.312, 439.257 310.764, 439.926 305.285, 435.917 299.138, 431.640 299.405, 424.825 289.650, 422.687 281.097, 424.157 271.075, 428.700 267.868, 433.244 266.799, 435.649 250.629, 443.267 245.952, 446.741 245.417, 449.948 240.194, 471.775 243.309, 475.756 247.649, 477.657 245.894, 478.180 243.589, 476.573 240.754, 474.642 239.877, 472.424 239.792, 470.546 241.345, 468.791 237.655, 447.682 236.720, 435.858 238.810, 428.947 243.280, 425.016 239.887, 418.581 246.557, 410.965 251.007, 413.460 256.118, 406.366 258.682, 405.735 253.187, 393.270 253.806, 393.419 259.292)"],
["FOH West","steelblue","polygon(365.625 296.465, 363.754 307.156, 358.132 306.827, 357.754 309.095, 352.132 308.405, 351.490 314.049, 343.722 312.847, 345.092 302.405, 343.297 301.082, 316.744 297.397, 315.705 304.200, 309.279 303.633, 310.602 307.678, 310.224 310.418, 307.200 309.757, 306.161 312.308, 303.231 314.576, 297.751 315.332, 294.821 313.158, 288.018 300.874, 289.435 296.150, 290.475 293.976, 287.923 290.102, 270.064 277.912, 257.685 272.054, 239.467 273.517, 232.604 265.729, 228.503 263.556, 229.337 255.801, 230.187 251.737, 236.613 242.175, 247.102 242.930, 255.228 248.033, 261.890 253.108, 266.048 247.769, 271.292 251.501, 272.804 249.564, 275.828 252.021, 272.875 256.344, 275.497 259.297, 280.954 255.635, 283.435 258.966, 284.522 258.257, 281.594 251.615, 285.469 249.508, 289.723 255.528, 293.410 253.610, 294.262 249.235, 297.948 248.262, 300.690 269.968, 309.857 270.129, 316.931 268.432, 314.745 263.145, 323.519 255.968, 326.624 248.223, 326.895 240.857, 332.268 240.295, 332.268 240.295, 330.351 232.555, 336.470 233.193, 340.698 238.744, 343.675 245.312, 349.817 249.847, 355.338 250.971, 360.859 249.155, 368.081 248.815, 370.472 245.609, 373.502 247.675, 371.182 250.885, 375.477 253.896, 377.867 248.487, 387.140 252.366, 382.730 262.389, 373.440 259.486, 365.314 253.533, 365.975 258.257, 360.684 259.675, 359.172 255.517, 351.990 258.446, 343.580 265.439, 339.990 273.282, 339.517 281.219, 345.754 280.558, 348.778 289.063, 354.542 293.598)"],
["UG","pink","polygon(239.070 273.188, 235.668 275.266, 233.211 286.039, 227.731 285.850, 226.786 294.543, 230.376 296.055, 229.621 302.008, 235.952 312.403, 249.275 315.237, 255.795 316.182, 264.961 315.804, 274.222 313.158, 276.584 302.764, 273.844 297.378, 274.883 292.370, 277.907 290.007, 280.836 289.251, 284.238 289.063, 270.064 277.912, 257.685 272.054)"],
["west entrance","orange","polygon(173.869 233.217, 181.523 246.351, 192.012 248.808, 190.689 258.635, 179.917 257.879, 168.766 267.518, 161.963 266.478, 156.388 260.998, 159.033 259.297, 162.152 238.792, 161.018 234.728, 165.837 231.988)"],
["east bridge","lime","polygon(496.453 327.469, 501.130 326.400, 520.190 325.065, 543.435 321.379, 559.972 317.505, 561.484 326.766, 543.813 328.089, 521.040 331.679, 497.789 335.888)"],
["east entrance","lime","polygon(559.972 317.505, 562.145 316.371, 557.420 284.999, 576.508 281.975, 594.084 286.322, 606.179 298.512, 612.416 312.497, 612.227 330.923, 606.085 342.357, 596.257 352.185, 586.525 356.531, 573.106 359.461, 567.059 360.311, 561.484 326.766)"],
["town","yellow","polygon(359.172 255.517, 351.990 258.446, 343.580 265.439, 339.990 273.282, 339.517 281.219, 345.754 280.558, 348.778 289.063, 354.542 293.598, 365.625 296.465, 373.776 294.995, 374.712 301.009, 380.993 298.871, 388.075 293.392, 393.421 286.042, 395.292 279.360, 394.891 274.817, 389.545 275.886, 387.942 270.139, 393.421 268.803, 391.550 264.393, 372.873 259.391, 365.314 253.533, 365.975 258.257, 360.684 259.675)"],
["west bridge","orange","polygon(229.337 255.753, 227.683 264.069, 210.202 260.289, 206.942 259.769, 191.256 258.163, 192.626 249.469, 207.981 253.249, 211.100 253.722)"],
["VIB entrance","yellow","polygon(403.490 392.911, 423.853 381.336, 424.940 379.635, 429.239 380.202, 429.712 382.423, 444.264 399.951, 430.326 404.818, 422.388 405.054, 413.742 402.314, 407.742 398.628)"],
["down beast","lime","polygon(295.266 241.141, 298.206 236.063, 303.351 238.134, 306.759 235.595, 306.759 234.392, 305.088 233.724, 304.286 231.586, 305.556 228.913, 308.229 227.978, 329.476 231.385, 330.351 232.555, 332.268 240.295, 326.895 240.857, 326.624 248.223, 323.519 255.968, 314.745 263.145, 316.931 268.432, 309.857 270.129, 300.690 269.968, 297.948 248.262, 299.876 248.223, 300.144 244.214)"],
["dance tent","orange","polygon(316.744 297.397, 312.973 322.992, 331.548 325.932, 335.490 300.140)"],
["big beast","orange","polygon(475.756 247.649, 471.775 243.309, 449.948 240.194, 446.741 245.417, 443.267 245.952, 435.649 250.629, 433.244 266.799, 435.334 268.274, 436.751 270.164, 450.926 272.432, 457.068 286.039, 442.138 295.394, 446.768 302.103, 459.997 289.818, 468.123 298.417, 470.202 295.677, 485.132 300.969, 481.620 312.234, 492.310 312.101, 504.070 309.161, 505.273 289.784)"]
// dance  und dann beast aus dem converter
]
park_arr=["polygon(145.332 242.760, 152.135 228.586, 164.609 220.082, 175.948 218.003, 181.240 218.759, 185.397 186.442, 147.978 176.237, 128.323 170.378, 87.690 157.716, 51.972 148.833, 17.576 145.243, -12.662 145.432, -30.427 147.699, -48.570 153.747, -55.562 157.905, -57.830 160.929, -58.964 165.275, 1.134 266.384, 7.749 270.731, 17.009 271.865, 21.167 278.101, 26.269 286.417, 51.405 293.409, 121.141 305.504, 167.821 313.064, 171.601 288.118, 151.379 280.936, 143.820 262.226)",
"polygon(11.493 318.649, 15.769 310.631, 21.916 307.958, 31.003 307.691, 157.956 327.736, 144.860 364.886, 93.010 452.016, 56.928 432.506, 1.069 392.148)",
// Lot-5-2
"polygon(387.140 366.223, 405.982 369.697, 401.902 392.911, 405.625 399.158, 410.125 404.175, 417.475 408.050, 420.014 409.387, 408.254 470.191, 401.439 475.135, 399.434 488.365, 367.897 483.153)",
// Lot-5-1
"polygon(424.691 410.189, 439.124 406.313, 445.851 399.951, 447.409 390.010, 448.746 381.190, 469.192 384.397, 471.463 388.005, 466.519 422.216, 504.338 458.431, 512.088 467.374, 513.425 471.527, 508.213 506.406, 417.876 490.904, 420.014 478.209, 415.337 469.656)",
]
green_arr=["polygon(238.605 261.386, 243.750 260.184, 249.496 259.850, 257.113 260.852, 262.726 262.255, 268.806 265.195, 270.143 266.130, 267.069 266.999, 260.989 268.202, 257.314 268.001, 252.770 267.667, 248.761 266.799, 244.017 264.861)",
"polygon(231.656 255.239, 231.522 253.101, 234.663 253.502, 235.799 248.290, 239.674 244.482, 243.817 243.346, 249.563 244.615, 257.180 250.295, 271.479 261.386, 271.279 262.121, 266.134 258.914, 258.984 256.509, 250.899 254.705, 241.745 254.170)",
"polygon(279.029 266.932, 286.379 262.723, 289.252 266.197, 293.863 269.271, 299.342 271.743, 301.814 272.144, 297.939 275.485, 295.066 277.222, 292.727 278.291, 288.317 275.485, 282.905 271.008)",
"polygon(274.486 269.338, 278.963 273.480, 283.306 277.088, 287.181 280.095, 284.776 280.763, 281.568 281.164, 279.631 281.231, 275.889 278.558, 270.744 275.418, 264.998 272.278, 268.339 271.609, 271.880 270.340)",
"polygon(286.981 285.040, 292.192 283.503, 297.404 286.510, 304.554 289.116, 307.226 289.717, 306.825 290.318, 300.545 289.383, 291.123 286.844)",
"polygon(313.641 272.144, 318.585 278.425, 322.795 285.975, 329.811 284.572, 335.423 282.567, 335.290 275.151, 337.695 268.068, 341.637 261.587, 348.519 255.774, 344.110 253.034, 339.633 248.891, 336.693 244.682, 334.889 241.274, 334.889 246.954, 333.018 254.304, 329.476 260.718, 325.067 265.729, 320.055 269.271, 316.247 271.209)",
"polygon(324.732 290.318, 326.069 293.392, 340.635 295.730, 337.962 291.788, 336.359 287.044, 330.078 289.249)",
"polygon(320.723 292.456, 319.988 290.719, 315.979 290.986, 311.636 290.385, 311.636 290.986, 315.979 291.788)",
"polygon(402.174 305.152, 409.123 311.967, 415.070 316.444, 418.811 318.916, 422.019 314.038, 425.827 310.430, 430.103 307.290, 424.758 307.824, 418.076 307.758, 410.392 307.023)",
"polygon(425.025 322.457, 427.631 318.114, 432.242 314.172, 435.449 312.435, 438.389 319.852, 442.932 326.132, 449.681 331.478, 439.592 329.006, 430.371 325.264)",
"polygon(406.985 319.584, 416.673 326.132, 428.299 331.812, 440.059 335.019, 440.727 335.554, 438.589 335.554, 428.968 335.153, 421.751 332.280, 413.666 327.268)",
"polygon(396.762 264.660, 403.777 264.460, 410.593 262.255, 418.277 259.048, 420.949 262.188, 418.143 266.865, 416.606 273.213, 416.005 280.162, 416.940 286.576, 419.546 293.325, 424.290 299.873, 416.139 300.341, 407.853 299.071, 400.303 296.866, 393.488 292.523, 396.895 287.913, 399.234 281.365, 399.434 275.351)",
"polygon(463.682 335.506, 472.565 331.916, 479.557 327.049, 486.125 318.970, 490.519 319.442, 498.078 318.261, 494.298 322.891, 487.920 328.467, 480.738 332.341, 472.281 334.845)",
"polygon(455.178 339.286, 469.068 341.223, 481.447 340.940, 495.102 338.341, 501.055 336.971, 500.251 339.806, 502.897 341.743, 504.456 345.806, 503.228 348.216, 500.629 350.200, 497.936 350.909, 485.227 349.869, 472.517 346.137)",
"polygon(299.310 304.560, 300.869 304.371, 303.042 305.646, 304.129 308.198, 303.326 310.749, 301.342 312.119, 298.365 312.166, 296.239 310.135, 296.192 307.347, 297.845 305.079)",
]
walkway_arr=["polygon(316.948 320.887, 315.679 320.687, 319.020 300.642, 325.200 301.510, 325.635 298.904, 326.937 299.172, 326.470 301.644, 332.517 302.679, 329.243 323.092, 327.906 322.892, 331.080 303.882, 327.305 303.214, 326.837 305.753, 323.463 305.085, 323.897 302.613, 320.122 302.078)",
"polygon(504.271 282.835, 505.273 282.734, 508.380 306.354, 504.104 308.559, 500.395 309.963, 496.787 311.065, 492.544 311.867, 488.836 312.301, 484.961 312.201, 480.484 312.001, 480.684 310.664, 484.727 311.266, 488.803 311.032, 492.645 310.764, 496.286 309.796, 500.228 308.726, 503.402 307.490, 507.010 305.519)",
"polygon(479.181 246.653, 479.615 245.751, 464.782 237.766, 459.169 234.826, 459.102 231.853, 459.202 230.350, 459.737 229.882, 473.234 229.314, 473.067 228.245, 464.281 228.612, 459.236 228.846, 458.000 229.849, 457.733 231.886, 457.799 234.325, 457.298 234.893, 454.425 237.432, 451.886 240.706, 449.414 244.114, 447.576 247.021, 445.605 250.662, 446.875 251.297, 448.445 247.822, 450.550 244.548, 452.721 241.375, 455.327 238.401, 457.632 236.296, 459.102 236.163, 462.042 238.000)",
"polygon(433.066 268.156, 433.090 263.691, 434.058 256.722, 435.240 252.422, 436.775 252.730, 438.287 253.037, 437.909 254.997, 436.303 254.619, 435.523 256.722, 434.814 260.502, 434.436 264.069, 434.602 268.557)",
"polygon(472.376 320.009, 467.415 350.436, 465.950 350.106, 471.242 319.820)",
"polygon(440.484 306.119, 441.949 306.260, 432.897 348.119, 432.259 347.906, 431.621 347.694)",
"polygon(431.621 347.694, 432.897 348.119, 431.173 357.002, 427.164 381.658, 425.927 381.758, 430.237 356.367)",
"polygon(388.343 278.224, 436.317 297.601, 435.850 299.071, 388.343 279.627, 387.808 282.100, 386.405 285.240, 383.732 288.848, 378.788 292.122, 371.972 295.463, 365.558 296.265, 363.286 295.797, 360.747 311.165, 359.611 310.764, 362.083 295.864, 357.607 294.528, 352.595 292.256, 345.312 300.809, 344.510 300.074, 351.393 291.053, 349.188 289.182, 347.049 285.574, 346.248 281.432, 346.381 277.356, 347.384 272.879, 349.989 268.870, 326.537 256.041, 327.138 254.571, 350.457 267.801, 354.733 264.727, 359.077 262.322, 364.756 260.518, 370.569 259.983, 377.986 261.386, 384.066 265.061, 387.608 269.872, 388.543 273.146, 387.274 273.280, 385.737 269.605, 383.264 266.464, 379.723 263.925, 375.180 261.988, 369.433 261.386, 363.019 262.188, 357.406 264.193, 352.863 267.934, 349.856 271.342, 347.584 278.024, 348.319 284.706, 351.459 289.516, 358.275 293.392, 366.627 294.394, 373.309 293.525, 380.057 289.784, 385.403 284.171, 387.808 277.556, 387.207 273.347, 388.543 273.280)",
"polygon(344.384 300.213, 345.470 300.969, 345.140 302.197, 287.923 292.748, 284.427 290.574, 280.789 289.724, 277.293 290.716, 273.891 294.118, 273.041 294.260, 265.765 293.267, 262.930 295.441, 258.110 296.764, 254.236 295.866, 250.551 292.701, 238.739 290.763, 238.030 294.968, 236.755 295.441, 237.700 289.440, 232.408 288.448, 232.550 287.173, 237.889 288.023, 238.267 286.133, 239.448 286.417, 238.928 289.440, 251.023 291.236, 254.472 294.449, 258.299 295.252, 262.079 294.354, 265.339 291.614, 273.419 292.748, 276.017 289.913, 280.411 288.307, 285.041 289.393, 288.443 291.567, 343.911 300.733)",
"polygon(356.838 309.829, 363.821 310.898, 362.317 319.183, 355.468 318.047)",
"polygon(467.273 353.602, 472.376 355.681, 471.431 360.783, 458.107 358.327, 459.336 353.507, 465.383 353.129)",
"polygon(466.502 348.249, 466.135 350.253, 465.784 350.170, 465.383 353.129, 467.273 353.602, 467.805 350.654, 467.287 350.521, 467.571 348.466)",
]
pfeile_arr =[  "polygon(248.410 275.953, 253.372 280.312, 253.372 280.780, 251.785 282.534, 250.649 284.539, 250.181 286.877, 250.298 289.249, 251.183 291.705, 252.386 293.358, 254.274 294.979, 257.080 296.048, 259.084 296.181, 260.955 295.948, 262.876 295.179, 263.478 294.695, 263.494 294.227, 260.137 291.170, 260.137 290.920, 260.705 290.769, 274.235 288.247, 274.519 288.247, 274.653 288.431, 274.670 288.698, 273.250 302.629, 273.133 302.830, 272.865 302.796, 269.441 299.673, 269.241 299.556, 268.806 299.606, 268.556 299.756, 266.819 300.976, 264.313 302.212, 261.607 302.963, 259.168 303.197, 255.961 302.963, 252.486 301.894, 249.112 299.907, 246.205 296.900, 244.017 292.874, 243.165 289.132, 243.282 285.207, 244.268 281.582, 246.022 278.475, 247.995 276.156)",
  "polygon(272.502 292.878, 266.465 290.792, 266.072 291.016, 265.356 293.189, 264.214 295.102, 262.472 296.613, 260.422 297.649, 257.934 298.079, 255.969 297.858, 253.704 297.046, 251.464 295.198, 250.393 293.577, 249.695 291.892, 249.423 289.910, 249.543 289.173, 249.928 288.935, 254.103 290.296, 254.313 290.176, 254.168 289.627, 249.820 277.047, 249.684 276.808, 249.466 276.783, 249.233 276.897, 238.200 284.751, 238.087 284.945, 238.243 285.154, 242.507 286.539, 242.701 286.652, 242.866 287.041, 242.859 287.323, 242.665 289.367, 242.823 292.064, 243.485 294.699, 244.455 296.861, 246.185 299.445, 248.745 301.855, 252.029 303.741, 255.946 304.747, 260.377 304.662, 263.930 303.589, 267.174 301.614, 269.750 299.052, 271.523 296.092, 272.529 293.325)",
]
vib_arr=["polygon(435.716 299.606, 441.663 295.497, 445.939 301.544, 440.393 305.686)",
"polygon(435.948 255.517, 437.082 251.265, 443.697 247.391, 457.068 250.745, 458.154 252.163, 454.942 264.778, 453.430 265.628, 439.728 262.226)",
"polygon(424.845 270.211, 430.846 267.140, 435.003 267.423, 436.421 269.455, 448.658 271.770, 456.028 286.795, 443.461 294.260, 435.523 299.457, 431.696 299.221, 426.168 292.370, 423.428 286.369, 422.955 278.337)",
"polygon(440.437 305.741, 458.816 291.047, 468.596 300.638, 484.565 303.662, 479.888 318.734, 474.833 323.742, 470.817 326.340, 465.714 327.758, 458.532 328.136, 451.540 325.868, 445.823 321.805, 442.138 316.230, 440.059 311.032, 439.917 308.906)",
"polygon(327.233 240.965, 329.973 240.871, 330.068 245.028, 328.839 250.698, 328.178 252.493, 331.485 254.005, 328.083 259.864, 325.438 258.068, 323.737 260.053, 320.807 262.604, 316.839 264.778, 315.610 265.344, 314.760 263.077, 320.146 259.675, 323.737 255.706, 326.099 250.414, 327.611 244.839)",
]
med_arr=[{grid:[444.205,337.821],capacity:[4,22]},
{grid:  [429.627,239.988],capacity:[3,24]},
{ grid: [226.360,265.321],capacity:[12,24]},
{ grid: [228.515,253.769],capacity:[1,57]},
{ grid: [307.862,280.086],capacity:[9,24]},
  {grid:[411.522,274.038],capacity:[10,57]},
]
block_arr=[
"polygon(351.990 298.937, 356.691 301.229, 357.140 300.732, 356.550 300.378, 357.447 298.606, 353.786 296.882, 353.006 298.559, 352.345 298.252)",
"polygon(238.872 274.349, 256.345 274.148, 254.908 279.995, 257.347 279.293, 259.719 279.527, 261.991 280.429, 264.296 282.200, 265.566 284.238, 271.880 280.129, 281.268 286.977, 280.065 288.113, 280.666 288.614, 281.802 287.646, 288.183 291.421, 289.085 291.554, 288.451 290.719, 276.724 282.434, 272.448 279.360, 269.107 277.122, 260.454 273.915, 257.681 273.280, 239.542 273.754)",
"polygon(297.337 281.031, 300.879 278.959, 303.551 276.487, 307.560 273.146, 307.961 272.946, 310.834 275.886, 314.175 280.429, 317.917 286.309, 316.247 286.576, 312.572 286.176, 308.696 285.841, 304.687 284.572, 300.411 282.902)",
"polygon(274.033 294.401, 276.726 290.952, 280.128 289.582, 283.529 290.007, 286.081 291.330, 287.593 293.078, 288.916 296.386, 288.868 299.173, 287.829 301.394, 285.608 303.615, 283.813 304.749, 281.356 305.126, 278.852 304.607, 276.868 303.709, 274.836 301.866, 273.749 300.024, 273.513 297.425, 273.607 295.252)",
"polygon(339.766 281.498, 349.923 279.093, 350.724 275.752, 351.860 272.879, 354.065 270.273, 356.738 267.868, 361.482 265.596, 359.077 255.640, 354.533 257.177, 350.992 259.582, 347.183 262.656, 343.642 266.665, 340.368 273.280, 339.499 279.761)",
"polygon(365.491 254.371, 367.696 264.059, 373.776 264.594, 379.389 266.732, 382.797 270.073, 383.198 270.941, 393.488 268.803, 391.149 264.326, 385.336 263.591, 379.857 262.055, 373.910 259.649, 368.966 256.642)",
"polygon(372.507 290.719, 374.845 300.608, 380.659 298.737, 387.073 293.793, 392.084 287.779, 393.888 283.302, 394.891 276.821, 394.891 275.017, 384.400 277.222, 383.131 281.565, 381.126 285.775, 378.520 287.779, 374.578 289.917)",
"polygon(401.439 268.068, 413.666 269.738, 412.597 275.685, 412.464 281.365, 413.533 287.445, 415.738 293.993, 416.940 295.396, 414.535 296.332, 407.720 294.661, 397.563 292.590, 400.236 287.646, 402.174 282.167, 402.642 277.623, 402.976 273.413)",
"polygon(296.903 297.935, 298.173 301.443, 300.244 300.875, 302.449 301.310, 304.086 302.078, 304.420 302.412, 306.358 299.539, 304.220 298.069, 301.179 297.568, 299.008 297.535)",
"polygon(306.491 304.684, 309.431 302.813, 310.434 304.250, 311.336 308.092, 310.500 312.769, 308.663 315.542, 304.620 318.448, 300.344 319.183, 295.934 318.482, 292.560 316.043, 294.865 313.170, 297.271 314.773, 299.876 315.375, 303.084 314.974, 305.690 313.070, 307.193 310.297, 307.694 307.557, 306.491 304.684)",
"polygon(465.336 254.289, 467.935 249.611, 468.927 249.989, 468.360 251.407, 469.163 252.021, 468.407 253.722, 467.415 253.533, 466.564 254.667)",
"polygon(464.627 256.509, 465.903 256.746, 465.761 258.399, 466.659 258.494, 466.470 260.714, 465.289 260.667, 465.005 262.085, 463.730 262.037, 464.627 256.509)",
"polygon(464.060 266.337, 469.163 265.108, 470.817 270.305, 472.281 274.463, 473.368 276.259, 484.660 268.416, 485.699 265.675, 488.959 270.022, 485.747 269.360, 474.218 277.392, 477.951 281.456, 483.526 284.952, 481.305 289.535, 477.195 287.787, 472.281 283.771, 468.690 279.330, 466.139 274.038)",
"polygon(485.211 290.168, 484.944 291.254, 489.972 292.106, 490.323 291.020, 488.886 290.669, 488.786 289.784, 486.882 289.366, 486.631 290.368)",
"polygon(492.310 291.254, 492.878 292.607, 498.057 291.371, 497.506 290.084, 496.052 290.485, 495.885 289.383, 493.914 289.800, 494.031 290.652)",
"polygon(322.012 274.274, 326.193 271.841, 327.776 272.148, 330.800 277.369, 329.548 279.377, 326.382 281.574, 324.682 281.054, 321.705 275.857)",
"polygon(336.233 251.454, 338.856 254.903, 342.163 257.360, 341.549 259.037, 339.635 260.431, 336.682 264.707, 331.698 261.612, 334.911 255.139)",
"polygon(250.197 260.218, 255.228 260.620, 259.363 261.470, 258.536 268.085, 253.693 267.825, 249.252 266.904)",
"polygon(431.540 319.050, 433.311 318.415, 439.024 321.856, 439.424 323.226, 437.420 326.633, 435.783 326.867, 430.438 323.994, 429.903 322.290)",
"polygon(480.818 327.034, 487.032 319.685, 490.139 320.252, 491.776 322.424, 491.676 324.295, 483.658 329.874)",
]
hinter = "polygon(171.412 228.511, 181.145 246.559, 211.383 253.930, 224.234 255.064, 229.243 255.536, 231.510 255.252, 231.510 253.079, 231.699 249.110, 233.400 245.709, 235.952 242.685, 237.180 242.307, 248.614 244.008, 253.717 246.654, 260.331 252.512, 261.465 253.174, 266.001 247.504, 275.167 253.079, 270.158 259.599, 272.804 261.867, 273.655 261.017, 278.190 261.867, 292.837 253.741, 293.215 250.717, 294.349 249.205, 296.995 248.354, 298.696 249.677, 300.019 248.354, 300.302 244.480, 302.192 239.661, 306.633 236.448, 306.822 234.842, 305.216 234.180, 304.082 232.196, 304.932 229.834, 307.011 228.133, 320.429 230.117, 334.792 232.196, 339.895 236.070, 342.446 240.417, 342.919 241.078, 354.069 239.094, 361.818 248.921, 364.842 248.921, 368.716 249.016, 375.519 254.402, 377.504 249.536, 386.764 253.268, 384.402 258.182, 393.190 259.505, 393.142 254.071, 404.789 253.103, 405.379 258.276, 413.506 255.536, 410.624 250.670, 418.703 246.181, 424.599 239.103, 428.530 243.819, 434.295 239.094, 442.043 235.976, 451.493 236.259, 458.485 236.826, 468.785 242.307, 471.147 239.378, 474.833 238.622, 477.762 240.511, 478.707 244.102, 476.722 247.598, 476.061 248.165, 501.858 285.018, 506.110 283.412, 508.850 284.735, 510.457 287.664, 509.984 290.971, 508.000 292.767, 505.449 293.806, 507.433 310.532, 507.149 317.619, 505.354 320.075, 500.984 325.296, 500.960 327.588, 524.182 324.493, 520.473 301.649, 514.048 270.655, 505.543 239.189, 481.825 222.747, 416.908 220.195, 268.174 202.430, 194.752 186.650, 186.815 232.952)" 
hinter2 = "polygon(501.574 336.725, 505.543 338.899, 507.433 343.245, 507.622 348.537, 504.504 352.411, 500.724 354.207, 498.834 354.207, 498.740 355.719, 498.929 351.183, 487.022 350.616, 478.045 348.159, 442.894 335.402, 436.279 336.064, 429.003 335.308, 420.971 332.284, 412.845 326.331, 410.482 323.591, 406.986 319.622, 400.749 313.952, 395.930 314.897, 390.544 312.157, 389.127 306.960, 382.228 305.542, 375.897 306.487, 373.629 317.826, 369.377 316.882, 371.173 307.338, 366.637 308.283, 362.290 307.810, 356.810 306.865, 352.746 305.637, 351.329 313.102, 343.864 311.968, 345.281 302.235, 335.737 300.629, 331.296 325.669, 313.153 322.646, 317.311 297.510, 312.114 297.227, 312.019 308.188, 310.224 315.748, 305.310 319.149, 298.790 320.189, 296.333 319.811, 292.365 316.882, 295.105 313.385, 287.734 301.574, 284.522 304.219, 281.876 305.070, 277.718 304.408, 276.490 303.841, 275.072 311.779, 273.655 314.519, 259.575 316.787, 249.937 317.165, 243.228 315.370, 241.905 316.787, 235.763 314.519, 229.432 303.274, 230.376 296.282, 225.274 295.242, 226.880 285.415, 232.833 285.888, 235.952 277.667, 234.912 275.682, 239.542 273.887, 232.361 266.327, 227.920 264.437, 208.737 260.280, 187.098 258.390, 179.633 257.823, 164.609 271.335, 180.673 271.997, 173.680 314.047, 272.899 330.772, 430.798 356.947, 449.603 360.254, 460.280 352.600, 474.164 354.935, 481.731 364.129, 519.812 371.783, 529.434 362.066, 524.823 331.169, 501.705 335.351)"
nonstage="polygon(229.271 263.010, 234.345 255.612, 240.582 248.430, 247.763 248.241, 253.244 251.454, 263.638 257.879, 271.765 265.439, 279.702 265.250, 287.073 260.336, 294.254 259.013, 296.900 269.597, 309.751 273.565, 322.792 267.518, 336.966 251.643, 350.573 249.186, 370.039 252.777, 383.457 259.958, 403.112 262.793, 427.680 251.643, 432.783 251.643, 426.357 265.061, 417.475 272.432, 419.176 298.134, 437.696 318.167, 455.461 331.018, 471.147 329.317, 483.999 321.379, 500.062 323.080, 491.936 346.326, 449.603 335.554, 424.278 329.317, 398.954 309.095, 383.835 302.481, 365.314 303.804, 366.637 291.330, 380.622 284.905, 383.079 274.888, 373.063 266.951, 362.479 267.140, 354.164 275.833, 357.943 288.874, 364.369 290.007, 366.590 291.425, 365.267 303.567, 344.510 298.470, 315.645 293.258, 309.097 292.724, 305.623 303.147, 303.885 309.562, 298.139 311.165, 292.259 304.617, 291.591 289.650, 266.284 273.754, 243.984 269.597)"
 





      

  