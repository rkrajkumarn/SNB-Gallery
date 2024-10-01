(function(){
    var script = {
 "start": "this.playAudioList([this.audio_57475B35_449E_5502_41BF_A3C01843D235]); this.init(); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList])",
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.thumbnaillist5245",
  {
   "overflow": "scroll",
   "children": [
    "this.Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718"
   ],
   "left": "0%",
   "backgroundOpacity": 0.3,
   "paddingLeft": 0,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "width": "100%",
   "borderRadius": 0,
   "scrollBarVisible": "rollOver",
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "propagateClick": false,
   "minHeight": 1,
   "backgroundColorRatios": [
    0,
    1
   ],
   "horizontalAlign": "center",
   "scrollBarColor": "#000000",
   "bottom": "0%",
   "verticalAlign": "middle",
   "height": 92,
   "minWidth": 1,
   "layout": "horizontal",
   "class": "Container",
   "backgroundColorDirection": "vertical",
   "paddingTop": 0,
   "gap": 6,
   "scrollBarMargin": 2,
   "backgroundColor": [
    "#FFFFFF",
    "#FFFFFF"
   ],
   "shadow": false,
   "paddingBottom": 0,
   "visible": false,
   "data": {
    "name": "Container29432"
   },
   "creationPolicy": "inAdvance",
   "contentOpaque": false
  },
  "this.Image_4A88E10B_445F_3286_41B0_066EF33C1B8A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "defaultVRPointer": "laser",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "height": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.32,
 "hideDuration": 500,
 "yaw": -0.99,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_50960885_44A5_3383_41D0_C3F760BC9A3A",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.95,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5904D725_4862_2E3B_41D1_DA21CCAF57D2",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_54701BF3_449A_5505_41AD_302A12D044DF",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -117.13,
   "backwardYaw": 113.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_5470011F_44A6_553E_41A9_A2F34C991D28",
 "thumbnailUrl": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_t.jpg",
 "label": "SNB_Digital Gallery_05",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4B2210A1_44A6_F302_41BB_4F34E24CFBCB",
  "this.overlay_54BB13F3_44B9_D506_41A1_F48D36F8954A",
  "this.overlay_54E9449A_44BA_D306_41B4_729DE965A425",
  "this.overlay_54C3DC5F_44BA_533E_418C_D5368061994C",
  "this.overlay_55689837_44BB_D30D_41C2_E8153EA53995",
  "this.overlay_542EF85E_44BA_533E_41C7_5C94E6F214C2",
  "this.overlay_56572977_44BA_750E_41C5_042873FFD4FB",
  "this.popup_54664813_44BE_5306_41CB_4B7A95ADC42F",
  "this.overlay_55849126_44BE_550E_41CA_8293CC33D1BA",
  "this.popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C",
  "this.popup_45F81AA2_4866_2639_41BC_246D831434D3"
 ]
},
{
 "id": "ImageResource_547840B0_44B9_D302_41C7_BAD1554D5D9A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.78,
 "hideDuration": 500,
 "yaw": 99.54,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.88,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_589C86F2_4862_2E19_41C9_3E11A6A4BCAF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496",
   "camera": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5922B71A_4862_2E09_41BA_785AF255B520",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -66.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_5791EE6B_44E6_AF06_41CE_5D9D16F14F36",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_57475B35_449E_5502_41BF_A3C01843D235.mp3",
  "oggUrl": "media/audio_57475B35_449E_5502_41BF_A3C01843D235.ogg",
  "class": "AudioResource"
 },
 "id": "audio_57475B35_449E_5502_41BF_A3C01843D235",
 "data": {
  "label": "SNB MAIN BRAND TRACK Master"
 },
 "class": "MediaAudio"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B"
  },
  {
   "yaw": 118.01,
   "backwardYaw": -87.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_56BC552B_449E_DD06_41C1_514D5CCB7496",
 "thumbnailUrl": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_t.jpg",
 "label": "SNB_Digital Gallery_06",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_546601D8_449E_B502_41C8_DCB12F951882",
  "this.overlay_550F6DED_449E_6D1D_41D0_2C08E9FE4B2B",
  "this.overlay_56C634CF_449B_B31E_41B0_D42B0BD74F12",
  "this.overlay_5462EC19_449A_5302_41D0_6879671B41DE",
  "this.overlay_57D7CC30_449A_D302_4196_B171A005341F",
  "this.overlay_552A195B_44E6_7506_41AC_A4859E2CD49F",
  "this.overlay_57AD3E8E_44E6_AF1E_41A7_7E49D4D8883A",
  "this.overlay_57EB3B6F_44E7_F51E_41C9_CEA0219900C0",
  "this.popup_54700BF3_449A_5505_41CB_8797F0E59CDD",
  "this.popup_57F31C0C_449A_D302_41C6_191044DEE1CD",
  "this.popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5885A6DC_4862_2E0A_41CF_263679B21473",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 62.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_597FA707_4862_2E06_41D1_0D1606DE76D8",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_596F36FD_4862_2E0B_41C6_710928954F64",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -87.69,
   "backwardYaw": 118.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496",
   "distance": 1
  },
  {
   "yaw": 103.86,
   "backwardYaw": 30.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_5536924A_44A5_3686_41AE_07F60E3C9C90",
 "thumbnailUrl": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_t.jpg",
 "label": "SNB_Digital Gallery_03",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_55E2505B_44AB_1286_41C9_9D88A615BC22",
  "this.overlay_55293108_44AD_1282_41C5_AEA58D4A7EA3",
  "this.overlay_5005A40B_44AB_1285_41BC_428F08936AC5",
  "this.popup_50960885_44A5_3383_41D0_C3F760BC9A3A",
  "this.overlay_534F584E_44BD_729E_41C2_C6C4F773DF21",
  "this.overlay_5BE81DFA_44AB_0D86_41C9_8073C1406AB4",
  "this.overlay_48723EB7_449B_AF0E_41C1_674A02388DB1",
  "this.popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 113.49,
   "backwardYaw": -117.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28",
   "distance": 1
  },
  {
   "yaw": -110.96,
   "backwardYaw": -30.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "distance": 1
  },
  {
   "yaw": -110.96,
   "backwardYaw": -30.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B",
 "thumbnailUrl": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_t.jpg",
 "label": "SNB_Digital Gallery_04",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5D00D3C5_44AB_1582_41B7_0E263C677BD8",
  "this.overlay_58ACB34E_44AD_1681_41C1_B70FD57C5026",
  "this.overlay_5F30A334_44AD_1682_41A0_AB0896714C79",
  "this.overlay_58E8897B_44AF_1286_41BD_A537A7038D8E",
  "this.popup_5F1FF2F8_44AD_1782_41CF_C055EBD544D2",
  "this.popup_58F50946_44AF_128E_41B0_7CD71D391546",
  "this.overlay_4AE0068B_449E_5F06_41C5_900E2F890A20",
  "this.overlay_4916FDF5_449A_6D0D_41C7_2D2D39D8E3D2",
  "this.popup_5687B475_44BA_5302_418D_25BAF020847D",
  "this.popup_4645D2D8_4866_E609_41BD_B36286ECDC94"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.76,
 "hideDuration": 500,
 "yaw": -77.67,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_45F81AA2_4866_2639_41BC_246D831434D3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45F81AA2_4866_2639_41BC_246D831434D3_0_2.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.88,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_57F3AC0C_449A_D302_41C7_E4C8082B665B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5916F72A_4862_2E09_41BF_B52E5E54A1AF",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -76.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_52F42638_44A6_BF02_41C6_18041BBAF656",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.83,
   "backwardYaw": -0.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB",
   "distance": 1
  },
  {
   "yaw": -30.47,
   "backwardYaw": -110.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B",
   "distance": 1
  },
  {
   "yaw": 30.66,
   "backwardYaw": 103.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
 "thumbnailUrl": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_t.jpg",
 "label": "SNB_Digital Gallery_02",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_49E2D3AE_4465_159E_41C2_C64EE18FC4B5",
  "this.overlay_4A67B79B_4465_1D86_41CF_83949F435D32",
  "this.overlay_4AD87AAD_4467_7782_41C9_C4107419310F"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59520714_4862_2E1A_41CE_8ECF7F2F6C00",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
 "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonPlayRight": "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayLeft": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
 "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
 "buttonMoveUp": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
 "buttonMoveDown": "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
 "buttonMoveLeft": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
 "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
 "mouseControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5941570D_4862_2E0A_41CF_B91719489EAD",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -149.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.54,
 "hideDuration": 500,
 "yaw": -1,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_54664813_44BE_5306_41CB_4B7A95ADC42F",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.65,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5934A71F_4862_2E07_419B_8D8BF5D5B4A7",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_588B66E7_4862_2E06_41C9_AF1E174F1D05",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_547EB0AF_44B9_D31E_41A6_25E474DC125A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_54664813_44BE_5306_41CB_4B7A95ADC42F_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_5A1FDD7B_4861_E20E_41B2_50B37B25D771",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_4645D2D8_4866_E609_41BD_B36286ECDC94_0_0.jpg",
   "width": 1950,
   "class": "ImageResourceLevel",
   "height": 2835
  },
  {
   "url": "media/popup_4645D2D8_4866_E609_41BD_B36286ECDC94_0_1.jpg",
   "width": 1408,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4645D2D8_4866_E609_41BD_B36286ECDC94_0_2.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4645D2D8_4866_E609_41BD_B36286ECDC94_0_3.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_5A183D7B_4861_E20E_41C8_4BFD59650A45",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_45F81AA2_4866_2639_41BC_246D831434D3_0_0.jpg",
   "width": 1950,
   "class": "ImageResourceLevel",
   "height": 2835
  },
  {
   "url": "media/popup_45F81AA2_4866_2639_41BC_246D831434D3_0_1.jpg",
   "width": 1408,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_45F81AA2_4866_2639_41BC_246D831434D3_0_2.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_45F81AA2_4866_2639_41BC_246D831434D3_0_3.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "thumbnaillist5245_playlist",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.33,
 "hideDuration": 500,
 "yaw": -67.67,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.99,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.78,
 "hideDuration": 500,
 "yaw": 74.7,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_5687B475_44BA_5302_418D_25BAF020847D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5687B475_44BA_5302_418D_25BAF020847D_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.53,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "id": "ImageResource_51C52921_44A5_3282_4168_484E2F9DD34D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_50960885_44A5_3383_41D0_C3F760BC9A3A_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -0.26,
   "backwardYaw": 179.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB",
 "thumbnailUrl": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_t.jpg",
 "label": "SNB_Digital Gallery_01",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4945E2BF_446B_F7FE_41BD_B4FC012B822E"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.76,
 "hideDuration": 500,
 "yaw": 76.11,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_57F31C0C_449A_D302_41C6_191044DEE1CD",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57F31C0C_449A_D302_41C6_191044DEE1CD_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.08,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5470011F_44A6_553E_41A9_A2F34C991D28_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_52F1D637_44A6_BF0E_41AF_FBAB91FD1338",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_0.jpg",
   "width": 3900,
   "class": "ImageResourceLevel",
   "height": 5666
  },
  {
   "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_1.jpg",
   "width": 2819,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_2.jpg",
   "width": 1409,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_3.jpg",
   "width": 704,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C_0_4.jpg",
   "width": 352,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.67,
 "hideDuration": 500,
 "yaw": 0.87,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_4645D2D8_4866_E609_41BD_B36286ECDC94",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4645D2D8_4866_E609_41BD_B36286ECDC94_0_2.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.19,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.53,
 "hideDuration": 500,
 "yaw": -0.12,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_54700BF3_449A_5505_41CB_8797F0E59CDD",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54700BF3_449A_5505_41CB_8797F0E59CDD_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.13,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.79,
 "hideDuration": 500,
 "yaw": -100.87,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.02,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 4,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeight": 20,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 2,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 113,
 "bottom": 111,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "id": "thumbnaillist5245",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemLabelHorizontalAlign": "center",
 "scrollBarWidth": 10,
 "itemMode": "normal",
 "right": 9,
 "borderRadius": 5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#FFFFFF",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Arial",
 "verticalAlign": "top",
 "minWidth": 0,
 "itemLabelGap": 5,
 "itemBorderRadius": 0,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowOpacity": 0.8,
 "itemThumbnailWidth": 100,
 "class": "ThumbnailList",
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemThumbnailBorderRadius": 5,
 "itemThumbnailShadowSpread": 1,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemThumbnailShadowVerticalLength": 3,
 "itemPaddingRight": 3,
 "itemBackgroundColorRatios": [],
 "maxHeight": 800,
 "backgroundOpacity": 0.2,
 "paddingRight": 20,
 "itemBackgroundOpacity": 0,
 "itemLabelTextDecoration": "none",
 "borderSize": 0,
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "top": 84,
 "itemThumbnailShadowBlurRadius": 4,
 "bottom": 100,
 "itemLabelFontSize": 14,
 "playList": "this.thumbnaillist5245_playlist",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#FFFFFF",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "gap": 10,
 "itemThumbnailHeight": 75,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "itemVerticalAlign": "middle",
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList28173"
 },
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowColor": "#000000",
 "visible": false,
 "itemThumbnailShadow": true,
 "maxWidth": 800
},
{
 "overflow": "hidden",
 "children": [
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
  "this.Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
  "this.Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3"
 ],
 "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 468,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 468,
 "layout": "horizontal",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container1194"
 },
 "contentOpaque": false,
 "height": "93.478%"
},
{
 "maxHeight": 195,
 "id": "Image_4A88E10B_445F_3286_41B0_066EF33C1B8A",
 "left": "2.79%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "13.795%",
 "borderRadius": 0,
 "url": "skin/Image_4A88E10B_445F_3286_41B0_066EF33C1B8A.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.79%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "height": "7.419%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image5043"
 },
 "maxWidth": 594
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "UIComponent4379"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "backgroundColor": [],
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage4380"
 },
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "paddingRight": 5,
 "right": 10,
 "borderRadius": 0,
 "iconHeight": 20,
 "borderSize": 0,
 "iconColor": "#000000",
 "propagateClick": false,
 "minHeight": 0,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "horizontalAlign": "center",
 "iconLineWidth": 5,
 "mode": "push",
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "class": "CloseButton",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "iconBeforeLabel": true,
 "paddingTop": 5,
 "label": "",
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "iconWidth": 20,
 "visible": false,
 "data": {
  "name": "CloseButton4381"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "shadowBlurRadius": 6,
 "shadowSpread": 1
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 38,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
 "minWidth": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "height": 38,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1199"
 },
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_546F80A7_44B9_D30E_4197_50D7E5BF5BCA",
   "yaw": 118.01,
   "pitch": -22.86,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4B2210A1_44A6_F302_41BB_4F34E24CFBCB",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.29,
   "yaw": 118.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B, this.camera_5922B71A_4862_2E09_41BA_785AF255B520); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_546F40A7_44B9_D30E_41D0_8F65803375F5",
   "yaw": -117.13,
   "pitch": -23.73,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_54BB13F3_44B9_D506_41A1_F48D36F8954A",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.13,
   "yaw": -117.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54664813_44BE_5306_41CB_4B7A95ADC42F, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_547EB0AF_44B9_D31E_41A6_25E474DC125A, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.8,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_546EE0A8_44B9_D302_41B3_A383AE948D01",
   "yaw": -1,
   "pitch": 6.65,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_54E9449A_44BA_D306_41B4_729DE965A425",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_45F81AA2_4866_2639_41BC_246D831434D3, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_5A183D7B_4861_E20E_41C8_4BFD59650A45, null, null, 15000, this.audio_57475B35_449E_5502_41BF_A3C01843D235, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_546EA0A8_44B9_D302_41BF_6D853BD9BB53",
   "yaw": -77.67,
   "pitch": 4.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_54C3DC5F_44BA_533E_418C_D5368061994C",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.82,
   "yaw": -77.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_541EACFB_44BE_D306_41CB_1DEC2C90C06C, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_547840B0_44B9_D302_41C7_BAD1554D5D9A, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_546E60A8_44B9_D302_41B4_5F7E3A5E4E38",
   "yaw": 99.54,
   "pitch": 3.88,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_55689837_44BB_D30D_41C2_E8153EA53995",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.83,
   "yaw": 99.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0_HS_5_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 3.72,
   "yaw": 99.59,
   "distance": 50
  }
 ],
 "id": "overlay_542EF85E_44BA_533E_41C7_5C94E6F214C2",
 "data": {
  "label": "2"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.29,
   "yaw": 99.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_6_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 4.77,
   "yaw": -77.65,
   "distance": 50
  }
 ],
 "id": "overlay_56572977_44BA_750E_41C5_042873FFD4FB",
 "data": {
  "label": "4"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.29,
   "yaw": -77.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_6_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.28,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_7_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 6.43,
   "yaw": -1.02,
   "distance": 50
  }
 ],
 "id": "overlay_55849126_44BE_550E_41CA_8293CC33D1BA",
 "data": {
  "label": "3"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.28,
   "yaw": -1.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90, this.camera_596F36FD_4862_2E0B_41C6_710928954F64); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_53ABEBFB_44E6_D506_41BA_84DDC4980FCD",
   "yaw": 118.01,
   "pitch": -22.86,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_546601D8_449E_B502_41C8_DCB12F951882",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.29,
   "yaw": 118.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_53AB8BFB_44E6_D506_4195_801B9CD4EBCC",
   "yaw": -117.13,
   "pitch": -23.73,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_550F6DED_449E_6D1D_41D0_2C08E9FE4B2B",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.13,
   "yaw": -117.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_2_0.png",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 40
     }
    ]
   },
   "pitch": 6.13,
   "yaw": -0.06,
   "distance": 50
  }
 ],
 "id": "overlay_56C634CF_449B_B31E_41B0_D42B0BD74F12",
 "data": {
  "label": "2"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.64,
   "yaw": -0.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_2_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 35
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54700BF3_449A_5505_41CB_8797F0E59CDD, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_54701BF3_449A_5505_41AD_302A12D044DF, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_53AA1BFB_44E6_D506_4164_4DD660BCA589",
   "yaw": -0.12,
   "pitch": 6.13,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5462EC19_449A_5302_41D0_6879671B41DE",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.63,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57F31C0C_449A_D302_41C6_191044DEE1CD, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_57F3AC0C_449A_D302_41C7_E4C8082B665B, null, null, 15000, this.audio_576B69C8_44AC_F581_41C6_6BAD1490E451, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 8.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_53AADBFB_44E6_D506_41A4_C46BB1393889",
   "yaw": 76.11,
   "pitch": 5.08,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_57D7CC30_449A_D302_4196_B171A005341F",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 76.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_5_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 4.97,
   "yaw": 76.1,
   "distance": 50
  }
 ],
 "id": "overlay_552A195B_44E6_7506_41AC_A4859E2CD49F",
 "data": {
  "label": "1"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.29,
   "yaw": 76.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57912E6B_44E6_AF06_41C4_B2B58E173BDE, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_5791EE6B_44E6_AF06_41CE_5D9D16F14F36, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_53AD4BFD_44E6_D502_41C2_1D7A7C3CD1B2",
   "yaw": -100.87,
   "pitch": 4.02,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_57AD3E8E_44E6_AF1E_41A7_7E49D4D8883A",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.56,
   "yaw": -100.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_7_0.png",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 3.8,
   "yaw": -100.78,
   "distance": 50
  }
 ],
 "id": "overlay_57EB3B6F_44E7_F51E_41C9_CEA0219900C0",
 "data": {
  "label": "3"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.24,
   "yaw": -100.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB, this.camera_5941570D_4862_2E0A_41CF_B91719489EAD); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_676DD446_44AD_3281_41B4_FFFB882EE38F",
   "yaw": 103.86,
   "pitch": -14.27,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_55E2505B_44AB_1286_41C9_9D88A615BC22",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.37,
   "yaw": 103.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56BC552B_449E_DD06_41C1_514D5CCB7496, this.camera_597FA707_4862_2E06_41D1_0D1606DE76D8); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 30.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B46915_44A5_3282_41D0_97B8B16B4D36",
   "yaw": -87.69,
   "pitch": -22.95,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_55293108_44AD_1282_41C5_AEA58D4A7EA3",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 30.87,
   "yaw": -87.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_50960885_44A5_3383_41D0_C3F760BC9A3A, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_51C52921_44A5_3282_4168_484E2F9DD34D, null, null, 15000, this.audio_576B69C8_44AC_F581_41C6_6BAD1490E451, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B44915_44A5_3282_41CE_63588DECBBF7",
   "yaw": -0.99,
   "pitch": 5.95,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5005A40B_44AB_1285_41BC_428F08936AC5",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": -0.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5638ABFB_44A6_7506_41C0_A66E70FE1F3C, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_52F1D637_44A6_BF0E_41AF_FBAB91FD1338, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_676A8446_44AD_328E_41C5_F8F4F1D4498B",
   "yaw": -67.67,
   "pitch": 4.99,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_534F584E_44BD_729E_41C2_C6C4F773DF21",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": -67.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_4_0.png",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ]
   },
   "pitch": 3.39,
   "yaw": -66.51,
   "distance": 50
  }
 ],
 "id": "overlay_5BE81DFA_44AB_0D86_41C9_8073C1406AB4",
 "data": {
  "label": "2"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.45,
   "yaw": -66.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_4_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_5_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 5.68,
   "yaw": -0.98,
   "distance": 50
  }
 ],
 "id": "overlay_48723EB7_449B_AF0E_41C1_674A02388DB1",
 "data": {
  "label": "1"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.33,
   "yaw": -0.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB, this.camera_589C86F2_4862_2E19_41C9_3E11A6A4BCAF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 17.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_676B1447_44AD_328F_41CF_A5DB2FB53918",
   "yaw": -110.96,
   "pitch": -14.44,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5D00D3C5_44AB_1582_41B7_0E263C677BD8",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.67,
   "yaw": -110.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5470011F_44A6_553E_41A9_A2F34C991D28, this.camera_5885A6DC_4862_2E0A_41CF_263679B21473); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_676BB447_44AD_328F_41B5_AC1E7C4B5CD7",
   "yaw": 113.49,
   "pitch": -21.65,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_58ACB34E_44AD_1681_41C1_B70FD57C5026",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.51,
   "yaw": 113.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_4645D2D8_4866_E609_41BD_B36286ECDC94, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_5A1FDD7B_4861_E20E_41B2_50B37B25D771, null, null, 15000, this.audio_57475B35_449E_5502_41BF_A3C01843D235, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4ADD5E91_449A_AF05_41B2_30CE8ECE3016",
   "yaw": 0.87,
   "pitch": 7.19,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5F30A334_44AD_1682_41A0_AB0896714C79",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.48,
   "yaw": 0.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5687B475_44BA_5302_418D_25BAF020847D, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBorderSize':0,'pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','iconHeight':20,'borderSize':0,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'borderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','iconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderSize':0}, this.ImageResource_52F42638_44A6_BF02_41C6_18041BBAF656, null, null, 15000, this.audio_4B38DD12_44AE_ED06_41A3_781C1E7D40E0, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4ADD0E91_449A_AF05_41C1_6F45453EF1CD",
   "yaw": 74.7,
   "pitch": 4.53,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_58E8897B_44AF_1286_41BD_A537A7038D8E",
 "data": {
  "label": "Circle Generic 03"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.56,
   "yaw": 74.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.68,
 "hideDuration": 500,
 "yaw": 0.87,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_5F1FF2F8_44AD_1782_41CF_C055EBD544D2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5F1FF2F8_44AD_1782_41CF_C055EBD544D2_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.19,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.78,
 "hideDuration": 500,
 "yaw": 74.7,
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "id": "popup_58F50946_44AF_128E_41B0_7CD71D391546",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_58F50946_44AF_128E_41B0_7CD71D391546_0_3.jpg",
    "width": 704,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.53,
 "rotationZ": 0,
 "popupMaxHeight": "95%",
 "popupDistance": 100
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_4_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 4.42,
   "yaw": 74.65,
   "distance": 50
  }
 ],
 "id": "overlay_4AE0068B_449E_5F06_41C5_900E2F890A20",
 "data": {
  "label": "3"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.3,
   "yaw": 74.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_5_0.png",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 47
     }
    ]
   },
   "pitch": 6.91,
   "yaw": 0.82,
   "distance": 50
  }
 ],
 "id": "overlay_4916FDF5_449A_6D0D_41C7_2D2D39D8E3D2",
 "data": {
  "label": "4"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.29,
   "yaw": 0.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_5_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 30
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5536924A_44A5_3686_41AE_07F60E3C9C90, this.camera_5916F72A_4862_2E09_41BF_B52E5E54A1AF); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 26.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B74914_44A5_3282_41C7_B472C57DA1EF",
   "yaw": 30.66,
   "pitch": -16.96,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_49E2D3AE_4465_159E_41C2_C64EE18FC4B5",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.26,
   "yaw": 30.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B, this.camera_5904D725_4862_2E3B_41D1_DA21CCAF57D2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 26.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B70915_44A5_3282_41C9_B3E6E0AAF6B6",
   "yaw": -30.47,
   "pitch": -17.31,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4A67B79B_4465_1D86_41CF_83949F435D32",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.21,
   "yaw": -30.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB, this.camera_5934A71F_4862_2E07_419B_8D8BF5D5B4A7); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 25.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B7E915_44A5_3282_41A4_49C5E97FD549",
   "yaw": 179.83,
   "pitch": -23.73,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4AD87AAD_4467_7782_41C9_C4107419310F",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.13,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1205"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1207"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 38,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
 "height": 38,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1198"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 38,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
 "height": 38,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1196"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1208"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1203"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1204"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 30,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
 "height": 30,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1201"
 },
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 38,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
 "class": "IconButton",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
 "height": 38,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button1195"
 },
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB, this.camera_59520714_4862_2E1A_41CE_8ECF7F2F6C00); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 22.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51B6D913_44A5_3286_418F_58F682BB554C",
   "yaw": -0.26,
   "pitch": -19.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4945E2BF_446B_F7FE_41BD_B4FC012B822E",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.25,
   "yaw": -0.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "overflow": "hidden",
 "children": [
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
  "this.Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
 ],
 "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 133,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "horizontal",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 5,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container1200"
 },
 "contentOpaque": false,
 "height": "100%"
},
{
 "overflow": "hidden",
 "children": [
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 ],
 "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 85,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "horizontal",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container1206"
 },
 "contentOpaque": false,
 "height": "100%"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_546F80A7_44B9_D30E_4197_50D7E5BF5BCA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_546F40A7_44B9_D30E_41D0_8F65803375F5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_546EE0A8_44B9_D302_41B3_A383AE948D01",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_546EA0A8_44B9_D302_41BF_6D853BD9BB53",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_546E60A8_44B9_D302_41B4_5F7E3A5E4E38",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5470011F_44A6_553E_41A9_A2F34C991D28_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53ABEBFB_44E6_D506_41BA_84DDC4980FCD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53AB8BFB_44E6_D506_4195_801B9CD4EBCC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53AA1BFB_44E6_D506_4164_4DD660BCA589",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53AADBFB_44E6_D506_41A4_C46BB1393889",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_53AD4BFD_44E6_D502_41C2_1D7A7C3CD1B2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56BC552B_449E_DD06_41C1_514D5CCB7496_1_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_676DD446_44AD_3281_41B4_FFFB882EE38F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B46915_44A5_3282_41D0_97B8B16B4D36",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B44915_44A5_3282_41CE_63588DECBBF7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_676A8446_44AD_328E_41C5_F8F4F1D4498B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5536924A_44A5_3686_41AE_07F60E3C9C90_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_676B1447_44AD_328F_41CF_A5DB2FB53918",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_676BB447_44AD_328F_41B5_AC1E7C4B5CD7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4ADD5E91_449A_AF05_41B2_30CE8ECE3016",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4ADD0E91_449A_AF05_41C1_6F45453EF1CD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FC3F9D2_44A5_1586_4193_41B96C977F8B_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B74914_44A5_3282_41C7_B472C57DA1EF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B70915_44A5_3282_41C9_B3E6E0AAF6B6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B7E915_44A5_3282_41A4_49C5E97FD549",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4E064BB8_446F_3581_41B7_426CA94D0CEB_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B6D913_44A5_3286_418F_58F682BB554C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FEA3BBD_446F_15FD_41BD_3EDC887C36AB_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "overflow": "hidden",
 "children": [
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
  "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
 ],
 "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 47,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 20,
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "layout": "vertical",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container1202"
 },
 "contentOpaque": false,
 "height": "100%"
}],
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "class": "Player",
 "downloadEnabled": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "data": {
  "name": "Player28156"
 },
 "contentOpaque": false,
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
