/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg_peekclub',
            type:'image',
            rect:['32px','18px','1024px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_peekclub.jpg",'0px','0px']
         },
         {
            id:'Symbol_1',
            type:'rect',
            rect:['468','348','auto','auto','auto','auto']
         },
         {
            id:'loira',
            type:'rect',
            rect:['203','149','auto','auto','auto','auto']
         },
         {
            id:'copyright',
            type:'text',
            rect:['264px','741px','auto','auto','auto','auto'],
            text:"Copyright © 2014 - 2017 PeekClub | Todos os direitos reservados | PeekClub Network",
            font:['Arial, Helvetica, sans-serif',13,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.648438)",3,3,3]
         },
         {
            id:'idioma',
            type:'text',
            rect:['472px','574px','auto','auto','auto','auto'],
            text:"Escolha seu idioma",
            align:"center",
            font:['Arial, Helvetica, sans-serif',14,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.648438)",3,3,3]
         },
         {
            id:'texto',
            type:'text',
            rect:['454px','440px','266px','104px','auto','auto'],
            clip:['rect(0px 429px 92px 0px)'],
            text:"Em breve o mais completo site de classificados de acompanhantes e entretenimento masculino de São Paulo.<br>Curta o @PeekClub nas redes sociais e espie sem moderação!<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',14,"rgba(255,255,255,1.00)","normal","none",""],
            textShadow:["rgba(0,0,0,0.65)",3,3,3],
            transform:[]
         },
         {
            id:'flags_spain',
            type:'image',
            rect:['539px','582px','92px','64px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"flags_spain.png",'0px','0px'],
            transform:[[],[],[],['0.47','0.47']]
         },
         {
            id:'flags_brasil',
            type:'image',
            rect:['444px','582px','92px','64px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"flags_brasil.png",'0px','0px'],
            transform:[[],[],[],['0.47','0.47']]
         },
         {
            id:'flags_eua',
            type:'image',
            rect:['490px','582px','95px','64px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"flags_eua.png",'0px','0px'],
            transform:[[],[],[],['0.47','0.47']]
         }],
         symbolInstances: [
         {
            id:'Symbol_1',
            symbolName:'Symbol_1'
         },
         {
            id:'loira',
            symbolName:'loira'
         }
         ]
      },
   states: {
      "Base State": {
         "${_texto}": [
            ["style", "line-height", '17px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "left", '468px'],
            ["transform", "scaleY", '1'],
            ["style", "clip", [0,267,106,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "width", '265px'],
            ["style", "top", '450px'],
            ["style", "text-align", 'left'],
            ["style", "opacity", '0'],
            ["style", "height", '104.30000305176px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "font-size", '14px'],
            ["style", "right", 'auto']
         ],
         "${_flags_eua}": [
            ["style", "top", '581.96px'],
            ["transform", "scaleY", '0.47'],
            ["transform", "scaleX", '0.47'],
            ["style", "opacity", '0'],
            ["style", "left", '489.77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_flags_spain}": [
            ["style", "top", '581.96px'],
            ["transform", "scaleY", '0.47'],
            ["transform", "scaleX", '0.47'],
            ["style", "opacity", '0'],
            ["style", "left", '539px'],
            ["style", "cursor", 'pointer']
         ],
         "${_flags_brasil}": [
            ["style", "top", '581.62px'],
            ["transform", "scaleY", '0.47'],
            ["transform", "scaleX", '0.47'],
            ["style", "opacity", '0'],
            ["style", "left", '443.62px'],
            ["style", "cursor", 'pointer']
         ],
         "${_copyright}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "right", 'auto'],
            ["style", "left", '264px'],
            ["style", "font-size", '13px'],
            ["style", "top", '741px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "opacity", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "min-width", '640px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_idioma}": [
            ["subproperty", "textShadow.blur", '3px'],
            ["subproperty", "textShadow.offsetH", '3px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "right", 'auto'],
            ["style", "left", '472px'],
            ["style", "font-size", '14px'],
            ["style", "top", '574.01px'],
            ["style", "text-align", 'center'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.648438)'],
            ["subproperty", "textShadow.offsetV", '3px'],
            ["style", "opacity", '0']
         ],
         "${_bg_peekclub}": [
            ["style", "top", '18px'],
            ["style", "opacity", '0'],
            ["style", "left", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid93", tween: [ "style", "${_texto}", "clip", [0,265,106,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,267,106,0]}], position: 1500, duration: 250 },
            { id: "eid60", tween: [ "style", "${_flags_brasil}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeInQuad" },
            { id: "eid56", tween: [ "style", "${_flags_eua}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeInQuad" },
            { id: "eid8", tween: [ "style", "${_texto}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 278, easing: "easeInQuad" },
            { id: "eid97", tween: [ "style", "${_texto}", "width", '265px', { fromValue: '265px'}], position: 1750, duration: 0 },
            { id: "eid62", tween: [ "style", "${_flags_spain}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeInQuad" },
            { id: "eid76", tween: [ "style", "${_texto}", "font-size", '14px', { fromValue: '14px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_idioma}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeInQuad" },
            { id: "eid71", tween: [ "style", "${_texto}", "left", '468px', { fromValue: '468px'}], position: 1222, duration: 0, easing: "easeInQuad" },
            { id: "eid82", tween: [ "style", "${_bg_peekclub}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "style", "${_texto}", "top", '450px', { fromValue: '450px'}], position: 1222, duration: 0, easing: "easeInQuad" },
            { id: "eid88", tween: [ "style", "${_texto}", "top", '450px', { fromValue: '450px'}], position: 1750, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"CONTATO": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','46px','auto','auto','auto','auto'],
      id: 'copyrightCopy5',
      text: 'CONTATO',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      type: 'image',
      id: 'contato_icon',
      rect: ['7px','0px','47px','30px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/contato_icon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_copyrightCopy5}": [
            ["style", "top", '46.03px'],
            ["style", "opacity", '0'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_contato_icon}": [
            ["style", "top", '0px'],
            ["style", "height", '30.03194961382px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '7px'],
            ["style", "width", '47px']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.033325195313px'],
            ["style", "width", '63px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ida": 1750,
            "volta": 2000
         },
         timeline: [
            { id: "eid27", tween: [ "style", "${_copyrightCopy5}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250, easing: "easeOutQuart" }         ]
      }
   }
},
"YOUTUBE": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','62px','auto','auto','auto','auto'],
      id: 'copyrightCopy4',
      text: 'YOUTUBE',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      type: 'image',
      id: 'canal_icon',
      rect: ['8px','0px','46px','46px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/canal_icon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_copyrightCopy4}": [
            ["style", "top", '62px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '700'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "right", 'auto'],
            ["style", "left", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_canal_icon}": [
            ["style", "top", '0px'],
            ["style", "height", '46px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px'],
            ["style", "width", '46px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ida": 1750,
            "volta": 2000
         },
         timeline: [
            { id: "eid25", tween: [ "style", "${_copyrightCopy4}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250, easing: "easeOutQuart" }         ]
      }
   }
},
"FANPAGE": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','62px','auto','auto','auto','auto'],
      id: 'copyrightCopy3',
      text: 'FANPAGE',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      type: 'image',
      id: 'facebook_icon',
      rect: ['22px','0px','25px','49px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/facebook_icon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_facebook_icon}": [
            ["style", "top", '0px'],
            ["style", "height", '48.908046196247px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '22px'],
            ["style", "width", '25px']
         ],
         "${_copyrightCopy3}": [
            ["style", "top", '62px'],
            ["style", "opacity", '0'],
            ["style", "right", 'auto'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ida": 1750,
            "volta": 2000
         },
         timeline: [
            { id: "eid17", tween: [ "style", "${_copyrightCopy3}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250, easing: "easeOutQuart" }         ]
      }
   }
},
"RADIO": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['6px','62px','auto','auto','auto','auto'],
      id: 'copyrightCopy2',
      text: 'RADIO',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      type: 'image',
      id: 'radio_icon',
      rect: ['0px','0px','53px','46px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/radio_icon.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_copyrightCopy2}": [
            ["style", "top", '62px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '700'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "right", 'auto'],
            ["style", "left", '6px'],
            ["style", "font-size", '13px']
         ],
         "${_radio_icon}": [
            ["style", "top", '0px'],
            ["style", "height", '46.449438202247px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "width", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "ida": 1750,
            "volta": 2000
         },
         timeline: [
            { id: "eid29", tween: [ "style", "${_copyrightCopy2}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250, easing: "easeOutQuart" }         ]
      }
   }
},
"logo": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'logo',
      rect: ['0px','-13px','282px','63px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/logo_peekclubhorizontal_positivo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '63.266666412354px'],
            ["style", "width", '282px']
         ],
         "${_logo}": [
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "right", 'auto'],
            ["style", "left", '0px'],
            ["style", "width", '282px'],
            ["style", "top", '0.02px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '63.272787825788px'],
            ["style", "cursor", 'pointer'],
            ["style", "clip", [0,282,63.266666412353516,72], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "ida": 1222,
            "volta": 1500
         },
         timeline: [
            { id: "eid43", tween: [ "transform", "${_logo}", "scaleY", '1.05', { fromValue: '1'}], position: 1222, duration: 278, easing: "easeOutQuart" },
            { id: "eid4", tween: [ "style", "${_logo}", "top", '-118.72px', { fromValue: '0.02px'}], position: 0, duration: 778, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "transform", "${_logo}", "scaleX", '1.05', { fromValue: '1'}], position: 1222, duration: 278, easing: "easeOutQuart" },
            { id: "eid5", tween: [ "style", "${_logo}", "clip", [0,282,63.266666412353516,72], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,282,63.266666412353516,72]}], position: 0, duration: 0, easing: "easeOutQuart" },
            { id: "eid6", tween: [ "style", "${_logo}", "clip", [0,282,63.266666412353516,-2], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,282,63.266666412353516,72]}], position: 1000, duration: 222, easing: "easeOutQuart" },
            { id: "eid2", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 444, easing: "easeOutQuad" }         ]
      }
   }
},
"modelo": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'modelo',
      type: 'image',
      rect: ['0px','-135px','158px','336px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/modelo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_modelo}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '335.89785064861px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '158px']
         ],
         "${symbolSelector}": [
            ["style", "height", '335.88333129883px'],
            ["style", "width", '158px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "ida": 1750,
            "volta": 2000
         },
         timeline: [
            { id: "eid52", tween: [ "transform", "${_modelo}", "scaleY", '1.1', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutQuart" },
            { id: "eid50", tween: [ "style", "${_modelo}", "top", '-135px', { fromValue: '0px'}], position: 1222, duration: 528, easing: "easeOutQuart" },
            { id: "eid48", tween: [ "style", "${_modelo}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeOutQuart" },
            { id: "eid51", tween: [ "transform", "${_modelo}", "scaleX", '1.1', { fromValue: '1'}], position: 1750, duration: 250, easing: "easeOutQuart" }         ]
      }
   }
},
"modelo_loira": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},{},{},['0.6','0.6']],
      id: 'modelo_loira',
      type: 'image',
      rect: ['-66px','-132px','329px','659px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/modelo_loira.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '395.4px'],
            ["style", "width", '197.4px']
         ],
         "${_modelo_loira}": [
            ["style", "top", '-131.8px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "opacity", '0'],
            ["style", "left", '-65.78px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         labels: {
            "loop": 1750,
            "endloop": 2250
         },
         timeline: [
            { id: "eid67", tween: [ "style", "${_modelo_loira}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_modelo_loira}", "scaleY", '0.65', { fromValue: '0.6'}], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "transform", "${_modelo_loira}", "scaleX", '0.65', { fromValue: '0.6'}], position: 1750, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"loira": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-174px','-349px','657px','1318px','auto','auto'],
      id: 'modelo_loira_big',
      transform: [{},{},{},['0.47','0.47']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/modelo_loira_big.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_modelo_loira_big}": [
            ["style", "top", '-153.27px'],
            ["transform", "scaleY", '0.47'],
            ["transform", "scaleX", '0.47'],
            ["style", "opacity", '0'],
            ["style", "left", '-174.1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '619.46px'],
            ["style", "width", '308.79px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         labels: {
            "loop": 1750,
            "endloop": 2250
         },
         timeline: [
            { id: "eid80", tween: [ "transform", "${_modelo_loira_big}", "scaleY", '0.5', { fromValue: '0.47'}], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_modelo_loira_big}", "opacity", '1', { fromValue: '0'}], position: 1222, duration: 528, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "transform", "${_modelo_loira_big}", "scaleX", '0.5', { fromValue: '0.47'}], position: 1750, duration: 500, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_modelo_loira_big}", "top", '-349.28px', { fromValue: '-153.27px'}], position: 1222, duration: 528, easing: "easeInQuad" }         ]
      }
   }
},
"Symbol_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-66px','-138px','292px','274px','auto','auto'],
      id: 'logo_novo',
      transform: [{},{},{},['0.55','0.55']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/logo_novo.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_logo_novo}": [
            ["style", "top", '-61.65px'],
            ["transform", "scaleY", '0.55'],
            ["transform", "scaleX", '0.55'],
            ["style", "opacity", '0'],
            ["style", "left", '-65.68px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150.7px'],
            ["style", "width", '160.6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid86", tween: [ "style", "${_logo_novo}", "top", '-137.65px', { fromValue: '-61.65px'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_logo_novo}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInQuad" },
            { id: "eid90", tween: [ "transform", "${_logo_novo}", "scaleY", '0.55', { fromValue: '0.55'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid89", tween: [ "transform", "${_logo_novo}", "scaleX", '0.55', { fromValue: '0.55'}], position: 1000, duration: 0, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1349620");
