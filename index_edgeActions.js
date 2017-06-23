/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("#Stage").css("margin","auto")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_flags_brasil}", "click", function(sym, e) {
         sym.$("texto").html("Em breve o mais completo site de classificados de acompanhantes e entretenimento masculino de São Paulo. Curta o @PeekClub nas redes sociais e espie sem moderação!");
         sym.$("idioma").html("Escolha seu idioma");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_flags_eua}", "click", function(sym, e) {
         sym.$("texto").html("Soon the most complete website of escorts and men's entertainment of São Paulo. Enjoy @PeekClub on social networks and spy without moderation!");
         sym.$("idioma").html("Choose your language");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_flags_spain}", "click", function(sym, e) {
         sym.$("texto").html("En breve el más completo sitio de clasificados de acompañantes y entretenimiento masculino de São Paulo.¡Corta el @PeekClub en las redes sociales y espía sin moderación!");
         sym.$("idioma").html("Seleccione su idioma");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CONTATO'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_contato_icon}", "mouseover", function(sym, e) {
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contato_icon}", "mouseout", function(sym, e) {
         sym.playReverse("volta");

      });
      //Edge binding end

   })("CONTATO");
   //Edge symbol end:'CONTATO'

   //=========================================================
   
   //Edge symbol: 'YOUTUBE'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_canal_icon}", "mouseover", function(sym, e) {
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_canal_icon}", "mouseout", function(sym, e) {
         sym.playReverse("volta");
         

      });
      //Edge binding end

   })("YOUTUBE");
   //Edge symbol end:'YOUTUBE'

   //=========================================================
   
   //Edge symbol: 'FANPAGE'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_facebook_icon}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_facebook_icon}", "mouseout", function(sym, e) {
         sym.playReverse("volta");

      });
      //Edge binding end

   })("FANPAGE");
   //Edge symbol end:'FANPAGE'

   //=========================================================
   
   //Edge symbol: 'RADIO'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_radio_icon}", "mouseover", function(sym, e) {
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_radio_icon}", "mouseout", function(sym, e) {
         sym.playReverse("volta");
         

      });
      //Edge binding end

   })("RADIO");
   //Edge symbol end:'RADIO'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         window.open("http://www.peekclub.com.br", "_self");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1222, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "mouseover", function(sym, e) {
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "mouseout", function(sym, e) {
         sym.playReverse("volta");

      });
      //Edge binding end

   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'modelo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo}", "mouseover", function(sym, e) {
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo}", "mouseout", function(sym, e) {
         sym.playReverse("volta");
         

      });
      //Edge binding end

   })("modelo");
   //Edge symbol end:'modelo'

   //=========================================================
   
   //Edge symbol: 'modelo_loira'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo_loira}", "mouseover", function(sym, e) {
         sym.play("loop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo_loira}", "mouseout", function(sym, e) {
         sym.playReverse("endloop");
         

      });
      //Edge binding end

   })("modelo_loira");
   //Edge symbol end:'modelo_loira'

   //=========================================================
   
   //Edge symbol: 'loira'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo_loira_big}", "mouseover", function(sym, e) {
         sym.play("loop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_modelo_loira_big}", "mouseout", function(sym, e) {
         sym.playReverse("endloop");
         

      });
      //Edge binding end

   })("loira");
   //Edge symbol end:'loira'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-1349620");