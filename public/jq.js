$(function() {  
    $('#header').fadeTo(2000, 0.1);	
    $( "#dialog:ui-dialog" ).dialog( "destroy" );
		$( "#save" ).button({
			text: true,
			icons: {
				primary: "ui-icon-disk"
			}
		});
		$( "#save" ).click(function(){		  
  	  $( "#dialog-message" ).dialog("option", "autoOpen", true );
  	  $( "#dialog-message" ).dialog( "open" );
  	  return false;
  	});
  	$( "#save" ).next().button({
    	text: false,
			icons: {
				primary: "ui-icon-triangle-1-s"
			}
		});
		$( "#save" ).next().parent().buttonset();
		
		
		
		$( "#draft" ).button({
			text: false,
			icons: {
				primary: "ui-icon-check"
			}
		});
		$( "#delete" ).button({
			text: false,
			icons: {
				primary: "ui-icon-trash"
			}
		});
		$( "#edit" ).button({
  		text: true,
    	icons: {
				primary: "ui-icon-pencil"
  		}
  	});
  	$( "#markprivate" ).button({
  		text: false,
    	icons: {
				primary: "ui-icon-unlocked",
  		}
  	});
  	
  	$( "#markprivate" ).click(function(){
  	  if($( this ).attr('checked')){
  	      $( this ).button( "option", "icons", {primary:'ui-icon-locked'} ); 
  	    } else {
  	      $( this ).button( "option", "icons", {primary:'ui-icon-unlocked'} ); 
  	    }	
  	});  	
  	$( "#edit" ).click(function(){
  	  if($( this ).attr('checked')){
  	      $( "#editbar" ).show("blind");
  	    } else {
  	      $( "#editbar" ).hide("blind");
  	    }	
  	});
  	$( "#dialog-message" ).dialog({
  	      autoOpen: false,
    			modal: true,
    			title: "Save",
    			buttons: [
    			    {
                  text: "Save",
                  click: function() { $(this).dialog("close"); }
              },
              {
                  text: "Cancel",
                  click: function() { $(this).dialog("close"); }
              }
          ]
    });   
  	
	});