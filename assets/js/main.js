
var list;
$(document).ready(function() {
    $.getJSON("concept_list.json", function(json) {
	list = json;
	for (var cat in list){
	    for (var concept in list[cat].list){	    
		console.log("concepts/"+list[cat].list[concept]+".json");
		(function (ccat, cconcept){
		    $.getJSON("concepts/"+list[cat].list[concept]+".json", function(cjson) {
			console.log(cjson);
			list[ccat].list[cconcept] = cjson;
			updateConcepts();
			updateDefinitions();
		    });
		})(cat,concept);		
	    }
	}
	
	
    });
});

function makeID(name){
    return name.toLowerCase().replace(/ /g,"_");
}

function updateConcepts(){
    var st = "<h2>Concepts</h2><ul>";
    for (var cat in list){	
	st+='<li><a href="#'+makeID(cat)+'">'+cat+'</a><ul>';	
	for (var concept in list[cat].list){		
	    if (list[cat].list[concept].title)
		st+='<li style="margin-bottom: 8px;"><a href="#'+makeID(list[cat].list[concept].title)+'">'+list[cat].list[concept].title+'</a></li>'
	}
	st+='</ul>';
    }
    st += '</ul>';	
    $("#conceptpanel").html(st);
}

function updateDefinitions(){
    var st = "";
    for (var cat in list){	
	st+='<h2 id="'+makeID(cat)+'">'+cat+'</h2>'
	for (var concept in list[cat].list){		
	    st +='<p class="conceptdefinition">';
	    if (list[cat].list[concept].title && list[cat].list[concept].overview){
		st+='<h3 id="'+makeID(list[cat].list[concept].title)+'">'+list[cat].list[concept].title+'</h3>';
		st+='<p><span class="paralabel">General definition:</span> '+list[cat].list[concept].overview+'</p>';
	    }
	    st+= '</p>';		
	}
	st+='</ul>';
    }
    st += '</ul>';	
    $("#conceptdefinitions").html(st);
}
