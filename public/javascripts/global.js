$(document).ready(
            function()
              { $("#txt_name").click(function() 
                              { $("#txt_name").val("");
                                            });
                                      
                $("#txt_id").click(function() 
                              { $("#txt_id").val(""); 
                              });
                $("#flip").click(function()  
                              { $("#panel").slideToggle("slow");
                              });
                $("#btn_get").click(function()
                              {
                                $.get("/bears", function(data, status){
                                     //alert("Here are all the bears !");
                                     //$("#div1").load("http://localhost:8000/bears");
                                     //console.log(data);
                                     //alert(data[0]._id);
                                     //alert(data[0].name);
                                     $("#1_id").html(data[0]._id);
                                     $("#1_name").html(data[0].name);
                                     $("#2_id").html(data[1]._id);
                                     $("#2_name").html(data[1].name);
                                     $("#3_id").html(data[2]._id);
                                     $("#3_name").html(data[2].name);
                                     //$("#4_id").html(data[3]._id);
                                     //$("#4_name").html(data[3].name);
                                     /*$("#5_id").html(data[4]._id);
                                     $("#5_name").html(data[4].name);
                                     $("#6_id").html(data[5]._id);
                                     $("#6_name").html(data[5].name);
                                     $("#7_id").html(data[6]._id);
                                     $("#7_name").html(data[6].name);
                                     $("#8_id").html(data[7]._id);
                                     $("#8_name").html(data[7].name);
                                     $("#9_id").html(data[8]._id);
                                     $("#9_name").html(data[8].name);
                                     $("#10_id").html(data[9]._id);
                                     $("#10_name").html(data[9].name);*/
                                     });
                              });
                $("#btn_post").click(function()
                              { console.log($("#txt_name").val());
                                $.post("/bears",
                                  { 
                                      //var bear = new Bear();
                                      name : $("#txt_name").val()
                                  }, function(data, status){
                                  alert("Bear Created !");
                              });                                              
                                });
                $("#btn_delete").click(function()
                                {
                                   /*$.delete("/bears/" + txt_id.val(),
                                   function(data,status)
                                   {
                                     alert("Successfully Deleted !");
                                   });*/
                                   $.ajax({
                                          url: '/bears/'+ $("#txt_id").val(),
                                          type: 'DELETE',
                                          success: function(result) {
                                              // Do something with the result
                                              alert("Successfully Deleted :)");
                                          }
                                      });
                                });
                $("#btn_put").click(function()
                                {
                                  $.ajax({
                                          url: '/bears/'+ $("#txt_id").val(),
                                          type: 'PUT',
                                          success: function(result) {
                                              // Do something with the result
                                              $("#txt_name").val()
                                              alert("Successfully Updated :)");
                                          }
                                      });
                                    $.post("/bears",
                                      { 
                                      //var bear = new Bear();
                                      name : $("#txt_name").val()
                                  }, function(data, status){
                                  alert("Bear Created !");
                              }); 
                                })
                });

